import React from "react";
import {userIsRegistered} from '../components/App';

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!userIsRegistered ? <input type="password" placeholder="Confirm Password" />: null}
      <button type="submit">{props.isRegistered ? "Login": "Register"}</button>
    </form>
  );
}

export default Form;
