export const pairs = [
  {
    hand: 'A-A, 8-8, 10-10',
    rule: 'Always',
  },
  {
    hand: '2-2, 3-3,7-7',
    rule: '2-7',
  },
  {
    hand: '4-4',
    rule: '5-6',
  },
  {
    hand: '5-5',
    rule: '2-9',
  },
  {
    hand: '6-6',
    rule: '2-6',
  },
  {
    hand: '9-9',
    rule: '7-10-A',
  },
];

export const softHands = [
  {
    hand: 'A-2, A-3',
    rule: '5-6',
  },
  {
    hand: 'A-4, A-5',
    rule: '4-6',
  },
  {
    hand: 'A-6',
    rule: '3-6',
  },
  {
    hand: 'A-7',
    rule: '2-7-8, 3-6',
  },
  {
    hand: 'A-8, A-9',
    rule: 'Always',
  },
];

export const hardHands = [
  {
    hand: '8 or less',
    rule: 'Always',
  },
  {
    hand: '9',
    rule: '3-6',
  },
  {
    hand: '10',
    rule: '2-9',
  },
  {
    hand: '11',
    rule: 'Always',
  },
  {
    hand: '12',
    rule: '4-5-6',
  },
  {
    hand: '13-16',
    rule: '2-6',
  },
  {
    hand: '17 or more',
    rule: 'Always',
  },
];
