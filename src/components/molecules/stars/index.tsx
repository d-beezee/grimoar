import { StarIcon } from "@src/components/atoms/starIcon";

const Star = ({
  intRating,
  decRating,
  value,
}: {
  intRating: number;
  decRating: number;
  value: number;
}) => {
  return (
    <StarIcon
      active={
        intRating > value - 1 || (intRating === value - 1 && decRating > 0)
      }
      percent={intRating === value - 1 ? decRating : undefined}
    />
  );
};

const Stars = ({
  rating,
  onClick,
}: {
  rating: number;
  onClick?: (rating: number) => Promise<void>;
}) => {
  const intRating = Math.trunc(rating);
  const decRating = (rating - intRating) * 100;
  return (
    <div style={{ display: "flex" }}>
      <Star intRating={intRating} decRating={decRating} value={1} />
      <Star intRating={intRating} decRating={decRating} value={2} />
      <Star intRating={intRating} decRating={decRating} value={3} />
      <Star intRating={intRating} decRating={decRating} value={4} />
      <Star intRating={intRating} decRating={decRating} value={5} />
    </div>
  );
};

export { Stars };
