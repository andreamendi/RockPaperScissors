import React from 'react'
import styled from 'styled-components'

const OptionsCardStyles = styled.article`
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed black;

`


const OptionCard = ({ option }) => {
    return(
        <OptionsCardStyles>
            <h2>{option}</h2>
        </OptionsCardStyles>
    )
}

export default OptionCard;