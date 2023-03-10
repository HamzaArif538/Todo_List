import React from 'react'
import TodoItem from "./TodoItem";


const Todos = (props) => {
  let myStyle = {
    minheight: "100vh"
  }
  return (
    <div className='container my-5  ' style={myStyle}>
      <h3 className=' my-3' >Todos List</h3>
      {props.todos.length===0? "No Todos to display":
      props.todos.map((todo) => {
        return (
          <>
        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr/>
          </>
        )
      })
      }
    </div>
  )
}

export default Todos
