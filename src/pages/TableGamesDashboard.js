import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//
import ContactsTable from '../components/ContactsTable';
//
import { tableGamesContacts } from '../data/contacts';
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
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
`;

const MenuContainer = styled.div``;

// const MenuButton = styled.div`
//   background-image: ${Colors.blueGradient};
//   border-radius: 40px;
//   width: 100%;
//   max-width: 15vw;
//   margin: ${spacing.xs};
//   :hover {
//     background: ${Colors.highlightTextColor};
//   }
// `;

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
    background-color: ${Colors.purpleTextColor};
  }
`;

const ContactsContainer = styled.div`
  width: 100%;
`;
//
const TableGamesDashboard = () => {
  return (
    <Container className='container-fluid p-0'>
      <div className='row'>
        <TitleText
          className='py-0 pl-4 text-left'
          style={{ color: Colors.purpleTextColor }}
        >
          Table Games
        </TitleText>
        <TitleText
          className='py-0 pl-4 text-left'
          style={{ backgroundColor: Colors.purpleTextColor }}
        >
          Dashboard
        </TitleText>
      </div>
      <div className='row'>
        <div className='col-sm-4 col-xs-12 my-1 text-left'>
          <div className='row'>
            <MenuLink as={Link} to='/blackjack'>
              Blackjack
            </MenuLink>
          </div>
          <div className='row'>
            <MenuLink as={Link} to='/baccarat'>
              Baccarat
            </MenuLink>
          </div>
          <div className='row'>
            <MenuLink as={Link} to='/craps'>
              Craps
            </MenuLink>
          </div>
          <div className='row'>
            <MenuLink as={Link} to='/roulette'>
              Roulette
            </MenuLink>
          </div>
          <div className='row'>
            <MenuLink as={Link} to='/paigow'>
              Fortune Pai Gow
            </MenuLink>
          </div>
          <div className='row'>
            <MenuLink as={Link} to='/tiles'>
              Pai Gow Tiles
            </MenuLink>
          </div>

          <div className='row'>
            <MenuLink as={Link} to='/threecardpoker'>
              Three Card Poker
            </MenuLink>
          </div>
          <div className='row'>
            <MenuLink as={Link} to='/fourcardpoker'>
              Four Card Poker
            </MenuLink>
          </div>
          <div className='row'>
            <MenuLink as={Link} to='/utholdem'>
              UT Hold'em
            </MenuLink>
          </div>
          <div className='row'>
            <MenuLink as={Link} to='/casinowar'>
              Casino War
            </MenuLink>
          </div>
        </div>
        <ContactsContainer className='col-sm-4 offset-3 col-xs-12'>
          <ContactsTable
            contacts={tableGamesContacts}
            contactsTitle='Contacts'
          />
        </ContactsContainer>
      </div>
    </Container>
  );
};

export default TableGamesDashboard;
