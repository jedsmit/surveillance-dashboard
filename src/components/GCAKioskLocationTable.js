import React from 'react';
import styled from 'styled-components';

//styled components
const TableHeader = styled.tr`
  font-size: 0.75em;
`;

const Machine = styled.td`
  font-size: 0.75em;
`;
const Camera = styled.td`
  font-size: 0.75em;
`;
const Location = styled.td`
  font-size: 0.75em;
`;

const GCAKioskLocationTable = ({ machines }) => {
  return (
    <table>
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
            <Location className='text-right px-2'>{mach.location}</Location>
          </tr>
        );
      })}
    </table>
  );
};

export default GCAKioskLocationTable;
