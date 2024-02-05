// // // // // import React, { useState, useEffect } from "react";
// // // // // import axios from "axios";
// // // // // import Modal from "./components/Modals/TableCreateModal";
// // // // // import { BsPencil, BsTrash } from "react-icons/bs"; // Import icons from react-icons

// // // // // // Update API_URL
// // // // // const API_URL = "http://1.1.1.252:3500/api/importations";

// // // // // const Table = () => {
// // // // //   const [data, setData] = useState([]);
// // // // //   const [drugName, setDrugName] = useState("");
// // // // //   const [ingredients, setIngredients] = useState("");
// // // // //   const [agent, setAgent] = useState("");
// // // // //   const [isCreateModalOpen, setCreateModalOpen] = useState(false);
// // // // //   const [editingId, setEditingId] = useState(null);
// // // // //   const userRole = useSelector(selectUserRole);

// // // // //   // If the user is not an admin, don't render the table
// // // // //   if (userRole !== "admin") {
// // // // //     return <div>Unauthorized access</div>;
// // // // //   }

// // // // //   useEffect(() => {
// // // // //     fetchData();
// // // // //   }, []);

// // // // //   const fetchData = async () => {
// // // // //     try {
// // // // //       const response = await axios.get(API_URL);
// // // // //       console.log("API Response:", response.data); // Log the API response
// // // // //       setData(response.data);
// // // // //     } catch (error) {
// // // // //       console.error("Error fetching data:", error);
// // // // //     }
// // // // //   };

// // // // //   const handleCreate = async () => {
// // // // //     try {
// // // // //       const response = await axios.post(API_URL, {
// // // // //         drugName,
// // // // //         ingredients,
// // // // //         agent,
// // // // //       });
// // // // //       setData([response.data, ...data]);
// // // // //       setCreateModalOpen(false);
// // // // //       setDrugName("");
// // // // //       setIngredients("");
// // // // //       setAgent("");
// // // // //     } catch (error) {
// // // // //       console.error("Error creating data:", error);
// // // // //     }
// // // // //   };

// // // // //   const handleEdit = (id) => {
// // // // //     setEditingId(id);
// // // // //     const itemToEdit = data.find((item) => item._id === id);

// // // // //     // Check if itemToEdit is not undefined before accessing its properties
// // // // //     if (itemToEdit) {
// // // // //       setDrugName(itemToEdit.drugName);
// // // // //       setIngredients(itemToEdit.ingredients);
// // // // //       setAgent(itemToEdit.agent);
// // // // //       setCreateModalOpen(true);
// // // // //     } else {
// // // // //       console.error(`Item with id ${id} not found.`);
// // // // //     }
// // // // //   };

// // // // //   const handleUpdate = async () => {
// // // // //     try {
// // // // //       // Ensure editingId is a valid value
// // // // //       if (editingId === null || editingId === undefined) {
// // // // //         console.error("Invalid editingId");
// // // // //         return;
// // // // //       }

// // // // //       const response = await axios.put(`${API_URL}/${editingId}`, {
// // // // //         drugName,
// // // // //         ingredients,
// // // // //         agent,
// // // // //       });

// // // // //       setData(
// // // // //         data.map((item) => (item._id === editingId ? response.data : item))
// // // // //       );

// // // // //       setEditingId(null);
// // // // //       setCreateModalOpen(false);
// // // // //       setDrugName("");
// // // // //       setIngredients("");
// // // // //       setAgent("");
// // // // //     } catch (error) {
// // // // //       console.error("Error updating data:", error);
// // // // //     }
// // // // //   };

// // // // //   const handleDelete = async (id) => {
// // // // //     try {
// // // // //       await axios.delete(`${API_URL}/${id}`);
// // // // //       setData(data.filter((item) => item.id !== id));
// // // // //     } catch (error) {
// // // // //       console.error("Error deleting data:", error);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className=" mt-8 p-4 bg-gray-100">
// // // // //       <div className="flex justify-end mb-4">
// // // // //         <button
// // // // //           className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2"
// // // // //           onClick={() => {
// // // // //             setEditingId(null);
// // // // //             setCreateModalOpen(true);
// // // // //           }}
// // // // //         >
// // // // //           Create
// // // // //         </button>
// // // // //       </div>

// // // // //       <table className="w-full border">
// // // // //         <thead>
// // // // //           <tr className="bg-gray-200">
// // // // //             <th className="border p-2">Drug Name</th>
// // // // //             <th className="border p-2">Ingredients</th>
// // // // //             <th className="border p-2">Agent</th>
// // // // //             <th className="border p-2">Actions</th>
// // // // //           </tr>
// // // // //         </thead>
// // // // //         <tbody>
// // // // //           {data.map((item) => (
// // // // //             <tr
// // // // //               key={item._id}
// // // // //               className={editingId === item.id ? "bg-yellow-200" : "bg-white"}
// // // // //             >
// // // // //               <td className="border p-2">{item.drugName}</td>
// // // // //               <td className="border p-2">{item.ingredients}</td>
// // // // //               <td className="border p-2">{item.agent}</td>
// // // // //               <td className="border p-2 w-16">
// // // // //                 {editingId === item.id ? (
// // // // //                   <>
// // // // //                     <button
// // // // //                       className="rounded-xl bg-green-pri hover:bg-green-sec text-white font-bold py-1 px-2 mr-2"
// // // // //                       onClick={handleUpdate}
// // // // //                     >
// // // // //                       Save
// // // // //                     </button>
// // // // //                     <button
// // // // //                       className="rounded-xl bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2"
// // // // //                       onClick={() => setEditingId(null)}
// // // // //                     >
// // // // //                       Cancel
// // // // //                     </button>
// // // // //                   </>
// // // // //                 ) : (
// // // // //                   <div className="flex gap-4">
// // // // //                     <button
// // // // //                       // className="rounded-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mr-2"
// // // // //                       onClick={() => handleEdit(item._id)}
// // // // //                     >
// // // // //                       <BsPencil style={{ color: "green" }} /> {/* Edit icon */}
// // // // //                     </button>
// // // // //                     <button
// // // // //                       // className="rounded-xl bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2"
// // // // //                       onClick={() => handleDelete(item.id)}
// // // // //                     >
// // // // //                       <BsTrash style={{ color: "red" }} /> {/* Delete icon */}
// // // // //                     </button>
// // // // //                   </div>
// // // // //                 )}
// // // // //               </td>
// // // // //             </tr>
// // // // //           ))}
// // // // //         </tbody>
// // // // //       </table>

