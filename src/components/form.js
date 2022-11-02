import React, {useState, useRef} from 'react'
import TodoList from './todoList';

export default function Form() {

    //task name and status (true if completed, false if not)
    const [task, setTask] = useState(['', false])
    //list of all tasks
    // const [taskList, setTaskList] = useState([])
    const input = useRef()

    function handleSubmit(e){
        e.preventDefault();

        // create a new task if input isn't empty and doesn't contain spaces only
        if (input.current.value.replace(/\s/g, '').length>0) {
        //  setTaskList([...taskList, task])
         setTask(['', false])
        }

        input.current.focus()
    }

  return (
    <>
    <form action="" onSubmit={e=>handleSubmit(e)} >
        <input ref={input} type="text" value={task[0]} placeholder='type your task' onChange={e=>setTask([e.target.value, false])}/>

        <button type='submit'>create task</button>
    </form>

    <TodoList task={task} ></TodoList>
    </>
  )
}
