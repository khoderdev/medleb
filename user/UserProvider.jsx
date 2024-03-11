import { createContext, useContext, useState, useEffect, useRef } from "react";
import axios from "./axios";

// Create a context
const UserContext = createContext();

// Custom hook to consume the context
export const useUserContext = () => useContext(UserContext);

export default function UserProvider({ children }) {
  // Initial state
  const [editing, setEditing] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [verified, setVerified] = useState(false);
  const [status, setStatus] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState("name");
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const avatarInputRef = useRef(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const resetAvatar = () => {
    setAvatar(null); // Reset avatar state to null
  };

  const handleSubmit = async () => {
    try {
      if (editing) {
        // Update existing user
        await axios.put(`/api/users/${editingUserId}`, {
          name,
          company,
          role,
          isVerified: verified,
          status,
          avatarUrl: avatar, // Make sure avatarUrl is correctly populated
        });
      } else {
        // Add new user
        console.log("Avatar before sending request:", avatar); // Log the value of avatar before sending the request
        await axios.post("/api/users", {
          name,
          company,
          role,
          isVerified: verified,
          status,
          avatarUrl: avatar, // Make sure avatarUrl is correctly populated
        });
      }

      // Fetch updated list of users after CRUD operation
      const response = await axios.get("/api/users");
      setUsers(response.data);

      // Reset form inputs and avatar
      setName("");
      setCompany("");
      setRole("");
      setVerified(false);
      setStatus("");
      setAvatar(null); // Reset avatar state to null

      // Clear the avatar input value using its ref
      if (avatarInputRef.current) {
        avatarInputRef.current.value = ""; // Clear the input value
      }

      setEditing(false);
      setEditingUserId(null);
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`/api/users/${userId}`);

      // Fetch updated list of users after delete operation
      const response = await axios.get("/api/users");
      setUsers(response.data);

      setUsers(users.filter((user) => user.id !== userId));
      setSelected(
        selected.filter((selectedItem) => selectedItem.id !== userId)
      );
      if (selectedUserId === userId) {
        setName("");
        setCompany("");
        setRole("");
        setVerified(false);
        setStatus("");
        setSelectedUserId(null);
      }
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  };

  // Inside UserPage component
  const handleDeleteSelected = async () => {
    try {
      // Delete all selected users
      await Promise.all(
        selected.map(async (userName) => {
          const selectedUser = users.find((user) => user.name === userName);
          if (selectedUser) {
            await axios.delete(`/api/users/${selectedUser.id}`);
          }
        })
      );

      // Fetch updated list of users after delete operation
      const response = await axios.get("/api/users");
      const updatedUsers = response.data;

      // Update users state with the updated list of users
      setUsers(updatedUsers);

      // Clear selected users
      setSelected([]);
      resetAvatar(); // Reset avatar input
    } catch (error) {
      console.error("Error deleting selected users:", error);
    }
  };

  const handleEdit = async (userId) => {
    const selectedUser = users.find((user) => user.id === userId);
    if (selectedUser) {
      setName(selectedUser.name);
      setCompany(selectedUser.company);
      setRole(selectedUser.role);
      setVerified(selectedUser.isVerified);
      setStatus(selectedUser.status);
      setEditing(true);
      setEditingUserId(userId);
      setAvatar(selectedUser.avatarUrl);
    }
  };

  const handleNameChange = (event) => setName(event.target.value);
  const handleCompanyChange = (event) => setCompany(event.target.value);
  const handleRoleChange = (event) => setRole(event.target.value);
  const handleVerifiedChange = (event) => setVerified(event.target.checked);
  const handleStatusChange = (event) => setStatus(event.target.value);
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      console.log("Reader result:", reader.result); // Log the value of reader.result
      setAvatar(reader.result); // Update the avatar state with the data URL
    };
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, userName) => {
    const selectedIndex = selected.indexOf(userName);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, userName);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const contextValue = {
    editing,
    setEditing,
    editingUserId,
    setEditingUserId,
    name,
    setName,
    company,
    setCompany,
    role,
    setRole,
    verified,
    setVerified,
    status,
    setStatus,
    avatar,
    setAvatar,
    selectedUserId,
    setSelectedUserId,
    users,
    setUsers,
    page,
    setPage,
    order,
    setOrder,
    selected,
    setSelected,
    orderBy,
    setOrderBy,
    filterName,
    setFilterName,
    rowsPerPage,
    setRowsPerPage,
    avatarInputRef,
    handleSubmit,
    handleEdit,
    handleDelete,
    handleDeleteSelected,
    handleNameChange,
    handleCompanyChange,
    handleRoleChange,
    handleVerifiedChange,
    handleStatusChange,
    handleAvatarChange,
    handleSelectAllClick,
    handleClick,
    handleChangePage,
    handleChangeRowsPerPage,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

// Inside UserPage component or any other component that needs access to the context
// Import useUserContext hook
// const {
//   editing,
//   setEditing,
//   editingUserId,
//   setEditingUserId,
//   name,
//   setName,
//   ...
// } = useUserContext();
