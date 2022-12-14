import { useEffect, useState } from "react";
import { obterProspectPeloId } from "../service/ProspectApi";

export const useProspect = (id) => {
    const [prospect, setProspect] = useState(initialState);

    useEffect(() => {
        obterProspectPeloId(`/v1/prospects/${id}`, setProspect);
        console.log(prospect);
    }, [id]);

    return [prospect, setProspect];
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
