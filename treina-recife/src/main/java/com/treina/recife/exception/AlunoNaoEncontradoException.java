package com.treina.recife.exception;

public class AlunoNaoEncontradoException extends RuntimeException {

    public AlunoNaoEncontradoException(int id) {
        super("Nenhum aluno com id = " + id + " foi encontrado!");
    }

}
