import React from "react";
import "./Money.css";

function Money({ header1, header2, header3, detail, btn }) {
  return (
    <section className="upgrade">
      <div className="upgrade_1">
        <div className="upgrade_2">
          {header1}
          <br></br>
          {header2}
        </div>
        <div className="upgrade_3">{header3}</div>
      </div>
      <div className="upgrade_4">
        <div className="upgrade_5">{detail}</div>
        <div className="upgrade_6">{btn}</div>
      </div>
    </section>
  );
}

export default Money;
