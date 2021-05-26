import React from 'react';
import styled from 'styled-components';
//
import Colors from '../constants/Colors';
import { spacing } from '../constants/Sizes';
//

//styled-components
const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  justify-content: center;
  padding: ${spacing.sm};
`;

const ContactsTitle = styled.h4``;
const Name = styled.td``;
const PhoneNumber = styled.td``;
const Extension = styled.td``;

const TableHeader = styled.tr``;
//
const ContactsTable = ({ contacts, contactsTitle, cell }) => {
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <div className='col'>
          <ContactsTitle>{contactsTitle}</ContactsTitle>
        </div>
      </div>

      <div className='row'>
        <div className='col justify-content-center'>
          <table className='mx-auto'>
            <TableHeader className='justify-content-center'>
              <th className='px-2 text-left'>Name</th>
              <th className='px-2'>Extension</th>
              {cell ? <th className='px-2'>Cell #</th> : null}
            </TableHeader>

            {contacts.map(contact => {
              return (
                <tr>
                  <Name className='text-left px-2'>{contact.contactName}</Name>
                  <Extension className='px-2'>{contact.extension}</Extension>
                  <PhoneNumber className='text-right px-2'>
                    {contact.cellNumber}
                  </PhoneNumber>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </Container>
  );
};

export default ContactsTable;
