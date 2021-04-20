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

const PaiGowDashboard = () => {
  return (
    <Container className='container-fluid'>
      <TitleText>Fortune Pai Gow Dashboard</TitleText>
      <p>To do: house way</p>
    </Container>
  );
};

export default PaiGowDashboard;
