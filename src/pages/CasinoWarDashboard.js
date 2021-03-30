import React, { useState, useEffect } from 'react';
import Colors from '../constants/Colors';
import styled from 'styled-components';
import OddsTableCalculator from '../components/OddsTableCalculator';

//styled-components
const Container = styled.div`
  height: 100vh;
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

const CalculatorContainer = styled.div`
  width: 30%;
  font-size: 0.7em;
`;

const testWager = {
  wagerName: 'bonus wager',
  winCombo: 'some cards',
  payoutMultiplier: 100,
};

const CasinoWarDashboard = () => {
  return (
    <Container className='container-fluid'>
      <TitleText>Casino War Dashboard</TitleText>
      <p>To do: odds table, violations</p>
      <div className='row'>
        <div className='col'>
          <CalculatorContainer>
            <OddsTableCalculator
              gameName='Casino War'
              wager={testWager}
              unitsBet={2}
            />
          </CalculatorContainer>
        </div>
      </div>
    </Container>
  );
};

export default CasinoWarDashboard;
