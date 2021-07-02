import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';
//
import { crapsOperations } from '../data/crapsOperations';
//
import Colors from '../constants/Colors';
import { spacing, fontSizes } from '../constants/Sizes';
import { crapsOdds } from '../data/crapsOdds';

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

const NumberField = styled.div`
  width: 30%;
`;

const WagerName = styled.div``;

const WagerWin = styled.div``;
//

const TestCrapsCalculator = () => {
  //state
  const [dice, setDice] = useState({ one: '?', two: '?' });
  const [diceTotal, setDiceTotal] = useState(0);
  const [point, setPoint] = useState('Off');
  const [wagers, setWagers] = useState({
    pass: 0,
    dontPass: 0,
    come: 0,
    dontCome: 0,
    passOdds4: 0,
    passOdds5: 0,
    passOdds6: 0,
    passOdds9: 0,
    passOdds10: 0,
    dontPassOdds4: 0,
    dontPassOdds5: 0,
    dontPassOdds6: 0,
    dontPassOdds8: 0,
    dontPassOdds9: 0,
    dontPassOdds10: 0,
    comeOdds4: 0,
    comeOdds5: 0,
    comeOdds6: 0,
    comeOdds9: 0,
    comeOdds10: 0,
    dontComeOdds4: 0,
    dontComeOdds5: 0,
    dontComeOdds6: 0,
    dontComeOdds8: 0,
    dontComeOdds9: 0,
    dontComeOdds10: 0,
    place4: 0,
    place5: 0,
    place6: 0,
    place8: 0,
    place9: 0,
    place10: 0,
    field: 0,
    big6: 0,
    big8: 0,
    hop3and1: 0,
    hop2and2: 0,
    hop4and1: 0,
    hop3and2: 0,
    hop5and1: 0,
    hop4and2: 0,
    hop3and3: 0,
    hop5and3: 0,
    hop6and2: 0,
    hop4and4: 0,
    hop6and3: 0,
    hop5and4: 0,
    hop6and4: 0,
    hop5and5: 0,
    hardway6: 0,
    hardway8: 0,
    hardway4: 0,
    hardway10: 0,
  });
  const [wins, setWins] = useState({
    pass: 0,
    dontPass: 0,
    come: 0,
    dontCome: 0,
    passOdds4: 0,
    passOdds5: 0,
    passOdds6: 0,
    passOdds9: 0,
    passOdds10: 0,
    dontPassOdds4: 0,
    dontPassOdds5: 0,
    dontPassOdds6: 0,
    dontPassOdds8: 0,
    dontPassOdds9: 0,
    dontPassOdds10: 0,
    comeOdds4: 0,
    comeOdds5: 0,
    comeOdds6: 0,
    comeOdds9: 0,
    comeOdds10: 0,
    dontComeOdds4: 0,
    dontComeOdds5: 0,
    dontComeOdds6: 0,
    dontComeOdds8: 0,
    dontComeOdds9: 0,
    dontComeOdds10: 0,
    place4: 0,
    place5: 0,
    place6: 0,
    place8: 0,
    place9: 0,
    place10: 0,
    field: 0,
    big6: 0,
    big8: 0,
    hop3and1: 0,
    hop2and2: 0,
    hop4and1: 0,
    hop3and2: 0,
    hop5and1: 0,
    hop4and2: 0,
    hop3and3: 0,
    hop5and3: 0,
    hop6and2: 0,
    hop4and4: 0,
    hop6and3: 0,
    hop5and4: 0,
    hop6and4: 0,
    hop5and5: 0,
    hardway6: 0,
    hardway8: 0,
    hardway4: 0,
    hardway10: 0,
  });

  //possible states: comeoutRoll, intermediateRoll
  const [roll, setRoll] = useState('comeoutRoll');

  const handleDiceChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    const updatedDice = { ...dice, [name]: value };
    setDice(updatedDice);
  };

  const handlePointChange = e => {
    e.stopPropagation();
    const newPoint = e.target.value;
    const updatedPoint = newPoint;
    setPoint(updatedPoint);
    newPoint === 'Off' ? setRoll('comeoutRoll') : setRoll('intermediateRoll');
  };

  const handleWagerChange = e => {
    const name = e.target.name;
    const newWager = e.target.value;
    const updatedWager = newWager;
    setWagers({ ...wagers, [name]: updatedWager });
  };

  // const calculateWin = (name, wager) => {
  //   const win = crapsOperations.name[roll].winCalc(wager);
  //   setWins({ ...wins, [name]: win });
  // };

  useEffect(() => {
    console.log(dice);
  }, [dice]);

  useEffect(() => {
    console.log(point);
  }, [point]);

  useEffect(() => {
    console.log(roll);
  }, [roll]);

  useEffect(() => {
    console.log(wins);
  }, [wins]);

  useEffect(() => {
    let total = parseInt(dice.one) + parseInt(dice.two);
    setDiceTotal(total);
    console.log(diceTotal);
  }, [dice]);

  useEffect(() => {
    console.log(wagers);
  }, [wagers]);

  const runCalc = () => {
    if (roll === 'comeoutRoll') {
      switch (diceTotal) {
        case 2:
          console.log('case 2');
          var newWins = {
            ...wins,
            field: crapsOperations.field.nextRoll.winCalc(
              wagers.field,
              dice.one,
              dice.two
            ),
          };
          setWins(newWins);
          console.log(newWins);
          break;
        case 3:
          console.log('case 3');
          break;
        case 4:
          console.log('case 4');
          break;
        case 5:
          console.log('case 5');
          break;
        case 6:
          console.log('case 6');
          var newWins = {
            ...wins,
            hop5and1: crapsOperations.hop5and1.nextRoll.winCalc(
              wagers.dontPass,
              dice.one,
              dice.two
            ),
          };
          setWins(newWins);
          console.log(newWins);
          break;
        case 7:
          console.log('case 7');
          var newWins = {
            ...wins,
            pass: crapsOperations.pass.comeoutRoll.winCalc(wagers.pass),
          };
          setWins(newWins);

          break;
      }
    } else if (roll === 'intermediateRoll') {
      switch (diceTotal) {
        case 2:
          console.log('int case 2');
          break;
        case 3:
          console.log('int case 3');
          break;
        case 4:
          console.log('int case 4');
          break;
        case 5:
          console.log('int case 5');
          break;
        case 6:
          console.log('int case 6');
          break;
        case 7:
          console.log('int case 7');
          break;
      }
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>
        <h3>Craps Calculator</h3>
      </div>
      <div className='row'>
        {/* dice value dropdowns */}
        <div className='col'>
          <span className='dropdown'>
            Dice values:
            <button
              className='btn btn-secondary  dropdown-toggle m-2'
              style={{
                backgroundImage: Colors.blueGradient,
                color: 'black',
                fontWeight: 'bold',
              }}
              role='button'
              id='dropdownMenuLink'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              {dice.one}
            </button>
            <div
              className='dropdown-menu'
              aria-labelledby='dropdownMenuLink'
              value={dice.one}
              onClick={handleDiceChange}
            >
              <button className='dropdown-item' value='1' name='one'>
                1
              </button>
              <button className='dropdown-item' value='2' name='one'>
                2
              </button>
              <button className='dropdown-item' value='3' name='one'>
                3
              </button>
              <button className='dropdown-item' value='4' name='one'>
                4
              </button>
              <button className='dropdown-item' value='5' name='one'>
                5
              </button>
              <button className='dropdown-item' value='6' name='one'>
                6
              </button>
            </div>
          </span>
          <span className='dropdown'>
            <button
              className='btn btn-secondary dropdown-toggle m-2'
              style={{
                backgroundImage: Colors.blueGradient,
                color: 'black',
                fontWeight: 'bold',
              }}
              role='button'
              id='dropdownMenuLink'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              {dice.two}
            </button>
            <div
              className='dropdown-menu'
              aria-labelledby='dropdownMenuLink'
              value={dice.two}
              onClick={handleDiceChange}
            >
              <button className='dropdown-item' value='1' name='two'>
                1
              </button>
              <button className='dropdown-item' value='2' name='two'>
                2
              </button>
              <button className='dropdown-item' value='3' name='two'>
                3
              </button>
              <button className='dropdown-item' value='4' name='two'>
                4
              </button>
              <button className='dropdown-item' value='5' name='two'>
                5
              </button>
              <button className='dropdown-item' value='6' name='two'>
                6
              </button>
            </div>
          </span>
          {/* point number dropdown */}
          Point Number:
          <span className='dropdown'>
            <button
              className='btn btn-secondary dropdown-toggle m-2'
              style={{
                backgroundImage: Colors.blueGradient,
                color: 'black',
                fontWeight: 'bold',
              }}
              role='button'
              id='dropdownMenuLink'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              {point}
            </button>
            <div
              className='dropdown-menu'
              aria-labelledby='dropdownMenuLink'
              value={point}
              onClick={handlePointChange}
            >
              <button className='dropdown-item' value='Off' name='point'>
                Off
              </button>
              <button className='dropdown-item' value='4' name='point'>
                4
              </button>
              <button className='dropdown-item' value='5' name='point'>
                5
              </button>
              <button className='dropdown-item' value='6' name='point'>
                6
              </button>
              <button className='dropdown-item' value='8' name='point'>
                8
              </button>
              <button className='dropdown-item' value='9' name='point'>
                9
              </button>
              <button className='dropdown-item' value='10' name='point'>
                10
              </button>
            </div>
          </span>
          <span>Total: {diceTotal}</span>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          Passline{' '}
          <input type='number' name='pass' onChange={handleWagerChange}></input>
        </div>
        <div className='col'>
          Win{' '}
          <div style={{ backgroundColor: Colors.blueGradient }}>
            ${wins.pass}
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          Don't Pass{' '}
          <input
            type='number'
            name={'dontPass'}
            onChange={handleWagerChange}
          ></input>
        </div>
        <div className='col'>
          Win{' '}
          <div style={{ backgroundColor: Colors.blueGradient }}>
            ${wins.dontPass}
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          Field{' '}
          <input
            type='number'
            name={'field'}
            onChange={handleWagerChange}
          ></input>
        </div>
        <div className='col'>
          Win{' '}
          <div style={{ backgroundColor: Colors.blueGradient }}>
            ${wins.field}
          </div>
        </div>
      </div>
      <button onClick={runCalc}>calc</button>
    </div>
  );
};

export default TestCrapsCalculator;
