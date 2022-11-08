package com.ola.mundo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ola.mundo.model.Saudacao;

@RestController
public class OlaMundoController {
    
    @GetMapping("/ola")
    public Saudacao digaOla() {
        return new Saudacao(0, "Olá, mundo!");
    }

}
