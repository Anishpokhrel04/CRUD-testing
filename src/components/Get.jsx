import React, { useState, useEffect } from "react";
import axios from "axios";

const Get = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data on component mount
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>GET Request Example</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Get;
