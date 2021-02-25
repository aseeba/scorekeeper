import styled from 'styled-components/macro'

export default styled.button`
padding: 10px;
background-color: ${props => props.isActive ? "rgb(0, 39, 39)" : "darkturquoise"};
color: ${props => props.isActive ? "darkturquoise" : "rgb(0, 39, 39)"};
font-weight: ${props => props.isActive ? "600" : "400"};
border: none;
width: 100%;
font-family: inherit
`