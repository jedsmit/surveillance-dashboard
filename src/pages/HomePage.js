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
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  justify-content: center;
`;

const TitleText = styled.h1`
  width: 100%;
  padding: ${spacing.sm};
  font-size: ${fontSizes.xxxl};
  color: ${Colors.backgroundColor};
`;

const HomePage = () => {
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText
          className='py-0 pl-2 text-left'
          style={{ color: Colors.purpleTextColor }}
        >
          Surveillance
        </TitleText>
      </div>
      <div className='row'>
        <TitleText
          className='py-0 pl-2 text-left'
          style={{ backgroundColor: Colors.purpleTextColor }}
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
