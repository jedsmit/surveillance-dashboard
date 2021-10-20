import React, { Suspense } from 'react';
import styled from 'styled-components';
//
import TitleText from '../components/TitleText';
import OddsTableCalculator from '../components/OddsTableCalculator';
//
import Colors from '../constants/Colors';
import { spacing } from '../constants/Sizes';
import { tcOdds } from '../data/bonusBetOdds';

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

const OddsCalculatorContainer = styled.div`
  margin-top: ${spacing.md};
  width: 100%;
`;

const BasicStrategyContainer = styled.div`
  margin-top: ${spacing.md};
  width: 100%;
  background-image: ${Colors.blueGradient};
  color: ${Colors.backgroundColor};
  text-align: center;
  font-weight: bold;
  padding-bottom: ${spacing.xxs};
  padding-top: ${spacing.xxs};
`;

const SubSectionTitle = styled.h3`
  color: ${Colors.backgroundColor};
  text-align: center;
  font-weight: bold;
`;
//
const ThreeCardPokerDashboard = () => {
  const { pairPlusOdds, anteBonusOdds, badBeatOdds } = tcOdds;
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText title='Three Card Poker' />
      </div>

      <div className='row'>
        <div className='col-sm-4'>
          <OddsCalculatorContainer className='container-fluid'>
            <OddsTableCalculator
              wagers={pairPlusOdds.wagers}
              wagerName={pairPlusOdds.wagerName}
              defaultWager={1}
            />
          </OddsCalculatorContainer>
        </div>

        <div className='col-sm-4'>
          <BasicStrategyContainer>
            <SubSectionTitle>Basic Strategy</SubSectionTitle>
            <p>Play any hand Q-6 or better.</p>
          </BasicStrategyContainer>
          <OddsCalculatorContainer className='container-fluid'>
            <OddsTableCalculator
              wagers={anteBonusOdds.wagers}
              wagerName={anteBonusOdds.wagerName}
              defaultWager={1}
            />
          </OddsCalculatorContainer>
        </div>

        <div className='col-sm-4'>
          <OddsCalculatorContainer className='container-fluid'>
            <OddsTableCalculator
              wagers={badBeatOdds.wagers}
              wagerName={badBeatOdds.wagerName}
              defaultWager={1}
            />
          </OddsCalculatorContainer>
        </div>
      </div>
    </Container>
  );
};

export default ThreeCardPokerDashboard;
