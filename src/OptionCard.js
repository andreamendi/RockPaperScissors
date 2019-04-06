import React from 'react'
import styled from 'styled-components'

const OptionsCardStyles = styled.article`
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px dashed black;

    .card-img {
        max-height: 80%;
        max-width:100%;
    }

`


const OptionCard = ({ option, click }) => {
    let image = '';
    if(option == 'papel') {
        image = 'https://enlacearquitectura.com/wp-content/uploads/papel-en-blanco.jpg'
    } else if(option == 'tijeras'){
        image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTFuO0UfYeMF4Qgm5r5tT684mI9rHL1jY9RvpWlYvOLm-hdaaUA';
    } else {
        image = 'https://images2.listindiario.com/imagen/2018/09/05/532/531746/680x460/201809050045501/gigantes-de-piedra.jpeg'
    }
    return(
        <OptionsCardStyles onClick={ ()=> click(option)}>
            <h2>{option}</h2>
            <img className="card-img" src={image}/>
        </OptionsCardStyles>
    )
}

export default OptionCard;