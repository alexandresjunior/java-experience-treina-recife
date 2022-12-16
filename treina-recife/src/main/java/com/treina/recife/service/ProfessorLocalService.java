package com.treina.recife.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.treina.recife.model.Professor;
import com.treina.recife.service.persistence.ProfessorPersistence;

@Service
public class ProfessorLocalService {

    public Professor adicionarNovoProfessor(Professor Professor) {
        return professorPersistence.save(Professor);
    }

    public Page<Professor> obterProfessores(Pageable pageable) {
        return professorPersistence.findAll(pageable);
    }

    public Professor obterProfessorPeloId(int id) {
        return professorPersistence.findById(id).get();
    }

    public Professor atualizarProfessor(int id, Professor professor) {
        Professor professorObj = professorPersistence.findById(id).get();

        professorObj.setNome(professor.getNome());
        professorObj.setEmail(professor.getEmail());
        professorObj.setTelefone(professor.getTelefone());
        professorObj.setValorHoraAula(professor.getValorHoraAula());

        return professorPersistence.save(professorObj);
    }

    public void deletarProfessor(int id) {
        professorPersistence.deleteById(id);
    }

    public Page<Professor> buscarProfessorPeloNome(Pageable pageable, String nome) {
        return professorPersistence.findByNomeLike(pageable, "%" + nome + "%");
    }

    @Autowired
    private ProfessorPersistence professorPersistence;

}
