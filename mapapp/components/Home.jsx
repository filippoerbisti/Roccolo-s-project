import React from 'react'

const Home = () => {
  return (
    <div className='slider-title'>
        <h1 style={{"--count": 4}}>
            <span aria-hidden style={{"--index": 0}}>Slide</span>
            <span aria-hidden style={{"--index": 1}}>Slide</span>
            <span aria-hidden style={{"--index": 2}}>Slide</span>
            <span aria-hidden style={{"--index": 3}}>Slide</span>
            <span>Slide</span>
        </h1>
    </div>
  )
}

export default Home