export const crapsOperations = {
  pass: {
    comeoutRoll: {
      winTotals: [7, 11],
      lossTotals: [2, 3, 12],
      winCalc: function (bet) {
        return parseInt(bet);
      },
    },
    intermediateRoll: {
      winTotals: 'point',
      lossTotals: [7],
      winCalc: function (bet) {
        return parseInt(bet);
      },
    },
  },

  dontPass: {
    comeoutRoll: {
      winTotals: [2, 3],
      lossTotals: [7, 11],
      winCalc: function (bet) {
        return parseInt(bet);
      },
    },
    intermediateRoll: {
      winTotals: [7],
      lossTotals: 'point',
      winCalc: function (bet) {
        return parseInt(bet);
      },
    },
  },

  come: {
    comeoutRoll: {
      winTotals: [7, 11],
      lossTotals: [2, 3, 12],
      winCalc: function (bet) {
        return parseInt(bet);
      },
    },
    intermediateRoll: {
      winTotals: 'point',
      lossTotals: [7],
      winCalc: function (bet) {
        return parseInt(bet);
      },
    },
  },

  dontCome: {
    comeoutRoll: {
      winTotals: [2, 3],
      lossTotals: [7, 11],
      winCalc: function (bet) {
        return parseInt(bet);
      },
    },

    intermediateRoll: {
      winTotals: [7],
      lossTotals: 'point',
      winCalc: function (bet) {
        return parseInt(bet);
      },
    },
  },
  // passline odds
  passOdds4: {
    intermediateRoll: {
      winTotals: [4],
      lossTotals: [7],
      winCalc: function (bet) {
        return parseInt(bet) * 2;
      },
    },
  },
  passOdds5: {
    intermediateRoll: {
      winTotals: [5],
      lossTotals: [7],
      winCalc: function (bet) {
        return Math.floor((parseInt(bet) / 2) * 3);
      },
    },
  },
  passOdds6: {
    intermediateRoll: {
      winTotals: [6],
      lossTotals: [7],
      winCalc: function (bet) {
        return Math.floor((parseInt(bet) / 5) * 6);
      },
    },
  },
  passOdds8: {
    intermediateRoll: {
      winTotals: [8],
      lossTotals: [7],
      winCalc: function (bet) {
        return Math.floor((parseInt(bet) / 5) * 6);
      },
    },
  },
  passOdds9: {
    intermediateRoll: {
      winTotals: [9],
      lossTotals: [7],
      winCalc: function (bet) {
        return Math.floor((bet / 2) * 3);
      },
    },
  },
  passOdds10: {
    intermediateRoll: {
      winTotals: [10],
      lossTotals: [7],
      winCalc: function (bet) {
        return parseInt(bet) * 2;
      },
    },
  },
  // don't pass odds
  dontPassOdds4: {
    intermediateRoll: {
      winTotals: [7],
      lossTotals: [4],
      winCalc: function (bet) {
        return parseInt(bet) / 2;
      },
    },
  },
  dontPassOdds5: {
    intermediateRoll: {
      winTotals: [7],
      lossTotals: [5],
      winCalc: function (bet) {
        Math.floor((parseInt(bet) / 3) * 2);
      },
    },
  },
  dontPassOdds6: {
    intermediateRoll: {
      winTotals: [7],
      lossTotals: [6],
      winCalc: function (bet) {
        Math.floor((parseInt(bet) / 6) * 5);
      },
    },
  },
  dontPassOdds8: {
    intermediateRoll: {
      winTotals: [7],
      lossTotals: [8],
      winCalc: function (bet) {
        Math.floor((parseInt(bet) / 6) * 5);
      },
    },
  },
  dontPassOdds9: {
    intermediateRoll: {
      winTotals: [7],
      lossTotals: [9],
      winCalc: function (bet) {
        Math.floor((parseInt(bet) / 3) * 2);
      },
    },
  },
  dontPassOdds10: {
    intermediateRoll: {
      winTotals: [7],
      lossTotals: [10],
      winCalc: function (bet) {
        return parseInt(bet) / 2;
      },
    },
  },
  //come odds
  comeOdds4: {
    intermediateRoll: {
      winTotals: [4],
      lossTotals: [7],
      winCalc: function (bet) {
        return parseInt(bet) * 2;
      },
    },
  },
  comeOdds5: {
    intermediateRoll: {
      winTotals: [5],
      lossTotals: [7],
      winCalc: function (bet) {
        return Math.floor((parseInt(bet) / 2) * 3);
      },
    },
  },
  comeOdds6: {
    intermediateRoll: {
      winTotals: [6],
      lossTotals: [7],
      winCalc: function (bet) {
        return Math.floor(parseInt(bet / 5) * 6);
      },
    },
  },
  comeOdds8: {
    intermediateRoll: {
      winTotals: [8],
      lossTotals: [7],
      winCalc: function (bet) {
        return Math.floor((parseInt(bet) / 5) * 6);
      },
    },
  },
  comeOdds9: {
    intermediateRoll: {
      winTotals: [9],
      lossTotals: [7],
      winCalc: function (bet) {
        return Math.floor((parseInt(bet) / 2) * 3);
      },
    },
  },
  comeOdds10: {
    intermediateRoll: {
      winTotals: [10],
      lossTotals: [7],
      winCalc: function (bet) {
        return parseInt(bet) * 2;
      },
    },
  },
  // don't come odds
  dontComeOdds4: {
    intermediateRoll: {
      winTotals: [7],
      lossTotals: [4],
      winCalc: function (bet) {
        return parseInt(bet) / 2;
      },
    },
  },
  dontComeOdds5: {
    intermediateRoll: {
      winTotals: [7],
      lossTotals: [5],
      winCalc: function (bet) {
        return Math.floor((parseInt(bet) / 3) * 2);
      },
    },
  },
  dontComeOdds6: {
    intermediateRoll: {
      winTotals: [7],
      lossTotals: [6],
      winCalc: function (bet) {
        return Math.floor((parseInt(bet) / 6) * 5);
      },
    },
  },
  dontComeOdds8: {
    intermediateRoll: {
      winTotals: [7],
      lossTotals: [8],
      winCalc: function (bet) {
        return Math.floor((parseInt(bet) / 6) * 5);
      },
    },
  },
  dontComeOdds9: {
    intermediateRoll: {
      winTotals: [7],
      lossTotals: [9],
      winCalc: function (bet) {
        return Math.floor((parseInt(bet) / 3) * 2);
      },
    },
  },
  dontComeOdds10: {
    intermediateRoll: {
      winTotals: [7],
      lossTotals: [10],
      winCalc: function (bet) {
        return parseInt(bet) / 2;
      },
    },
  },
  //place bets
  place4: {
    intermediateRoll: {
      winTotals: [4],
      lossTotals: [7],
      winCalc: function (bet) {
        return (parseInt(bet) / 5) * 9;
      },
    },
  },

  place5: {
    intermediateRoll: {
      winTotals: [5],
      lossTotals: [7],
      winCalc: function (bet) {
        return (parseInt(bet) / 5) * 7;
      },
    },
  },

  place6: {
    intermediateRoll: {
      winTotals: [6],
      lossTotals: [7],
      winCalc: function (bet) {
        return (parseInt(bet) / 6) * 7;
      },
    },
  },
  place8: {
    intermediateRoll: {
      winTotals: [8],
      lossTotals: [7],
      winCalc: function (bet) {
        return (parseInt(bet) / 6) * 7;
      },
    },
  },
  place9: {
    intermediateRoll: {
      winTotals: [9],
      lossTotals: [7],
      winCalc: function (bet) {
        return (parseInt(bet) / 5) * 7;
      },
    },
  },
  place10: {
    intermediateRoll: {
      winTotals: [10],
      lossTotals: [7],
      winCalc: function (bet) {
        return (parseInt(bet) / 5) * 9;
      },
    },
  },
  //props
  field: {
    nextRoll: {
      winTotals: [2, 3, 4, 9, 10, 11, 12],
      lossTotals: [5, 6, 7, 8],
      winCalc: function (bet, roll) {
        if (roll === 2 || roll === 12) {
          return parseInt(bet) * 3;
        } else {
          return parseInt(bet) * 2;
        }
      },
    },
  },
  big6: {
    anyRoll: {
      winTotals: [6],
      lossTotals: [7],
      winCalc: function (bet) {
        return parseInt(bet);
      },
    },
  },
  big8: {
    anyRoll: {
      winTotals: [8],
      lossTotals: [7],
      winCalc: function (bet) {
        return parseInt(bet);
      },
    },
  },
  //hops
  hop3and1: {
    nextRoll: {
      winTotals: [4],
      lossTotals: [2, 3, 5, 6, 7, 8, 9, 10, 11, 12],

      winCalc: function (bet, d1, d2) {
        if ((d1 === 3 && d2 === 1) || (d1 === 1 && d2 == 3)) {
          return parseInt(bet) * 15;
        } else {
          return null;
        }
      },
    },
  },

  hop2and2: {
    nextRoll: {
      winTotals: [4],
      lossTotals: [2, 3, 5, 6, 7, 8, 9, 10, 11, 12],

      winCalc: function (bet, d1, d2) {
        if (d1 === 2 && d2 === 2) {
          return parseInt(bet) * 30;
        } else {
          return null;
        }
      },
    },
  },
  hop4and1: {
    nextRoll: {
      winTotals: [5],
      lossTotals: [2, 3, 4, 6, 7, 8, 9, 10, 11, 12],

      winCalc: function (bet) {
        return parseInt(bet) * 2;
      },
    },
  },

  hop3and2: {
    nextRoll: {
      winTotals: [5],
      lossTotals: [2, 3, 4, 6, 7, 8, 9, 10, 11, 12],

      winCalc: function (bet) {
        return parseInt(bet) * 15;
      },
    },
  },

  hop5and1: {
    nextRoll: {
      winTotals: [6],
      lossTotals: [2, 3, 4, 5, 7, 8, 9, 10, 11, 12],
      winCalc: function (bet, d1, d2) {
        if ((d1 === 5 && d2 === 1) || (d1 === 1 && d2 === 5)) {
          return parseInt(bet) * 15;
        }
      },
    },
  },

  hop4and2: {
    nextRoll: {
      winTotals: [6],
      lossTotals: [2, 3, 4, 5, 7, 8, 9, 10, 11, 12],

      winCalc: function (bet, d1, d2) {
        if ((d1 === 4 && d2 === 2) || (d1 === 2 && d2 === 4)) {
          return parseInt(bet) * 15;
        } else {
          return null;
        }
      },
    },
  },

  hop3and3: {
    nextRoll: {
      winTotals: [6],
      lossTotals: [2, 3, 4, 5, 7, 8, 9, 10, 11, 12],

      winCalc: function (bet, d1, d2) {
        if (d1 === 3 && d2 === 3) {
          return parseInt(bet) * 30;
        } else {
          return null;
        }
      },
    },
  },

  hop5and3: {
    nextRoll: {
      winTotals: [8],
      lossTotals: [2, 3, 4, 5, 6, 7, 9, 10, 11, 12],

      winCalc: function (bet, d1, d2) {
        if ((d1 === 5 && d2 === 3) || (d1 === 3 && d2 === 5)) {
          return parseInt(bet) * 15;
        } else {
          return null;
        }
      },
    },
  },

  hop6and2: {
    nextRoll: {
      winTotals: [8],
      lossTotals: [2, 3, 4, 5, 6, 7, 9, 10, 11, 12],

      winCalc: function (bet, d1, d2) {
        if ((d1 === 6 && d2 === 2) || (d1 === 2 && d2 === 6)) {
          return parseInt(bet) * 15;
        } else {
          return null;
        }
      },
    },
  },

  hop4and4: {
    nextRoll: {
      winTotals: [8],
      lossTotals: [2, 3, 4, 5, 6, 7, 9, 10, 11, 12],

      winCalc: function (bet, d1, d2) {
        if (d1 === 4 && d2 === 4) {
          return parseInt(bet) * 30;
        } else {
          return null;
        }
      },
    },
  },
  hop6and3: {
    nextRoll: {
      winTotals: [9],
      lossTotals: [2, 3, 4, 5, 6, 7, 8, 10, 11, 12],

      winCalc: function (bet, d1, d2) {
        if ((d1 === 6 && d2 === 3) || (d1 === 3 && d2 === 6)) {
          return parseInt(bet) * 15;
        } else {
          return null;
        }
      },
    },
  },
  hop5and4: {
    nextRoll: {
      winTotals: [9],
      lossTotals: [2, 3, 4, 5, 6, 7, 8, 10, 11, 12],

      winCalc: function (bet, d1, d2) {
        if ((d1 === 5 && d2 === 4) || (d1 === 4 && d2 === 5)) {
          return parseInt(bet) * 15;
        } else {
          return null;
        }
      },
    },
  },

  hop6and4: {
    nextRoll: {
      winTotals: [10],
      lossTotals: [2, 3, 4, 5, 6, 7, 8, 9, 11, 12],

      winCalc: function (bet, d1, d2) {
        if ((d1 === 6 && d2 === 4) || (d1 === 4 && d2 === 6)) {
          return parseInt(bet) * 15;
        } else {
          return null;
        }
      },
    },
  },

  hop5and5: {
    nextRoll: {
      winTotals: [10],
      lossTotals: [2, 3, 4, 5, 6, 7, 8, 9, 11, 12],

      winCalc: function (bet, d1, d2) {
        if (d1 === 5 && d2 === 5) {
          return parseInt(bet) * 30;
        } else {
          return null;
        }
      },
    },
  },

  hardway6: {
    anyRoll: {
      winTotals: [6],
      lossTotals: [6, 7],
      winCalc: function (bet, d1, d2) {
        if (d1 === 3 && d2 === 3) {
          return parseInt(bet) * 9;
        } else {
          return null;
        }
      },
    },
  },
  hardway8: {
    anyRoll: {
      winTotals: [8],
      lossTotals: [7, 8],

      winCalc: function (bet, d1, d2) {
        if (d1 === 5 && d2 === 5) {
          return parseInt(bet) * 9;
        } else {
          return null;
        }
      },
    },
  },

  hardway4: {
    anyRoll: {
      winTotals: [4],
      lossTotals: [7, 4],

      winCalc: function (bet, d1, d2) {
        if (d1 === 2 && d2 === 2) {
          return parseInt(bet) * 7;
        } else {
          return null;
        }
      },
    },
  },

  hardway10: {
    anyRoll: {
      winTotals: [10],
      lossTotals: [7, 10],

      winCalc: function (bet, d1, d2) {
        if (d1 === 5 && d2 === 5) {
          return parseInt(bet) * 7;
        } else {
          return null;
        }
      },
    },
  },

  cAndE: {
    nextRoll: {
      winTotals: [11, 2, 3, 12],
      lossTotals: [1, 4, 5, 6, 7, 8, 9, 10],

      winCalc: function (bet, diceTotal) {
        if (diceTotal === 11) {
          return (parseInt(bet) / 2) * 15;
        } else if (diceTotal === 2 || diceTotal === 3 || diceTotal === 12) {
          return (parseInt(bet) / 2) * 7;
        } else {
          return null;
        }
      },
    },
  },

  anySevens: {
    nextRoll: {
      winTotals: [7],
      lossTotals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

      winCalc: function (bet) {
        return bet * 4;
      },
    },
  },

  anyCraps: {
    nextRoll: {
      winTotals: [2, 3, 12],
      lossTotals: [1, 4, 5, 6, 7, 8, 9, 10, 11],

      winCalc: function (bet) {
        return parseInt(bet) * 7;
      },
    },
  },

  horn: {
    nextRoll: {
      winTotals: [2, 3, 11, 12],
      lossTotals: [1, 4, 5, 6, 7, 8, 9, 10],

      winCalc: function (bet, diceTotal) {
        if (diceTotal === 2 || diceTotal === 12) {
          return (parseInt(bet) / 4) * 30;
        } else if (diceTotal === 3 || diceTotal === 11) {
          return (parseInt(bet) / 4) * 15;
        }
      },
    },
  },

  horn2: {
    nextRoll: {
      winTotals: [2],
      lossTotals: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

      winCalc: function (bet) {
        return parseInt(bet) * 30;
      },
    },
  },

  horn3: {
    nextRoll: {
      winTotals: [3],
      lossTotals: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12],

      winCalc: function (bet) {
        return parseInt(bet) * 15;
      },
    },
  },

  horn11: {
    nextRoll: {
      winTotals: [11],
      lossTotals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],

      winCalc: function (bet) {
        return parseInt(bet) * 15;
      },
    },
  },

  horn12: {
    nextRoll: {
      winTotals: [12],
      lossTotals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],

      winCalc: function (bet) {
        return parseInt(bet) * 30;
      },
    },
  },

  hornHigh2: {
    nextRoll: {
      winTotals: [2, 3, 11, 12],
      lossTotals: [1, 4, 5, 6, 7, 8, 9, 10],

      winCalc: function (bet, diceTotal) {
        if (diceTotal === 2) {
          return (parseInt(bet) / 5) * 2 * 30;
        } else if (diceTotal === 3) {
          return (parseInt(bet) / 5) * 15;
        } else if (diceTotal === 11) {
          return (parseInt(bet) / 5) * 15;
        } else if (diceTotal === 12) {
          return (parseInt(bet) / 5) * 30;
        } else {
          return null;
        }
      },
    },
  },

  hornHigh3: {
    nextRoll: {
      winTotals: [2, 3, 11, 12],
      lossTotals: [1, 4, 5, 6, 7, 8, 9, 10],

      winCalc: function (bet, diceTotal) {
        if (diceTotal === 2) {
          return (parseInt(bet) / 5) * 30;
        } else if (diceTotal === 3) {
          return (parseInt(bet) / 5) * 2 * 15;
        } else if (diceTotal === 11) {
          return (parseInt(bet) / 5) * 15;
        } else if (diceTotal === 12) {
          return (parseInt(bet) / 5) * 30;
        } else {
          return null;
        }
      },
    },
  },

  hornHigh11: {
    nextRoll: {
      winTotals: [2, 3, 11, 12],
      lossTotals: [1, 4, 5, 6, 7, 8, 9, 10],

      winCalc: function (bet, diceTotal) {
        if (diceTotal === 2) {
          return (parseInt(bet) / 5) * 30;
        } else if (diceTotal === 3) {
          return (parseInt(bet) / 5) * 15;
        } else if (diceTotal === 11) {
          return (parseInt(bet) / 5) * 2 * 15;
        } else if (diceTotal === 12) {
          return (parseInt(bet) / 5) * 30;
        } else {
          return null;
        }
      },
    },
  },

  hornHigh12: {
    nextRoll: {
      winTotals: [2, 3, 11, 12],
      lossTotals: [1, 4, 5, 6, 7, 8, 9, 10],

      winCalc: function (bet, diceTotal) {
        if (diceTotal === 2) {
          return (parseInt(bet) / 5) * 30;
        } else if (diceTotal === 3) {
          return (parseInt(bet) / 5) * 15;
        } else if (diceTotal === 11) {
          return (parseInt(bet) / 5) * 15;
        } else if (diceTotal === 12) {
          return (parseInt(bet) / 5) * 2 * 30;
        } else {
          return null;
        }
      },
    },
  },

  world: {
    nextRoll: {
      winTotals: [2, 3, 11, 12, 7],
      lossTotals: [1, 4, 5, 6, 8, 9, 10],

      winCalc: function (bet, diceTotal) {
        if (diceTotal === 2) {
          return (parseInt(bet) / 5) * 30;
        } else if (diceTotal === 3) {
          return (parseInt(bet) / 5) * 15;
        } else if (diceTotal === 11) {
          return (parseInt(bet) / 5) * 15;
        } else if (diceTotal === 12) {
          return (parseInt(bet) / 5) * 30;
        } else {
          return null;
        }
      },
    },
  },
};

