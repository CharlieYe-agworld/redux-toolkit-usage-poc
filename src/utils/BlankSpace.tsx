import React from 'react';
import styled from 'styled-components';

type BlankSpaceProps = {
  rem: number,
  horizontal?: boolean,
}

const StyledVerticalBlankSpace = styled.div<BlankSpaceProps>`
  margin-top: ${props => props.rem}rem;
`;

const StyledHorizontalBlankSpace = styled.div<BlankSpaceProps>`
  display: inline-block;
  padding-left: ${props => props.rem}rem;
`;


const BlankSpace = ({rem, horizontal}: BlankSpaceProps) => {
  return horizontal
      ? <StyledHorizontalBlankSpace rem={rem || 1}/>
      : <StyledVerticalBlankSpace rem={rem || 1}/>;
};

export default BlankSpace;

