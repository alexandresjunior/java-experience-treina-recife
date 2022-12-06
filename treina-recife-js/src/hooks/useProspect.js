import { useEffect, useState } from "react";
import { prospects } from "../mocks";

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
