import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MainContent from './components/MainContent.jsx'
import Gallery from "./components/Gallery.jsx";
import { DndContext } from '@dnd-kit/core';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <DndContext>
    <App />
    </DndContext>
    
  </React.StrictMode>,
)
