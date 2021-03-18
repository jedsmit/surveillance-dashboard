import React, { useState, useEffect } from 'react';

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
    <div>
      <div className='form-group'>
        <label for='exampleInputEmail1'>Win total</label>
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
    </div>
  );
};

export default CommissionCalculator;
