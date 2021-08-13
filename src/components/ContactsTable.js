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

const ContactsTitle = styled.h4``;
const Name = styled.td``;
const PhoneNumber = styled.td``;
const Extension = styled.td``;

const TableHeader = styled.tr``;
//
const ContactsTable = ({ contacts, contactsTitle, cell }) => {
  return (
    <Container className='container'>
      <div className='row'>
        <div className='col'>
          <ContactsTitle className='text-center mx-auto'>
            {contactsTitle}
          </ContactsTitle>
        </div>
      </div>

      <div className='row'>
        <div className='col mx-auto'>
          <table className='mx-auto'>
            <TableHeader className='justify-content-center'>
              <th className='px-1 text-left'>Name</th>
              <th className='px-1 text-right'>Extension</th>
              {cell ? <th className='px-1'>Cell #</th> : null}
            </TableHeader>

            {contacts.map((contact, index) => {
              return (
                <tr key={index}>
                  <Name className='text-left px-2'>{contact.contactName}</Name>
                  <Extension className='px-2 text-right'>
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
    </Container>
  );
};

export default ContactsTable;
