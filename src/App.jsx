import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import gsap from 'gsap';
import './index.css';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className='flex-center h-[100vh]'>
      
      <h1 className='text-4xl text-indigo-300 '>Hello World</h1>
    </div>
  )
}

export default App
