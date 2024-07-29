import { useState } from "react";
import { useTaskContext } from "./TasksContext";

export const Filter = () => {

  const {filter, setFilter} = useTaskContext();

  return(
    <>
       <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value='all'>all</option>
        <option value='completed'>completed</option>
        <option value='incomplete'>incomplete</option>
      </select>
    </>
  )
};
