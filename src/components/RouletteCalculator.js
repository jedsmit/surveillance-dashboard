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
  background: ${Colors.blueGradient};
  padding: ${spacing.xxs};
  overflow: hidden;
  padding-bottom: 0px;
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
    columnWager: 0,
    dozensWager: 0,
    hiLowWager: 0,
    evenOddWager: 0,
    redBlackWager: 0,
  });

  const [wins, setWins] = useState({
    straightUpWin: 0,
    splitWin: 0,
    streetWin: 0,
    cornerWin: 0,
    doubleStreetWin: 0,
    columnWin: 0,
    dozensWin: 0,
    hiLowWin: 0,
    evenOddWin: 0,
    redBlackWin: 0,
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

  useEffect(() => {
    calcColumnWin(wagers.columnWager);
  }, [wagers.columnWager]);

  useEffect(() => {
    calcDozensWin(wagers.dozensWager);
  }, [wagers.dozensWager]);

  useEffect(() => {
    calcHiLowWin(wagers.hiLowWager);
  }, [wagers.hiLowWager]);

  useEffect(() => {
    calcEvenOddWin(wagers.evenOddWager);
  }, [wagers.evenOddWager]);

  useEffect(() => {
    calcRedBlackWin(wagers.redBlackWager);
  }, [wagers.redBlackWager]);
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

  const calcColumnWin = () => {
    let win = wagers.columnWager * 2;
    setWins({ ...wins, columnWin: win });
  };

  const calcDozensWin = () => {
    let win = wagers.dozensWager * 2;
    setWins({ ...wins, dozensWin: win });
  };

  const calcHiLowWin = () => {
    let win = wagers.hiLowWager * 1;
    setWins({ ...wins, hiLowWin: win });
  };

  const calcEvenOddWin = () => {
    let win = wagers.evenOddWager * 1;
    setWins({ ...wins, evenOddWin: win });
  };

  const calcRedBlackWin = () => {
    let win = wagers.redBlackWager * 1;
    setWins({ ...wins, redBlackWin: win });
  };

  const handleMenuItemClick = e => {
    e.stopPropagation();
    setChipDenom(e.target.value);
    setDenomToggle(true);
    console.log(chipDenom);
  };

  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>
        <h3>Roulette Calculator</h3>
      </div>

      <div className='row justify-content-center py-4'>
        <h4>Select Chip Denom</h4>
        <div className='col-sm-3 text-center'>
          <div className='dropdown'>
            <button
              style={{
                background: Colors.blueGradient,
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
            <WagerName className='text-left'>Straight-up (35-1)</WagerName>
          </div>
          <div className='col-sm-4'>
            <NumberField
              as={NumberFormat}
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
            <WagerName className='text-left'>Split (17-1)</WagerName>
          </div>
          <div className='col-sm-4'>
            <NumberField
              as={NumberFormat}
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
            <WagerName className='text-left'>Street (11-1)</WagerName>
          </div>
          <div className='col-sm-4'>
            <NumberField
              as={NumberFormat}
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
            <WagerName className='text-left'>Corner (8-1)</WagerName>
          </div>
          <div className='col-sm-4'>
            <NumberField
              as={NumberFormat}
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
            <WagerName className='text-left'>Double Street (5-1) </WagerName>
          </div>
          <div className='col-sm-4'>
            <NumberField
              as={NumberFormat}
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
                value={wins.doubleStreetWin}
                thousandSeparator
                suffix={' units'}
                displayType={'text'}
              />
            </WagerWin>
          </div>
        </div>
        {/* Column */}
        <div className='row p-1'>
          <div className='col-sm-4'>
            <WagerName className='text-left'>Column (2-1)</WagerName>
          </div>
          <div className='col-sm-4'>
            <NumberField
              as={NumberFormat}
              thousandSeparator
              name='columnWager'
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
                value={wins.columnWin}
                thousandSeparator
                suffix={' units'}
                displayType={'text'}
              />
            </WagerWin>
          </div>
        </div>

        {/* Dozens*/}
        <div className='row p-1'>
          <div className='col-sm-4'>
            <WagerName className='text-left'>Dozens (2-1)</WagerName>
          </div>
          <div className='col-sm-4'>
            <NumberField
              as={NumberFormat}
              thousandSeparator
              name='dozensWager'
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
                value={wins.dozensWin}
                thousandSeparator
                suffix={' units'}
                displayType={'text'}
              />
            </WagerWin>
          </div>
        </div>

        {/* Hi Low */}
        <div className='row p-1'>
          <div className='col-sm-4'>
            <WagerName className='text-left'>Hi Low (1-1)</WagerName>
          </div>
          <div className='col-sm-4'>
            <NumberField
              as={NumberFormat}
              thousandSeparator
              name='hiLowWager'
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
                value={wins.hiLowWin}
                thousandSeparator
                suffix={' units'}
                displayType={'text'}
              />
            </WagerWin>
          </div>
        </div>

        {/* Even Odd */}
        <div className='row p-1'>
          <div className='col-sm-4'>
            <WagerName className='text-left'>Even Odd (1-1)</WagerName>
          </div>
          <div className='col-sm-4'>
            <NumberField
              as={NumberFormat}
              thousandSeparator
              name='evenOddWager'
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
                value={wins.evenOddWin}
                thousandSeparator
                suffix={' units'}
                displayType={'text'}
              />
            </WagerWin>
          </div>
        </div>

        {/* Red Black */}
        <div className='row p-1'>
          <div className='col-sm-4'>
            <WagerName className='text-left'>Red Black (1-1)</WagerName>
          </div>
          <div className='col-sm-4'>
            <NumberField
              as={NumberFormat}
              thousandSeparator
              name='redBlackWager'
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
                value={wins.redBlackWin}
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
            overflow: 'hidden',
          }}
        >
          <div className='col-sm-4'>
            <WagerName className='text-left'>Total Unit Win</WagerName>
          </div>
          <div className='col-sm-4'>
            <NumberField
              as={NumberFormat}
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
                value={totalWin * chipDenom}
                thousandSeparator
                prefix={'$'}
                displayType={'text'}
              />
            </WagerWin>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RouletteCalculator;
