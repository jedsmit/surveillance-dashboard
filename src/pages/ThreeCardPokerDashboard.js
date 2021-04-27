import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//
import OddsTableCalculator from '../components/OddsTableCalculator';
//
import Colors from '../constants/Colors';
import { spacing, fontSizes } from '../constants/Sizes';
import { tcOdds } from '../data/bonusBetOdds';

//styled-components
const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  justify-content: center;
`;

const TitleText = styled.h1`
  margin: 0;
  padding: ${spacing.xxs};
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
`;

const OddsCalculatorContainer = styled.div`
  margin-top: ${spacing.md};
  width: 100%;
`;

//
const ThreeCardPokerDashboard = () => {
  const { pairPlusOdds, anteBonusOdds, badBeatOdds } = tcOdds;
  return (
    <Container className='container-fluid'>
      <TitleText>Three Card Poker Dashboard</TitleText>
      <p>To do: odds table, basic strategy</p>
      <div className='row'>
        <div className='col-sm-4'>
          <OddsCalculatorContainer className='container-fluid'>
            <OddsTableCalculator
              wagers={pairPlusOdds.wagers}
              wagerName={pairPlusOdds.wagerName}
              defaultWager={1}
            />
          </OddsCalculatorContainer>
        </div>

        <div className='col-sm-4'>
          <OddsCalculatorContainer className='container-fluid'>
            <OddsTableCalculator
              wagers={anteBonusOdds.wagers}
              wagerName={anteBonusOdds.wagerName}
              defaultWager={1}
            />
          </OddsCalculatorContainer>
        </div>

        <div className='col-sm-4'>
          <OddsCalculatorContainer className='container-fluid'>
            <OddsTableCalculator
              wagers={badBeatOdds.wagers}
              wagerName={badBeatOdds.wagerName}
              defaultWager={1}
            />
          </OddsCalculatorContainer>
        </div>
      </div>
    </Container>
  );
};

export default ThreeCardPokerDashboard;
