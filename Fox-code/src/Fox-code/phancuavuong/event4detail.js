
import React from "react";
import "./staff.css";

const Event4detail = ({detail1, detail2, detail3, detail4}) => {
  return (
      <div className="left">
        <span className="border-bottom border-white border-opacity-10">
          {detail1}
        </span>
        <span className="border-bottom border-white border-opacity-10">
          {detail2}
        </span>
        <span className="border-bottom border-white border-opacity-10">
          {detail3}
        </span>
        <span className="border-bottom border-white border-opacity-10">
          {detail4}
        </span>
      </div>
  );
}
export default Event4detail;