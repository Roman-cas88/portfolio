import React from 'react'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'
import { Education } from './Pages/Education'
import { Expirience } from './Pages/Expirience'
import { Home } from './Pages/Home'
import { Portfolio } from './Pages/Portfolio'
import './Pages/Pages.css'


export const Content = () => {
  return (
    <>
      <Home />
      <About />
      <Education />
      <Expirience />
      <Portfolio />
      <Contact />  
    </>
  )
}
