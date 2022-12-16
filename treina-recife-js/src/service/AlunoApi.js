import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080/",
});

export const adicionarAluno = async (url, aluno, setAluno) => {
    const response = await api.post(url, aluno);
    setAluno(response.data);
};

export const obterAlunos = async (url, setAluno) => {
    const response = await api.get(url);
    setAluno(response.data.content);
};

export const obterAlunoPeloId = async (url, setAluno) => {
    const response = await api.get(url);
    setAluno(response.data);
};

export const atualizarAluno = async (url, aluno, setAluno) => {
    const response = await api.put(url, aluno);
    setAluno(response.data);
};

export const deletarAluno = async (url) => {
    await api.delete(url);
};
