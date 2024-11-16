import { Text, TitleSmall } from "@src/components/typography";
import styled, { useTheme } from "styled-components";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isInvalid?: boolean;
}

const StyledInput = styled.input<{ color: string }>`
  padding: 6px 12px;
  border-radius: 12px;
  border: 1px solid ${({ color }) => color};
  ${Text}

  &:focus {
    outline: none;
    border-color: ${({ color }) => color};
    box-shadow: 0 0 4px 0 ${({ color }) => color};
  }
`;

const Label = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .title {
    display: block;
    ${TitleSmall}
  }
`;

export const Input = ({ isInvalid, label, ...props }: InputProps) => {
  const theme = useTheme();
  const color = isInvalid ? theme.colors.danger : theme.colors.secondary;

  const input = <StyledInput color={color} {...props} />;

  if (label) {
    return (
      <Label>
        <span className="title">{label}</span>
        {input}
      </Label>
    );
  }

  return input;
};
