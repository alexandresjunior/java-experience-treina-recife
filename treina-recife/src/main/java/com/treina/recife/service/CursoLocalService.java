package com.treina.recife.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.treina.recife.model.Curso;
import com.treina.recife.service.persistence.CursoPersistence;

@Service
public class CursoLocalService {

    public Curso adicionarNovoCurso(Curso curso) {
        return cursoPersistence.save(curso);
    }

    public Page<Curso> obterCursos(Pageable pageable) {
        return cursoPersistence.findAll(pageable);
    }

    public Curso obterCursoPeloId(int id) {
        return cursoPersistence.findById(id).get();
    }

    public Curso atualizarCurso(int id, Curso curso) {
        Curso cursoObj = cursoPersistence.findById(id).get();

        cursoObj.setCargaHorariaAula(curso.getCargaHorariaAula());
        cursoObj.setCargaHorariaTotal(curso.getCargaHorariaTotal());
        cursoObj.setNome(curso.getNome());

        return cursoPersistence.save(cursoObj);
    }

    public void deletarCurso(int id) {
        cursoPersistence.deleteById(id);
    }

    public Page<Curso> buscarCursoPeloNome(Pageable pageable, String nome) {
        return cursoPersistence.findByNomeLike(pageable, "%" + nome + "%");
    }

    @Autowired
    private CursoPersistence cursoPersistence;

}
