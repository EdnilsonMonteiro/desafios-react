import React, { useState } from 'react';
import {v4 as uuidv4 } from 'uuid';

function FormularioLogin() {

    const [usuarios, setUsuarios] = useState([])
    const [usuarioRegistro, setUsuarioRegistro] = useState()
    const [senhaRegistro, setSenhaRegistro] = useState()
    const [usuarioLogin, setUsuarioLogin] = useState()
    const [senhaLogin, setSenhaLogin] = useState()

    function registrarUsuario() {
        const usuarioExistente = usuarios.some((usuarioSome) => usuarioSome.user === usuarioRegistro)

        if (usuarioExistente) {
            alert('Já existe um usuário com este nome. Por favor, escolha outro nome de usuário')
            return;
        }

        setUsuarios([...usuarios, {id: uuidv4, user: usuarioRegistro, password: senhaRegistro}])
    }

    function validarLogin() {

        const usuarioAutenticado = usuarios.some(
            (usuarioSome) => 
                usuarioSome.user === usuarioLogin && usuarioSome.password === senhaLogin
        );
        
        if(usuarioAutenticado) {
            alert('Logado com sucesso!')
        } else {
            alert('Autenticação inválida')
        }
    }
    

    return (
        <>
            <h1>Registro</h1>
            <input
                placeholder="Insira seu usuario"
                value={usuarioRegistro}
                onChange={(e) => setUsuarioRegistro(e.target.value)}
            ></input>

            <input
                placeholder="Insira sua senha"
                value={senhaRegistro}
                onChange={(e) => setSenhaRegistro(e.target.value)}
            ></input>

            <button onClick={() => registrarUsuario()}>Registrar</button>

            <h1>Login</h1>
            <input
                placeholder="Insira seu usuario"
                value={usuarioLogin}
                onChange={(e) => setUsuarioLogin(e.target.value)}
            ></input>

            <input
                placeholder="Insira sua senha"
                value={senhaLogin}
                onChange={(e) => setSenhaLogin(e.target.value)}
            ></input>

            <button onClick={validarLogin}>Login</button>
        </>
    )
}

export default FormularioLogin;