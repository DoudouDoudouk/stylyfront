import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 6rem 0;
  background: ${props => props.theme.colors.surface};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin-bottom: 4rem;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

const Step = styled.div`
  text-align: center;
  padding: 2rem;
  background: ${props => props.theme.colors.background};
  border-radius: 1rem;
  
  h3 {
    color: ${props => props.theme.colors.primary};
    margin: 1rem 0;
  }
  
  p {
    color: ${props => props.theme.colors.text};
  }
`;

const HowItWorks = () => {
  const steps = [
    {
      title: "Create",
      description: "Design your virtual fashion show or XR experience with our intuitive AI tools"
    },
    {
      title: "Customize",
      description: "Add your brand elements and customize every detail to match your vision"
    },
    {
      title: "Share",
      description: "Share your immersive experience with the world in just one click"
    }
  ];

  return (
    <StyledSection>
      <Container>
        <Title>How It Works</Title>
        <StepsGrid>
          {steps.map((step, index) => (
            <Step key={index}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Step>
          ))}
        </StepsGrid>
      </Container>
    </StyledSection>
  );
};

export default HowItWorks; 