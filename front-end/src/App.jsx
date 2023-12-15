import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Favorite authors</h1>
      <Outlet />
    </>
  );
}

export default App;
