import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateAreaObject";
import Note from "./components/Note";

import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [isModalHiden, setIsModalHiden] = useState(false);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  function handleUpdateNote(updateNote) {
    const { title, content, id } = updateNote;
    const updatedNoteList = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          title: title,
          content: content,
        };
      }
      return note;
    });
    setNotes(updatedNoteList);
    handleUpdateNoteRemovel(id, updateNote);
  }

  function handleUpdateNoteRemovel(id, updateNote) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    setNotes((prevNotes) => [updateNote, ...prevNotes]);
  }

  const noteList = notes.map((note) => (
    <Note
      key={note.id}
      id={note.id}
      title={note.title}
      content={note.content}
      onDelete={deleteNote}
      handleUpdateNote={handleUpdateNote}
    />
  ));

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {/* <Modal isHiden={isModalHiden} SelectedNote={SelectedNote}/> */}
      {noteList}
    </div>
  );
}

export default App;

// useEffect(() => {
//   let mystate_deserialized = JSON.parse(localStorage.getItem("mystate"));
//   // localStorage.getItem(mystate_deserialized);

//   setNotes(mystate_deserialized);
// }, []);

// useEffect(() => {
//   let mystate_serialized = JSON.stringify(notes);
//   localStorage.setItem("mystate", mystate_serialized);
//   // let mystate_serialized = JSON.stringify(notes);
//   // localStorage.setItem("mystate", mystate_serialized);
//   // let mystate_deserialized = JSON.parse(localStorage.getItem("mystate"));
//   // console.log(mystate_deserialized);
// }, [notes]);
