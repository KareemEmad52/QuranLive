import './App.css'
import { RadioProvider } from './Context/RadioContext'
import Home from './Components/Home/Home'

function App() {



  return (
    <>
        <RadioProvider  >
          <Home />
        </RadioProvider>
    </>
  )
}

export default App
