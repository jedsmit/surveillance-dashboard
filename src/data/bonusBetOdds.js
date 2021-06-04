export const bjOdds = {
  luckyLuckyOdds: {
    wagerName: 'Lucky Lucky',
    wagers: [
      { winCombo: 'Suited 777', payoutMultiplier: 200 },
      { winCombo: 'Suited 678', payoutMultiplier: 100 },
      { winCombo: '777 (Non-Suited)', payoutMultiplier: 50 },
      { winCombo: '678 (Non-Suited)', payoutMultiplier: 30 },
      { winCombo: 'Suited 21', payoutMultiplier: 15 },
      { winCombo: '21 Total (Three Card Non-Suited)', payoutMultiplier: 3 },
      { winCombo: '20 Total (Three Card Total)', payoutMultiplier: 2 },
      { winCombo: '19 Total (Three Card Total)', payoutMultiplier: 2 },
    ],
  },
  blazingSevenOdds: {
    wagerName: "Blazing 7's",
    wagers: [
      { winCombo: "Three 7's (Same Color)", payoutMultiplier: 300 },
      { winCombo: "Three 7's", payoutMultiplier: 200 },
      { winCombo: "First Two Cards (Two 7's)", payoutMultiplier: 25 },
      { winCombo: 'First Two Cards (One 7)', payoutMultiplier: 2 },
    ],
  },
};

//three card poker
export const tcOdds = {
  pairPlusOdds: {
    wagerName: 'Pair Plus',
    wagers: [
      { winCombo: 'Straight Flush', payoutMultiplier: 40 },
      { winCombo: 'Three of a Kind', payoutMultiplier: 30 },
      { winCombo: 'Straight', payoutMultiplier: 5 },
      { winCombo: 'Flush', payoutMultiplier: 4 },
      { winCombo: 'Pair', payoutMultiplier: 1 },
    ],
  },
  anteBonusOdds: {
    wagerName: 'Ante Bonus',
    wagers: [
      { winCombo: 'Straight Flush', payoutMultiplier: 5 },
      { winCombo: 'Three of a Kind', payoutMultiplier: 4 },
      { winCombo: 'Straight', payoutMultiplier: 1 },
    ],
  },
  badBeatOdds: {
    wagerName: 'Bad Beat',
    wagers: [
      { winCombo: 'Straight Flush', payoutMultiplier: 5000 },
      { winCombo: 'Three of a Kind', payoutMultiplier: 300 },
      { winCombo: 'Straight', payoutMultiplier: 100 },
      { winCombo: 'Flush', payoutMultiplier: 50 },
      { winCombo: 'Pair', payoutMultiplier: 4 },
    ],
  },
};
//four card poker
export const fcPoker = {
  acesUpOdds: {
    wagerName: 'Aces Up',
    wagers: [
      { winCombo: 'Four of a Kind', payoutMultiplier: 50 },
      { winCombo: 'Straight Flush', payoutMultiplier: 30 },
      { winCombo: 'Three of a Kind', payoutMultiplier: 7 },
      { winCombo: 'Flush', payoutMultiplier: 6 },
      { winCombo: 'Straight', payoutMultiplier: 5 },
      { winCombo: 'Two Pair', payoutMultiplier: 2 },
      { winCombo: 'Pair of Aces', payoutMultiplier: 1 },
    ],
  },
  autoBonusOdds: {
    wagerName: 'Auto Bonus',
    wagers: [
      { winCombo: 'Four of a Kind', payoutMultiplier: 25 },
      { winCombo: 'Straight Flush', payoutMultiplier: 20 },
      { winCombo: 'Three of a Kind', payoutMultiplier: 2 },
    ],
  },
  badBeatOdds: {
    wagerName: 'Bad Beat',
    wagers: [
      { winCombo: 'Four of a Kind', payoutMultiplier: 25000 },
      { winCombo: 'Straight Flush', payoutMultiplier: 10000 },
      { winCombo: 'Three of a Kind', payoutMultiplier: 100 },
      { winCombo: 'Flush', payoutMultiplier: 25 },
      { winCombo: 'Straight', payoutMultiplier: 15 },
      { winCombo: 'Two Pair', payoutMultiplier: 4 },
    ],
  },
};

//ultimate texas hold 'em
export const utOdds = {
  tripsOdds: {
    wagerName: 'Trips',
    wagers: [
      { winCombo: 'Royal Flush', payoutMultiplier: 50 },
      { winCombo: 'Straight Flush', payoutMultiplier: 40 },
      { winCombo: 'Four of a Kind', payoutMultiplier: 30 },
      { winCombo: 'Full House', payoutMultiplier: 8 },
      { winCombo: 'Flush', payoutMultiplier: 7 },
      { winCombo: 'Straight', payoutMultiplier: 4 },
      { winCombo: 'Three of a Kind', payoutMultiplier: 3 },
    ],
  },

  utBlindOdds: {
    wagerName: 'Blind',
    wagers: [
      { winCombo: 'Royal Flush', payoutMultiplier: 500 },
      { winCombo: 'Straight Flush', payoutMultiplier: 50 },
      { winCombo: 'Four of a Kind', payoutMultiplier: 10 },
      { winCombo: 'Full House', payoutMultiplier: 3 },
      { winCombo: 'Flush', payoutMultiplier: 1.5 },
      { winCombo: 'Straight', payoutMultiplier: 1 },
    ],
  },

  badBeatOdds: {
    wagerName: 'Bad Beat',
    wagers: [
      { winCombo: 'Straight Flush', payoutMultiplier: 2500 },
      { winCombo: 'Four of a Kind', payoutMultiplier: 500 },
      { winCombo: 'Full House', payoutMultiplier: 50 },
      { winCombo: 'Flush', payoutMultiplier: 30 },
      { winCombo: 'Straight', payoutMultiplier: 20 },
      { winCombo: 'Three of a Kind', payoutMultiplier: 9 },
    ],
  },
};

