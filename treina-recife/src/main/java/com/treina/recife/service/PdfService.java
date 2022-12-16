package com.treina.recife.service;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletResponse;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;

import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.Font;
import com.lowagie.text.FontFactory;
import com.lowagie.text.PageSize;
import com.lowagie.text.Paragraph;
import com.lowagie.text.Phrase;
import com.lowagie.text.pdf.CMYKColor;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;
import com.treina.recife.model.Aluno;

public class PdfService {

    public ResponseEntity<ByteArrayResource> generate(List <Aluno> listaDeAlunos, HttpServletResponse response, String nomeCurso) throws DocumentException, IOException {
  
      // Creating the Object of Document
      Document document = new Document(PageSize.A4);
  
      // Getting instance of PdfWriter
      PdfWriter.getInstance(document, response.getOutputStream());
  
      // Opening the created document to change it
      document.open();
  
      // Creating font
      // Setting font style and size
      Font fontTiltle = FontFactory.getFont(FontFactory.TIMES_ROMAN);
      fontTiltle.setSize(20);
  
      DateFormat dateFormat = new SimpleDateFormat("dd/MM/YYYY");
      String currentDate = dateFormat.format(new Date());
      // Creating paragraph
      Paragraph paragraph1 = new Paragraph("Ata de presença - " + nomeCurso + " (" + currentDate + ")" , fontTiltle);
  
      // Aligning the paragraph in the document
      paragraph1.setAlignment(Paragraph.ALIGN_CENTER);
  
      // Adding the created paragraph in the document
      document.add(paragraph1);
  
      // Creating a table of the 4 columns
      PdfPTable table = new PdfPTable(2);
  
      // Setting width of the table, its columns and spacing
      table.setWidthPercentage(100f);
      table.setWidths(new int[] {4,8});
      table.setSpacingBefore(10);
  
      // Create Table Cells for the table header
      PdfPCell cell = new PdfPCell();
  
      // Setting the background color and padding of the table cell
      cell.setBackgroundColor(CMYKColor.gray);
      cell.setPadding(5);
  
      // Creating font
      // Setting font style and size
      Font font = FontFactory.getFont(FontFactory.TIMES_ROMAN);
      font.setColor(CMYKColor.WHITE);
  
      // Adding headings in the created table cell or  header
  
      // Adding Cell to table
      cell.setPhrase(new Phrase("Nome", font));
      table.addCell(cell);
      cell.setPhrase(new Phrase("Assinatura", font));
      table.addCell(cell);
  
      // Iterating the list of students
      for (Aluno aluno: listaDeAlunos) {
          table.addCell(aluno.getNome());
          table.addCell("");
      }
  
      // Adding the created table to the document
      document.add(table);
  
      // Closing the document
      document.close();
  
      return ResponseEntity.ok()
                  .header(HttpHeaders.CONTENT_DISPOSITION,"attachment:filename=ata")
                  .body(new ByteArrayResource(null, document.toString()));
  
  
         
    }
  
  }