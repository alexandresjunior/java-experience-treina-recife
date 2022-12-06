import React from "react";
import SearchBar from "../../components/SearchBar";
import { professores } from "../../mocks";

const Professores = () => {
    return (
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-12">
                        <div className="card my-4">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div className="bg-gradient-warning shadow-primary border-radius-lg pt-4 pb-3">
                                    <h6 className="text-white text-capitalize ps-3">Professores</h6>
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
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nome</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Telefone</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Valor Hora/Aula</th>
                                                <th className="text-secondary opacity-7"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                professores.map((professor, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td className="col-3">
                                                                <div className="d-flex px-2 py-1">
                                                                    <div className="d-flex flex-column justify-content-center ps-2">
                                                                        <h6 className="mb-0 text-sm">{professor.nome}</h6>
                                                                        <p className="text-xs text-secondary mb-0">{professor.email}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="col-2">
                                                                <p className="text-xs font-weight-bold mb-0">{professor.telefone}</p>
                                                            </td>
                                                            <td className="col-3">
                                                                <p className="text-xs font-weight-bold mb-0">R$ {professor.valor}</p>
                                                            </td>
                                                            <td className="col-1 align-middle">
                                                                <a href="/" className="text-secondary font-weight-bold text-xs pe-3" data-toggle="tooltip" data-original-title="Editar professor">
                                                                    <i className="material-icons opacity-10">edit</i>
                                                                </a>
                                                                <a href="/" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Deletar professor">
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

export default Professores;
