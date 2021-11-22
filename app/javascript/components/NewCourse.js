import React from "react";

const NewCourse = (props) => {
  return (
    <div>
      <h1>Add A New Course to {props.subject.subject}</h1>
      <form action={`/subjects/${props.subject.id}/courses`} method="post">
        <p>Course Name</p>
        <input name="course[course_name]" />
        <p>Course Code</p>
        <input name="course[course_code]" />
        <br/>
        <button type="submit">Add Course</button>
      </form>

      {JSON.stringify(props)}
    </div>
  );
};

export default NewCourse;