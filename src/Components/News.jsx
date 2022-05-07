import React, { useState, useEffect } from "react";
import axios from "axios";
import SubNews from "./SubNews";

function News() {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    url: "https://mboum-finance.p.rapidapi.com/ne/news",
    headers: {
      "x-rapidapi-host": "mboum-finance.p.rapidapi.com",
      "x-rapidapi-key": "c34b450f49mshb8627a5eb3e35bdp16a83bjsn4f38a312c315",
    },
  }

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setData(response.data.slice(0, 8));
      })
      .catch(function (error) {
        console.error(error);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((item, index) => {
            return (
              <div key={index} className="col">
                <SubNews details={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default News;