package com.treina.recife.service.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import com.treina.recife.model.Sala;

public interface SalaPersistence extends JpaRepository<Sala, Integer> {

}
