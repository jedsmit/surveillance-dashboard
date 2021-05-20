import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from '../auth/firebase';
//
import Colors from '../constants/Colors';
import { spacing, fontSizes } from '../constants/Sizes';
//
const Input = styled.div``;
const Button = styled.button``;
//

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  justify-content: center;
`;
//
const SignInForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // const signUp = e => {
  //   e.preventDefault();
  //   auth
  //     .createUserWithEmailAndPassword(
  //       emailRef.current.value,
  //       passwordRef.current.value
  //     )
  //     .then(user => {
  //       console.log(user);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  const signIn = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(user => {
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Container>
      <form>
        <Input>
          email <input ref={emailRef} type='email' />
        </Input>
        <Input>
          password <input ref={passwordRef} type='password' />
        </Input>
        <Button onClick={signIn}>Sign In</Button>
        <h6>Not registered? Check your email for access inoformation.</h6>
      </form>
    </Container>
  );
};

export default SignInForm;
