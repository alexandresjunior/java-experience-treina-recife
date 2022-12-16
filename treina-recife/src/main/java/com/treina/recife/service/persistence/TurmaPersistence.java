package com.treina.recife.service.persistence;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.treina.recife.model.Turma;

public interface TurmaPersistence extends JpaRepository<Turma, Integer> {

    Page<Turma> findAll(Pageable pageable);

}
