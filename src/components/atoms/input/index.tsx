import { ReactComponent as EyeIcon } from "@src/components/icons/octicon_eye-24.svg";
import { ReactComponent as EyeClosedIcon } from "@src/components/icons/octicon_eye-closed-24.svg";
import { Text, TitleSmall } from "@src/components/typography";
import { useState } from "react";
import styled, { useTheme } from "styled-components";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isInvalid?: boolean;
}

const StyledInput = styled.input<{ color: string }>`
  padding: 0px 12px;
  min-height: 44px;
  border-radius: 12px;
  border: 1px solid ${({ color }) => color};
  width: 100%;
  background-color: transparent;
  ${({ theme }) => Text(theme)}

  &:focus {
    outline: none;
    border-color: ${({ color }) => color};
    box-shadow: 0 0 4px 0 ${({ color }) => color};
  }
`;

const PasswordWrapper = styled.div`
  position: relative;
  display: flex;

  ${StyledInput} {
    padding-right: 40px;
  }

  .icon {
    position: absolute;
    right: 10px;
    width: 20px;
    height: 100%;
    display: flex;
    top: 0;
    align-items: center;
  }
`;

const Label = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .title {
    display: block;
    ${({ theme }) => TitleSmall(theme)}
  }
`;

const TextInput = ({ ...props }: InputProps & { color: string }) => {
  return <StyledInput {...props} type="text" />;
};

const PasswordInput = ({ ...props }: InputProps & { color: string }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <PasswordWrapper>
      <StyledInput {...props} type={showPassword ? "text" : "password"} />
      <span className="icon" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <EyeClosedIcon /> : <EyeIcon />}
      </span>
    </PasswordWrapper>
  );
};

const InputComponent = ({ isInvalid, label, type, ...props }: InputProps) => {
  const theme = useTheme();
  const color = isInvalid ? theme.colors.danger : theme.colors.secondary;

  if (type === "password") {
    return <PasswordInput color={color} {...props} />;
  }

  return <TextInput color={color} {...props} />;
};

export const Input = ({ label, ...props }: InputProps) => {
  if (label) {
    return (
      <Label>
        <span className="title">{label}</span>
        <InputComponent {...props} />
      </Label>
    );
  }

  return <InputComponent {...props} />;
};
