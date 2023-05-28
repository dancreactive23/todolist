import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHand, faPencil} from '@fortawesome/free-solid-svg-icons';
import './Welcoming.css';

const Welcoming = () =>{
    return(
        <div className='welcomeContainer'>
            <h1><span className='felizDia'>Feliz dia</span> y Bienvenidos <span><FontAwesomeIcon className='handIcon' icon={faHand}/></span></h1>
            <p>Gracias por usar esta app para registrar tus tareas.</p>
            <p>Estamos listos. Empecemos...<span><FontAwesomeIcon className='pencilIcon' icon={faPencil}/></span></p>
        </div>
   
    );
}

export default Welcoming;