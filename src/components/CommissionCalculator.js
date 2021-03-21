import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Colors from '../constants/Colors';

// styled components
const Container = styled.div`
  width: 100%;
  color: ${Colors.backgroundColor};
  background-color: ${Colors.accentColor};
  border-radius: 5px;
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
        <input
          type='string'
          className='form-control'
          id='win'
          aria-describedby='win total'
          placeholder='Enter win total'
          onChange={e => {
            setWinTotal(e.target.value);
          }}
        ></input>
        <div>Commission: ${commission}</div>
      </div>
    </Container>
  );
};

export default CommissionCalculator;
