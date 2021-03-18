import React from 'react';
import Colors from '../constants/Colors';
import styled from 'styled-components';
import {
  tgaContacts,
  surveillanceTechContacts,
  surveillanceSupContacts,
  surveillanceAgentContacts,
} from '../data/contacts';

//styled-components
const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 1em;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  font-size: 2em;
`;

const TitleText = styled.h1`
  fontsize: 5em;
  margin: 0;
  padding: 10px;
`;

const Name = styled.td`
  font-size: 0.75em;
`;
const PhoneNumber = styled.td`
  font-size: 0.75em;
`;
const Extension = styled.td`
  font-size: 0.75em;
`;

const TableHeader = styled.tr`
  font-size: 0.75em;
`;

const GcaKioskPage = () => {
  return (
    <Container>
      <div className='row'>
        <div className='col'>
          <TitleText>Contacts</TitleText>
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-4'>
          <div className='row'>
            <div className='col'>
              <h3 className='text-center'>TGA</h3>
            </div>
          </div>

          <div className='row'>
            <div className='col justify-content-center'>
              <table>
                <TableHeader>
                  <th className='px-2 text-left'>Name</th>
                  <th className='px-2'>Extension</th>
                  <th className='px-2'>Cell #</th>
                </TableHeader>

                {tgaContacts.map(contact => {
                  return (
                    <tr>
                      <Name className='text-left px-2'>
                        {contact.contactName}
                      </Name>
                      <Extension className='px-2'>
                        {contact.extension}
                      </Extension>
                      <PhoneNumber className='text-right px-2'>
                        {contact.cellNumber}
                      </PhoneNumber>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>

        <div className='col-sm-4'>
          <div className='row'>
            <div className='col'>
              <h3 className='text-center'>Surveillance Technicians</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col d-flex justify-content-center'>
              <table>
                <TableHeader>
                  <th className='px-2 text-left'>Name</th>
                  <th className='px-2'>Extension</th>
                  <th className='px-2'>Cell #</th>
                </TableHeader>

                {surveillanceTechContacts.map(contact => {
                  return (
                    <tr>
                      <Name className='text-left px-2'>
                        {contact.contactName}
                      </Name>
                      <Extension className='px-2'>
                        {contact.extension}
                      </Extension>
                      <PhoneNumber className='text-right px-2'>
                        {contact.cellNumber}
                      </PhoneNumber>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>

          <div className='row'>
            <div className='col mt-3'>
              <h3 className='text-center'>Surveillance Agents</h3>
            </div>
          </div>

          <div className='row'>
            <div className='col d-flex justify-content-center'>
              <table>
                <TableHeader>
                  <th className='px-2 text-left'>Name</th>
                  <th className='px-2'>Extension</th>
                  <th className='px-2'>Cell #</th>
                </TableHeader>
                {surveillanceAgentContacts.map(contact => {
                  return (
                    <tr>
                      <Name className='text-left px-2'>
                        {contact.contactName}
                      </Name>
                      <Extension className='px-2'>
                        {contact.extension}
                      </Extension>
                      <PhoneNumber className='text-right px-2'>
                        {contact.cellNumber}
                      </PhoneNumber>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>

        <div className='col-sm-4'>
          <div className='row'>
            <div className='col'>
              <h3 className='text-center'>Surveillance Supervisors</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col d-flex justify-content-center'>
              <table>
                <TableHeader>
                  <th className='px-2 text-left'>Name</th>
                  <th className='px-2'>Extension</th>
                  <th className='px-2'>Cell #</th>
                </TableHeader>

                {surveillanceSupContacts.map(contact => {
                  return (
                    <tr>
                      <Name className='text-left px-2'>
                        {contact.contactName}
                      </Name>
                      <Extension className='px-2'>
                        {contact.extension}
                      </Extension>
                      <PhoneNumber className='text-right px-2'>
                        {contact.cellNumber}
                      </PhoneNumber>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GcaKioskPage;