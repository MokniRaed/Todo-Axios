import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    // Get the pressed key, in this case is the enter
    if (e.key === "Enter") {
      navigate(`/listToDo/${e.target.value}`);
    }
  };
  return (
    <>
      <div className="webflow-style-input">
        <div className="container">
          <div className="webflow-style-input">
            <input
              className=""
              type="text"
              onKeyDown={(e) => handleClick(e)}
              placeholder="What's your Name?"
            ></input>
            <button type="submit">
              <i className="icon ion-android-arrow-forward"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
