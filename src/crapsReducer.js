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

export const crapsReducer = (state, action) => {
  switch (action.type) {
    case 'PLACE_BET_SIX_WAGER':
      return {
        ...state,
        place6Win: calc7To6(state.place6Wager),
      };

    default:
      return null;
  }
};
