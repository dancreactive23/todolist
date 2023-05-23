import React from 'react';
import TodoCounter from '../components/todoCounter/TodoCounter';
import TodoSearch from '../components/TodoSearch/TodoSearch';
import TodoList from '../components/todolist/TodoList';
import CreateTodo from '../components/CreateTodo/CreateTodo';
import LoadingTodos from '../components/LoadingTodos/LoadingTodos';
import ErrorTodos from '../components/ErrorTodos/ErrorTodos';
import TodosEmpty from '../components/TodosEmpty/TodosEmpty';

const AppUI = ({
    loading,
    error,
    completedTodos,
    total,
    onSearchTask,
    filteredTaskList:tasksList,
    onCompleteTask,
    onDeleteTask,
    onCreateTodo,
}) =>{
    return(
        <>
            {
                loading ? <LoadingTodos/>:
                <div>
                    <TodoCounter completed={completedTodos} total={total}/>
                    <TodoSearch onSearchTask={onSearchTask}/>
                    <TodoList tasksList={tasksList} onCompleteTask={onCompleteTask} onDeleteTask={onDeleteTask} 
                    loading={loading} error={error}
                    />
                    <CreateTodo onCreateTodo={onCreateTodo} />
                </div>
            }
            {error && <ErrorTodos/>}
            {(!loading && tasksList.lenght === 0) && <TodosEmpty/> }

        </>
    );
}

export default AppUI;