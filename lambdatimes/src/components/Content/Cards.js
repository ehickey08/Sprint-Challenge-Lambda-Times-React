import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardsDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: none;
    flex-direction: row;
    width: 100%;
    margin-top: 16px;
    flex-wrap: wrap;

    @media(min-width:1200px){
        width:1200px;
    }
`

const Cards = props => {
  return (
    <CardsDiv>
      {props.cards.map(card => <Card card = {card} />)}
    </CardsDiv>
  )
}

Cards.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            headline: PropTypes.string,
            tab: PropTypes.string,
            img: PropTypes.string,
            author: PropTypes.string,
        }),
    ),
}

export default Cards;