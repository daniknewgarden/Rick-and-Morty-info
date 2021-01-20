import React from "react";
//styled components
import styled, { css } from "styled-components";

//Component
type SubtitleProps = {
  text: string;
  // Custom styles
  className?: string;
  size?: "big" | "small";
  color?: string;
};

const Subtitle: React.FC<SubtitleProps> = ({ text, className }) => (
  <h2 className={className}>{text}</h2>
);

//Styles
const sizes = {
  big: css`
    font-size: 16px;
  `,
  small: css`
    font-size: 14px;
  `,
};

const StyledSubtitle = styled(Subtitle)`
  ${({ size = "big" }) => sizes[size]}

  --color-text: ${({ color = "#555770" }) => color};

  color: var(--color-text);

  text-align: center;
  font-weight: 400;
  line-height: 24px;
`;

export default StyledSubtitle;
