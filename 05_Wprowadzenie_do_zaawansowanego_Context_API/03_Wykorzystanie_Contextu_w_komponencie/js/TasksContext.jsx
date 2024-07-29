import { createContext, useContext, useState } from "react";
import React from "react";


const TasksContext = createContext();

export const TasksProvider  = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  const handleAddNewTask = (task) => {
    setTasks(state => [...state, {id: Date.now(), text: task.text, completed: false}])
  }

  const handleToogleTaskCompletion = (taskID) => {
    setTasks(state => state.map(task => task.id === taskID ? {...task, completed: !task.completed} : task))
  }

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case "completed":
        return task.completed;
      case "incomplete":
        return !task.completed;
      case "all":
        return task
      default:
        return true;
    }
  });


  return(
  <>
    <TasksContext.Provider value={{tasks, handleAddNewTask, handleToogleTaskCompletion, filter, setFilter, filteredTasks}}>
      {children}
    </TasksContext.Provider>
  </>
  )
};

export const useTaskContext = () => useContext(TasksContext);