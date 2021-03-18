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
  height: 100vh;
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

const BasicStrategyContainer = styled.div`
  margin-right: 8rem;
  margin-top: 5rem;
  width: 30rem;
`;
const IndexPlayContainer = styled.div`
  margin-top: 5rem;
`;

const ViolationsContainer = styled.div`
  margin-top: 5rem;
  width: 100%;
  margin: 0;
`;

const ThresholdCalculatorContainer = styled.div`
  margin-top: 5rem;
`;

const BlackjackDashboard = () => {
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

  //handles index play toggle

  return (
    <Container className='container-fluid'>
      <TitleText>Blackjack Dashboard</TitleText>

      {/* Dropdown game selector */}
      <div className='row'>
        <div className='col'>
          <div className='dropdown'>
            <button
              className='btn btn-secondary dropdown-toggle'
              type='button'
              id='dropdownMenuButton'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
              sty
            >
              {gameVariant}
            </button>
            <div
              className='dropdown-menu'
              aria-labelledby='dropdownMenuButton'
              onClick={e => {
                e.stopPropagation();
                setGameVariant(e.target.value);
                console.log(gameVariant);
              }}
            >
              <button className='dropdown-item' value='Six Deck Average Player'>
                Six Deck Average Player
              </button>
              <button
                className='dropdown-item'
                value='Six Deck Strategy Player'
              >
                Six Deck Strategy Player
              </button>
              <button
                className='dropdown-item'
                value='Double Deck Average Player'
              >
                Double Deck Average Player
              </button>
              <button
                className='dropdown-item'
                value='Double Deck Strategy Player'
              >
                Double Deck Strategy Player
              </button>
              <button
                className='dropdown-item'
                value='Single Deck Average Player'
              >
                Single Deck Average Player
              </button>
              <button
                className='dropdown-item'
                value='Single Deck Strategy Player'
              >
                Single Deck Strategy Player
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end drop down  */}

      <div className='row justify-content-end'>
        <div className='col-sm-2'>
          <ThresholdCalculatorContainer>
            <ThresholdCalculator
              hph={gameData.hph}
              houseAdvantage={gameData.houseAdvantage}
              betVolatility={gameData.betVolatility}
              gameVariant={gameVariant}
            />
          </ThresholdCalculatorContainer>
        </div>

        <div className='col-sm-6'>
          <div className='row justify-content-left pt-5 m-0'>
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

        <div className='col-sm-4'>
          {/* Basic Strategy Chart */}
          <BasicStrategyContainer className='container-fluid'>
            <BasicStrategyTable />
          </BasicStrategyContainer>
        </div>
      </div>
    </Container>
  );
};

export default BlackjackDashboard;
