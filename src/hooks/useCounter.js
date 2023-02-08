import { useEffect, useState } from "react";

export const useCounter = (symbol) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => eval(`${prev}${symbol}1`));
    }, 1000);

    return () => clearInterval(interval);
  }, [symbol]);

  return {
    number,
  };
};
