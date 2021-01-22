import React from "react";
//styled components
import styled, { css } from "styled-components";

//Component
export type SubtitleProps = {
  text: string;
  // Custom styles
  className?: string;
  big?: boolean;
  color?: string;
};

const Subtitle: React.FC<SubtitleProps> = ({
  text = "Subtitle",
  className,
}) => <h2 className={className}>{text}</h2>;

//Styles
const sizes = {
  big: css`
    font-size: 16px;
  `,
  default: css`
    font-size: 14px;
  `,
};

const StyledSubtitle = styled(Subtitle)`
  ${({ big = false }) => (big ? sizes["big"] : sizes["default"])}

  --color-text: ${({ color = "#555770" }) => color};

  color: var(--color-text);

  text-align: center;
  font-weight: 400;
  line-height: 24px;
`;

export default StyledSubtitle;
