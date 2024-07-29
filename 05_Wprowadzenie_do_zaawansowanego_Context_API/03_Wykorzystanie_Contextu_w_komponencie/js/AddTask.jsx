import { useState } from "react";
import { useTaskContext } from "./TasksContext";
import { Task } from "@mui/icons-material";

export const AddTask = () => {
  const [newTask, setNewTask] = useState('')

  const {handleAddNewTask} = useTaskContext();

  const handleAddTaskClick = () => {
    if(newTask.trim()) {
      handleAddNewTask({text: newTask})
      setNewTask('')
    }
  };


  return(
    <>
      <input type="text" placeholder="Enter new task" value={newTask} onChange={e => setNewTask(e.target.value)}/>
      <button onClick={handleAddTaskClick}>ADD NEW TASK</button>
    </>
  )


};