// // // // //       <Modal
// // // // //         isOpen={isCreateModalOpen}
// // // // //         onClose={() => {
// // // // //           setEditingId(null);
// // // // //           setCreateModalOpen(false);
// // // // //           setDrugName("");
// // // // //           setIngredients("");
// // // // //           setAgent("");
// // // // //         }}
// // // // //         onSubmit={editingId !== null ? handleUpdate : handleCreate}
// // // // //         drugName={drugName}
// // // // //         ingredients={ingredients}
// // // // //         agent={agent}
// // // // //         onDrugNameChange={(e) => setDrugName(e.target.value)}
// // // // //         onIngredientsChange={(e) => setIngredients(e.target.value)}
// // // // //         onAgentChange={(e) => setAgent(e.target.value)}
// // // // //         mode={editingId !== null ? "edit" : "create"}
// // // // //       />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Table;
// // // import React, { useState, useEffect } from "react";
// // // import Axios from "./api/axios";
// // // import { motion } from "framer-motion";

// // // const fadeInOut = {
// // //   initial: { opacity: 0 },
// // //   animate: { opacity: 1 },
// // //   exit: { opacity: 0 },
// // // };

// // // const Table = () => {
// // //   const [data, setData] = useState([]);
// // //   const [originalData, setOriginalData] = useState([]);
// // //   const [editableRows, setEditableRows] = useState({});
// // //   const [isEditing, setIsEditing] = useState(false);

// // //   useEffect(() => {
// // //     fetchData();
// // //   }, []);

// // //   const fetchData = async () => {
// // //     try {
// // //       const response = await Axios.get("/api/atc/v1.0");
// // //       setData(response.data);
// // //       setOriginalData(response.data);
// // //       setEditableRows({});
// // //     } catch (error) {
// // //       console.error("Error fetching data:", error);
// // //     }
// // //   };

// // //   const handleInputChange = (e, index) => {
// // //     const newData = [...data];
// // //     newData[index][e.target.name] = e.target.value;
// // //     setData(newData);
// // //   };

// // //   const handleEdit = (index) => {
// // //     setEditableRows((prev) => ({
// // //       ...prev,
// // //       [index]: true,
// // //     }));
// // //     setIsEditing(true);
// // //   };

// // //   const handleSave = async (index) => {
// // //     try {
// // //       const editedItem = data[index];
// // //       await Axios.put(`/api/atccodes/v1.0`, editedItem);
// // //       setEditableRows((prev) => ({
// // //         ...prev,
// // //         [index]: false,
// // //       }));
// // //       setIsEditing(false);
// // //       fetchData();
// // //     } catch (error) {
// // //       console.error("Error editing data:", error);
// // //     }
// // //   };

// // //   const handleCancel = (index) => {
// // //     const newData = [...data];
// // //     newData[index] = originalData[index]; // Revert to original data
// // //     setData(newData);
// // //     setEditableRows((prev) => ({
// // //       ...prev,
// // //       [index]: false,
// // //     }));
// // //     setIsEditing(false);
// // //   };

// // //   return (
// // //     <motion.div
// // //       initial="initial"
// // //       animate="animate"
// // //       exit="exit"
// // //       variants={fadeInOut}
// // //     >
// // //       <div className="container mx-auto">
// // //         <table className="min-w-full table-auto">
// // //           <thead>
// // //             <tr>
// // //               <th className="px-4 py-2">ATC</th>
// // //               <th className="px-4 py-2">Level Name</th>
// // //               <th className="px-4 py-2">Level Name (Arabic)</th>
// // //               <th className="px-4 py-2">ATC Related Label</th>
// // //               <th className="px-4 py-2">Actions</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {data.map((item, index) => (
// // //               <tr key={item.guid}>
// // //                 <td className="border px-4 py-2">
// // //                   {editableRows[index] ? (
// // //                     <input
// // //                       type="text"
// // //                       name="code"
// // //                       value={item.code}
// // //                       onChange={(e) => handleInputChange(e, index)}
// // //                     />
// // //                   ) : (
// // //                     item.code
// // //                   )}
// // //                 </td>
// // //                 <td className="border px-4 py-2">
// // //                   {editableRows[index] ? (
// // //                     <input
// // //                       type="text"
// // //                       name="levelName"
// // //                       value={item.levelName}
// // //                       onChange={(e) => handleInputChange(e, index)}
// // //                     />
// // //                   ) : (
// // //                     item.levelName
// // //                   )}
// // //                 </td>
// // //                 <td className="border px-4 py-2">
// // //                   {editableRows[index] ? (
// // //                     <input
// // //                       type="text"
// // //                       name="levelNameAr"
// // //                       value={item.levelNameAr}
// // //                       onChange={(e) => handleInputChange(e, index)}
// // //                     />
// // //                   ) : (
// // //                     item.levelNameAr
// // //                   )}
// // //                 </td>
// // //                 <td className="border px-4 py-2">
// // //                   {editableRows[index] ? (
// // //                     <input
// // //                       type="text"
// // //                       name="atcRelatedLabel"
// // //                       value={item.atcRelatedLabel}
// // //                       onChange={(e) => handleInputChange(e, index)}
// // //                     />
// // //                   ) : (
// // //                     item.atcRelatedLabel
// // //                   )}
// // //                 </td>
// // //                 <td className="border px-4 py-2">
// // //                   {editableRows[index] ? (
// // //                     <div>
// // //                       <button
// // //                         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
// // //                         onClick={() => handleSave(index)}
// // //                       >
// // //                         Save
// // //                       </button>
// // //                       <button
// // //                         className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 ml-2"
// // //                         onClick={() => handleCancel(index)}
// // //                       >
// // //                         Cancel
// // //                       </button>
// // //                     </div>
// // //                   ) : (
// // //                     <button
// // //                       className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
// // //                       onClick={() => handleEdit(index)}
// // //                     >
// // //                       Edit
// // //                     </button>
// // //                   )}
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     </motion.div>
// // //   );
// // // };

// // // export default Table;

// // // ///////////////////////////////////////////////
// // // ///////////////////////////////////////////////
// // // ///////////////////////////////////////////////
// // // ///////////////////////////////////////////////

