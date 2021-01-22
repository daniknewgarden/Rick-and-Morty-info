import React from "react";
//Styled components
import styled, { css } from "styled-components";

//Component
export type TitleProps = {
  text: string;
  // Custom styles
  className?: string;
  big?: boolean;
  color?: string;
};

const Title: React.FC<TitleProps> = ({ text, className }) => (
  <h1 className={className}>{text}</h1>
);

//Styles
const sizes = {
  default: css`
    font-size: 50px;
    font-weight: 400;
  `,
  big: css`
    font-size: 64px;
    font-weight: 700;
  `,
};

const StyledTitle = styled(Title)`
  ${({ big = false }) => (big ? sizes["big"] : sizes["default"])}

  --color-text: ${({ color = "#000" }) => color};

  color: var(--color-text);

  text-align: center;
`;

export default StyledTitle;
