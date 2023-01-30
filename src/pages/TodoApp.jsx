import React, { useEffect, useRef } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { getTodos, todoAdd } from '../Store/Action';
import axios from "axios";
const TodoApp = () => {
  const ref=useRef()
  const dispatch=useDispatch()
  const todos=useSelector((state)=>state.todo.todos)
  const addnew=()=>{
    let value=ref.current.value;
    // console.log(value);
    dispatch(todoAdd({
      value:value,
      iscompleted:false,
    })
    );
  }
  useEffect(()=>{
    axios.get("http://localhost:8080/todos").then((r)=>{
      dispatch(getTodos(r.data))
    // console.log(r.data);
});
  },[])
  return (
    <div>
      <div>
        <h1>TODO APP</h1>
      <input ref={ref} type="text" placeholder="enter here......."/>
      <button onClick={addnew}>add</button>
      </div>
    <br/>    <br/>    <br/>  
         {todos.map((todo)=>(
                  <div key={todo.id}>{todo.value}</div>
        ) )}
    </div>
  )
}

export default TodoApp;