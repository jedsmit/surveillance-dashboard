import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//
import {
  crapsOperations,
  placeBets,
  dontBets,
  passBets,
  comeBets,
  dontComeBets,
  hopBets,
  hornBets,
  miscBets,
  hardwayBets,
} from '../data/crapsOperations';
//
import Colors from '../constants/Colors';
import { spacing } from '../constants/Sizes';

// styled components
// const Container = styled.div`
//   height: 100%;
//   width: 100%;
//   color: ${Colors.backgroundColor};
//   background-image: ${Colors.blueGradient};
// `;

// const Title = styled.h3`
//   margin: 0;
//   padding: ${spacing.xxs};
//   font-weight: bold;
// `;

const BetGroupContainer = styled.div`
  padding: ${spacing.xs};
  border: solid #3eadcf;
`;
// const TableContainer = styled.div`
//   width: 100%;
//   color: ${Colors.backgroundColor};
//   font-size: ${fontSizes.sm};
//   padding: ${spacing.sm};
//   font-weight: bold;
//   th {
//     width: 10%;
//   }

//   tr {
//     height: 10%;
//   }

//   td {
//     border: solid;
//     border-width: 0.25px;
//   }
// `;

// const WagerInput = styled.div`
//   width: 50%;
//   text-align: center;
// `;

// const NumberField = styled.div`
//   width: 30%;
// `;

// const WagerName = styled.div``;

