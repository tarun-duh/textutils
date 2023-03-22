import React from "react";

export default function TextForm(props) {
  return (
    <div>
      <div className="container my-3">
        <h1 className="my-4">{props.heading}</h1>
        <div className="input-group my-4">
          <textarea
            className="form-control"
            aria-label="With textarea"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary">Convert to UpperCase</button>
      </div>
    </div>
  );
}
