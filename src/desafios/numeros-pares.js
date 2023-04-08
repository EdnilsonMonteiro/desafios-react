import React, { useState } from 'react';

function NumerosPares() {

    const [numeros, setNumeros] = useState([])
    const [numerosPares, setNumerosPares] = useState('')
    const [ePar, setEPar] = useState('')

    function numeroPar(numeros) {
        if(numeros % 2 === 0 && numeros !== 0) {
            if (numerosPares === '') { //evitar que inicialmente apareça a vírgula atrapalhando a beleza do código
                setNumerosPares( numerosPares + numeros) 
                setEPar(true);
            } else {
                setNumerosPares( numerosPares + ', ' + numeros) 
            }
            alert("Simm, é par!!!")
        } else {
            alert('O número digitado não é par')
        }
    } 

    return (
        <>
        <h3>Digite um número para saber se ele é par</h3>
        <input 
            type="number"
            placeholder="Digite aqui"
            value={numeros}
            onChange={(e) => setNumeros(e.target.value)}    
        />
        <button onClick={() => numeroPar(numeros)}>É par?</button>

        {ePar && (
            <h2>Lista de pares: {numerosPares}</h2>
        )  }
           
        </>
    )
}

export default NumerosPares;