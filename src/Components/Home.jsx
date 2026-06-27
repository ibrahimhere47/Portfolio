import React from 'react'
import backgroundVideo from "/Pictures/background-video.mp4"

const Home = () => {
    return (
    <div className="relative h-screen w-full unselectable">
        <video
            autoPlay
            loop
            muted
            playsInline
            preload='auto'
            className="absolute inset-0 h-full w-full object-cover"
        >
        <source src={backgroundVideo} type="video/mp4" />
        </video>

        <div className="relative z-10 flex flex-col h-full justify-center text-white px-10 gap-4">
            <h1 className="text-7xl font-bold font-lora tracking-wide">Your <span className='italic tracking-tight'>Web Designer</span></h1>
            <p className='text-3xl font-lora'>Reliable, minimalistic, simple and <br />ready to use <span className='italic'>website development</span> at your finger tips.</p>
            <button className='cool-button'>Contact Now</button>
        </div>
    </div>
    )
}

export default Home