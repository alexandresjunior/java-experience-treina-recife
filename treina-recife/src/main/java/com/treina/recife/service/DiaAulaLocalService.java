package com.treina.recife.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.treina.recife.model.DiaAula;
import com.treina.recife.service.persistence.DiaAulaPersistence;

@Service
public class DiaAulaLocalService {

    public DiaAula adicionarNovoDiaAula(DiaAula DiaAula) {
        return diaAulaPersistence.save(DiaAula);
    }

    public Page<DiaAula> obterDiaAulas(Pageable pageable) {
        return diaAulaPersistence.findAll(pageable);
    }

    public DiaAula obterDiaAulaPeloId(int id) {
        return diaAulaPersistence.findById(id).get();
    }

    public DiaAula atualizarDiaAula(int id, DiaAula diaAula) {
        DiaAula diaAulaObj = diaAulaPersistence.findById(id).get();

        diaAulaObj.setDiaAula(diaAula.getDiaAula());
        diaAulaObj.setHoraInicio(diaAula.getHoraInicio());
        diaAulaObj.setHoraTermino(diaAula.getHoraTermino());
        diaAulaObj.setSala(diaAula.getSala());
        diaAulaObj.setTurma(diaAula.getTurma());

        return diaAulaPersistence.save(diaAulaObj);
    }

    public void deletarDiaAula(int id) {
        diaAulaPersistence.deleteById(id);
    }

    @Autowired
    private DiaAulaPersistence diaAulaPersistence;

}