export const passBets = [
  { abbr: 'pass', label: 'Pass Line Wager' },

  { abbr: 'passOdds4', label: 'Pass Line Odds 4' },
  { abbr: 'passOdds5', label: 'Pass Line Odds 5' },
  { abbr: 'passOdds6', label: 'Pass Line Odds 6' },
  { abbr: 'passOdds8', label: 'Pass Line Odds 8' },
  { abbr: 'passOdds9', label: 'Pass Line Odds 9' },
  { abbr: 'passOdds10', label: 'Pass Line Odds 10' },
];

export const dontBets = [
  { abbr: 'dontPass', label: "Don't Pass Wager" },
  { abbr: 'dontPassOdds4', label: "Don't Pass Odds 4" },
  { abbr: 'dontPassOdds5', label: "Don't Pass Odds 5" },
  { abbr: 'dontPassOdds6', label: "Don't Pass Odds 6" },
  { abbr: 'dontPassOdds8', label: "Don't Pass Odds 8" },
  { abbr: 'dontPassOdds9', label: "Don't Pass Odds 9" },
  { abbr: 'dontPassOdds10', label: "Don't Pass Odds 10" },
];

export const comeBets = [
  { abbr: 'come', label: 'Come Wager' },

  { abbr: 'comeOdds4', label: 'Come Odds 4' },
  { abbr: 'comeOdds5', label: 'Come Odds 5' },
  { abbr: 'comeOdds6', label: 'Come Odds 6' },
  { abbr: 'comeOdds8', label: 'Come Odds 8' },
  { abbr: 'comeOdds9', label: 'Come Odds 9' },
  { abbr: 'comeOdds10', label: 'Come Odds 10' },
];

