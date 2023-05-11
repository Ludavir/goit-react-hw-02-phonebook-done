import React from "react";
import './App.css'
import Tittle from "components/Tittle";

export const App = () => {
  return (
    <div className="container__main">
      <Tittle text="Phonebook"/>
      <Tittle text="Contacts"/>
    </div>
  );
};
