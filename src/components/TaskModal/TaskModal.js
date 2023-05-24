import React from 'react';
import reactDOM from 'react-dom';



const TaskModal = ({children}) =>{

    return reactDOM.createPortal(
        <div className='taskModalContainer'>
            {children}
        </div>,document.getElementById("modal"))
}

export default TaskModal;