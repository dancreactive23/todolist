import React from 'react';
import './TaskForm.css';
import {TaskContext} from '../../TaskContext/TaskContext';

const TaskForm = () =>{

    const {setOpenModal,onAddTodo} = React.useContext(TaskContext);
    const [newTaskValue,setNewTaskValue] = React.useState("");

    const onSubmit = (event) =>{
        event.preventDefault();
        onAddTodo(newTaskValue);
        setOpenModal(false);
    }
 
    const onCancel = () =>{
        setOpenModal(false);
    }

    const onChange = (event) =>{
        setNewTaskValue(event.target.value);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Crea una nueva tarea</label>
            <textarea value={newTaskValue} onChange={onChange} placeholder="Hacer yoga en la mañana"/>
            <div className="taskForm-container">
                <button type="submit" className='taskForm-button taskForm-button--save' >
                    Guardar
                </button>
                <button  type="button" onClick={onCancel} className='taskForm-button taskForm-button--cancel' >
                    Cancelar
                </button>
            </div>
        </form>
    );
}

export default TaskForm;