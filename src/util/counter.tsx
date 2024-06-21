import { useState } from 'react';

const Counter = () => {
  const [num, setNum] = useState<number>(0); //       / num은 메모리에 기억하고 있는 값  /  setNum은 num을 바꿔주는 함수 / n () 안에는 초기값

  const plusNum = () => {
    setNum((prev) => prev + 1);
  };

  const minusNum = () => {
    setNum((prev) => (prev == 0 ? (prev = 0) : prev - 1));
  };

  return (
    <>
      <button onClick={minusNum}>-</button>
      <span>{num}</span>
      <button onClick={plusNum}>+</button>
    </>
  );
};

export default Counter;

//  - 0 +
