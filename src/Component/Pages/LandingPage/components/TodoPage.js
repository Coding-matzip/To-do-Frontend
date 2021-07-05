import React from "react";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";
import "./TodoPage.css";

const TodoPage = () => {
  return (
    <div className="TodoPage">
      <button className="Previous">
        <AiFillLeftCircle className="icon" />
        <span className="TodoPage_font">Previous</span>
      </button>
      <span className="page">1 / 2</span>
      <button className="Next">
        <span className="TodoPage_font">Next</span>
        <AiFillRightCircle className="icon" />
      </button>
    </div>
  );
};

export default TodoPage;
