import { useState } from "react";

export function CountCats() {
  const [catsCount, setCatsCount] = useState(1);

  const getCats = () => {
    const cats = [];
    for (let i = 0; i < catsCount; i++) {
      cats.push("🐈 ");
    }
    return cats;
  };

  const incrementCats = () => {
    setCatsCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h2>useState</h2>

      <p>{getCats()}</p>

      <button onClick={incrementCats}>There are {catsCount} cats 🥳</button>
    </>
  );
}
