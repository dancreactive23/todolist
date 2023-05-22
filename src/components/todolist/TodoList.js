import React from "react";
import TodoItem from "../TodoItem/TodoItem";


const TodoList = ({tasksList,onCompleteTask,onDeleteTask,loading,error}) =>{
    return(
        <>
            {loading && <h1>It's loading........</h1>}
            {error && <h1>Error just occured</h1>}
            {(!loading && tasksList.lenght === 0) && <h1>The list is empty. Add a new task</h1> }
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