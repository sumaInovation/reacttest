import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overviwepage from "./Pages/Overviwepage";
import Productpage from "./Pages/Productpage";
import Sidebar from "./Components/Common/Sidebar";
import Analytics from "./Pages/Analytics"
import Header from "./Components/Common/Header";

function App() {
    return (
        <>
          <div className=' h-screen bg-gray-900 text-gray-100   overflow-hidden'>
            <Header title={"PPT Inovation"}/>
            
            <main className="flex ">
              <BrowserRouter>
              <Sidebar/>
              <Routes>
                <Route path="/" element={<Overviwepage/>}/>
              </Routes>
              </BrowserRouter>
            
            </main>
            </div>
     
      </>
    );
    
  }
  
  export default App;
  