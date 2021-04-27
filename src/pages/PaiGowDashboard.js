import React from 'react';
import styled from 'styled-components';
//
import OddsTableCalculator from '../components/OddsTableCalculator';
//
import Colors from '../constants/Colors';
import { spacing, fontSize } from '../constants/Sizes';
import { pgOdds } from '../data/bonusBetOdds';

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

const PaiGowDashboard = () => {
  const { fortuneOdds, progressiveOdds } = pgOdds;
  return (
    <Container className='container-fluid'>
      <TitleText>Fortune Pai Gow Dashboard</TitleText>
      <p>To do: house way</p>
      <div className='row'>
        <div className='col-sm-4'>
          <OddsCalculatorContainer className='container-fluid'>
            <OddsTableCalculator
              wagers={fortuneOdds.wagers}
              wagerName={fortuneOdds.wagerName}
              defaultWager={1}
            />
          </OddsCalculatorContainer>
        </div>
        <div className='col-sm-4'>
          <OddsCalculatorContainer className='container-fluid'>
            <OddsTableCalculator
              wagers={progressiveOdds.wagers}
              wagerName={progressiveOdds.wagerName}
              defaultWager={5}
            />
          </OddsCalculatorContainer>
        </div>
      </div>
    </Container>
  );
};

export default PaiGowDashboard;
