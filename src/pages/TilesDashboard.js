import React from 'react';
import styled from 'styled-components';
//
import TilesOrderOfOperations from '../components/TilesOrderOfOperations';
import BoChart from '../components/BoChart';
import CommissionCalculator from '../components/CommissionCalculator';
//
import Colors from '../constants/Colors';
import { spacing } from '../constants/Sizes';

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

//
const TilesDashboard = () => {
  const tiles = {
    geeJoon: [1, 2],
    teen: [1, 2],
    day: [1, 2],
    yun: [1, 2],
    ngo: [1, 2],
    mui: [1, 2],
    cheungSaam: [1, 2],
    banTant: [1, 2],
    fooTao: [1, 2],
    pingFung: [1, 2],
    kukoChut: [1, 2],
    lingLumLuk: [1, 2],
    chapGow: [1, 2],
    chapBaht: [1, 2],
    chapChut: [1, 2],
    chapNg: [1, 2],
  };

  return (
    <Container className='container-fluid'>
      <div className='row'>
        <TitleText
          className='py-0 pl-4 text-left display-3'
          style={{ color: Colors.primaryTextColor }}
        >
          Pai Gow Tiles
        </TitleText>
        <TitleText
          className='py-0 pl-4 text-left display-3'
          style={{ backgroundImage: Colors.blueGradient }}
        >
          Dashboard
        </TitleText>
      </div>

      <div className='row mx-auto'>
        <div className='col-sm-6'>
          <TilesOrderOfOperations />
        </div>
        <div className='col-sm-3'>
          <BoChart />
        </div>
        <div className='col-sm-3'>
          <CommissionCalculator />
        </div>
      </div>
    </Container>
  );
};

export default TilesDashboard;
