import React from 'react';
import {useLocalStorage} from './useLocalStorage';
import AppUI from './AppUI';
import './App.css';


function App() {

  const [searchTask, setSearchTask] = React.useState('');

  const [todo,saveTodos] = useLocalStorage('taskList-v1',[]);

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
     saveTodos(newTodo);
  }

  const onDeleteTask = (name) =>{
    const newTodo = [...todo];
    const indexTodo = newTodo.findIndex((todo) =>{
      return todo.name === name; 
    })
    newTodo.splice(indexTodo,1);
    saveTodos(newTodo);
  }


  const filteredTaskList = todo.filter(task =>(
    task.name.toLowerCase().includes(searchTask.toLowerCase())
  ));

  return (
    <AppUI 
      completedTodos={completedTodos}
      total={total}
      onSearchTask={onSearchTask}
      filteredTaskList={filteredTaskList}
      onCompleteTask={onCompleteTask}
      onDeleteTask={onDeleteTask}
      onCreateTodo={onCreateTodo}
    />
  );
}

export default App;
