import React from 'react';
import styled from 'styled-components';
//
import Colors from '../constants/Colors';
import { spacing } from '../constants/Sizes';
//styled-components
const TableContainer = styled.div`
  background-image: ${Colors.blueGradient};
  width: 100%;
  color: ${Colors.backgroundColor};
  font-weight: bold;
  padding: ${spacing.xxs};
`;
const Title = styled.h3`
  text-align: center;
  font-weight: bold;
`;
//
const BaccaratDrawingRulesTable = () => {
  return (
    <TableContainer className='container-fluid justify-content-center mx-auto'>
      <div className='row justify-content-center'>
        <Title className='text-center'>Drawing Rules</Title>
      </div>

      <div className='row'>
        <div
          className='col text-center'
          style={{ textDecorationLine: 'underline' }}
        >
          Player's Hand
        </div>
      </div>
      <div className='row'>
        <div className='col-2 text-left'>0-5</div>

        <div className='col-10 text-right'>Hit</div>
      </div>
      <div className='row'>
        <div className='col-2 text-left'>6-7</div>

        <div className='col-10  text-right'>Stand</div>
      </div>
      <div className='row'>
        <div className='col-2 text-left'>8-9</div>

        <div className='col-10 text-right'>Natural</div>
      </div>

      <div className='row'>
        <div
          className='col text-center'
          style={{ textDecorationLine: 'underline' }}
        >
          Banker's Hand
        </div>
      </div>
      <div className='row'>
        <div className='col-2 text-left'>3</div>

        <div className='col-10 text-right'>Stand if the Player draws an 8</div>
      </div>
      <div className='row'>
        <div className='col-2  text-left'>4</div>

        <div className='col-10  text-right'>Hit if Player draws 2-7</div>
      </div>
      <div className='row'>
        <div className='col-2 text-left'>5</div>

        <div className='col-10  text-right'>Hit if Player draws 5-7</div>
      </div>
      <div className='row'>
        <div className='col-2 text-left'>6</div>

        <div className='col-10 text-right'>Hit if Player draws 6-7</div>
      </div>
    </TableContainer>
  );
};

export default BaccaratDrawingRulesTable;
