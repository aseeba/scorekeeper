import './App.css'
import PlayerForm from './PlayerForm'

function App() {
  return (
    <div className="App">
      <PlayerForm onAddPlayer={() => console.log('onAddPlayer')} />
    </div>
  )
}

export default App