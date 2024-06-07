import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8081/user/${id}`, user);
    navigate("/");
  };

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8081/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow">
          <h2 className="text-center m-4">Edit Employee</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                id="name"
                value={name}
                onChange={onInputChange}
                name="name"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Username"
                className="form-control"
                id="username"
                onChange={onInputChange}
                value={username}
                name="username"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Email Address"
                className="form-control"
                id="email"
                value={email}
                onChange={onInputChange}
                name="email"
              />
            </div>
            <button type="submit" className="btn btn-primary mx-3">
              Submit
            </button>
            <Link className="btn btn-outline-danger" to={"/"}>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
