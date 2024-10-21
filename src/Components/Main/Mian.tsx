import React, { useEffect, useMemo, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import { Radio } from '../../types'
import { useRadio } from '../../Context/RadioContext'
import useDebounce from '../../Hooks/useDebounce'
import { RotatingLines } from 'react-loader-spinner'

const RadioList = () => {
  const [radios, setRadios] = useState<Radio[]>([])
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [isLoading, setIsLoading] = useState(false);

  const { handleAudioPlayer, isPlaying } = useRadio()

  const handlePlay = (radio: Radio) => {
    handleAudioPlayer(radio, radios)
  };

  useEffect(() => {
    const fetchRadios = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get('https://mp3quran.net/api/v3/radios');
        setRadios(res.data.radios);
      } catch (error) {
        console.error('Error fetching radios:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRadios();
  }, [])

  const filteredRadios = useMemo(() => {
    return radios.filter((radio) =>
      radio.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [radios, debouncedSearchTerm]);

  return (
    <>
      {isLoading ? <div className='w-[80%] min-h-[50vh] flex justify-center items-center '>
        <RotatingLines
          visible={true}
          width="96"
          strokeWidth="5"
          strokeColor="#ddb954"
          animationDuration="0.90"
          ariaLabel="rotating-lines-loading"
        />
      </div> : <>
        <div className='md:w-[50%] w-[80%] mx-auto mt-10'>
          <input className="border-input font-Readexpro placeholder:text-muted-foreground bg-background ring-offset-background flex h-10 w-full rounded-md border py-2 pe-6 ps-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" type="text" placeholder="ابحث عن إذاعة..." value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <ul className='w-[80%] py-5 mb-16 grid gap-2 lg:grid-cols-3 sm:grid-cols-2 md:gap-4'>
          {filteredRadios.map((radio, index) => (
            <Card key={radio.id} index={index} radio={radio} onPlay={handlePlay} isPlaying={isPlaying} />
          ))}
        </ul>
      </>
      }
    </>
  )
}

export default RadioList