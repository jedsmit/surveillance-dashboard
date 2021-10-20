import React from 'react';
import styled from 'styled-components';
//
import TitleText from '../components/TitleText';
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
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  padding: ${spacing.sm};
  html {
    scroll-behaviour: smooth;
  }
`;

//
const ContactsPage = () => {
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText title='Contacts' />
      </div>

      <div className='row'>
        <div className='col-sm-4'>
          <ContactsTable contacts={tgaContacts} contactsTitle='TGA' />
        </div>

        <div className='col-sm-4'>
          <div className='row'>
            <div className='col mb-4'>
              <ContactsTable
                contacts={surveillanceSupContacts}
                contactsTitle='Surveillance Supervisors'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <ContactsTable
                contacts={surveillanceTechContacts}
                contactsTitle='Surveillance Technicians'
              />
            </div>
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
