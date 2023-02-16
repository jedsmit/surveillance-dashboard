import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
//
import TitleText from '../components/TitleText';
import SingleCardDisplay from '../components/SingleCardDisplay';

//
import { cards, cards2, cards6 } from '../data/cards';
import Colors from '../constants/Colors';
import { spacing, fontSizes } from '../constants/Sizes';

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
const SettingsContainer = styled.div`
  padding: ${spacing.sm};
`;
const SingleCardContainer = styled.div`
  padding: ${spacing.sm};
`;
//

//

//displays a given number cards at given intervals, user keeps track of the count and enters the final count at the end of the run of cards, app compares user count to actual and displays both.

//cards will be displayed as images, they are stored in an object with unique card id, card value, card count value

// const randNum = Math.floor(Math.random() * (52 + 1));

// let singleDeckArray = cards;
// let doubleDeckArray = cards2;
// let sixDeckArray = cards6;

function CardCountTrainer() {
  // console.log(doubleDeckArray);
  const [currentCardImage, setCurrentCardImage] = useState('');
  const [count, setCount] = useState(0);
  const [countDisplay, setCountDisplay] = useState(false);
  const [numDecks, setNumDecks] = useState(1);
  const [dealSpeed, setDealSpeed] = useState(1000);

  const oneDeck = cards;
  const twoDeck = cards2;
  const sixDeck = cards6;

  const shuffle = arr => {
    arr.sort(() => 0.5 - Math.random());
  };

  const drawCard = arr => {
    let drawnCard = arr.pop();
    const { value, image } = drawnCard;
    setCurrentCardImage(image);
    setCount(count => count + value);
  };

  // deals all cards in the chosen interval after removing 1-4 cards randomly
  const dealCards = arr => {
    console.log(arr);
    shuffle(arr);
    const numCardsRemoved = Math.floor(Math.random() * 4);
    const numCards = arr.length - numCardsRemoved;
    let x = 0;
    let cardInterval = setInterval(() => {
      drawCard(arr);
      if (++x === numCards) {
        clearInterval(cardInterval);
      }
    }, dealSpeed);
  };

  const begin = numDecks => {
    setCurrentCardImage('');
    setCount(0);
    setCountDisplay(false);
    const singleDeckArray = oneDeck.map(i => i);
    const doubleDeckArray = twoDeck.map(i => i);
    const sixDeckArray = sixDeck.map(i => i);
    console.log(numDecks);
    if (numDecks === '1') {
      dealCards(singleDeckArray);
    } else if (numDecks === '2') {
      dealCards(doubleDeckArray);
    } else if (numDecks === '6') {
      dealCards(sixDeckArray);
    }
  };

  const toggleCountDisplay = () => {
    setCountDisplay(countDisplay => !countDisplay);
  };

  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText title={'Count'} subtitle='Trainer' />
      </div>
      <div
        className='row'
        style={{ fontSize: fontSizes.md, margin: spacing.xxs }}
      >
        Welcome to the Count Trainer! Use this tool to proactice your running
        count. First select the speed and the number of decks. Then press the
        "Begin" button to start. After the cards stop, press the "Answer" button
        to see if your count is correct.{' '}
      </div>
      {/* Dropdown speed selector */}
      <div className='row'>
        <div className='col-sm-6'>
          <SettingsContainer>
            <div className='row'>
              <div className='dropdown'>
                <MenuButton
                  style={{
                    backgroundImage: Colors.blueGradient,
                    color: Colors.backgroundColor,
                    fontWeight: 'bold',
                    margin: spacing.sm,
                  }}
                  className='btn btn-secondary dropdown-toggle'
                  type='button'
                  id='dropdownMenuButton'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Speed = {dealSpeed / 1000 + ' seconds per card'}
                </MenuButton>
                <div
                  className='dropdown-menu'
                  aria-labelledby='dropdownMenuButton'
                  onClick={e => {
                    setDealSpeed(e.target.value);
                  }}
                >
                  <MenuButton
                    className='dropdown-item'
                    value='2000'
                    type='button'
                  >
                    2 Seconds
                  </MenuButton>
                  <MenuButton
                    className='dropdown-item'
                    value='1500'
                    type='button'
                  >
                    1 1/2 Second
                  </MenuButton>
                  <MenuButton
                    className='dropdown-item'
                    value='1000'
                    type='button'
                  >
                    1 Second
                  </MenuButton>
                  <MenuButton
                    className='dropdown-item'
                    value='500'
                    type='button'
                  >
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
                    margin: spacing.sm,
                  }}
                  className='btn btn-secondary dropdown-toggle'
                  type='button'
                  id='dropdownMenuButton'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Number of decks = {numDecks}
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
              <MenuButton
                className='btn btn-secondary'
                onClick={() => begin(numDecks)}
                style={{
                  background: Colors.blueGradient,
                  color: Colors.backgroundColor,
                  margin: spacing.sm,
                }}
              >
                Begin
              </MenuButton>
              <MenuButton
                className='btn btn-secondary'
                onClick={() => toggleCountDisplay()}
                style={{
                  background: Colors.blueGradient,
                  color: Colors.backgroundColor,
                  margin: spacing.sm,
                }}
              >
                Answer
              </MenuButton>

              {countDisplay ? (
                <MenuButton
                  disabled
                  style={{
                    background: Colors.blueGradient,
                    color: Colors.backgroundColor,
                    margin: spacing.sm,
                    fontWeight: 'bold',
                  }}
                >
                  {count}
                </MenuButton>
              ) : null}
            </div>
          </SettingsContainer>
        </div>
        <div className='col-sm-6'>
          <SingleCardContainer
            style={{
              margin: spacing.sm,
              justifyContent: 'right',
            }}
          >
            <SingleCardDisplay cardImage={currentCardImage} />
          </SingleCardContainer>
        </div>
      </div>
    </Container>
  );
}

export default CardCountTrainer;
