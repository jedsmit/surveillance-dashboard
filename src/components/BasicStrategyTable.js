import React from 'react';
import styled from 'styled-components';
//
import Colors from '../constants/Colors';
import { spacing } from '../constants/Sizes';
import { pairs, softHands, hardHands } from '../data/basicStrategyData';

//styled-components
const TableContainer = styled.div`
  background-image: ${Colors.blueGradient};
  width: 100%;
  color: black;
  padding: ${spacing.xxs};
  font-weight: 'bold';
`;
const Title = styled.h3`
  text-align: center;
  font-weight: bold;
`;
const TableRow = styled.div`
  font-weight: bold;
`;
//
const BasicStrategyTable = () => {
  return (
    <TableContainer className='container-fluid justify-content-center px-4'>
      <div className='row justify-content-center'>
        <Title className='text-center p-0'>Basic Strategy</Title>
      </div>
      <TableRow className='row'>
        <div
          className='col h6'
          style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}
        >
          Pairs
        </div>
      </TableRow>
      {pairs.map(data => {
        return (
          <div className='row'>
            <div className='col-sm-6 pl-0 h6 text-left'>
              <strong>{data.hand}</strong>
            </div>

            <div className='col-sm-6 h6 text-right'>
              <strong>{data.rule}</strong>
            </div>
          </div>
        );
      })}

      <div className='row'>
        <div
          className='col h6'
          style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}
        >
          Soft Hands
        </div>
      </div>

      {softHands.map(data => {
        return (
          <div className='row'>
            <div className='col-sm-6 pl-0 h6 text-left'>
              <strong>{data.hand}</strong>
            </div>

            <div className='col-sm-6 h6 text-right'>
              <strong>{data.rule}</strong>
            </div>
          </div>
        );
      })}

      <div className='row'>
        <div
          className='col h6'
          style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}
        >
          Hard Hands
        </div>
      </div>

      {hardHands.map(data => {
        return (
          <div className='row'>
            <div className='col-sm-6 pl-0 h6 text-left'>
              <strong>{data.hand}</strong>
            </div>

            <div className='col-sm-6 h6 text-right'>
              <strong>{data.rule}</strong>
            </div>
          </div>
        );
      })}
    </TableContainer>
  );
};

export default BasicStrategyTable;
