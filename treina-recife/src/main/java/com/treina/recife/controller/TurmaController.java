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

import com.treina.recife.model.Turma;
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
    public Page<Turma> obterTurmas(
            @RequestParam(value = "page", defaultValue = "0") String page,
            @RequestParam(value = "size", defaultValue = "5") String size) {

        Pageable pageable = PageRequest.of(Integer.parseInt(page), Integer.parseInt(size));

        return turmaLocalService.obterTurmas(pageable);
    }

    @GetMapping(path = "/v1/turmas/{id}")
    public Turma obterTurmaPeloId(@PathVariable("id") String id) {
        return turmaLocalService.obterTurmaPeloId(Integer.parseInt(id));
    }

    @PutMapping(path = "/v1/turmas/{id}")
    public Turma atualizarTurma(@PathVariable("id") String id, @RequestBody Turma turma) {
        return turmaLocalService.atualizarTurma(Integer.parseInt(id), turma);
    }

    @DeleteMapping(path = "/v1/turmas/{id}")
    public void deletarTurma(@PathVariable("id") String id) {
        turmaLocalService.deletarTurma(Integer.parseInt(id));
    }

    @Autowired
    private TurmaLocalService turmaLocalService;

}
