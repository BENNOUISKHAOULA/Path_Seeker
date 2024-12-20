import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { ClipLoader } from 'react-spinners';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Icons for toggling visibility

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #eaddff; // Light purple background color
    overflow: hidden;
  }
`;

const FullScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 450px;
  max-width: 90%;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const InputContainer = styled.div`
  position: relative;
  width: 80%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
`;

const Input = styled.input`
  padding: 12px 15px;
  padding-right: 40px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #f7f7f7;
  color: #333;
  font-size: 16px;

  &:focus {
    border-color: #EAD1FF; // An even lighter shade of purple
    box-shadow: 0 0 8px #EAD1FF; // Light lavender shadow to match
  }

  &::placeholder {
    color: #aaa;
  }
`;

const Icon = styled.button`
  position: absolute;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #ccc;
  cursor: pointer;
  outline = none;

  &:hover {
    color: #805ad5;
  }
    &:focus {
    outline: none;  
`;

const Button = styled.button`
  padding: 14px 20px;
  width: 100%;
  background-color: #805ad5;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6b46c1;
  }

  &:disabled {
    background-color: #ddd;
    color: #666;
  }
`;

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
      console.log("User signed up:", { email, password, firstName, lastName, phone });
      navigate("/dashboard"); // Redirect to a different page after signup
    }, 2000);
  };

  return (
    <>
      <GlobalStyle />
      <FullScreenContainer>
        <Form onSubmit={handleSignUp}>
          <Title>Sign Up</Title>
          <InputContainer>
            <Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Icon type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Icon>
          </InputContainer>
          <InputContainer>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Icon type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </Icon>
          </InputContainer>
          <InputContainer>
            <Input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </InputContainer>
          <Button type="submit" disabled={loading}>
            {loading ? <ClipLoader size={20} color={"#FFFFFF"} /> : "Sign Up"}
          </Button>
        </Form>
      </FullScreenContainer>
    </>
  );
};

export default SignUp;
