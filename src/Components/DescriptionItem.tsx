import React from "react";
//Styled components
import styled from "styled-components";

type DescriptionItemProps = {
  item: string;
  description: string;
  className?: string;
  // Custom styles
  colorItem?: string;
  colorDescription?: string;
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
  --color-item: ${({ colorItem = "#000" }) => colorItem};
  --color-description: ${({ colorDescription = "#000" }) => colorDescription};

  list-style: none;
  span {
    color: var(--color-item);
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    margin-right: 8px;
  }

  color: var(--color-description);
  font-size: 12px;
  line-height: 15px;
`;

export default StyledDescriptionItem;
