import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateAreaObject";
import Note from "./components/Note";
import Modal from "./components/Modal";

import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [isModalHiden, setIsModalHiden] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState("");

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  function handleUpdateNote(id) {
    setIsModalHiden((current) => !current);
    setSelectedNoteId(id);
  }

  const noteList = notes.map((note) => (
    <Note
      key={note.id}
      id={note.id}
      title={note.title}
      content={note.content}
      onDelete={deleteNote}
      handleUpdateNote={handleUpdateNote}
      isHidden={isModalHiden} //<--css fix
    />
  ));

  const getData = (data) => {
    //console.log("data", data.id);
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== data.id));
    setNotes((prevNotes) => [data, ...prevNotes]);
  };

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      <Modal
        isHidden={isModalHiden}
        notes={notes}
        selectedNoteId={selectedNoteId}
        onSubmit={getData}
        handleUpdateNote={handleUpdateNote}
      />
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
