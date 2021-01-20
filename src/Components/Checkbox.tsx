import React from "react";
//Styled components
import styled from "styled-components";

type CheckBoxProps = {
  onCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  text: string;
  //Default states
  disabled?: boolean;
  defaultChecked?: true;
  // Custom styles
  className?: string;
  colorDefault?: string;
  colorHover?: string;
  colorChecked?: string;
  colorDisabled?: string;
};

const Checkbox: React.FunctionComponent<CheckBoxProps> = ({
  name,
  text,
  onCheck,
  className,
  defaultChecked,
  disabled,
}) => (
  <label htmlFor={name} className={className}>
    <input
      type="checkbox"
      name={name}
      id={name}
      onChange={onCheck}
      value={text}
      checked={defaultChecked}
      disabled={disabled}
    />
    {text}
  </label>
);

//Styles
const StyledCheckbox = styled(Checkbox)`
  display: grid;
  grid-template: auto / 16px 1fr;
  grid-gap: 14px;
  place-items: center start;

  font-size: 16px;
  line-height: 150%;

  input {
    margin: 0;
    width: 16px;
    height: 16px;
    appearance: none;

    &::before {
      content: "";
      display: inline-grid;
      width: 100%;
      height: 100%;

      border-radius: 2px;
    }

    --color-main: ${({ colorDefault = "#555770" }) => colorDefault};

    &::before {
      box-shadow: 0 0 0 2px var(--color-main);
    }

    &:hover {
      --color-main: ${({ colorHover = "#6690ff" }) => colorHover};
    }

    &:focus {
      outline: none;
      --color-main: ${({ colorChecked = "#254eda" }) => colorChecked};
      &:checked {
        --color-main: ${({ colorHover = "#6690ff" }) => colorHover};
      }
    }

    &:disabled {
      --color-main: ${({ colorDisabled = "#e3e4eb" }) => colorDisabled};

      &:hover,
      &:checked {
        --color-main: ${({ colorDisabled = "#e3e4eb" }) => colorDisabled};
      }
    }

    &:checked {
      --color-main: ${({ colorChecked = "#254eda" }) => colorChecked};
      &::before {
        background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M3.82918 8.73562C3.73372 8.83164 3.60349 8.88521 3.46821 8.88521C3.33292 8.88521 3.20269 8.83164 3.10723 8.73562L0.224382 5.85231C-0.0747942 5.55313 -0.0747942 5.068 0.224382 4.76938L0.585358 4.40831C0.884628 4.10914 1.3692 4.10914 1.66838 4.40831L3.46821 6.20823L8.3316 1.34474C8.63087 1.04557 9.11591 1.04557 9.41462 1.34474L9.7756 1.70581C10.0748 2.00499 10.0748 2.49003 9.7756 2.78874L3.82918 8.73562Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='10' height='10' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: center;
        background-color: var(--color-main);
      }
    }
  }
`;

export default StyledCheckbox;
