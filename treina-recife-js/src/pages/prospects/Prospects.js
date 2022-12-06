import React from "react";
import { Link } from "react-router-dom";

const Prospects = () => {
    return (
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-12">
                        <div className="card my-4">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div className="bg-gradient-warning shadow-primary border-radius-lg pt-4 pb-3">
                                    <h6 className="text-white text-capitalize ps-3">Prospects</h6>
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
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Detalhes</th>
                                                <th className="text-secondary opacity-7"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                prospects?.map((prospect, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td className="col-3">
                                                                <div className="d-flex px-2 py-1">
                                                                    <div className="d-flex flex-column justify-content-center ps-2">
                                                                        <h6 className="mb-0 text-sm">{prospect.nome}</h6>
                                                                        <p className="text-xs text-secondary mb-0">{prospect.email}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="col-2">
                                                                <p className="text-xs font-weight-bold mb-0">{prospect.telefone}</p>
                                                            </td>
                                                            <td className="col-2">
                                                                <p className="text-xs font-weight-bold mb-0">{prospect.dataCadastro}</p>
                                                            </td>
                                                            <td className="col-3">
                                                                <p className="text-xs font-weight-bold mb-0">{prospect.status}</p>
                                                                <p className="text-xs text-secondary mb-0">{prospect.dataNovoContato} - {prospect.observacao}</p>
                                                            </td>
                                                            <td className="col-1 align-middle">
                                                                <Link to={`/prospects/${prospect.id}`} className="text-secondary font-weight-bold text-xs pe-3" data-toggle="tooltip" data-original-title="Editar aluno">
                                                                    <i className="material-icons opacity-10">edit</i>
                                                                </Link>
                                                                <a href="/" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Deletar aluno">
                                                                    <i className="material-icons opacity-10">delete</i>
                                                                </a>
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

export default Prospects;

const prospects = [
    {
        "id": 1,
        "nome": "Alexandre de Souza Jr.",
        "email": "alexandre@treinarecife.com.br",
        "telefone": "(81) 99160-3025",
        "dataCadastro": "01/01/2022",
        "status": "Interessado",
        "dataNovoContato": "01/01/2023",
        "observacao": "NA"
    },
    {
        "id": 2,
        "nome": "Rebeca Valgueiro",
        "email": "rebeca@treinarecife.com.br",
        "telefone": "(81) 99160-3025",
        "dataCadastro": "01/01/2022",
        "status": "Interessado",
        "dataNovoContato": "01/01/2023",
        "observacao": "NA"
    },
    {
        "id": 3,
        "nome": "Edilene Valgueiro",
        "email": "edilene@treinarecife.com.br",
        "telefone": "(81) 99160-3025",
        "dataCadastro": "01/01/2022",
        "status": "Interessado",
        "dataNovoContato": "01/01/2023",
        "observacao": "NA"
    },
    {
        "id": 4,
        "nome": "Rogério Valgueiro",
        "email": "rogerio@treinarecife.com.br",
        "telefone": "(81) 99160-3025",
        "dataCadastro": "01/01/2022",
        "status": "Interessado",
        "dataNovoContato": "01/01/2023",
        "observacao": "NA"
    }
]