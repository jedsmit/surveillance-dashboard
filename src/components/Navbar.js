import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from '../auth/firebase';

//
import Colors from '../constants/Colors';
//styled-components
const NavContainer = styled.div`
color: ${Colors.primaryTextColor}
height: 10vh;   
width: 100vw;
background: ${Colors.darkestBackground};
`;

const NavbarText = styled.h3`
  margin: 0;
  font-size: 1.5em;
  width: auto;
  text-decoration: none;
  color: ${Colors.primaryTextColor};
  :hover {
    text-decoration: none;
    color: ${Colors.primaryColor};
  }
`;
//
const Navbar = ({ user }) => {
  return (
    <NavContainer className='navbar sticky-top'>
      {user ? (
        <div className='row w-100 p-2'>
          <div className='col-6 text-left'>
            {' '}
            <NavbarText as={Link} to={'/'}>
              <i className='fas fa-home login-icon'></i> Go Home
            </NavbarText>
          </div>
          <div className='col-6 text-right'>
            <NavbarText
              className='login-text'
              onClick={() => auth.signOut()}
              as={Link}
              to={'/'}
            >
              Sign out <i className='fas fa-sign-in-alt login-icon'></i>
            </NavbarText>
          </div>
        </div>
      ) : null}
    </NavContainer>
  );
};

export default Navbar;
