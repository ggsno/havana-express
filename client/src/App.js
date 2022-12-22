import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>ppap</h1>
      <div>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>click me</button>
      </div>
    </>
  );
}

export default App;
