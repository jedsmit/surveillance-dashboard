import React from 'react';
import styled from 'styled-components';
//
import Colors from '../constants/Colors';

//

//styled-components
const Container = styled.div`
  width: 100%;
  background-color: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  justify-content: center;
`;

const TableTitle = styled.h4``;
const Code = styled.td``;
const Description = styled.td``;

const TableHeader = styled.tr``;
//
const RadioCodeTable = ({ data, name }) => {
  return (
    <Container className='container'>
      <div className='row'>
        <div className='col'>
          <TableTitle className='text-center mx-auto'>{name}</TableTitle>
        </div>
      </div>

      <div className='row'>
        <div className='col mx-auto'>
          <table className='mx-auto'>
            <TableHeader className='justify-content-center'>
              <th className='px-1 text-left'>Code</th>
              <th className='px-1 text-left'>Description</th>
            </TableHeader>

            {data.map((code, index) => {
              return (
                <tr key={index}>
                  <Code className='text-left'>{code.code}</Code>
                  <Description className='text-left px-2'>
                    {code.description}
                  </Description>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </Container>
  );
};

export default RadioCodeTable;
