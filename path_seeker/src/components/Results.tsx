import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f4ff;
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
  min-height: 100vh;
  width: 100vw;
  padding: 20px;
  background: linear-gradient(180deg, #eaddff, #d4bbff);
`;

const ResultsCard = styled.div`
  animation: ${fadeIn} 0.5s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: linear-gradient(145deg, #ffffff, #d4bbff);
  border-radius: 25px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  max-width: 800px;
  width: 100%;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 28px;
  color: #3b3054;
  text-align: center;
`;

const UniversityList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const UniversityItem = styled.li`
  background: #ffffff;
  color: #3b3054;
  font-size: 20px;
  padding: 20px;
  margin: 10px 0;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Button = styled.button`
  padding: 15px 30px;
  margin-top: 30px;
  background-color: #805ad5;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 18px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #6b46c1;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Results: React.FC = () => {
  const navigate = useNavigate();

  // Static data for demonstration purposes
  const universities = [
    {
      name: "University of Technology",
      type: "Public",
      location: "Casablanca",
      fieldsOfStudy: ["Engineering", "Computer Science"],
      contact: "contact@uot.ma",
      website: "https://www.uot.ma",
    },
    {
      name: "National Institute of Science",
      type: "Private",
      location: "Rabat",
      fieldsOfStudy: ["Medicine", "Biology"],
      contact: "info@nis.ma",
      website: "https://www.nis.ma",
    },
    {
      name: "Global Business School",
      type: "Private",
      location: "Marrakech",
      fieldsOfStudy: ["Business", "Finance"],
      contact: "admissions@gbs.ma",
      website: "https://www.gbs.ma",
    },
  ];

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <ResultsCard>
          <Title>Recommended Universities</Title>
          <UniversityList>
            {universities.map((university, index) => (
              <UniversityItem key={index}>
                <strong>Name:</strong> {university.name} <br />
                <strong>Type:</strong> {university.type} <br />
                <strong>Location:</strong> {university.location} <br />
                <strong>Fields of Study:</strong> {university.fieldsOfStudy.join(', ')} <br />
                <strong>Contact:</strong> {university.contact || 'N/A'} <br />
                <strong>Website:</strong> <a href={university.website} target="_blank" rel="noreferrer">{university.website}</a>
              </UniversityItem>
            ))}
          </UniversityList>
          <Button onClick={handleRestart}>Restart</Button>
        </ResultsCard>
      </Container>
    </>
  );
};

export default Results;
