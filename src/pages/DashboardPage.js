import React from 'react';
import { Link } from 'react-router-dom';
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
  padding: 20px 20px 50px 20px;
  backgroundColor: ${Colors.accentColor}
  color: ${Colors.primaryTextColor};
`;

const MenuButton = styled.div`
  background-color: ${Colors.accentColor};
  border-radius: 40px;
  font-size: 1em;
  width: 80%;
  margin: 10px;
  :hover {
    background-color: ${Colors.highlightTextColor};
    color: inherit;
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
      </div>
    </Container>
  );
};

export default DashboardPage;
