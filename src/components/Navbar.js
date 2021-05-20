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
  justify-self: end;
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
    <NavContainer className='navbar sticky-top justify-content-end'>
      {user ? (
        <NavbarText
          className='login-text'
          onClick={() => auth.signOut()}
          as={Link}
          to={'/'}
        >
          Sign out <i className='fas fa-sign-in-alt login-icon'></i>
        </NavbarText>
      ) : null}
    </NavContainer>
  );
};

export default Navbar;
