import React from "react";

const Button = () => {
  const handlClick = () => {
    console.log("OUH!");
  };

  const handlClick2 = (name) => {
    console.log(`${name} stop clicking me`);
  };

  return <button onClick={() => handlClick2("Njan")}>Click ME😀</button>;
};

export default Button;
