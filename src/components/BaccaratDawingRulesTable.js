import React from 'react';
import Colors from '../constants/Colors';
import styled from 'styled-components';

//styled-components
const TableContainer = styled.div`
  background: ${Colors.primaryTextColor};
  width: 100%;
  color: ${Colors.backgroundColor};
`;
const Title = styled.h3`
  text-align: center;
`;

const BaccaratDrawingRulesTable = () => {
  return (
    <TableContainer className='container-fluid justify-content-center px-4'>
      <div className='row justify-content-center'>
        <Title className='text-center p-0'>Drawing Rules</Title>
      </div>
      {/* <div className='row'>
        <div className='col-sm-4 h6 text-left'>Starting Hand</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>Rule</div>
      </div> */}
      <div className='row'>
        <div className='col h6' style={{ textDecorationLine: 'underline' }}>
          Player's Hand
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>0-5</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>Hit</div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>6-7</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>Stand</div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>8-9</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>Natural</div>
      </div>

      <div className='row'>
        <div className='col h6' style={{ textDecorationLine: 'underline' }}>
          Banker's Hand
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>3</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>
          Stand if the Player draws an 8
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>4</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>Hit if Player draws 2-7</div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>5</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>Hit if Player draws 5-7</div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>6</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>Hit if Player draws 6-7</div>
      </div>
    </TableContainer>
  );
};

export default BaccaratDrawingRulesTable;
