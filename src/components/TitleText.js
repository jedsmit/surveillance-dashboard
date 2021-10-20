import React from 'react';
import styled from 'styled-components';
//
import Colors from '../constants/Colors';
import { spacing, fontSizes } from '../constants/Sizes';
//styled components
const SectionTitle = styled.h1`
  width: 100%;
  background: ${Colors.backgroundColor};
  color: ${Colors.backgroundColor};
`;

const TitleText = ({ title, subtitle }) => {
  return (
    <>
      <SectionTitle
        className='py-0 pl-4 text-left display-3'
        style={{ color: Colors.primaryTextColor }}
      >
        {title}
      </SectionTitle>
      <SectionTitle
        className='py-0 pl-4 text-left display-3'
        style={{ backgroundImage: Colors.blueGradient }}
      >
        {!subtitle ? 'Dashboard' : subtitle}
      </SectionTitle>
    </>
  );
};

export default TitleText;
