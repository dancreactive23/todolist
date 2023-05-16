import React from 'react';
import TodoCounter from './components/todoCounter/TodoCounter';
import TodoSearch from './components/TodoSearch/TodoSearch';
import TodoList from './components/todolist/TodoList';
import CreateTodo from './components/CreateTodo/CreateTodo';
import {taskList} from './taskList.js';
import './App.css';

function App() {

  const [searchTask, setSearchTask] = React.useState('');
  const [todo,setTodo] = React.useState(taskList);

  const total = todo.length;
  const completedTodos = todo.filter(todo => todo.completed).length;

  const onCreateTodo = () =>{
    console.log("you press the TODO button!!!");
  }

  const onSearchTask = (event) =>{
    setSearchTask(event.target.value);
  }

  const onCompleteTask = (name) =>{
    const newTodo = [...todo];
    const indexTodo = newTodo.findIndex((todo) =>{
      return todo.name === name; 
    })
    
    newTodo.at(indexTodo).completed === false ?
     newTodo.at(indexTodo).completed = true : 
     newTodo.at(indexTodo).completed = false; 
    setTodo(newTodo);
  }

  const onDeleteTask = (name) =>{
    const newTodo = [...todo];
    const indexTodo = newTodo.findIndex((todo) =>{
      return todo.name === name; 
    })
    newTodo.splice(indexTodo,1);
    setTodo(newTodo);
  }


  const filteredTaskList = todo.filter(task =>(
    task.name.toLowerCase().includes(searchTask.toLowerCase())
  ));

  return (
    <>
     <TodoCounter completed={completedTodos} total={total}/>
     <TodoSearch onSearchTask={onSearchTask}/>
      <TodoList tasksList={filteredTaskList} onCompleteTask={onCompleteTask} onDeleteTask={onDeleteTask} />
      <CreateTodo onCreateTodo={onCreateTodo} />
    </>
  );
}

export default App;
