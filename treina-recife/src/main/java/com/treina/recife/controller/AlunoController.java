package com.treina.recife.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

import com.treina.recife.exception.AlunoNaoEncontradoException;
import com.treina.recife.model.Aluno;
import com.treina.recife.service.AlunoLocalService;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AlunoController {

    @PostMapping(path = "/v1/alunos")
    public @ResponseBody Aluno adicionarAluno(@RequestBody Aluno aluno) {
        return alunoLocalService.adicionarNovoAluno(aluno);
    }

    @GetMapping(path = "/v1/alunos")
    public @ResponseBody Page<Aluno> obterAlunos(
            @RequestParam(value = "page", defaultValue = "0") String page,
            @RequestParam(value = "size", defaultValue = "5") String size) {

        Pageable pageable = PageRequest.of(Integer.parseInt(page), Integer.parseInt(size));

        return alunoLocalService.obterAlunos(pageable);
    }

    @GetMapping(path = "/v1/alunos/{id}")
    public @ResponseBody Aluno obterAlunoPeloId(@PathVariable("id") String id) {
        try {
            return alunoLocalService.obterAlunoPeloId(Integer.parseInt(id));
        } catch (AlunoNaoEncontradoException e) {
            _log.error(e.getMessage());
        }

        // TODO: Retornar mensagem do exception e Status Code (404)
        return null;
    }

    @PutMapping(path = "/v1/alunos/{id}")
    public @ResponseBody Aluno atualizarAluno(@PathVariable("id") String id, @RequestBody Aluno aluno) {
        return alunoLocalService.atualizarAluno(Integer.parseInt(id), aluno);
    }

    @DeleteMapping(path = "/v1/alunos/{id}")
    public void deletarAluno(@PathVariable("id") String id) {
        alunoLocalService.deletarAluno(Integer.parseInt(id));
    }

    @GetMapping(path = "/v1/alunos/busca/{nome}")
    public @ResponseBody Page<Aluno> obterAlunosPeloNome(
            @RequestParam(value = "page", defaultValue = "0") String page,
            @RequestParam(value = "size", defaultValue = "10") String size,
            @PathVariable("nome") String nome) {

        Pageable pageable = PageRequest.of(Integer.parseInt(page), Integer.parseInt(size));

        return alunoLocalService.buscarAlunoPeloNome(pageable, nome);
    }

    @Autowired
    private AlunoLocalService alunoLocalService;

    private static final Logger _log = LoggerFactory.getLogger(AlunoController.class);

}
