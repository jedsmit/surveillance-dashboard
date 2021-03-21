import React from 'react';
import Colors from '../constants/Colors';
import styled from 'styled-components';

//styled-components
const TableContainer = styled.div`
  background: ${Colors.accentColor};
  width: 100%;
  color: ${Colors.backgroundColor};
  border-radius: 5px;
`;
const Title = styled.h3`
  text-align: center;
`;

const BasicStrategyTable = () => {
  return (
    <TableContainer className='container-fluid justify-content-center px-4'>
      <div className='row justify-content-center'>
        <Title className='text-center p-0'>Basic Strategy</Title>
      </div>
      {/* <div className='row'>
        <div className='col-sm-4 h6 text-left'>Starting Hand</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>Rule</div>
      </div> */}
      <div className='row'>
        <div className='col h6' style={{ textDecorationLine: 'underline' }}>
          Pairs
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>A-A, 8-8, 10-10</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>Always</div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>2-2, 3-3, 7-7</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>2-7</div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>4-4</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>5-6</div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>5-5</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>2-9</div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>6-6</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>2-6</div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>9-9</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>7-10-A</div>
      </div>
      <div className='row'>
        <div className='col h6' style={{ textDecorationLine: 'underline' }}>
          Soft Hands
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>A-2, A-3</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>5-6</div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>A-4, A-5</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>4-6</div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>A-6</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>3-6</div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>A-7</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>2-7-8, 3-6</div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>A-8, A-9</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>Always</div>
      </div>
      <div className='row'>
        <div className='col h6' style={{ textDecorationLine: 'underline' }}>
          Hard Hands
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>8 or less</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>Always</div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>9</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>3-6</div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>10</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>2-9</div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>11</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>Always</div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>12</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>4-5-6</div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>13-16</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>2-6</div>
      </div>
      <div className='row'>
        <div className='col-sm-6 pl-0 h6 text-left'>17 or more</div>
        <div className='col'></div>
        <div className='col-sm-4 h6 text-right'>Always</div>
      </div>
    </TableContainer>
  );
};

export default BasicStrategyTable;
