import React from "react";
import "./Feel.css";

function Feel({ prop1, prop2, prop3, description, btnTxt }) {
  return (
    <section className="abc">
      <div className="abcd_1">
        <div className="abc_1">
          {prop1} <br></br> {prop2}
        </div>
        <div className="abc_2">{prop3}</div>
      </div>
      <div className="abcd_2">
        <div className="abc_3">{description}</div>
        <div className="abc_4">{btnTxt}</div>
      </div>
    </section>
  );
}

export default Feel;