// // // // import React, { useState, useEffect } from "react";
// // // // import axios from "axios";
// // // // import Modal from "./components/Modals/TableCreateModal";
// // // // import { BsPencil, BsTrash } from "react-icons/bs"; // Import icons from react-icons

// // // // // Update API_URL
// // // // const API_URL = "http://1.1.1.252:3500/api/importations";

// // // // const Table = () => {
// // // //   const [data, setData] = useState([]);
// // // //   const [drugName, setDrugName] = useState("");
// // // //   const [ingredients, setIngredients] = useState("");
// // // //   const [agent, setAgent] = useState("");
// // // //   const [isCreateModalOpen, setCreateModalOpen] = useState(false);
// // // //   const [editingId, setEditingId] = useState(null);
// // // //   const userRole = useSelector(selectUserRole);

// // // //   // If the user is not an admin, don't render the table
// // // //   if (userRole !== "admin") {
// // // //     return <div>Unauthorized access</div>;
// // // //   }

// // // //   useEffect(() => {
// // // //     fetchData();
// // // //   }, []);

// // // //   const fetchData = async () => {
// // // //     try {
// // // //       const response = await axios.get(API_URL);
// // // //       console.log("API Response:", response.data); // Log the API response
// // // //       setData(response.data);
// // // //     } catch (error) {
// // // //       console.error("Error fetching data:", error);
// // // //     }
// // // //   };

// // // //   const handleCreate = async () => {
// // // //     try {
// // // //       const response = await axios.post(API_URL, {
// // // //         drugName,
// // // //         ingredients,
// // // //         agent,
// // // //       });
// // // //       setData([response.data, ...data]);
// // // //       setCreateModalOpen(false);
// // // //       setDrugName("");
// // // //       setIngredients("");
// // // //       setAgent("");
// // // //     } catch (error) {
// // // //       console.error("Error creating data:", error);
// // // //     }
// // // //   };

// // // //   const handleEdit = (id) => {
// // // //     setEditingId(id);
// // // //     const itemToEdit = data.find((item) => item._id === id);

// // // //     // Check if itemToEdit is not undefined before accessing its properties
// // // //     if (itemToEdit) {
// // // //       setDrugName(itemToEdit.drugName);
// // // //       setIngredients(itemToEdit.ingredients);
// // // //       setAgent(itemToEdit.agent);
// // // //       setCreateModalOpen(true);
// // // //     } else {
// // // //       console.error(`Item with id ${id} not found.`);
// // // //     }
// // // //   };

// // // //   const handleUpdate = async () => {
// // // //     try {
// // // //       // Ensure editingId is a valid value
// // // //       if (editingId === null || editingId === undefined) {
// // // //         console.error("Invalid editingId");
// // // //         return;
// // // //       }

// // // //       const response = await axios.put(`${API_URL}/${editingId}`, {
// // // //         drugName,
// // // //         ingredients,
// // // //         agent,
// // // //       });

// // // //       setData(
// // // //         data.map((item) => (item._id === editingId ? response.data : item))
// // // //       );

// // // //       setEditingId(null);
// // // //       setCreateModalOpen(false);
// // // //       setDrugName("");
// // // //       setIngredients("");
// // // //       setAgent("");
// // // //     } catch (error) {
// // // //       console.error("Error updating data:", error);
// // // //     }
// // // //   };

// // // //   const handleDelete = async (id) => {
// // // //     try {
// // // //       await axios.delete(`${API_URL}/${id}`);
// // // //       setData(data.filter((item) => item.id !== id));
// // // //     } catch (error) {
// // // //       console.error("Error deleting data:", error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className=" mt-8 p-4 bg-gray-100">
// // // //       <div className="flex justify-end mb-4">
// // // //         <button
// // // //           className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2"
// // // //           onClick={() => {
// // // //             setEditingId(null);
// // // //             setCreateModalOpen(true);
// // // //           }}
// // // //         >
// // // //           Create
// // // //         </button>
// // // //       </div>

// // // //       <table className="w-full border">
// // // //         <thead>
// // // //           <tr className="bg-gray-200">
// // // //             <th className="border p-2">Drug Name</th>
// // // //             <th className="border p-2">Ingredients</th>
// // // //             <th className="border p-2">Agent</th>
// // // //             <th className="border p-2">Actions</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {data.map((item) => (
// // // //             <tr
// // // //               key={item._id}
// // // //               className={editingId === item.id ? "bg-yellow-200" : "bg-white"}
// // // //             >
// // // //               <td className="border p-2">{item.drugName}</td>
// // // //               <td className="border p-2">{item.ingredients}</td>
// // // //               <td className="border p-2">{item.agent}</td>
// // // //               <td className="border p-2 w-16">
// // // //                 {editingId === item.id ? (
// // // //                   <>
// // // //                     <button
// // // //                       className="rounded-xl bg-green-pri hover:bg-green-sec text-white font-bold py-1 px-2 mr-2"
// // // //                       onClick={handleUpdate}
// // // //                     >
// // // //                       Save
// // // //                     </button>
// // // //                     <button
// // // //                       className="rounded-xl bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2"
// // // //                       onClick={() => setEditingId(null)}
// // // //                     >
// // // //                       Cancel
// // // //                     </button>
// // // //                   </>
// // // //                 ) : (
// // // //                   <div className="flex gap-4">
// // // //                     <button
// // // //                       // className="rounded-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mr-2"
// // // //                       onClick={() => handleEdit(item._id)}
// // // //                     >
// // // //                       <BsPencil style={{ color: "green" }} /> {/* Edit icon */}
// // // //                     </button>
// // // //                     <button
// // // //                       // className="rounded-xl bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2"
// // // //                       onClick={() => handleDelete(item.id)}
// // // //                     >
// // // //                       <BsTrash style={{ color: "red" }} /> {/* Delete icon */}
// // // //                     </button>
// // // //                   </div>
// // // //                 )}
// // // //               </td>
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>

// // // //       <Modal
// // // //         isOpen={isCreateModalOpen}
// // // //         onClose={() => {
// // // //           setEditingId(null);
// // // //           setCreateModalOpen(false);
// // // //           setDrugName("");
// // // //           setIngredients("");
// // // //           setAgent("");
// // // //         }}
// // // //         onSubmit={editingId !== null ? handleUpdate : handleCreate}
// // // //         drugName={drugName}
// // // //         ingredients={ingredients}
// // // //         agent={agent}
// // // //         onDrugNameChange={(e) => setDrugName(e.target.value)}
// // // //         onIngredientsChange={(e) => setIngredients(e.target.value)}
// // // //         onAgentChange={(e) => setAgent(e.target.value)}
// // // //         mode={editingId !== null ? "edit" : "create"}
// // // //       />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Table;
// // import React, { useState, useEffect } from "react";
// // import Axios from "./api/axios";
// // import { motion } from "framer-motion";

