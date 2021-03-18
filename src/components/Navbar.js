import React from 'react';
import { Link } from 'react-router-dom';
import Colors from '../constants/Colors';
import styled from 'styled-components';

//styled-components
const NavContainer = styled.div`
display: grid;
grid-template-columns: 95% 5%;
grid-template-rows: auto;
grid-template-areas: 
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
    color: ${Colors.accentColor};
  }
`;

const Navbar = () => {
  return (
    <NavContainer className='navbar sticky-top'>
      <NavbarText className='login-text' as={Link} to={'./dashboard'}>
        Login <i className='fas fa-sign-in-alt login-icon'></i>
      </NavbarText>
    </NavContainer>
  );
};

export default Navbar;
