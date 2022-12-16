package com.treina.recife.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.treina.recife.model.Aluno;
import com.treina.recife.service.persistence.AlunoPersistence;

@Service
public class AlunoLocalService {

    public Aluno adicionarNovoAluno(Aluno aluno) {
        return alunoPersistence.save(aluno);
    }

    public Page<Aluno> obterAlunos(Pageable pageable) {
        return alunoPersistence.findAll(pageable);
    }

    public Aluno obterAlunoPeloId(int id) {
        return alunoPersistence.findById(id).get();
    }

    public Aluno atualizarAluno(int id, Aluno aluno) {
        Aluno alunoObj = alunoPersistence.findById(id).get();

        alunoObj.setNome(aluno.getNome());
        alunoObj.setCpf(aluno.getCpf());
        alunoObj.setEmail(aluno.getEmail());
        alunoObj.setEndereco(aluno.getEndereco());
        alunoObj.setTelefone(aluno.getTelefone());

        return alunoPersistence.save(alunoObj);
    }

    public void deletarAluno(int id) {
        alunoPersistence.deleteById(id);
    }

    public Page<Aluno> buscarAlunoPeloNome(Pageable pageable, String nome) {
        return alunoPersistence.findByNomeLike(pageable, "%" + nome + "%");
    }

    @Autowired
    private AlunoPersistence alunoPersistence;

}
