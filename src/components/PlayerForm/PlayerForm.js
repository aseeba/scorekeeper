import './PlayerForm.css'
import React from 'react'
import './PlayerForm'

export default function Player_form({ onAddPlayer }) {
    return (
    <form className="PlayerForm" onSubmit={handleSubmit}>
      <label>
          <p>Add player:</p>
          <input name="player" placeholder="Add player name here" />
          </label>  
    </form>
    )
function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.player
    const name = input.value
    onAddPlayer(name)
    form.reset()
    input.focus()
    }
}