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

import com.treina.recife.model.Feriado;
import com.treina.recife.service.FeriadoLocalService;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin(origins = "http://localhost:3000")
public class FeriadoController {

    @PostMapping(path = "/v1/feriados")
    public @ResponseBody Feriado adicionarFeriado(@RequestBody Feriado feriado) {
        return feriadoLocalService.adicionarNovoFeriado(feriado);
    }

    @GetMapping(path = "/v1/feriados")
    public @ResponseBody Page<Feriado> obterFeriados(
            @RequestParam(value = "page", defaultValue = "0") String page,
            @RequestParam(value = "size", defaultValue = "5") String size) {

        Pageable pageable = PageRequest.of(Integer.parseInt(page), Integer.parseInt(size));

        return feriadoLocalService.obterFeriados(pageable);
    }

    @GetMapping(path = "/v1/feriados/{id}")
    public @ResponseBody Feriado obterFeriadoPeloId(@PathVariable("id") String id) {
        return feriadoLocalService.obterFeriadoPeloId(Integer.parseInt(id));
    }

    @PutMapping(path = "/v1/feriados/{id}")
    public @ResponseBody Feriado atualizarFeriado(@PathVariable("id") String id, @RequestBody Feriado feriado) {
        return feriadoLocalService.atualizarFeriado(Integer.parseInt(id), feriado);
    }

    @DeleteMapping(path = "/v1/feriados/{id}")
    public void deletarFeriado(@PathVariable("id") String id) {
        feriadoLocalService.deletarFeriado(Integer.parseInt(id));
    }

    @Autowired
    private FeriadoLocalService feriadoLocalService;

}
