import styled from 'styled-components/macro'
import Button from '../Button/Button'

const MAX_HUE_VALUE = 120 // 120 is green
const MIN_HUE_VALUE = 0 // 0 is red

export default function Player({ name, score, onMinus, onPlus }) {
  const maxHue = Math.min(score * 10, MAX_HUE_VALUE)
  const hue = Math.max(maxHue, MIN_HUE_VALUE)
  const color = score === 0 ? 'white' : `hsl(${hue}, 50%, 50%)`
  return (
    <PlayerWrapper>
      {name}
      <PlayerScore color={color}>
        <Button onClick={onMinus}>-</Button>
        <span>{score}</span>
        <Button onClick={onPlus}>+</Button>
      </PlayerScore>
    </PlayerWrapper>
  )
}

const PlayerWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(0, 39, 39);
    padding: 5px 15px;
    gap: 5px;
`
const PlayerScore = styled.div`
    color: ${props => props.color || 'black'};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
`
