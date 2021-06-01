export const houseWayData = [
  {
    hand: 'No Pair',
    rule: 'Put 2nd and 3rd highest cards in front',
  },
  {
    hand: 'Pair',
    rule: 'Put pair in back, 2nd and 3rd highest remaining cards in front',
  },
  {
    hand: "Two Pair - A's, K's, Q's",
    rule: 'Put small pair in front',
  },
  {
    hand: "Two Pair - J's, 10's, 9's",
    rule: 'Put both pairs in back if you can put an A or Joker in front, otherwise split',
  },
  {
    hand: "Two Pair - 8's, 7's, 6's",
    rule: 'Put both pairs in back if you can put a K or higher in front, otherwise split',
  },
  {
    hand: "Two Pair - 5's, 4's, 3's, 2's",
    rule: 'Put both pairs in back if you can put a Q or higher in front, otherwise split',
  },
  {
    hand: 'Three Pairs',
    rule: 'Put high pair in front',
  },
  {
    hand: "Three K's and below",
    rule: 'Put three of a kind in back, two highest remaining cards in front',
  },
  {
    hand: "Three A's",
    rule: 'Put A and next highest card in front',
  },
  {
    hand: 'Full House',
    rule: 'Put highest possible pair in front',
  },
  {
    hand: 'Two 3 of a kinds',
    rule: 'Put pair from higher set front',
  },
  {
    hand: 'Straight, Flush, or Straight Flush with no pair',
    rule: 'Put two highest cards in front that leave a complete hand in back',
  },
  {
    hand: 'Straight, Flush, or Straight Flush with a pair',
    rule: 'Put two highest cards in front that leave a complete hand in back',
  },
  {
    hand: 'Straight, Flush, or Straight Flush with two pair',
    rule: 'Play according to two pair strategy',
  },
  {
    hand: 'Straight, Flush, or Straight Flush with three of a kind',
    rule: 'Put complete hand in back and the pair in front',
  },
  {
    hand: 'Straight, Flush, or Straight Flush with full house',
    rule: 'Play according to full house strategy',
  },
  {
    hand: "Four of a Kind - A's, K's, Q's",
    rule: 'Play four of a kind in back if you can put at least a pair in front, otherwise split',
  },
  {
    hand: "Four of a Kind - J's, 10's, 9's",
    rule: 'Play four of a kind in back if you can put at least a K in front, otherwise split',
  },
  {
    hand: "Four of a Kind - 8's, 7's, 6's",
    rule: 'Play four of a kind in back if you can put at least a Q in front, otherwise split',
  },
  {
    hand: "Four of a Kind - 5's and below",
    rule: 'Play four of a kind in back',
  },
  {
    hand: "Five A's",
    rule: "Play pair of A's in front",
  },
];
