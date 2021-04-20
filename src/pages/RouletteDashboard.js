import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//
import ThresholdCalculator from '../components/ThresholdCalculator';
import RouletteCalculator from '../components/RouletteCalculator';
//
import { thresholdCalculatorData } from '../data/thresholdCalculatorData';
import Colors from '../constants/Colors';
import { spacing, fontSizes } from '../constants/Sizes';

//styled-components
const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
`;

const TitleText = styled.h1`
  margin: 0;
  padding: ${spacing.xxs};
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
`;

const CalculatorContainer = styled.div`
  width: 30%;
  font-size: ${fontSizes.sm};
`;

const RouletteDashboard = () => {
  return (
    <Container className='container-fluid'>
      <TitleText>Roulette Dashboard</TitleText>
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

export default RouletteDashboard;
