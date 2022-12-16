package com.treina.recife.controller;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.treina.recife.model.Professor;
import com.treina.recife.service.ProfessorLocalService;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ProfessorController {

    @PostMapping(path = "/v1/professores")
    public @ResponseBody Professor adicionarProfessor(@RequestBody Professor professor) {
        return professorLocalService.adicionarNovoProfessor(professor);
    }

    @GetMapping(path = "/v1/professores")
    public @ResponseBody Page<Professor> obterProfessores(
            @RequestParam(value = "page", defaultValue = "0") String page,
            @RequestParam(value = "size", defaultValue = "5") String size) {

        Pageable pageable = PageRequest.of(Integer.parseInt(page), Integer.parseInt(size));

        return professorLocalService.obterProfessores(pageable);
    }

    @GetMapping(path = "/v1/professores/{id}")
    public @ResponseBody Professor obterProfessorPeloId(@PathVariable("id") String id) {
        return professorLocalService.obterProfessorPeloId(Integer.parseInt(id));
    }

    @PutMapping(path = "/v1/professores/{id}")
    public @ResponseBody Professor atualizarProfessor(@PathVariable("id") String id, @RequestBody Professor professor) {
        return professorLocalService.atualizarProfessor(Integer.parseInt(id), professor);
    }

    @DeleteMapping(path = "/v1/professores/{id}")
    public void deletarProfessor(@PathVariable("id") String id) {
        professorLocalService.deletarProfessor(Integer.parseInt(id));
    }

    @GetMapping(path = "/v1/professores/busca/{nome}")
    public @ResponseBody Page<Professor> obterProfessoresPeloNome(
            @RequestParam(value = "page", defaultValue = "0") String page,
            @RequestParam(value = "size", defaultValue = "10") String size,
            @PathVariable("nome") String nome) {

        Pageable pageable = PageRequest.of(Integer.parseInt(page), Integer.parseInt(size));

        return professorLocalService.buscarProfessorPeloNome(pageable, nome);
    }

    @Autowired
    private ProfessorLocalService professorLocalService;

}
