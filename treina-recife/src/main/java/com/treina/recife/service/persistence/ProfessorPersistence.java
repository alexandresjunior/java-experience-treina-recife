package com.treina.recife.service.persistence;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.treina.recife.model.Professor;

public interface ProfessorPersistence extends JpaRepository<Professor, Integer> {

    Page<Professor> findAll(Pageable pageable);

    Page<Professor> findByNomeLike(Pageable pageable, String nome);

}
