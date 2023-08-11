import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function change(event) {
    const { name, value } = event.target;

    setContact((preval) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preval.lName,
          email: preval.email
        };
      } else if (name === "lName") {
        return {
          fName: preval.fName,
          lName: value,
          email: preval.email
        };
      } else if (name === "email") {
        return {
          fName: preval.fName,
          lName: preval.lName,
          email: value
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={change} placeholder="First Name" />
        <input name="lName" onChange={change} placeholder="Last Name" />
        <input name="email" onChange={change} placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
