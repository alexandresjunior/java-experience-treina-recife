package com.treina.recife.service.persistence;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.treina.recife.model.Aluno;

public interface AlunoPersistence extends JpaRepository<Aluno, Integer> {

    Page<Aluno> findAll(Pageable pageable);

    Page<Aluno> findByNomeLike(Pageable pageable, String nome);

}
