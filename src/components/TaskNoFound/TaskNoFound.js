import React from 'react';
import searchNotFound from './notFound.svg';

const TaskNoFound = () =>{
    return(
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center',height:'350px'}}>
            <img src={searchNotFound} alt='search not found'/>
            <h4 
                style={{color:'#F7F9F9'}}
            >Tarea no encontrada.</h4>
        </div>
    );
}

export default TaskNoFound;