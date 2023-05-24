import React from 'react';
import './todoCounter.css';
import { TaskContext } from '../../TaskContext/TaskContext';
import { useContext } from 'react';

const TodoCounter = () =>{
    const { completedTodos,total} = useContext(TaskContext);
    return(
        <div className='titleContainer'>
            <span className='titleContainer__title'> 
              {`You have completed `}  
                <span className='titleContainer--variant'> {completedTodos} </span> 
                {` tasks of `} 
                 <span className='titleContainer--variant'> {total}</span>
            </span>
        </div>
    );
}

export default TodoCounter;