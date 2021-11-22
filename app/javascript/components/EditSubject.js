import React from "react";

const subjectEdit = (props) => {
  return (
    <div>
      <a href="/">View All Subjects</a>
      <form action={`/subjects/${props.subject.id}`} method="post">
        <p>New Subject Name:</p>
        <input defaultValue={props.subject.subject} name="subject[subject]" />
        <button type="submit">Edit Subject</button>
      </form>
    </div>
  );
};
export default subjectEdit;