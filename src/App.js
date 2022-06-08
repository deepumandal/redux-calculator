import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const [querry, setquerry] = useState();

  /// usedispatch is used for updating data
  /// useSelecter is used for reading data
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
 

  return (
    <div className="App">
      <h2> Redux calculater</h2>
      <header className="App-header">
        <h2> counter : {state.count} </h2>

        <input type={"text"} onChange={(e) => setquerry(e.target.value)} />
        <div>
          <button onClick={() => dispatch({ type: "decrement" })}>
            {" "}
            Decrement{" "}
          </button>{" "}
          <button onClick={() => dispatch({ type: "increment" })}>
            {" "}
            Increment{" "}
          </button>
        </div>
        <div>
          <button onClick={() => dispatch({ type: "Add", value: querry })}>
            Add
          </button>{" "}
          <button onClick={() => dispatch({ type: "Multiply", value: querry })}>
            Multiply
          </button>
        </div>
        <div>
          <button onClick={() => dispatch({ type: "Subtract", value: querry })}>
            Subtract
          </button>{" "}
          <button onClick={() => dispatch({ type: "Divide", value: querry })}>
            Divide
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
