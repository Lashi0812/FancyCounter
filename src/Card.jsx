import Counter from "./Counter";
import ButtonContainer from "./ButtonContainer";
import ResetButton from "./ResetButton";
import Title from "./Title";
import "./index.css";
import { useEffect, useState } from "react";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Space") {
        const newCount = count + 1;
        if (newCount > 5) {
          setCount(5);
          return;
        }
        setCount(newCount);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Counter count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer locked={locked} setCount={setCount} />
    </div>
  );
}
