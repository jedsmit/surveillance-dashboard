import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';
import Colors from '../constants/Colors';

//styled-components
const Container = styled.div`
  height: 100%;
  width: 100%;
  font-size: 1em;
  color: ${Colors.backgroundColor};
  background-color: ${Colors.accentColor};
  padding: 1em;
  border-radius: 5px;
`;

const NumberField = styled.div`
  width: 30%;
`;

const WagerName = styled.div``;

const WagerWin = styled.div``;

const RouletteCalculator = props => {
  //states
  const [wagers, setWagers] = useState({
    straightUpWager: 0,
    splitWager: 0,
    streetWager: 0,
    cornerWager: 0,
    doubleStreetWager: 0,
  });

  const [wins, setWins] = useState({
    straightUpWin: 0,
    splitWin: 0,
    streetWin: 0,
    cornerWin: 0,
    doubleStreetWin: 0,
  });

  const [denomToggle, setDenomToggle] = useState(false);
  const [chipDenom, setChipDenom] = useState(1);

  //  effects
  useEffect(() => {
    calcStraightUpWin(wagers.straightUpWager);
  }, [wagers.straightUpWager]);

  useEffect(() => {
    calcSplitWin(wagers.splitWager);
  }, [wagers.splitWager]);

  useEffect(() => {
    calcStreetWin(wagers.streetWager);
  }, [wagers.streetWager]);

  useEffect(() => {
    calcCornerWin(wagers.cornerWager);
  }, [wagers.cornerWager]);

  useEffect(() => {
    calcDoubleStreetWin(wagers.doubleStreetWager);
  }, [wagers.doubleStreetWager]);

  //add up the win totals
  const totalWin = Object.values(wins).reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  //sets wagers state
  const handleWagerChange = e => {
    let name = e.target.name;
    let wager = e.target.value;
    setWagers({ ...wagers, [name]: wager });
  };

  // win calculators -
  //TODO: reformat to reducer
  const calcStraightUpWin = () => {
    let win = wagers.straightUpWager * 35;
    setWins({ ...wins, straightUpWin: win });
  };

  const calcSplitWin = () => {
    let win = wagers.splitWager * 17;
    setWins({ ...wins, splitWin: win });
  };

  const calcStreetWin = () => {
    let win = wagers.streetWager * 11;
    setWins({ ...wins, streetWin: win });
  };

  const calcCornerWin = () => {
    let win = wagers.cornerWager * 8;
    setWins({ ...wins, cornerWin: win });
  };

  const calcDoubleStreetWin = () => {
    let win = wagers.doubleStreetWager * 5;
    setWins({ ...wins, doubleStreetWin: win });
  };

  const handleMenuItemClick = e => {
    e.stopPropagation();
    setChipDenom(e.target.value);
    setDenomToggle(true);
    console.log(chipDenom);
  };

  return (
    <>
      <div className='row justify-content-center'>
        <h3>Roulette Calculator</h3>
      </div>

      <div className='row justify-content-center py-5'>
        <h4>Select Denom</h4>
        <div className='col-sm-3'>
          <div className='dropdown'>
            <button
              style={{
                backgroundColor: Colors.accentColor,
                color: Colors.backgroundColor,
              }}
              className='btn btn-secondary dropdown-toggle'
              type='button'
              id='dropdownMenuButton'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              ${chipDenom}
            </button>
            <div
              className='dropdown-menu'
              aria-labelledby='dropdownMenuButton'
              onClick={handleMenuItemClick}
            >
              <button className='dropdown-item' value='1'>
                $1
              </button>
              <button className='dropdown-item' value='5'>
                $5
              </button>
              <button className='dropdown-item' value='10'>
                $10
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Wager Inputs*/}

      <Container className='container-fluid'>
        {/* Straight-up */}
        <div className='row p-1'>
          <div className='col-sm-4'>
            <WagerName className='text-left'>Straight-up</WagerName>
          </div>
          <div className='col-sm-4'>
            <NumberField
              as={NumberFormat}
              // className={numberFormat}
              thousandSeparator
              name='straightUpWager'
              onChange={handleWagerChange}
              displayType={'input'}
            />{' '}
            Units
          </div>

          <div className='col-sm-4 d-flex justify-content-end'>
            <WagerWin>
              Win{' '}
              <NumberField
                as={NumberFormat}
                // className={numberFormat}
                value={wins.straightUpWin}
                thousandSeparator
                suffix={' units'}
                displayType={'text'}
              />
            </WagerWin>
          </div>
        </div>
        {/* Split */}
        <div className='row p-1'>
          <div className='col-sm-4'>
            <WagerName className='text-left'>Split</WagerName>
          </div>
          <div className='col-sm-4'>
            <NumberField
              as={NumberFormat}
              // className={numberFormat}
              thousandSeparator
              name='splitWager'
              onChange={handleWagerChange}
              displayType={'input'}
            />{' '}
            Units
          </div>

          <div className='col-sm-4 d-flex justify-content-end'>
            <WagerWin>
              Win{' '}
              <NumberField
                as={NumberFormat}
                // className={numberFormat}
                value={wins.splitWin}
                thousandSeparator
                suffix={' units'}
                displayType={'text'}
              />
            </WagerWin>
          </div>
        </div>

        {/* Street */}
        <div className='row p-1'>
          <div className='col-sm-4'>
            <WagerName className='text-left'>Street</WagerName>
          </div>
          <div className='col-sm-4'>
            <NumberField
              as={NumberFormat}
              // className={numberFormat}
              thousandSeparator
              name='streetWager'
              onChange={handleWagerChange}
              displayType={'input'}
            />{' '}
            Units
          </div>

          <div className='col-sm-4 d-flex justify-content-end'>
            <WagerWin>
              Win{' '}
              <NumberField
                as={NumberFormat}
                // className={numberFormat}
                value={wins.streetWin}
                thousandSeparator
                suffix={' units'}
                displayType={'text'}
              />
            </WagerWin>
          </div>
        </div>

        {/* Corner */}
        <div className='row p-1'>
          <div className='col-sm-4'>
            <WagerName className='text-left'>Corner</WagerName>
          </div>
          <div className='col-sm-4'>
            <NumberField
              as={NumberFormat}
              // className={numberFormat}
              thousandSeparator
              name='cornerWager'
              onChange={handleWagerChange}
              displayType={'input'}
            />{' '}
            Units
          </div>

          <div className='col-sm-4 d-flex justify-content-end'>
            <WagerWin>
              Win{' '}
              <NumberField
                as={NumberFormat}
                // className={numberFormat}
                value={wins.cornerWin}
                thousandSeparator
                suffix={' units'}
                displayType={'text'}
              />
            </WagerWin>
          </div>
        </div>

        {/* Double Street */}
        <div className='row p-1'>
          <div className='col-sm-4'>
            <WagerName className='text-left'>Double Street</WagerName>
          </div>
          <div className='col-sm-4'>
            <NumberField
              as={NumberFormat}
              // className={numberFormat}
              thousandSeparator
              name='doubleStreetWager'
              onChange={handleWagerChange}
              displayType={'input'}
            />{' '}
            Units
          </div>

          <div className='col-sm-4 d-flex justify-content-end'>
            <WagerWin>
              Win{' '}
              <NumberField
                as={NumberFormat}
                // className={numberFormat}
                value={wins.doubleStreetWin}
                thousandSeparator
                suffix={' units'}
                displayType={'text'}
              />
            </WagerWin>
          </div>
        </div>
        {/* Total Win Display */}
        <div
          className='row p-1'
          style={{
            backgroundColor: Colors.highlightTextColor,
            borderRadius: '5px',
          }}
        >
          <div className='col-sm-4'>
            <WagerName className='text-left'>Total Unit Win</WagerName>
          </div>
          <div className='col-sm-4'>
            <NumberField
              as={NumberFormat}
              // className={numberFormat}
              thousandSeparator
              value={totalWin}
              onChange={handleWagerChange}
              displayType={'number'}
            />{' '}
            Units
          </div>

          <div className='col-sm-4 d-flex justify-content-end'>
            <WagerWin>
              Win{' '}
              <NumberField
                as={NumberFormat}
                // className={numberFormat}
                value={totalWin * chipDenom}
                thousandSeparator
                prefix={'$'}
                displayType={'text'}
              />
            </WagerWin>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RouletteCalculator;
