import React, { useState, useEffect } from "react";
import axios from "axios";

const Delete = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(`Post with ID ${id} deleted successfully.`);
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

  return (
    <div>
      <h1>DELETE Request Example</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Delete;
