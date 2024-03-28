import axios from "axios";
import React, { useState, useEffect } from "react";

import Modal from "./Modal";
import "../../../../../../table.css";
import Pagination from "./Pagination";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import useModal from "../../hooks/useModal";
import DirectoryTable from "./DirectoryTable";

const Table = () => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const initialFormState = {
    id: null,
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    image: "",
  };
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const { isShowing, toggle } = useModal();

  useEffect(() => {
    axios.get("http://localhost:3001/api/users")
      .then((response) =>
        response.data.map((user) => ({
          id: user._id,
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username,
          email: user.email,
          image: user.image,
        }))
      )
      .then((data) => {
        setUsers(data);
      });
  }, []);
  

  // incrementing ids + adding placeholder image manually
  // TODO: update id and image handling when tying this to a database
  const addUser = (user) => {
    toggle();
    user.id = users.length + 1;
    user.image = "https://randomuser.me/api/portraits/thumb/lego/1.jpg";
    setUsers([user, ...users]);
  };

  const editUser = (user) => {
    setEditing(true);
    toggle();
    setCurrentUser({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      email: user.email,
      image: user.image,
    });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    toggle();
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container">
        <button className="button-add" onClick={toggle}>
          Add User
        </button>
      </div>
      {editing ? (
        <Modal
          isShowing={isShowing}
          hide={toggle}
          content={
            <EditUserForm
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          }
        />
      ) : (
        <Modal
          isShowing={isShowing}
          hide={toggle}
          content={<AddUserForm addUser={addUser} />}
        />
      )}
      <DirectoryTable
        users={currentUsers}
        editUser={editUser}
        deleteUser={deleteUser}
      />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </>
  );
};

export default Table;
