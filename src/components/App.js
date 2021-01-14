import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Users from './Users';
import Task from './Task';

const App = () => (
  <BrowserRouter>
    <Menu/>
    <div className="margin">
      <Route exact path="/" component={ Users } />
      <Route exact path="/tareas" component={ Task } />
    </div>
  </BrowserRouter>
);

export default App;