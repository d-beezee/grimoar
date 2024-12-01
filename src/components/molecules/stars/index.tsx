import { StarIcon } from "@src/components/atoms/starIcon";

const Stars = ({ rating }: { rating: number }) => {
  return (
    <div style={{ display: "flex" }}>
      <StarIcon active={rating > 0} />
      <StarIcon active={rating > 1} />
      <StarIcon active={rating > 2} />
      <StarIcon active={rating > 3} />
      <StarIcon active={rating > 4} />
    </div>
  );
};

export { Stars };
