import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//
import Colors from '../constants/Colors';
import { spacing } from '../constants/Sizes';

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

const MenuButton = styled.div`
  background-color: ${Colors.accentColor};
  border-radius: 40px;
  width: 100%;
  max-width: 15vw;
  margin: ${spacing.xs};
  :hover {
    background-color: ${Colors.highlightTextColor};
  }
`;

const MenuLink = styled.h3`
  color: ${Colors.backgroundColor};
  text-decoration: none;
  :hover {
    text-decoration: none;
    color: ${Colors.backgroundColor};
  }
`;

const DashboardPage = () => {
  return (
    <Container>
      <TitleText>Agent Dashboard</TitleText>
      <div className='row'>
        <div className='col-sm-4'>
          <MenuLink as={Link} to='/tablegames'>
            <MenuButton className='btn btn-lg'>Table Games</MenuButton>
          </MenuLink>
        </div>
        <div className='col-sm-4'>
          <MenuLink as={Link} to='/contacts'>
            <MenuButton className='btn btn-lg'>Contacts</MenuButton>
          </MenuLink>
        </div>
        <div className='col-sm-4'>
          <MenuLink as={Link} to='/gca-kiosks'>
            <MenuButton className='btn btn-lg'>GCA & Kiosks</MenuButton>
          </MenuLink>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-4'>
          <MenuLink as={Link} to='/cage'>
            <MenuButton className='btn btn-lg'>Cage</MenuButton>
          </MenuLink>
        </div>
        <div className='col-sm-4'>
          <MenuLink as={Link} to='/slots'>
            <MenuButton className='btn btn-lg'>Slots</MenuButton>
          </MenuLink>
        </div>
        {/* <div className='col-sm-4'>
          <MenuLink as={Link} to='/gca-kiosks'>
            <MenuButton className='btn btn-lg'>GCA & Kiosks</MenuButton>
          </MenuLink>
        </div> */}
      </div>
    </Container>
  );
};

export default DashboardPage;
