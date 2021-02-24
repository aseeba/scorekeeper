import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components/macro'
import Player from '../Player/Player'
import Button from '../Button/Button'
import HistoryEntry from '../HistoryEntry/HistoryEntry'
import Navigation from '../Navigation/Navigation'
import GameForm from '../GameForm/GameForm'
import AppHeader from '../AppHeader/AppHeader'

function App() {
  const [players, setPlayers] = useState([])
  const [currentPage, setCurrentPage] = useState('play')
  const [nameOfGame, setNameOfGame] = useState('')
  const[history, setHistory] = useState([])


  return (
    <AppLayout>
    <AppHeader>SCORE KEEPER</AppHeader>

  <AppGrid>
      {/* conditional rendering */}
      {currentPage === 'play' && (
        <div>
          <GameForm onCreateGame={createGame} />
        </div>
      )}

      {currentPage === 'game' && (
        <GameWrapper>
          {nameOfGame}
          {players.map(({ name, score }, index) => (
            <Player
              key={name}
              name={name}
              score={score}
              onPlus={() => handlePlus(index)}
              onMinus={() => handleMinus(index)}
            />
          ))}
          <Button onClick={resetScores}>Reset scores</Button>
          <Button onClick={endGame}>End game</Button>
        </GameWrapper>
      )}

{currentPage === 'history' && (
        <HistoryWrapper>
          {history.map(({ nameOfGame, players, id }) => (
            <HistoryEntry key={id} nameOfGame={nameOfGame} players={players} />
          ))}
        </HistoryWrapper>
      )}

      {(currentPage === 'play' || currentPage === 'history') && (
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      )}
      </AppGrid>
      </AppLayout>
   )

   function createGame({ nameOfGame, playerNames }) {
    setNameOfGame(nameOfGame)
    setPlayers(playerNames.map(name => ({ name, score: 0 })))
    setCurrentPage('game')
  }

  function endGame() {
    setHistory([{ players, nameOfGame, id: uuidv4() }, ...history])
    setPlayers([])
    setNameOfGame('')
    setCurrentPage('play')
  }
 
   function resetScores() {
     setPlayers(players.map(player => ({ ...player, score: 0 })))
   }
 
   function handlePlus(index) {
     const currentPlayer = players[index]
     setPlayers([
       ...players.slice(0, index),
       { ...currentPlayer, score: currentPlayer.score + 1 },
       ...players.slice(index + 1),
     ])
   }
 
   function handleMinus(index) {
     const currentPlayer = players[index]
     setPlayers([
       ...players.slice(0, index),
       { ...currentPlayer, score: currentPlayer.score - 1 },
       ...players.slice(index + 1),
     ])
   }
 }

 export default App

 const AppLayout = styled.main`
margin: 0;
 `

const AppGrid = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  `

const HistoryWrapper = styled.div`
display: grid;
gap: 20px;`

const GameWrapper = styled.div`
display: grid;
gap: 20px;`