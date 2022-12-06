import { useEffect, useState } from "react";

export const useProspect = (id) => {
    const [prospect, setProspect] = useState(initialState);

    useEffect(() => {
        if (typeof id !== "undefined") {
            setProspect(prospects[id - 1])
        }
    }, [id]);

    return [prospect];
}

const initialState = {
    "id": null,
    "nome": null,
    "email": null,
    "telefone": null,
    "dataCadastro": null,
    "status": null,
    "dataNovoContato": null,
    "observacoes": null
}

const prospects = [
    {
        "id": 1,
        "nome": "Alexandre de Souza Jr.",
        "email": "alexandre@treinarecife.com.br",
        "telefone": "(81) 99160-3025",
        "dataCadastro": "01/01/2022",
        "status": "Interessado",
        "dataNovoContato": "01/01/2023",
        "observacao": "NA"
    },
    {
        "id": 2,
        "nome": "Rebeca Valgueiro",
        "email": "rebeca@treinarecife.com.br",
        "telefone": "(81) 99160-3025",
        "dataCadastro": "01/01/2022",
        "status": "Interessado",
        "dataNovoContato": "01/01/2023",
        "observacao": "NA"
    },
    {
        "id": 3,
        "nome": "Edilene Valgueiro",
        "email": "edilene@treinarecife.com.br",
        "telefone": "(81) 99160-3025",
        "dataCadastro": "01/01/2022",
        "status": "Interessado",
        "dataNovoContato": "01/01/2023",
        "observacao": "NA"
    },
    {
        "id": 4,
        "nome": "Rogério Valgueiro",
        "email": "rogerio@treinarecife.com.br",
        "telefone": "(81) 99160-3025",
        "dataCadastro": "01/01/2022",
        "status": "Interessado",
        "dataNovoContato": "01/01/2023",
        "observacao": "NA"
    }
]