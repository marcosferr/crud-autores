import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthorForm from "./AuthorForm";
import { Link, useParams } from "react-router-dom";

const AuthorEdit = () => {
  const [author, setAuthor] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/${id}`
        );
        setAuthor(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAuthor();
  }, [id]);

  const handleUpdate = async (updatedAuthor) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/${id}`,
        updatedAuthor
      );
      // Handle success
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div>
      <Link to={"/"}>Home</Link>
      <h2>Edit this author</h2>
      {author && (
        <AuthorForm initialValue={author.name} onSubmit={handleUpdate} />
      )}
    </div>
  );
};

export default AuthorEdit;
