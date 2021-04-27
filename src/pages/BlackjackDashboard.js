import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

//
import BasicStrategyTable from '../components/BasicStrategyTable';
import IndexPlayTable from '../components/IndexPlayTable';
import ThresholdCalculator from '../components/ThresholdCalculator';
import OddsTableCalculator from '../components/OddsTableCalculator';
import ViolationReferences from '../components/ViolationReferences';
//
import { thresholdCalculatorData } from '../data/thresholdCalculatorData';
import { blackjack } from '../data/violationData';
import { bjOdds } from '../data/bonusBetOdds';
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

const MenuButton = styled.button``;

const BasicStrategyContainer = styled.div`
  margin-top: ${spacing.md};
  width: 100%;
`;
const IndexPlayContainer = styled.div`
  margin-top: ${spacing.md};
  width: 100%;
`;

const ViolationsContainer = styled.div`
  margin-top: ${spacing.md};
  width: 100%;
`;

const ThresholdCalculatorContainer = styled.div`
  margin-top: ${spacing.md};
  width: 100%;
`;

const OddsCalculatorContainer = styled.div`
  margin-top: ${spacing.md};
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
  const { luckyLuckyOdds, blazingSevenOdds } = bjOdds;
  //state
  const [gameVariant, setGameVariant] = useState('Select Variant');
  const [gameData, setGameData] = useState({
    houseAdvantage: 0,
    betVolatility: 0,
    hph: 0,
  });
  const [checked, setChecked] = useState(false);
  const [toggled, setToggled] = useState(false);

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
      <p>todo: side bets</p>
      {/* Dropdown game selector */}
      <div className='row mb-2'>
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
        <div className='col-sm-4 col-xs-12'>
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
                Toggle Common Violations/Index Plays
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
          <BasicStrategyContainer className='container-fluid'>
            <BasicStrategyTable />
          </BasicStrategyContainer>
        </div>

        <div className='col-sm-4 col-xs-12'>
          <div className='row justify-content-left m-0'>
            <div class='custom-control custom-switch m-0'>
              <input
                type='checkbox'
                class='custom-control-input'
                id='customSwitch2'
                checked={toggled}
                onChange={() => setToggled(!toggled)}
              />
              <label
                class='custom-control-label'
                for='customSwitch2'
                style={{ fontSize: '.7em' }}
              >
                Toggle Lucky Luck Odds/Threshold Calculator
              </label>
            </div>
          </div>

          <div className='row'>
            {/* Odds Table or Basic Strategy*/}
            {toggled ? (
              <ThresholdCalculatorContainer className='container-fluid'>
                <ThresholdCalculator
                  hph={gameData.hph}
                  houseAdvantage={gameData.houseAdvantage}
                  betVolatility={gameData.betVolatility}
                  gameVariant={gameVariant}
                />
              </ThresholdCalculatorContainer>
            ) : (
              <>
                <OddsCalculatorContainer className='container-fluid'>
                  <OddsTableCalculator
                    wagers={luckyLuckyOdds.wagers}
                    wagerName={luckyLuckyOdds.wagerName}
                    defaultWager={1}
                  />
                </OddsCalculatorContainer>

                <OddsCalculatorContainer className='container-fluid'>
                  <OddsTableCalculator
                    wagers={blazingSevenOdds.wagers}
                    wagerName={blazingSevenOdds.wagerName}
                    defaultWager={2}
                  />
                </OddsCalculatorContainer>
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlackjackDashboard;
