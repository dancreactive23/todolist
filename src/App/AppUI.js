import React from 'react';
import TodoCounter from '../components/todoCounter/TodoCounter';
import TodoSearch from '../components/TodoSearch/TodoSearch';
import TodoList from '../components/todolist/TodoList';
import CreateTodo from '../components/CreateTodo/CreateTodo';

const AppUI = ({
    loading,
    error,
    completedTodos,
    total,
    onSearchTask,
    filteredTaskList,
    onCompleteTask,
    onDeleteTask,
    onCreateTodo,
}) =>{
    return(
        <>
            <TodoCounter completed={completedTodos} total={total}/>
            <TodoSearch onSearchTask={onSearchTask}/>
            <TodoList tasksList={filteredTaskList} onCompleteTask={onCompleteTask} onDeleteTask={onDeleteTask} 
            loading={loading} error={error}
            />
            <CreateTodo onCreateTodo={onCreateTodo} />
        </>
    );
}

export default AppUI;