import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';
//
import Colors from '../constants/Colors';
import { spacing } from '../constants/Sizes';

//styled-components
const Container = styled.div`
  height: 100%;
  width: 100%;
  color: ${Colors.backgroundColor};
  background-color: ${Colors.accentColor};
  padding: ${spacing.xxs};
  border-radius: 5px;
`;

const Form = styled.form``;

const AverageWagerInput = styled.div`
  width: 100%;
`;

const HoursPlayedInput = styled.div`
  width: 100%;
`;

const LowerThresholdDisplay = styled.div`
  width: 60%;
`;

const UpperThresholdDisplay = styled.div`
  width: 60%;
`;

const ThresholdCalculator = ({
  houseAdvantage,
  hph,
  betVolatility,
  gameVariant,
}) => {
  const [averageWager, setAverageWager] = useState('');
  const [hoursPlayed, setHoursPlayed] = useState('');
  const [upperThreshold, setUpperThreshold] = useState('');
  const [lowerThreshold, setLowerThreshold] = useState('');

  const calcTWin = () => {
    return -Math.floor(houseAdvantage * averageWager * hoursPlayed * hph);
  };

  const calcStandardDeviation = () => {
    const totalWager = hoursPlayed * hph;
    return Math.floor(Math.sqrt(totalWager) * (betVolatility * averageWager));
  };

  useEffect(() => {
    const tWin = calcTWin();
    const standardDeviation = calcStandardDeviation();
    console.log('twin: ' + tWin);
    console.log('sd: ' + standardDeviation);

    setUpperThreshold(tWin + standardDeviation * 2);
    setLowerThreshold(tWin - standardDeviation * 2);
  }, [averageWager, hoursPlayed, gameVariant]);

  return (
    <Container className='container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-6'>
          <h3>Threshold Calculator</h3>

          <Form>
            <div className='form-group'>
              <label className='m-2' for='averageWager'>
                Average Wager
              </label>
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
              <label className='m-2' for='hoursPlayed'>
                Hours Played
              </label>
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
        </div>
      </div>
    </Container>
  );
};

export default ThresholdCalculator;
