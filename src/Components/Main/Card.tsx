import React, { useState } from 'react'
import { Radio } from '../../types'
import { Audio } from 'react-loader-spinner'

interface CardProps {
  radio: Radio
  index: number
  onPlay: (radio:Radio) => void,
  isPlaying: number | null,
}

const Card: React.FC<CardProps> = ({ radio, index, onPlay, isPlaying }) => {

  return (
    <li className="group font-Readexpro relative flex min-h-14 items-center rounded-xl bg-white shadow-sm transition md:min-h-20">
      <button className="flex h-full flex-1 items-center gap-3 px-4 py-3 text-sm group-hover:hover:text-primary transition-all duration-200 md:text-base"
        onClick={() => {
          onPlay(radio)
        }}>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-star bg-cover">          {isPlaying === radio.id ? <Audio
          height="26"
          width="28"
          color="#4fa94d"
          ariaLabel="audio-loading"
          wrapperStyle={{}}
          wrapperClass="wrapper-class"
          visible={true}
        /> : index + 1}
        </div>
        <span className="text-start">{radio.name}</span>
      </button>
      <div className="me-4 flex items-center p-2 text-lg text-gray-400"><button data-testid="empty-heart">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path></svg>
      </button>
      </div>
    </li>
  )
}

export default Card