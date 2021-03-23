import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';
import NumberFormat from 'react-number-format';

// styled components
const Container = styled.div`
  width: 100%;
  color: ${Colors.backgroundColor};
  background-color: ${Colors.accentColor};
  border-radius: 5px;
`;

const WinInput = styled.div`
  width: 100%;
`;

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
    <Container className='container-fluid'>
      <div className='form-group'>
        <label for='win'>Win total</label>
        <WinInput
          as={NumberFormat}
          value={winTotal}
          thousandSeparator={true}
          prefix={'$'}
          onValueChange={values => {
            const { formattedValue, value } = values;
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
