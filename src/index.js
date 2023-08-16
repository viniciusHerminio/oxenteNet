import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Indicacao from './pages/Indicacao';
import Home from './pages/Home';
import Cliente from './pages/Cliente';
import Conheca from './pages/Conheca';
import FaleConosco from './pages/FaleConosco';
import Suporte from './pages/Suporte';
import SuaCasa from './pages/SuaCasa';
import SuaEmpresa from './pages/SuaEmpresa';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route
    exact
    path='/'
    element={<Home />}
    />
    <Route
    path='/indicacao'
    element={<Indicacao />}
    />
    <Route
    path='/cliente'
    element={<Cliente />}
    />
    <Route
    path='/conheca'
    element={<Conheca />}
    />
    <Route
    path='/faleConosco'
    element={<FaleConosco />}
    />
    <Route
    path='/suporte'
    element={<Suporte />}
    />
    <Route
    path='/suaCasa'
    element={<SuaCasa />}
    />
    <Route
    path='/suaEmpresa'
    element={<SuaEmpresa />}
    />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
