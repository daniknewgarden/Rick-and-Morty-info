import React, { useState, useEffect, useRef } from "react";
//Styled components
import styled from "styled-components";
import { useClickOutside } from "../Hooks/useClickOutside";
//Custom scrollbar
import { Scrollbars } from "react-custom-scrollbars";

type DropdownProps = {
  ariaLabel: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  listItems: any;
  className?: string;
  // Custom styles
  radiusSize?: string;
  colorInput?: string;
  colorSubtitle?: string;
  colorShadow?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  onChange,
  listItems,
  className,
  ariaLabel,
}) => {
  const [opened, setOpened] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (): void => {
    setOpened(!opened);
  };

  //useClickOutside hook, see docs https://github.com/daniknewgarden/amazing-react-hooks#useclickoutside-
  useClickOutside({ ref: menuRef, callback: toggleMenu, enabled: opened });

  useEffect(() => {
    opened ? console.log("Menu opened") : console.log("Menu closed");
  }, [opened]);

  return (
    <div
      className={`${className} ${opened ? "opened" : "closed"}`}
      ref={menuRef}
    >
      <input
        type="search"
        placeholder="Search"
        onChange={onChange}
        onFocus={toggleMenu}
        aria-label={ariaLabel}
      />
      {opened && (
        <Scrollbars style={{ height: 150 }}>
          <div className="menu">
            <ul>{listItems}</ul>
          </div>
        </Scrollbars>
      )}
    </div>
  );
};

//Styles
const StyledDropdown = styled(Dropdown)`
  --size-radius: ${({ radiusSize = "8px" }) => radiusSize};
  --color-input: ${({ colorInput = "#f2f2f5" }) => colorInput};
  --color-subtitle: ${({ colorSubtitle = "#8e90a6" }) => colorSubtitle};
  --color-shadow: ${({ colorShadow = "rgba(40, 41, 61, 0.04)" }) =>
    colorShadow};

  display: grid;
  padding: 4px;
  border-radius: var(--size-radius);

  &.opened {
    box-shadow: 0px 0px 10px 2px var(--color-shadow);
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
    ul {
      margin: 0;
      padding: 0;

      display grid;
      grid-gap: 10px;
    }
  }
`;

export default StyledDropdown;