// // const fadeInOut = {
// //   initial: { opacity: 0 },
// //   animate: { opacity: 1 },
// //   exit: { opacity: 0 },
// // };

// // const Table = () => {
// //   const [data, setData] = useState([]);
// //   const [guid, setGuid] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [originalData, setOriginalData] = useState([]);
// //   const [editableRows, setEditableRows] = useState({});
// //   const [isEditing, setIsEditing] = useState(false);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         setLoading(true);

// //         const response = await Axios.get(
// //           guid ? `/api/atc/v1.0?guid=${guid}` : "/api/atc/v1.0"
// //         );
// //         setData(Array.isArray(response.data) ? response.data : []);

// //         // Fetch related ATC codes for each ATC item
// //         const atcCodePromises = response.data.map(async (atcItem) => {
// //           const atcCodeResponse = await Axios.get(
// //             `/api/atccodes/v1.0/${atcItem.guid}`
// //           );
// //           return {
// //             atcItem,
// //             atcCodes: Array.isArray(atcCodeResponse.data)
// //               ? atcCodeResponse.data
// //               : [],
// //           };
// //         });
// //         const atcCodeData = await Promise.all(atcCodePromises);
// //         setData(atcCodeData);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, [guid]);

// //   const handleInputChange = (e, index) => {
// //     const newData = [...data];
// //     newData[index][e.target.name] = e.target.value;
// //     setData(newData);
// //   };

// //   const handleEdit = (index) => {
// //     setEditableRows((prev) => ({
// //       ...prev,
// //       [index]: true,
// //     }));
// //     setIsEditing(true);
// //   };

// //   const handleSave = async (index) => {
// //     try {
// //       const editedItem = data[index];
// //       await Axios.put(`/api/atccodes/v1.0`, editedItem);
// //       setEditableRows((prev) => ({
// //         ...prev,
// //         [index]: false,
// //       }));
// //       setIsEditing(false);
// //       fetchData();
// //     } catch (error) {
// //       console.error("Error editing data:", error);
// //     }
// //   };

// //   const handleCancel = (index) => {
// //     const newData = [...data];
// //     newData[index] = originalData[index]; // Revert to original data
// //     setData(newData);
// //     setEditableRows((prev) => ({
// //       ...prev,
// //       [index]: false,
// //     }));
// //     setIsEditing(false);
// //   };

// //   return (
// //     <motion.div
// //       initial="initial"
// //       animate="animate"
// //       exit="exit"
// //       variants={fadeInOut}
// //     >
// //       <div className="container mx-auto">
// //         <table className="min-w-full table-auto">
// //           <thead>
// //             <tr>
// //               <th className="px-4 py-2">ATC</th>
// //               <th className="px-4 py-2">Level Name</th>
// //               <th className="px-4 py-2">Level Name (Arabic)</th>
// //               <th className="px-4 py-2">ATC Related Label</th>
// //               <th className="px-4 py-2">Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {data.map((atcItem, index) => (
// //               <tr key={`${atcItem.guid}_${index}`}>
// //                 <td className="border px-4 py-2">
// //                   {editableRows[index] ? (
// //                     <input
// //                       type="text"
// //                       name="code"
// //                       value={atcItem.code}
// //                       onChange={(e) => handleInputChange(e, index)}
// //                     />
// //                   ) : (
// //                     atcItem.code
// //                   )}
// //                 </td>
// //                 <td className="border px-4 py-2">
// //                   {editableRows[index] ? (
// //                     <input
// //                       type="text"
// //                       name="levelName"
// //                       value={atcItem.levelName}
// //                       onChange={(e) => handleInputChange(e, index)}
// //                     />
// //                   ) : (
// //                     atcItem.levelName
// //                   )}
// //                 </td>
// //                 <td className="border px-4 py-2">
// //                   {editableRows[index] ? (
// //                     <input
// //                       type="text"
// //                       name="levelNameAr"
// //                       value={atcItem.levelNameAr}
// //                       onChange={(e) => handleInputChange(e, index)}
// //                     />
// //                   ) : (
// //                     atcItem.levelNameAr
// //                   )}
// //                 </td>
// //                 <td className="border px-4 py-2">
// //                   {editableRows[index] ? (
// //                     <input
// //                       type="text"
// //                       name="atcRelatedLabel"
// //                       value={atcItem.atcRelatedLabel}
// //                       onChange={(e) => handleInputChange(e, index)}
// //                     />
// //                   ) : (
// //                     atcItem.atcRelatedLabel
// //                   )}
// //                 </td>
// //                 <td className="border px-4 py-2">
// //                   {editableRows[index] ? (
// //                     <div>
// //                       <button
// //                         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
// //                         onClick={() => handleSave(index)}
// //                       >
// //                         Save
// //                       </button>
// //                       <button
// //                         className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 ml-2"
// //                         onClick={() => handleCancel(index)}
// //                       >
// //                         Cancel
// //                       </button>
// //                     </div>
// //                   ) : (
// //                     <button
// //                       className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
// //                       onClick={() => handleEdit(index)}
// //                     >
// //                       Edit
// //                     </button>
// //                   )}
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export default Table;

// // ////////////////////////////////

// // import React, { useState, useEffect } from "react";
// // import Axios from "./api/axios";
// // import { motion } from "framer-motion";

// // const fadeInOut = {
// //   initial: { opacity: 0 },
// //   animate: { opacity: 1 },
// //   exit: { opacity: 0 },
// // };

