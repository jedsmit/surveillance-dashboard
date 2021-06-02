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
  height: 100%;
  width: 100%;
  min-height: 100vh;
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

const CategoryTitle = styled.h3``;

const GcaKioskPage = () => {
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <div className='col'>
          <TitleText
            className='py-0 pl-4 text-left display-3'
            style={{ color: Colors.primaryTextColor }}
          >
            GCA/Kiosk
          </TitleText>
          <TitleText
            className='py-0 pl-4 text-left display-3'
            style={{ backgroundImage: Colors.blueGradient }}
          >
            Locations
          </TitleText>
        </div>
      </div>

      <div className='row'>
        <div className='col-4 '>
          <GCAKioskLocationTable machines={cxcMachines} title='CXC Machines' />
        </div>

        <div className='col-8 '>
          <div className='row '>
            <div className='col '>
              <GCAKioskLocationTable
                machines={atmMachines}
                title='ATM Machines'
              />
            </div>
            <div className='col'>
              <GCAKioskLocationTable
                machines={gpMachines}
                title='GP Machines'
              />
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <GCAKioskLocationTable
                machines={enrollmentKiosks}
                title='Enrollment Kiosks'
              />
            </div>

            <div className='col'>
              <GCAKioskLocationTable
                machines={fjpMachines}
                title='FJP Machines'
              />
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <GCAKioskLocationTable machines={jxcKiosks} title='JXC Kiosks' />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GcaKioskPage;
