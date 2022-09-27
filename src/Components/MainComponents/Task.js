import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../../Redux/todoSlice";

const Task = ({ todos }) => {
  const dispatch = useDispatch();
  const [editTitle, setEditTitle] = useState("");

 
  const sendEdit = () => {
    dispatch(editTodo({ id: todos.id, title: editTitle }));
  };
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: " row",
          justifyContent: "space-between",
        }}
      >
        <input
          style={{ width: "25px", height: "25px", backgroundColor: "#eee" }}
          type="checkbox"
          defaultChecked={todos.isDone ? true : false}
        />
        <input
          onChange={(e) => setEditTitle(e.target.value)}
          value={todos.title}
          style={{ color: "white", opacity: 0.7, margin: "5px" }}
        />

        <div style={{ display: "flex", flexDirection: " row" }}>
          <div className="deleteIcon">
            <FaRegEdit color="#dac184" size={20} />
          </div>
          <div
            className="deleteIcon"
            onClick={() => dispatch(deleteTodo(todos.id))}
          >
            <RiDeleteBinLine size={20} />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Task;
