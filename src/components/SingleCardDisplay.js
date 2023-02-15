import React from 'react';
import styled from 'styled-components';
//

//styles
const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  width: 50%;
  height: 50%;
`;

const CardImage = styled.img`
  max-height: 400px;
`;

const SingleCardDisplay = ({ cardImage }) => {
  return (
    <MainContainer>
      <CardWrapper className='mx-auto container-fluid'>
        <CardImage src={cardImage}></CardImage>
      </CardWrapper>
    </MainContainer>
  );
};

export default SingleCardDisplay;
