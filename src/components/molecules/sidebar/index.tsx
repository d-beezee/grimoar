import { Avatar } from "@src/components/atoms/avatar";
import { MenuItem } from "@src/components/atoms/menuitem";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import LogoImage from "./assets/Logo.png";

const Wrapper = styled.div<{ isOpen: boolean }>`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background || "#1c0524"};
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 270px;
  position: fixed;
  z-index: 500;
  transition: transform 0.3s cubic-bezier(0.87, 0, 0.13, 1);
  ${({ isOpen }) =>
    isOpen ? "transform: translateX(0);" : "transform: translateX(-100%);"}
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`;

const Logo = styled.img`
  width: 100px;
  margin: 0 auto;
  position: absolute;
  bottom: 32px;
  left: 0;
  right: 0;
`;

Logo.defaultProps = {
  src: LogoImage,
  alt: "logo",
};

const Sidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <Wrapper ref={wrapperRef} slot="fixed" isOpen={isOpen}>
      <Avatar src="https://place-hold.it/100x100" size="large">
        james
      </Avatar>

      <Menu>
        <MenuItem icon="🏠">Home</MenuItem>
      </Menu>

      <Logo />
    </Wrapper>
  );
};

export { Sidebar };
