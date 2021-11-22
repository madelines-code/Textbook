import React from "react";

const Subject = (props) => {  
  // const renderCourses = () => {
  //   return props.courses.map((item) => {
  //     return (
  //       <div>
  //         <h2>{course.course_name}</h2>
  //         <h3>{course.course_id}</h3>
  //         <p>Course AltID: {course.id}</p>
          
  //         <a href={`/subjects/${props.subject.id}/courses/${course.id}`}>Course Details</a>
  //         <a href={`/subjects/${props.subject.id}/courses/${course.id}/edit`}>Edit Course</a>
  //         <a data-method="delete" href={`/stores/${props.store.id}/courses/${course.id}`}>
  //           Delete Course
  //         </a>
  //       </div>
  //     );
  //   });
  // };
  
  return (
    <div>
      <h1>{props.subject.subject}</h1>
      <a href = {`/subjects/${props.subject.id}`} data-method = "delete">Delete Subject</a>
      <a href="/">Home</a>
      <hr />
      <h2>Courses Available: </h2>
      {/* {renderCourses()} */}
    </div>
  );
};

export default Subject;