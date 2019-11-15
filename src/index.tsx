import * as React from "react";
import * as ReactDOM from "react-dom";
import { Header } from "./header";
import CustomDate from "./customDate";
import Books from "./books";

let bookTitles: Array<string> = [
  "Harry Porter",
  "Rich Dad Poor Dad",
  "Cracking the coding interview"
];

ReactDOM.render(
  <div>
    <Header text="You're the best" />
    <CustomDate />
    <Books books={bookTitles} />
    <p>Paragraph</p>
    <a href="#">click me</a>
  </div>,
  document.querySelector("#root")
);
