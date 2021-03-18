import React, { useState, useEffect } from 'react';
import Colors from '../constants/Colors';
import styled from 'styled-components';

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
  fontsize: 5em;
  margin: 0;
  padding: 10px;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
`;

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
