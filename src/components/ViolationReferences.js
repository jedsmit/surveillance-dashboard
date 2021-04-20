import React from 'react';
import styled from 'styled-components';
//
import Colors from '../constants/Colors';

//styled-components
const TableContainer = styled.div`
  background-color: ${Colors.accentColor};
  color: ${Colors.backgroundColor};
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;
const Title = styled.h3``;
const ViolationsTable = styled.table`
  width: 90%;
`;
//
const ViolationReferences = ({ violationData }) => {
  return (
    <TableContainer className='container-fluid'>
      <div className='row justify-content-center'>
        <Title className='text-center'>Common Violations</Title>
      </div>
      <div className='row justify-content-center'>
        <ViolationsTable className='container-fluid'>
          <tr>
            <th className='text-left'>Violation</th>
            <th className='text-right'>Reference</th>
          </tr>
          {violationData.map(data => {
            return (
              <tr>
                <td className='text-left'>{data.violation}</td>
                <td className='text-right'>{data.reference}</td>
              </tr>
            );
          })}
        </ViolationsTable>
      </div>
    </TableContainer>
  );
};

export default ViolationReferences;
