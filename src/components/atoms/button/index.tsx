import { Title } from "@src/components/typography";
import styled from "styled-components";

export const BUTTON_KINDS = ["primary", "secondary", "info", "danger"] as const;
export const BUTTON_SIZES = ["small", "medium"] as const;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Is this the principal call to action on the page? */
  kind?: (typeof BUTTON_KINDS)[number];
  /** How large should the button be? */
  size?: (typeof BUTTON_SIZES)[number];
  /** Custom icon */
  icon?: React.ReactNode;
  /** Optional click handler */
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
  cursor: pointer;
  border: 0;
  border-radius: 3em;
  width: 100%;
  ${({ disabled }) => (disabled ? `opacity: 0.5;cursor:not-allowed; ` : ``)}
  ${Title};
  ${({ icon }) => (icon ? `position:relative;` : ``)}

  ${({ kind, theme }) => {
    if (!kind) return ``;
    return `background-color: ${theme.colors[kind]};`;
  }}

  ${({ kind, theme }) => {
    if (!kind) return ``;
    if (["secondary", "danger", "info"].includes(kind)) {
      return `color: #fff;`;
    }
    if (["primary"].includes(kind)) {
      return `color: ${theme.typography.fontColor.primary};`;
    }
  }}


  ${({ size, icon }) => {
    switch (size) {
      case "small":
        return `
          padding: 6px 20px ;
          ${icon ? `padding-right: 40px;padding-left: 40px;` : ``}
          border-radius: 12px;
          `;
      case "medium":
        return `
          padding: 16px 20px;
          ${icon ? `padding-right: 40px;padding-left: 40px;` : ``}
          border-radius: 20px;
        `;
    }
  }}
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 20px;
  width: 20px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const Button = ({
  kind = "primary",
  size = "medium",
  icon,
  ...props
}: ButtonProps) => {
  const { children, ...rest } = props;

  return (
    <StyledButton kind={kind} size={size} icon={icon} {...rest}>
      {children}
      {icon ? <IconWrapper>{icon}</IconWrapper> : null}
    </StyledButton>
  );
};
