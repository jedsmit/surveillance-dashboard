import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';
//

//
import Colors from '../constants/Colors';
import { spacing, fontSizes } from '../constants/Sizes';

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

const CrapsCalculator = ({ data }) => {
  const { wagers } = data;
  //states
  const [placeWagers, setPlaceWagers] = useState({
    place6: 0,
    place8: 0,
    place5: 0,
    place9: 0,
    place4: 0,
    place10: 0,
  });

  const [buyWagers, setBuyWagers] = useState({
    buy6: 0,
    buy8: 0,
    buy5: 0,
    buy9: 0,
    buy4: 0,
    buy10: 0,
  });

  const [layWagers, setLayWagers] = useState({
    lay6: 0,
    lay8: 0,
    lay5: 0,
    lay9: 0,
    lay4: 0,
    lay10: 0,
  });

  const [comeWagers, setComeWagers] = useState({
    come6: 0,
    come8: 0,
    come5: 0,
    come9: 0,
    come4: 0,
    come10: 0,
  });

  const [dontComeWagers, setDontWagers] = useState({
    dontCome6: 0,
    dontCome8: 0,
    dontCome5: 0,
    dontCome9: 0,
    dontCome4: 0,
    dontCome10: 0,
  });

  const [comeOdds, setComeOdds] = useState({
    comeOdds6: 0,
    comeOdds8: 0,
    comeOdds5: 0,
    comeOdds9: 0,
    comeOdds4: 0,
    comeOdds10: 0,
  });

  const [dontComeOdds, setdontComeOdds] = useState({
    dontComeOdds6: 0,
    dontComeOdds8: 0,
    dontComeOdds5: 0,
    dontComeOdds9: 0,
    dontComeOdds4: 0,
    dontComeOdds10: 0,
  });

  const [passOdds, setPassOdds] = useState({
    passOdds6: 0,
    passOdds8: 0,
    passOdds5: 0,
    passOdds9: 0,
    passOdds4: 0,
    passOdds10: 0,
  });

  const [dontOdds, setOddsWagers] = useState({
    dontPassOdds6: 0,
    dontPassOdds8: 0,
    dontPassOdds5: 0,
    dontPassOdds9: 0,
    dontPassOdds4: 0,
    dontPassOdds10: 0,
  });

  const [otherWagers, setOtherWagers] = useState({
    anySeven: 0,
    anyCraps: 0,
    crapsTwo: 0,
    crapsThree: 0,
    crapsTwelve: 0,
    yoEleven: 0,
    hornTwo: 0,
    hornTwelve: 0,
    hornThree: 0,
    hornEleven: 0,
    highHornTwo: 0,
    highHornThree: 0,
    highHornEleven: 0,
    highHornTwelve: 0,
    worldBet: 0,
    cAndE: 0,
    big6: 0,
    big8: 0,
    field: 0,
  });

  const [placeWagerWins, setPlaceWagerWins] = useState({
    place6: 0,
    place8: 0,
    place5: 0,
    place9: 0,
    place4: 0,
    place10: 0,
  });

  const [buyWagerWins, setBuyWagerWins] = useState({
    buy6: 0,
    buy8: 0,
    buy5: 0,
    buy9: 0,
    buy4: 0,
    buy10: 0,
  });

  const [layWagerWins, setLayWagerWins] = useState({
    lay6: 0,
    lay8: 0,
    lay5: 0,
    lay9: 0,
    lay4: 0,
    lay10: 0,
  });

  const [comeWagerWins, setComeWagerWins] = useState({
    come6: 0,
    come8: 0,
    come5: 0,
    come9: 0,
    come4: 0,
    come10: 0,
  });

  const [dontComeOddsWins, setdontComeOddsWins] = useState({
    dontComeOdds6: 0,
    dontComeOdds8: 0,
    dontComeOdds5: 0,
    dontComeOdds9: 0,
    dontComeOdds4: 0,
    dontComeOdds10: 0,
  });

  const [passOddsWins, setPassOddsWins] = useState({
    passOdds6: 0,
    passOdds8: 0,
    passOdds5: 0,
    passOdds9: 0,
    passOdds4: 0,
    passOdds10: 0,
  });

  const [dontOddsWins, setDontOddsWins] = useState({
    dontPassOdds6: 0,
    dontPassOdds8: 0,
    dontPassOdds5: 0,
    dontPassOdds9: 0,
    dontPassOdds4: 0,
    dontPassOdds10: 0,
  });

  const [otherWagerWins, setOtherWagerWins] = useState({
    anySeven: 0,
    anyCraps: 0,
    crapsTwo: 0,
    crapsThree: 0,
    crapsTwelve: 0,
    yoEleven: 0,
    hornTwo: 0,
    hornTwelve: 0,
    hornThree: 0,
    hornEleven: 0,
    highHornTwo: 0,
    highHornThree: 0,
    highHornEleven: 0,
    highHornTwelve: 0,
    worldBet: 0,
    cAndE: 0,
    big6: 0,
    big8: 0,
    field: 0,
  });

  const [denomToggle, setDenomToggle] = useState(false);
  const [chipDenom, setChipDenom] = useState(1);

  //  effects
  useEffect(() => {
    calcPlaceWagerWins();
  }, [
    placeWagers.place6,
    placeWagers.place8,
    placeWagers.place5,
    placeWagers.place9,
    placeWagers.place4,
    placeWagers.place10,
  ]);

  // useEffect(() => {
  //   calcplace8(wagers.splitWager);
  // }, [wagers.splitWager]);

  // useEffect(() => {
  //   calcPlace5(wagers.streetWager);
  // }, [wagers.streetWager]);

  // useEffect(() => {
  //   calcCornerWin(wagers.cornerWager);
  // }, [wagers.cornerWager]);

  // useEffect(() => {
  //   calcDoubleStreetWin(wagers.doubleStreetWager);
  // }, [wagers.doubleStreetWager]);

  //add up the win totals
  // const totalWin = Object.values(wins).reduce(
  //   (accumulator, currentValue) => accumulator + currentValue
  // );

  //sets wagers state
  const handlePlaceWagerChange = e => {
    let name = e.target.name;
    let wager = e.target.value;
    // if (name === 'place6') {
    setPlaceWagers({ ...placeWagers, [name]: wager });
    // }
    // if (name === 'place8') {
    //   setPlaceWagers({ ...placeWagers, [name]: wager });
    // }
  };

  // win calculators -
  //TODO: reformat to reducer

  const calcPlaceWagerWins = () => {
    let win6 = calc7To6(placeWagers.place6);
    let win8 = calc7To6(placeWagers.place8);
    let win5 = calc7To5(placeWagers.place5);
    let win9 = calc7To5(placeWagers.place9);
    let win4 = calc9To5(placeWagers.place4);
    let win10 = calc9To5(placeWagers.place10);

    setPlaceWagerWins({
      ...placeWagerWins,
      place6: win6,
      place8: win8,
      place5: win5,
      place9: win9,
      place4: win4,
      place10: win10,
    });
    console.log(win6);
  };

  const calc7To6 = wager => {
    return wager * (7 / 6);
  };

  const calc9To5 = wager => {
    return wager * 1.8;
  };

  const calc7To5 = wager => {
    return wager * 1.4;
  };

  const calc2To1 = wager => {
    return wager * 2;
  };

  const calc3To2 = wager => {
    return wager * 1.5;
  };

  const calc6To5 = wager => {
    return wager * 1.2;
  };

  const calc1To2 = wager => {
    return wager * 0.5;
  };

  const calc2To3 = wager => {
    return wager * (2 / 3);
  };

  const calc5To6 = wager => {
    return wager * (5 / 6);
  };

  const calc4To1 = wager => {
    return wager * 4;
  };

  const calc7To1 = wager => {
    return wager * 7;
  };

  const calc30To1 = wager => {
    return wager * 30;
  };

  const calc15To1 = wager => {
    return wager * 7;
  };

  const calc6point75To1 = wager => {
    return wager * 6.75;
  };

  const calc3To1 = wager => {
    return wager * 3;
  };

  const calc11Point4To1 = wager => {
    return wager * 11.4;
  };

  const calc2Point2To1 = wager => {
    return wager * 2.2;
  };

  const calc5Point2To1 = wager => {
    return wager * 5.2;
  };

  const calc5Point4To1 = wager => {
    return wager * 5.4;
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
        <h3>Craps Calculator</h3>
      </div>

      {/* <div className='row justify-content-center py-4'>
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
      </div> */}

      {/*Wager Inputs*/}

      <Container className='container-fluid'>
        {wagers.map((wager, index) => {
          const betID = wager.name;
          return (
            <div key={index}>
              <div className='row p-1'>
                <div className='col-sm-4'>
                  <WagerName className='text-left'>{wager.wager}</WagerName>
                </div>
                <div className='col-sm-4'>
                  <NumberField
                    as={NumberFormat}
                    thousandSeparator
                    name={betID}
                    onValueChange={values => {
                      const { value } = values;
                      handlePlaceWagerChange();
                    }}
                    prefix={'$'}
                    displayType={'input'}
                  />{' '}
                </div>

                <div className='col-sm-4 d-flex justify-content-end'>
                  <WagerWin>
                    Win{' '}
                    <NumberField
                      as={NumberFormat}
                      value={placeWagerWins[betID]}
                      thousandSeparator
                      prefix={'$'}
                      displayType={'text'}
                    />
                  </WagerWin>
                </div>
              </div>
            </div>
          );
        })}
        {/* 
        <div className='row p-1'>
          <div className='col-sm-4'>
            <WagerName className='text-left'>Place Bet Eight</WagerName>
          </div>
          <div className='col-sm-4'>
            <NumberField
              as={NumberFormat}
              thousandSeparator
              name='place8'
              onChange={handlePlaceWagerChange}
              displayType={'input'}
            />{' '}
            Units
          </div>

          <div className='col-sm-4 d-flex justify-content-end'>
            <WagerWin>
              Win{' '}
              <NumberField
                as={NumberFormat}
                value={placeWagerWins.place8}
                thousandSeparator
                prefix={'$'}
                displayType={'text'}
              />
            </WagerWin>
          </div>
        </div> */}
        {/* Split */}
        {/* <div className='row p-1'>
          <div className='col-sm-4'>
            <WagerName className='text-left'>Split</WagerName>
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
        </div> */}

        {/* Street */}
        {/* <div className='row p-1'>
          <div className='col-sm-4'>
            <WagerName className='text-left'>Street</WagerName>
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
        </div> */}

        {/* Corner */}
        {/* <div className='row p-1'>
          <div className='col-sm-4'>
            <WagerName className='text-left'>Corner</WagerName>
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
        </div> */}

        {/* Double Street */}
        {/* <div className='row p-1'>
          <div className='col-sm-4'>
            <WagerName className='text-left'>Double Street</WagerName>
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
        </div> */}
        {/* Total Win Display */}
        {/* <div
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
        </div> */}
      </Container>
    </div>
  );
};

