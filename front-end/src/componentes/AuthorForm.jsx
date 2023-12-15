import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthorForm = ({ onSubmit, initialValue = "" }) => {
  const [name, setName] = useState(initialValue);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = await onSubmit({ name });
    if (!error) {
      navigate("/");
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit" disabled={name.length < 3}>
        Submit
      </button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
      <div className="validation-message">
        {name.length < 3 ? "The name cannot be less than 3 characters" : null}
      </div>
    </form>
  );
};

export default AuthorForm;
