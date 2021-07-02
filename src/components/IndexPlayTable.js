import React from 'react';
import styled from 'styled-components';
//
import Colors from '../constants/Colors';

//styled-components
const TableContainer = styled.div`
  background: ${Colors.blueGradient};
  width: 100%;
  color: ${Colors.backgroundColor};
  border-radius: 5px;
  font-weight: bold;
  padding: 5px;

  th {
    width: 10%;
  }

  tr {
    height: 10%;
  }

  td {
    border: solid;
  }
`;

const Title = styled.h3`
  text-align: center;
  font-weight: bold;
`;

const DoublePlays = styled.tr`
  font-weight: bold;
  td {
    background-color: #9fdbe3;
  }
`;

const StandPlays = styled.tr`
  font-weight: bold;
  td {
    background-color: #f90909;
  }
`;

const SplitPlays = styled.tr`
  font-weight: bold;
  td {
    background-color: #f4f909;
  }
`;
//
const IndexPlayTable = () => {
  return (
    <TableContainer className='container-fluid justify-content-center px-2'>
      <div className='row justify-content-center'>
        <Title className='text-center p-0'>Index Plays</Title>
      </div>
      <div className='row justify-content-center'>
        <h5 style={{ textDecorationLine: 'underline' }}>Dealer's Upcard</h5>
      </div>
      <div className='row'>
        <div className='col-2 my-auto'>
          <h5 style={{ textDecorationLine: 'underline' }}>Player's Total</h5>
        </div>
        <div className='col-10'>
          <table className='text-center'>
            <tr>
              <th></th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>8</th>
              <th>9</th>
              <th>10</th>
              <th>A</th>
            </tr>
            <DoublePlays>
              <th>9</th>
              <td>+1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>+3</td>
              <td></td>
              <td></td>
              <td></td>
            </DoublePlays>
            <DoublePlays>
              <th>10</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>+4</td>
              <td>+4</td>
            </DoublePlays>
            <DoublePlays>
              <th>11</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>0</td>
              <td></td>
              <td>0</td>
              <td>+1</td>
            </DoublePlays>
            <StandPlays>
              <th>12</th>
              <td>+3</td>
              <td>+2</td>
              <td style={{ backgroundColor: '#39bf36' }}>0</td>
              <td style={{ backgroundColor: '#39bf36' }}>-2</td>
              <td style={{ backgroundColor: '#39bf36' }}>-1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </StandPlays>
            <StandPlays>
              <th>13</th>
              <td style={{ backgroundColor: '#39bf36' }}>-1</td>
              <td style={{ backgroundColor: '#39bf36' }}>-2</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </StandPlays>
            <StandPlays>
              <th>14</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </StandPlays>
            <StandPlays>
              <th>15</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>+4</td>
              <td></td>
            </StandPlays>
            <StandPlays>
              <th>16</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>+5</td>
              <td>0</td>
              <td></td>
            </StandPlays>
            <SplitPlays>
              <th>10,10</th>
              <td></td>
              <td></td>
              <td></td>
              <td>+5</td>
              <td>+6</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </SplitPlays>
          </table>
        </div>
      </div>
    </TableContainer>
  );
};

export default IndexPlayTable;
