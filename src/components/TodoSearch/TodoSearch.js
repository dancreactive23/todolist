import React from 'react';
import './TodoSearch.css';

const TodoSearch = () =>{
    return(
        <div className='containerInput'>
            <input className='containerInput__input' placeholder='Enter a task'/>
        </div>
    );
}

export default TodoSearch;