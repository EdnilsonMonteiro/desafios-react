import React from "react";
import TarefaLista from "./desafios/tarefa-lista";
import ListaFilme from "./desafios/lista-filme";
import NumerosPares from "./desafios/numeros-pares";
import RemoveButton from "./desafios/remove-button";
import Stopwatch from './desafios/stopwatch';
import MaxCount from './desafios/max-count';
import FixTheTheme from './desafios/fix-the-theme';
import FormularioLogin from './desafios/formulario-login';
import ShoppingCart from './desafios/shopping-cart';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Router>
          <Routes>
            <Route exact path="/desafios/tarefa-lista" element={<TarefaLista />} />
            <Route exact path="/desafios/lista-filme" element={<ListaFilme />} />
            <Route exact path="/desafios/numeros-pares" element={<NumerosPares />} />
            <Route exact path="/desafios/remove-button" element={<RemoveButton />} />
            <Route exact path="/desafios/stopwatch" element={<Stopwatch />} />
            <Route exact path="/desafios/max-count" element={<MaxCount />} />
            <Route exact path="/desafios/fix-the-theme" element={<FixTheTheme />} />
            <Route exact path="/desafios/formulario-login" element={<FormularioLogin />} />
            <Route exact path="/desafios/shopping-cart" element={<ShoppingCart />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;