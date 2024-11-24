import { Button } from "@src/components/atoms/button";
import { Input } from "@src/components/atoms/input";
import { Title, TitleSmall } from "@src/components/typography";
import { useState } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  margin: 0;
  text-align: center;

  ${({ theme }) => Title(theme)}
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const ForgotPasswordWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  ${({ theme }) => TitleSmall(theme)}
  cursor: pointer;
`;

export interface SigninProps {
  onSignin?: (email: string, password: string) => Promise<void>;
  onForgotPassword?: (email: string) => void;
  disabled?: boolean;
}

export const Signin = ({
  onSignin,
  onForgotPassword,
  disabled,
}: SigninProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Wrapper>
        <Form>
          <H1>Signin</H1>
          <Input label="Email" onChange={(e) => setEmail(e.target.value)} />
          <Input
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form>
        <ForgotPasswordWrapper
          onClick={() => onForgotPassword && onForgotPassword(email)}
        >
          Forgot Password?
        </ForgotPasswordWrapper>
      </Wrapper>
      <div style={{ margin: "0 20px" }}>
        <Button
          kind="secondary"
          size="small"
          disabled={disabled}
          onClick={() => onSignin && onSignin(email, password)}
        >
          Sign In
        </Button>
      </div>
    </Container>
  );
};
