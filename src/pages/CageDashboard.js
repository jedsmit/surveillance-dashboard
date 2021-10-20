import React from 'react';
import styled from 'styled-components';
//

//
import Colors from '../constants/Colors';
import { spacing, fontSizes } from '../constants/Sizes';
import { cageContacts } from '../data/contacts';
//
import TitleText from '../components/TitleText';
import ContactsTable from '../components/ContactsTable';
import ChipsDisplay from '../components/ChipsDisplay';

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

const CageDashboard = () => {
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText title='Cage' />
      </div>
      <div className='row'>
        <div className='col-4-sm'>
          <ContactsTable
            contacts={cageContacts}
            contactsTitle='Cage Contacts'
            cell={false}
          />
        </div>
        <div className='col-4-sm'>
          <ChipsDisplay />
        </div>
      </div>
    </Container>
  );
};

export default CageDashboard;
