import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import { formatDate } from "../../helper";
import { obterAlunos } from "../../service/AlunoApi";

const Alunos = () => {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        obterAlunos("/api/aluno", setAlunos);
    }, []);

    return (
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-12">
                        <div className="card my-4">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div className="bg-gradient-warning shadow-primary border-radius-lg pt-4 pb-3">
                                    <h6 className="text-white text-capitalize ps-3">alunos</h6>
                                </div>
                            </div>

                            <div className="ms-3 me-4">
                                <div className="row">
                                    <div className="col-11 pe-2">
                                        <SearchBar />
                                    </div>
                                    <div className="col-1 ps-2">
                                        <Link to={`/aluno/novo`}>
                                            <button type="button" className="btn btn-warning mt-4 ms-0"><i className="material-icons opacity-10">add_box</i></button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body px-0 pb-2">
                                <div className="table-responsive p-0">
                                    <table className="table align-items-center mb-0">
                                        <thead>
                                            <tr>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nome</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Telefone</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Data de Cadastro</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Novo Contato</th>
                                                <th className="text-secondary opacity-7"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                alunos?.map((aluno, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td className="col-3">
                                                                <div className="d-flex px-2 py-1">
                                                                    <div className="d-flex flex-column justify-content-center ps-2">
                                                                        <Link to={`/alunos/${aluno.id}`} className="text-secondary"><h6 className="mb-0 text-sm">{aluno.nome}</h6></Link>
                                                                        <p className="text-xs text-secondary mb-0">{aluno.email}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="col-2">
                                                                <p className="text-xs text-secondary mb-0">{aluno.telefone}</p>
                                                            </td>
                                                            <td className="col-2">
                                                                <p className="text-xs text-secondary mb-0">{formatDate(aluno.dataCadastro, "/")}</p>
                                                            </td>
                                                            <td className="col-2">
                                                                <p className="text-xs font-weight-bold mb-0">{aluno.status}</p>
                                                            </td>
                                                            <td className="col-2">
                                                                <p className="text-xs text-secondary mb-0">{formatDate(aluno.dataNovoContato, "/")}</p>
                                                            </td>
                                                            <td className="col-1 align-middle">
                                                                <Link to={`/alunos/${aluno.id}`} className="text-secondary font-weight-bold text-xs pe-3 btn-tooltip"
                                                                    data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ver detalhes">
                                                                    <i className="material-icons opacity-10">read_more</i>
                                                                </Link>
                                                            </td>
                                                        </tr>
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

export default Alunos;
