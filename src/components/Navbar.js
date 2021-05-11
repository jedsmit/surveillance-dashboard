import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
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
  color: ${Colors.purpleTextColor};
  :hover {
    text-decoration: none;
    color: ${Colors.backgroundColor};
  }
`;
//
const Navbar = () => {
  return (
    <NavContainer className='navbar sticky-top justify-content-end'>
      <NavbarText className='login-text' as={Link} to={'./dashboard'}>
        Login <i className='fas fa-sign-in-alt login-icon'></i>
      </NavbarText>
    </NavContainer>
  );
};

export default Navbar;
