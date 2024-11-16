import { Button } from "@src/components/atoms/button";
import { Input } from "@src/components/atoms/input";
import { Title } from "@src/components/typography";
import { useState } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  margin: 0;
  text-align: center;
  ${Title}
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
`;

export interface SignupProps {
  onSignup?: (email: string, password: string) => Promise<void>;
}

export const Signup = ({ onSignup, ...props }: SignupProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Wrapper>
      <H1>Signup</H1>
      <Input label="Email" onChange={(e) => setEmail(e.target.value)} />
      <Input
        label="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div style={{ margin: "0 20px" }}>
        <Button
          kind="secondary"
          size="small"
          onClick={() => onSignup && onSignup(email, password)}
        >
          Signup
        </Button>
      </div>
    </Wrapper>
  );
};
