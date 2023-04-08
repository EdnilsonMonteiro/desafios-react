import React, { useState } from 'react';
import {v4 as uuidv4 } from 'uuid';

function TarefaLista() {

    const [tarefa, setTarefa] = useState("");
    const [tarefas, setTarefas] = useState([]);

    function addTarefa() {
      setTarefas([...tarefas, {id: uuidv4(), conteudo: tarefa, completa: false}]);
    }

    function completarTarefa(tarefaId) { //Muda o estado de complete para true ou false
      const tarefaCompleta = tarefas.map((tarefa) => {
        if (tarefa.id === tarefaId) {
          return {...tarefa, completa: !tarefa.completa}
        }
        return tarefa;
      })
      setTarefas(tarefaCompleta);
    } 

    function excluirTarefa(index) { //Exclui as tarefas ao clicar no botão "Excluir"
      const tarefasAtualizadas = [...tarefas];
      tarefasAtualizadas.splice(index, 1);
      setTarefas(tarefasAtualizadas);
    }

    return (
        <>
        <h1>Criador de tarefas</h1>       
        <input
          type="text"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)} //altera o valor de tarefa para ser armazenado
        /> 
        <button onClick={addTarefa}>Adicionar tarefa</button>

        <h1>Lista tarefas</h1>  
          <ul>
            {tarefas.map((tarefa, index) => (
              <li key={tarefa.id}>
                {tarefa.conteudo} {/* Mostra o conteúdo do array tarefa */}
                <button onClick={() => completarTarefa(tarefa.id)}>Concluir</button>
                <button onClick={() => excluirTarefa(index)}>Excluir</button>
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