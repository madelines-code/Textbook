import React from "react";

const Courses = (props) => {
  const renderCourses = () => {
    return props.courses.map((course) => {
      return (
        <div>
          <h2>{course.course_name}</h2>
          <h3>{course.course_code}</h3>
          <p>Course AltID: {course.id}</p>
          
          <a href={`/subjects/${props.subject.id}/courses/${course.id}`}>Course Details</a>
          <a href={`/subjects/${props.subject.id}/courses/${course.id}/edit`}>Edit Course</a>
          <a data-method="delete" href={`/subjects/${props.subject.id}/courses/${course.id}`}>
            Delete Course
          </a>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Subject: {props.subject.subject}</h1>
      <p>Subject ID: {props.subject.id}</p>

      <a href={`/subjects`}>Back to Subjects</a>
      <a href={`/subjects/${props.subject.id}/courses/new`}>New Course</a>
      <hr />
      <h2>Courses: </h2>
      {renderCourses()}
      <p>{JSON.stringify(props)}</p>
    </div>
  );
};

export default Courses;
