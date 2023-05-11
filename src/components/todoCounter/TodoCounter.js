import React from 'react';
import './todoCounter.css';

const TodoCounter = ({completed,total}) =>{
    return(
        <div className='titleContainer'>
            <span className='titleContainer__title'> 
              {`You have completed `}  
                <span className='titleContainer--variant'> {completed} </span> 
                {` tasks of `} 
                 <span className='titleContainer--variant'> {total}</span>
            </span>
        </div>
    );
}

export default TodoCounter;