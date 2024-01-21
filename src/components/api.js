// api.js
import axios from "axios";

export const fetchTableSchema = async (tableName) => {
  try {
    const response = await axios.get(
      `http://85.112.70.8:3010/api/v1.0/schema/${tableName}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching schema:", error);
    return null;
  }
};
