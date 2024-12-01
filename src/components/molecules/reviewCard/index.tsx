import { AvatarImage } from "@src/components/atoms/avatarImage";
import { BarCard } from "@src/components/atoms/barcard";
import { InfoSmall } from "@src/components/typography";
import styled from "styled-components";
import { Stars } from "../stars";

type ReviewCardProps = {
  vote?: number;
  user: {
    avatar: string;
  };
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .reviewWrapper {
    display: flex;

    ${({ theme }) => InfoSmall(theme)};
  }
`;

const ReviewCard = ({ vote, user }: ReviewCardProps) => {
  return (
    <BarCard>
      <Wrapper>
        <AvatarImage src={user.avatar} size="medium" />
        {vote && <div className="reviewWrapper">You’ve reviewed this film</div>}
        <Stars rating={vote || 0} />
      </Wrapper>
    </BarCard>
  );
};

export { ReviewCard };
