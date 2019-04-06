import React from 'react'
import styled from 'styled-components'

const HeaderStyles = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    color: green;
    background-color: gray;

    .dark{
        color: red;
    }
`;

// const Header = (props) => {
const Header = ({ title, background, click }) => {
    return(
        <HeaderStyles>
            <button onClick={()=> click('vs')}>Player vs Player</button>
            <h1 className={background}>{title}</h1>
            <button onClick={()=> click('single')}>Player vs Computer</button>
        </HeaderStyles>
    )
}

export default Header;