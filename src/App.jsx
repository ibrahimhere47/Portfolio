import React from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Navbar from './Components/Navbar';

gsap.registerPlugin(useGSAP);

const App = () => {

  return (
    <>
      <Navbar />
      <h1 className='font-lora font-bold'>I am a Heading</h1>
    </>
  )
}

export default App