import React from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Navbar from './Components/Navbar';
import Home from './Components/Home';

gsap.registerPlugin(useGSAP);

const App = () => {

  return (
    <div className='min-h-screen bg-black text-white no-scrollbar'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App