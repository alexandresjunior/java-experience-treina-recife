package com.treina.recife.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.treina.recife.model.Sala;
import com.treina.recife.service.persistence.SalaPersistence;

@Service
public class SalaLocalService {

    public Sala adicionarNovaSala(Sala sala) {
        return salaPersistence.save(sala);
    }

    public Page<Sala> obterSalas(Pageable pageable) {
        return salaPersistence.findAll(pageable);
    }

    public Sala obterSalaPeloId(int id) {
        return salaPersistence.findById(id).get();
    }

    public Sala atualizarSala(int id, Sala sala) {
        Sala salaObj = salaPersistence.findById(id).get();

        salaObj.setNome(salaObj.getNome());

        return salaPersistence.save(salaObj);
    }

    public void deletarSala(int id) {
        salaPersistence.deleteById(id);
    }

    @Autowired
    private SalaPersistence salaPersistence;

}
