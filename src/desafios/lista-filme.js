import React, { useState } from 'react';
import {v4 as uuidv4 } from 'uuid';

function ListaFilme() {

    const [filmes, setFilmes] = useState([
        {
            id: uuidv4(),
            titulo: "Pequena Sereia", 
            descricao: "Pequena Sereia é um filme em que uma sereia é pequena",
            anoLancamento: 2020

        },
        {
            id: uuidv4(),
            titulo: "O Rei Leão",
            descricao: "O Rei Leão é um filme da Disney sobre um leão chamado Simba",
            anoLancamento: 2020
        },
        {
            id: uuidv4(),
            titulo: "Jurassic Park",
            descricao: "Jurassic Park é um filme de aventura e ficção científica",
            anoLancamento: 2020
        },
        {
            id: uuidv4(),
            titulo: "De Volta para o Futuro",
            descricao: "De Volta para o Futuro é um filme de ficção científica e comédia",
            anoLancamento: 2020
        },
        {
            id: uuidv4(),
            titulo: "Star Wars: Episódio IV - Uma Nova Esperança",
            descricao: "Star Wars: Episódio IV - Uma Nova Esperança é um filme de ficção científica e aventura",
            anoLancamento: 2020
        }
    ]);
    const [filme, setFilme] = useState({
        titulo: "",
        descricao: ""
    });
    
    function adicionarFilme() {
        const novoFilme = {
            id: uuidv4(),
            titulo: filme.titulo,
            descricao: filme.descricao,
            anoLancamento: filme.anoLancamento
        }

         const filmeDuplicado = filmes.find(f => f.titulo === novoFilme.titulo || f.descricao === novoFilme.descricao);

         if(filmeDuplicado) {
            alert("Você tentou adicionar um titulo/descricao já existente")
         } else {
            if (novoFilme.titulo === "" || novoFilme.descricao === "") {
                alert("Não é possível inserir um título ou descrição vazios")
            } else {
                setFilmes([...filmes, novoFilme]);
                setFilme({titulo: "", descricao: "", anoLancamento: ""});
            }
         }

    }

    function excluirFilme(index) {
        setFilmes(filmes.filter((filme, i) => i !== index));
    }

    return (
        <>
            <h1>Filme </h1>

            <h3>Adicionar novo filme:</h3>
            <h5>Título:</h5>
            <input
                type="text"
                value={filme.titulo}
                onChange={(e) => setFilme({...filme, titulo: e.target.value})}
            />

            <h5>Descrição:</h5>
            <input
                type="text"
                value={filme.descricao}
                onChange={(e) => setFilme({...filme, descricao: e.target.value})}
            />

            <h5>Ano lançamento:</h5>
            <input
                placeholder="Digite um número"
                type="number"
                value={filme.anoLancamento}
                onChange={(e) => setFilme({...filme, anoLancamento: e.target.value})}
            />
            <br />
            <button onClick={adicionarFilme}>Adicionar</button>

            <ul>
                {filmes.map((filme, index) => (
                    <li key={filme.id}>
                        <h2>{filme.titulo}</h2>
                        <p>{filme.descricao}</p>
                        <p>Lançamento: {filme.anoLancamento}</p>
                        <button onClick={() => excluirFilme(index)}>Excluir filme</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListaFilme;