import React from 'react'
import styled from 'styled-components';
import { lighten, transparentize } from 'polished';

const ButtonStyle = styled.button`
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.secondary};
  color: ${({ bgColor }) =>
    bgColor && bgColor.toLowerCase() === '#ffffff' ? '#FE6F69' : 'white'};
  font-family: ${({ theme }) => theme.fonts.alegreya};
  font-size: ${({ theme }) => theme.size.doubleLarge};
  padding: 12px 47px;
  border: none;
  border-radius: ${({ borderRadiusMin, borderRadius, theme }) =>
    borderRadiusMin || borderRadius || theme.borderRadius.capsule};    
  cursor: pointer;
  position: relative;
  font-weight: bold;

  &.iconBtn {
    padding: 0;
    width: 65px;
    height: 65px;

    &::after {
      left: 10px;
    }
    &::before {
      left: 18px;
    }
  }

 &:hover {
    background-color: ${({ bgColor, theme }) =>
    lighten(0.1, bgColor || theme.colors.secondary)};
  }

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: ${({ bgColor, theme }) =>
    transparentize(0.75, bgColor || theme.colors.secondary)};
    left: 21px;
    top: 0;
    pointer-events: none;
    z-index: -1;
    border-radius: ${({ borderRadiusMin, borderRadius, theme }) =>
    borderRadiusMin || borderRadius || theme.borderRadius.capsule};  
  }

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: ${({ bgColor, theme }) =>
    transparentize(0.75, bgColor || theme.colors.secondary)};
    left: 40px;
    top: 0;
    pointer-events: none;
    z-index: -2;
    border-radius: ${({ borderRadiusMin, borderRadius, theme }) =>
    borderRadiusMin || borderRadius || theme.borderRadius.capsule};  
  }
    @media screen and (width <= 1366px){
      font-size: 18px;
      padding: 10px 30px;      
    }
`;

const Button = ({ buttonTitle, buttonIcon, borderRadius, borderRadiusMin, className, bgColor }) => {
  return (
    <ButtonStyle
      borderRadius={borderRadius}
      borderRadiusMin={borderRadiusMin}
      className={className}
      bgColor={bgColor}
    >
      {buttonTitle && <span>{buttonTitle}</span>}
      {buttonIcon && <span>{buttonIcon}</span>}
    </ButtonStyle>
  )
}

export default Button;
