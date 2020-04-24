import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar'
import {BrowserRouter,Route} from 'react-router-dom';
import ExercisesList from './components/exerciselist'
import EditExercise from './components/exercisedit'
import User from './components/createuser'
import Create from './components/createexercise'


function App() {

  return (
    <BrowserRouter>
    <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={Create} />
      <Route path="/user" component={User} />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
