import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Turmas from "./pages/Turmas";
import Alunos from "./pages/Alunos";
import Cursos from "./pages/Cursos";
import Professores from "./pages/Professores";
import Dashboard from "./pages/Dashboard";
import Perfil from "./pages/usuario/Perfil";
import SignIn from "./pages/usuario/SignIn";
import SignUp from "./pages/usuario/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
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
  );
}

export default App;
