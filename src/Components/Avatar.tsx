import React from "react";
//Styled components
import styled from "styled-components";

type AvatarProps = {
  image?: string;
  name: string;
  subtitle: string;
  className?: string;
};

const Avatar: React.FC<AvatarProps> = ({
  image,
  name,
  subtitle,
  className,
}) => {
  return (
    <div className={className}>
      {image && <img alt={`${name} avatar`} src={image} />}
      <h2>{name}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

const StyledAvatar = styled(Avatar)`
  --color-title: #000000;
  --color-subtitle: #8e90a6;
  --color-border: #ebebf0;
  --size-avatar: 80px;

  padding: 24px;

  h2,
  p {
    margin: 0;
  }

  img {
    width: var(--size-avatar);
    height: var(--size-avatar);
    border: 2px solid var(--color-border);
    border-radius: 50%;
  }

  h2 {
    color: var(--color-title);
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
  }

  p {
    color: var(--color-subtitle);
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }
`;

export default StyledAvatar;
