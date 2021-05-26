import React from 'react';
import styled from 'styled-components';
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

const CrapsDashboard = () => {
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText
          className='py-0 pl-4 text-left'
          style={{ color: Colors.primaryTextColor }}
        >
          Craps
        </TitleText>
        <TitleText
          className='py-0 pl-4 text-left'
          style={{ backgroundImage: Colors.blueGradient }}
        >
          Dashboard
        </TitleText>
      </div>
      <p>Todo: odds tables, commission calc</p>
    </Container>
  );
};

export default CrapsDashboard;
