package com.treina.recife.model;

import java.util.Calendar;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(uniqueConstraints = {
        @UniqueConstraint(name = "UniqueDataAndTurma", columnNames = { "diaAula", "turma_id" }),
        @UniqueConstraint(name = "UniqueDataAndSala", columnNames = { "diaAula", "sala_id" })
})
public class DiaAula {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private Date diaAula;

    @Column(nullable = false)
    private Calendar horaInicio;

    @Column(nullable = false)
    private Calendar horaTermino;

    @OneToOne
    @JoinColumn(nullable = false)
    private Turma turma;

    @OneToOne
    @JoinColumn(nullable = false)
    private Sala sala;

}
