import React from 'react'

export default function TodoList(props) {

    const completed = {
        color: 'grey',
        textDecoration: 'line-through'
    }

  return (
    <>
    <ul>
        { props.taskList.map((a, i)=>{
            return (
            <li key={i} style={a[1] === true ? completed : null }
              onClick={e=>props.fn(a, i)}
              title={a[1] === true ? 'mark as completed' : 'mark as uncompleted'}
            >{a}</li>)
        }) }
    </ul>
    </>
  )
}
