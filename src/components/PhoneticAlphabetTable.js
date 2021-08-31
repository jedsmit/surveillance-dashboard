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
const Letter = styled.td``;
const Word = styled.td``;

const TableHeader = styled.tr``;
//
const PhoneticAlphabetTable = ({ data, name }) => {
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
              <th className='px-1 text-left'>Letter</th>
              <th className='px-1 text-left'>Police</th>
              <th className='px-1 text-left'>Military</th>
            </TableHeader>
            <tbody>
              {data.map((letter, index) => {
                console.log(data.letter);
                return (
                  <tr key={index}>
                    <Letter className='text-left'>{letter.letter}</Letter>
                    <Word className='text-left px-2'>{letter.word}</Word>
                    <Word className='text-left px-2'>{letter.milWord}</Word>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default PhoneticAlphabetTable;
