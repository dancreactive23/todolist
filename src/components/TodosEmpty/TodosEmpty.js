import React from 'react';
import './TodosEmpty.css';
import emptyTask from './Create task.svg';

const TodosEmpty = () =>{
    return(
        <div className='emptyContainer'>
            <img src={emptyTask} alt='Create task'/>
            <h4 className='message'>No hay tareas creadas. Por favor, crea una.</h4>
        </div>
    );
}

export default TodosEmpty;