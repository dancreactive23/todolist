import React from 'react';
import './todoCounter.css';
import { TaskContext } from '../../TaskContext/TaskContext';
import { useContext } from 'react';

const TodoCounter = () =>{
    const { completedTodos,total} = useContext(TaskContext);
    return(
        <div className='titleContainer'>
            <span className='titleContainer__title'> 
              {`Has completado `}  
                <span className='titleContainer--variant'> {completedTodos} </span> 
                {` tareas de `} 
                 <span className='titleContainer--variant'> {total}</span>
            </span>
        </div>
    );
}

export default TodoCounter;