import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overviwepage from "./Pages/Overviwepage";
import Productpage from "./Pages/Productpage";
import Sidebar from "./Components/Common/Sidebar";
import Analytics from "./Pages/Analytics"
import Header from "./Components/Common/Header";

function App() {
  const[isOpen,setIsOpen]=useState(false)
  const handleMessageFromChild = (data) => {
        setIsOpen(data)
  };
    return (
        <>
       <div className=" bg-gray-900 text-gray-100   overflow-hidden">
       <div className="  absolute inset-0 bg-gradient-to-br  from-gray-900  to-gray-900 opacity-80"/>
       <div className=" absolute  inset-0  backdrop-blur-sm"/>
       <Header sendDataToParent={handleMessageFromChild}/>
       
       </div>
       
      
     <BrowserRouter>
     <div className='flex h-screen bg-gray-900 text-gray-100   overflow-hidden'>
      {/* BG */}
      <div className=" fixed  inset-0 z-0">
      {isOpen && <p>hello</p>}
      </div>
      <Sidebar/>
      <Routes>
     
        <Route  path="/" element={<Overviwepage/>}/>
        <Route path="/product" element={<Productpage/>}/>
        <Route path="/analytics" element={<Analytics/>}/>

        
      </Routes>
      </div>
      
      </BrowserRouter>
      
      </>
    );
    
  }
  
  export default App;
  