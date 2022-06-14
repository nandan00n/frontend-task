import React from 'react';
import './App.css';
import Users from './component/users'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SingleUser from './component/singleUser';

function App() {
  return (
    <div className="App">
         <h1 className='heading'>Front End Task</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Users/>}/>
          <Route exact path="/user/:id" element={<SingleUser/>}/>
        </Routes>
      </Router>

   
    </div>
  );
}

export default App;
