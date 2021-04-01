import React from 'react';
import Colors from '../constants/Colors';
import styled from 'styled-components';
import {
  cxcMachines,
  atmMachines,
  jxcKiosks,
  enrollmentKiosks,
  fjpMachines,
  gpMachines,
} from '../data/gcaKioskLocations';
import GCAKioskLocationTable from '../components/GCAKioskLocationTable';

//styled-components
const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 1em;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  font-size: 1em;
`;

const TitleText = styled.h1`
  fontsize: 5em;
  margin: 0;
  padding: 10px;
`;

const CategoryTitle = styled.h3`
  padding-top: 1em;
`;

const GcaKioskPage = () => {
  return (
    <Container>
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
