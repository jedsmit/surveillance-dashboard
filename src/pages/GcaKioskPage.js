import React from 'react';
import styled from 'styled-components';
//
import TitleText from '../components/TitleText';
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

const CategoryTitle = styled.h3``;

const GcaKioskPage = () => {
  return (
    <Container className='container-fluid'>
      <div className='row'>
        <div className='col'>
          <TitleText title='GCA/Kiosk' subtitle='Locations' />
        </div>
      </div>

      <div className='row'>
        <div className='col-5'>
          <GCAKioskLocationTable machines={cxcMachines} title='CXC Machines' />
        </div>

        <div className='col'>
          <div className='row '>
            <div className='col'>
              <GCAKioskLocationTable
                machines={atmMachines}
                title='ATM Machines'
              />
            </div>
            <div className='col'>
              <GCAKioskLocationTable
                machines={enrollmentKiosks}
                title='Enrollment Kiosks'
              />
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <GCAKioskLocationTable
                machines={gpMachines}
                title='GP Machines'
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
            <div className='col-6'>
              <GCAKioskLocationTable machines={jxcKiosks} title='JXC Kiosks' />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GcaKioskPage;
