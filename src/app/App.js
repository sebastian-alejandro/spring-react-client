import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ListEmployees from '../views/listEmployees';
import AddEmployee from '../views/addEmployee';
import Navbar from '../components/navbar/navbar';

function App() {
  return (
    <div className="listEmployees">
      
      <BrowserRouter>
        <Navbar></Navbar>
        <Route path='/listEmployees'component={ListEmployees} />
        <Route path='/addEmployee'component={AddEmployee} />
      </BrowserRouter>
    </div>
  );
}

export default App;