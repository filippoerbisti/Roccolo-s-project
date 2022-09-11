import React from 'react'
import { Mapping } from '../components'

const Map = () => {
  return (
    <div>
        <button>
            <a href='/home'>
                HOME
            </a>
        </button>
        <button>
            <a href='/help'>
                HELP
            </a>
        </button>
        <Mapping />
    </div>
  )
}

export default Map