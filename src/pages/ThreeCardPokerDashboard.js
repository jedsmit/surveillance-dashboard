import React from 'react';
import styled from 'styled-components';
//
import OddsTableCalculator from '../components/OddsTableCalculator';
//
import Colors from '../constants/Colors';
import { spacing } from '../constants/Sizes';
import { tcOdds } from '../data/bonusBetOdds';

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

const TitleText = styled.h1`
  width: 100%;

  background: ${Colors.backgroundColor};
  color: ${Colors.backgroundColor};
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
      <div className='row'>
        <TitleText
          className='py-0 pl-4 text-left display-3'
          style={{ color: Colors.primaryTextColor }}
        >
          Three Card Poker
        </TitleText>
        <TitleText
          className='py-0 pl-4 text-left display-3'
          style={{ backgroundImage: Colors.blueGradient }}
        >
          Dashboard
        </TitleText>
      </div>
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
