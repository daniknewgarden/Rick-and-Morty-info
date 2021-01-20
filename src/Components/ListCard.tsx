import React from "react";
//Styled components
import styled from "styled-components";
//Custom scrollbar
import { Scrollbars } from "react-custom-scrollbars";

type ListCardProps = {
  title: string;
  listItems: Array<React.ReactElement>;
  className?: string;
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
  --color-text: #000000;
  --color-item: #555770;
  --color-border: #e3e4eb;
  --size-radius: 16px;

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