// // const Table = () => {
// //   const [atcCodes, setAtcCodes] = useState([]);
// //   const [filteredData, setFilteredData] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [editableRows, setEditableRows] = useState({});
// //   const [originalData, setOriginalData] = useState({});
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [itemsPerPage] = useState(10);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         setLoading(true);
// //         const atcResponse = await Axios.get("/api/atc/v1.0");
// //         const atcItems = Array.isArray(atcResponse.data)
// //           ? atcResponse.data
// //           : [];
// //         console.log("ATC Data:", atcItems);
// //         const atcCodeData = await Promise.all(
// //           atcItems.map(async (atcItem) => {
// //             const atcCodeResponse = await Axios.get(
// //               `/api/atccodes/v1.0/codes/${atcItem.guid}`
// //             );
// //             return atcCodeResponse.data;
// //           })
// //         );
// //         console.log("ATC Code Data:", atcCodeData);
// //         setAtcCodes(atcCodeData);
// //         setFilteredData(atcCodeData);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   useEffect(() => {
// //     const sortedData = [...atcCodes].sort((a, b) => {
// //       if (sortConfig.key && a[sortConfig.key] && b[sortConfig.key]) {
// //         if (a[sortConfig.key] < b[sortConfig.key]) {
// //           return sortConfig.direction === "asc" ? -1 : 1;
// //         }
// //         if (a[sortConfig.key] > b[sortConfig.key]) {
// //           return sortConfig.direction === "asc" ? 1 : -1;
// //         }
// //       }
// //       return 0;
// //     });
// //     setFilteredData(sortedData);
// //   }, [sortConfig, atcCodes]);

// //   const handleInputChange = (e, index, fieldName) => {
// //     const newData = [...atcCodes];
// //     newData[index] = { ...newData[index] }; // Create a copy of the nested object
// //     newData[index][fieldName] = e.target.value;
// //     setAtcCodes(newData);
// //   };

// //   const handleEdit = (index) => {
// //     setOriginalData((prev) => ({
// //       ...prev,
// //       [index]: { ...atcCodes[index] },
// //     }));

// //     setEditableRows((prev) => ({
// //       ...prev,
// //       [index]: true,
// //     }));
// //   };

// //   const handleSave = async (index) => {
// //     try {
// //       const atcCodeItem = atcCodes[index];
// //       console.log("atcCodeItem:", atcCodeItem);

// //       if (!atcCodeItem || !atcCodeItem[0]) {
// //         console.error("Error editing data: ATC code item not found");
// //         return;
// //       }

// //       const editedItem = atcCodeItem[0]; // Access the first item in the array
// //       console.log("editedItem:", editedItem);

// //       if (!editedItem || !editedItem.guid) {
// //         console.error("Error editing data: Edited item or guid not found");
// //         return;
// //       }

// //       const parentAtcGuid = editedItem.atcGuid; // Use atcGuid from the editedItem
// //       console.log("parentAtcGuid:", parentAtcGuid);

// //       if (!parentAtcGuid) {
// //         console.error("Error editing data: Parent ATC GUID not found");
// //         return;
// //       }

// //       const config = {
// //         headers: {
// //           Accept: "application/json",
// //           "Content-Type": "application/json",
// //         },
// //       };

// //       const requestBody = {
// //         guid: editedItem.guid,
// //         atcGuid: parentAtcGuid,
// //         code: editedItem.code,
// //         levelName: editedItem.levelName,
// //         levelNameAr: editedItem.levelNameAr,
// //         substanceName: editedItem.substanceName,
// //         atcingredientName: editedItem.atcingredientName,
// //         atcingredientNameAr: editedItem.atcingredientNameAr,
// //         interactionIngredientName: editedItem.interactionIngredientName,
// //       };

// //       await Axios.put(`/api/atccodes/v1.0`, requestBody, config);
// //       setEditableRows((prev) => ({
// //         ...prev,
// //         [index]: false,
// //       }));
// //     } catch (error) {
// //       console.error("Error editing data:", error);
// //     }
// //   };

// //   const handleCancel = (index) => {
// //     const newData = [...atcCodes];
// //     newData[index] = originalData[index];
// //     setAtcCodes(newData);
// //     setEditableRows((prev) => ({
// //       ...prev,
// //       [index]: false,
// //     }));
// //   };

// //   const handleSearch = (e) => {
// //     setSearchTerm(e.target.value);
// //   };

// //   const handleSort = (key) => {
// //     let direction = "asc";
// //     if (sortConfig.key === key && sortConfig.direction === "asc") {
// //       direction = "desc";
// //     }
// //     setSortConfig({ key, direction });
// //   };

// //   const indexOfLastItem = currentPage * itemsPerPage;
// //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// //   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

// //   return (
// //     <motion.div
// //       initial="initial"
// //       animate="animate"
// //       exit="exit"
// //       variants={fadeInOut}
// //     >
// //       <div className="container mx-auto">
// //         <input
// //           type="text"
// //           placeholder="Search..."
// //           value={searchTerm}
// //           onChange={handleSearch}
// //           className="mb-4 px-4 py-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
// //         />
// //         <div className="overflow-x-auto">
// //           <table className="min-w-full table-auto">
// //             {/* Table headers */}
// //             <thead>
// //               <tr className="bg-gray-200">
// //                 <th
// //                   onClick={() => handleSort("code")}
// //                   className="px-4 py-2 cursor-pointer"
// //                 >
// //                   ATC Code
// //                 </th>
// //                 <th
// //                   onClick={() => handleSort("levelName")}
// //                   className="px-4 py-2 cursor-pointer"
// //                 >
// //                   Level Name
// //                 </th>
// //                 <th
// //                   onClick={() => handleSort("levelNameAr")}
// //                   className="px-4 py-2 cursor-pointer"
// //                 >
// //                   Level Name (Arabic)
// //                 </th>
// //                 <th className="px-4 py-2">Actions</th>
// //               </tr>
// //             </thead>
// //             {/* Table body */}
// //             <tbody>
// //               {filteredData.map((atcCodeItem, index) => (
// //                 <tr key={index} className="border-b">
// //                   <td className="px-4 py-2 whitespace-nowrap">
// //                     {editableRows[index] ? (
// //                       <input
// //                         type="text"
// //                         value={atcCodeItem[0].code}
// //                         onChange={(e) => handleInputChange(e, index, 0)}
// //                         className="border rounded p-1"
// //                       />
// //                     ) : (
// //                       atcCodeItem && atcCodeItem[0] && atcCodeItem[0].code
// //                     )}
// //                   </td>
// //                   <td className="px-4 py-2 whitespace-nowrap">
// //                     {editableRows[index] ? (
// //                       <input
// //                         type="text"
// //                         value={atcCodeItem[0].levelName}
// //                         onChange={(e) => handleInputChange(e, index, 0)}
// //                         className="border rounded p-1"
// //                       />
// //                     ) : (
// //                       atcCodeItem && atcCodeItem[0] && atcCodeItem[0].levelName
// //                     )}
// //                   </td>
// //                   <td className="px-4 py-2 whitespace-nowrap">
// //                     {editableRows[index] ? (
// //                       <input
// //                         type="text"
// //                         value={atcCodeItem[0].levelNameAr}
// //                         onChange={(e) => handleInputChange(e, index, 0)}
// //                         className="border rounded p-1"
// //                       />
// //                     ) : (
// //                       atcCodeItem &&
// //                       atcCodeItem[0] &&
// //                       atcCodeItem[0].levelNameAr
// //                     )}
// //                   </td>
// //                   <td className="px-4 py-2 whitespace-nowrap">
// //                     {editableRows[index] ? (
// //                       <div>
// //                         <button
// //                           onClick={() => handleSave(index)}
// //                           className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //                         >
// //                           Save
// //                         </button>
// //                         <button
// //                           onClick={() => handleCancel(index)}
// //                           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //                         >
// //                           Cancel
// //                         </button>
// //                       </div>
// //                     ) : (
// //                       <button
// //                         onClick={() => handleEdit(index)}
// //                         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //                       >
// //                         Edit
// //                       </button>
// //                     )}
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //         {/* Pagination */}
// //         <ul className="pagination mt-4 flex justify-center">
// //           {Array(Math.ceil(filteredData.length / itemsPerPage))
// //             .fill()
// //             .map((_, i) => (
// //               <li
// //                 key={i}
// //                 onClick={() => setCurrentPage(i + 1)}
// //                 className="cursor-pointer mx-1 px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
// //               >
// //                 {i + 1}
// //               </li>
// //             ))}
// //         </ul>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export default Table;



