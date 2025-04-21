import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoSVG } from '../../assets/logo.svg';

const LogoWrapper = styled.div`
  a {
    display: flex;
    align-items: center;
  }

  svg {
    height: 32px;
    width: auto;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <a href="/">
        <LogoSVG />
      </a>
    </LogoWrapper>
  );
};

export default Logo; 