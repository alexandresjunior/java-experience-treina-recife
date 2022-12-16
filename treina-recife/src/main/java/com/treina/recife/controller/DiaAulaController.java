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

import com.treina.recife.model.DiaAula;
import com.treina.recife.service.DiaAulaLocalService;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin(origins = "http://localhost:3000")
public class DiaAulaController {

    @PostMapping(path = "/v1/diaaulas")
    public @ResponseBody DiaAula adicionarDiaAula(@RequestBody DiaAula diaAula) {
        return diaAulaLocalService.adicionarNovoDiaAula(diaAula);
    }

    @GetMapping(path = "/v1/diaaulas")
    public Page<DiaAula> obterDiaAulas(
            @RequestParam(value = "page", defaultValue = "0") String page,
            @RequestParam(value = "size", defaultValue = "5") String size) {

        Pageable pageable = PageRequest.of(Integer.parseInt(page), Integer.parseInt(size));

        return diaAulaLocalService.obterDiaAulas(pageable);
    }

    @GetMapping(path = "/v1/diaaulas/{id}")
    public DiaAula obterDiaAulaPeloId(@PathVariable("id") String id) {
        return diaAulaLocalService.obterDiaAulaPeloId(Integer.parseInt(id));
    }

    @PutMapping(path = "/v1/diaaulas/{id}")
    public DiaAula atualizarDiaAula(@PathVariable("id") String id, @RequestBody DiaAula diaaula) {
        return diaAulaLocalService.atualizarDiaAula(Integer.parseInt(id), diaaula);
    }

    @DeleteMapping(path = "/v1/diaaulas/{id}")
    public void deletarDiaAula(@PathVariable("id") String id) {
        diaAulaLocalService.deletarDiaAula(Integer.parseInt(id));
    }

    @Autowired
    private DiaAulaLocalService diaAulaLocalService;

}
