import React from "react";
import Person from "./Person";

function NameList(props) {
  const names = ["Bruce", "Clark", "Diana"];
  const personList = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React"
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular"
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue"
    }
  ];
  const nameList = names.map(person => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}

export default NameList;
