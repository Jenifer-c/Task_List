import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTask } from '../../../services/serviceTask';


export default function Table() {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        const allTask = getTask();
        setTarefas(allTask);
    }, []);


    return (
        <div>
            <div>
                <h1>Lista de Tarefas( {tarefas.length} )</h1>
            </div>
            <div>
                <div>
                    <Link to={'/tarefas/new'} >Nova tarefa</Link>
                </div>
                <br></br>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Status</th>
                            <th scope="col">Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tarefas.map(tarefa => (
                            <tr key={tarefa.id}>
                                <th scope="row">{tarefa.id}</th>
                                <td>{tarefa.descricao}</td>
                                <td>{tarefa.status}</td>
                                <td><Link to={`/tarefas/${tarefa.id}`}>Editar</Link>
                                    <Link to={'/tarefas'}> - Deletar </Link>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

