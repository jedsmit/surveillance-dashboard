import React, { useState, useEffect } from 'react';
import Colors from '../constants/Colors';
import styled from 'styled-components';
import { thresholdCalculatorData } from '../data/thresholdCalculatorData';
import ThresholdCalculator from '../components/ThresholdCalculator';
import RouletteCalculator from '../components/RouletteCalculator';

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

const CageDashboard = () => {
  return (
    <Container className='container-fluid'>
      <TitleText>Cage Dashboard</TitleText>
      <div className='row'>
        <div className='col'>
          <CalculatorContainer>
            <RouletteCalculator />
          </CalculatorContainer>
        </div>
      </div>
    </Container>
  );
};

export default CageDashboard;
