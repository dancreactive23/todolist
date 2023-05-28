import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer} from '@fortawesome/free-solid-svg-icons';

const ErrorTodos = () =>{
    return(
        <div style={{background:'#0e2f50', display:'inline-block',margin:'40vh auto',borderRadius:'12px',padding:'4px'}}>
            <FontAwesomeIcon icon={faServer} style={{color:'wheat',fontSize:'32px'}}/>
            <h2 style={{textAlign:'center',color:'white'}}>Un error ha ocurrido.Por favor intenta acceder más tarde.</h2>
        </div>
    );
}

export default ErrorTodos;