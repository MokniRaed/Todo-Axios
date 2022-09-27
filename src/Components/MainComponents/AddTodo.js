import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Redux/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const HandleAdd = () => { 
    
    title !== ""?dispatch(addTodo(title)):alert("Forgot to right something!");
    setTitle("");
  };
  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          backgroundColor: "#1212127d",
          height: "30px",
          borderRadius: "20px",
          width: "70%",
          padding: "10px",
          color: "white",
        }}
        placeholder="New task"
      />
      <label>
        {" "}
        <button
          onClick={() => HandleAdd()}
          style={{
            backgroundColor: "white",
            borderRadius: "50px",
            width: "50px",
            height: "30px",
            margin: "20px",
            fontSize: "25px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </label>
    </div>
  );
};

export default AddTodo;