export const dontComeBets = [
  { abbr: 'dontCome', label: "Don't Come Wager" },
  { abbr: 'dontComeOdds4', label: "Don't Come Odds 4" },
  { abbr: 'dontComeOdds5', label: "Don't Come Odds 5" },
  { abbr: 'dontComeOdds6', label: "Don't Come Odds 6" },
  { abbr: 'dontComeOdds8', label: "Don't Come Odds 8" },
  { abbr: 'dontComeOdds9', label: "Don't Come Odds 9" },
  { abbr: 'dontComeOdds10', label: "Don't Come Odds 10" },
];

export const placeBets = [
  { abbr: 'place4', label: 'Place 4' },
  { abbr: 'place5', label: 'Place 5' },
  { abbr: 'place6', label: 'Place 6' },
  { abbr: 'place8', label: 'Place 8' },
  { abbr: 'place9', label: 'Place 9' },
  { abbr: 'place10', label: 'Place 10' },
];

export const hopBets = [
  { abbr: 'hop3and1', label: 'Hop 3/1' },
  { abbr: 'hop2and2', label: 'Hop 2/2' },
  { abbr: 'hop4and1', label: 'Hop 4/1' },
  { abbr: 'hop3and2', label: 'Hop 3/2' },
  { abbr: 'hop5and1', label: 'Hop 5/1' },
  { abbr: 'hop4and4', label: 'Hop 4/2' },
  { abbr: 'hop3and3', label: 'Hop 3/3' },
  { abbr: 'hop5and3', label: 'Hop 5/3' },
  { abbr: 'hop6and2', label: 'Hop 6/2' },
  { abbr: 'hop4and4', label: 'Hop 4/4' },
  { abbr: 'hop6and3', label: 'Hop 6/3' },
  { abbr: 'hop5and4', label: 'Hop 5/4' },
  { abbr: 'hop6and4', label: 'Hop 6/4' },
  { abbr: 'hop5and5', label: 'Hop 5/5' },
];

