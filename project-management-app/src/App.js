import React, { useState, useEffect }from "react";
import {BrowserRouter as Router, Routes, Route, Switch, Navigate} from 'react-router-dom'
import AddProject from "./components/AddProject/AddProject";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import axios from 'axios'
import Dashboard from "./components/Dashboard/Dashboard";
import CurrentProject from "./components/CurrentProject/CurrentProject";
import ArchiveProject from "./components/ArchiveProject/ArchiveProject";
import CompletedProject from "./components/CompletedP/CompletedP";

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;


function App() {
  
  const isAuthenticated = () => {
    if (localStorage.getItem('authtoken')) {
      var isAuth=1;
    } 
  }
  let redirectToUrl;
    if (localStorage.getItem('authtoken')) {
        redirectToUrl = <Navigate to={Dashboard}/>;
      }


  return (
    <Router>
      <Routes>
          <Route path="/add-project" element={<AddProject/>} />
          <Route path="/dashboard/projects/all" element={<CurrentProject/>} />
          <Route path="/dashboard/projects/archived" element={<ArchiveProject/>} />
          <Route path="/dashboard/projects/completed" element={<CompletedProject/>} />
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
