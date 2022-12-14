import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <main className="main-content  mt-0">
            <section>
                <div className="page-header min-vh-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
                                <div className="position-relative bg-gradient-secondary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center">
                                    <img src={require("../../assets/img/treina_recife_logo_miniatura.png")} alt="Treina Recife Logo" />
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                                <div className="card card-plain">
                                    <div className="card-header">
                                        <h4 className="font-weight-bolder">Criar uma conta</h4>
                                        <p className="mb-0">Entre seu e-mail e senha para realizar o cadastro</p>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="input-group input-group-outline mb-3">
                                                <label className="form-label">Nome</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="input-group input-group-outline mb-3">
                                                <label className="form-label">E-mail</label>
                                                <input type="email" className="form-control" />
                                            </div>
                                            <div className="input-group input-group-outline mb-3">
                                                <label className="form-label">Senha</label>
                                                <input type="password" className="form-control" />
                                            </div>
                                            <div className="text-center">
                                                <button type="button" className="btn btn-lg bg-gradient-warning btn-lg w-100 mt-4 mb-0">Registrar</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                                        <p className="mb-2 text-sm mx-auto">
                                            Já possui uma conta?&nbsp;
                                            <Link to={`/sign-in`} className="text-warning text-gradient font-weight-bold">Login</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SignUp;