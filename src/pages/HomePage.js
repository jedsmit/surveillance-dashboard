import React from 'react';
import styled from 'styled-components';
//
import SignInForm from '../components/SignInForm';
import Colors from '../constants/Colors';
import { spacing, fontSizes } from '../constants/Sizes';
// import background from '../assets/casinowallpaper.jpg';
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

const HomePage = () => {
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText
          className='py-0 pl-4 text-left'
          style={{ color: Colors.primaryTextColor }}
        >
          Surveillance
        </TitleText>
        <TitleText
          className='py-0 pl-4 text-left'
          style={{ backgroundImage: Colors.blueGradient }}
        >
          Dashboard
        </TitleText>
      </div>

      <div className='row justify-content-center'>
        <div className='col-sm-3 text-right'>
          <SignInForm />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
