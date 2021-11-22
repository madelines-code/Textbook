import React from "react";

const EditBook = (props) => {
  return (
    <div>
      <h1>Edit Book Form for {props.course.course_name}</h1>
      <form
        action={`/courses/${props.course.id}/books/${props.book.id}`}
        method="post"
      >
        <input type="hidden" name="_method" value="patch" />
        <p>Book Title</p>
        <input defaultValue={props.book.title} name="book[title]" />
        <p>Author</p>
        <input defaultValue={props.book.author} name="book[author]" />
        <br/>
        <button type="submit">Edit Book</button>
      </form>

      {JSON.stringify(props)}
    </div>
  );
};

export default EditBook;