// const WagerWin = styled.div``;
// //

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
    passOdds8: 0,
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
    cAndE: 0,
    anySevens: 0,
    anyCraps: 0,
    horn: 0,
    horn2: 0,
    horn3: 0,
    horn11: 0,
    horn12: 0,
    hornHigh2: 0,
    hornHigh3: 0,
    hornHigh11: 0,
    hornHigh12: 0,
    world: 0,
  });
  const [wins, setWins] = useState({
    pass: 0,
    dontPass: 0,
    come: 0,
    dontCome: 0,
    passOdds4: 0,
    passOdds5: 0,
    passOdds6: 0,
    passOdds8: 0,
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
    cAndE: 0,
    anySevens: 0,
    anyCraps: 0,
    horn: 0,
    horn2: 0,
    horn3: 0,
    horn11: 0,
    horn12: 0,
    hornHigh2: 0,
    hornHigh3: 0,
    hornHigh11: 0,
    hornHigh12: 0,
    world: 0,
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

  // useEffect(() => {
  //   console.log(dice);
  // }, [dice]);

  // useEffect(() => {
  //   console.log(point);
  // }, [point]);

  // useEffect(() => {
  //   console.log(roll);
  // }, [roll]);

  // useEffect(() => {
  //   console.log(wins);
  // }, [wins]);

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
            dontPass: crapsOperations.dontPass.comeoutRoll.winCalc(
              wagers.dontPass
            ),
            dontCome: crapsOperations.dontCome.comeoutRoll.winCalc(
              wagers.dontCome
            ),
            cAndE: crapsOperations.cAndE.nextRoll.winCalc(
              wagers.cAndE,
              diceTotal
            ),
            anyCraps: crapsOperations.anyCraps.nextRoll.winCalc(
              wagers.anyCraps
            ),
            horn: crapsOperations.horn.nextRoll.winCalc(wagers.horn, diceTotal),
            horn2: crapsOperations.horn2.nextRoll.winCalc(wagers.horn2),
            hornHigh2: crapsOperations.hornHigh2.nextRoll.winCalc(
              wagers.hornHigh2,
              diceTotal
            ),
            hornHigh3: crapsOperations.hornHigh3.nextRoll.winCalc(
              wagers.hornHigh3,
              diceTotal
            ),
            hornHigh11: crapsOperations.hornHigh11.nextRoll.winCalc(
              wagers.hornHigh11,
              diceTotal
            ),
            hornHigh12: crapsOperations.hornHigh12.nextRoll.winCalc(
              wagers.hornHigh12,
              diceTotal
            ),
            world: crapsOperations.world.nextRoll.winCalc(
              wagers.world,
              diceTotal
            ),
          };
          setWins(newWins);
          console.log(newWins);
          break;
        case 3:
          console.log('case 3');
          var newWins = {
            ...wins,
            field: crapsOperations.field.nextRoll.winCalc(
              wagers.field,
              diceTotal
            ),
            dontPass: crapsOperations.dontPass.comeoutRoll.winCalc(
              wagers.dontPass
            ),
            dontCome: crapsOperations.dontCome.comeoutRoll.winCalc(
              wagers.dontCome
            ),
            cAndE: crapsOperations.cAndE.nextRoll.winCalc(
              wagers.cAndE,
              diceTotal
            ),
            anyCraps: crapsOperations.anyCraps.nextRoll.winCalc(
              wagers.anyCraps
            ),
            horn: crapsOperations.horn.nextRoll.winCalc(wagers.horn, diceTotal),
            horn3: crapsOperations.horn3.nextRoll.winCalc(wagers.horn3),
            hornHigh2: crapsOperations.hornHigh2.nextRoll.winCalc(
              wagers.hornHigh2,
              diceTotal
            ),
            hornHigh3: crapsOperations.hornHigh3.nextRoll.winCalc(
              wagers.hornHigh3,
              diceTotal
            ),
            hornHigh11: crapsOperations.hornHigh11.nextRoll.winCalc(
              wagers.hornHigh11,
              diceTotal
            ),
            hornHigh12: crapsOperations.hornHigh12.nextRoll.winCalc(
              wagers.hornHigh12,
              diceTotal
            ),
            world: crapsOperations.world.nextRoll.winCalc(
              wagers.world,
              diceTotal
            ),
          };
          setWins(newWins);
          console.log(newWins);
          break;
        case 4:
          console.log('case 4');
          var newWins = {
            ...wins,
            field: crapsOperations.field.nextRoll.winCalc(
              wagers.field,
              diceTotal
            ),
            hop3and1: crapsOperations.hop3and1.nextRoll.winCalc(
              wagers.hop3and1,
              dice.one,
              dice.two
            ),
            hop2and2: crapsOperations.hop2and2.nextRoll.winCalc(
              wagers.hop2and2,
              dice.one,
              dice.two
            ),
            hardway4: crapsOperations.hardway4.anyRoll.winCalc(
              wagers.hardway4,
              dice.one,
              dice.two
            ),
          };
          setWins(newWins);
          console.log(newWins);
          break;
        case 5:
          console.log('case 5');
          var newWins = {
            ...wins,
            hop4and1: crapsOperations.hop4and1.nextRoll.winCalc(
              wagers.hop4and1,
              dice.one,
              dice.two
            ),
            hop3and2: crapsOperations.hop3and2.nextRoll.winCalc(
              wagers.hop3and2,
              dice.one,
              dice.two
            ),
          };
          setWins(newWins);
          console.log(newWins);
          break;
        case 6:
          console.log('case 6');
          var newWins = {
            ...wins,
            big6: crapsOperations.big6.anyRoll.winCalc(wagers.big6),
            hop5and1: crapsOperations.hop5and1.nextRoll.winCalc(
              wagers.hop5and1,
              dice.one,
              dice.two
            ),
            hop4and2: crapsOperations.hop4and2.nextRoll.winCalc(
              wagers.hop4and2,
              dice.one,
              dice.two
            ),
            hop3and3: crapsOperations.hop3and3.nextRoll.winCalc(
              wagers.hop3and3,
              dice.one,
              dice.two
            ),
            hardway6: crapsOperations.hardway6.anyRoll.winCalc(
              wagers.hardway6,
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
            come: crapsOperations.come.comeoutRoll.winCalc(wagers.come),
            anySevens: crapsOperations.anySevens.nextRoll.winCalc(
              wagers.anySevens
            ),
          };
          setWins(newWins);
          break;
        case 8:
          console.log('case 8');
          var newWins = {
            ...wins,
            big8: crapsOperations.big8.anyRoll.winCalc(wagers.big8),
            hop5and3: crapsOperations.hop5and3.nextRoll.winCalc(
              wagers.hop5and3,
              dice.one,
              dice.two
            ),
            hop6and2: crapsOperations.hop6and2.nextRoll.winCalc(
              wagers.hop6and2,
              dice.one,
              dice.two
            ),
            hop4and4: crapsOperations.hop4and4.nextRoll.winCalc(
              wagers.hop4and4,
              dice.one,
              dice.two
            ),
            hardway8: crapsOperations.hardway8.anyRoll.winCalc(
              wagers.hardway8,
              dice.one,
              dice.two
            ),
          };
          setWins(newWins);
          console.log(newWins);
          break;
        case 9:
          console.log('case 9');
          var newWins = {
            ...wins,
            field: crapsOperations.field.nextRoll.winCalc(
              wagers.field,
              diceTotal
            ),
            hop6and3: crapsOperations.hop6and3.nextRoll.winCalc(
              wagers.hop6and3,
              dice.one,
              dice.two
            ),
            hop5and4: crapsOperations.hop5and4.nextRoll.winCalc(
              wagers.hop5and4,
              dice.one,
              dice.two
            ),
          };
          setWins(newWins);
          console.log(newWins);
          break;
        case 10:
          console.log('case 10');
          var newWins = {
            ...wins,
            field: crapsOperations.field.nextRoll.winCalc(
              wagers.field,
              diceTotal
            ),
            hop6and4: crapsOperations.hop6and4.nextRoll.winCalc(
              wagers.hop6and4,
              dice.one,
              dice.two
            ),
            hop5and5: crapsOperations.hop5and5.nextRoll.winCalc(
              wagers.hop5and5,
              dice.one,
              dice.two
            ),
            hardway10: crapsOperations.hardway10.anyRoll.winCalc(
              wagers.hardway10,
              dice.one,
              dice.two
            ),
          };
          setWins(newWins);
          console.log(newWins);
          break;
        case 11:
          console.log('case 11');
          var newWins = {
            ...wins,
            field: crapsOperations.field.nextRoll.winCalc(
              wagers.field,
              dice.one,
              dice.two
            ),
            pass: crapsOperations.pass.comeoutRoll.winCalc(wagers.pass),
            come: crapsOperations.come.comeoutRoll.winCalc(wagers.come),
            cAndE: crapsOperations.cAndE.nextRoll.winCalc(
              wagers.cAndE,
              diceTotal
            ),
            horn: crapsOperations.horn.nextRoll.winCalc(wagers.horn, diceTotal),
            horn11: crapsOperations.horn11.nextRoll.winCalc(wagers.horn11),
            hornHigh2: crapsOperations.hornHigh2.nextRoll.winCalc(
              wagers.hornHigh2,
              diceTotal
            ),
            hornHigh3: crapsOperations.hornHigh3.nextRoll.winCalc(
              wagers.hornHigh3,
              diceTotal
            ),
            hornHigh11: crapsOperations.hornHigh11.nextRoll.winCalc(
              wagers.hornHigh11,
              diceTotal
            ),
            hornHigh12: crapsOperations.hornHigh12.nextRoll.winCalc(
              wagers.hornHigh12,
              diceTotal
            ),
            world: crapsOperations.world.nextRoll.winCalc(
              wagers.world,
              diceTotal
            ),
          };
          setWins(newWins);
          console.log(newWins);
          break;
        case 12:
          console.log('case 12');
          var newWins = {
            ...wins,
            field: crapsOperations.field.nextRoll.winCalc(
              wagers.field,
              dice.one,
              dice.two
            ),
            cAndE: crapsOperations.cAndE.nextRoll.winCalc(
              wagers.cAndE,
              diceTotal
            ),
            horn: crapsOperations.horn.nextRoll.winCalc(wagers.horn, diceTotal),
            horn12: crapsOperations.horn12.nextRoll.winCalc(wagers.horn12),
            hornHigh2: crapsOperations.hornHigh2.nextRoll.winCalc(
              wagers.hornHigh2,
              diceTotal
            ),
            hornHigh3: crapsOperations.hornHigh3.nextRoll.winCalc(
              wagers.hornHigh3,
              diceTotal
            ),
            hornHigh11: crapsOperations.hornHigh11.nextRoll.winCalc(
              wagers.hornHigh11,
              diceTotal
            ),
            hornHigh12: crapsOperations.hornHigh12.nextRoll.winCalc(
              wagers.hornHigh12,
              diceTotal
            ),
            world: crapsOperations.world.nextRoll.winCalc(
              wagers.world,
              diceTotal
            ),
          };
          setWins(newWins);
          console.log(newWins);
          break;
      }
    } else if (roll === 'intermediateRoll') {
      switch (diceTotal) {
        case 2:
          console.log('int case 2');
          console.log('case 2');
          var newWins = {
            ...wins,
            field: crapsOperations.field.nextRoll.winCalc(
              wagers.field,
              dice.one,
              dice.two
            ),

            dontCome: crapsOperations.dontCome.comeoutRoll.winCalc(
              wagers.dontCome
            ),
            cAndE: crapsOperations.cAndE.nextRoll.winCalc(
              wagers.cAndE,
              diceTotal
            ),
            anyCraps: crapsOperations.anyCraps.nextRoll.winCalc(
              wagers.anyCraps
            ),
            horn: crapsOperations.horn.nextRoll.winCalc(wagers.horn, diceTotal),
            horn2: crapsOperations.horn2.nextRoll.winCalc(wagers.horn2),
            hornHigh2: crapsOperations.hornHigh2.nextRoll.winCalc(
              wagers.hornHigh2,
              diceTotal
            ),
            hornHigh3: crapsOperations.hornHigh3.nextRoll.winCalc(
              wagers.hornHigh3,
              diceTotal
            ),
            hornHigh11: crapsOperations.hornHigh11.nextRoll.winCalc(
              wagers.hornHigh11,
              diceTotal
            ),
            hornHigh12: crapsOperations.hornHigh12.nextRoll.winCalc(
              wagers.hornHigh12,
              diceTotal
            ),
            world: crapsOperations.world.nextRoll.winCalc(
              wagers.world,
              diceTotal
            ),
          };
          setWins(newWins);
          console.log(newWins);
          break;
        case 3:
          console.log('int case 3');
          var newWins = {
            ...wins,
            field: crapsOperations.field.nextRoll.winCalc(
              wagers.field,
              diceTotal
            ),
            dontCome: crapsOperations.dontCome.comeoutRoll.winCalc(
              wagers.dontCome
            ),
            cAndE: crapsOperations.cAndE.nextRoll.winCalc(
              wagers.cAndE,
              diceTotal
            ),
            anyCraps: crapsOperations.anyCraps.nextRoll.winCalc(
              wagers.anyCraps
            ),
            horn: crapsOperations.horn.nextRoll.winCalc(wagers.horn, diceTotal),
            horn3: crapsOperations.horn3.nextRoll.winCalc(wagers.horn3),
            hornHigh2: crapsOperations.hornHigh2.nextRoll.winCalc(
              wagers.hornHigh2,
              diceTotal
            ),
            hornHigh3: crapsOperations.hornHigh3.nextRoll.winCalc(
              wagers.hornHigh3,
              diceTotal
            ),
            hornHigh11: crapsOperations.hornHigh11.nextRoll.winCalc(
              wagers.hornHigh11,
              diceTotal
            ),
            hornHigh12: crapsOperations.hornHigh12.nextRoll.winCalc(
              wagers.hornHigh12,
              diceTotal
            ),
            world: crapsOperations.world.nextRoll.winCalc(
              wagers.world,
              diceTotal
            ),
          };
          setWins(newWins);
          console.log(newWins);
          break;
        case 4:
          console.log('int case 4');
          var newWins = {
            ...wins,
            field: crapsOperations.field.nextRoll.winCalc(
              wagers.field,
              diceTotal
            ),
            hop3and1: crapsOperations.hop3and1.nextRoll.winCalc(
              wagers.hop3and1,
              dice.one,
              dice.two
            ),
            hop2and2: crapsOperations.hop2and2.nextRoll.winCalc(
              wagers.hop2and2,
              dice.one,
              dice.two
            ),
            hardway4: crapsOperations.hardway4.anyRoll.winCalc(
              wagers.hardway4,
              dice.one,
              dice.two
            ),
          };
          setWins(newWins);
          console.log(newWins);
          break;
        case 5:
          console.log('int case 5');
          var newWins = {
            ...wins,
            hop4and1: crapsOperations.hop4and1.nextRoll.winCalc(
              wagers.hop4and1,
              dice.one,
              dice.two
            ),
            hop3and2: crapsOperations.hop3and2.nextRoll.winCalc(
              wagers.hop3and2,
              dice.one,
              dice.two
            ),
          };
          setWins(newWins);
          console.log(newWins);
          break;
        case 6:
          console.log('int case 6');
          var newWins = {
            ...wins,
            big6: crapsOperations.big6.anyRoll.winCalc(wagers.big6),
            hop5and1: crapsOperations.hop5and1.nextRoll.winCalc(
              wagers.hop5and1,
              dice.one,
              dice.two
            ),
            hop4and2: crapsOperations.hop4and2.nextRoll.winCalc(
              wagers.hop4and2,
              dice.one,
              dice.two
            ),
            hop3and3: crapsOperations.hop3and3.nextRoll.winCalc(
              wagers.hop3and3,
              dice.one,
              dice.two
            ),
            hardway6: crapsOperations.hardway6.anyRoll.winCalc(
              wagers.hardway6,
              dice.one,
              dice.two
            ),
          };
          setWins(newWins);
          console.log(newWins);
          break;
        case 7:
          console.log('int case 7');
          var newWins = {
            ...wins,
            dontPass: crapsOperations.dontPass.intermediateRoll.winCalc(
              wagers.dontPass
            ),
            come: crapsOperations.come.comeoutRoll.winCalc(wagers.come),
            anySevens: crapsOperations.anySevens.comeoutRoll.winCalc(
              wagers.anySevens
            ),
          };
          setWins(newWins);
          break;
        case 8:
          console.log('case 8');
          var newWins = {
            ...wins,
            big8: crapsOperations.big8.anyRoll.winCalc(wagers.big8),
            hop5and3: crapsOperations.hop5and3.nextRoll.winCalc(
              wagers.hop5and3,
              dice.one,
              dice.two
            ),
            hop6and2: crapsOperations.hop6and2.nextRoll.winCalc(
              wagers.hop6and2,
              dice.one,
              dice.two
            ),
            hop4and4: crapsOperations.hop4and4.nextRoll.winCalc(
              wagers.hop4and4,
              dice.one,
              dice.two
            ),
            hardway8: crapsOperations.hardway8.anyRoll.winCalc(
              wagers.hardway8,
              dice.one,
              dice.two
            ),
          };
          setWins(newWins);
          console.log(newWins);
          break;
        case 9:
          console.log('case 9');
          var newWins = {
            ...wins,
            field: crapsOperations.field.nextRoll.winCalc(
              wagers.field,
              diceTotal
            ),
            hop6and3: crapsOperations.hop6and3.nextRoll.winCalc(
              wagers.hop6and3,
              dice.one,
              dice.two
            ),
            hop5and4: crapsOperations.hop5and4.nextRoll.winCalc(
              wagers.hop5and4,
              dice.one,
              dice.two
            ),
          };
          setWins(newWins);
          console.log(newWins);
          break;
        case 10:
          console.log('case 10');
          var newWins = {
            ...wins,
            field: crapsOperations.field.nextRoll.winCalc(
              wagers.field,
              diceTotal
            ),
            hop6and4: crapsOperations.hop6and4.nextRoll.winCalc(
              wagers.hop6and4,
              dice.one,
              dice.two
            ),
            hop5and5: crapsOperations.hop5and5.nextRoll.winCalc(
              wagers.hop5and5,
              dice.one,
              dice.two
            ),
            hardway10: crapsOperations.hardway10.anyRoll.winCalc(
              wagers.hardway10,
              dice.one,
              dice.two
            ),
          };
          setWins(newWins);
          console.log(newWins);
          break;
        case 11:
          console.log('case 11');
          var newWins = {
            ...wins,
            field: crapsOperations.field.nextRoll.winCalc(
              wagers.field,
              dice.one,
              dice.two
            ),
            pass: crapsOperations.pass.comeoutRoll.winCalc(wagers.pass),
            come: crapsOperations.come.comeoutRoll.winCalc(wagers.come),
            cAndE: crapsOperations.cAndE.nextRoll.winCalc(
              wagers.cAndE,
              diceTotal
            ),
            horn: crapsOperations.horn.nextRoll.winCalc(wagers.horn, diceTotal),
            horn11: crapsOperations.horn11.nextRoll.winCalc(wagers.horn11),
            hornHigh2: crapsOperations.hornHigh2.nextRoll.winCalc(
              wagers.hornHigh2,
              diceTotal
            ),
            hornHigh3: crapsOperations.hornHigh3.nextRoll.winCalc(
              wagers.hornHigh3,
              diceTotal
            ),
            hornHigh11: crapsOperations.hornHigh11.nextRoll.winCalc(
              wagers.hornHigh11,
              diceTotal
            ),
            hornHigh12: crapsOperations.hornHigh12.nextRoll.winCalc(
              wagers.hornHigh12,
              diceTotal
            ),
            world: crapsOperations.world.nextRoll.winCalc(
              wagers.world,
              diceTotal
            ),
          };
          setWins(newWins);
          console.log(newWins);
          break;
        case 12:
          console.log('case 12');
          var newWins = {
            ...wins,
            field: crapsOperations.field.nextRoll.winCalc(
              wagers.field,
              dice.one,
              dice.two
            ),
            cAndE: crapsOperations.cAndE.nextRoll.winCalc(
              wagers.cAndE,
              diceTotal
            ),
            horn: crapsOperations.horn.nextRoll.winCalc(wagers.horn, diceTotal),
            horn12: crapsOperations.horn12.nextRoll.winCalc(wagers.horn12),
            hornHigh2: crapsOperations.hornHigh2.nextRoll.winCalc(
              wagers.hornHigh2,
              diceTotal
            ),
            hornHigh3: crapsOperations.hornHigh3.nextRoll.winCalc(
              wagers.hornHigh3,
              diceTotal
            ),
            hornHigh11: crapsOperations.hornHigh11.nextRoll.winCalc(
              wagers.hornHigh11,
              diceTotal
            ),
            hornHigh12: crapsOperations.hornHigh12.nextRoll.winCalc(
              wagers.hornHigh12,
              diceTotal
            ),
            world: crapsOperations.world.nextRoll.winCalc(
              wagers.world,
              diceTotal
            ),
          };
          setWins(newWins);
          console.log(newWins);
          break;
      }
    }
  };

  const halfHopBetNamesArray = Math.floor(hopBets.length / 2);
  const hopBetsOne = hopBets.slice(0, halfHopBetNamesArray);
  const hopBetsTwo = hopBets.slice(halfHopBetNamesArray + 1, hopBets.length);

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
        <button
          className='btn btn-secondary m-2'
          onClick={runCalc}
          style={{
            backgroundImage: Colors.blueGradient,
            color: 'black',
            fontWeight: 'bold',
          }}
        >
          Calculate Win
        </button>
      </div>

      <div className='row my-3'>
        <div className='col'>
          <BetGroupContainer className='container-fluid'>
            {passBets.map((game, index) => {
              return (
                <div className='row'>
                  <div className='col-8' key={index}>
                    {game.label}{' '}
                    <input
                      type='number'
                      name={game.abbr}
                      onChange={handleWagerChange}
                    ></input>
                  </div>
                  <div className='col-4'>
                    Win{' '}
                    <div style={{ backgroundColor: Colors.blueGradient }}>
                      ${wins[game.abbr]}
                    </div>
                  </div>
                </div>
              );
            })}
          </BetGroupContainer>
        </div>
        <div className='col'>
          <BetGroupContainer className='container-fluid'>
            {dontBets.map((game, index) => {
              return (
                <div className='row'>
                  <div className='col-8' key={index}>
                    {game.label}{' '}
                    <input
                      type='number'
                      name={game.abbr}
                      onChange={handleWagerChange}
                    ></input>
                  </div>
                  <div className='col-4'>
                    Win{' '}
                    <div style={{ backgroundColor: Colors.blueGradient }}>
                      ${wins[game.abbr]}
                    </div>
                  </div>
                </div>
              );
            })}
          </BetGroupContainer>
        </div>
        <div className='col'>
          <BetGroupContainer className='container-fluid'>
            {comeBets.map((game, index) => {
              return (
                <div className='row'>
                  <div className='col-8' key={index}>
                    {game.label}{' '}
                    <input
                      type='number'
                      name={game.abbr}
                      onChange={handleWagerChange}
                    ></input>
                  </div>
                  <div className='col-4'>
                    Win{' '}
                    <div style={{ backgroundColor: Colors.blueGradient }}>
                      ${wins[game.abbr]}
                    </div>
                  </div>
                </div>
              );
            })}
          </BetGroupContainer>
        </div>
        <div className='col'>
          <BetGroupContainer className='container-fluid'>
            {dontComeBets.map((game, index) => {
              return (
                <div className='row'>
                  <div className='col-8' key={index}>
                    {game.label}{' '}
                    <input
                      type='number'
                      name={game.abbr}
                      onChange={handleWagerChange}
                    ></input>
                  </div>
                  <div className='col-4'>
                    Win{' '}
                    <div style={{ backgroundColor: Colors.blueGradient }}>
                      ${wins[game.abbr]}
                    </div>
                  </div>
                </div>
              );
            })}
          </BetGroupContainer>
        </div>
        <div className='col'>
          <BetGroupContainer className='container-fluid'>
            {placeBets.map((game, index) => {
              return (
                <div className='row'>
                  <div className='col-8' key={index}>
                    {game.label}{' '}
                    <input
                      type='number'
                      name={game.abbr}
                      onChange={handleWagerChange}
                    ></input>
                  </div>
                  <div className='col-4'>
                    Win{' '}
                    <div style={{ backgroundColor: Colors.blueGradient }}>
                      ${wins[game.abbr]}
                    </div>
                  </div>
                </div>
              );
            })}
          </BetGroupContainer>
        </div>
      </div>
      <div className='row my-3'>
        <div className='col'>
          <BetGroupContainer className='container-fluid'>
            {hornBets.map((game, index) => {
              return (
                <div className='row'>
                  <div className='col-8' key={index}>
                    {game.label}{' '}
                    <input
                      type='number'
                      name={game.abbr}
                      onChange={handleWagerChange}
                    ></input>
                  </div>
                  <div className='col-4'>
                    Win{' '}
                    <div style={{ backgroundColor: Colors.blueGradient }}>
                      ${wins[game.abbr]}
                    </div>
                  </div>
                </div>
              );
            })}
          </BetGroupContainer>
        </div>
        <div className='col'>
          <BetGroupContainer className='container-fluid'>
            {miscBets.map((game, index) => {
              return (
                <div className='row'>
                  <div className='col-8' key={index}>
                    {game.label}{' '}
                    <input
                      type='number'
                      name={game.abbr}
                      onChange={handleWagerChange}
                    ></input>
                  </div>
                  <div className='col-4'>
                    Win{' '}
                    <div style={{ backgroundColor: Colors.blueGradient }}>
                      ${wins[game.abbr]}
                    </div>
                  </div>
                </div>
              );
            })}
          </BetGroupContainer>
        </div>
        <div className='col'>
          <BetGroupContainer className='container-fluid'>
            {hardwayBets.map((game, index) => {
              return (
                <div className='row'>
                  <div className='col-8' key={index}>
                    {game.label}{' '}
                    <input
                      type='number'
                      name={game.abbr}
                      onChange={handleWagerChange}
                    ></input>
                  </div>
                  <div className='col-4'>
                    Win{' '}
                    <div style={{ backgroundColor: Colors.blueGradient }}>
                      ${wins[game.abbr]}
                    </div>
                  </div>
                </div>
              );
            })}
          </BetGroupContainer>
        </div>
        <div className='col-5'>
          <BetGroupContainer className='container-fluid'>
            <div className='row'>
              <div className='col-6'>
                {hopBetsOne.map((game, index) => {
                  return (
                    <div className='row'>
                      <div className='col-8' key={index}>
                        {game.label}{' '}
                        <input
                          type='number'
                          name={game.abbr}
                          onChange={handleWagerChange}
                        ></input>
                      </div>
                      <div className='col-4'>
                        Win{' '}
                        <div style={{ backgroundColor: Colors.blueGradient }}>
                          ${wins[game.abbr]}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className='col-6'>
                {hopBetsTwo.map((game, index) => {
                  return (
                    <div className='row'>
                      <div className='col-8' key={index}>
                        {game.label}{' '}
                        <input
                          type='number'
                          name={game.abbr}
                          onChange={handleWagerChange}
                        ></input>
                      </div>
                      <div className='col-4'>
                        Win{' '}
                        <div style={{ backgroundColor: Colors.blueGradient }}>
                          ${wins[game.abbr]}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </BetGroupContainer>
        </div>
      </div>
      {/* <div className='row'>
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
      </div> */}
    </div>
  );
};

export default TestCrapsCalculator;
