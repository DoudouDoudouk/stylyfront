import React, { useState } from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  position: relative;
`;

const Select = styled.select`
  appearance: none;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 0.75rem 2rem 0.75rem 1rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(255, 92, 53, 0.1);
  }
`;

const Arrow = styled.span`
  position: absolute;
  right: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.8rem;
`;

const LanguageSelector = () => {
  const [language, setLanguage] = useState('fr');

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    setLanguage(newLang);
    // In a real app, this would trigger language change in the app
    document.documentElement.lang = newLang;
  };

  return (
    <SelectWrapper>
      <Select
        value={language}
        onChange={handleLanguageChange}
        aria-label="Choisir la langue"
      >
        <option value="fr">Français</option>
        <option value="en">English</option>
      </Select>
      <Arrow>▼</Arrow>
    </SelectWrapper>
  );
};

export default LanguageSelector; 