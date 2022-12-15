import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//
import TitleText from '../components/TitleText';
//
import Colors from '../constants/Colors';
import { spacing, fontSizes } from '../constants/Sizes';

//styled-components
const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  padding: ${spacing.sm};
  html {
    scroll-behaviour: smooth;
  }
`;

const MenuLink = styled.div`
  width: 100%;
  padding-left: ${spacing.md};
  font-size: ${fontSizes.md};
  color: ${Colors.primaryTextColor};
  text-decoration: none;
  text-align: start;
  :hover {
    text-decoration: none;
    color: ${Colors.backgroundColor};
    background-image: ${Colors.blueGradient};
  }
`;

//
const TrainingDashboard = () => {
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText title='Training' />
      </div>
      <div className='row'>
        <div className='col-sm-3 col-xs-12 my-1 text-left'>
          <div className='row'>
            <MenuLink className='display-5' as={Link} to='/cardcounttrainer'>
              Count Trainer
            </MenuLink>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TrainingDashboard;
