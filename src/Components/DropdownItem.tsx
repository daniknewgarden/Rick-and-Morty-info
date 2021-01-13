import React from "react";
//Styled components
import styled from "styled-components";

type DropdownItemProps = {
  title: string;
  subtitle: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

const DropdownItem: React.FC<DropdownItemProps> = ({
  title,
  subtitle,
  onClick,
  className,
}) => {
  return (
    <li className={className}>
      <button onClick={onClick}>
        {title}
        <span className="subtitle">{subtitle}</span>
      </button>
    </li>
  );
};

const StyledDropdownItem = styled(DropdownItem)`
  --color-text: #000;

  list-style: none;

  button {
    width: 100%;
    background: transparent;
    border: none;

    display: inline-flex;
    justify-content: space-between;

    font-size: 16px;
    line-height: 150%;
    color: var(--color-text);

    opacity: 0.8;

    .subtitle {
      font-size: 14px;
      color: var(--color-subtitle);
    }

    &:focus {
      outline: none;
      opacity: 1;
    }
  }
`;

export default StyledDropdownItem;
