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

  // const renderItemComments = () => {
  //   return props.comments.map((comment) => {
  //     return (
  //       <div>
  //         <h3>{comment.body}</h3>
  //         <p>{comment.author}</p>
  //         {/* <p>Comment ID: {comment.id}</p> */}
          
  //         <a href={`/items/${props.item.id}/comments/${comment.id}`}>View Comment</a>
  //         <a href={`/items/${props.item.id}/comments/${comment.id}/edit`}>Edit Comment</a>
  //         <a data-method="delete" href={`/items/${props.item.id}/comments/${comment.id}`}>
  //           Delete Comment
  //         </a>
  //       </div>
  //     );
  //   });
  // };

  return (
    <div>
    {renderCourse()}
    {/* <h1>What People Say About {props.item.name}:</h1>
    {renderItemComments()} */}
    <h6><code>{JSON.stringify(props)}</code></h6>
    </div>
  )
};

export default Course;

