import React from 'react';
import styled from 'styled-components';
//
import TitleText from '../components/TitleText';
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

const CalculatorContainer = styled.div`
  font-size: ${fontSizes.sm};
`;

const RouletteDashboard = () => {
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText title='Roulette' />
      </div>

      <div className='row'>
        <div className='col-sm-6 mx-auto'>
          <CalculatorContainer>
            <RouletteCalculator />
          </CalculatorContainer>
        </div>
      </div>
    </Container>
  );
};

export default RouletteDashboard;
