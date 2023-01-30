import { COUNTER_INCREMENT,COUNTER_DECREMENT,COUNTER_MULTIPLY,COUNTER_DIVIDE, ADD_TODO, COMPLETE_TODO, DELETE_TODO, UPDATE_TODO, GET_TODOS } from "./actiontype"
export const Add=()=>({type:COUNTER_INCREMENT})
export const subtract=()=>({type:COUNTER_DECREMENT})
export const multiply=()=>({type:COUNTER_MULTIPLY})
export const divide=()=>({type:COUNTER_DIVIDE})

export const getTodos=(payload)=>(
  {type:GET_TODOS,payload}
)
export const todoAdd=(payload)=>({type:ADD_TODO,payload})
export const todoComplete=(id)=>({type:COMPLETE_TODO,payload:id})
export const todoUpdate=(payload)=>({type:UPDATE_TODO,payload})
export const todoDelete=(id)=>({type:DELETE_TODO,payload:id})