import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from 'react-bootstrap';

function Home () {

    return(
        <>
        <h1>Veja todos os desafios que já foram criados: </h1>
        <ListGroup>
            <ListGroup.Item>
                <a href="/desafios/shopping-cart"> Shopping cart</a>
            </ListGroup.Item>
            <ListGroup.Item>
            <a href="/desafios/lista-filme"> Lista filme</a>
            </ListGroup.Item>
            <ListGroup.Item>
            <a href="/desafios/tarefa-lista"> Tarefa lista</a>
            </ListGroup.Item>
            <ListGroup.Item>
            <a href="/desafios/numeros-pares"> Numeros Pares</a>
            </ListGroup.Item>
            <ListGroup.Item>
            <a href="/desafios/remove-button"> Remover botão</a>
            </ListGroup.Item>
            <ListGroup.Item>
            <a href="/desafios/stopwatch"> Stopwatch</a>
            </ListGroup.Item>
            <ListGroup.Item>
            <a href="/desafios/formulario-login"> Formulário login</a>
            </ListGroup.Item>
            <ListGroup.Item>
            <a href="/desafios/tarefa-lista"> Tarefa lista</a>
            </ListGroup.Item>
            <ListGroup.Item>
            <a href="/desafios/max-count"> Contador de cliques</a>
            </ListGroup.Item>
            
        </ListGroup>
        </>
    )
}

export default Home;