import React from "react";

function SubNews(prop) {
  return (
    <>
      <div
        className="card "
        style={{ width: "18rem", height: "20rem", marginTop: "30px" }}
      >
        <div className="card-body d-flex justify-content-around flex-column">
          <h5 className="card-title">{prop.details.title}</h5>
          <p className="card-text">Source : {prop.details.source}</p>
          <a
            target="_blank"
            href={prop.details.link}
            className="btn btn-primary"
            rel="noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
}

export default SubNews;