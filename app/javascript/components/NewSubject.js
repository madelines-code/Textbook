import React from "react";

const newSubject = (props) =>{

  return (
    <div>
      <a href="/">Back to Subjects List</a>
      <form action="/subjects" method="post">
        <p>Subject Name</p>
        <input name="subject[subject]" />
        <button type="submit">Add Subject</button>
      </form>
    </div>
  );
};

export default newSubject;