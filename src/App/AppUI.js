import React from 'react';
import TodoCounter from '../components/todoCounter/TodoCounter';
import TodoSearch from '../components/TodoSearch/TodoSearch';
import TodoList from '../components/todolist/TodoList';
import CreateTodo from '../components/CreateTodo/CreateTodo';
import LoadingTodos from '../components/LoadingTodos/LoadingTodos';
import ErrorTodos from '../components/ErrorTodos/ErrorTodos';
import TodosEmpty from '../components/TodosEmpty/TodosEmpty';
import Scrollable from '../components/Scrollable/Scrollable';
import TaskModal from '../components/TaskModal/TaskModal';
import {TaskContext} from '../TaskContext/TaskContext';
import TaskForm from '../components/TaskForm/TaskForm';
import Welcoming from '../components/Welcoming/Welcoming';
import TaskNoFound from '../components/TaskNoFound/TaskNoFound';
import './App.css';

const AppUI = () =>{

    return(
        <>
            <div className='shapesBG'></div>
            <TaskContext.Consumer>
                {({
                    loading,
                    error,
                    total,
                    onCreateTodo,
                    openModal,
                    setOpenModal,
                    filteredTaskList,
                }) =>
                    error ? <ErrorTodos/>:
                    (
                    <>
                        {
                        loading ? <LoadingTodos/>:
                        <div className='AppContainer'>
                            <Welcoming/>
                            <TodoCounter/>
                            <TodoSearch/>
                            <Scrollable>
                            {(!loading && total === 0) && <TodosEmpty/> }
                            {(filteredTaskList.length === 0 && total !==0) && <TaskNoFound/>}
                                <TodoList/>
                            </Scrollable>
                            <CreateTodo/>
                           {openModal && (
                            <TaskModal>
                                <TaskForm/>
                            </TaskModal>
                           )}
                        </div>
                        }
                    </>

                )}
            </TaskContext.Consumer>
        </>
    );
}

export default AppUI;