import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//
import Colors from '../constants/Colors';
import { spacing, fontSize } from '../constants/Sizes';

//styled-components
const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  justify-content: center;
`;

const TitleText = styled.h1`
  margin: 0;
  padding: ${spacing.xxs};
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
`;
//
const SlotsDashboard = () => {
  return (
    <Container className='container-fluid'>
      <TitleText>Slots Dashboard</TitleText>
      <div className='row'>
        <div className='col'>
          Todo: Add violations, floor map, phone numbers
        </div>
      </div>
    </Container>
  );
};

export default SlotsDashboard;
