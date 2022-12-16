import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAluno } from "../../hooks/useAluno";
import { adicionarAluno, atualizarAluno, deletarAluno } from "../../service/AlunoApi";
import { formatDate } from "../../helper/index";

const AlunosEditor = ({ novo }) => {
    const [editavel, setEditavel] = useState(novo ? true : false);

    const { id } = useParams();
    const [aluno, setAluno] = useAluno(id);

    let navigate = useNavigate();

    const handleClickOnEditar = () => {
        setEditavel(true)
    }

    const handleClickOnCancelar = () => {
        setEditavel(false)
    }

    const handleClickOnSalvar = async () => {
        setEditavel(false)
        setAluno(aluno)

        if (novo) {
            await adicionarAluno("/aluno", aluno, setAluno);
        } else {
            await atualizarAluno(`/aluno/${id}`, aluno, setAluno);
        }
    }

    const handleClickOnDeletar = async () => {
        await deletarAluno(`/aluno/${id}`);
        navigate("/aluno");
    }

    return (
        <div className="main-content position-relative max-height-vh-100 h-100">
            <div className="container-fluid px-2 px-md-4">
                <div className="page-header min-height-100 border-radius-xl mt-4">
                    <span className="mask bg-gradient-warning opacity-6"></span>
                </div>

                <div className="card card-body mx-3 mx-md-4 mt-n6">
                    <div className="row gx-10 mt-2">
                        <div className="col-4 my-sm-auto ms-sm-3 me-sm-0 mt-3">
                            <Link to={`/aluno`}>
                                <button type="button" className="btn bg-gradient-warning btn-tooltip px-3 me-3" onClick={handleClickOnCancelar}
                                    data-bs-toggle="tooltip" data-bs-placement="bottom" title="Voltar">
                                    <i className="material-icons opacity-10">arrow_back</i>
                                </button>
                            </Link>
                        </div>

                        <div className="col-4 my-sm-auto ms-sm-auto me-sm-0 mt-3">
                            {
                                editavel ? (
                                    <button type="button" className="btn bg-gradient-warning btn-tooltip px-3 me-3" onClick={handleClickOnSalvar}
                                        data-bs-toggle="tooltip" data-bs-placement="bottom" title="Salvar">
                                        <i className="material-icons opacity-10">save</i>
                                    </button>
                                ) : (
                                    <button type="button" className="btn bg-gradient-warning btn-tooltip px-3 me-3" onClick={handleClickOnEditar}
                                        data-bs-toggle="tooltip" data-bs-placement="bottom" title="Editar">
                                        <i className="material-icons opacity-10">edit</i>
                                    </button>
                                )
                            }

                            {
                                editavel ? (
                                    <button type="button" className="btn bg-gradient-warning btn-tooltip px-3 me-3" onClick={handleClickOnCancelar}
                                        data-bs-toggle="tooltip" data-bs-placement="bottom" title="Cancelar">
                                        <i className="material-icons opacity-10">cancel</i>
                                    </button>
                                ) : (
                                    <button type="button" className="btn bg-gradient-warning btn-tooltip px-3 me-3" onClick={handleClickOnDeletar}
                                        data-bs-toggle="tooltip" data-bs-placement="bottom" title="Deletar">
                                        <i className="material-icons opacity-10">delete</i>
                                    </button>
                                )
                            }
                        </div>
                    </div>

                    <div className="row">
                        <div className="row">
                            <form className="form-floating">
                                <div className="col-12 col-xl-12">
                                    <div className="card card-plain h-100">
                                        <div className="card-body p-3">
                                            <div className="col-8 my-auto">
                                                <ul className="list-group">
                                                    <li className="list-group-item border-0 ps-0 text-sm">
                                                        <strong className="text-dark">Nome:</strong>
                                                        {
                                                            editavel ? (
                                                                <>
                                                                    <div className="input-group input-group-outline my-2">
                                                                        <input type="text" className="form-control" defaultValue={aluno.nome} onChange={(event) => (aluno.nome = event.target.value)} />
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>&nbsp; {aluno.nome}</>
                                                            )
                                                        }
                                                    </li>

                                                    <li className="list-group-item border-0 ps-0 text-sm">
                                                        <strong className="text-dark">E-mail:</strong>
                                                        {
                                                            editavel ? (
                                                                <>
                                                                    <div className="input-group input-group-outline my-2">
                                                                        <input type="email" className="form-control" defaultValue={aluno.email} onChange={(event) => (aluno.email = event.target.value)} />
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>&nbsp; {aluno.email}</>
                                                            )
                                                        }
                                                    </li>

                                                    <li className="list-group-item border-0 ps-0 text-sm">
                                                        <strong className="text-dark">Telefone:</strong>
                                                        {
                                                            editavel ? (
                                                                <>
                                                                    <div className="input-group input-group-outline my-2">
                                                                        <input type="text" className="form-control" defaultValue={aluno.telefone} onChange={(event) => (aluno.telefone = event.target.value)} />
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>&nbsp; {aluno.telefone}</>
                                                            )
                                                        }
                                                    </li>

                                                    <li className="list-group-item border-0 ps-0 text-sm">
                                                        <strong className="text-dark">Data de Cadastro:</strong>
                                                        {
                                                            editavel ? (
                                                                <>
                                                                    <div className="input-group input-group-outline my-2">
                                                                        <input type="date" className="form-control" defaultValue={formatDate(aluno.dataCadastro)} onChange={(event) => (aluno.dataCadastro = event.target.value)} />
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>&nbsp; {formatDate(aluno.dataCadastro)}</>
                                                            )
                                                        }
                                                    </li>

                                                    <li className="list-group-item border-0 ps-0 text-sm">
                                                        <strong className="text-dark">Status:</strong>
                                                        {
                                                            editavel ? (
                                                                <>
                                                                    <div className="input-group input-group-outline my-2">
                                                                        <input type="text" className="form-control" defaultValue={aluno.status} onChange={(event) => (aluno.status = event.target.value)} />
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>&nbsp; {aluno.status}</>
                                                            )
                                                        }
                                                    </li>

                                                    <li className="list-group-item border-0 ps-0 text-sm">
                                                        <strong className="text-dark">Data de Novo Contato:</strong>
                                                        {
                                                            editavel ? (
                                                                <>
                                                                    <div className="input-group input-group-outline my-2">
                                                                        <input type="date" className="form-control" defaultValue={formatDate(aluno.dataNovoContato)} onChange={(event) => (aluno.dataNovoContato = event.target.value)} />
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>&nbsp; {formatDate(aluno.dataNovoContato)}</>
                                                            )
                                                        }
                                                    </li>

                                                    <li className="list-group-item border-0 ps-0 text-sm">
                                                        <strong className="text-dark">Observações:</strong>
                                                        {
                                                            editavel ? (
                                                                <>
                                                                    <div className="input-group input-group-outline my-2">
                                                                        <textarea type="text" className="form-control" defaultValue={aluno.observacoes} onChange={(event) => (aluno.observacoes = event.target.value)} />
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>&nbsp; {aluno.observacoes}</>
                                                            )
                                                        }
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlunosEditor;