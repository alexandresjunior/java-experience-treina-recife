import React from "react";

const Perfil = () => {
    return (
        <div class="main-content position-relative max-height-vh-100 h-100">
            <div className="container-fluid px-2 px-md-4">
                <div className="page-header min-height-100 border-radius-xl mt-4">
                    <span className="mask bg-gradient-warning opacity-6"></span>
                </div>
                <div className="card card-body mx-3 mx-md-4 mt-n6">
                    <div className="row gx-4 mt-2 mb-2">
                        <div className="col-auto">
                            <div className="avatar avatar-xl position-relative">
                                <img src="../assets/img/bruce-mars.jpg" alt="profile_image" className="w-100 border-radius-lg shadow-sm" />
                            </div>
                        </div>
                        <div className="col-8 my-auto">
                            <div className="h-100">
                                <h5 className="mb-1">
                                    Alexandre de Souza Jr.
                                </h5>
                                <p className="mb-0 font-weight-normal text-sm">
                                    Professor / Consultor
                                </p>
                            </div>
                        </div>
                        <div class="col-2 my-sm-auto ms-sm-auto me-sm-0 mt-3">
                            <div class="nav-wrapper">
                                <ul class="nav nav-fill">
                                    <li class="nav-item">
                                        <a href="/" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Editar aluno">
                                            <i className="material-icons opacity-10">edit</i>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="/" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Deletar aluno">
                                            <i className="material-icons opacity-10">delete</i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="row">
                            <div className="col-12 col-xl-12">
                                <div className="card card-plain h-100">
                                    <div className="card-header pb-0 p-3">
                                        <div className="row">
                                            <div className="col-md-8 d-flex align-items-center">
                                                <h6 className="mb-0">Informações do perfil</h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body p-3">
                                        <p className="text-sm">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis finibus porta. Pellentesque elit quam, aliquet ut luctus vitae, lacinia at lectus. Vivamus ut nisi nunc. Integer consequat augue lacus, in euismod ipsum elementum eu.
                                        </p>
                                        <hr className="horizontal gray-light my-4" />
                                        <ul className="list-group">
                                            <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Nome:</strong> &nbsp; Alexandre de Souza Jr.</li>
                                            <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Telefone:</strong> &nbsp; (81) 99160-3025</li>
                                            <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">E-mail:</strong> &nbsp; alexandre@treinarecife.com.br</li>
                                            <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Endereço:</strong> &nbsp; Rua Dr. João Marques, n. 100, apt. 701 - Ilha do Retiro, Recife - PE</li>
                                            <li className="list-group-item border-0 ps-0 pb-0">
                                                <strong className="text-dark text-sm">Redes:</strong> &nbsp;
                                                <a className="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" href="/">
                                                    <i className="fab fa-facebook fa-lg"></i>
                                                </a>
                                                <a className="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" href="/">
                                                    <i className="fab fa-twitter fa-lg"></i>
                                                </a>
                                                <a className="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="/">
                                                    <i className="fab fa-instagram fa-lg"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfil;