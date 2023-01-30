import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { Add,divide,multiply,subtract } from '../Store/Action'

const CounterApp = () => {
  const dispatch=useDispatch()
  const count=useSelector((state)=>state.counter.count)
  return (
    <div><h1>CounterApp</h1>
          <h1>Counter:{count}</h1>
      <button onClick={()=>dispatch(Add())}>add</button>
      <button onClick={()=>dispatch(subtract())}>subtract</button>
      <button onClick={()=>dispatch(multiply())}>muliply</button>
      <button onClick={()=>dispatch(divide())}>divide</button>
    </div>
  )
}

export default CounterApp


