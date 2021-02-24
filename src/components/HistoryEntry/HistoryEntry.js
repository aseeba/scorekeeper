import React from 'react'
import styled from 'styled-components'

export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <HistoryEntryWrapper>
      <GameTitle>{nameOfGame}</GameTitle>
      {players.map((player, index) => (
        <Player key={index}>
          <span>{player.name}</span>
          <span>{player.score}</span>
        </Player>
      ))}
    </HistoryEntryWrapper>
  )
}

const HistoryEntryWrapper = styled.section`
    display: grid;
    gap: 10px;
    `

const Player = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    `
const GameTitle = styled.h2`
font-weight: 600;
font-size: 0.8em;
text-transform: uppercase;
background-color: darkturquoise;
color: rgb(0, 39, 39);
padding: 0;
margin: 0;
text-align: center;
`