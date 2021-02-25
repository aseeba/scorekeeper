import styled from 'styled-components';
import Button from '../Button/Button'
import Player from '../Player/Player'

export default function GamePage({
  nameOfGame,
  players,
  onMinus,
  onPlus,
  onReset,
  onEnd,
}) {
  return (
    <GameWrapper>
      {nameOfGame}
      {players.map(({ name, score }, index) => (
        <Player
          key={name}
          name={name}
          score={score}
          onPlus={() => onPlus(index)}
          onMinus={() => onMinus(index)}
        />
      ))}
      <Button onClick={onReset}>Reset scores</Button>
      <Button onClick={onEnd}>End game</Button>
    </GameWrapper>
  )
}

const GameWrapper = styled.div`
display: grid;
gap: 20px;
`