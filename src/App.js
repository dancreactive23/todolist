import React from 'react';
import TodoCounter from './components/todoCounter/TodoCounter';
import TodoSearch from './components/TodoSearch/TodoSearch';
import TodoList from './components/todolist/TodoList';
import CreateTodo from './components/CreateTodo/CreateTodo';
import './App.css';

function App() {

  const taskListLocal = localStorage.getItem('taskList-v1');


  let parsedTaskListLocal;

  if(!taskListLocal){
    localStorage.setItem('taskList-v1',JSON.stringify([]));
    parsedTaskListLocal = [];
  }else{
    parsedTaskListLocal = JSON.parse(taskListLocal);
  }

  const [searchTask, setSearchTask] = React.useState('');
  const [todo,setTodo] = React.useState(parsedTaskListLocal);

  const total = todo.length;
  const completedTodos = todo.filter(todo => todo.completed).length;

  const onCreateTodo = () =>{
    console.log("you press the TODO button!!!");
  }

  const onSearchTask = (event) =>{
    setSearchTask(event.target.value);
  }

  const saveTodos = (newTodo) =>{
    localStorage.setItem('taskList-v1', JSON.stringify(newTodo));
    setTodo(newTodo);
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
    <>
     <TodoCounter completed={completedTodos} total={total}/>
     <TodoSearch onSearchTask={onSearchTask}/>
      <TodoList tasksList={filteredTaskList} onCompleteTask={onCompleteTask} onDeleteTask={onDeleteTask} />
      <CreateTodo onCreateTodo={onCreateTodo} />
    </>
  );
}

export default App;
