import React from "react";

const Course = (props) => {
  
  const renderCourse = () => {
    return (
      <div>
        <h1>Course View</h1>
        <a href={`/subjects/${props.course.subject_id}/courses`}>Back</a>
        <p>Course AltID: {props.course.id}</p>
        <p>Subject ID: {props.course.subject_id}</p>
        <p>Subject Name: {props.subject.subject}</p>
        <div>
          <p>Course Name: {props.course.course_name}</p>
          <p>Course Code: ${props.course.course_code}</p>
          {/* <a href={`/subjects/${props.subject.id}/courses/${course.id}/edit`}>Edit Course</a> */}
          <a data-method="delete" href={`/subjects/${props.subject.id}/courses/${props.course.id}`}>
              Delete Course</a>
        </div>

        
      </div>
    );
  }; 

  const renderBooks = () => {
    return props.books.map((book) => {
      return (
        <div>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          {/* <p>Comment ID: {comment.id}</p> */}
          
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
    {renderCourse()}
    <h1>Textbooks {props.course.course_name}:</h1>
    {renderBooks()}
    <h6><code>{JSON.stringify(props)}</code></h6>
    </div>
  )
};

export default Course;

