import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "../pages/Homepage"
import ServicePage from "../pages/ServicePage"
// import MechanicPage from "../pages/MechanicPage"
// import Carwasher from "../pages/Carwasher"
// import Contact from "../pages/Contact"



function App() {
 
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/services" element={<ServicePage/>}/>
       
      </Routes>
    </Router>   
      
    </>
  )
}

export default App
{/* <Route path="/services" element={<ServicePage/>}/>
        // <Route path="/mechanics" element={<MechanicPage/>}/>
        // <Route path="/carwashers" element={<Carwasher/>}/>
        // <Route path="/contact" element={<Contact/>}/> */}