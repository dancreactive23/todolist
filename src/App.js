import React from 'react';
import TodoCounter from './components/todoCounter/TodoCounter';
import TodoSearch from './components/TodoSearch/TodoSearch';
import TodoList from './components/todolist/TodoList';
import CreateTodo from './components/CreateTodo/CreateTodo';
import TodoItem from './components/TodoItem/TodoItem';
import {taskList} from './taskList.js';
import './App.css';

function App() {
  return (
    <>
     <TodoCounter completed={5} total={10}/>
     <TodoSearch/>
      <TodoList>
          {
            taskList.map((task,index) =>(
              <TodoItem name={task.name} key={index} />
            ))
          }
      </TodoList>
      <CreateTodo/>
    </>
  );
}

export default App;
