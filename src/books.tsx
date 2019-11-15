import * as React from "react";

//passing the list of books as a props
type bookTitleProps = {
  books: Array<string>;
};

function Books(props: bookTitleProps) {
  //loop through the book titles and print out to the screen using map
  return (
    <ul>
      {props.books.map((value, index) => {
        return (
          <li style={{ color: "red" }} key={index}>
            {value}
          </li>
        );
      })}
    </ul>
  );
}

//for debugging purpose
Books.displayName = "Books";
export default Books;
