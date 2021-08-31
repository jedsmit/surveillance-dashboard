import React from 'react';
import styled from 'styled-components';
//
import ContactsTable from '../components/ContactsTable';
import RadioCodeTable from '../components/RadioCodeTable';
import PhoneticAlphabetTable from '../components/PhoneticAlphabetTable';
//
import Colors from '../constants/Colors';
import { spacing } from '../constants/Sizes';
import { securityContacts } from '../data/contacts';
import { tenCodes, phoneticAlphabet } from '../data/radioCalls';
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

const CodesTitle = styled.h4``;

const ContactsContainer = styled.div`
  width: 100%;
`;

const CodesContainer = styled.div`
  width: 100%;
`;

const halfTenCodesLength = tenCodes.length / 2;
const leftTenCodes = tenCodes.slice(0, halfTenCodesLength);
const rightTenCodes = tenCodes.slice(halfTenCodesLength, tenCodes.length);

//
const SecurityDashboard = () => {
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText
          className='py-0 pl-4 display-3 text-left'
          style={{ color: Colors.primaryTextColor }}
        >
          Security
        </TitleText>
        <TitleText
          className='py-0 pl-4 display-3 text-left'
          style={{ backgroundImage: Colors.blueGradient }}
        >
          Dashboard
        </TitleText>

        <ContactsContainer className='container-fluid col-sm-3 col-xs-12'>
          <ContactsTable
            contacts={securityContacts}
            contactsTitle='Contacts'
            cell={false}
          />
        </ContactsContainer>

        <CodesContainer className='container-fluid col-sm-6 col-xs-12'>
          <CodesTitle className='text-center'>Ten Codes</CodesTitle>
          <div className='row'>
            <div className='col-5'>
              <RadioCodeTable data={leftTenCodes} />
            </div>

            <div className='col-7'>
              <RadioCodeTable data={rightTenCodes} />
            </div>
          </div>
        </CodesContainer>

        <CodesContainer className='container-fluid text-left col-sm-2 col-xs-12'>
          <CodesTitle className='text-center'>Phonetic Alphabets</CodesTitle>
          <PhoneticAlphabetTable data={phoneticAlphabet} />
        </CodesContainer>
      </div>
    </Container>
  );
};

export default SecurityDashboard;
