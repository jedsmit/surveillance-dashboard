import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';
//
import Colors from '../constants/Colors';
import { spacing } from '../constants/Sizes';

// styled components
const Container = styled.div`
  width: 100%;
  color: ${Colors.backgroundColor};
  background-image: ${Colors.blueGradient};
  font-weight: bold;
  padding: ${spacing.xxs};
`;

const TitleText = styled.h3`
  width: 100%;

  color: ${Colors.backgroundColor};
  font-weight: bold;
`;

const WinInput = styled.div`
  width: 100%;
  margin-bottom: ${spacing.sm};
`;
//
const CommissionCalculator = () => {
  const [winTotal, setWinTotal] = useState('');
  const [commission, setCommission] = useState('');

  const calcCommission = total => {
    let num = total * 0.05;
    return Math.round((num + Number.EPSILON) * 100) / 100;
  };

  useEffect(() => {
    setCommission(calcCommission(winTotal));
  }, [winTotal]);

  return (
    <Container className='container-fluid text-center'>
      <div className='form-group'>
        <label for='win'>
          <TitleText>Commission Calculator</TitleText>
          <h6 style={{ fontWeight: 'bold' }}>Enter win total</h6>
        </label>
        <WinInput
          as={NumberFormat}
          value={winTotal}
          thousandSeparator={true}
          prefix={'$'}
          onValueChange={values => {
            const { value } = values;
            setWinTotal(value);
          }}
        />

        <NumberFormat
          value={commission}
          thousandSeparator={true}
          prefix={'$'}
          displayType='text'
        />
      </div>
    </Container>
  );
};

export default CommissionCalculator;
