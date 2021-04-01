import React from 'react';
import { Link } from 'react-router-dom';
import Colors from '../constants/Colors';
import styled from 'styled-components';

//styled-components
const Container = styled.div`
  height: 100%;
  width: 100%;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  font-size: 2em;
`;

const TitleText = styled.h1`
  font-size: 2em;
  margin: 0;
  padding: 10px;
`;

const SubtitleText = styled.h2`
  font-size: 1em;
`;

const MenuContainer = styled.div``;

const MenuButton = styled.div`
  background-color: ${Colors.accentColor};
  border-radius: 40px;
  width: 80%;
  margin: 10px;
  :hover {
    background-color: ${Colors.highlightTextColor};
  }
`;

const LeftMenuColumn = styled.div`
  text-decoration: none;
  list-style-type: none;
  text-align: left;
`;

const RightMenuColumn = styled.div`
  text-decoration: none;
  list-style-type: none;
  text-align: left;
`;
const MenuLink = styled.h3`
  color: ${Colors.backgroundColor};
  text-decoration: none;
  :hover {
    text-decoration: none;
    color: inherit;
  }
`;

const TableGamesDashboard = () => {
  return (
    <Container>
      <TitleText>Table Games</TitleText>
      <div className='row'>
        <div className='col-sm-6'>
          <SubtitleText>Game Dashboards</SubtitleText>
          <MenuContainer>
            <div className='row'>
              <div className='col left'>
                <LeftMenuColumn as='ul' className='left-menu-column'>
                  <li>
                    <MenuLink as={Link} to='/blackjack'>
                      <MenuButton className='btn btn-lg'>Blackjack</MenuButton>
                    </MenuLink>
                  </li>
                  <li>
                    <MenuButton className='btn btn-lg'>
                      <MenuLink as={Link} to='/baccarat'>
                        Baccarat
                      </MenuLink>
                    </MenuButton>
                  </li>
                  <li>
                    <MenuButton className='btn btn-lg'>
                      <MenuLink as={Link} to='/craps'>
                        Craps
                      </MenuLink>
                    </MenuButton>
                  </li>
                  <li>
                    <MenuButton className='btn btn-lg'>
                      <MenuLink as={Link} to='/roulette'>
                        Roulette
                      </MenuLink>
                    </MenuButton>
                  </li>
                  <li>
                    <MenuButton className='btn btn-lg'>
                      <MenuLink as={Link} to='/paigow'>
                        Fortune Pai Gow
                      </MenuLink>
                    </MenuButton>
                  </li>
                  <li>
                    <MenuButton className='btn btn-lg'>
                      <MenuLink as={Link} to='/tiles'>
                        Pai Gow Tiles
                      </MenuLink>
                    </MenuButton>
                  </li>
                  <li>
                    <MenuButton className='btn btn-lg'>
                      <MenuLink as={Link} to='/threecardpoker'>
                        Three Card Poker
                      </MenuLink>
                    </MenuButton>
                  </li>
                </LeftMenuColumn>
              </div>
              <div className='col right'>
                <RightMenuColumn>
                  <li>
                    <MenuButton className='btn btn-lg'>
                      <MenuLink as={Link} to='/fourcardpoker'>
                        Four Card Poker
                      </MenuLink>
                    </MenuButton>
                  </li>
                  <li>
                    <MenuButton className='btn btn-lg'>
                      <MenuLink as={Link} to='/utholdem'>
                        UT Hold'em
                      </MenuLink>
                    </MenuButton>
                  </li>
                  <li>
                    <MenuButton className='btn btn-lg'>
                      <MenuLink as={Link} to='/casinowar'>
                        Casino War
                      </MenuLink>
                    </MenuButton>
                  </li>
                </RightMenuColumn>
              </div>
            </div>
          </MenuContainer>
        </div>
      </div>
    </Container>
  );
};

export default TableGamesDashboard;
