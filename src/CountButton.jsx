import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, setCount, locked }) {
  const handleClick = (event) => {
    if (type === "minus") {
      setCount((prev) => {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      });
    } else {
      setCount((prev) => {
        const newCount = prev + 1;
        if (newCount > 5) {
          return 5;
        }
        return newCount;
      });
    }

    event.currentTarget.blur();
  };
  return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
