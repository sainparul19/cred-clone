import React from "react";
import "./Security.css";

function Security({ line1, line2, line3, para, button }) {
  return (
    <section className="secure">
      <div className="secure_1">
        <div className="secure_2">
          {line1}
          <br></br>
          {line2}
        </div>
        <div className="secure_3">{line3}</div>
      </div>
      <div className="secure_4">
        <div className="secure_5">{para}</div>
        <div className="secure_6">{button}</div>
      </div>
    </section>
  );
}

export default Security;
