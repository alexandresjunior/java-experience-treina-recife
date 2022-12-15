package com.treina.recife.service.persistence;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.treina.recife.model.Usuario;

public interface UsuarioPersistence extends JpaRepository<Usuario, Integer> {

    Page<Usuario> findAll(Pageable pageable);

    Page<Usuario> findByNomeLike(Pageable pageable, String nome);

}
