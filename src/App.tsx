import './App.css'
import AppBackground from './components/background/AppBackground'
import ButtonAppBar from './components/navbar/ButtonAppBar'

import { useState } from 'react'

function App() {

  const [animation, setAnimation] = useState(false);
  const toggleAnimation = () => setAnimation(prev => !prev);
  return (
    <div>
      <AppBackground animation={animation} />
      <ButtonAppBar toggleAnimation={toggleAnimation} />

    </div>
  )
}

export default App
