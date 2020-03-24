import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Form from "./components/Form";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

const info = [
  {
    id: uuid(),
    name: "Danial",
    email: "Danialhadavi@gmail.com",
    role: "form maker"
  },
  {
    id: uuid(),
    name: "I'm a Robot",
    email: "Robot@bot.com",
    role: "trouble maker"
  }
];

function App() {
  const [friends, setFriends] = useState(info);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    role: ""
  });
  const onInputChange = event => {
    const inputThatChanged = event.target.name;

    const newValueForInput = event.target.value;

    setFormValues({
      ...formValues,

      [inputThatChanged]: newValueForInput
    });
  };
  const onFormSubmit = event => {
    event.preventDefault();

    const newFriend = {
      id: uuid(),
      name: formValues.name,
      email: formValues.email,
      role: formValues.role
    };
    setFriends([...friends, newFriend]);
  };
  return (
    <div className="Container">
      <div>
        <Form
          onInputChange={onInputChange}
          formValues={formValues}
          onFormSubmit={onFormSubmit}
        />
      </div>
      <div>
        <h3>Active members:</h3>
        {friends.map(fr => (
          <ListGroup key={fr.id}>
            <ListGroupItem>
              <ListGroupItemHeading>{fr.name}</ListGroupItemHeading>{" "}
              <ListGroupItemText>{fr.email}</ListGroupItemText>
              <ListGroupItemText>{fr.role}</ListGroupItemText>
              <hr></hr>
            </ListGroupItem>
          </ListGroup>
        ))}
      </div>
    </div>
  );
}

export default App;