export default CrapsCalculator;

// const CrapsCalculator = ({ data }) => {
//   const { wagerName, wagers } = data;
//   const [currentWager, setCurrentWager] = useState(0);

//   const calcWin = (bet, multiplier) => {
//     return bet * multiplier;
//   };

//   return (
//     <Container>
//       <Title>{wagerName}</Title>
//       <TableContainer>
//         <tr>
//           <th>Number</th>
//           <th>Wager</th>
//           <th>Win</th>
//         </tr>
//         {wagers.map((bet, index) => {
//           const { wager, payoutMultiplier } = bet;

//           let payout;
//           return (
//             <tr className='text-center' key={index}>
//               <td>{wager}</td>
//               <td>
//                 {' '}
//                 <WagerInput
//                   key={index}
//                   as={NumberFormat}
//                   thousandSeparator
//                   name='wager'
//                   value={currentWager}
//                   onValueChange={values => {
//                     const { formattedValue, value } = values;
//                     setCurrentWager(value);
//                     payout = calcWin(currentWager * payoutMultiplier);
//                     console.log(payout);
//                   }}
//                   prefix={'$'}
//                   displayType={'input'}
//                 />{' '}
//               </td>

//               <td>${payout}</td>
//             </tr>
//           );
//         })}
//       </TableContainer>
//     </Container>
//   );
// };
// export default CrapsCalculator;
