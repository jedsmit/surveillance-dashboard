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

const Form = styled.form``;

const AverageWagerInput = styled.div`
  width: 80%;
  font-size: 0.7em;
`;

const HoursPlayedInput = styled.div`
  width: 80%;
  font-size: 0.7em;
`;

const LowerThresholdDisplay = styled.div`
  width: 80%;
  font-size: 0.7em;
`;

const UpperThresholdDisplay = styled.div`
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

    setUpperThreshold(tWin + standardDeviation * 2);
    setLowerThreshold(tWin - standardDeviation * 2);
  }, [averageWager, hoursPlayed, gameVariant]);

  return (
    <Container className='container-fluid'>
      <h3>Threshold Calculator</h3>
      <Form>
        <div className='form-group'>
          <label for='averageWager'>Average Wager</label>
          <AverageWagerInput
            as={NumberFormat}
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
        </div>
        <div className='form-group'>
          <label for='hoursPlayed'>Hours Played</label>
          <HoursPlayedInput
            as={NumberFormat}
            thousandSeparator
            name='hoursPlayed'
            value={hoursPlayed}
            onValueChange={values => {
              const { formattedValue, value } = values;
              setHoursPlayed(value);
            }}
            displayType={'input'}
          />
        </div>
        <div className='form-group'>
          <label for='thresholdRange'>Acceptable Threshold Range</label>
          <div>
            <LowerThresholdDisplay
              as={NumberFormat}
              value={lowerThreshold}
              thousandSeparator
              prefix={'$'}
              displayType={'text'}
            />{' '}
            -{' '}
            <UpperThresholdDisplay
              as={NumberFormat}
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
