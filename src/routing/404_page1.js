import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Page_404 from '../404_page2'
import About from './routing_(about)'
import Contact from './routing_(contact)'
import Home from './routing_(home)'

function Error_page() {
  return (
    <>
       <div className='App'>

<Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/> 
    <Route path='/Contact' element={<Contact/>}/>
    <Route path="*" element={<Page_404/>}/>

</Routes>

</div>
<Link to='/'>Home</Link>
<br></br>
<Link to='/about'> About</Link>
<br></br>
<Link to='/Contact'>Contact</Link>
    
    </>
 
  )
}

export default Error_page