import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Turmas from "../pages/Turmas";
import Alunos from "../pages/Alunos";
import Cursos from "../pages/Cursos";
import Professores from "../pages/Professores";
import Dashboard from "../pages/Dashboard";
import Perfil from "../pages/usuario/Perfil";
import SignIn from "../pages/usuario/SignIn";
import SignUp from "../pages/usuario/SignUp";
import Prospects from "../pages/Prospects";
import NavBar from "../components/NavBar";

const Rotas = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/">
                    <Route index element={<Dashboard />} />
                    <Route path="prospects" element={<Prospects />} />
                    <Route path="turmas" element={<Turmas />} />
                    <Route path="alunos" element={<Alunos />} />
                    <Route path="cursos" element={<Cursos />} />
                    <Route path="professores" element={<Professores />} />
                    <Route path="perfil" element={<Perfil />} />
                    <Route path="sign-in" element={<SignIn />} />
                    <Route path="sign-up" element={<SignUp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;