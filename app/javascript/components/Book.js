import React from "react";

const Book = (props) => {
  return (
    <div>
      <h1>Book View</h1>
      <a href={`/courses/${props.course.course_id}/books`}>Back</a>
      <p>Book ID: {props.book.id}</p>
      <p>Course ID: {props.book.course_id}</p>
      <p>Course Name: {props.course.course_name}</p>
      <div>
        <p>Book Title: {props.book.title}</p>
        <p>Author: {props.book.author}</p>
        <p>Price: ${props.book.price}</p>
        <a data-method="delete" href={`/courses/${props.course.id}/books/${props.book.id}`}>
            Delete Book</a>
        <a href={`/courses/${props.course.id}/books/${props.book.id}/edit`}>
        Edit Book</a>
      </div>

      <code>{JSON.stringify(props)}</code>
    </div>
  );
};

export default Book;