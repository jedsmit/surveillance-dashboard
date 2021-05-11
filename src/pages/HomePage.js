import React from 'react';
import styled from 'styled-components';
//
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
  padding: ${spacing.sm};
  font-size: ${fontSizes.xxxl};
  color: ${Colors.backgroundColor};
`;

const HomePage = () => {
  return (
    <Container
      className='container-fluid'
      // style={{ backgroundImage: `url(${background})` }}
    >
      <div className='row'>
        <div className='col-sm-4 col-xs-12 p-0 m-0'>
          <TitleText
            className='py-0 pl-2 text-left'
            style={{ color: Colors.purpleTextColor }}
          >
            Surveillance
          </TitleText>
          <TitleText
            className='py-0 pl-2 text-left'
            style={{ backgroundColor: Colors.purpleTextColor }}
          >
            {' '}
            Dashboard
          </TitleText>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
