import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import { turmas } from "../../mocks";

const Turmas = () => {
    const [turmaId, setTurmaId] = useState(0);
    const [mostrarAlunos, setMostrarAlunos] = useState(false);

    const handleMostrarAlunos = (id) => {
        setTurmaId(id);
        setMostrarAlunos(!mostrarAlunos);
    }

    const handleAccordionButton = () => {
        if (mostrarAlunos) {
            return "custom-arrow-icon-up";
        } else {
            return "custom-arrow-icon-down";
        }
    }

    return (
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-12">
                        <div className="card my-4">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div className="bg-gradient-warning shadow-primary border-radius-lg pt-4 pb-3">
                                    <h6 className="text-white text-capitalize ps-3">Turmas</h6>
                                </div>
                            </div>

                            <div className="ms-3 me-4">
                                <div className="row">
                                    <div className="col-11 pe-2">
                                        <SearchBar />
                                    </div>
                                    <div className="col-1 ps-2">
                                        <button type="button" class="btn btn-warning mt-4 ms-0"><i className="material-icons opacity-10">add_box</i></button>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body px-0 pb-2">
                                <div className="table-responsive p-0">
                                    <table className="table align-items-center mb-0">
                                        <thead>
                                            <tr>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Curso</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Professor</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Dias</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                                                <th className="text-secondary opacity-7"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                turmas?.map((turma, index) => {
                                                    return (
                                                        <>
                                                            <tr key={index}>
                                                                <td className="col-3">
                                                                    <div className="d-flex px-2 py-1">
                                                                        <div className="d-flex flex-column justify-content-center ps-2">
                                                                            <h6 className="mb-0 text-sm">{turma.nome}</h6>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="col-2">
                                                                    <p className="text-xs font-weight-bold mb-0">{turma.professor}</p>
                                                                </td>
                                                                <td className="col-1">
                                                                    {
                                                                        turma?.dias?.map((dia, index) => {
                                                                            return (
                                                                                <span className="badge badge-sm bg-gradient-secondary m-1" key={index}>{dia}</span>
                                                                            )
                                                                        })
                                                                    }
                                                                </td>
                                                                <td className="col-2">
                                                                    <p className="text-xs font-weight-bold mb-0">{turma.status}</p>
                                                                </td>
                                                                <td className="col-1 align-middle">
                                                                    <button className="custom-buttom text-secondary font-weight-bold text-xs pe-3" data-toggle="tooltip" data-original-title="Ver detalhes" onClick={() => handleMostrarAlunos(index)}>
                                                                        <i className={`material-icons opacity-10 ${handleAccordionButton()}`}>expand_circle_down</i>
                                                                    </button>
                                                                    <a href="/" className="text-secondary font-weight-bold text-xs pe-3" data-toggle="tooltip" data-original-title="Editar turma">
                                                                        <i className="material-icons opacity-10">edit</i>
                                                                    </a>
                                                                    <a href="/" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Deletar turma">
                                                                        <i className="material-icons opacity-10">delete</i>
                                                                    </a>
                                                                </td>


                                                            </tr>

                                                            {
                                                                (turmaId === index && mostrarAlunos) && (
                                                                    <div className="table-responsive p-5">
                                                                        <table className="table align-items-center mb-0">
                                                                            {turma?.alunos?.map((aluno, index) => {
                                                                                return (
                                                                                    <div key={index} id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                                                        <div className="accordion-body">{aluno}</div>
                                                                                    </div>
                                                                                )

                                                                            })}
                                                                        </table>
                                                                    </div>
                                                                )
                                                            }

                                                        </>


                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Turmas;