// import React, { useState, useEffect } from "react";
// import Axios from "./api/axios";
// import { motion } from "framer-motion";

// const fadeInOut = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   exit: { opacity: 0 },
// };

// const Table = () => {
//   const [atcCodes, setAtcCodes] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [editableRows, setEditableRows] = useState({});
//   const [originalData, setOriginalData] = useState({});
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(10);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const atcResponse = await Axios.get("/api/atc/v1.0");
//         const atcItems = Array.isArray(atcResponse.data)
//           ? atcResponse.data
//           : [];
//         console.log("ATC Data:", atcItems);
//         const atcCodeData = await Promise.all(
//           atcItems.map(async (atcItem) => {
//             const atcCodeResponse = await Axios.get(
//               `/api/atccodes/v1.0/codes/${atcItem.guid}`
//             );
//             return atcCodeResponse.data;
//           })
//         );
//         console.log("ATC Code Data:", atcCodeData);
//         setAtcCodes(atcCodeData);
//         setFilteredData(atcCodeData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const sortedData = [...atcCodes].sort((a, b) => {
//       if (sortConfig.key && a[sortConfig.key] && b[sortConfig.key]) {
//         if (a[sortConfig.key] < b[sortConfig.key]) {
//           return sortConfig.direction === "asc" ? -1 : 1;
//         }
//         if (a[sortConfig.key] > b[sortConfig.key]) {
//           return sortConfig.direction === "asc" ? 1 : -1;
//         }
//       }
//       return 0;
//     });
//     setFilteredData(sortedData);
//   }, [sortConfig, atcCodes]);

//   const handleInputChange = (e, index, fieldName) => {
//     const newData = [...atcCodes];
//     newData[index] = { ...newData[index] }; // Create a copy of the nested object
//     newData[index][fieldName] = e.target.value;
//     setAtcCodes(newData);
//   };

//   const handleEdit = (index) => {
//     setOriginalData((prev) => ({
//       ...prev,
//       [index]: { ...atcCodes[index] },
//     }));

//     setEditableRows((prev) => ({
//       ...prev,
//       [index]: true,
//     }));
//   };

//   const handleSave = async (index) => {
//     try {
//       const atcCodeItem = atcCodes[index];
//       console.log("atcCodeItem:", atcCodeItem);

//       if (!atcCodeItem || !atcCodeItem[0]) {
//         console.error("Error editing data: ATC code item not found");
//         return;
//       }

//       const editedItem = atcCodeItem[0]; // Access the first item in the array
//       console.log("editedItem:", editedItem);

//       if (!editedItem || !editedItem.guid) {
//         console.error("Error editing data: Edited item or guid not found");
//         return;
//       }

//       const parentAtcGuid = editedItem.atcGuid; // Use atcGuid from the editedItem
//       console.log("parentAtcGuid:", parentAtcGuid);

//       if (!parentAtcGuid) {
//         console.error("Error editing data: Parent ATC GUID not found");
//         return;
//       }

//       const config = {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//       };

//       const requestBody = {
//         guid: editedItem.guid,
//         atcGuid: parentAtcGuid,
//         code: editedItem.code,
//         levelName: editedItem.levelName,
//         levelNameAr: editedItem.levelNameAr,
//         substanceName: editedItem.substanceName,
//         atcingredientName: editedItem.atcingredientName,
//         atcingredientNameAr: editedItem.atcingredientNameAr,
//         interactionIngredientName: editedItem.interactionIngredientName,
//       };

//       await Axios.put(`/api/atccodes/v1.0`, requestBody, config);
//       setEditableRows((prev) => ({
//         ...prev,
//         [index]: false,
//       }));
//     } catch (error) {
//       console.error("Error editing data:", error);
//     }
//   };

