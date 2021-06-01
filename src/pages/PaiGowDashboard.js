import React from 'react';
import styled from 'styled-components';
//
import OddsTableCalculator from '../components/OddsTableCalculator';
import HouseWayTable from '../components/HouseWayTable';
//
import Colors from '../constants/Colors';
import { spacing, fontSize } from '../constants/Sizes';
import { pgOdds } from '../data/bonusBetOdds';

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
  width: 100%;
  background: ${Colors.backgroundColor};
  color: ${Colors.backgroundColor};
`;

const OddsCalculatorContainer = styled.div`
  margin-top: ${spacing.md};
  width: 100%;
`;

const HouseWayContainer = styled.div`
  margin-top: ${spacing.md};
  width: 100%;
  font-weight: bold;
`;

const PaiGowDashboard = () => {
  const { fortuneOdds, progressiveOdds } = pgOdds;
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText
          className='py-0 pl-4 text-left display-3'
          style={{ color: Colors.primaryTextColor }}
        >
          Pai Gow
        </TitleText>
        <TitleText
          className='py-0 pl-4 text-left display-3'
          style={{ backgroundImage: Colors.blueGradient }}
        >
          Dashboard
        </TitleText>
      </div>
      <div className='row'>
        <div className='col-sm-3'>
          <OddsCalculatorContainer className='container-fluid'>
            <OddsTableCalculator
              wagers={fortuneOdds.wagers}
              wagerName={fortuneOdds.wagerName}
              defaultWager={1}
            />
          </OddsCalculatorContainer>
        </div>
        <div className='col-sm-3'>
          <OddsCalculatorContainer className='container-fluid'>
            <OddsTableCalculator
              wagers={progressiveOdds.wagers}
              wagerName={progressiveOdds.wagerName}
              defaultWager={5}
            />
          </OddsCalculatorContainer>
        </div>
        <div className='col-sm-6'>
          <HouseWayContainer className='container-fluid'>
            <HouseWayTable />
          </HouseWayContainer>
        </div>
      </div>
    </Container>
  );
};

export default PaiGowDashboard;
