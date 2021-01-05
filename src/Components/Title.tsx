import React from "react";
//Styled components
import styled, { css } from "styled-components";

type TitleProps = {
  text: string;
  className?: string;
  size?: "small" | "big";
};

const Title: React.FC<TitleProps> = ({ text, className }) => (
  <h1 className={className}>{text}</h1>
);

const sizes = {
  small: css`
    font-size: 50px;
    font-weight: 400;
  `,
  big: css`
    font-size: 64px;
    font-weight: 700;
  `,
};

const StyledTitle = styled(Title)`
  ${({ size = "big" }) => sizes[size]}

  text-align: center;
`;

export default StyledTitle;
