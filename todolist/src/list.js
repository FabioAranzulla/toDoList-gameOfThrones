import React, { useState } from "react";
import { FiXSquare } from "react-icons/fi";

export function List() {
  const [item, setItem] = useState();
  const [list, setList] = useState([]);

  function handleItem(e) {
    setItem(e.target.value);
  }

  function handleAdd(e) {
    e.preventDefault();

    if (!item) {
      alert("No task!");
    } else {
      setList((oldItems) => [...oldItems, element]);
      setItem("");
    }

    const element = {
      id: Math.floor(Math.random() * 100),
      value: item,
    };
  }

  function handleRemove(id) {
    setList(list.filter((item) => item.id !== id));
  }

  function handleRemoveAll() {
    setList([]);
  }

  return (
    <div className="wrapper">
      <div className="form-list">
        <h2 className="title">TO DO LIST</h2>
        <div className="list">
          <form className="form">
            <input
              type="text"
              value={item}
              autoFocus
              onChange={handleItem}
              placeholder="Add something to do..."
            />{" "}
            {""}
            <button className="add-button" onClick={handleAdd}>
              Add task
            </button>
          </form>
        </div>
        <ul>
          {list.map((item) => {
            return (
              <li key={item.id}>
                {item.value}{" "}
                <button
                  className="remove-button"
                  onClick={() => handleRemove(item.id)}
                >
                  <FiXSquare size="2rem" className="remove" />
                </button>
              </li>
            );
          })}
        </ul>
        <div className="remove-all">
          <button onClick={handleRemoveAll} className="all-button">
            Delete all
          </button>
        </div>
      </div>
    </div>
  );
}
