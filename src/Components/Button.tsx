import React from "react";
//styled components
import styled, { css } from "styled-components";

export type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  ariaLabel: string;
  // Custom styles
  className?: string;
  big?: boolean;
  rounded?: boolean;
  transparent?: boolean;
  disabled?: boolean;
  // Colors
  colorText?: string;
  colorMain?: string;
  colorHover?: string;
  colorFocus?: string;
  colorOutline?: string;
  colorDisabled?: string;
};

const Button: React.FC<ButtonProps> = ({
  text = "Button",
  ariaLabel = "Click button",
  className,
  disabled,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={className}
    aria-label={ariaLabel}
    disabled={disabled}
  >
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
  default: css`
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
    color: var(--color);
    border: 2px solid var(--color);

    &:focus {
      --color: var(--color-hover);
    }
  `,
  filed: css`
    background: var(--color);
    color: var(--color-text);
    border: none;

    &:focus {
      box-shadow: 0 0 0 2px var(--color-outline);
    }
  `,
};

// ${({  = '' }) => }

const StyledButton = styled(Button)`
  --color-main: ${({ colorMain = "#3366ff" }) => colorMain};
  --color-hover: ${({ colorHover = "#6690FF" }) => colorHover};
  --color-focus: ${({ colorFocus = "#254EDA" }) => colorFocus};
  --color-outline: ${({ colorOutline = "#6690FF" }) => colorOutline};
  --color-disabled: ${({ colorDisabled = "#E3E4EB" }) => colorDisabled};
  --color-text: ${({ colorText = "#fff" }) => colorText};

  --color: var(--color-main);

  &:hover {
    --color: var(--color-hover);
  }
  &:focus,
  &:active {
    outline: none;
    --color: var(--color-focus);
  }
  &:disabled {
    --color: var(--color-disabled);
  }

  font-weight: 500;

  ${({ big = false }) => (big ? sizes["big"] : sizes["default"])}

  ${({ rounded = false }) =>
    rounded ? corners["rounded"] : corners["default"]}

  ${({ transparent = false }) =>
    transparent ? background["transparent"] : background["filed"]}
`;

export default StyledButton;
