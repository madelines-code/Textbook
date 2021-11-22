import React from "react";

const Subjects = (props) => {
  const render_subject = () =>{
    
    return props.subjects.map((subject) => {
      return (
        <div>
          <h1>{subject.subject}</h1>
          <p>Subject ID: {subject.id}</p>
          <a href={`/subjects/${subject.id}/edit`}>Edit</a>
          <a href = {`/subjects/${subject.id}`} data-method = "delete">Delete Subject</a>
          <a href={`/subjects/${subject.id}`}>View Subject</a>

        </div>
      )
    });
  };

  return (
    <div>
      
      <a href="/subjects/new">Add New Subject</a>
      {render_subject()}
    </div>
  );
};

export default Subjects;