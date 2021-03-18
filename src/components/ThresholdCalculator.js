import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';

//styled-components

const Form = styled.form``;

const ThresholdCalculator = props => {
  const { houseAdvantage, hph, betVolatility, gameVariant } = props;
  const [averageWager, setAverageWager] = useState('');
  const [hoursPlayed, setHoursPlayed] = useState('');
  const [upperThreshold, setUpperThreshold] = useState('');
  const [lowerThreshold, setLowerThreshold] = useState('');

  const calcTWin = () => {
    return -Math.floor(houseAdvantage * averageWager * hoursPlayed * hph);
  };

  const calcStandardDeviation = () => {
    let totalWager = hoursPlayed * hph;
    return Math.floor(Math.sqrt(totalWager) * (betVolatility * averageWager));
  };

  useEffect(() => {
    let tWin = calcTWin();
    let standardDeviation = calcStandardDeviation();
    // console.log('twin: ' + tWin);
    // console.log('sd: ' + standardDeviation);

    setUpperThreshold(tWin + standardDeviation * 2);
    setLowerThreshold(tWin - standardDeviation * 2);
  }, [averageWager, hoursPlayed, gameVariant]);

  return (
    <Form>
      <div className='form-group'>
        <label for='averageWager'>Average Wager</label>
        <input
          type='string'
          className='form-control'
          id='averageWager'
          aria-describedby='averageWager'
          placeholder='$'
          onChange={e => {
            e.stopPropagation();
            setAverageWager(e.target.value);
            // console.log(averageWager);
          }}
        />
      </div>
      <div className='form-group'>
        <label for='hoursPlayed'>Hours Played</label>
        <input
          type='string'
          className='form-control'
          id='hoursPlayed'
          placeholder='hrs'
          onChange={e => {
            e.stopPropagation();
            setHoursPlayed(e.target.value);
            // console.log(hoursPlayed);
          }}
        />
      </div>
      <div className='form-group'>
        <label for='thresholdRange'>Acceptable Threshold Range</label>
        <div>
          {lowerThreshold} to {upperThreshold}
        </div>
      </div>
      {/* <button className='btn btn-primary' onClick={handleSubmit}>
        Submit
      </button> */}
    </Form>
  );
};

export default ThresholdCalculator;
