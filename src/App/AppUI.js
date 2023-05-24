import React from 'react';
import TodoCounter from '../components/todoCounter/TodoCounter';
import TodoSearch from '../components/TodoSearch/TodoSearch';
import TodoList from '../components/todolist/TodoList';
import CreateTodo from '../components/CreateTodo/CreateTodo';
import LoadingTodos from '../components/LoadingTodos/LoadingTodos';
import ErrorTodos from '../components/ErrorTodos/ErrorTodos';
import TodosEmpty from '../components/TodosEmpty/TodosEmpty';
import TaskModal from '../components/TaskModal/TaskModal';
import {TaskContext} from '../TaskContext/TaskContext';

const AppUI = () =>{

    return(
        <>
            <TaskContext.Consumer>
                {({
                    loading,
                    error,
                    total,
                    onCreateTodo,
                    openModal,
                    setOpenModal,
                }) =>
                    error ? <ErrorTodos/>:
                    (
                    <>
                        {
                        loading ? <LoadingTodos/>:
                        <div>
                            <TodoCounter/>
                            <TodoSearch/>
                            {(!loading && total === 0) && <TodosEmpty/> }
                            <TodoList/>
                            <CreateTodo onCreateTodo={onCreateTodo} />
                           {openModal && (
                            <TaskModal>
                                Open modal shows up!!!!!
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