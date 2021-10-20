import React from 'react';
import styled from 'styled-components';
//
import TitleText from '../components/TitleText';
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
  padding: ${spacing.sm};
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
        <TitleText title='Fortune Pai Gow' />
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
