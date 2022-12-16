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

import com.treina.recife.model.Curso;
import com.treina.recife.service.CursoLocalService;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin(origins = "http://localhost:3000")
public class CursoController {

    @PostMapping(path = "/v1/cursos")
    public @ResponseBody Curso adicionarCurso(@RequestBody Curso curso) {
        return cursoLocalService.adicionarNovoCurso(curso);
    }

    @GetMapping(path = "/v1/cursos")
    public @ResponseBody Page<Curso> obterCursos(
            @RequestParam(value = "page", defaultValue = "0") String page,
            @RequestParam(value = "size", defaultValue = "5") String size) {

        Pageable pageable = PageRequest.of(Integer.parseInt(page), Integer.parseInt(size));

        return cursoLocalService.obterCursos(pageable);
    }

    @GetMapping(path = "/v1/cursos/{id}")
    public @ResponseBody Curso obterCursoPeloId(@PathVariable("id") String id) {
        return cursoLocalService.obterCursoPeloId(Integer.parseInt(id));
    }

    @PutMapping(path = "/v1/cursos/{id}")
    public @ResponseBody Curso atualizarCurso(@PathVariable("id") String id, @RequestBody Curso curso) {
        return cursoLocalService.atualizarCurso(Integer.parseInt(id), curso);
    }

    @DeleteMapping(path = "/v1/cursos/{id}")
    public void deletarCurso(@PathVariable("id") String id) {
        cursoLocalService.deletarCurso(Integer.parseInt(id));
    }

    @GetMapping(path = "/v1/cursos/busca/{nome}")
    public @ResponseBody Page<Curso> obterCursosPeloNome(
            @RequestParam(value = "page", defaultValue = "0") String page,
            @RequestParam(value = "size", defaultValue = "10") String size,
            @PathVariable("nome") String nome) {

        Pageable pageable = PageRequest.of(Integer.parseInt(page), Integer.parseInt(size));

        return cursoLocalService.buscarCursoPeloNome(pageable, nome);
    }

    @Autowired
    private CursoLocalService cursoLocalService;

}
