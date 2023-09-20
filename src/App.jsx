import Home from "./components/Home.jsx";
import LogIn from "./components/LogIn.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";

function App(){
  return(
    // <Home/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="loginPage" element={<LogIn/>}/>
          <Route path="navbar" element={<NavBar/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;