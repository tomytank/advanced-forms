import React, { useState } from "react";

const NoteForm = props => {
  //console.log(Wthis is our props: ",props");
  const [title, setTitle] = useState("");
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
      }}
    >
      <label htmlFor="title">Title: &nbsp;</label>
      <input
        id="title"
        type="text"
        name="title"
        placeholder="Please Enter Your Title:"
        value={title}
        onChange={event => {
          setTitle(event.target.value);
          console.log(event.target.value);
        }}
      />

      <button>Click To Submit</button>
    </form>
  );
};

export default NoteForm;
