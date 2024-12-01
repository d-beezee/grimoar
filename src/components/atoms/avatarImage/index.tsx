import styled from "styled-components";

export const AVATAR_SIZES = ["medium", "large"] as const;

const ImageWrapper = styled.img<{ size: (typeof AVATAR_SIZES)[number] }>`
  border-radius: 50%;

  ${({ size }) => {
    switch (size) {
      case "large":
        return `
            width: 70px;
            height: 70px;
        `;
      default:
        return `
            width: 30px;
            height: 30px;
        `;
    }
  }}
`;

const AvatarImage = ({
  src,
  size = "medium",
}: {
  src: string;
  size?: (typeof AVATAR_SIZES)[number];
}) => {
  return <ImageWrapper size={size} src={src} />;
};

export { AvatarImage };
