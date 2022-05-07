import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

function DailyGainers() {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    url: "https://mboum-finance.p.rapidapi.com/co/collections/day_gainers",
    params: { start: "0" },
    headers: {
      "x-rapidapi-host": "mboum-finance.p.rapidapi.com",
      "x-rapidapi-key": "c34b450f49mshb8627a5eb3e35bdp16a83bjsn4f38a312c315",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(
        function (response) {
          setData(response.data.quotes)
        })
      .catch(function (error) {
        console.error(error);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ width: "80%", margin: "0 auto" }}>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Stock </th>
              <th scope="col">Today's Low</th>
              <th scope="col">Today's High</th>
              <th scope="col">Today's Change</th>
              <th scope="col">Current Price</th>
            </tr>
          </thead>
          <tbody>
            {
            !data ? <h1>Nothing to Show</h1> :
                data.map((item, index) => {
                return (
                    <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.longName}</td>
                    <td>{item.regularMarketDayLow}</td>
                    <td>{item.regularMarketDayHigh}</td>
                    <td>{item.regularMarketChange}</td>
                    <td>{item.regularMarketPrice}</td>
                    </tr>
                );
                })
            }
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default DailyGainers;