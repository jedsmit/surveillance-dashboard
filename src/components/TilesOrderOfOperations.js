import React from 'react';
import styled from 'styled-components';
//
import Colors from '../constants/Colors';
import { spacing } from '../constants/Sizes';
//styled components
const Container = styled.div`
  height: 100%;
  width: 100%;
  color: ${Colors.backgroundColor};
  background-image: ${Colors.blueGradient};
  font-weight: bold;
  padding: ${spacing.xxs};
`;

const TitleText = styled.h3`
  font-weight: bold;
`;

const TilesOrderOfOperations = () => {
  return (
    <Container className='container-fluid'>
      <div className='row text-center'>
        <TitleText className='mx-auto'>House Way Order of Operations</TitleText>
      </div>
      <div className='row'>
        <div className='col-11 mx-auto'>
          <ol>
            <li>
              Look for Bo and follow the pair splitting rules.
              <ol>
                <li>
                  Never split pairs 5-10 (Gor-Ping Fung), 12 (Ling Lum Luk), or
                  16 (Chap Ng).
                </li>
                <li>
                  Split Gee Joon only if the 3rd and 4th tiles are 6-6, 6-5, or
                  6-4.
                </li>
                <li>
                  Split Teen and Day to make 6-8 or better, or when the 3rd and
                  4th tiles are 9 and 11.
                </li>
                <li>
                  Split 9's (Chap Gow) only when the 3rd and 4th tiles are any
                  combination of 10's, 12's, or 2's.
                </li>
                <li>
                  Split 8's (Yun and Chap Bart) with any with any combination of
                  10's' 11's, 12's and 2's, or when the 3rd and 4th tiles are 9
                  and 11.
                </li>
                <li>
                  Split 7's (Kuko Chut and Chap Chut) only when the 3rd and 4th
                  tiles are a Teen or Day with a 10 or 11.
                </li>
              </ol>
            </li>
            <li>
              Look for Teen or Day with a 7, 8, or 9 and follow thier rules.
              <ol>
                <li>
                  When possible, always match Teen and Day with with 7, 8, or 9.
                  When given a choice, play 7 before 8 and 8 before 9 (High Hine
                  before Gong and Gong before Wong).
                </li>
                <li>Check for the following exceptions.</li>
                <li>Play Wong over Gong (9 over 8) when the 4th tile is 11.</li>
                <li>
                  Play Wong over Gong (9 over 7) when the 4th tile is 11 or a
                  "low 4", (Barn Tant).
                </li>
                <li>
                  Play Gong over High Nine (8 over 7) when the 4th tile is ANY
                  four, or the 3rd and 4th tiles are a "low eight" (Chap Bart)
                  and a 5.
                </li>
              </ol>
            </li>

            <li>
              Look for the most balanced setting and follow the balancing rules.
              <ol>
                <li>
                  If the balanced hand totals 7-9 or less, use the ranking tile
                  in the low hand.
                </li>
                <li>
                  If the balanced hand totals 8-9 or more, use the ranking tile
                  in the high hand.
                </li>
                <li>
                  If the low hand totals less thean Yun Pai Saam AND you can
                  make Day Pai Bart or better in the high hand, set the high
                  hand as high as possible.
                </li>
                <li>
                  If the balanced hand is 8-8 or 7-9 AND the two highest tiles
                  end up in the same hand, split them to set the hand 7-9.
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </Container>
  );
};

export default TilesOrderOfOperations;
