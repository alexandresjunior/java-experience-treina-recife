const Alunos = () => {
    return (
        <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-12">
                        <div className="card my-4">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                <div className="bg-gradient-warning shadow-primary border-radius-lg pt-4 pb-3">
                                    <h6 className="text-white text-capitalize ps-3">Alunos</h6>
                                </div>
                            </div>

                            <div className="card-body px-0 pb-2">
                                <div className="table-responsive p-0">
                                    <table className="table align-items-center mb-0">
                                        <thead>
                                            <tr>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nome</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">CPF</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Telefone</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Endereço</th>
                                                <th className="text-secondary opacity-7"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                alunos.map((aluno, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td className="col-3">
                                                                <div className="d-flex px-2 py-1">
                                                                    <div className="d-flex flex-column justify-content-center ps-2">
                                                                        <h6 className="mb-0 text-sm">{aluno.nome}</h6>
                                                                        <p className="text-xs text-secondary mb-0">{aluno.email}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="col-2">
                                                                <p className="text-xs font-weight-bold mb-0">{aluno.cpf}</p>
                                                            </td>
                                                            <td className="col-2">
                                                                <p className="text-xs font-weight-bold mb-0">{aluno.telefone}</p>
                                                            </td>
                                                            <td className="col-3">
                                                                <p className="text-xs font-weight-bold mb-0">{aluno.endereco.logradouro}, n. {aluno.endereco.numero}, {aluno.endereco.complemento}</p>
                                                                <p className="text-xs text-secondary mb-0">{aluno.endereco.bairro}, {aluno.endereco.cidade} - {aluno.endereco.estado}</p>
                                                            </td>
                                                            <td className="col-1 align-middle">
                                                                <a href="/" className="text-secondary font-weight-bold text-xs pe-3" data-toggle="tooltip" data-original-title="Editar usuário">
                                                                    <i className="material-icons opacity-10">edit</i>
                                                                </a>
                                                                <a href="/" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Deletar usuário">
                                                                    <i className="material-icons opacity-10">delete</i>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Alunos;

const alunos = [
    {
        "nome": "Alexandre de Souza Jr.",
        "email": "alexandre@treinarecife.com.br",
        "cpf": "107.403.554-22",
        "telefone": "(81) 99160-3025",
        "endereco": {
            "logradouro": "Rua Dr. João Marques",
            "numero": 100,
            "complemento": "apt. 701",
            "bairro": "Ilha do Retiro",
            "cidade": "Recife",
            "estado": "PE"
        }
    },
    {
        "nome": "Rebeca Valgueiro",
        "email": "rebeca@treinarecife.com.br",
        "cpf": "107.403.554-22",
        "telefone": "(81) 99160-3025",
        "endereco": {
            "logradouro": "Rua Dr. João Marques",
            "numero": 100,
            "complemento": "apt. 701",
            "bairro": "Ilha do Retiro",
            "cidade": "Recife",
            "estado": "PE"
        }
    },
    {
        "nome": "Edilene Valgueiro",
        "email": "edilene@treinarecife.com.br",
        "cpf": "107.403.554-22",
        "telefone": "(81) 99160-3025",
        "endereco": {
            "logradouro": "Rua Dr. João Marques",
            "numero": 100,
            "complemento": "apt. 701",
            "bairro": "Ilha do Retiro",
            "cidade": "Recife",
            "estado": "PE"
        }
    },
    {
        "nome": "Rogério Valgueiro",
        "email": "rogerio@treinarecife.com.br",
        "cpf": "107.403.554-22",
        "telefone": "(81) 99160-3025",
        "endereco": {
            "logradouro": "Rua Dr. João Marques",
            "numero": 100,
            "complemento": "apt. 701",
            "bairro": "Ilha do Retiro",
            "cidade": "Recife",
            "estado": "PE"
        }
    }
]