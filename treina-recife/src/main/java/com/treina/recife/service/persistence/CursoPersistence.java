package com.treina.recife.service.persistence;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.treina.recife.model.Curso;

public interface CursoPersistence extends JpaRepository<Curso, Integer> {

    Page<Curso> findAll(Pageable pageable);

    Page<Curso> findByNomeLike(Pageable pageable, String nome);

}
