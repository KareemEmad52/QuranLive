/* eslint-disable react-refresh/only-export-components */
import { Children, createContext, useCallback, useContext, useEffect, useState } from "react";
import { Radio, RadioContextType } from "../types";

export const RadioContext = createContext<RadioContextType | null>(null);

export const RadioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [radios, setRadios] = useState<Radio | null>(null)
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  const [volume, setVolume] = useState<number>(1);


  const handleAudioPlayer = useCallback((radio: Radio | null, allRadios: Radio[]) => {

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    if (radio) {
      setRadios(radio);
      setIsPlaying(radio.id)
    } else {
      setRadios(null);
    }

    const audio = new Audio(radio?.url);
    audio.volume = volume;
    audio.play();
    setCurrentAudio(audio);
    localStorage.setItem('radioData', JSON.stringify(radio))
  }, [volume, currentAudio])

  const handleStopAndPlayAudio = useCallback(() => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setCurrentAudio(null);
      setIsPlaying(null);
    } else {
      const radioData = localStorage.getItem('radioData')
      if (radioData) {
        setRadios(JSON.parse(radioData))
        const audio = new Audio(JSON.parse(radioData).url);
        audio.volume = volume;
        audio.play();
        setIsPlaying(JSON.parse(radioData).id)
        setCurrentAudio(audio);
      }
    }
  }, [volume, currentAudio]);


  const handleVolumeChange = useCallback((newVolume: number) => {
    setVolume(newVolume);
    if (currentAudio) {
      currentAudio.volume = newVolume;
    }
  }, [currentAudio]);

  useEffect(() => {
    const radioData = localStorage.getItem('radioData')
    if (radioData) {
      setRadios(JSON.parse(radioData))
    }
  }, [])


  return (
    <RadioContext.Provider value={{ radios, handleAudioPlayer, handleStopAndPlayAudio, isPlaying, volume, handleVolumeChange }}>
      {children}
    </RadioContext.Provider>
  )
}

export const useRadio = () => {
  const context = useContext(RadioContext)
  if (!context) {
    throw new Error("useRadio must be used within a RadioProviser")
  }
  return context
}
