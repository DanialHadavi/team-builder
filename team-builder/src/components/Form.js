import React from "react";
import { ListGroup, ListGroupItemText } from "reactstrap";

function Form(props) {
  return (
    <div>
      <ListGroup>
        <form onSubmit={props.onFormSubmit}>
          <ListGroupItemText>
            <label>
              {" "}
              <div className="lista">
                First name:
                <input
                  onChange={props.onInputChange}
                  value={props.formValues.name}
                  name="name"
                  type="text"
                />
              </div>
            </label>
          </ListGroupItemText>
          <br />

          <ListGroupItemText>
            <label>
              {" "}
              Email:
              <input
                onChange={props.onInputChange}
                value={props.formValues.email}
                name="email"
                type="text"
              />
            </label>
          </ListGroupItemText>
          <br />
          <ListGroupItemText>
            <label>
              {" "}
              Role:
              <input
                onChange={props.onInputChange}
                value={props.formValues.role}
                name="role"
                type="text"
              />
            </label>
          </ListGroupItemText>
          <br />

          <input type="submit" />
        </form>
      </ListGroup>
    </div>
  );
}

export default Form;
