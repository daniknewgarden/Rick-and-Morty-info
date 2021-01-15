import React, { useState, useEffect } from "react";
//Styled components
import styled from "styled-components";

type DropdownProps = {
  ariaLabel: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  listItems: any;
  className?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  onChange,
  listItems,
  className,
  ariaLabel,
}) => {
  const [opened, setOpened] = useState<boolean>(false);

  const openMenu = (): void => {
    setOpened(true);
  };

  useEffect(() => {
    opened ? console.log("Menu opened") : console.log("Menu closed");
  }, [opened]);

  return (
    <div className={`${className} ${opened ? "opened" : "closed"}`}>
      <input
        type="search"
        placeholder="Search"
        onChange={onChange}
        onFocus={openMenu}
        aria-label={ariaLabel}
      />
      {opened && (
        <div className="menu">
          <ul>{listItems}</ul>
        </div>
      )}
    </div>
  );
};

//Styles
const StyledDropdown = styled(Dropdown)`
  --size-radius: 8px;
  --color-input: #f2f2f5;
  --color-subtitle: #8e90a6;

  display: grid;
  padding: 4px;
  border-radius: var(--size-radius);

  &.opened {
    box-shadow: 0px 0px 10px 2px rgba(40, 41, 61, 0.04);
  }

  input {
    border: none;
    padding: 8px 9px;
    font-size: 16px;
    line-height: 150%;

    background: var(--color-input);
    border-radius: var(--size-radius);

    &::placeholder {
      color: var(--color-subtitle);
    }

    &:focus {
      outline: none;
    }
  }

  .menu {
    padding: 8px 11px;
    max-height: 150px;
    overflow: auto;
    ul {
      margin: 0;
      padding: 0;

      display grid;
      grid-gap: 10px;
    }
  }
`;

export default StyledDropdown;
