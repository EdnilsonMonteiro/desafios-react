import React, { useState } from 'react';

function Stopwatch() {

    const [tempo, setTempo] = useState(0);

    const iniciarContagem = () => {
        window.meuTempo = setInterval(() => {
            setTempo((tempo) => tempo + 1);
        }, 1000);
    } 
    
    const pararContagem = () => {
        clearInterval(window.meuTempo);
    }

    const resetarContagem = () => {
        setTempo(0);

        clearInterval(window.meuTempo);
    }
    
    return (
        <>
            <h1>Cronômetro</h1>

            <h3>Contagem: {tempo}</h3>
                <button onClick={iniciarContagem}>Iniciar</button>
                <button onClick={pararContagem}>Parar</button>
                <button onClick={resetarContagem}>Resetar</button>
        </>
    )
}

export default Stopwatch;