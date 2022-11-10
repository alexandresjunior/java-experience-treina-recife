const NavBar = () => {
    return (
        <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-light" id="sidenav-main">
            <div className="sidenav-header">
                <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                <a className="navbar-brand m-0 text-center" href={"https://treinarecife.com.br/"}>
                    <img src={require("../assets/img/treina_recife_logo.png")} className="navbar-brand-img h-100" alt="treina_recife_logo" />
                </a>
            </div>

            <hr className="horizontal light mt-0 mb-2" />

            <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link text-white active bg-gradient-warning" href="../pages/dashboard.html">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">dashboard</i>
                            </div>
                            <span className="nav-link-text ms-1">Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="../pages/tables.html">
                            <div className="text-dark text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">table_view</i>
                            </div>
                            <span className="nav-link-text ms-1">Turmas</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="../pages/billing.html">
                            <div className="text-dark text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">groups</i>
                            </div>
                            <span className="nav-link-text ms-1">Alunos</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="../pages/virtual-reality.html">
                            <div className="text-dark text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">devices</i>
                            </div>
                            <span className="nav-link-text ms-1">Cursos</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="../pages/rtl.html">
                            <div className="text-dark text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">school</i>
                            </div>
                            <span className="nav-link-text ms-1">Professores</span>
                        </a>
                    </li>

                    <li className="nav-item mt-3">
                        <h6 className="ps-4 ms-2 text-uppercase text-xs text-dark font-weight-bolder opacity-8">Dados do Usuário</h6>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="../pages/profile.html">
                            <div className="text-dark text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">person</i>
                            </div>
                            <span className="nav-link-text ms-1">Perfil</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="../pages/sign-in.html">
                            <div className="text-dark text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">login</i>
                            </div>
                            <span className="nav-link-text ms-1">Sign In</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="../pages/sign-up.html">
                            <div className="text-dark text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">assignment</i>
                            </div>
                            <span className="nav-link-text ms-1">Sign Up</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default NavBar;