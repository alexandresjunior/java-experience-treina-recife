package com.treina.recife.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.treina.recife.model.Turma;
import com.treina.recife.service.persistence.TurmaPersistence;

@Service
public class TurmaLocalService {

    public Turma adicionarNovaTurma(Turma turma) {
        return turmaPersistence.save(turma);
    }

    public Page<Turma> obterTurmas(Pageable pageable) {
        return turmaPersistence.findAll(pageable);
    }

    public Turma obterTurmaPeloId(int id) {
        return turmaPersistence.findById(id).get();
    }

    public Turma atualizarTurma(int id, Turma turma) {
        Turma turmaObj = turmaPersistence.findById(id).get();

        turmaObj.setValor(turma.getValor());
        turmaObj.setTurno(turma.getTurno());

        turmaObj.setSeg(turma.isSeg());
        turmaObj.setTer(turma.isTer());
        turmaObj.setQua(turma.isQua());
        turmaObj.setQui(turma.isQui());
        turmaObj.setSex(turma.isSex());
        turmaObj.setSab(turma.isSab());
        turmaObj.setDom(turma.isDom());

        turmaObj.setCurso(turma.getCurso());
        turmaObj.setProfessor(turma.getProfessor());
        turmaObj.setAlunos(turma.getAlunos());

        return turmaPersistence.save(turmaObj);
    }

    public void deletarTurma(int id) {
        turmaPersistence.deleteById(id);
    }

    @Autowired
    private TurmaPersistence turmaPersistence;

}
