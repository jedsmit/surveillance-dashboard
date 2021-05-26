import React from 'react';
import styled from 'styled-components';
//
import ContactsTable from '../components/ContactsTable';
//
import {
  tgaContacts,
  surveillanceTechContacts,
  surveillanceSupContacts,
  surveillanceAgentContacts,
} from '../data/contacts';
import Colors from '../constants/Colors';
import { spacing, fontSizes } from '../constants/Sizes';

//styled-components
const Container = styled.div`
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  min-height: 100vh;
`;

const TitleText = styled.h1`
  margin: 0;
  padding: ${spacing.xs};
`;

const Name = styled.td``;
const PhoneNumber = styled.td``;
const Extension = styled.td``;

const TableHeader = styled.tr``;

//
const ContactsPage = () => {
  return (
    <Container>
      <div className='row'>
        <div className='col'>
          <TitleText>Contacts</TitleText>
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-4'>
          <ContactsTable contacts={tgaContacts} contactsTitle='TGA' />
        </div>

        <div className='col-sm-4'>
          <div className='row'>
            <ContactsTable
              contacts={surveillanceSupContacts}
              contactsTitle='Surveillance Supervisors'
            />
          </div>
          <div className='row mt-5'>
            <ContactsTable
              contacts={surveillanceTechContacts}
              contactsTitle='Surveillance Technicians'
            />
          </div>
        </div>
        <div className='col-sm-4'>
          <ContactsTable
            contacts={surveillanceAgentContacts}
            contactsTitle='Surveillance Agents'
          />
        </div>
      </div>
    </Container>
  );
};

export default ContactsPage;
