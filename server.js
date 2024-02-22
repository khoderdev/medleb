// Import required modules
import express, { json } from "express";
import cors from "cors";
import { Sequelize, DataTypes } from "sequelize";

// Initialize Express app
const app = express();
app.use(json());
app.use(cors());

// Define Sequelize connection
const sequelize = new Sequelize({
  dialect: "mssql",
  host: "localhost",
  database: "MedLebOrders",
  username: "sa",
  password: "1234",
});

// Define Sequelize model for your table
const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  drugName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  requestedQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  agent: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orderStatus: {
    type: DataTypes.STRING, // Assuming orderStatus is a string
    allowNull: false,
  },
});

// Define routes for CRUD operations
// Create operation
app.post("/orders", async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read operation
app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update operation
app.put("/orders/:id", async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    await order.update(req.body);
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete operation
app.delete("/orders/:id", async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    await order.destroy();
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
