import React, { useState, useEffect } from 'react';
import Colors from '../constants/Colors';
import styled from 'styled-components';
import { thresholdCalculatorData } from '../data/thresholdCalculatorData';
import BaccaratDrawingRulesTable from '../components/BaccaratDawingRulesTable';
import ThresholdCalculator from '../components/ThresholdCalculator';
import CommissionCalculator from '../components/CommissionCalculator';

//styled-components
const Container = styled.div`
  height: 100%;
  width: 100%;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  font-size: 2em;
  justify-content: center;
`;

const TitleText = styled.h1`
  fontsize: 5em;
  margin: 0;
  padding: 10px;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
`;

const DrawingRulesContainer = styled.div`
  margin-top: 3rem;
  margin-right: 8rem;
`;

const ThresholdCalculatorContainer = styled.div`
  margin-top: 3rem;
  font-size: 0.7em;
`;

const CommissionCalculatorContainer = styled.div`
  margin-top: 3rem;
  font-size: 0.7em;
`;

const BaccaratDashboard = () => {
  const { beanBaccarat, miniBaccarat } = thresholdCalculatorData;
  const [gameVariant, setGameVariant] = useState('Select Variant');
  const [gameData, setGameData] = useState({
    houseAdvantage: 0,
    betVolatility: 0,
    hph: 0,
  });

  useEffect(() => {
    if (gameVariant === 'Mini Baccarat') {
      setGameData({
        houseAdvantage: miniBaccarat.houseAdvantage,
        betVolatility: miniBaccarat.betVolatility,
        hph: miniBaccarat.hph,
      });
      console.log(gameData);
    }
    if (gameVariant === 'Bean Baccarat') {
      setGameData({
        houseAdvantage: beanBaccarat.houseAdvantage,
        betVolatility: beanBaccarat.betVolatility,
        hph: beanBaccarat.hph,
      });
    }
  }, [gameVariant]);

  // console.log(gameData);
  return (
    <Container className='container-fluid'>
      <TitleText>Baccarat Dashboard</TitleText>
      <p>todo: side bets</p>
      <div className='row'>
        <div className='col'>
          <div className='dropdown'>
            <button
              className='btn btn-secondary dropdown-toggle'
              type='button'
              id='dropdownMenuButton'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              {gameVariant}
            </button>
            <div
              className='dropdown-menu'
              aria-labelledby='dropdownMenuButton'
              onClick={e => {
                e.stopPropagation();
                setGameVariant(e.target.value);
                console.log(gameVariant);
              }}
            >
              <button className='dropdown-item' value='Mini Baccarat'>
                Mini Baccarat
              </button>
              <button className='dropdown-item' value='Bean Baccarat'>
                Bean Baccarat
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-sm-4'>
          <ThresholdCalculatorContainer className='container-fluid'>
            <ThresholdCalculator
              hph={gameData.hph}
              houseAdvantage={gameData.houseAdvantage}
              betVolatility={gameData.betVolatility}
              gameVariant={gameVariant}
            />
          </ThresholdCalculatorContainer>
        </div>
        <div className='col-sm-2'>
          {/* Commission Calculator */}
          <CommissionCalculatorContainer>
            <CommissionCalculator />
          </CommissionCalculatorContainer>
        </div>
        <div className='col-sm-6'>
          {/* Drawing Rules */}
          <DrawingRulesContainer className='container-fluid'>
            <BaccaratDrawingRulesTable />
          </DrawingRulesContainer>
        </div>
      </div>
    </Container>
  );
};

export default BaccaratDashboard;
