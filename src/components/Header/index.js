import React from 'react';
import styled from 'styled-components';
import LanguageSelector from '../LanguageSelector';
import Logo from '../Logo';

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem 2rem;
`;

const Nav = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  a {
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-left: 2rem;
    font-weight: 500;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SignInButton = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <Logo />
        <NavLinks>
          <a href="#pricing">Tarification</a>
          <a href="#blog">Blog</a>
        </NavLinks>
        <NavButtons>
          <LanguageSelector />
          <SignInButton href="https://pro.styly.io/accounts/login/">
            Se connecter
          </SignInButton>
        </NavButtons>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header; 