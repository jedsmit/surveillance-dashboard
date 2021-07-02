export const crapsOperations = {
  pass: {
    comeoutRoll: {
      winTotals: [7, 11],
      lossTotals: [2, 3, 12],
      winCalc: function (bet) {
        return parseInt(bet) + parseInt(bet);
      },
    },
    intermediateRoll: {
      winTotals: 'point',
      lossTotals: [7],
      winCalc: function (bet) {
        return parseInt(bet) + parseInt(bet);
      },
    },
  },

  dontPass: {
    comeoutRoll: {
      winTotals: [2, 3],
      lossTotals: [7, 11],
      winCalc: function (bet) {
        return parseInt(bet) + parseInt(bet);
      },
    },
    intermediateRoll: {
      winTotals: [7],
      lossTotals: 'point',
      winCalc: function (bet) {
        return parseInt(bet) + parseInt(bet);
      },
    },
  },

  come: {
    comeoutRoll: {
      winTotals: [7, 11],
      lossTotals: [2, 3, 12],
      winCalc: function (bet) {
        return parseInt(bet) + parseInt(bet);
      },
    },
    intermediateRoll: {
      winTotals: 'point',
      lossTotals: [7],
      winCalc: function (bet) {
        return parseInt(bet) + parseInt(bet);
      },
    },
  },

  dontCome: {
    comeoutRoll: {
      winTotals: [2, 3],
      lossTotals: [7, 11],
      winCalc: function (bet) {
        return parseInt(bet) + parseInt(bet);
      },
    },

    intermediateRoll: {
      winTotals: [7],
      lossTotals: 'point',
      winCalc: function (bet) {
        return parseInt(bet) + parseInt(bet);
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
        return parseInt(bet) * 2;
      },
    },
  },
  big8: {
    anyRoll: {
      winTotals: [8],
      lossTotals: [7],
      winCalc: function (bet) {
        return parseInt(bet) * 2;
      },
    },
  },
  //hops
  hop3and1: {
    nextRoll: {
      winTotals: [4],
      lossTotals: [2, 3, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    winCalc: function (bet, d1, d2) {
      if ((d1 === 3 && d2 === 1) || (d1 === 1 && d2 == 3)) {
        return parseInt(bet) * 15;
      } else {
        return null;
      }
    },
  },

  hop2and2: {
    nextRoll: {
      winTotals: [4],
      lossTotals: [2, 3, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    winCalc: function (bet, d1, d2) {
      if (d1 === 2 && d2 === 2) {
        return parseInt(bet) * 30;
      } else {
        return null;
      }
    },
  },
  hop4and1: {
    nextRoll: {
      winTotals: [5],
      lossTotals: [2, 3, 4, 6, 7, 8, 9, 10, 11, 12],
    },
    winCalc: function (bet) {
      return parseInt(bet) * 2;
    },
  },
  hop3and2: {
    nextRoll: {
      winTotals: [5],
      lossTotals: [2, 3, 4, 6, 7, 8, 9, 10, 11, 12],
    },
    winCalc: function (bet) {
      return parseInt(bet) * 15;
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
    },
    winCalc: function (bet, d1, d2) {
      if ((d1 === 4 && d2 === 2) || (d1 === 2 && d2 === 4)) {
        return parseInt(bet) * 15;
      } else {
        return null;
      }
    },
  },

  hop3and3: {
    nextRoll: {
      winTotals: [6],
      lossTotals: [2, 3, 4, 5, 7, 8, 9, 10, 11, 12],
    },
    winCalc: function (bet, d1, d2) {
      if (d1 === 3 && d2 === 3) {
        return parseInt(bet) * 30;
      } else {
        return null;
      }
    },
  },

  hop5and3: {
    nextRoll: {
      winTotals: [8],
      lossTotals: [2, 3, 4, 5, 6, 7, 9, 10, 11, 12],
    },
    winCalc: function (bet, d1, d2) {
      if ((d1 === 5 && d2 === 3) || (d1 === 3 && d2 === 5)) {
        return parseInt(bet) * 15;
      } else {
        return null;
      }
    },
  },

  hop6and2: {
    nextRoll: {
      winTotals: [8],
      lossTotals: [2, 3, 4, 5, 6, 7, 9, 10, 11, 12],
    },
    winCalc: function (bet, d1, d2) {
      if ((d1 === 6 && d2 === 2) || (d1 === 2 && d2 === 6)) {
        return parseInt(bet) * 15;
      } else {
        return null;
      }
    },
  },

  hop4and4: {
    nextRoll: {
      winTotals: [8],
      lossTotals: [2, 3, 4, 5, 6, 7, 9, 10, 11, 12],
    },
    winCalc: function (bet, d1, d2) {
      if (d1 === 4 && d2 === 4) {
        return parseInt(bet) * 30;
      } else {
        return null;
      }
    },
  },
  hop6and3: {
    nextRoll: {
      winTotals: [9],
      lossTotals: [2, 3, 4, 5, 6, 7, 8, 10, 11, 12],
    },
    winCalc: function (bet, d1, d2) {
      if ((d1 === 6 && d2 === 3) || (d1 === 3 && d2 === 6)) {
        return parseInt(bet) * 15;
      } else {
        return null;
      }
    },
  },
  hop5and4: {
    nextRoll: {
      winTotals: [9],
      lossTotals: [2, 3, 4, 5, 6, 7, 8, 10, 11, 12],
    },
    winCalc: function (bet, d1, d2) {
      if ((d1 === 5 && d2 === 4) || (d1 === 4 && d2 === 5)) {
        return parseInt(bet) * 15;
      } else {
        return null;
      }
    },
  },

  hop6and4: {
    nextRoll: {
      winTotals: [10],
      lossTotals: [2, 3, 4, 5, 6, 7, 8, 9, 11, 12],
    },
    winCalc: function (bet, d1, d2) {
      if ((d1 === 6 && d2 === 4) || (d1 === 4 && d2 === 6)) {
        return parseInt(bet) * 15;
      } else {
        return null;
      }
    },
  },

  hop5and5: {
    nextRoll: {
      winTotals: [10],
      lossTotals: [2, 3, 4, 5, 6, 7, 8, 9, 11, 12],
    },
    winCalc: function (bet, d1, d2) {
      if (d1 === 5 && d2 === 5) {
        return parseInt(bet) * 30;
      } else {
        return null;
      }
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
    },
    winCalc: function (bet, d1, d2) {
      if (d1 === 5 && d2 === 5) {
        return parseInt(bet) * 9;
      } else {
        return null;
      }
    },
  },

  hardway4: {
    anyRoll: {
      winTotals: [4],
      lossTotals: [7, 4],
    },
    winCalc: function (bet, d1, d2) {
      if (d1 === 2 && d2 === 2) {
        return parseInt(bet) * 7;
      } else {
        return null;
      }
    },
  },

  hardway10: {
    anyRoll: {
      winTotals: [10],
      lossTotals: [7, 10],
    },
    winCalc: function (bet, d1, d2) {
      if (d1 === 5 && d2 === 5) {
        return parseInt(bet) * 7;
      } else {
        return null;
      }
    },
  },
};
