import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Deletion = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };

  const deleteUser = () => {
    console.log(user);
    axios.delete("http://localhost:3000/api/users/delete", user);

    alert("Your information has been ");

    navigate("/");
  };

  return (
    <center>
      <form>
        <div class="deleteUser">
          <div class="hide-md-lg">
            <p>We're sorry to see you go.</p>
          </div>

          <input
            type="text"
            name="Email"
            placeholder="Email"
            onChange={handleChange}
            value={user.email}
            required
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          ></input>
          <br></br>
          <input
            type="submit"
            value="Delete"
            class="deleteButton"
            onClick={deleteUser}
          ></input>
        </div>
      </form>
    </center>
  );
};

export default Deletion;
