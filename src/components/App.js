import './App.css'
import PlayerForm from './PlayerForm'
import Header from './Header'

function App() {
  return (
    <>
    <Header title="SCOREKEEPER" />
    <div className="App">
      <PlayerForm onAddPlayer={() => console.log('onAddPlayer')} />
    </div>
    </>
  )
}

export default App