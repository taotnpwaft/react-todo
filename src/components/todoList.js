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
            return (<div className='task'>
            <li key={i} style={a[1] === true ? completed : null }
              onClick={e=>props.fn(a, i)}
              title={a[1] === false ? 'mark as completed' : 'mark as uncompleted'}
            >{a[0]} | {a[2]}</li>
            <span className='deleteBtn' title='delete this task' 
            onClick={e=>props.del(a)}>delete</span>
            </div>)
        }) }
    </ul>
    </>
  )
}
