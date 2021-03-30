import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';

// styled components
const Container = styled.div`
  height: 100%;
  width: 100%;
  color: ${Colors.backgroundColor};
  background-color: ${Colors.accentColor};
  border-radius: 5px;
`;

const TitleText = styled.h1`
  fontsize: 5em;
  margin: 0;
  padding: 10px;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
`;

const Text = styled.h3``;

const testWager = {
  wagerName: 'bonus wager',
  winCombo: 'some cards',
  payoutMultiplier: 100,
};

const OddsTableCalculator = ({ gameName, wager, unitsBet }) => {
  const { wagerName, winCombo, payoutMultiplier } = wager;
  let win = unitsBet * payoutMultiplier;
  return (
    <Container>
      <TitleText>{gameName}</TitleText>
      <TitleText>Payout Odds Calculator </TitleText>
      <Text>
        {unitsBet} unit {wagerName} wins {win} units
      </Text>
    </Container>
  );
};

export default OddsTableCalculator;
