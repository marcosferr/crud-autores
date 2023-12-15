import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}`);
        setAuthors(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAuthors();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/${id}`);
      // Refresh the author list after successful deletion
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}`);
      setAuthors(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Link to={"/new"}>Add an author</Link>
      We have quotes by:
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author._id}>
              <td>{author.name}</td>
              <td>
                <Link to={`/edit/${author._id}`}>Edit</Link>
                {" | "}
                <button onClick={() => handleDelete(author._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorList;
