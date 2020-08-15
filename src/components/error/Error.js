import React from 'react';
import './Error.css';
import { Link } from 'react-router-dom';

export default function Error(){
    return(<div id="error">
            <div>
                <span style={{fontSize:"200px"}} className="material-icons">error</span>
                <h1>El recurso consulta no existe.</h1>
                <Link to="/">Inicio</Link>
            </div>

    </div>)
}