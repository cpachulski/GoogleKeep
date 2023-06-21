import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateArea({ onAdd }) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({ title: "", content: "" });
  const [formClicked, setFormClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const noteWithId = { ...note, id: uuidv4() };
    onAdd(noteWithId);
    setNote({ title: "", content: "" });
  };

  return (
    <form className="Main-Note">
      {isExpanded && (
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
      )}
      <textarea
        name="content"
        placeholder="Take a note..."
        value={note.content}
        onClick={() => setExpanded(true)}
        onChange={handleChange}
        rows={isExpanded ? 3 : 1}
      />

      <button
        className="butn-Main-Note"
        onClick={handleSubmit}
        style={{ display: isExpanded ? "block" : "none" }}
      >
        Submit
      </button>
    </form>
  );
}

export default CreateArea;
