import React from "react";
//Styled components
import styled from "styled-components";

type DescriptionItemProps = {
  item: string;
  description: string;
  className?: string;
};

const DescriptionItem: React.FC<DescriptionItemProps> = ({
  item,
  description,
  className,
}) => {
  return (
    <li className={className}>
      <span>{item}:</span>
      {description}
    </li>
  );
};

const StyledDescriptionItem = styled(DescriptionItem)`
  list-style: none;

  span {
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    margin-right: 8px;
  }

  font-size: 12px;
  line-height: 15px;
`;

export default StyledDescriptionItem;
