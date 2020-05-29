import React, { useState } from "react";
import ReactDOM from "react-dom";
import Notes from "./components/Notes";
import NotesForm from "./components/NoteForm";

import "./styles.scss";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Happy little quote",
      body:
        "Talent is a pursued interest. Anything that you're willing to practice, you can do.- Bob Ross"
    }
  ]);

  return (
    <div className="App">
      <h1>My Notes</h1>
      <NotesForm />
      <Notes notes={notes} />
    </div>
  );
}

//import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
