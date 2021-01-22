import React from "react";
//Styled components
import styled from "styled-components";

export type DropdownItemProps = {
  title: string;
  subtitle: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  //Custom styles
  className?: string;
  colorTitle?: string;
  colorSubtitle?: string;
};

const DropdownItem: React.FC<DropdownItemProps> = ({
  title = "Dropdown item",
  subtitle = "Subtitle",
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
  --color-text: ${({ colorTitle = "#000" }) => colorTitle};
  --color-subtitle: ${({ colorSubtitle = "#8e90a6" }) => colorSubtitle};

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
