import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//
import TitleText from '../components/TitleText';
import OddsTableCalculator from '../components/OddsTableCalculator';
//
import Colors from '../constants/Colors';
import { spacing } from '../constants/Sizes';
import { utOdds } from '../data/bonusBetOdds';

//styled-components
const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  justify-content: center;
  padding: ${spacing.sm};
`;

const OddsCalculatorContainer = styled.div`
  margin-top: ${spacing.md};
  width: 100%;
`;

const UTHoldemDashboard = () => {
  const { tripsOdds, badBeatOdds, utBlindOdds } = utOdds;
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText title="Ultimate Texas Hold 'em" />
      </div>

      <div className='row'>
        <div className='col-sm-4'>
          <OddsCalculatorContainer className='container-fluid'>
            <OddsTableCalculator
              wagers={tripsOdds.wagers}
              wagerName={tripsOdds.wagerName}
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
        <div className='col-sm-4'>
          <OddsCalculatorContainer className='container-fluid'>
            <OddsTableCalculator
              wagers={utBlindOdds.wagers}
              wagerName={utBlindOdds.wagerName}
              defaultWager={1}
            />
          </OddsCalculatorContainer>
        </div>
      </div>
    </Container>
  );
};

export default UTHoldemDashboard;
