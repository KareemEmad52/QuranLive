import { Dispatch, SetStateAction } from "react"

export interface Radio {
  id: number
  name: string
  url: string
  recent_date: string
}

export interface RadioContextType {
  radios: Radio|null
  handleAudioPlayer: (radio: Radio| null ,allRadios:Radio[]) => void,
  handleStopAndPlayAudio: ()=>void,
  isPlaying: number | null,
  volume: number,
  handleVolumeChange: (newVolume:number)=>void  ,
}