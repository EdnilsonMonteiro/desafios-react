import React, { useState } from 'react';
import "../styles/shopping-cart.css"
import {v4 as uuidv4 } from 'uuid';

function ShoppingCart() {

    const [items, setItems] = useState([
        {
            id: uuidv4(),
            nome: 'Aspirador de pó',
            preco: 199.90,
            descricao: 'Um aspirador de pó inovador'
        },
        {
            id: uuidv4(),
            nome: 'Camiseta branca',
            preco: 29.90,
            descricao: 'Camiseta básica de algodão branca'
        },
        {
            id: uuidv4(),
            nome: 'Calça jeans',
            preco: 99.90,
            descricao: 'Calça jeans skinny com lavagem clara'
        },
        {
            id: uuidv4(),
            nome: 'Tênis esportivo',
            preco: 149.90,
            descricao: 'Tênis esportivo com solado de borracha'
        },
        {
            id: uuidv4(),
            nome: 'Bolsa tiracolo',
            preco: 79.90,
            descricao: 'Bolsa tiracolo de couro sintético preto'
        },
        {
            id: uuidv4(),
            nome: 'Óculos de sol',
            preco: 49.90,
            descricao: 'Óculos de sol com lentes espelhadas'
        },
        {
            id: uuidv4(),
            nome: 'Jaqueta de couro',
            preco: 199.90,
            descricao: 'Jaqueta de couro sintético preta'
        },
        {
            id: uuidv4(),
            nome: 'Relógio de pulso',
            preco: 89.90,
            descricao: 'Relógio de pulso analógico com pulseira de couro marrom '
        },
        {
            id: uuidv4(),
            nome: 'Colar de prata',
            preco: 59.90,
            descricao: 'Colar de prata com pingente de coração'
        },
        {
            id: uuidv4(),
            nome: 'Fone de ouvido',
            preco: 129.90,
            descricao: 'Fone de ouvido bluetooth com microfone integrado'
        },
        {
            id: uuidv4(),
            nome: 'Mochila',
            preco: 79.90,
            descricao: 'Mochila de nylon preta com vários compartimentos'
        },
    ]);
    const [carrinho, setCarrinho] = useState([])
    const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);
    const [quantidadeItem, setQuantidadeItem] = useState(1);
    const [precoTotal, setPrecoTotal] = useState(0);

    function addCarrinho(id, quantidadeItem) {
        const itemCorrespondente = items.find(item => item.id === id);
        if (itemCorrespondente) {
          if (carrinho[id]) { /* Qual item será adicionado no carrinho e qual quantidade será adicionada no carrinho */
            carrinho[id] = carrinho[id] + quantidadeItem;
          } else {
            carrinho[id] = quantidadeItem;
          }
          setCarrinho({ ...carrinho });
          setQuantidadeCarrinho(quantidadeCarrinho + quantidadeItem);

          setPrecoTotal(precoTotal + itemCorrespondente.preco * quantidadeItem)
        }
      }
    
      function removeCarrinho(id, quantidadeItem, carrinhoId) {
        const itemCorrespondente = items.find(item => item.id === id);
        if (carrinho[id]) {
          if (quantidadeItem > quantidadeCarrinho || quantidadeItem > carrinhoId ) {
            alert('Só é possível excluir a quantidade de items que possui no carrinho')
          } else {
            carrinho[id] = carrinho[id] - quantidadeItem;
            if (carrinho[id] <= 0) {
              delete carrinho[id];
            }
            setCarrinho({ ...carrinho });

            setQuantidadeCarrinho(quantidadeCarrinho - quantidadeItem);

            setPrecoTotal(precoTotal - itemCorrespondente.preco * quantidadeItem)
          }
          
        }
      }

      function decrementar() {
        setQuantidadeItem(quantidadeItem - 1);
        console.log('teste')
      }
    
      function incrementar() {
        setQuantidadeItem(quantidadeItem + 1);
      }
    
      function mostrarCarrinho() {     

        return Object.keys(carrinho).map(id => {
          const item = items.find(item => item.id === id);

          return (
            <div className="card" key={id}>
              <h3>{item.nome}</h3>
              <p>{item.descricao}</p>
              <h2>Preço: {item.preco} R$</h2>
              <h2>Quantidade: {carrinho[id]}</h2>
              <button className="btnQuantity" onClick={decrementar}>
                    -
                </button>
                <input 
                  className="input"
                  type="number"
                  name="quantity"
                  value={quantidadeItem}
                  min="1"
                  onChange={(e) => setQuantidadeItem(e.target.value)}
                />
                <button className="btnQuantity" onClick={incrementar}>
                  +
                </button>
              <button className="btn" onClick={() => removeCarrinho(id, quantidadeItem, carrinho[id])}>Remover</button>
            </div>
          );
        });

      }
    
      function mostrarItems() {
        return items.map(item => {
          return (
            <div className="card">
              <h3>{item.nome}</h3>
              <p>{item.descricao}</p>
              <h2>Preço: {item.preco} R$</h2>

                <h2>Quantidade: </h2>
                <button className="btnQuantity" onClick={decrementar}>
                    -
                </button>
                <input 
                  className="input"
                  type="number"
                  name="quantity"
                  value={quantidadeItem}
                  min="1"
                  onChange={(e) => setQuantidadeItem(parseInt(e.target.value))}
                />
                <button className="btnQuantity" onClick={incrementar}>
                  +
                </button>

              
              <button className="btn" onClick={() => addCarrinho(item.id, quantidadeItem)}>Adicionar ao carrinho</button>
            </div>
          );
        });
      }
    
   
    return (
        <div className="container">
            <h1>Escolha os items que quer comprar:</h1>
            <div className="row">{mostrarItems()}</div>

            <h1>Carrinho:</h1>
            <h3>Quantidade de items no carrinho: {quantidadeCarrinho}</h3>
            <br/>
           
            <div className="row">{mostrarCarrinho()} </div>

            <h3>Total da compra: {precoTotal.toFixed(2)}</h3>
            
        </div>
    )
}

export default ShoppingCart;