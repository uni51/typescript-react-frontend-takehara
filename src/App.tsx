import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { type } from "os";

const name = "hello";

let nameChange = "hello";
nameChange = "hello2";

let username = "Hello";
let dmmyNum: number = 2;
let bool: boolean = true;

let array1 = [true, false, true];
let array2 = [0, 1, "hello"];

interface NAME {
  first: string;
  last: string | null;
}

let nameObj: NAME = { first: "Yamada", last: null };

const func1 = (x: number, y: number): number => {
  return x + y;
};

// Intersection Types（指定された型をすべて満たす型）
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyyy",
};

// Union Types
let value: boolean | number;
value = true;
value = 10;

// 配列の要素の型を指定
let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "hello"];

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
