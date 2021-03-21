import React, { useState, useEffect } from 'react';
import Colors from '../constants/Colors';
import styled from 'styled-components';
import BasicStrategyTable from '../components/BasicStrategyTable';
import IndexPlayTable from '../components/IndexPlayTable';
import ThresholdCalculator from '../components/ThresholdCalculator';
import { thresholdCalculatorData } from '../data/thresholdCalculatorData';
import ViolationReferences from '../components/ViolationReferences';
import { blackjack } from '../data/violationData';

//styled-components
const Container = styled.div`
  height: 100%;
  width: 100%;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  font-size: 2em;
  justify-content: center;
`;

const TitleText = styled.h1`
  fontsize: 5em;
  margin: 0;
  padding: 10px;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
`;

const MenuButton = styled.button``;

const BasicStrategyContainer = styled.div`
  margin-top: 3rem;
  width: 100%;
`;
const IndexPlayContainer = styled.div`
  width: 100%;
`;

const ViolationsContainer = styled.div`
  width: 100%;
`;

const ThresholdCalculatorContainer = styled.div`
  margin-top: 3rem;
  width: 100%;
`;

const BlackjackDashboard = () => {
  //game data
  const {
    strategySixDeckBJ,
    averageSixDeckBJ,
    strategyDoubleDeckBJ,
    averageDoubleDeckBJ,
    strategySingleDeckBJ,
    averageSingleDeckBJ,
  } = thresholdCalculatorData;

  //state
  const [gameVariant, setGameVariant] = useState('Select Variant');
  const [gameData, setGameData] = useState({
    houseAdvantage: 0,
    betVolatility: 0,
    hph: 0,
  });
  const [checked, setChecked] = useState(false);

  //sets the game type for threshold calculator use
  useEffect(() => {
    if (gameVariant === 'Six Deck Average Player') {
      setGameData({
        houseAdvantage: averageSixDeckBJ.houseAdvantage,
        betVolatility: averageSixDeckBJ.betVolatility,
        hph: averageSixDeckBJ.hph,
      });
    }
    if (gameVariant === 'Six Deck Strategy Player') {
      setGameData({
        houseAdvantage: strategySixDeckBJ.houseAdvantage,
        betVolatility: averageSixDeckBJ.betVolatility,
        hph: averageSixDeckBJ.hph,
      });
    }
    if (gameVariant === 'Double Deck Average Player') {
      setGameData({
        houseAdvantage: averageDoubleDeckBJ.houseAdvantage,
        betVolatility: averageDoubleDeckBJ.betVolatility,
        hph: averageDoubleDeckBJ.hph,
      });
    }
    if (gameVariant === 'Double Deck Strategy Player') {
      setGameData({
        houseAdvantage: strategyDoubleDeckBJ.houseAdvantage,
        betVolatility: strategyDoubleDeckBJ.betVolatility,
        hph: strategyDoubleDeckBJ.hph,
      });
    }
    if (gameVariant === 'Single Deck Average Player') {
      setGameData({
        houseAdvantage: averageSingleDeckBJ.houseAdvantage,
        betVolatility: averageSingleDeckBJ.betVolatility,
        hph: averageSingleDeckBJ.hph,
      });
    }
    if (gameVariant === 'Single Deck Strategy Player') {
      setGameData({
        houseAdvantage: strategySingleDeckBJ.houseAdvantage,
        betVolatility: strategySingleDeckBJ.betVolatility,
        hph: strategySingleDeckBJ.hph,
      });
    }
  }, [gameVariant]);

  return (
    <Container className='container-fluid'>
      <TitleText>Blackjack Dashboard</TitleText>

      {/* Dropdown game selector */}
      <div className='row'>
        <div className='col'>
          <div className='dropdown'>
            <MenuButton
              className='btn btn-secondary dropdown-toggle'
              type='button'
              id='dropdownMenuButton'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              {gameVariant}
            </MenuButton>
            <div
              className='dropdown-menu'
              aria-labelledby='dropdownMenuButton'
              onClick={e => {
                e.stopPropagation();
                setGameVariant(e.target.value);
                console.log(gameVariant);
              }}
            >
              <MenuButton
                className='dropdown-item'
                value='Six Deck Average Player'
              >
                Six Deck Average Player
              </MenuButton>
              <MenuButton
                className='dropdown-item'
                value='Six Deck Strategy Player'
              >
                Six Deck Strategy Player
              </MenuButton>
              <MenuButton
                className='dropdown-item'
                value='Double Deck Average Player'
              >
                Double Deck Average Player
              </MenuButton>
              <MenuButton
                className='dropdown-item'
                value='Double Deck Strategy Player'
              >
                Double Deck Strategy Player
              </MenuButton>
              <MenuButton
                className='dropdown-item'
                value='Single Deck Average Player'
              >
                Single Deck Average Player
              </MenuButton>
              <MenuButton
                className='dropdown-item'
                value='Single Deck Strategy Player'
              >
                Single Deck Strategy Player
              </MenuButton>
            </div>
          </div>
        </div>
      </div>
      {/* end drop down  */}

      <div className='row justify-content-end'>
        <div className='col-sm-5 col-xs-12'>
          <div className='row justify-content-left m-0'>
            <div class='custom-control custom-switch m-0'>
              <input
                type='checkbox'
                class='custom-control-input'
                id='customSwitch1'
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <label
                class='custom-control-label'
                for='customSwitch1'
                style={{ fontSize: '.7em' }}
              >
                Toggle Index Plays/Common Violations
              </label>
            </div>
          </div>

          <div className='row'>
            {/* Index Play Table or Violations References */}
            {checked ? (
              <IndexPlayContainer className='container-fluid'>
                <IndexPlayTable />
              </IndexPlayContainer>
            ) : (
              <ViolationsContainer className='container-fluid'>
                <ViolationReferences violationData={blackjack} />
              </ViolationsContainer>
            )}
          </div>
        </div>

        <div className='col-sm-4 col-xs-12'>
          {/* Basic Strategy Chart */}
          <BasicStrategyContainer className='container-fluid'>
            <BasicStrategyTable />
          </BasicStrategyContainer>
        </div>

        <div className='col-sm-3 col-xs-12'>
          <ThresholdCalculatorContainer className='container-fluid'>
            <ThresholdCalculator
              hph={gameData.hph}
              houseAdvantage={gameData.houseAdvantage}
              betVolatility={gameData.betVolatility}
              gameVariant={gameVariant}
            />
          </ThresholdCalculatorContainer>
        </div>
      </div>
    </Container>
  );
};

export default BlackjackDashboard;
