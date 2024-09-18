import Counter from "./Counter";
import CounterButtons from "./CounterButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";

function App() {
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

export default App;
