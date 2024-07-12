import React from "react";
import Event4detail from "./event4detail";
import Event4list from './event4list.json';
import "./staff.css";
import "./cauvong.css";

const Event4 = () => {
  return (
      <div className="row justify-content-center event4">
        {Event4list.map((left, index) => (
          <Event4detail key={index} {...left} />
        ))}
      </div>
  );
};

export default Event4;