import Counter from "./Counter";
import ButtonContainer from "./ButtonContainer";
import ResetButton from "./ResetButton";
import Title from "./Title";
import "./index.css";
import { useState } from "react";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Counter count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer locked={locked} setCount={setCount} />
    </div>
  );
}
