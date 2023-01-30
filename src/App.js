
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './compoents/Navbar';
import CounterApp from './pages/CounterApp';
import TodoApp from './pages/TodoApp';
function App() {
return (
    <div className="App">
      <h1>REDUX WITH CONTEXT API </h1>
      <Navbar/>
      <Routes>
       <Route path="/" element={<CounterApp/>}></Route>
       <Route path="/TodoApp" element={<TodoApp/>}></Route>
      </Routes>
      </div>
  );
}
export default App;
