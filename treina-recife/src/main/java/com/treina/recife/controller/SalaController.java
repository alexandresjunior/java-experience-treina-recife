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

import com.treina.recife.model.Sala;
import com.treina.recife.service.SalaLocalService;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin(origins = "http://localhost:3000")
public class SalaController {

    @PostMapping(path = "/v1/salas")
    public @ResponseBody Sala adicionarSala(@RequestBody Sala sala) {
        return salaLocalService.adicionarNovaSala(sala);
    }

    @GetMapping(path = "/v1/salas")
    public @ResponseBody Page<Sala> obterSalas(
            @RequestParam(value = "page", defaultValue = "0") String page,
            @RequestParam(value = "size", defaultValue = "5") String size) {

        Pageable pageable = PageRequest.of(Integer.parseInt(page), Integer.parseInt(size));

        return salaLocalService.obterSalas(pageable);
    }

    @GetMapping(path = "/v1/salas/{id}")
    public @ResponseBody Sala obterSalaPeloId(@PathVariable("id") String id) {
        return salaLocalService.obterSalaPeloId(Integer.parseInt(id));
    }

    @PutMapping(path = "/v1/salas/{id}")
    public @ResponseBody Sala atualizarSala(@PathVariable("id") String id, @RequestBody Sala sala) {
        return salaLocalService.atualizarSala(Integer.parseInt(id), sala);
    }

    @DeleteMapping(path = "/v1/salas/{id}")
    public void deletarSala(@PathVariable("id") String id) {
        salaLocalService.deletarSala(Integer.parseInt(id));
    }

    @Autowired
    private SalaLocalService salaLocalService;

}
