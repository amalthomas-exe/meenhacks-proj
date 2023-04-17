import { useState } from 'react'
import {Routes , Route } from "react-router-dom"
import Home from './Components/Home/Home'
import Header from './Components/Header/header'
import Form from './Components/Form/Form'
import Details from './Components/Details/Details'

function App() {

  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route exact path='/form' element={<Form/>}/>
            <Route exact path='/details/:id' element={<Details/>}/>
       </Routes> 
    </div>
  )
}

export default App
