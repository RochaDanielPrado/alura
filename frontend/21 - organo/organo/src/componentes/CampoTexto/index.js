import { useState } from 'react';
import './CampoTexto.css';

const CampoTexto = (props) => {

    let valor = '';

    useState('');

    const aoDigitado = (evento) => {
        valor = evento.target.value;
        console.log(valor);
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitado} placeholder={props.placeholder} required={props.obrigatorio}/>
        </div>
    );
};

export default CampoTexto;