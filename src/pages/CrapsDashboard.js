import React, { useState } from 'react';
import styled from 'styled-components';
//
import OddsTableCalculator from '../components/OddsTableCalculator';
import CommissionCalculator from '../components/CommissionCalculator';
import CrapsCalculator from '../components/CrapsCalculator';
import TestCrapsCalc from '../components/TestCrapsCalc';
//
import Colors from '../constants/Colors';
import { spacing, fontSizes } from '../constants/Sizes';
import { crapsOdds } from '../data/crapsOdds';
import { crapsOperations } from '../data/crapsOperations';
import CrapsCheatSheet from '../components/CrapsCheatSheet';

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

const PlaceBetOddsContainer = styled.div`
  margin-bottom: ${spacing.sm};
`;

const BuyBetOddsContainer = styled.div`
  margin-bottom: ${spacing.sm};
`;

const LayBetOddsContainer = styled.div`
  margin-bottom: ${spacing.sm};
`;

const OddsBetContainer = styled.div`
  margin-bottom: ${spacing.sm};
`;

const PropBetOddsContainer = styled.div`
  margin-bottom: ${spacing.sm};
`;

const CommissionCalculatorContainer = styled.div`
  margin-bottom: ${spacing.sm};
`;

const CrapsDashboard = () => {
  const [cheatSheetCalculatorToggle, setCheatSheetCalculatorToggle] =
    useState(true);
  const {
    placeBets,
    buyBets,
    layBets,
    passlineOddsBets,
    dontPassOddsBets,
    propBets,
  } = crapsOdds;
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText
          className='py-0 pl-4 text-left display-3'
          style={{ color: Colors.primaryTextColor }}
        >
          Craps
        </TitleText>
        <TitleText
          className='py-0 pl-4 text-left display-3'
          style={{ backgroundImage: Colors.blueGradient }}
        >
          Dashboard
        </TitleText>
      </div>
      <div className='row justify-content-left m-0'>
        <div className='custom-control custom-switch m-0 pt-2'>
          <input
            type='checkbox'
            className='custom-control-input'
            id='customSwitch1'
            checked={cheatSheetCalculatorToggle}
            onChange={() =>
              setCheatSheetCalculatorToggle(!cheatSheetCalculatorToggle)
            }
          />
          <label
            className='custom-control-label'
            for='customSwitch1'
            style={{ fontSize: '1em' }}
          >
            Toggle Cheat Sheet/Calculator
          </label>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          {cheatSheetCalculatorToggle ? (
            <PlaceBetOddsContainer>
              <CrapsCheatSheet />
            </PlaceBetOddsContainer>
          ) : (
            <PlaceBetOddsContainer>
              <TestCrapsCalc data={placeBets} />
            </PlaceBetOddsContainer>
          )}
        </div>
      </div>
    </Container>
  );
};

export default CrapsDashboard;
