import React from 'react'

const HomeTitle = () => {
  return (
    <div className='slider-title'>
        <h1 style={{"--count": 4}}>
            <span aria-hidden style={{"--index": 0}}>Titolo</span>
            <span aria-hidden style={{"--index": 1}}>Titolo</span>
            <span aria-hidden style={{"--index": 2}}>Titolo</span>
            <span aria-hidden style={{"--index": 3}}>Titolo</span>
            <span>Titolo</span>
        </h1>
    </div>
  )
}

export default HomeTitle