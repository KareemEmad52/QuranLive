import logo from "/logo.png"

const NavBar = () => {

  return (
    <section className='sticky top-0 min-h-40 z-10 bg-primary w-full flex flex-col justify-center items-center gap-4 p-5'>
      <img src={logo} alt="" />

    </section>
  )
}

export default NavBar