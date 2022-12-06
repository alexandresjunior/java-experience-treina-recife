import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProspectsEditor = () => {
    const [editavel, setEditavel] = useState(false);

    const handleClickOnEditar = () => {
        setEditavel(true)
    }

    const handleClickOnSalvar = () => {
        setEditavel(false)
    }

    const handleClickOnDeletar = () => {

    }

    const handleClickOnCancelar = () => {
        setEditavel(false)
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
                            <Link to={`/prospects`}>
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
                                                                        <input type="text" className="form-control" defaultValue={"Alexandre de Souza Jr."} onChange={(event) => (console.log(event.target.value))} />
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>&nbsp; Alexandre de Souza Jr.</>
                                                            )
                                                        }
                                                    </li>

                                                    <li className="list-group-item border-0 ps-0 text-sm">
                                                        <strong className="text-dark">E-mail:</strong>
                                                        {
                                                            editavel ? (
                                                                <>
                                                                    <div className="input-group input-group-outline my-2">
                                                                        <input type="email" className="form-control" defaultValue={"alexandre@treinarecife"} onChange={(event) => (console.log(event.target.value))} />
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>&nbsp; alexandre@treinarecife</>
                                                            )
                                                        }
                                                    </li>

                                                    <li className="list-group-item border-0 ps-0 text-sm">
                                                        <strong className="text-dark">Telefone:</strong>
                                                        {
                                                            editavel ? (
                                                                <>
                                                                    <div className="input-group input-group-outline my-2">
                                                                        <input type="text" className="form-control" defaultValue={"(81) 99160-3025"} onChange={(event) => (console.log(event.target.value))} />
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>&nbsp; (81) 99160-3025</>
                                                            )
                                                        }
                                                    </li>

                                                    <li className="list-group-item border-0 ps-0 text-sm">
                                                        <strong className="text-dark">Data de Cadastro:</strong>
                                                        {
                                                            editavel ? (
                                                                <>
                                                                    <div className="input-group input-group-outline my-2">
                                                                        <input type="date" className="form-control" defaultValue={"2022/01/01"} onChange={(event) => (console.log(event.target.value))} />
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>&nbsp; 01/01/2022</>
                                                            )
                                                        }
                                                    </li>

                                                    <li className="list-group-item border-0 ps-0 text-sm">
                                                        <strong className="text-dark">Status:</strong>
                                                        {
                                                            editavel ? (
                                                                <>
                                                                    <div className="input-group input-group-outline my-2">
                                                                        <input type="text" className="form-control" defaultValue={"Interessado"} onChange={(event) => (console.log(event.target.value))} />
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>&nbsp; Interessado</>
                                                            )
                                                        }
                                                    </li>

                                                    <li className="list-group-item border-0 ps-0 text-sm">
                                                        <strong className="text-dark">Data de Novo Contato:</strong>
                                                        {
                                                            editavel ? (
                                                                <>
                                                                    <div className="input-group input-group-outline my-2">
                                                                        <input type="date" className="form-control" defaultValue={"01/02/2022"} onChange={(event) => (console.log(event.target.value))} />
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>&nbsp; 01/02/2022</>
                                                            )
                                                        }
                                                    </li>

                                                    <li className="list-group-item border-0 ps-0 text-sm">
                                                        <strong className="text-dark">Observações:</strong>
                                                        {
                                                            editavel ? (
                                                                <>
                                                                    <div className="input-group input-group-outline my-2">
                                                                        <textarea type="text" className="form-control" defaultValue={"NA"} onChange={(event) => (console.log(event.target.value))} />
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>&nbsp; NA</>
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

export default ProspectsEditor;