export const hardwayBets = [
  { abbr: 'hardway6', label: 'Hardway 6' },
  { abbr: 'hardway8', label: 'Hardway 8' },
  { abbr: 'hardway4', label: 'Hardway 4' },
  { abbr: 'hardway10', label: 'Hardway 10' },
];

export const hornBets = [
  { abbr: 'horn', label: 'Horn' },
  { abbr: 'horn2', label: 'Horn 2' },
  { abbr: 'horn3', label: 'Horn 3' },
  { abbr: 'horn11', label: 'Horn 11' },
  { abbr: 'horn12', label: 'Horn 12' },
  { abbr: 'hornHigh2', label: 'Horn High 2' },
  { abbr: 'hornHigh3', label: 'Horn High 3' },
  { abbr: 'hornHigh11', label: 'Horn High 11' },
  { abbr: 'hornHigh12', label: 'Horn High 12' },
];

export const miscBets = [
  { abbr: 'field', label: 'Field' },
  { abbr: 'big6', label: 'Big 6' },
  { abbr: 'big8', label: 'Big 8' },
  { abbr: 'cAndE', label: 'C and E' },
  { abbr: 'anySevens', label: 'Any 7s' },
  { abbr: 'anyCraps', label: 'Any Craps' },
  { abbr: 'world', label: 'World' },
];
