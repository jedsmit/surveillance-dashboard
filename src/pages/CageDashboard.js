import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//

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
  background: ${Colors.backgroundColor};
  color: ${Colors.backgroundColor};
`;

const CageDashboard = () => {
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText
          className='py-0 pl-4 text-left display-3'
          style={{ color: Colors.primaryTextColor }}
        >
          Cage
        </TitleText>
        <TitleText
          className='py-0 pl-4 text-left display-3'
          style={{ backgroundImage: Colors.blueGradient }}
        >
          Dashboard
        </TitleText>
      </div>
    </Container>
  );
};

export default CageDashboard;
