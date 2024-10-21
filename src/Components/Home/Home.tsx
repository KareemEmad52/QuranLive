import React from 'react'
import NavBar from '../NavBar/NavBar'
import RadioList from '../Main/Mian'
import Footer from '../Footer/Footer'

const Home = () => {
  return (

    <main className='relative min-h-screen flex items-center gap-2.5 md:5 flex-col bg-secondry'>
      <NavBar />
      <RadioList />
      <Footer />
    </main>
  )
}

export default Home