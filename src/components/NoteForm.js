import React, { useState } from "react";

const NoteForm = props => {
  //console.log(Wthis is our props: ",props");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState({
    title: "",
    body: ""
  });
  console.log(note);
  const changeHandler = event => {
    setNote({
      ...note,
      [event.target.name]: event.target.value
    });

    console.log(event.target.name, event.target.value);
  };

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
        value={note.title}
        onChange={changeHandler}
      />
      <label htmlFor="body">Note:</label>
      <textarea
        id="body"
        name="body"
        value={note.body}
        onChange={changeHandler}
      />
      <button>Click To Submit</button>
    </form>
  );
};

export default NoteForm;
