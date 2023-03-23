import React, { useState } from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateAreaObject";
import Note from "./components/Note";

import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((index) => index !== id));
  }

  const noteList = notes.map((note, index) => (
    <Note
      key={index}
      id={index}
      title={note.title}
      content={note.content}
      onDelete={deleteNote}
    />
  ));

  return (
    <div className="App">
      <Header />

      <CreateArea onAdd={addNote} />
      {noteList}
    </div>
  );
}

export default App;
