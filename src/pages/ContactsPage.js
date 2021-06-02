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
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  justify-content: center;
  padding: ${spacing.sm};
`;

const TitleText = styled.h1`
  width: 100%;
  font-size: ${fontSizes.xxl};
  background: ${Colors.backgroundColor};
  color: ${Colors.backgroundColor};
`;

//
const ContactsPage = () => {
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText
          className='py-0 pl-4 text-left'
          style={{ color: Colors.primaryTextColor }}
        >
          TGA
        </TitleText>
        <TitleText
          className='py-0 pl-4 text-left'
          style={{ backgroundImage: Colors.blueGradient }}
        >
          Contacts
        </TitleText>
      </div>

      <div className='row'>
        <div className='col-sm-4'>
          <ContactsTable contacts={tgaContacts} contactsTitle='TGA' />
        </div>

        <div className='col-sm-4'>
          <div className='row'>
            <div className='col'>
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
