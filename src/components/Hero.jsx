import React from 'react'

const Hero = () => {
  return (
    <div><div className="hero  min-h-screen bg-[url(./assets/portfolio-background-header-53082_1080x675.jpg)] bg-cover bg-center">
  <div className="hero-content text-center">
    <div className="">
      <h1 className="text-5xl font-bold text-shadow-lg">Hello there</h1>
      <p className="py-6 text-5xl  font-bold w-full text-shadow-lg">
        I am Michael and I'm a <span className="text-[#bc01b5]">Full Stack Developer</span>
      </p>
      <button className="btn bg-[#2d122e] mt-10 h-10 w-48 text-2xl font-mono rounded-full border-gray-400 hover:bg-[#663974] ">My Projects</button>
    </div>
  </div>
</div></div>
  )
}

export default Hero