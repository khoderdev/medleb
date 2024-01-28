import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../../../components/Modals/TableCreateModal";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useSelector } from "react-redux"; // Import the useSelector hook

// Update API_URL
const API_URL = "http://1.1.1.252:3500/drugs";

const List = () => {
  const [data, setData] = useState([]);
  const [drugName, setDrugName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [agent, setAgent] = useState("");
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Add the useSelector hook to get the user role from Redux store
  // const userRole = useSelector((state) => state.user.role);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post(API_URL, {
        drugName,
        ingredients,
        agent,
      });
      setData([response.data, ...data]);
      setCreateModalOpen(false);
      setDrugName("");
      setIngredients("");
      setAgent("");
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  const handleEdit = (id) => {
    setEditingId(id);
    const itemToEdit = data.find((item) => item._id === id);

    if (itemToEdit) {
      setDrugName(itemToEdit.drugName);
      setIngredients(itemToEdit.ingredients);
      setAgent(itemToEdit.agent);
      setCreateModalOpen(true);
    } else {
      console.error(`Item with id ${id} not found.`);
    }
  };

  const handleUpdate = async () => {
    try {
      if (editingId === null || editingId === undefined) {
        console.error("Invalid editingId");
        return;
      }

      const response = await axios.put(`${API_URL}/${editingId}`, {
        drugName,
        ingredients,
        agent,
      });

      setData(
        data.map((item) => (item._id === editingId ? response.data : item))
      );

      setEditingId(null);
      setCreateModalOpen(false);
      setDrugName("");
      setIngredients("");
      setAgent("");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleClickDelete = (id) => {
    if (id) {
      handleDelete(id);
    } else {
      console.error("Invalid ID:", id);
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log("Deleting item with ID:", id);
      await axios.delete(`${API_URL}/${id}`);
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className=" mt-8 p-4 bg-gray-100">
      <div className="flex justify-end mb-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2"
          onClick={() => {
            setEditingId(null);
            setCreateModalOpen(true);
          }}
        >
          Create
        </button>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Drug Name</th>
            <th className="border p-2">Ingredients</th>
            <th className="border p-2">Agent</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item._id}
              className={editingId === item.id ? "bg-yellow-200" : "bg-white"}
            >
              <td className="border p-2">{item.drugName}</td>
              <td className="border p-2">{item.ingredientsAndstrength}</td>
              <td className="border p-2">{item.agent}</td>
              <td className="border p-2 w-16">
                {editingId === item.id ? (
                  <>
                    <button
                      className="rounded-xl bg-green-pri hover:bg-green-sec text-white font-bold py-1 px-2 mr-2"
                      onClick={handleUpdate}
                    >
                      Save
                    </button>
                    <button
                      className="rounded-xl bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2"
                      onClick={() => setEditingId(null)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <div className="flex gap-4">
                    <button onClick={() => handleEdit(item._id)}>
                      <BsPencil style={{ color: "green" }} />
                    </button>
                    <button onClick={() => handleClickDelete(item._id)}>
                      <BsTrash style={{ color: "red" }} />
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => {
          setEditingId(null);
          setCreateModalOpen(false);
          setDrugName("");
          setIngredients("");
          setAgent("");
        }}
        onSubmit={editingId !== null ? handleUpdate : handleCreate}
        drugName={drugName}
        ingredients={ingredients}
        agent={agent}
        onDrugNameChange={(e) => setDrugName(e.target.value)}
        onIngredientsChange={(e) => setIngredients(e.target.value)}
        onAgentChange={(e) => setAgent(e.target.value)}
        mode={editingId !== null ? "edit" : "create"}
      />
    </div>
  );
};

export default List;
