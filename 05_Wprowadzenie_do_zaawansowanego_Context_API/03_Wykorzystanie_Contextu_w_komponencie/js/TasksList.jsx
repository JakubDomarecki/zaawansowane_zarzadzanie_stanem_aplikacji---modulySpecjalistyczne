import { useState } from "react";
import { useTaskContext } from "./TasksContext";

export const TasksList = () => {
  const {handleToogleTaskCompletion, filteredTasks} = useTaskContext();
  
  return(
    <>
      {filteredTasks.map(task => (
        <p key={task.id}>
         {task.text} {task.completed ? "(Completed)" : "(Incomplete)"}
        <button onClick={() => handleToogleTaskCompletion(task.id)}>DONE</button>
        </p>
      ))}
    </>

  )
};
