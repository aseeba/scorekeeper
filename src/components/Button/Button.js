import styled from 'styled-components/macro'

export default styled.button`
padding: 10px;
background-color: ${props => props.isActive ? "rgb(0, 39, 39)" : "darkturquoise"};
color: ${props => props.isActive ? "darkturquoise" : "rgb(0, 39, 39)"};
font-weight: ${props => props.isActive ? "600" : "400"};
border: none;
width: 100%;
text-decoration: none;
text-align: center;
font-family: inherit;


&.active {
    background-color: rgb(0, 39, 39);
    color: darkturquoise;
    font-weight: 600;
  }
  `