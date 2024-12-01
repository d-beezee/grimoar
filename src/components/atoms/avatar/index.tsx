import { Info, InfoSmall } from "@src/components/typography";
import React from "react";
import styled from "styled-components";
import { AVATAR_SIZES, AvatarImage } from "../avatarImage";

export const AVATAR_ALIGN = ["left", "right"] as const;

const Wrapper = styled.div<{ size: (typeof AVATAR_SIZES)[number] }>`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 4px;
  justify-content: space-between;

  ${({ size, theme }) => {
    switch (size) {
      case "large":
        return `color: #fff;`;
      default:
        return `color: ${theme.typography.fontColor.secondary};`;
    }
  }}

  ${({ size, theme }) => {
    switch (size) {
      case "large":
        return Info(theme);
      default:
        return InfoSmall(theme);
    }
  }}
`;

const Avatar = ({
  src,
  children,
  size = "medium",
  align = "left",
}: {
  src: string;
  children: React.ReactNode;
  size?: (typeof AVATAR_SIZES)[number];
  align?: (typeof AVATAR_ALIGN)[number];
}) => {
  const Image = <AvatarImage src={src} size={size} />;
  return (
    <Wrapper size={size}>
      {align === "left" ? Image : children}
      {align === "right" ? Image : children}
    </Wrapper>
  );
};

export { Avatar };
