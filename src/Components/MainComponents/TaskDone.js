import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../Redux/todoSlice";

const TaskDone = ({ todos }) => {
  const dispatch = useDispatch();
  return (
    <div style={{ width: "100%" ,opacity:"0.5"}}>
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
        <h2 style={{ color: "white", opacity: 0.7, margin: "5px",textDecoration:"line-through" }}>
          {todos.title}
        </h2>{" "}
        <div
          className="deleteIcon"
          onClick={() => dispatch(deleteTodo(todos.id))}
        >
          <RiDeleteBinLine size={20} />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TaskDone;
