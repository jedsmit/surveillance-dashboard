import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//
import ThresholdCalculator from '../components/ThresholdCalculator';
import RouletteCalculator from '../components/RouletteCalculator';
//
import Colors from '../constants/Colors';
import { spacing, fontSizes } from '../constants/Sizes';
import { thresholdCalculatorData } from '../data/thresholdCalculatorData';

//styled-components
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  justify-content: center;
`;

const TitleText = styled.h1`
  margin: 0;
  padding: ${spacing.xs};
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
`;

const CageDashboard = () => {
  return (
    <Container className='container-fluid'>
      <TitleText>Cage Dashboard</TitleText>
    </Container>
  );
};

export default CageDashboard;
