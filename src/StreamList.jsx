import React, { useState } from "react";
import "./StreamList.css";

function StreamList() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = () => {
    if (!item.trim()) return;
    console.log("StreamList item:", item); // requirement: display in console
    setList([...list, item]);
    setItem("");
  };

  return (
    <div className="streamlist-container">
      <h1 className="streamlist-title">My StreamList</h1>

      <div className="streamlist-input-row">
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Add a movie or show..."
          className="streamlist-input"
        />
        <button onClick={handleAdd} className="streamlist-button">
          Add
        </button>
      </div>

      <ul className="streamlist-list">
        {list.map((entry, index) => (
          <li key={index} className="streamlist-item">
            {entry}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;