import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './App.css'


const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
          <Routes>
          <Route exact path="/" element={<Landing />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
