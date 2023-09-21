import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MainContent from './components/MainContent.jsx'
import Gallery from "./components/Gallery.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Gallery/>
  </React.StrictMode>,
)
