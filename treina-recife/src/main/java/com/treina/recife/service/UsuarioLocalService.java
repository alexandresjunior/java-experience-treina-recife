package com.treina.recife.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.treina.recife.model.Usuario;
import com.treina.recife.service.persistence.UsuarioPersistence;

@Service
public class UsuarioLocalService {

    public Usuario adicionarNovoUsuario(Usuario Usuario) {
        return usuarioPersistence.save(Usuario);
    }

    public Page<Usuario> obterUsuarios(Pageable pageable) {
        return usuarioPersistence.findAll(pageable);
    }

    public Usuario obterUsuarioPeloId(int id) {
        return usuarioPersistence.findById(id).get();
    }

    public Usuario atualizarUsuario(int id, Usuario usuario) {
        Usuario usuarioObj = usuarioPersistence.findById(id).get();

        usuarioObj.setNome(usuario.getNome());
        usuarioObj.setEmail(usuario.getEmail());
        usuarioObj.setSenha(usuario.getSenha());

        return usuarioPersistence.save(usuarioObj);
    }

    public void deletarUsuario(int id) {
        usuarioPersistence.deleteById(id);
    }

    public Page<Usuario> buscarUsuarioPeloNome(Pageable pageable, String nome) {
        return usuarioPersistence.findByNomeLike(pageable, "%" + nome + "%");
    }

    @Autowired
    private UsuarioPersistence usuarioPersistence;

}
