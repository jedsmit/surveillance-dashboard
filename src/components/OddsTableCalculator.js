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

const Title = styled.h3`
  margin: 0;
  padding: 10px;
`;

const Text = styled.h6``;

const OddsTableCalculator = ({ wagerName, wagers, unitsBet }) => {
  console.log(wagers);
  return (
    <Container>
      <div className='row justify-content-center'>
        <Title className='text-center'>{wagerName} Odds Calculator</Title>
      </div>
      {wagers.map(wager => {
        let payoutMultiplier = wager.payoutMultiplier;
        let winCombo = wager.winCombo;
        let win = unitsBet * payoutMultiplier;
        return (
          <Text>
            {unitsBet} unit with {winCombo} wins {win} units
          </Text>
        );
      })}
    </Container>
  );
};

export default OddsTableCalculator;
