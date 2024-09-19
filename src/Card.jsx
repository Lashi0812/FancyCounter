import Counter from "./Counter";
import CounterButtons from "./CounterButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";
import "./index.css";

export default function Card() {
  return (
      <div className="card">
        <Title />
        <Counter />
        <ResetButton />
        <CounterButtons />
      </div>
  );
}
