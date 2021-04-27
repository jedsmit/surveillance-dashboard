import React from 'react';
import styled from 'styled-components';
//
import OddsTableCalculator from '../components/OddsTableCalculator';
//
import Colors from '../constants/Colors';
import { spacing } from '../constants/Sizes';
import { fcPoker } from '../data/bonusBetOdds';

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

const FourCardPokerDashboard = () => {
  const { acesUpOdds, autoBonusOdds, badBeatOdds } = fcPoker;
  return (
    <Container className='container-fluid'>
      <TitleText>Four Card Poker Dashboard</TitleText>
      <p>To do: odds table, violations</p>
      <div className='row'>
        <div className='col-sm-4'>
          <OddsCalculatorContainer className='container-fluid'>
            <OddsTableCalculator
              wagers={acesUpOdds.wagers}
              wagerName={acesUpOdds.wagerName}
              defaultWager={1}
            />
          </OddsCalculatorContainer>
        </div>

        <div className='col-sm-4'>
          <OddsCalculatorContainer className='container-fluid'>
            <OddsTableCalculator
              wagers={autoBonusOdds.wagers}
              wagerName={autoBonusOdds.wagerName}
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

export default FourCardPokerDashboard;
