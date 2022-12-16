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

import com.treina.recife.model.Usuario;
import com.treina.recife.service.UsuarioLocalService;

@RestController
@RequestMapping(path = "/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UsuarioController {

    @PostMapping(path = "/v1/usuarios")
    public @ResponseBody Usuario adicionarUsuario(@RequestBody Usuario usuario) {
        return usuarioLocalService.adicionarNovoUsuario(usuario);
    }

    @GetMapping(path = "/v1/usuarios")
    public @ResponseBody Page<Usuario> obterUsuarios(
            @RequestParam(value = "page", defaultValue = "0") String page,
            @RequestParam(value = "size", defaultValue = "5") String size) {

        Pageable pageable = PageRequest.of(Integer.parseInt(page), Integer.parseInt(size));

        return usuarioLocalService.obterUsuarios(pageable);
    }

    @GetMapping(path = "/v1/usuarios/{id}")
    public @ResponseBody Usuario obterUsuarioPeloId(@PathVariable("id") String id) {
        return usuarioLocalService.obterUsuarioPeloId(Integer.parseInt(id));
    }

    @PutMapping(path = "/v1/usuarios/{id}")
    public @ResponseBody Usuario atualizarUsuario(@PathVariable("id") String id, @RequestBody Usuario usuario) {
        return usuarioLocalService.atualizarUsuario(Integer.parseInt(id), usuario);
    }

    @DeleteMapping(path = "/v1/usuarios/{id}")
    public void deletarUsuario(@PathVariable("id") String id) {
        usuarioLocalService.deletarUsuario(Integer.parseInt(id));
    }

    @GetMapping(path = "/v1/usuarios/busca/{nome}")
    public @ResponseBody Page<Usuario> obterUsuariosPeloNome(
            @RequestParam(value = "page", defaultValue = "0") String page,
            @RequestParam(value = "size", defaultValue = "10") String size,
            @PathVariable("nome") String nome) {

        Pageable pageable = PageRequest.of(Integer.parseInt(page), Integer.parseInt(size));

        return usuarioLocalService.buscarUsuarioPeloNome(pageable, nome);
    }

    @Autowired
    private UsuarioLocalService usuarioLocalService;

}
