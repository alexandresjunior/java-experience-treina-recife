import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <main className="main-content  mt-0">
            <div className="page-header align-items-start min-vh-100">
                <span className="mask bg-gradient-dark opacity-6"></span>
                <div className="container my-auto">
                    <div className="row">
                        <div className="col-lg-4 col-md-8 col-12 mx-auto">
                            <div className="card z-index-0 fadeIn3 fadeInBottom">
                                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                    <div className="text-center bg-gradient-light shadow-secondary border-radius-lg py-3 pe-1">
                                        <img src={require("../../assets/img/treina_recife_logo.png")} className="navbar-brand-img h-100" width="50%" alt="treina_recife_logo" />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form className="text-start">
                                        <div className="input-group input-group-outline my-3">
                                            <label className="form-label">E-mail</label>
                                            <input type="email" className="form-control" />
                                        </div>
                                        <div className="input-group input-group-outline mb-3">
                                            <label className="form-label">Senha</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="form-check form-switch d-flex align-items-center mb-3">
                                            <input className="form-check-input" type="checkbox" id="rememberMe" checked />
                                            <label className="form-check-label mb-0 ms-3" for="rememberMe">Manter conectado</label>
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="btn bg-gradient-warning w-100 my-4 mb-2">Sign in</button>
                                        </div>
                                        <p className="mt-4 text-sm text-center">
                                            Não possui uma conta?&nbsp;
                                            <Link to={`/sign-up`} className="text-warning text-gradient font-weight-bold">Cadastre-se!</Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SignIn;