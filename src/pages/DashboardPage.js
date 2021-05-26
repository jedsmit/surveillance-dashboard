import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
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
`;

const TitleText = styled.h1`
  width: 100%;
  font-size: ${fontSizes.xxl};
  background: ${Colors.backgroundColor};
  color: ${Colors.backgroundColor};
`;

const MenuLink = styled.div`
  width: 100%;
  padding-left: ${spacing.sm};
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

const DashboardPage = () => {
  return (
    <Container className='container-fluid p-0'>
      <div className='row'>
        <TitleText
          className='py-0 pl-4 text-left'
          style={{ color: Colors.primaryTextColor }}
        >
          Agent
        </TitleText>
        <TitleText
          className='py-0 pl-4 text-left'
          style={{ backgroundImage: Colors.blueGradient }}
        >
          Dashboard
        </TitleText>
      </div>
      <div className='row'>
        <div className='col-sm-4 col-xs-12 pl-4 my-1 text-left'>
          <div className='row'>
            <MenuLink as={Link} to='/tablegames'>
              Table Games
            </MenuLink>
          </div>
          <div className='row'>
            <MenuLink as={Link} to='/contacts'>
              Contacts
            </MenuLink>
          </div>
          <div className='row'>
            <MenuLink as={Link} to='/gca-kiosks'>
              GCA & Kiosks
            </MenuLink>
          </div>
          <div className='row'>
            <MenuLink as={Link} to='/cage'>
              Cage
            </MenuLink>
          </div>
          <div className='row'>
            <MenuLink as={Link} to='/slots'>
              Slots
            </MenuLink>
          </div>
          {/* <div className='col-sm-4'>
          <MenuLink as={Link} to='/gca-kiosks'>
            <MenuButton className='btn btn-lg'>GCA & Kiosks</MenuButton>
          </MenuLink>
        </div> */}
        </div>
      </div>
    </Container>
  );
};

export default DashboardPage;
