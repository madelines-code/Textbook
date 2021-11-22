import React from "react";

const Books = (props) => {
  const renderBooks = () => {
    return props.books.map((book) => {
      return (
        <div>
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <h4>{book.price}</h4>
          <p>Book ID: {book.id}</p>
          
          <a href={`/courses/${props.course.id}/books/${book.id}`}>View Book</a>
          <a href={`/courses/${props.course.id}/books/${book.id}/edit`}>Edit Book</a>
          <a data-method="delete" href={`/courses/${props.course.id}/books/${book.id}`}>
            Delete Book
          </a>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Course: {props.course.name}</h1>
      <p>Course ID: {props.course.id}</p>

      <a href={`/subjects/${props.course.subject_id}/courses`}>Back to Courses</a>
      <a href={`/items/${props.item.id}/comments/new`}>New Comment</a>
      <hr />
      <h2>Books: </h2>
      {renderBooks()}
      <p>{JSON.stringify(props)}</p>
    </div>
  );
};

export default Books;
