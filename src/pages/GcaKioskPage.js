import React from 'react';
import styled from 'styled-components';
//
import GCAKioskLocationTable from '../components/GCAKioskLocationTable';
//
import {
  cxcMachines,
  atmMachines,
  jxcKiosks,
  enrollmentKiosks,
  fjpMachines,
  gpMachines,
} from '../data/gcaKioskLocations';
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
`;

const TitleText = styled.h1`
  margin: 0;
  padding: ${spacing.xxs};
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
`;

const CategoryTitle = styled.h3``;

const GcaKioskPage = () => {
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <div className='col'>
          <TitleText>GCA/Kiosk Locations</TitleText>
        </div>
      </div>

      <div className='row'>
        {/* cxc machines */}

        <div className='col justify-content-center'>
          <div className='row'>
            <div className='col'>
              <CategoryTitle>CXC Machines</CategoryTitle>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <GCAKioskLocationTable machines={cxcMachines} />
            </div>
          </div>
        </div>

        {/* atm machines */}
        <div className='col justify-content-center'>
          <div className='row'>
            <div className='col'>
              <CategoryTitle>ATM Machines</CategoryTitle>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <GCAKioskLocationTable machines={atmMachines} />
            </div>
          </div>

          {/*  promotional kiosks*/}

          <div className='row'>
            <div className='col'>
              <CategoryTitle>JXC Kiosks</CategoryTitle>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <GCAKioskLocationTable machines={jxcKiosks} />
            </div>
          </div>

          {/* enrollment kiosks */}

          <div className='row'>
            <div className='col'>
              <CategoryTitle>Enrollment Kiosks</CategoryTitle>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <GCAKioskLocationTable machines={enrollmentKiosks} />
            </div>
          </div>

          {/* fjp kiosks */}
          <div className='row'>
            <div className='col'>
              <CategoryTitle>FJP/Coin Banks</CategoryTitle>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <GCAKioskLocationTable machines={fjpMachines} />
            </div>
          </div>

          {/* gp machines */}
          <div className='row'>
            <div className='col'>
              <CategoryTitle>GP Machines</CategoryTitle>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <GCAKioskLocationTable machines={gpMachines} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GcaKioskPage;
