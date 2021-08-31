import React from 'react';
import styled from 'styled-components';
//
import Colors from '../constants/Colors';
import { spacing } from '../constants/Sizes';

//styled-components
const Container = styled.div`
  width: 100%;
  justify-content: center;
`;

const SectionContainer = styled.div`
  width: 100%;
  font-weight: bold;
  background-image: ${Colors.blueGradient};
  color: ${Colors.backgroundColor};
  padding: ${spacing.sm};
  margin: ${spacing.sm};
`;

const Title = styled.h3`
  text-align: center;
  font-weight: bold;
`;

const SectionTitle = styled.h3`
  color: ${Colors.backgroundColor};
  text-align: center;
  font-weight: bold;
`;

const SubSectionTitle = styled.h5`
  color: ${Colors.backgroundColor};
  text-align: center;
  font-weight: bold;
`;

const ShortcutContainer = styled.div`
  border: solid;
`;

const CrapsCheatSheet = () => {
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <div className='col'>
          <Title>Cheat Sheet</Title>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-4'>
          <SectionContainer>
            <SectionTitle>Pass Line Bets</SectionTitle>

            <SubSectionTitle>Rules</SubSectionTitle>
            <p>
              The Pass Line bet may be made or increased at anytime, but cannot
              be decreased or taken down once a point is established.
            </p>
            <p>
              On the comeout roll, the pass line wins 1-1 if a 7 or 11 is
              rolled, and loses if a 2, 3, 12 is rolled.
            </p>
            <p>
              Once a point is established, the pass line wins 1-1 if the point
              number is rolled, and loses if a 7 is rolled.
            </p>
            <p>Once a point is established, players may add an odds bet.</p>
            <SubSectionTitle>Pass Line Odds Bets</SubSectionTitle>
            <table className='text-center w-100'>
              <thead>
                <tr>
                  <th>Point</th>
                  <th>Max Bet</th>
                  <th>Payout</th>
                </tr>
              </thead>
              <tr>
                <td>4 and 10</td>
                <td>3x flat wager</td>
                <td>2-1</td>
              </tr>
              <tr>
                <td>5 and 9</td>
                <td>4x flat wager</td>
                <td>3-2</td>
              </tr>
              <tr>
                <td>6 and 8</td>
                <td>5x flat wager</td>
                <td>6-5</td>
              </tr>
            </table>
            <ShortcutContainer className='text-center'>
              <SubSectionTitle>Shortcuts</SubSectionTitle>3x, 4x, 5x || 2-1,
              3-2, 6-5
            </ShortcutContainer>
          </SectionContainer>
          <SectionContainer>
            {' '}
            <SectionTitle>All Day Hardways</SectionTitle>
            <SubSectionTitle>Rules</SubSectionTitle>
            <p>
              All Day Hardways are multi-roll wagers that the hardway number
              will come before a seven.
            </p>
            <p>Hardway bets may be placed or taken down at any time.</p>
            <p>
              Hardways win when the number is rolled as a pair (e.g., two sixes
              makes a hardway 12).
            </p>
            <p>
              Hardways lose when the number comes mixed, i.e., not a pair, or
              when a 7 is rolled.
            </p>
          </SectionContainer>
        </div>
        <div className='col-sm-4'>
          <SectionContainer>
            <SectionTitle>Don't Pass Bets</SectionTitle>
            <SubSectionTitle>Rules</SubSectionTitle>
            <p>
              The Don't Pass bet can be decreased or taken down at any time, but
              cannot be placed or increased after a point is established.
            </p>
            <p>
              On the comeout roll, the dont pass wins 1-1 if a 2 or 3 is rolled,
              pushed if a 12 is rolled, and loses if a 7 or 11 is rolled.
            </p>
            <p>
              Once a point is established, the don't pass wins 1-1 if a 7 is
              rolled, and loses if the point number is rolled.
            </p>
            <p>
              Once a point is established, the pass line wins 1-1 if the point
              number is rolled, and loses if a 7 is rolled.
            </p>
            <p>Once a point is established, players may add an odds bet.</p>
            <SubSectionTitle>Don't Pass Odds Bets</SubSectionTitle>
            <table className='text-center w-100'>
              <thead>
                <tr>
                  <th>Point</th>
                  <th>Max Bet</th>
                  <th>Payout</th>
                </tr>
              </thead>
              <tr>
                <td>4 and 10</td>
                <td>6x flat wager</td>
                <td>1-2</td>
              </tr>
              <tr>
                <td>5 and 9</td>
                <td>6x flat wager</td>
                <td>2-3</td>
              </tr>
              <tr>
                <td>6 and 8</td>
                <td>6x flat wager</td>
                <td>5-6</td>
              </tr>
            </table>
            <ShortcutContainer className='text-center'>
              <SubSectionTitle>Shortcuts</SubSectionTitle>6x || 1-2, 2-3, 5-6
            </ShortcutContainer>
          </SectionContainer>
          <SectionContainer>
            {' '}
            <SectionTitle>Place Bets</SectionTitle>
            <SubSectionTitle>Rules</SubSectionTitle>
            <p>
              Place bets are wagers that a given point number will come before
              7.
            </p>
            <p>Place bets may be placed to taken down at any time.</p>
            <p>
              Place bets must be made in specific increments. 4, 10, 5, aand 9
              must be placed in 5 unit increments. 6 and 8 must be placed in 6
              unit increments with a single unit offset on thop of the bet.
            </p>
            <p>4 and 10 pay 9-5, 5 and 9 pay 7-5, and 6 and 8 pay 7-6.</p>
            <p>Place bets are off on the come out roll.</p>
            <ShortcutContainer className='text-center'>
              <SubSectionTitle>Shortcuts</SubSectionTitle>5, 5, 6 || 9-5, 7-5,
              7-6
            </ShortcutContainer>
          </SectionContainer>
        </div>
        <div className='col-sm-4'>
          <SectionContainer>
            <SectionTitle>Come/Don't Come Bets</SectionTitle>
            <SubSectionTitle>Rules</SubSectionTitle>
            <p>
              Come bets are the identical to Pass Line bets, except that they
              establish thier own point number.
            </p>
            <p>
              Don't Come bets are the identical to Don't Pass bets, except that
              they establish thier own point number.
            </p>
            <p>
              When a Come or Don't Come bet is placed, the very next roll is the
              Come Out roll for that bet. The Come Out roll rules are exacty the
              same as those for hte Pass/Don't Pass wagers. If a point number is
              rolled, the bet is travelled to the Come Box or the Don't Come
              box.
            </p>
            <p>
              Come and Don't Come wagers may take odds after a point has been
              established. The odds are the same as the Pass/Don't Pass odds
              wagers.
            </p>
            <p>Come bet odds are off on the come out roll.</p>
          </SectionContainer>
          <SectionContainer>
            {' '}
            <SectionTitle>Buy/Lay Bets</SectionTitle>
            <SubSectionTitle>Rules</SubSectionTitle>
            <p>
              Buy bets and Lays are the same as Come/Don't Come Odds bets and
              are placed in the same area, except there is no flat bet attached.
            </p>
            <p>Buy amd Lay bets are capped with lammers to identify them.</p>
            <p>
              Players must pay commission at the time they place these bets
              becuase they pay true odds.
            </p>
            <p>Buy bet commssion is 5% of the amount being wagered.</p>
            <p>Lay bet commssion is 5% of the amount the player would win.</p>
            <p>Buy bets are off on the come out roll.</p>
          </SectionContainer>
        </div>
      </div>
    </Container>
  );
};

export default CrapsCheatSheet;
