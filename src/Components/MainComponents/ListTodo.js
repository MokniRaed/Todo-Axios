import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddTodo from "./AddTodo";
import Task from "./Task";

const ListTodo = () => {
  const { name } = useParams();
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h1
          style={{
            color: "#dac184",
            fontSize: "35px",
            fontFamily: "monospace",
          }}
        >
          Hey, {name}
        </h1>
      </div>
      <div className="todoContainer">
        <div>
          <AddTodo />
        </div>
        <div className="headerContainer">
          <h2>What's your focus today</h2>
        </div>
        <div className="bodyContainer">
          {todos.map((el) => (
            <Task todos={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListTodo;
