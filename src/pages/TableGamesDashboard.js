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
  justify-content: center;
`;

const TitleText = styled.h1`
  margin: 0;
  padding: ${spacing.xxs};
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
`;

const SubtitleText = styled.h2`
  font-size: ${fontSizes.md};
`;

const MenuContainer = styled.div``;

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
//
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
