import React from 'react';
import styled from 'styled-components';
//
import Colors from '../constants/Colors';
import { spacing } from '../constants/Sizes';
import { houseWayData } from '../data/houseWayData';

//styled-components
const TableContainer = styled.div`
  background-image: ${Colors.blueGradient};
  padding: ${spacing.xxs};
  color: black;
  height: 100%;
  width: 100%;
`;
const Title = styled.h3`
  font-weight: bold;
`;
const StrategyTable = styled.table`
  width: 95%;
`;
//
const ViolationReferences = () => {
  return (
    <TableContainer className='container-fluid'>
      <div className='row justify-content-center'>
        <Title className='text-center'>House Way</Title>
      </div>
      <div className='row justify-content-center'>
        <StrategyTable className='container-fluid'>
          <tr>
            <th className='text-center' style={{ textDecoration: 'underline' }}>
              Hand
            </th>
            <th className='text-center' style={{ textDecoration: 'underline' }}>
              Rule
            </th>
          </tr>
          {houseWayData.map(data => {
            return (
              <tr>
                <td className='text-left'>{data.hand}</td>
                <td className='text-right'>{data.rule}</td>
              </tr>
            );
          })}
        </StrategyTable>
      </div>
    </TableContainer>
  );
};

export default ViolationReferences;
