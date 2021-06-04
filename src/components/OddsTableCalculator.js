import React, { useState } from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';
//
import Colors from '../constants/Colors';
import { spacing, fontSizes } from '../constants/Sizes';

// styled components
const Container = styled.div`
  height: 100%;
  width: 100%;
  color: ${Colors.backgroundColor};
  background-image: ${Colors.blueGradient};
`;

const Title = styled.h3`
  margin: 0;
  padding: ${spacing.xxs};
  font-weight: bold;
`;
const TableContainer = styled.div`
  width: 100%;
  color: ${Colors.backgroundColor};
  font-size: ${fontSizes.sm};
  padding: ${spacing.sm};
  font-weight: bold;
  th {
    width: 10%;
  }

  tr {
    height: 10%;
  }

  td {
    border: solid;
    border-width: 0.25px;
  }
`;
const WagerInput = styled.div`
  width: 50%;
  text-align: center;
`;
//
const OddsTableCalculator = ({ wagers, wagerName, defaultWager }) => {
  console.log(wagerName);
  const [bonusWager, setBonusWager] = useState(defaultWager);
  return (
    <Container>
      <div className='row justify-content-center'>
        <Title className='text-center'>{wagerName} Odds Calculator</Title>
      </div>
      <TableContainer>
        <table>
          <tr className='text-center'>
            <th>Wager</th>
            <th>Winning Hand</th>
            <th>Win</th>
          </tr>
          {wagers.map(wager => {
            let payoutMultiplier = wager.payoutMultiplier;
            let winCombo = wager.winCombo;
            let win = bonusWager * payoutMultiplier;
            return (
              <tr className='text-center'>
                <td>
                  <WagerInput
                    as={NumberFormat}
                    thousandSeparator
                    name='bonusWager'
                    value={bonusWager}
                    onValueChange={values => {
                      const { formattedValue, value } = values;
                      setBonusWager(value);
                    }}
                    prefix={'$'}
                    displayType={'input'}
                  />
                </td>
                <td> {winCombo}</td>
                <td>${win}</td>
              </tr>
            );
          })}
        </table>
      </TableContainer>
    </Container>
  );
};

export default OddsTableCalculator;
