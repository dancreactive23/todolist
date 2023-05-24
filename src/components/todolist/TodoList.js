import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { TaskContext } from "../../TaskContext/TaskContext";
import { useContext } from "react";

const TodoList = () =>{

    const{filteredTaskList:tasksList,onCompleteTask,onDeleteTask} = useContext(TaskContext);
    return(
        <>
            <ul>
                {
                    tasksList.map((task,index) =>(
                        <TodoItem
                            name={task.name} 
                            key={index}
                            completed={task.completed} 
                            onCompleteTask={() => onCompleteTask(task.name)}
                            onDeleteTask = {() => onDeleteTask(task.name)}
                        />
                    ))
                }
            </ul>
        </>
    );
}

export default TodoList;