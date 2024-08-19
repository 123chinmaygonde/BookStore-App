
import React from 'react'
import Home from './home/Home.jsx'

import {Routes,Route} from 'react-router-dom'
import Courses from './courses/Courses.jsx'
import Signup from './components/Signup.jsx'

const App = () => {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>
     </Routes>
     </>
   
      
    
  )
}

export default App
