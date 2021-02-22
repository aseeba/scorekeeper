import './App.css'
import PlayerForm from './PlayerForm'
import Header from './Header'
import Player from './Player'

function App() {
  return (
    <>
    <Header title="SCOREKEEPER" />
    <div className="App">
      <PlayerForm onAddPlayer={() => console.log('onAddPlayer')} />
      <Player
      name="John Doe"
      score="10"
      onPlus={() => console.log('onPlus')}
      onMinus={() => console.log('onPlus')}
      />
      <Player
      name="Jane Doe"
      score="20"
      onPlus={() => console.log('onPlus')}
      onMinus={() => console.log('onPlus')}
      />
    </div>
    </>
  )
}

export default App