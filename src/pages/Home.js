import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css"; // Import the Tailwind CSS file

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8081/users");
    setUsers(result.data);
  };

  return (
    <div className="container mx-auto mt-12">
      <div className="py-4">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th scope="col" className="py-2 px-4">
                #
              </th>
              <th scope="col" className="py-2 px-4">
                Name
              </th>
              <th scope="col" className="py-2 px-4">
                Username
              </th>
              <th scope="col" className="py-2 px-4">
                Email
              </th>
              <th scope="col" className="py-2 px-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <th scope="row" className="py-2 px-4">
                  {index + 1}
                </th>
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.username}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4 flex justify-center space-x-2">
                  <button className="btn btn-outline-primary mx-2">View</button>
                  <button className="btn btn-primary mx-2">Edit</button>
                  <button className="btn btn-danger mx-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
