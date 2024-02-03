import React from "react";

const List = () => {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 1, name: "orange", calories: 100 },
    { id: 1, name: "banana", calories: 40 },
    { id: 1, name: "cocunat", calories: 37 },
  ];
  fruits.sort();

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}:&nbsp;{fruit.calories}
    </li>
  ));
  return (
    <div>
      <ol>{listItems}</ol>
    </div>
  );
};

export default List;
