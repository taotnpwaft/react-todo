import React, {useEffect, useState} from 'react'

export default function TodoList(props) {

    const [taskList, setTaskList] = useState([])

    useEffect(()=>{
        setTaskList(...taskList, props.task)
    }, [props.task])

    const completed = {
        color: 'grey',
        textDecoration: 'line-through'
    }

    function handleClick(e, i){
        console.log(props.taskList[i][1])

    }

  return (
    <>
    <ul>
        { taskList.map((a, i)=>{
            return <li key={i} style={a[1] === true ? completed : null }
            onClick={e=>handleClick(e, i)}>{a}</li>
        }) }
    </ul>
    </>
  )
}
