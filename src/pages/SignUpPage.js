import React, { useRef } from 'react';
import { auth } from '../auth/firebase';
import styled from 'styled-components';
//
import Colors from '../constants/Colors';
//
const Input = styled.div``;
const Button = styled.button``;

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: ${Colors.backgroundColor};
  color: ${Colors.primaryTextColor};
  justify-content: center;
`;
//
const SignUpPage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signUp = e => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
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
    <div>
      <Container>
        <form>
          <Input>
            email <input ref={emailRef} type='email' />
          </Input>
          <Input>
            password <input ref={passwordRef} type='password' />
          </Input>
          <Button onClick={signUp}>Sign Up</Button>
        </form>
      </Container>
    </div>
  );
};

export default SignUpPage;
