import React from "react";
import AuthorForm from "./AuthorForm";
import axios from "axios";
import { Link } from "react-router-dom";
const AuthorNew = () => {
  const handleAdd = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Link to={"/"}>Home</Link>
      <p>Add a new author:</p>
      <AuthorForm onSubmit={handleAdd} />
    </>
  );
};

export default AuthorNew;
