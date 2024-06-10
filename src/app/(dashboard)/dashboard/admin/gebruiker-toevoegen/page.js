import CreateUserForm from "@/components/dashboard/CreateUserForm";
import React from "react";

const CreateUserPage = () => {
  return (
    <main className="dashboard-container">
      <header className="dashboard-page_heading">
        <h1>Gebruiker toevoegen</h1>
      </header>
      <section className="dashboard-page_content">
        <CreateUserForm />
      </section>
    </main>
  );
};

export default CreateUserPage;
