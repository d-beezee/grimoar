import { ICON_TYPES, StarIcon } from "@src/components/atoms/starIcon";

const Star = ({
  intRating,
  decRating,
  value,
  onClick,
  kind = "star",
}: {
  intRating: number;
  decRating: number;
  value: number;
  onClick?: (rating: number) => Promise<void>;
  kind?: (typeof ICON_TYPES)[number];
}) => {
  return (
    <StarIcon
      kind={kind}
      active={
        intRating > value - 1 || (intRating === value - 1 && decRating > 0)
      }
      percent={intRating === value - 1 ? decRating : undefined}
      onClick={onClick ? () => onClick(value) : undefined}
    />
  );
};

const Stars = ({
  rating,
  onClick,
  kind = "star",
}: {
  rating: number;
  onClick?: (rating: number) => Promise<void>;
  kind?: (typeof ICON_TYPES)[number];
}) => {
  const intRating = Math.trunc(rating);
  const decRating = (rating - intRating) * 100;
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      <Star
        kind={kind}
        intRating={intRating}
        decRating={decRating}
        value={1}
        onClick={onClick}
      />
      <Star
        kind={kind}
        intRating={intRating}
        decRating={decRating}
        value={2}
        onClick={onClick}
      />
      <Star
        kind={kind}
        intRating={intRating}
        decRating={decRating}
        value={3}
        onClick={onClick}
      />
      <Star
        kind={kind}
        intRating={intRating}
        decRating={decRating}
        value={4}
        onClick={onClick}
      />
      <Star
        kind={kind}
        intRating={intRating}
        decRating={decRating}
        value={5}
        onClick={onClick}
      />
    </div>
  );
};

export { Stars };
