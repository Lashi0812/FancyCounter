import Counter from "./Counter";
import CounterButtons from "./CounterButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
  return (
    <main>
      <div>
        <Title />
        <Counter />
        <ResetButton />
        <CounterButtons />
      </div>
    </main>
  );
}
