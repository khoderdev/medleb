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
// //   const [originalData, setOriginalData] = useState([]);
// //   const [editableRows, setEditableRows] = useState({});
// //   const [isEditing, setIsEditing] = useState(false);

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const fetchData = async () => {
// //     try {
// //       const response = await Axios.get("/api/atc/v1.0");
// //       setData(response.data);
// //       setOriginalData(response.data);
// //       setEditableRows({});
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //     }
// //   };

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
// //             {data.map((item, index) => (
// //               <tr key={item.guid}>
// //                 <td className="border px-4 py-2">
// //                   {editableRows[index] ? (
// //                     <input
// //                       type="text"
// //                       name="code"
// //                       value={item.code}
// //                       onChange={(e) => handleInputChange(e, index)}
// //                     />
// //                   ) : (
// //                     item.code
// //                   )}
// //                 </td>
// //                 <td className="border px-4 py-2">
// //                   {editableRows[index] ? (
// //                     <input
// //                       type="text"
// //                       name="levelName"
// //                       value={item.levelName}
// //                       onChange={(e) => handleInputChange(e, index)}
// //                     />
// //                   ) : (
// //                     item.levelName
// //                   )}
// //                 </td>
// //                 <td className="border px-4 py-2">
// //                   {editableRows[index] ? (
// //                     <input
// //                       type="text"
// //                       name="levelNameAr"
// //                       value={item.levelNameAr}
// //                       onChange={(e) => handleInputChange(e, index)}
// //                     />
// //                   ) : (
// //                     item.levelNameAr
// //                   )}
// //                 </td>
// //                 <td className="border px-4 py-2">
// //                   {editableRows[index] ? (
// //                     <input
// //                       type="text"
// //                       name="atcRelatedLabel"
// //                       value={item.atcRelatedLabel}
// //                       onChange={(e) => handleInputChange(e, index)}
// //                     />
// //                   ) : (
// //                     item.atcRelatedLabel
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

// // ///////////////////////////////////////////////
// // ///////////////////////////////////////////////
// // ///////////////////////////////////////////////
// // ///////////////////////////////////////////////

// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import Modal from "./components/Modals/TableCreateModal";
// // // import { BsPencil, BsTrash } from "react-icons/bs"; // Import icons from react-icons

// // // // Update API_URL
// // // const API_URL = "http://1.1.1.252:3500/api/importations";

// // // const Table = () => {
// // //   const [data, setData] = useState([]);
// // //   const [drugName, setDrugName] = useState("");
// // //   const [ingredients, setIngredients] = useState("");
// // //   const [agent, setAgent] = useState("");
// // //   const [isCreateModalOpen, setCreateModalOpen] = useState(false);
// // //   const [editingId, setEditingId] = useState(null);
// // //   const userRole = useSelector(selectUserRole);

// // //   // If the user is not an admin, don't render the table
// // //   if (userRole !== "admin") {
// // //     return <div>Unauthorized access</div>;
// // //   }

// // //   useEffect(() => {
// // //     fetchData();
// // //   }, []);

// // //   const fetchData = async () => {
// // //     try {
// // //       const response = await axios.get(API_URL);
// // //       console.log("API Response:", response.data); // Log the API response
// // //       setData(response.data);
// // //     } catch (error) {
// // //       console.error("Error fetching data:", error);
// // //     }
// // //   };

// // //   const handleCreate = async () => {
// // //     try {
// // //       const response = await axios.post(API_URL, {
// // //         drugName,
// // //         ingredients,
// // //         agent,
// // //       });
// // //       setData([response.data, ...data]);
// // //       setCreateModalOpen(false);
// // //       setDrugName("");
// // //       setIngredients("");
// // //       setAgent("");
// // //     } catch (error) {
// // //       console.error("Error creating data:", error);
// // //     }
// // //   };

// // //   const handleEdit = (id) => {
// // //     setEditingId(id);
// // //     const itemToEdit = data.find((item) => item._id === id);

// // //     // Check if itemToEdit is not undefined before accessing its properties
// // //     if (itemToEdit) {
// // //       setDrugName(itemToEdit.drugName);
// // //       setIngredients(itemToEdit.ingredients);
// // //       setAgent(itemToEdit.agent);
// // //       setCreateModalOpen(true);
// // //     } else {
// // //       console.error(`Item with id ${id} not found.`);
// // //     }
// // //   };

// // //   const handleUpdate = async () => {
// // //     try {
// // //       // Ensure editingId is a valid value
// // //       if (editingId === null || editingId === undefined) {
// // //         console.error("Invalid editingId");
// // //         return;
// // //       }

// // //       const response = await axios.put(`${API_URL}/${editingId}`, {
// // //         drugName,
// // //         ingredients,
// // //         agent,
// // //       });

// // //       setData(
// // //         data.map((item) => (item._id === editingId ? response.data : item))
// // //       );

// // //       setEditingId(null);
// // //       setCreateModalOpen(false);
// // //       setDrugName("");
// // //       setIngredients("");
// // //       setAgent("");
// // //     } catch (error) {
// // //       console.error("Error updating data:", error);
// // //     }
// // //   };

// // //   const handleDelete = async (id) => {
// // //     try {
// // //       await axios.delete(`${API_URL}/${id}`);
// // //       setData(data.filter((item) => item.id !== id));
// // //     } catch (error) {
// // //       console.error("Error deleting data:", error);
// // //     }
// // //   };

// // //   return (
// // //     <div className=" mt-8 p-4 bg-gray-100">
// // //       <div className="flex justify-end mb-4">
// // //         <button
// // //           className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2"
// // //           onClick={() => {
// // //             setEditingId(null);
// // //             setCreateModalOpen(true);
// // //           }}
// // //         >
// // //           Create
// // //         </button>
// // //       </div>

// // //       <table className="w-full border">
// // //         <thead>
// // //           <tr className="bg-gray-200">
// // //             <th className="border p-2">Drug Name</th>
// // //             <th className="border p-2">Ingredients</th>
// // //             <th className="border p-2">Agent</th>
// // //             <th className="border p-2">Actions</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {data.map((item) => (
// // //             <tr
// // //               key={item._id}
// // //               className={editingId === item.id ? "bg-yellow-200" : "bg-white"}
// // //             >
// // //               <td className="border p-2">{item.drugName}</td>
// // //               <td className="border p-2">{item.ingredients}</td>
// // //               <td className="border p-2">{item.agent}</td>
// // //               <td className="border p-2 w-16">
// // //                 {editingId === item.id ? (
// // //                   <>
// // //                     <button
// // //                       className="rounded-xl bg-green-pri hover:bg-green-sec text-white font-bold py-1 px-2 mr-2"
// // //                       onClick={handleUpdate}
// // //                     >
// // //                       Save
// // //                     </button>
// // //                     <button
// // //                       className="rounded-xl bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2"
// // //                       onClick={() => setEditingId(null)}
// // //                     >
// // //                       Cancel
// // //                     </button>
// // //                   </>
// // //                 ) : (
// // //                   <div className="flex gap-4">
// // //                     <button
// // //                       // className="rounded-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mr-2"
// // //                       onClick={() => handleEdit(item._id)}
// // //                     >
// // //                       <BsPencil style={{ color: "green" }} /> {/* Edit icon */}
// // //                     </button>
// // //                     <button
// // //                       // className="rounded-xl bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2"
// // //                       onClick={() => handleDelete(item.id)}
// // //                     >
// // //                       <BsTrash style={{ color: "red" }} /> {/* Delete icon */}
// // //                     </button>
// // //                   </div>
// // //                 )}
// // //               </td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </table>

// // //       <Modal
// // //         isOpen={isCreateModalOpen}
// // //         onClose={() => {
// // //           setEditingId(null);
// // //           setCreateModalOpen(false);
// // //           setDrugName("");
// // //           setIngredients("");
// // //           setAgent("");
// // //         }}
// // //         onSubmit={editingId !== null ? handleUpdate : handleCreate}
// // //         drugName={drugName}
// // //         ingredients={ingredients}
// // //         agent={agent}
// // //         onDrugNameChange={(e) => setDrugName(e.target.value)}
// // //         onIngredientsChange={(e) => setIngredients(e.target.value)}
// // //         onAgentChange={(e) => setAgent(e.target.value)}
// // //         mode={editingId !== null ? "edit" : "create"}
// // //       />
// // //     </div>
// // //   );
// // // };

// // // export default Table;
// import React, { useState, useEffect } from "react";
// import Axios from "./api/axios";
// import { motion } from "framer-motion";

// const fadeInOut = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   exit: { opacity: 0 },
// };

// const Table = () => {
//   const [data, setData] = useState([]);
//   const [guid, setGuid] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [originalData, setOriginalData] = useState([]);
//   const [editableRows, setEditableRows] = useState({});
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         const response = await Axios.get(
//           guid ? `/api/atc/v1.0?guid=${guid}` : "/api/atc/v1.0"
//         );
//         setData(Array.isArray(response.data) ? response.data : []);

//         // Fetch related ATC codes for each ATC item
//         const atcCodePromises = response.data.map(async (atcItem) => {
//           const atcCodeResponse = await Axios.get(
//             `/api/atccodes/v1.0/${atcItem.guid}`
//           );
//           return {
//             atcItem,
//             atcCodes: Array.isArray(atcCodeResponse.data)
//               ? atcCodeResponse.data
//               : [],
//           };
//         });
//         const atcCodeData = await Promise.all(atcCodePromises);
//         setData(atcCodeData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [guid]);

//   const handleInputChange = (e, index) => {
//     const newData = [...data];
//     newData[index][e.target.name] = e.target.value;
//     setData(newData);
//   };

//   const handleEdit = (index) => {
//     setEditableRows((prev) => ({
//       ...prev,
//       [index]: true,
//     }));
//     setIsEditing(true);
//   };

//   const handleSave = async (index) => {
//     try {
//       const editedItem = data[index];
//       await Axios.put(`/api/atccodes/v1.0`, editedItem);
//       setEditableRows((prev) => ({
//         ...prev,
//         [index]: false,
//       }));
//       setIsEditing(false);
//       fetchData();
//     } catch (error) {
//       console.error("Error editing data:", error);
//     }
//   };

//   const handleCancel = (index) => {
//     const newData = [...data];
//     newData[index] = originalData[index]; // Revert to original data
//     setData(newData);
//     setEditableRows((prev) => ({
//       ...prev,
//       [index]: false,
//     }));
//     setIsEditing(false);
//   };

//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       variants={fadeInOut}
//     >
//       <div className="container mx-auto">
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr>
//               <th className="px-4 py-2">ATC</th>
//               <th className="px-4 py-2">Level Name</th>
//               <th className="px-4 py-2">Level Name (Arabic)</th>
//               <th className="px-4 py-2">ATC Related Label</th>
//               <th className="px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((atcItem, index) => (
//               <tr key={`${atcItem.guid}_${index}`}>
//                 <td className="border px-4 py-2">
//                   {editableRows[index] ? (
//                     <input
//                       type="text"
//                       name="code"
//                       value={atcItem.code}
//                       onChange={(e) => handleInputChange(e, index)}
//                     />
//                   ) : (
//                     atcItem.code
//                   )}
//                 </td>
//                 <td className="border px-4 py-2">
//                   {editableRows[index] ? (
//                     <input
//                       type="text"
//                       name="levelName"
//                       value={atcItem.levelName}
//                       onChange={(e) => handleInputChange(e, index)}
//                     />
//                   ) : (
//                     atcItem.levelName
//                   )}
//                 </td>
//                 <td className="border px-4 py-2">
//                   {editableRows[index] ? (
//                     <input
//                       type="text"
//                       name="levelNameAr"
//                       value={atcItem.levelNameAr}
//                       onChange={(e) => handleInputChange(e, index)}
//                     />
//                   ) : (
//                     atcItem.levelNameAr
//                   )}
//                 </td>
//                 <td className="border px-4 py-2">
//                   {editableRows[index] ? (
//                     <input
//                       type="text"
//                       name="atcRelatedLabel"
//                       value={atcItem.atcRelatedLabel}
//                       onChange={(e) => handleInputChange(e, index)}
//                     />
//                   ) : (
//                     atcItem.atcRelatedLabel
//                   )}
//                 </td>
//                 <td className="border px-4 py-2">
//                   {editableRows[index] ? (
//                     <div>
//                       <button
//                         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                         onClick={() => handleSave(index)}
//                       >
//                         Save
//                       </button>
//                       <button
//                         className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 ml-2"
//                         onClick={() => handleCancel(index)}
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   ) : (
//                     <button
//                       className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//                       onClick={() => handleEdit(index)}
//                     >
//                       Edit
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </motion.div>
//   );
// };

// export default Table;

// ////////////////////////////////

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



import React, { useState, useEffect } from "react";
import Axios from "./api/axios";
import { motion } from "framer-motion";

const fadeInOut = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Table = () => {
  const [atcCodes, setAtcCodes] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editableRows, setEditableRows] = useState({});
  const [originalData, setOriginalData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const atcResponse = await Axios.get("/api/atc/v1.0");
        const atcItems = Array.isArray(atcResponse.data)
          ? atcResponse.data
          : [];
        console.log("ATC Data:", atcItems);
        const atcCodeData = await Promise.all(
          atcItems.map(async (atcItem) => {
            const atcCodeResponse = await Axios.get(
              `/api/atccodes/v1.0/codes/${atcItem.guid}`
            );
            return atcCodeResponse.data;
          })
        );
        console.log("ATC Code Data:", atcCodeData);
        setAtcCodes(atcCodeData);
        setFilteredData(atcCodeData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const sortedData = [...atcCodes].sort((a, b) => {
      if (sortConfig.key && a[sortConfig.key] && b[sortConfig.key]) {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
      }
      return 0;
    });
    setFilteredData(sortedData);
  }, [sortConfig, atcCodes]);

  const handleInputChange = (e, index, fieldName) => {
    const newData = [...atcCodes];
    newData[index] = { ...newData[index] }; // Create a copy of the nested object
    newData[index][fieldName] = e.target.value;
    setAtcCodes(newData);
  };

  const handleEdit = (index) => {
    setOriginalData((prev) => ({
      ...prev,
      [index]: { ...atcCodes[index] },
    }));

    setEditableRows((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const handleSave = async (index) => {
    try {
      const atcCodeItem = atcCodes[index];
      console.log("atcCodeItem:", atcCodeItem);

      if (!atcCodeItem || !atcCodeItem[0]) {
        console.error("Error editing data: ATC code item not found");
        return;
      }

      const editedItem = atcCodeItem[0]; // Access the first item in the array
      console.log("editedItem:", editedItem);

      if (!editedItem || !editedItem.guid) {
        console.error("Error editing data: Edited item or guid not found");
        return;
      }

      const parentAtcGuid = editedItem.atcGuid; // Use atcGuid from the editedItem
      console.log("parentAtcGuid:", parentAtcGuid);

      if (!parentAtcGuid) {
        console.error("Error editing data: Parent ATC GUID not found");
        return;
      }

      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };

      const requestBody = {
        guid: editedItem.guid,
        atcGuid: parentAtcGuid,
        code: editedItem.code,
        levelName: editedItem.levelName,
        levelNameAr: editedItem.levelNameAr,
        substanceName: editedItem.substanceName,
        atcingredientName: editedItem.atcingredientName,
        atcingredientNameAr: editedItem.atcingredientNameAr,
        interactionIngredientName: editedItem.interactionIngredientName,
      };

      await Axios.put(`/api/atccodes/v1.0`, requestBody, config);
      setEditableRows((prev) => ({
        ...prev,
        [index]: false,
      }));
    } catch (error) {
      console.error("Error editing data:", error);
    }
  };

  const handleCancel = (index) => {
    const newData = [...atcCodes];
    newData[index] = originalData[index];
    setAtcCodes(newData);
    setEditableRows((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeInOut}
    >
      <div className="container mx-auto">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="mb-4 px-4 py-2 rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
        />
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            {/* Table headers */}
            <thead>
              <tr className="bg-gray-200">
                <th
                  onClick={() => handleSort("code")}
                  className="px-4 py-2 cursor-pointer"
                >
                  ATC Code
                </th>
                <th
                  onClick={() => handleSort("levelName")}
                  className="px-4 py-2 cursor-pointer"
                >
                  Level Name
                </th>
                <th
                  onClick={() => handleSort("levelNameAr")}
                  className="px-4 py-2 cursor-pointer"
                >
                  Level Name (Arabic)
                </th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {filteredData.map((atcCodeItem, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 whitespace-nowrap">
                    {editableRows[index] ? (
                      <input
                        type="text"
                        value={atcCodeItem[0].code}
                        onChange={(e) => handleInputChange(e, index, 0)}
                        className="border rounded p-1"
                      />
                    ) : (
                      atcCodeItem && atcCodeItem[0] && atcCodeItem[0].code
                    )}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {editableRows[index] ? (
                      <input
                        type="text"
                        value={atcCodeItem[0].levelName}
                        onChange={(e) => handleInputChange(e, index, 0)}
                        className="border rounded p-1"
                      />
                    ) : (
                      atcCodeItem && atcCodeItem[0] && atcCodeItem[0].levelName
                    )}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {editableRows[index] ? (
                      <input
                        type="text"
                        value={atcCodeItem[0].levelNameAr}
                        onChange={(e) => handleInputChange(e, index, 0)}
                        className="border rounded p-1"
                      />
                    ) : (
                      atcCodeItem &&
                      atcCodeItem[0] &&
                      atcCodeItem[0].levelNameAr
                    )}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {editableRows[index] ? (
                      <div>
                        <button
                          onClick={() => handleSave(index)}
                          className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => handleCancel(index)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <ul className="pagination mt-4 flex justify-center">
          {Array(Math.ceil(filteredData.length / itemsPerPage))
            .fill()
            .map((_, i) => (
              <li
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className="cursor-pointer mx-1 px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                {i + 1}
              </li>
            ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Table;