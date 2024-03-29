import React from 'react';
import styled from 'styled-components';
//
import Colors from '../constants/Colors';
//styled components
const Container = styled.div`
  height: 100%;
  width: 100%;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  justify-content: center;
`;
const TableHeader = styled.tr``;
const Machine = styled.td``;
const Camera = styled.td``;
const Location = styled.td``;
//
const GCAKioskLocationTable = ({ machines, title }) => {
  return (
    <Container className='container mb-4'>
      <div className='row mx-auto'>
        <div className='col'>
          <h4 className='text-center'>{title}</h4>
        </div>
      </div>

      <div className='row'>
        <div className='col jusitfy-content-center'>
          <table className='mx-auto'>
            <TableHeader>
              <th className='px-2 text-left'>Machine</th>
              <th className='px-2'>Camera</th>
              <th className='px-2'>Location</th>
            </TableHeader>

            {machines.map(mach => {
              return (
                <tr>
                  <Machine className='text-left px-2'>{mach.machine}</Machine>
                  <Camera className='px-2'>{mach.camera}</Camera>
                  <Location className='text-right px-2'>
                    {mach.location}
                  </Location>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </Container>
  );
};

export default GCAKioskLocationTable;
