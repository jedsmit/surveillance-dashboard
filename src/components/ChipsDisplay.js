import React from 'react';
import styled from 'styled-components';
//
import { spacing } from '../constants/Sizes';
import oneChip from '../assets/1Chip.png';
import fiveChip from '../assets/5Chip.png';
import twentyFiveChip from '../assets/25Chip.png';
import oneHundredChip from '../assets/100Chip.png';
import fiveHundredChip from '../assets/500Chip.png';
import oneKChip from '../assets/1kChip.png';
import fiveKChip from '../assets/5kChip.png';

//styled-components
const Container = styled.div`
  width: 100%;
  color: black;
  padding: ${spacing.xxs};
  font-weight: bold;
  background-color: white;
  height: 100%;
`;
const Title = styled.h4`
  font-weight: bold;
`;
const ChipsDisplay = () => {
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <Title className='text-center'>Value Chips</Title>
        </div>
      </div>
      <div className='container-fluid pl-5 pr-0'>
        <div className='row'>
          <div className='col-6'>
            <img
              className='img-fluid'
              src={oneChip}
              alt='One dollar chip'
            ></img>
          </div>
          <div className='col-6'>
            <img
              className='img-fluid'
              src={fiveChip}
              alt='Five dollar chip'
            ></img>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <img
              className='img-fluid'
              src={twentyFiveChip}
              alt='Twenty five dollar chip'
            ></img>
          </div>
          <div className='col-6'>
            <img
              className='img-fluid'
              src={oneHundredChip}
              alt='One hundred dollar chip'
            ></img>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <img
              className='img-fluid'
              src={fiveHundredChip}
              alt='Five hundred dollar chip'
            ></img>
          </div>
          <div className='col-6'>
            <img
              className='img-fluid'
              src={oneKChip}
              alt='One thousand dollar chip'
            ></img>
          </div>
          <div className='row'>
            <div className='col-12 offset-8'>
              <img
                className='img-fluid'
                src={fiveKChip}
                alt='Five thousand dollar chip'
              ></img>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ChipsDisplay;
