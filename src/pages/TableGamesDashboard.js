import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
//
import ContactsTable from '../components/ContactsTable';
//
import { tableGamesContacts, pitPhoneContacts } from '../data/contacts';
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

const TitleText = styled.h1`
  width: 100%;

  background: ${Colors.backgroundColor};
  color: ${Colors.backgroundColor};
`;

const MenuContainer = styled.div``;

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

const ContactsContainer = styled.div`
  width: 100%;
`;
//
const TableGamesDashboard = () => {
  const halfPodiumContacts = Math.ceil(pitPhoneContacts.length / 2);
  const firstHalfPodiumContacts = pitPhoneContacts.slice(0, halfPodiumContacts);
  const lastHalfPodiumContacts = pitPhoneContacts.slice(
    halfPodiumContacts,
    pitPhoneContacts.length
  );
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText
          className='py-0 pl-4 display-3 text-left'
          style={{ color: Colors.primaryTextColor }}
        >
          Table Games
        </TitleText>
        <TitleText
          className='py-0 pl-4 display-3 text-left'
          style={{ backgroundImage: Colors.blueGradient }}
        >
          Dashboard
        </TitleText>
      </div>
      <div className='row'>
        <div className='col-sm-3 col-xs-12 my-1 text-left'>
          <div className='row'>
            <MenuLink className='display-5' as={Link} to='/blackjack'>
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
          {/* <div className='row'>
            <MenuLink as={Link} to='/casinowar'>
              Casino War
            </MenuLink>
          </div> */}
        </div>
        <ContactsContainer className='col-sm-4 col-xs-12'>
          <ContactsTable
            contacts={tableGamesContacts}
            contactsTitle='Contacts'
            cell={true}
          />
        </ContactsContainer>
        <ContactsContainer className='col-sm-2 col-xs-12'>
          <ContactsTable
            contacts={firstHalfPodiumContacts}
            contactsTitle='Pits 1-7'
          />
        </ContactsContainer>
        <ContactsContainer className='col-sm-2 col-xs-12'>
          <ContactsTable
            contacts={lastHalfPodiumContacts}
            contactsTitle='Pits 8-88'
          />
        </ContactsContainer>
      </div>
    </Container>
  );
};

export default TableGamesDashboard;
