import React, { useState } from "react";
import { Icon } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import Drawer from "./Drawer";

function Header({ notes, filteredNotes, setFilteredNotes }) {
  const [search, setSearch] = useState("");
  const [sidebar, setSidebar] = useState(false);

  const logo = (
    <img
      src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
      alt="logo"
    />
  );

  const handleSearchChange = (e) => {
    const searchString = e.target.value;
    setSearch(searchString);

    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredNotes(filteredNotes);
  };

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="header">
      <DensityMediumIcon
        style={{ fontSize: 26 }}
        className="sidebarIcon"
        onClick={showSidebar}
      />
      <h1 className="header-title"> {logo} Keep </h1>
      <form className="SearchBox">
        <input
          className="SearchBox-input"
          type="text"
          name="title"
          placeholder="Search"
          value={search}
          onChange={handleSearchChange}
        />
      </form>

      <Drawer sidebar={sidebar} />
    </div>
  );
}

export default Header;
