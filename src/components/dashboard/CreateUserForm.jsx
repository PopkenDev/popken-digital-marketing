"use client";

import { RiArrowDropDownLine } from "@remixicon/react";
import React, { useState } from "react";

const CreateUserForm = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/create-user", {
      method: "POST",
      "content-type": "application/json",
      body: JSON.stringify({ formData }),
    });

    if (!res.ok) {
      const response = await res.json();
      setError(response.message);
    } else {
      const data = await res.json();
      console.log(data);
    }
  };

  return (
    <form className="create-user-form" onSubmit={handleSubmit}>
      <div className="create-user-form_double-input-container">
        <div className="create-user-form_input-container">
          <input
            type="text"
            id="name"
            name="name"
            placeholder=" "
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <label htmlFor="name">Voornaam</label>
        </div>
        <div className="create-user-form_input-container">
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder=" "
            onChange={(e) =>
              setFormData({ ...formData, surname: e.target.value })
            }
          />
          <label htmlFor="surname">Achternaam</label>
        </div>
      </div>
      <div className="create-user-form_input-container">
        <input
          type="email"
          id="email"
          name="email"
          placeholder=" "
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label htmlFor="email">E-mail</label>
      </div>
      <div className="create-user-form_input-container">
        <input
          type="tel"
          id="tel"
          name="tel"
          placeholder=" "
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <label htmlFor="tel">Telefoon</label>
      </div>
      <div className="create-user-form_select-container">
        <label htmlFor="role">Rol</label>
        <RiArrowDropDownLine className="create-user-form_select-icon" />
        <select
          defaultValue="default"
          name="role"
          id="role"
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value="default" disabled>
            Maak een keuze
          </option>
          <option value="admin">Admin</option>
          <option value="manager">Manager</option>
          <option value="employee">Werknemer</option>
          <option value="client">Klant</option>
        </select>
      </div>
      <div className="create-user-form_input-container">
        <button type="submit" title="Maak gebruiker">
          Gebruiker toevoegen
        </button>
      </div>
      {error && <p className="create-user-form_error">{error}</p>}
    </form>
  );
};

export default CreateUserForm;
