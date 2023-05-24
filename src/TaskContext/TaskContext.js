import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TaskContext = React.createContext();

const TaskProvider = ({children}) =>{

    const [searchTask, setSearchTask] = React.useState('');
    const [openModal,setOpenModal] = React.useState(false);

    const {item:todo,saveItem:saveTodos,loading,error} = useLocalStorage('taskList-v1',[]);
  
    const total = todo.length;
    const completedTodos = todo.filter(todo => todo.completed).length;
  
    const onCreateTodo = () =>{
      setOpenModal(!openModal);
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
    return(
        <TaskContext.Provider value={{
         loading,
         error,
         completedTodos,
         total,
         onSearchTask,
         filteredTaskList,
         onCompleteTask,
         onDeleteTask,
         onCreateTodo,
         openModal,
         setOpenModal,
        }}>
            {children}
        </TaskContext.Provider>
    );
}

export {TaskContext,TaskProvider};

