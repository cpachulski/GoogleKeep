import React, { useState } from "react";

function CreateArea({ onAdd }) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(note);
    setNote({ title: "", content: "" });
  };

  return (
    <form>
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
      <button onClick={handleSubmit}>Add Note</button>
    </form>
  );
}

export default CreateArea;
