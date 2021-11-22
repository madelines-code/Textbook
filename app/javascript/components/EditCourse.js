import React from "react";

const EditCourse = (props) => {
  return (
    <div>
      <h1>Edit Course Form for {props.subject.subject}</h1>
      <form
        action={`/subject/${props.subject.id}/courses/${props.course.id}`}
        method="post"
      >
        <input type="hidden" name="_method" value="patch" />
        <p>Course Name</p>
        <input defaultValue={props.course.course_name} name="course[course_name]" />
        <p>Course Code</p>
        <textarea defaultValue={props.course.course_code} name="course[course_code]" />
        <br/>
        <button type="submit">Edit Course</button>
      </form>

      {JSON.stringify(props)}
    </div>
  );
};

export default EditCourse;