import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AwardBadge } from '../../assets/award-badge.svg';

const HeroSection = styled.section`
  padding-top: 120px;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const WelcomeBadge = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.purple} 0%, ${({ theme }) => theme.colors.purpleLight} 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 100px;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  line-height: 1.1;
  margin-bottom: 2rem;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 3rem;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 700;
`;

const PurpleText = styled.span`
  color: ${({ theme }) => theme.colors.purple};
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.125rem;
    padding: 0 1rem;
    br {
      display: none;
    }
  }
`;

const BoldText = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 600;
`;

const BadgeWrapper = styled.div`
  margin: 2rem 0;
`;

const CTAButton = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1.125rem;
  display: inline-block;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const Stats = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  margin-top: 2rem;
`;

const Hero = () => {
  return (
    <HeroSection>
      <WelcomeBadge>
        Bienvenue dans le Futur du Design
      </WelcomeBadge>
      
      <Title>
        <Highlight>#1</Highlight> outil de design IA
        <br />le plus utilisé pour les
        <br /><PurpleText>espaces modernes</PurpleText>
      </Title>
      
      <Description>
        Redesignez des pièces vides en intérieurs stylés et prêts pour le marché —
        <br />pour l'immobilier, la rénovation et le retail. <BoldText>Pas d'outils, pas de téléchargements. Juste des résultats.</BoldText>
      </Description>

      <BadgeWrapper>
        <AwardBadge />
      </BadgeWrapper>

      <CTAButton href="#upload">
        Télécharger une photo pour commencer
      </CTAButton>

      <Stats>
        Soutenant plus de 20 000+ professionnels de l'immobilier, designers et propriétaires
      </Stats>
    </HeroSection>
  );
};

export default Hero; 