import React from 'react'
import { useState } from 'react'
import './App.css'
import PlayerForm from '../PlayerForm/PlayerForm'
import Header from '../Header/Header'
import Player from '../Player/Player'
import Button from '../Button/Button'

function App() {

const [players, setPlayers] = useState([])

function handleAddPlayer(name){
  setPlayers(oldPlayers => [...oldPlayers, {name, score: 0}])
}

function handlePlus(index){
  setPlayers(players => [
    ...players.slice(0, index),
    { ...players[index], score: players[index].score + 1 },
    ...players.slice(index + 1),
  ])
}

function handleMinus(index){
  setPlayers(players => [
    ...players.slice(0, index),
    { ...players[index], score: players[index].score - 1 },
    ...players.slice(index + 1),
  ])
}

function resetAll(){
setPlayers([])
}

function resetScore(name){
  setPlayers(players.map(player => ({ ...player, score: 0 })))
}

  return (
    <>
    <Header title="SCORE KEEPER" />
    
    <div className="App">

    <main className="App__main">
      <PlayerForm onAddPlayer={handleAddPlayer} />

      {players.map((player, index) =>
      <Player
      name={player.name}
      score={player.score}
      onPlus={() => handlePlus(index)}
      onMinus={() => handleMinus(index)}
      />
      )}

      <Button
        text={"Reset Scores"}
        onClick={resetScore}></Button>

      <Button
        text={"Reset all"}
        onClick={resetAll}
      ></Button>

      </main>
      </div>
    </>
  )
}

export default App