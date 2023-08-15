import { useState } from "react";
import "./Counter.scss";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counter">
      <button
        className="counter__arrow counter__arrow--left"
        onClick={handleDecrement}
      >
        -
      </button>
      <p className="counter__result">{counter}</p>
      <button
        className="counter__arrow counter__arrow--right"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
