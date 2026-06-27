import React from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Navbar from './Components/Navbar';

gsap.registerPlugin(useGSAP);

const App = () => {

  return (
    <div className='p-6 min-h-screen bg-black text-white'>
      <Navbar />
    </div>
  )
}

export default App