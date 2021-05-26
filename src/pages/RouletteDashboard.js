import React from 'react';
import styled from 'styled-components';
//

import RouletteCalculator from '../components/RouletteCalculator';
//

import Colors from '../constants/Colors';
import { spacing, fontSizes } from '../constants/Sizes';

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
  font-size: ${fontSizes.xxl};
  background: ${Colors.backgroundColor};
  color: ${Colors.backgroundColor};
`;

const CalculatorContainer = styled.div`
  font-size: ${fontSizes.sm};
`;

const RouletteDashboard = () => {
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText
          className='py-0 pl-4 text-left'
          style={{ color: Colors.primaryTextColor }}
        >
          Roulette
        </TitleText>
        <TitleText
          className='py-0 pl-4 text-left'
          style={{ backgroundImage: Colors.blueGradient }}
        >
          Dashboard
        </TitleText>
      </div>
      <div className='row'>
        <div className='col-sm-4 mx-auto'>
          <CalculatorContainer>
            <RouletteCalculator />
          </CalculatorContainer>
        </div>
      </div>
    </Container>
  );
};

export default RouletteDashboard;
