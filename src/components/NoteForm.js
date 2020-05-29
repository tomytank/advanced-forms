import React, { useState } from "react";

const NoteForm = props => {
  //console.log(Wthis is our props: ",props");

  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="text"
        name="email"
        placeholder="Please Enter Your Email:"
      />
      <button>Click To Submit</button>
    </form>
  );
};

export default NoteForm;
