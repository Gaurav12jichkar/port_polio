import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Routes,Route } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Error';
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      
      <Route exact path='/'
     element={<Home/>}> 
      </Route>

      <Route exact  path='/About'
      element={<About/>}>
      </Route>

      <Route  exact path='/Contact'
      element={<Contact/>}>
      </Route>

      <Route exact path='/signin'
      element={<Login/>}>
      </Route>

      <Route exact path='/Signup'
      element={<Signup/>}>
      </Route>

      <Route 
      element={<Error/>}>
      </Route>
       
      </Routes>
    </>
  )
}

export default App
