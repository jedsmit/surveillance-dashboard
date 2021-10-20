import React from 'react';
import styled from 'styled-components';
//
import TitleText from '../components/TitleText';
import ContactsTable from '../components/ContactsTable';
//
import Colors from '../constants/Colors';
import { spacing } from '../constants/Sizes';
import { slotContacts } from '../data/contacts';
//styled-components
const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  justify-content: center;
  padding: ${spacing.sm};
`;

const ContactsContainer = styled.div`
  width: 100%;
`;

//
const SlotsDashboard = () => {
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText title='Slots' />
        <ContactsContainer className='col-sm-4 col-xs-12'>
          <ContactsTable
            contacts={slotContacts}
            contactsTitle='Contacts'
            cell={false}
          />
        </ContactsContainer>
      </div>
    </Container>
  );
};

export default SlotsDashboard;
