import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//
//

import Colors from '../constants/Colors';
import { spacing } from '../constants/Sizes';

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
  margin: 0;
  padding: ${spacing.xs};
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
`;

//
const CasinoWarDashboard = () => {
  return (
    <Container className='container-fluid'>
      <TitleText>Casino War Dashboard</TitleText>
      <p>To do: odds table, violations</p>
    </Container>
  );
};

export default CasinoWarDashboard;