//   const handleCancel = (index) => {
//     const newData = [...atcCodes];
//     newData[index] = originalData[index];
//     setAtcCodes(newData);
//     setEditableRows((prev) => ({
//       ...prev,
//       [index]: false,
//     }));
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSort = (key) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key, direction });
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       variants={fadeInOut}
//     >
//       <div className="container mx-auto">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={handleSearch}
//           className="mb-4 px-4 py-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
//         />
//         <div className="overflow-x-auto">
//           <table className="min-w-full table-auto">
//             {/* Table headers */}
//             <thead>
//               <tr className="bg-gray-200">
//                 <th
//                   onClick={() => handleSort("code")}
//                   className="px-4 py-2 cursor-pointer"
//                 >
//                   ATC Code
//                 </th>
//                 <th
//                   onClick={() => handleSort("levelName")}
//                   className="px-4 py-2 cursor-pointer"
//                 >
//                   Level Name
//                 </th>
//                 <th
//                   onClick={() => handleSort("levelNameAr")}
//                   className="px-4 py-2 cursor-pointer"
//                 >
//                   Level Name (Arabic)
//                 </th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             {/* Table body */}
//             <tbody>
//               {filteredData.map((atcCodeItem, index) => (
//                 <tr key={index} className="border-b">
//                   <td className="px-4 py-2 whitespace-nowrap">
//                     {editableRows[index] ? (
//                       <input
//                         type="text"
//                         value={atcCodeItem[0].code}
//                         onChange={(e) => handleInputChange(e, index, 0)}
//                         className="border rounded p-1"
//                       />
//                     ) : (
//                       atcCodeItem && atcCodeItem[0] && atcCodeItem[0].code
//                     )}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap">
//                     {editableRows[index] ? (
//                       <input
//                         type="text"
//                         value={atcCodeItem[0].levelName}
//                         onChange={(e) => handleInputChange(e, index, 0)}
//                         className="border rounded p-1"
//                       />
//                     ) : (
//                       atcCodeItem && atcCodeItem[0] && atcCodeItem[0].levelName
//                     )}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap">
//                     {editableRows[index] ? (
//                       <input
//                         type="text"
//                         value={atcCodeItem[0].levelNameAr}
//                         onChange={(e) => handleInputChange(e, index, 0)}
//                         className="border rounded p-1"
//                       />
//                     ) : (
//                       atcCodeItem &&
//                       atcCodeItem[0] &&
//                       atcCodeItem[0].levelNameAr
//                     )}
//                   </td>
//                   <td className="px-4 py-2 whitespace-nowrap">
//                     {editableRows[index] ? (
//                       <div>
//                         <button
//                           onClick={() => handleSave(index)}
//                           className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         >
//                           Save
//                         </button>
//                         <button
//                           onClick={() => handleCancel(index)}
//                           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     ) : (
//                       <button
//                         onClick={() => handleEdit(index)}
//                         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                       >
//                         Edit
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         {/* Pagination */}
//         <ul className="pagination mt-4 flex justify-center">
//           {Array(Math.ceil(filteredData.length / itemsPerPage))
//             .fill()
//             .map((_, i) => (
//               <li
//                 key={i}
//                 onClick={() => setCurrentPage(i + 1)}
//                 className="cursor-pointer mx-1 px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
//               >
//                 {i + 1}
//               </li>
//             ))}
//         </ul>
//       </div>
//     </motion.div>
//   );
// };

// export default Table;
import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueryClient,
  useMutation,
} from '@tanstack/react-query'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


let id = 0
let list = [
  'apple',
  'banana',
  'pineapple',
  'grapefruit',
  'dragonfruit',
  'grapes',
].map((d) => ({ id: id++, name: d, notes: 'These are some notes' }))

let errorRate = 0.05
let queryTimeMin = 1000
let queryTimeMax = 2000

const queryClient = new QueryClient()

