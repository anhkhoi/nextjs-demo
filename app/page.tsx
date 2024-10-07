'use client';

import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { login } from './actions';
import React, { FormEvent } from 'react';

const Input = styled.input`
  border: 1px solid #ccc;
  margin-bottom: 15px;
  padding: 5px 10px;
  color: #555;
`;

const Label = styled.label`
  display: block;
`;

const Form = styled.form`
  margin: 30px
`;

const Heading = styled.h3`
  margin-left: 30px;
  margin-top: 15px;
  font-size: 30px;
`;

const Button = styled.button`
  border: 1px solid #ccc;
  padding: 5px 15px;
`;

const Login = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = React.useState(false);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsLogin(true);
      const formData = new FormData(event.currentTarget);
      const response = await fetch('/api/login', {
        method: 'POST',
        body: formData,
      });
      const json = await response.json();
      console.log('json', json);
      setIsLogin(false);
      alert(json.message);
    } catch (error) {
      console.log(error);
    }
    // router.push('/dashboard');
  };
  return (
    <div>
      <Heading>Login</Heading>
      <Form onSubmit={handleLogin}>
        <div>
          <Label htmlFor="username">Username</Label>
          <Input name="username" type="text" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input name="password" type="password" />
        </div>
        <Button type="submit" disabled={isLogin}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Login;
