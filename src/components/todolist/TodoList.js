import React from "react";
import TodoItem from "../TodoItem/TodoItem";


const TodoList = ({tasksList,onCompleteTask,onDeleteTask,loading,error}) =>{
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