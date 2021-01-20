import React from "react";
//styled components
import styled, { css } from "styled-components";

type ButtonProps = {
  callBack: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text?: string;
  ariaLabel?: string;
  // Custom styles
  className?: string;
  size?: "big" | "small";
  rounded?: boolean;
  transparent?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  ariaLabel,
  className,
  callBack,
}) => (
  <button onClick={callBack} className={className} aria-label={ariaLabel}>
    {text}
  </button>
);

//Styles
const sizes = {
  big: css`
    font-size: 16px;
    line-height: 24px;

    padding: 12px 24px;
  `,
  small: css`
    font-size: 14px;
    line-height: 22px;

    padding: 8px 16px;
  `,
};

const corners = {
  rounded: css`
    border-radius: 100px;
  `,
  default: css`
    border-radius: 4px;
  `,
};

const background = {
  transparent: css`
    background: transparent;
    color: var(--color-accent);
    border: 2px solid var(--color-accent);
  `,
  filed: css`
    background: var(--color-accent);
    color: var(--color-text);
    border: none;

    &:focus {
      box-shadow: 0 0 0 2px var(--color-border);
    }
  `,
};

const StyledButton = styled(Button)`
  --color-accent: #3366ff;
  --color-border: #6690ff;

  --color-text: #fff;

  font-weight: 500;

  &:hover {
    --color-accent: #6690ff;
  }

  &:active,
  &:focus {
    --color-accent: #254eda;
    outline: none;
  }

  &:disabled {
    --color-accent: #e3e4eb;
  }

  ${({ size = "small" }) => sizes[size]}

  ${({ rounded = false }) =>
    rounded ? corners["rounded"] : corners["default"]}

  ${({ transparent = false }) =>
    transparent ? background["transparent"] : background["filed"]}
`;

export default StyledButton;
