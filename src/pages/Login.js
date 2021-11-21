import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">dabank</Icon>
          <FormContent>
            <Form action="/">
              <FormHeader>Sign in to your account</FormHeader>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit" required>
                Continue
              </FormButton>
              <Text to="/login">Forgot your password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-image: linear-gradient(#ff9d2f, #ff6126);
  bottom: 0;
  left: 0;
  min-height: 692px;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 0;
`;

const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

const Icon = styled(Link)`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  width: 0%;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const Form = styled.form`
  background: #010101;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  display: grid;
  height: auto;
  margin: 0 auto;
  max-width: 400px;
  padding: 80px 32px;
  width: 100%;
  z-index: 1;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

const FormHeader = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 40px;
  text-align: center;
`;

const FormLabel = styled.label`
  color: #fff;
  font-size: 14px;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  border: none;
  border-radius: 4px;
  margin-bottom: 32px;
  padding: 16px 16px;
`;

const FormButton = styled.button`
  background: #01bf71;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  padding: 16px 0;
`;

const Text = styled(Link)`
  color: #fff;
  font-size: 14px;
  margin-top: 24px;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export default Login;
