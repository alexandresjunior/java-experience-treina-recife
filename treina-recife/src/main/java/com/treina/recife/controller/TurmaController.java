package com.treina.recife.controller;

import java.io.IOException;
import java.util.List;
import java.util.NoSuchElementException;

import javax.servlet.http.HttpServletResponse;
import com.lowagie.text.DocumentException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import com.treina.recife.model.Aluno;
import com.treina.recife.model.Turma;
import com.treina.recife.service.PdfService;
import com.treina.recife.service.TurmaLocalService;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin(origins = "http://localhost:3000")
public class TurmaController {

    @PostMapping(path = "/v1/turmas")
    public @ResponseBody Turma adicionarTurma(@RequestBody Turma turma) {
        return turmaLocalService.adicionarNovaTurma(turma);
    }

    @GetMapping(path = "/v1/turmas")
    public @ResponseBody Page<Turma> obterTurmas(
            @RequestParam(value = "page", defaultValue = "0") String page,
            @RequestParam(value = "size", defaultValue = "5") String size) {

        Pageable pageable = PageRequest.of(Integer.parseInt(page), Integer.parseInt(size));

        return turmaLocalService.obterTurmas(pageable);
    }

    @GetMapping(path = "/v1/turmas/{id}")
    public @ResponseBody Turma obterTurmaPeloId(@PathVariable("id") String id) {
        return turmaLocalService.obterTurmaPeloId(Integer.parseInt(id));
    }

    @PutMapping(path = "/v1/turmas/{id}")
    public @ResponseBody Turma atualizarTurma(@PathVariable("id") String id, @RequestBody Turma turma) {
        return turmaLocalService.atualizarTurma(Integer.parseInt(id), turma);
    }

    @DeleteMapping(path = "/v1/turmas/{id}")
    public void deletarTurma(@PathVariable("id") String id) {
        turmaLocalService.deletarTurma(Integer.parseInt(id));
    }

    @GetMapping("v1/gerarAta/{id}")
    public ResponseEntity<ByteArrayResource> downloadPDFResource(@PathVariable("id") String id, HttpServletResponse response) 
            throws DocumentException, IOException  {
        Turma turma = turmaLocalService.obterTurmaPeloId(Integer.valueOf(id));

        response.setContentType("application/pdf");
        String headerkey = "Content-Disposition";
        
        String headervalue = "attachment; filename=ata-" + turma.getCurso().getNome() + ".pdf";
        response.setHeader(headerkey, headervalue);
        List<Aluno> listaDeAlunos = turma.getAlunos();
        PdfService generator = new PdfService();
        String nomeCurso =  turma.getCurso().getNome();
        return generator.generate(listaDeAlunos, response, nomeCurso);

    }
    
    @Autowired
    private TurmaLocalService turmaLocalService;

}
