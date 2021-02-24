import React from 'react'
import styled from 'styled-components';

export default function Input({ labelText, placeholder, name }) {
  return (
    <Label className="Input">
      {labelText}
      <InputStyled name={name} placeholder={placeholder} type="text" />
    </Label>
  )
}

const Label = styled.label`
display: grid;
gap: 4px;
`

const InputStyled = styled.input`
    border: 2px solid darkturquoise;
    width: 100%;
    opacity: 0.7;
    background-color:  rgb(0, 19, 19);
    color: white;
    margin-bottom: 10px;
    `