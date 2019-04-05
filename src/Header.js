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
const Header = ({ title, background }) => {
    return(
        <HeaderStyles>
            <h1 className={background}>{title}</h1>
        </HeaderStyles>
    )
}

export default Header;