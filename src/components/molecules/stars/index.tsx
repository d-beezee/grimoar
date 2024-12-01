import { StarIcon } from "@src/components/atoms/starIcon";

const Stars = ({
  rating,
  onClick,
}: {
  rating: number;
  onClick?: (rating: number) => Promise<void>;
}) => {
  return (
    <div style={{ display: "flex" }}>
      <StarIcon
        onClick={onClick ? () => onClick(1) : undefined}
        active={rating > 0}
      />
      <StarIcon
        onClick={onClick ? () => onClick(2) : undefined}
        active={rating > 1}
      />
      <StarIcon
        onClick={onClick ? () => onClick(3) : undefined}
        active={rating > 2}
      />
      <StarIcon
        onClick={onClick ? () => onClick(4) : undefined}
        active={rating > 3}
      />
      <StarIcon
        onClick={onClick ? () => onClick(5) : undefined}
        active={rating > 4}
      />
    </div>
  );
};

export { Stars };
