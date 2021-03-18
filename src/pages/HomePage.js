import React from 'react';
import Colors from '../constants/Colors';
import styled from 'styled-components';

//styled-components
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  font-size: 2em;
`;

const TitleText = styled.h1`
  fontsize: 5em;
  margin: 0;
  padding: 10px;
  color: ${Colors.mainTextColor};
`;

const HomePage = () => {
  return (
    <Container>
      <TitleText>Surveillance Web App</TitleText>
    </Container>
  );
};

export default HomePage;