function Root() {
  const [staleTime, setStaleTime] = React.useState(1000)
  const [gcTime, setgcTime] = React.useState(3000)
  const [localErrorRate, setErrorRate] = React.useState(errorRate)
  const [localFetchTimeMin, setLocalFetchTimeMin] = React.useState(queryTimeMin)
  const [localFetchTimeMax, setLocalFetchTimeMax] = React.useState(queryTimeMax)

  React.useEffect(() => {
    errorRate = localErrorRate
    queryTimeMin = localFetchTimeMin
    queryTimeMax = localFetchTimeMax
  }, [localErrorRate, localFetchTimeMax, localFetchTimeMin])

  React.useEffect(() => {
    queryClient.setDefaultOptions({
      queries: {
        staleTime,
        gcTime,
      },
    })
  }, [gcTime, staleTime])

  return (
    <QueryClientProvider client={queryClient}>
      <p>
        The "staleTime" and "gcTime" durations have been altered in this example
        to show how query stale-ness and query caching work on a granular level
      </p>
      <div>
        Stale Time:{' '}
        <input
          type="number"
          min="0"
          step="1000"
          value={staleTime}
          onChange={(e) => setStaleTime(parseFloat(e.target.value, 10))}
          style={{ width: '100px' }}
        />
      </div>
      <div>
        Garbage collection Time:{' '}
        <input
          type="number"
          min="0"
          step="1000"
          value={gcTime}
          onChange={(e) => setgcTime(parseFloat(e.target.value, 10))}
          style={{ width: '100px' }}
        />
      </div>
      <br />
      <div>
        Error Rate:{' '}
        <input
          type="number"
          min="0"
          max="1"
          step=".05"
          value={localErrorRate}
          onChange={(e) => setErrorRate(parseFloat(e.target.value, 10))}
          style={{ width: '100px' }}
        />
      </div>
      <div>
        Fetch Time Min:{' '}
        <input
          type="number"
          min="1"
          step="500"
          value={localFetchTimeMin}
          onChange={(e) => setLocalFetchTimeMin(parseFloat(e.target.value, 10))}
          style={{ width: '60px' }}
        />{' '}
      </div>
      <div>
        Fetch Time Max:{' '}
        <input
          type="number"
          min="1"
          step="500"
          value={localFetchTimeMax}
          onChange={(e) => setLocalFetchTimeMax(parseFloat(e.target.value, 10))}
          style={{ width: '60px' }}
        />
      </div>
      <br />
      <App />
      <br />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}

function Table() {
  const queryClient = useQueryClient()
  const [editingIndex, setEditingIndex] = React.useState(null)
  const [views, setViews] = React.useState(['', 'fruit', 'grape'])
  // const [views, setViews] = React.useState([""]);

  return (
    <div className="App">
      <div>
        <button onClick={() => queryClient.invalidateQueries()}>
          Force Refetch All
        </button>
      </div>
      <br />
      <hr />
      {views.map((view, index) => (
        <div key={index}>
          <Todos
            initialFilter={view}
            setEditingIndex={setEditingIndex}
            onRemove={() => {
              setViews((old) => [...old, ''])
            }}
          />
          <br />
        </div>
      ))}
      <button
        onClick={() => {
          setViews((old) => [...old, ''])
        }}
      >
        Add Filter List
      </button>
      <hr />
      {editingIndex !== null ? (
        <>
          <EditTodo
            editingIndex={editingIndex}
            setEditingIndex={setEditingIndex}
          />
          <hr />
        </>
      ) : null}
      <AddTodo />
    </div>
  )
}

function Todos({ initialFilter = '', setEditingIndex }) {
  const [filter, setFilter] = React.useState(initialFilter)

  const { status, data, isFetching, error, failureCount, refetch } = useQuery({
    queryKey: ['todos', { filter }],
    queryFn: fetchTodos,
  })

  return (
    <div>
      <div>
        <label>
          Filter:{' '}
          <input value={filter} onChange={(e) => setFilter(e.target.value)} />
        </label>
      </div>
      {status === 'pending' ? (
        <span>Loading... (Attempt: {failureCount + 1})</span>
      ) : status === 'error' ? (
        <span>
          Error: {error.message}
          <br />
          <button onClick={() => refetch()}>Retry</button>
        </span>
      ) : (
        <>
          <ul>
            {data
              ? data.map((todo) => (
                  <li key={todo.id}>
                    {todo.name}{' '}
                    <button onClick={() => setEditingIndex(todo.id)}>
                      Edit
                    </button>
                  </li>
                ))
              : null}
          </ul>
          <div>
            {isFetching ? (
              <span>
                Background Refreshing... (Attempt: {failureCount + 1})
              </span>
            ) : (
              <span>&nbsp;</span>
            )}
          </div>
        </>
      )}
    </div>
  )
}
export default Table

function EditTodo({ editingIndex, setEditingIndex }) {
  const queryClient = useQueryClient()

  // Don't attempt to query until editingIndex is truthy
  const { status, data, isFetching, error, failureCount, refetch } = useQuery({
    queryKey: ['todo', { id: editingIndex }],
    queryFn: () => fetchTodoById({ id: editingIndex }),
    enabled: editingIndex !== null,
  })

  const [todo, setTodo] = React.useState(data || {})

  React.useEffect(() => {
    if (editingIndex !== null && data) {
      setTodo(data)
    } else {
      setTodo({})
    }
  }, [data, editingIndex])

  const saveMutation = useMutation({
    mutationFn: patchTodo,
    onSuccess: (data) => {
      // Update `todos` and the individual todo queries when this mutation succeeds
      queryClient.invalidateQueries({ queryKey: ['todos'] })
      queryClient.setQueryData(['todo', { id: editingIndex }], data)
    },
  })

  const onSave = () => {
    saveMutation.mutate(todo)
  }

  const disableEditSave =
    status === 'pending' || saveMutation.status === 'pending'

  return (
    <div>
      <div>
        {data ? (
          <>
            <button onClick={() => setEditingIndex(null)}>Back</button> Editing
            Todo "{data.name}" (#
            {editingIndex})
          </>
        ) : null}
      </div>
      {status === 'pending' ? (
        <span>Loading... (Attempt: {failureCount + 1})</span>
      ) : error ? (
        <span>
          Error! <button onClick={() => refetch()}>Retry</button>
        </span>
      ) : (
        <>
          <label>
            Name:{' '}
            <input
              value={todo.name}
              onChange={(e) =>
                e.persist() ||
                setTodo((old) => ({ ...old, name: e.target.value }))
              }
              disabled={disableEditSave}
            />
          </label>
          <label>
            Notes:{' '}
            <input
              value={todo.notes}
              onChange={(e) =>
                e.persist() ||
                setTodo((old) => ({ ...old, notes: e.target.value }))
              }
              disabled={disableEditSave}
            />
          </label>
          <div>
            <button onClick={onSave} disabled={disableEditSave}>
              Save
            </button>
          </div>
          <div>
            {saveMutation.status === 'pending'
              ? 'Saving...'
              : saveMutation.status === 'error'
                ? saveMutation.error.message
                : 'Saved!'}
          </div>
          <div>
            {isFetching ? (
              <span>
                Background Refreshing... (Attempt: {failureCount + 1})
              </span>
            ) : (
              <span>&nbsp;</span>
            )}
          </div>
        </>
      )}
    </div>
  )
}

function AddTodo() {
  const queryClient = useQueryClient()
  const [name, setName] = React.useState('')

  const addMutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={addMutation.status === 'pending'}
      />
      <button
        onClick={() => {
          addMutation.mutate({ name })
        }}
        disabled={addMutation.status === 'pending' || !name}
      >
        Add Todo
      </button>
      <div>
        {addMutation.status === 'pending'
          ? 'Saving...'
          : addMutation.status === 'error'
            ? addMutation.error.message
            : 'Saved!'}
      </div>
    </div>
  )
}

function fetchTodos({ signal, queryKey: [, { filter }] }) {
  console.info('fetchTodos', { filter })

  if (signal) {
    signal.addEventListener('abort', () => {
      console.info('cancelled', filter)
    })
  }

  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        if (Math.random() < errorRate) {
          return reject(
            new Error(JSON.stringify({ fetchTodos: { filter } }, null, 2)),
          )
        }
        resolve(list.filter((d) => d.name.includes(filter)))
      },
      queryTimeMin + Math.random() * (queryTimeMax - queryTimeMin),
    )
  })
}

function fetchTodoById({ id }) {
  console.info('fetchTodoById', { id })
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        if (Math.random() < errorRate) {
          return reject(
            new Error(JSON.stringify({ fetchTodoById: { id } }, null, 2)),
          )
        }
        resolve(list.find((d) => d.id === id))
      },
      queryTimeMin + Math.random() * (queryTimeMax - queryTimeMin),
    )
  })
}

function postTodo({ name, notes }) {
  console.info('postTodo', { name, notes })
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        if (Math.random() < errorRate) {
          return reject(
            new Error(JSON.stringify({ postTodo: { name, notes } }, null, 2)),
          )
        }
        const todo = { name, notes, id: id++ }
        list = [...list, todo]
        resolve(todo)
      },
      queryTimeMin + Math.random() * (queryTimeMax - queryTimeMin),
    )
  })
}

function patchTodo(todo) {
  console.info('patchTodo', todo)
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        if (Math.random() < errorRate) {
          return reject(new Error(JSON.stringify({ patchTodo: todo }, null, 2)))
        }
        list = list.map((d) => {
          if (d.id === todo.id) {
            return todo
          }
          return d
        })
        resolve(todo)
      },
      queryTimeMin + Math.random() * (queryTimeMax - queryTimeMin),
    )
  })
}

// const rootElement = document.getElementById('root')
// ReactDOM.createRoot(rootElement).render(<Root />)
