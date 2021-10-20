import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//
import TitleText from '../components/TitleText';
//

import Colors from '../constants/Colors';
import { spacing } from '../constants/Sizes';

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

//
const CasinoWarDashboard = () => {
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText title='Casino War' />
      </div>
      <p>To do: odds table, violations</p>
    </Container>
  );
};

export default CasinoWarDashboard;
