package com.treina.recife.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.treina.recife.model.Feriado;
import com.treina.recife.service.persistence.FeriadoPersistence;

@Service
public class FeriadoLocalService {

    public Feriado adicionarNovoFeriado(Feriado feriado) {
        return feriadoPersistence.save(feriado);
    }

    public Page<Feriado> obterFeriados(Pageable pageable) {
        return feriadoPersistence.findAll(pageable);
    }

    public Feriado obterFeriadoPeloId(int id) {
        return feriadoPersistence.findById(id).get();
    }

    public Feriado atualizarFeriado(int id, Feriado feriado) {
        Feriado feriadoObj = feriadoPersistence.findById(id).get();

        feriadoObj.setData(feriado.getData());
        feriadoObj.setDescricao(feriado.getDescricao());

        return feriadoPersistence.save(feriadoObj);
    }

    public void deletarFeriado(int id) {
        feriadoPersistence.deleteById(id);
    }

    @Autowired
    private FeriadoPersistence feriadoPersistence;

}
