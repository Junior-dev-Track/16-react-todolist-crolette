import { useState } from 'react'
import './assets/components/reset.css'
import './App.css'
import Todolist from './assets/components/Todolist'
import Header from './assets/components/Header'


function App() {

  return (
    <>
      <Header />
      <Todolist />
    </>
  )
}

export { App }
