import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
//
import TitleText from '../components/TitleText';
import SingleCardDisplay from '../components/SingleCardDisplay';

//
import { cards, cards2, cards6 } from '../data/cards';
import Colors from '../constants/Colors';
import { spacing } from '../constants/Sizes';

//styled-components
const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  justify-content: center;
  padding: ${spacing.sm};
`;
const MenuButton = styled.button`
  font-weight: bold;
  color: ${Colors.backgroundColor};
`;
//

//

//displays a given number cards at given intervals, user keps track of the count and enters the final count at the end of the run of cards, app compares user count to actual and displays both.

//cards will be displayed as images, they are stored in an object with unique card id, card value, card count value

// const randNum = Math.floor(Math.random() * (52 + 1));

const singleDeckArray = cards;
const doubleDeckArray = cards2;
const sixDeckArray = cards6;

const shuffle = arr => {
  arr.sort(() => 0.5 - Math.random());
};

function CardCountTrainer() {
  // console.log(doubleDeckArray);
  const [currentCardImage, setCurrentCardImage] = useState('');
  const [count, setCount] = useState(0);
  const [countDisplay, setCountDisplay] = useState(false);
  const [numDecks, setNumDecks] = useState(1);
  const [dealSpeed, setDealSpeed] = useState(1000);

  const drawCard = arr => {
    let drawnCard = arr.pop();
    const { value, image } = drawnCard;
    setCurrentCardImage(image);
    setCount(count => count + value);
  };

  const begin = numDecks => {
    console.log(numDecks);
    if (numDecks === '1') {
      dealCards(singleDeckArray);
    } else if (numDecks === '2') {
      dealCards(doubleDeckArray);
    } else if (numDecks === '6') {
      dealCards(sixDeckArray);
    }
  };

  const dealCards = arr => {
    console.log(arr);
    shuffle(arr);
    const numCards = arr.length;
    let x = 0;
    let cardInterval = setInterval(() => {
      drawCard(arr);
      if (++x === numCards) {
        clearInterval(cardInterval);
      }
    }, dealSpeed);
  };

  const toggleCountDisplay = () => {
    setCountDisplay(countDisplay => !countDisplay);
  };

  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText title={'Count'} subtitle='Trainer' />
      </div>

      {/* Dropdown speed selector */}

      <div className='dropdown'>
        <MenuButton
          style={{
            backgroundImage: Colors.blueGradient,
            color: Colors.backgroundColor,
            fontWeight: 'bold',
          }}
          className='btn btn-secondary dropdown-toggle'
          type='button'
          id='dropdownMenuButton'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          {dealSpeed / 1000 + ' seconds'}
        </MenuButton>
        <div
          className='dropdown-menu'
          aria-labelledby='dropdownMenuButton'
          onClick={e => {
            setDealSpeed(e.target.value);
          }}
        >
          <MenuButton className='dropdown-item' value='2000' type='button'>
            2 Seconds
          </MenuButton>
          <MenuButton className='dropdown-item' value='1500' type='button'>
            1 1/2 Second
          </MenuButton>
          <MenuButton className='dropdown-item' value='1000' type='button'>
            1 Second
          </MenuButton>
          <MenuButton className='dropdown-item' value='500' type='button'>
            1/2 Second
          </MenuButton>
        </div>
      </div>

      {/* Number of decks selector, sets array of cards as state */}

      <div className='dropdown'>
        <MenuButton
          style={{
            backgroundImage: Colors.blueGradient,
            color: Colors.backgroundColor,
            fontWeight: 'bold',
          }}
          className='btn btn-secondary dropdown-toggle'
          type='button'
          id='dropdownMenuButton'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          Number of decks
        </MenuButton>
        <div
          className='dropdown-menu'
          aria-labelledby='dropdownMenuButton'
          onClick={e => {
            setNumDecks(e.target.value);
          }}
        >
          <MenuButton
            className='dropdown-item'
            value='1'
            type='button'
            name='1 deck'
          >
            1 Deck
          </MenuButton>
          <MenuButton
            className='dropdown-item'
            value='2'
            type='button'
            name='2 decks'
          >
            2 Decks
          </MenuButton>
          <MenuButton
            className='dropdown-item'
            value='6'
            type='button'
            name='6 decks'
          >
            6 Decks
          </MenuButton>
        </div>
      </div>

      <button
        className='btn btn-secondary'
        onClick={() => begin(numDecks)}
        style={{
          background: Colors.blueGradient,
          color: Colors.backgroundColor,
        }}
      >
        Begin
      </button>
      <div>
        <SingleCardDisplay cardImage={currentCardImage} />
      </div>
      <button
        className='btn btn-secondary'
        onClick={() => toggleCountDisplay()}
        style={{
          background: Colors.blueGradient,
          color: Colors.backgroundColor,
        }}
      >
        Answer
      </button>

      {countDisplay ? <div>{count}</div> : null}
    </Container>
  );
}

export default CardCountTrainer;
