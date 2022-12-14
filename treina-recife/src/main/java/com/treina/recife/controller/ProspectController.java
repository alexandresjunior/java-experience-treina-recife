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

import com.treina.recife.model.Prospect;
import com.treina.recife.service.ProspectLocalService;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ProspectController {

    @PostMapping(path = "/v1/prospects")
    public @ResponseBody Prospect adicionarProspect(@RequestBody Prospect prospect) {
        return prospectLocalService.adicionarNovoProspect(prospect);
    }

    @GetMapping(path = "/v1/prospects")
    public Page<Prospect> obterProspects(
            @RequestParam(value = "page", defaultValue = "0") String page,
            @RequestParam(value = "size", defaultValue = "5") String size) {

        Pageable pageable = PageRequest.of(Integer.parseInt(page), Integer.parseInt(size));

        return prospectLocalService.obterProspects(pageable);
    }

    @GetMapping(path = "/v1/prospects/{id}")
    public Prospect obterProspectPeloId(@PathVariable("id") String id) {
        return prospectLocalService.obterProspectPeloId(Integer.parseInt(id));
    }

    @PutMapping(path = "/v1/prospects/{id}")
    public Prospect atualizarProspect(@PathVariable("id") String id, @RequestBody Prospect prospect) {
        return prospectLocalService.atualizarProspect(Integer.parseInt(id), prospect);
    }

    @DeleteMapping(path = "/v1/prospects/{id}")
    public void deletarProspect(@PathVariable("id") String id) {
        prospectLocalService.deletarProspect(Integer.parseInt(id));
    }

    @Autowired
    private ProspectLocalService prospectLocalService;

}
