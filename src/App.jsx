import Home from "./components/Home.jsx";
import LogIn from "./components/LogIn.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery.jsx";

function App(){
  return(
    // <Home/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="loginPage" element={<LogIn/>}/>
          <Route path="gallery" element={<Gallery/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;