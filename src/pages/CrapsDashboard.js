import React from 'react';
import styled from 'styled-components';
//
import OddsTableCalculator from '../components/OddsTableCalculator';
import CommissionCalculator from '../components/CommissionCalculator';
//
import Colors from '../constants/Colors';
import { spacing, fontSizes } from '../constants/Sizes';
import { crapsOdds } from '../data/bonusBetOdds';

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
  font-size: ${fontSizes.xxl};
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
  const { placeBets, buyBets, layBets, oddsBets, propBets } = crapsOdds;
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText
          className='py-0 pl-4 text-left'
          style={{ color: Colors.primaryTextColor }}
        >
          Craps
        </TitleText>
        <TitleText
          className='py-0 pl-4 text-left'
          style={{ backgroundImage: Colors.blueGradient }}
        >
          Dashboard
        </TitleText>
      </div>
      <p>Todo: odds tables, commission calc</p>
      <div className='row'>
        <div className='col'>
          <PlaceBetOddsContainer>
            <OddsTableCalculator
              wagers={placeBets.wagers}
              wagerName={placeBets.wagerName}
              defaultWager={5}
            />
          </PlaceBetOddsContainer>
          <OddsBetContainer>
            <OddsTableCalculator
              wagers={oddsBets.wagers}
              wagerName={oddsBets.wagerName}
              defaultWager={5}
            />
          </OddsBetContainer>
        </div>
        <div className='col'>
          <CommissionCalculatorContainer>
            <CommissionCalculator />
          </CommissionCalculatorContainer>
          <BuyBetOddsContainer>
            <OddsTableCalculator
              wagers={buyBets.wagers}
              wagerName={buyBets.wagerName}
              defaultWager={5}
            />
          </BuyBetOddsContainer>
          <LayBetOddsContainer>
            <OddsTableCalculator
              wagers={layBets.wagers}
              wagerName={layBets.wagerName}
              defaultWager={5}
            />
          </LayBetOddsContainer>
        </div>
        <div className='col'>
          <PropBetOddsContainer>
            <OddsTableCalculator
              wagers={propBets.wagers}
              wagerName={propBets.wagerName}
              defaultWager={5}
            />
          </PropBetOddsContainer>
        </div>
      </div>
    </Container>
  );
};

export default CrapsDashboard;
