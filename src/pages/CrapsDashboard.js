import React, { useState, useEffect } from 'react';
import Colors from '../constants/Colors';
import styled from 'styled-components';
import ThresholdCalculator from '../components/ThresholdCalculator';
import { thresholdCalculatorData } from '../data/thresholdCalculatorData';
import ViolationReferences from '../components/ViolationReferences';

//styled-components
const Container = styled.div`
  height: 100%;
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

const CrapsDashboard = () => {
  return (
    <Container className='container-fluid'>
      <TitleText>Craps Dashboard</TitleText>
      <p>Todo: odds tables, commission calc</p>
    </Container>
  );
};

export default CrapsDashboard;
