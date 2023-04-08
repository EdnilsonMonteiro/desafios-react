import React, { useState, useEffect } from 'react';

function MaxCount() {

    const [cliques, setCliques] = useState(0);
    const [tempo, setTempo] = useState(10);
    const [acabouTempo, setAcabouTempo] = useState(false);

    const numeroDeCliques = () => {
        setCliques(cliques + 1);
    }

    useEffect(() => {
        const tempoLimite = setInterval(() => {
            setTempo(tempo => tempo - 1);
        }, 1000)

        if(tempo === 0) {
            clearInterval(tempoLimite)
            setAcabouTempo(true);
        }

        return () => clearInterval(tempoLimite);
    }, [tempo]);
     
    return (
        <>
            <h1>Número de cliques até o tempo se encerrar</h1>
            <h2>{cliques}</h2>
            <h3>Tempo restante: {tempo}</h3>
            {!acabouTempo && (
                <button onClick={numeroDeCliques}>+</button>
            )}
            
        </>
    )
}

export default MaxCount;