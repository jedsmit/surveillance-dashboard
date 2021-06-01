import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

//
import BasicStrategyTable from '../components/BasicStrategyTable';
import IndexPlayTable from '../components/IndexPlayTable';
import ThresholdCalculator from '../components/ThresholdCalculator';
import OddsTableCalculator from '../components/OddsTableCalculator';
import ViolationReferences from '../components/ViolationReferences';
import HoleCardStrategyTable from '../components/HoleCardStrategyTable';
//
import { thresholdCalculatorData } from '../data/thresholdCalculatorData';
import { blackjack } from '../data/violationData';
import { bjOdds } from '../data/bonusBetOdds';
import Colors from '../constants/Colors';
import { spacing, fontSizes } from '../constants/Sizes';

//styled-components
const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  justify-content: center;
  padding: ${spacing.sm};
`;

const TitleText = styled.h1`
  width: 100%;

  background: ${Colors.backgroundColor};
  color: ${Colors.backgroundColor};
`;

const MenuButton = styled.button`
  font-weight: bold;
  background-image: ${Colors.blueGradient};
  color: ${Colors.backgroundColor};
`;

const BasicStrategyContainer = styled.div`
  margin-top: ${spacing.md};
  width: 100%;
  font-weight: bold;
`;

const HoleCardStrategyContainer = styled.div`
  margin-top: ${spacing.md};
  width: 100%;
  font-weight: bold;
`;

const IndexPlayContainer = styled.div`
  margin-top: ${spacing.md};
  width: 100%;
  font-weight: bold;
`;

const ViolationsContainer = styled.div`
  margin-top: ${spacing.md};
  width: 100%;
  font-weight: bold;
`;

const ThresholdCalculatorContainer = styled.div`
  margin-top: ${spacing.md};
  width: 100%;
  font-weight: bold;
`;

const OddsCalculatorContainer = styled.div`
  margin-top: ${spacing.md};
  width: 100%;
  font-weight: bold;
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
  const [indexPlayViolationToggle, setIndexPlayViolationToggle] =
    useState(false);
  const [luckyLuckyThresholdToggled, setLuckyLuckyThresholdToggled] =
    useState(false);
  const [basicHoleCardStrategyToggle, setBasicHoleCardStrategyToggle] =
    useState(false);

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
  }, [
    gameVariant,
    averageDoubleDeckBJ.betVolatility,
    averageDoubleDeckBJ.houseAdvantage,
    averageDoubleDeckBJ.hph,
    averageSingleDeckBJ.betVolatility,
    averageSingleDeckBJ.houseAdvantage,
    averageSingleDeckBJ.hph,
    averageSixDeckBJ.betVolatility,
    averageSixDeckBJ.houseAdvantage,
    averageSixDeckBJ.hph,
    strategyDoubleDeckBJ.betVolatility,
    strategyDoubleDeckBJ.houseAdvantage,
    strategyDoubleDeckBJ.hph,
    strategySingleDeckBJ.betVolatility,
    strategySingleDeckBJ.houseAdvantage,
    strategySingleDeckBJ.hph,
    strategySixDeckBJ.houseAdvantage,
  ]);

  return (
    <>
      <Container className='container-fluid'>
        <div className='row'>
          <TitleText
            className='py-0 pl-4 text-left display-3'
            style={{ color: Colors.primaryTextColor }}
          >
            Blackjack
          </TitleText>
          <TitleText
            className='py-0 pl-4 text-left display-3'
            style={{ backgroundImage: Colors.blueGradient }}
          >
            Dashboard
          </TitleText>
        </div>

        <div className='row justify-content-end'>
          {/* Index Play Table or Violations References */}
          <div className='col-sm-4 col-xs-12'>
            <div className='row justify-content-left m-0'>
              <div className='custom-control custom-switch m-0 pt-2'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='customSwitch1'
                  checked={indexPlayViolationToggle}
                  onChange={() =>
                    setIndexPlayViolationToggle(!indexPlayViolationToggle)
                  }
                />
                <label
                  className='custom-control-label'
                  for='customSwitch1'
                  style={{ fontSize: '1em' }}
                >
                  Toggle Common Violations/Index Plays
                </label>
              </div>
            </div>

            <div className='row'>
              {indexPlayViolationToggle ? (
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

          {/* Basic Strategy or Hole Card Strategy */}
          <div className='col-sm-4 col-xs-12'>
            <div className='row justify-content-left m-0'>
              <div className='custom-control custom-switch m-0 pt-2'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='customSwitch2'
                  checked={basicHoleCardStrategyToggle}
                  onChange={() =>
                    setBasicHoleCardStrategyToggle(!basicHoleCardStrategyToggle)
                  }
                />
                <label
                  className='custom-control-label'
                  for='customSwitch2'
                  style={{ fontSize: '1em' }}
                >
                  Toggle Basic Strategy/Hole Card Strategy
                </label>
              </div>
            </div>

            <div className='row'>
              {basicHoleCardStrategyToggle ? (
                <HoleCardStrategyContainer className='container-fluid'>
                  <HoleCardStrategyTable />
                </HoleCardStrategyContainer>
              ) : (
                <BasicStrategyContainer className='container-fluid'>
                  <BasicStrategyTable />
                </BasicStrategyContainer>
              )}
            </div>
          </div>

          {/* Lucky Lucky odds Table or Threshold Calculator*/}
          <div className='col-sm-4 col-xs-12'>
            <div className='row justify-content-left m-0'>
              <div className='custom-control custom-switch m-0 pt-2'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='customSwitch3'
                  checked={luckyLuckyThresholdToggled}
                  onChange={() =>
                    setLuckyLuckyThresholdToggled(!luckyLuckyThresholdToggled)
                  }
                />
                <label
                  className='custom-control-label'
                  for='customSwitch3'
                  style={{ fontSize: '1em' }}
                >
                  Toggle Lucky Luck Odds/Threshold Calculator
                </label>
              </div>
            </div>

            <div className='row'>
              {luckyLuckyThresholdToggled ? (
                <ThresholdCalculatorContainer className='container-fluid'>
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
                            setGameVariant(e.target.value);
                            console.log(gameVariant);
                          }}
                        >
                          <MenuButton
                            className='dropdown-item'
                            value='Six Deck Average Player'
                            type='button'
                          >
                            Six Deck Average Player
                          </MenuButton>
                          <MenuButton
                            className='dropdown-item'
                            value='Six Deck Strategy Player'
                            type='button'
                          >
                            Six Deck Strategy Player
                          </MenuButton>
                          <MenuButton
                            className='dropdown-item'
                            value='Double Deck Average Player'
                            type='button'
                          >
                            Double Deck Average Player
                          </MenuButton>
                          <MenuButton
                            className='dropdown-item'
                            value='Double Deck Strategy Player'
                            type='button'
                          >
                            Double Deck Strategy Player
                          </MenuButton>
                          <MenuButton
                            className='dropdown-item'
                            value='Single Deck Average Player'
                            type='button'
                          >
                            Single Deck Average Player
                          </MenuButton>
                          <MenuButton
                            className='dropdown-item'
                            value='Single Deck Strategy Player'
                            type='button'
                          >
                            Single Deck Strategy Player
                          </MenuButton>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end drop down  */}
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
    </>
  );
};

export default BlackjackDashboard;
