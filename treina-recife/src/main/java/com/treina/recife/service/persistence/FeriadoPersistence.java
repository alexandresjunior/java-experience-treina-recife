package com.treina.recife.service.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import com.treina.recife.model.Feriado;

public interface FeriadoPersistence extends JpaRepository<Feriado, Integer> {

}
