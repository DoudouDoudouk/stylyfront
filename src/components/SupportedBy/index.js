import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 4rem 0;
  background: ${props => props.theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  align-items: center;
`;

const SupportedBy = () => {
  return (
    <StyledSection>
      <Container>
        <Title>Supported By</Title>
        <LogoGrid>
          {/* Add partner logos here */}
        </LogoGrid>
      </Container>
    </StyledSection>
  );
};

export default SupportedBy; 