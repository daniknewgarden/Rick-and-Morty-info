import React from "react";
//styled components
import styled, { css } from "styled-components";

type SubtitleProps = {
  text: string;
  className?: string;
  size?: "big" | "small";
};

const Subtitle: React.FC<SubtitleProps> = ({ text, className }) => (
  <h2 className={className}>{text}</h2>
);

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

  text-align: center;
  font-weight: 400;
  line-height: 24px;
`;

export default StyledSubtitle;
