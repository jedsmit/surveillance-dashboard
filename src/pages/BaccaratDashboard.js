import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//
import BaccaratDrawingRulesTable from '../components/BaccaratDawingRulesTable';
import ThresholdCalculator from '../components/ThresholdCalculator';
import CommissionCalculator from '../components/CommissionCalculator';
//
import { thresholdCalculatorData } from '../data/thresholdCalculatorData';
import Colors from '../constants/Colors';
import { spacing, fontSizes } from '../constants/Sizes';

//styled-components
const Container = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  justify-content: center;
`;

const TitleText = styled.h1`
  width: 100%;
  font-size: ${fontSizes.xxl};
  background: ${Colors.backgroundColor};
  color: ${Colors.backgroundColor};
`;

const DrawingRulesContainer = styled.div`
  margin-top: ${spacing.md};
  width: 100%;
`;

const ThresholdCalculatorContainer = styled.div`
  margin-top: ${spacing.md};
`;

const CommissionCalculatorContainer = styled.div`
  margin-top: ${spacing.md};
  width: 80%;
  margin-left: 10%;
`;
//
const BaccaratDashboard = () => {
  const { beanBaccarat, miniBaccarat } = thresholdCalculatorData;
  const [gameVariant, setGameVariant] = useState('Select Baccarat Variant');
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
    <Container className='container-fluid p-0'>
      <div className='row'>
        <TitleText
          className='py-0 pl-4 text-left'
          style={{ color: Colors.primaryTextColor }}
        >
          Baccarat
        </TitleText>
        <TitleText
          className='py-0 pl-4 text-left'
          style={{ backgroundImage: Colors.blueGradient }}
        >
          Dashboard
        </TitleText>
      </div>
      <div className='row'>
        <div className='col-sm-4  pt-4'>
          <div className='dropdown'>
            <button
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
      <div className='row'>
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
        <div className='col-sm-4'>
          {/* Commission Calculator */}
          <CommissionCalculatorContainer>
            <CommissionCalculator />
          </CommissionCalculatorContainer>
        </div>
        <div className='col-sm-4'>
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
