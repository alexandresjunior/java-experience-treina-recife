package com.ola.mundo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ola.mundo.model.Saudacao;

@RestController
public class OlaMundoController {

    @GetMapping("/ola")
    public Saudacao digaOla(
            @RequestParam(name = "id", required = false, defaultValue = "0") int id,
            @RequestParam(name = "mensagem", required = false, defaultValue = "null") String mensagem) {
        return new Saudacao(id, mensagem);
    }

}
