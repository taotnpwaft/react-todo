import React, {useState, useRef, useEffect} from 'react'
import TodoList from './todoList';
import '../App.css'

export default function Form() {

    //task name and status (true if completed, false if not)
    const [task, setTask] = useState(['', false])
    //list of all tasks
    const [taskList, setTaskList] = useState([])
    const input = useRef()
    const [showAlert, setShowAlert] = useState(false)

    useEffect(()=>{
      input.current.focus()
    }, [])

    function handleSubmit(e){
      e.preventDefault();
        // create a new task if input isn't empty and doesn't contain spaces only
        if (input.current.value.replace(/\s/g, '').length>0) {
         setTaskList([...taskList, task])
         setTask(['', false])
         setShowAlert(false)
        } else setShowAlert(true)
      input.current.focus()
    }

    //this function changes status of a task (completed / not completed)
    //it is also passed to TodoList component
    function changeStatus(task, index){
      setTaskList(taskList.map((a, i)=>{
        if(i===index) return [task[0], !task[1]]
        else return a
      }))
    }

    function deleteTask(task){
      setTaskList(taskList.filter(el=>el!==task))
    }

  return (
    <>
    <form action="" onSubmit={e=>handleSubmit(e)} >
        <input ref={input} type="text" value={task[0]} placeholder='type your task' onChange={e=>setTask([e.target.value, false])}/>

        <button type='submit'>create task</button>
    </form>

    {showAlert && <div id="alert">To create a task you have to type something in the input above firstly</div>}

    {taskList.length===0 ? 
      <div id='zeroTasks'>You don't have any tasks to do!</div>
      :
      <TodoList taskList={taskList} fn={changeStatus} del={deleteTask}></TodoList>}

    </>
  )
}
