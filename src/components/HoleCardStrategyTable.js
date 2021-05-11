import React from 'react';
import styled from 'styled-components';
//
import Colors from '../constants/Colors';

//styled-components
const TableContainer = styled.div`
  width: 100%;
  background: ${Colors.blueGradient};
  color: ${Colors.backgroundColor};
  border-radius: 5px;
`;
const Title = styled.h3`
  text-align: center;
`;
//
const HoleCardStrategyTable = () => {
  return (
    <TableContainer className='container-fluid justify-content-center px-4'>
      <div className='row justify-content-center'>
        <Title className='text-center p-0'>Hole Card Strategy</Title>
      </div>
      <table className='w-100'>
        <th>Dealer's Total</th>
        <th>Hard Total</th>
        <th>Soft Total</th>
        <th>Double Down</th>
        <th>Pair Split</th>
        <tr>
          <td>H20</td>
          <td>20</td>
          <td>20</td>
          <td>--</td>
          <td>--</td>
        </tr>
        <tr>
          <td>H19</td>
          <td>19</td>
          <td>19</td>
          <td>--</td>
          <td>--</td>
        </tr>
        <tr>
          <td>H18</td>
          <td>18</td>
          <td>19</td>
          <td>--</td>
          <td>9</td>
        </tr>
        <tr>
          <td>H17</td>
          <td>17</td>
          <td>18</td>
          <td>--</td>
          <td>2, 3, 7, 8, 9</td>
        </tr>
        <tr>
          <td>H14, 15, 16</td>
          <td>12</td>
          <td>18</td>
          <td>H5-H11, A2-A9</td>
          <td>All pairs except 5s</td>
        </tr>
        <tr>
          <td>H13</td>
          <td>12</td>
          <td>18</td>
          <td>H7-H11, A2-A9</td>
          <td>All pairs except 5s</td>
        </tr>
        <tr>
          <td>H12</td>
          <td>12</td>
          <td>18</td>
          <td>H7-H11, A2-A9</td>
          <td>All pairs except 5s</td>
        </tr>
        <tr>
          <td>H11</td>
          <td>15</td>
          <td>18</td>
          <td>--</td>
          <td>A</td>
        </tr>
        <tr>
          <td>H10</td>
          <td>16</td>
          <td>19</td>
          <td>11</td>
          <td>A</td>
        </tr>
        <tr>
          <td>H9</td>
          <td>17</td>
          <td>19</td>
          <td>10, 11</td>
          <td>A, 8, 9</td>
        </tr>
        <tr>
          <td>H8</td>
          <td>17</td>
          <td>18</td>
          <td>10, 11</td>
          <td>A, 7, 8, 9</td>
        </tr>
        <tr>
          <td>H7</td>
          <td>17</td>
          <td>18</td>
          <td>10, 11</td>
          <td>A, 2, 3, 7, 8</td>
        </tr>
        <tr>
          <td>H6</td>
          <td>12</td>
          <td>18</td>
          <td>9, 10, 11</td>
          <td>A, 2, 3, 6, 7, 8, 9 </td>
        </tr>
        <tr>
          <td>H5</td>
          <td>13</td>
          <td>18</td>
          <td>10, 11, A2-A8</td>
          <td>A, 2, 3, 6, 7, 8, 9 </td>
        </tr>
        <tr>
          <td>H4</td>
          <td>14</td>
          <td>18</td>
          <td>10, 11, A6, A7</td>
          <td>A, 7, 8</td>
        </tr>
        <tr>
          <td>A9</td>
          <td>20</td>
          <td>20</td>
          <td>--</td>
          <td>--</td>
        </tr>
        <tr>
          <td>A8</td>
          <td>19</td>
          <td>19</td>
          <td>--</td>
          <td>9</td>
        </tr>
        <tr>
          <td>A7</td>
          <td>18</td>
          <td>19</td>
          <td>--</td>
          <td>2, 3, 7, 8, 9</td>
        </tr>
        <tr>
          <td>A6</td>
          <td>17</td>
          <td>18</td>
          <td>--</td>
          <td>A, 2, 3, 6, 7, 8</td>
        </tr>
        <tr>
          <td>A5</td>
          <td>13</td>
          <td>18</td>
          <td>9, 10, 11, A6, A7</td>
          <td>A, 2, 3, 6, 7, 8, 9</td>
        </tr>
        <tr>
          <td>A4</td>
          <td>13</td>
          <td>18</td>
          <td>10, 11</td>
          <td>A, 2, 6, 7, 8, 9</td>
        </tr>
        <tr>
          <td>A3</td>
          <td>14</td>
          <td>18</td>
          <td>10, 11</td>
          <td>A, 7, 8</td>
        </tr>
        <tr>
          <td>A2</td>
          <td>15</td>
          <td>18</td>
          <td>10, 11</td>
          <td>A, 7, 8</td>
        </tr>
        <tr>
          <td>AA</td>
          <td>16</td>
          <td>18</td>
          <td>10, 11</td>
          <td>A, 8</td>
        </tr>
      </table>
    </TableContainer>
  );
};

export default HoleCardStrategyTable;
