import React, { useState } from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateAreaObject";
import Note from "./components/Note";

import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [editNote, seteditNote] = useState(-0);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  function handleEdit(id) {
    console.log(id);
  }

  const noteList = notes.map((note, index) => (
    <Note
      key={index}
      id={note.id}
      title={note.title}
      content={note.content}
      onDelete={deleteNote}
      handleEdit={handleEdit}
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
