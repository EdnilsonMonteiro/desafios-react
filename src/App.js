import React from "react";
import TarefaLista from "./desafios/tarefa-lista";
import ListaFilme from "./desafios/lista-filme";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Marine Mammals</h1>
        <Router>
          <Routes>
            <Route exact path="/desafios/tarefa-lista" element={<TarefaLista />} />
            <Route exact path="/desafios/lista-filme" element={<ListaFilme />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;