package com.treina.recife.service.persistence;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.treina.recife.model.Prospect;

public interface ProspectPersistence extends JpaRepository<Prospect, Integer> {

    Page<Prospect> findAll(Pageable pageable);

    Page<Prospect> findByNomeLike(Pageable pageable, String nome);

}
