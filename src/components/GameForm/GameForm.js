import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import styled from 'styled-components/macro'

export default function GameForm({ onCreateGame }) {
  return (
    <GameFormWrapper onSubmit={handleSubmit}>
    <Input
      name="nameOfGame"
      labelText="Name of game"
      placeholder="e.g. Carcassonne"
    />
    <Input
      name="playerNames"
      labelText="Player names"
      placeholder="e.g. John Doe, Jane Doe"
    />
    <Button>Create game</Button>
    </GameFormWrapper>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { nameOfGame, playerNames } = form.elements

    onCreateGame({
      nameOfGame: nameOfGame.value,
      playerNames: playerNames.value.split(',').map(name => name.trim()),
    })
    form.reset()
    nameOfGame.focus()
  }
}

const GameFormWrapper = styled.form`
    display: grid;
    gap: 10px;
    `