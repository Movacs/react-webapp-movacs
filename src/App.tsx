import './App.css'
import AppBackground from './components/background/AppBackground'
import ButtonAppBar from './components/navbar/NavBar'



function App() {
  return (
    <div>
      <AppBackground animation={false} />
      <ButtonAppBar />

    </div>
  )
}

export default App
