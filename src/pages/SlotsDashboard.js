import React from 'react';
import styled from 'styled-components';
//
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

const TitleText = styled.h1`
  width: 100%;
  background: ${Colors.backgroundColor};
  color: ${Colors.backgroundColor};
`;

const ContactsContainer = styled.div`
  width: 100%;
`;

//
const SlotsDashboard = () => {
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText
          className='py-0 pl-4 display-3 text-left'
          style={{ color: Colors.primaryTextColor }}
        >
          Slots
        </TitleText>
        <TitleText
          className='py-0 pl-4 display-3 text-left'
          style={{ backgroundImage: Colors.blueGradient }}
        >
          Dashboard
        </TitleText>
        <ContactsContainer className='col-sm-4 col-xs-12'>
          <ContactsTable
            contacts={slotContacts}
            contactsTitle='Contacts'
            cell={true}
          />
        </ContactsContainer>
      </div>
    </Container>
  );
};

export default SlotsDashboard;
