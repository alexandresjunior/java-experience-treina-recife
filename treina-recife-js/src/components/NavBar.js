import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();

    const isActiveNavLink = (path) => {
        /* Check if it's the dashboard page */

        if (location.pathname === path) {
            return "text-white active bg-gradient-warning";
        }

        /* Check other pages */

        path = path.split("/")

        if (location.pathname.includes(path)) {
            return "text-white active bg-gradient-warning";
        }

        return "text-dark";
    }

    return (
        <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-light" id="sidenav-main">
            <div className="sidenav-header">
                <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                <Link className="navbar-brand m-0 text-center" to={`https://treinarecife.com.br/`}>
                    <img src={require("../assets/img/treina_recife_logo.png")} className="navbar-brand-img h-100" alt="treina_recife_logo" />
                </Link>
            </div>

            <hr className="horizontal light mt-0 mb-2" />

            <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className={`nav-link ${isActiveNavLink("/")}`} to={`/`}>
                            <div className="text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">dashboard</i>
                            </div>
                            <span className="nav-link-text ms-1">Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${isActiveNavLink("prospects")}`} to={`/prospects`}>
                            <div className="text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">contact_phone</i>
                            </div>
                            <span className="nav-link-text ms-1">Prospects</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${isActiveNavLink("turmas")}`} to={`/turmas`}>
                            <div className="text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">table_view</i>
                            </div>
                            <span className="nav-link-text ms-1">Turmas</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${isActiveNavLink("alunos")}`} to={`/alunos`}>
                            <div className="text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">groups</i>
                            </div>
                            <span className="nav-link-text ms-1">Alunos</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${isActiveNavLink("cursos")}`} to={`/cursos`}>
                            <div className="text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">devices</i>
                            </div>
                            <span className="nav-link-text ms-1">Cursos</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${isActiveNavLink("professores")}`} to={`/professores`}>
                            <div className="text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">school</i>
                            </div>
                            <span className="nav-link-text ms-1">Professores</span>
                        </Link>
                    </li>

                    <li className="nav-item mt-3">
                        <h6 className="ps-4 ms-2 text-uppercase text-xs text-dark font-weight-bolder opacity-8">Dados do Usuário</h6>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${isActiveNavLink("/perfil")}`} to={`/perfil`}>
                            <div className="text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">person</i>
                            </div>
                            <span className="nav-link-text ms-1">Perfil</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${isActiveNavLink("/sign-in")}`} to={`/sign-in`}>
                            <div className="text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">login</i>
                            </div>
                            <span className="nav-link-text ms-1">Sign In</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${isActiveNavLink("/sign-up")}`} to={`/sign-up`}>
                            <div className="text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">assignment</i>
                            </div>
                            <span className="nav-link-text ms-1">Sign Up</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default NavBar;