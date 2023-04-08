import React, { useState } from 'react';
import {v4 as uuidv4 } from 'uuid';

function TarefaLista() {

    const [tarefa, setTarefa] = useState();
    const [tarefas, setTarefas] = useState([]);
   
    function criarTarefa() {
      setTarefas([...tarefas, {id: uuidv4(), conteudo: tarefa, completa: false}])
    }

    function completarTarefa(id) {
      const tarefaCompleta = tarefas.map((tarefa) => {
        if(tarefa.id === id) {
          return {...tarefa, completa: !tarefa.completa}
        }
        return tarefa;
      })
      setTarefas(tarefaCompleta);
    }

    function excluirTarefa(id) {
      const novoArray = tarefas.filter((tarefa) => tarefa.id !== id) 
      setTarefas(novoArray);

    }

    return (
        <>
        <h1>Criador de tarefas</h1>
        <input 
          type="text"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          placeholder="Insira sua tarefa">
        </input>
        <button onClick={criarTarefa}>Criar</button>

        <ul>
          {tarefas.map((tarefa) => (
            <li key={tarefa.id}>
              {tarefa.conteudo}
              <button onClick={() => excluirTarefa(tarefa.id)}>Excluir</button>
              <button onClick={() => completarTarefa(tarefa.id)}>Completar</button>
              {tarefa.completa && (
                <span>(Completa)</span>
              )}
            </li>
          ))}

        </ul>
        </>
    )
}

export default TarefaLista;