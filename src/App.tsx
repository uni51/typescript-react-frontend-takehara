import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Data from "./data.json";
import { type } from "os";

type USERS = typeof Data;

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

// 配列の要素のデータ型を指定
let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "hello"];

let company: "Facebook" | "Google" | "Amazon";
company = "Amazon";
// company = "Apple"; // エラーになる

let memory: 256 | 512;
memory = 512;
// memory = 12; // エラーになる

// typeof
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "Hello";
// msg2 = 1;  // エラーになる

let animal = { cat: "small cat" };
let newAnimal: typeof animal = { cat: "big cat" };

// keyof
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";

// typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let KeySports: keyof typeof SPORTS;
KeySports = "soccer";

// enum
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OSType: OS;
}
const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};

const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
};

// 型の互換性
const comp1 = "test";
let comp2: string = comp1;

let comp3: string = "test";
// let comp4: "test" = comp3; // エラーになる

let funcComp1 = (x: number) => {};
let funcComp2 = (x: string) => {};

// funcComp1 = funcComp2; // エラーになる
// funcComp2 = funcComp1; // エラーになる

// Generics ジェネリクス
interface GEN<T> {
  item: T;
}
const gen0: GEN<string> = { item: "hello" };
// const gen1: GEN = { item: "hello" }; // エラーになる
const gen2: GEN<number> = { item: 12 };

// デフォルトの型を指定
interface GEN1<T = string> {
  item: T;
}
const gen3: GEN1 = { item: "hello" };

interface GEN2<T extends string | number> {
  item: T;
}
const gen4: GEN2<string> = { item: "hello" };
// const gen4: GEN2<boolean> = { item: true }; // エラーになる

function funcGen<T>(props: T) {
  return { item: props };
}
const gen6 = funcGen<string>("test");
// const gen6 = funcGen("test"); // 関数の場合は、明示的に指定しなくても型推論をしてくれる
const gen7 = funcGen<string | null>(null);

function funcGen1<T extends string | null>(props: T) {
  return { value: props };
}
const gen8 = funcGen1("hello");
// const gen9 = funcGen1(123); // エラーになる

interface Props {
  price: number;
}
function funcGen3<T extends Props>(props: T) {
  return { value: props.price };
}
const gen10 = funcGen3({ price: 123 });

const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price };
};

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
