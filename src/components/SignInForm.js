import React, { useRef } from 'react';
import styled from 'styled-components';
import { auth } from '../auth/firebase';
//
import Colors from '../constants/Colors';
import { spacing, fontSizes } from '../constants/Sizes';
//
const Input = styled.div`
  margin: ${spacing.xxs};
`;
const Button = styled.button`
  margin: ${spacing.xxs};
`;
const Form = styled.form`
  padding-top: ${spacing.xl};
  padding-right: ${spacing.xxl};
  justify-content: center;
`;
//

const Container = styled.div`
  font-size: ${fontSizes.sm};
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
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
    <Container className='container-fluid'>
      <Form className=''>
        <Input>
          email <input ref={emailRef} type='email' />
        </Input>
        <Input>
          password <input ref={passwordRef} type='password' />
        </Input>
        <Button onClick={signIn}>Sign In</Button>
        <h6>Not registered? Email Jed for help.</h6>
      </Form>
    </Container>
  );
};

export default SignInForm;
