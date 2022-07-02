import React from "react";
import avatar from "../../../../../assets/avatar.jpg";

const Author = () => {
  return (
    <>
      <div>
        <h4 className="text-center px-3 py-2 border">About Author</h4>
        <div className="author-content py-5 rounded-lg">
          <div className="container">
            <img className="rounded-circle" src={avatar} alt="" />
            <h5 className="py-3">Alison Housten</h5>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, iste.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Author;
