import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './assets/Header.jsx'
import Wip from './assets/Wip.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Wip />
  </StrictMode>,
)
