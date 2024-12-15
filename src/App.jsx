import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overviwepage from "./Pages/Overviwepage";
import Productpage from "./Pages/Productpage";
import Sidebar from "./Components/Common/Sidebar";

function App() {
    return (
        <>
       
       
     <BrowserRouter>
     <div className='flex h-screen bg-gray-900 text-gray-100   overflow-hidden'>
      {/* BG */}
      <div className=" fixed  inset-0 z-0">
        <div className="  absolute inset-0 bg-gradient-to-br  from-gray-900  to-gray-900 opacity-80"/>
        <div className=" absolute  inset-0  backdrop-blur-sm"/>
      </div>
      <Sidebar/>
      <Routes>
     
        <Route  path="/" element={<Overviwepage/>}/>
        <Route path="/product" element={<Productpage/>}/>
        
      </Routes>
      </div>
      
      </BrowserRouter>
      
      </>
    );
    
  }
  
  export default App;
  