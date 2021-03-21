import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';
import Colors from '../constants/Colors';

//styled-components

const Container = styled.div`
  height: 100%;
  width: 100%;
  color: ${Colors.backgroundColor};
  background-color: ${Colors.accentColor};
  padding: 0.7em;
  border-radius: 5px;
`;

const Form = styled.form`
  font-size: 0.7em;
`;

const NumberField = styled.div`
  width: 80%;
  font-size: 0.7em;
`;

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
    console.log('twin: ' + tWin);
    console.log('sd: ' + standardDeviation);

    // setUpperThreshold(tWin + standardDeviation * 2);
    // setLowerThreshold(tWin - standardDeviation * 2);
  }, [averageWager, hoursPlayed, gameVariant]);

  // const handleWagerChange = e => {
  //   setAverageWager(e.target.value);
  // };

  // const handleHoursChange = e => {
  //   setHoursPlayed(e.target.value);
  // };

  return (
    <Container className='container-fluid'>
      <h3>Threshold Calculator</h3>
      <Form>
        <div className='form-group'>
          <label for='averageWager'>Average Wager</label>
          <NumberField
            isNumericString
            as={NumberFormat}
            // className={numberFormat}
            thousandSeparator
            name='averageWager'
            value={averageWager}
            onValueChange={values => {
              const { formattedValue, value } = values;
              setAverageWager(value);
            }}
            prefix={'$'}
            displayType={'input'}
          />
          {/* <input
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
        /> */}
        </div>
        <div className='form-group'>
          <label for='hoursPlayed'>Hours Played</label>
          <NumberField
            isNumericString
            as={NumberFormat}
            // className={numberFormat}
            thousandSeparator
            name='hoursPlayed'
            value={hoursPlayed}
            onValueChange={values => {
              const { formattedValue, value } = values;
              setHoursPlayed(value);
            }}
            displayType={'input'}
          />
          {/* <input
          type='string'
          className='form-control'
          id='hoursPlayed'
          placeholder='hrs'
          onChange={e => {
            e.stopPropagation();
            setHoursPlayed(e.target.value);
            // console.log(hoursPlayed);
          }}
        /> */}
        </div>
        <div className='form-group'>
          <label for='thresholdRange'>Acceptable Threshold Range</label>
          <div>
            <NumberField
              isNumericString
              as={NumberFormat}
              // className={numberFormat}
              value={lowerThreshold}
              thousandSeparator
              prefix={'$'}
              displayType={'text'}
            />{' '}
            -{' '}
            <NumberField
              isNumericString
              as={NumberFormat}
              // className={numberFormat}
              value={upperThreshold}
              thousandSeparator
              prefix={'$'}
              displayType={'text'}
            />
            {/* {lowerThreshold} to {upperThreshold} */}
          </div>
        </div>
        {/* <button className='btn btn-primary' onClick={handleSubmit}>
        Submit
      </button> */}
      </Form>
    </Container>
  );
};

export default ThresholdCalculator;
