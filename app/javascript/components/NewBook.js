import React from "react";

const AddBook = (props) => {
  return (
    <div>
      <h1>Add A New Book to {props.course.course_name}</h1>
      <form action={`/courses/${props.course.id}/books`} method="post">
        <p>Book Title</p>
        <textarea name="book[title]" />
        <p>Author</p>
        <input name="book[author]" />
        <p>Price</p>
        <input name="book[price]" />
        <br/>
        <button type="submit">Add Book</button>
      </form>

      {JSON.stringify(props)}
    </div>
  );
};

export default AddBook;