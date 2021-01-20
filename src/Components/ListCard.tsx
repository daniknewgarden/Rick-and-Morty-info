import React from "react";
//Styled components
import styled from "styled-components";
//Custom scrollbar
import { Scrollbars } from "react-custom-scrollbars";

type ListCardProps = {
  title: string;
  listItems: Array<React.ReactElement>;
  className?: string;
  // Custom styles
  radiusSize?: string;
  colorText?: string;
  colorItem?: string;
  colorBorder?: string;
};

const ListCard: React.FC<ListCardProps> = ({ title, className, listItems }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <Scrollbars style={{ height: 184 }}>
        <ul>{listItems}</ul>
      </Scrollbars>
    </div>
  );
};

const StyledListCard = styled(ListCard)`
  --color-text: ${({ colorText = "#000000" }) => colorText};
  --color-item: ${({ colorItem = "#555770" }) => colorItem};
  --color-border: ${({ colorBorder = "#e3e4eb" }) => colorBorder};
  --size-radius: ${({ radiusSize = "16px" }) => radiusSize};

  text-align: left;
  padding: 40px;
  border: 2px solid var(--color-border);
  border-radius: var(--size-radius);

  h2 {
    margin: 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    color: var(--color-text);
  }

  ul {
    padding: 0;
    margin-left: 18px;
  }

  li {
    text-align: left;
    font-size: 16px;
    line-height: 150%;
    color: var(--color-item);
  }
`;

export default StyledListCard;
