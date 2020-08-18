import React, { useState } from "react";
import { useCounter } from "./testingfolder";

export default function Example() {
  const { count, increment, decrement } = useCounter();
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Click me</button>
      <button onClick={decrement}>Click me</button>
    </div>
  );
}
