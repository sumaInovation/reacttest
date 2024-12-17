import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overviwepage from "./Pages/Overviwepage";
import Productpage from "./Pages/Productpage";
import Sidebar from "./Components/Common/Sidebar";
import Analytics from "./Pages/Analytics"
import Header from "./Components/Common/Header";
import { Menu } from "lucide-react";

function App() {
    return (
        <>
       
       
     <BrowserRouter>
    
     <div className=' h-screen bg-gray-900 text-gray-100   overflow-hidden'>
     
     <div className="text-2xl font-semibold text-gray-100 border-2
      border-gray-500 rounded-sm p-5 pl-10 flex  justify-between ">
        <p>
        PPT Inovation
          </p>
      <Menu className="lg:hidden"/>
      </div>
      {/* BG */}
      <div  className=" flex overflow-hidden h-screen">
        
       
      <Sidebar/>
      <Routes>
     
        <Route  path="/" element={<Overviwepage/>}/>
        <Route path="/product" element={<Productpage/>}/>
        <Route path="/analytics" element={<Analytics/>}/>

        
      </Routes>
      </div>
      <p className="text-2xl font-semibold text-gray-100 border-2 border-gray-500 rounded-sm p-5">PPT Inovation</p>
      </div>
      </BrowserRouter>
      
      
      </>
    );
    
  }
  
  export default App;
  