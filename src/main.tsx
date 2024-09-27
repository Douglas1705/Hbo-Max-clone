import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './components/NavBar'
import Header from './components/header'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <Header />   
  </StrictMode>,
)
