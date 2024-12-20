import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif; // Modern, clean font
    margin: 0;
    padding: 0;
    background-color: #eaddff; // Updated to a light purple background color
    overflow: hidden;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const Form = styled.div`
  animation: ${fadeIn} 0.5s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background: linear-gradient(145deg, #ffffff, #dbb2ff); // Maintains the form gradient
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  width: 450px;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 26px;
  color: #1a202c;
`;

const QuestionText = styled.p`
  font-size: 18px;
  color: #4a5568;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 15px 20px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.06);
  background: #f4eaff; // Subtle purple background for input fields
  color: #543b62; // Darker purple text for contrast
  font-size: 18px;
  &::placeholder {
    color: #b0a4cc; // Lighter purple for placeholders
  }
`;

const Button = styled.button`
  padding: 15px 20px;
  width: 100%;
  background-color: #805ad5; // Stylish purple
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6b46c1; // Darker purple on hover
  }
`;

const Questions: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const questions = [
    "What is your favorite subject?",
    "What type of career interests you?",
    "Do you prefer technical or theoretical studies?",
  ];

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAnswers = { ...answers, [questions[currentQuestionIndex]]: e.target.value };
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("User answers:", answers);
      navigate("/results", { state: { answers } });
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Form>
          <Title>Questions</Title>
          <QuestionText>{questions[currentQuestionIndex]}</QuestionText>
          <Input
            type="text"
            placeholder="Type your answer here..."
            value={answers[questions[currentQuestionIndex]] || ''}
            onChange={handleAnswerChange}
            onKeyPress={(e) => e.key === 'Enter' && handleNextQuestion()}
          />
          <Button onClick={handleNextQuestion}>Next</Button>
        </Form>
      </Container>
    </>
  );
};

export default Questions;
