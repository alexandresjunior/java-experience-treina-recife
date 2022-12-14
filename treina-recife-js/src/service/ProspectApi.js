import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080/api",
});

export const adicionarProspect = async (url, prospect, setProspect) => {
    const response = await api.post(url, prospect);
    setProspect(response.data);
};

export const obterProspects = async (url, setProspects) => {
    const response = await api.get(url);
    setProspects(response.data.content);
};

export const obterProspectPeloId = async (url, setProspect) => {
    const response = await api.get(url);
    setProspect(response.data);
};

export const atualizarProspect = async (url, prospect, setProspect) => {
    const response = await api.put(url, prospect);
    setProspect(response.data);
};

export const deletarProspect = async (url) => {
    await api.delete(url);
};
