import { useRef } from "react";

function UseStateExample() {
  const ref = useRef(0); // Initialize with useState
  const a = 5;

  function increment() {
    console.log(ref.current);
    ref.current++;
  }

  return (
    <div>
      <h2>Current Count is: {ref.current}</h2> {/* Updates the UI */}
      <h2>a is: {a}</h2>
      <button onClick={increment}>Click Me!</button>
    </div>
  );
}

export default UseStateExample;