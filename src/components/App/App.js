import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Route, Switch, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import AppHeader from '../AppHeader/AppHeader'
import Navigation from '../Navigation/Navigation'
import CreatePage from '../CreatePage/CreatePage'
import GamePage from '../GamePage/GamePage'
import HistoryPage from '../HistoryPage/HistoryPage'

export default function App() {
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')
  const[history, setHistory] = useState([])
  const { push } = useHistory()


  return (
  <AppLayout>
    <AppHeader>SCORE KEEPER</AppHeader>
    <AppGrid>
    <Switch>


      <Route exact path="/">
      <CreatePage onCreateGame={createGame} />
      </Route>

     <Route path="/game">
        <GamePage
          nameOfGame={nameOfGame}
          players={players}
          onMinus={handleMinus}
          onPlus={handlePlus}
          onReset={resetScores}
          onEnd={endGame}
        />
      </Route>

      <Route path="/history">
      <HistoryPage history={history} />
      </Route>

    </Switch>

        <Route exact path={['/', '/history']}>
        <Navigation />
      </Route>

    </AppGrid>
    </AppLayout>
   )

   function createGame({ nameOfGame, playerNames }) {
    setNameOfGame(nameOfGame)
    setPlayers(playerNames.map(name => ({ name, score: 0 })))
    push('/game')
  }

  function endGame() {
    setHistory([{ players, nameOfGame, id: uuidv4() }, ...history])
    setPlayers([])
    setNameOfGame('')
    push('/history')
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

 const AppLayout = styled.main`
margin: 0;
 `

const AppGrid = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  `