//fortune pai gow
export const pgOdds = {
  fortuneOdds: {
    wagerName: 'Fortune Wager',
    wagers: [
      {
        winCombo: 'Seven Card Straight Flush no Joker',
        payoutMultiplier: 5000,
      },
      { winCombo: 'Royal Flush plus Royal Match', payoutMultiplier: 2000 },
      {
        winCombo: 'Seven Card Straight Flush with Joker',
        payoutMultiplier: 1000,
      },
      { winCombo: 'Five Aces', payoutMultiplier: 400 },
      { winCombo: 'Royal Flush', payoutMultiplier: 150 },
      { winCombo: 'Straight Flush', payoutMultiplier: 50 },
      { winCombo: 'Four of a Kind', payoutMultiplier: 25 },
      { winCombo: 'Full House', payoutMultiplier: 5 },
      { winCombo: 'Flush', payoutMultiplier: 4 },
      { winCombo: 'Three of a Kind', payoutMultiplier: 3 },
      { winCombo: 'Straight', payoutMultiplier: 2 },
    ],
  },

  progressiveOdds: {
    wagerName: 'Progressive',
    wagers: [
      { winCombo: 'Royal Flush', payoutMultiplier: 500 },
      { winCombo: 'Straight Flush', payoutMultiplier: 100 },
      { winCombo: 'Four of a Kind', payoutMultiplier: 75 },
      { winCombo: 'Full House', payoutMultiplier: 4 },
    ],
  },
};

export const crapsOdds = {
  placeBets: {
    wagerName: 'Place Bets',
    wagers: [
      { winCombo: 'Place Bet 6/8', payoutMultiplier: 7 / 6 },
      { winCombo: 'Place Bet 5/9', payoutMultiplier: 1.4 },
      { winCombo: 'Place Bet 4/10', payoutMultiplier: 1.8 },
    ],
  },
  buyBets: {
    wagerName: 'Buy Bets',
    wagers: [
      { winCombo: 'Buy Bet 6/8', payoutMultiplier: 1.2 },
      { winCombo: 'Buy Bet 5/9', payoutMultiplier: 1.5 },
      { winCombo: 'Buy Bet 4/10', payoutMultiplier: 2 },
    ],
  },
  layBets: {
    wagerName: 'Lay Bets',
    wagers: [
      { winCombo: 'Lay Bet 6/8', payoutMultiplier: 5 / 6 },
      { winCombo: 'Lay Bet 5/9', payoutMultiplier: 2 / 3 },
      { winCombo: 'Lay Bet 4/10', payoutMultiplier: 0.5 },
    ],
  },
  oddsBets: {
    wagerName: 'Odds Bets',
    wagers: [
      { winCombo: 'Passline Odds 6/8', payoutMultiplier: 1 },
      { winCombo: 'PassLine Odds 5/9', payoutMultiplier: 1.5 },
      { winCombo: 'Passline Odds 4/10', payoutMultiplier: 2 },
      { winCombo: "Don't Pass Odds 6/8", payoutMultiplier: 5 / 6 },
      { winCombo: "Don't Pass Odds 5/9", payoutMultiplier: 2 / 3 },
      { winCombo: "Don't Pass Odds 4/10", payoutMultiplier: 0.5 },
    ],
  },
  propBets: {
    wagerName: 'Prop Bets',
    wagers: [
      { winCombo: 'Any 7', payoutMultiplier: 4 },
      { winCombo: 'Any Craps', payoutMultiplier: 7 },
      { winCombo: 'Craps 2', payoutMultiplier: 30 },
      { winCombo: 'Craps 3', payoutMultiplier: 15 },
      { winCombo: 'Craps 12', payoutMultiplier: 30 },
      { winCombo: 'Yo 11', payoutMultiplier: 15 },
      { winCombo: 'Horn 2/12', payoutMultiplier: 6.75 },
      { winCombo: 'Horn 3/11', payoutMultiplier: 3 },
      { winCombo: 'High Horn 2 (2)', payoutMultiplier: 11.4 },
      { winCombo: 'High Horn 2 (3 or 11)', payoutMultiplier: 2.2 },
      { winCombo: 'High Horn 2 (12)', payoutMultiplier: 5.2 },
      { winCombo: 'High Horn 3 (3)', payoutMultiplier: 5.4 },
      { winCombo: 'High Horn 3 (2 or 12)', payoutMultiplier: 5.2 },
      { winCombo: 'High Horn 3 (11)', payoutMultiplier: 2.2 },
      { winCombo: 'High Horn 11 (11)', payoutMultiplier: 5.4 },
      { winCombo: 'High Horn 11 (2 or 12)', payoutMultiplier: 5.2 },
      { winCombo: 'High Horn 11 (3)', payoutMultiplier: 2.2 },
      { winCombo: 'High Horn 12 (12)', payoutMultiplier: 11.4 },
      { winCombo: 'High Horn 12 (2)', payoutMultiplier: 5.2 },
      { winCombo: 'High Horn 12 (3 or 11)', payoutMultiplier: 2.2 },
      { winCombo: 'Hop Bets (pairs)', payoutMultiplier: 30 },
      { winCombo: 'Hop Bets (mixed)', payoutMultiplier: 15 },
      { winCombo: 'World Bet (2 or 12)', payoutMultiplier: 5.2 },
      { winCombo: 'World Bet (3 or 11)', payoutMultiplier: 2.2 },
    ],
  },
};
