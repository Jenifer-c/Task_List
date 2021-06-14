import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function TarefasForm() {
    const [id, setId] = useState(0);
    const [descricao, setDescricao] = useState('');
    const [status, setStatus] = useState('Pendente');
    const [flagNew, setFlagNew] = useState(true);



    function salvarTarefa(event) {

        event.preventDefault()


    }

    return (
        <div>

            <h1> Editar Tarefa</h1>
            <form onSubmit={salvarTarefa}>

                <div>

                    <label> DESCRICAO </label>

                    <input type="text"
                        name="DESCRICAO"
                        value={this.state.data.DESCRICAO}
                        onChange={e => setDescricao(e.target.value)}
                    />

                </div>


                <label className="form-label"> STATUS </label>

                <select className="form-select"
                    name="STATUS"
                    onChange={e => setStatus(e.target.value)}
                    value={this.state.data.STATUS}
                >
                    <option value="PENDENTE">Pendente </option>
                    <option value="FINALIZADO"> Finalizado </option>
                </select>

                <br />
                <br />


                <button type="submit"

                >
                    Salvar
                </button>
                <Link to={`/`}> Voltar </Link>
            </form>
        </div>
    )
}
