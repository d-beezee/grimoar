import { ReactComponent as SignoutIcon } from "@src/components/icons/signout.svg";
import { Sidebar as SidebarComponent } from "@src/components/molecules/sidebar";
import { clearToken } from "@src/features/slices/auth";
import { ComponentProps } from "react";
import { useDispatch } from "react-redux";

type SidebarProps = ComponentProps<typeof SidebarComponent>;

const Sidebar = ({
  user,
  isOpen,
  setIsOpen,
}: {
  user: SidebarProps["user"];
  isOpen: SidebarProps["isOpen"];
  setIsOpen: SidebarProps["setIsOpen"];
}) => {
  const dispatch = useDispatch();
  return (
    <SidebarComponent
      user={user}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      items={[
        {
          key: "1",
          icon: "🏠",
          name: "Home",
          onClick: () => {
            alert("Home");
          },
        },
        {
          key: "2",
          icon: "📦",
          name: "Products",
          onClick: () => {
            alert("Products");
          },
        },
        {
          key: "sign-out",
          icon: <SignoutIcon />,
          name: "Sign Out",
          onClick: () => {
            dispatch(clearToken());
          },
        },
      ]}
    />
  );
};

export { Sidebar };
