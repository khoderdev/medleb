const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors middleware
const Drug = require("./drugsModel");

const app = express();
const PORT = 3500;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://eoummal:9DlaZdaeNzkzdTBk@cluster0.tsjwz3m.mongodb.net/medleb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`Received ${req.method} request for: ${req.url}`);
  console.log("Request Body:", req.body);
  next();
});

// Route to create a new drug
app.post("/drugs", async (req, res) => {
  try {
    console.log("Creating a new drug. Request data:", req.body);

    // Create a new drug instance using Mongoose model
    const newDrug = new Drug(req.body);

    // Save the drug to the database
    const savedDrug = await newDrug.save();

    console.log("New drug saved:", savedDrug);

    res.status(201).json(savedDrug);
  } catch (error) {
    console.error("Error creating a new drug:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to get all drugs
app.get("/drugs", async (req, res) => {
  try {
    const drugs = await Drug.find();
    res.json(drugs);
  } catch (error) {
    console.error("Error getting drugs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to view drug by ID
app.get("/drugs/:id", async (req, res) => {
  try {
    const drugId = req.params.id;

    if (!drugId) {
      return res.status(404).json({ error: "Drug not found" });
    }

    const drug = await Drug.findById(drugId);

    if (!drug) {
      return res.status(404).json({ error: "Drug not found" });
    }

    res.json(drug);
  } catch (error) {
    console.error("Error viewing drug:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to delete a drug by ID
app.delete("/drugs/:id", async (req, res) => {
  try {
    const drugId = req.params.id;
    const deletedDrug = await Drug.findByIdAndDelete(drugId);

    if (!deletedDrug) {
      return res.status(404).json({ error: "Drug not found" });
    }

    res.status(204).send(); // Respond with a 204 No Content status for successful deletion
  } catch (error) {
    console.error("Error deleting drug:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to update a drug by ID
app.put("/drugs/:id", async (req, res) => {
  try {
    const drugId = req.params.id;

    // Check if drugId is undefined or null
    if (!drugId) {
      return res.status(400).json({ error: "Invalid drug ID" });
    }

    // Find the drug by ID and update its properties
    const updatedDrug = await Drug.findByIdAndUpdate(drugId, req.body, {
      new: true,
    });

    // Check if the drug with the specified ID exists
    if (!updatedDrug) {
      return res.status(404).json({ error: "Drug not found" });
    }

    res.json(updatedDrug);
  } catch (error) {
    console.error("Error updating drug:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to find substitutes by ID
app.get("/substitute/:id", async (req, res) => {
  try {
    const drugId = req.params.id;
    const drug = await Drug.findById(drugId);

    if (!drug) {
      return res.status(404).json({ error: "Drug not found" });
    }

    // Perform logic to find substitutes (replace this with your actual logic)
    const substitutes = await Drug.find({
      /* Your substitution criteria here */
    });

    res.json(substitutes);
  } catch (error) {
    console.error("Error finding substitutes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Additional middleware to log requests and responses
app.use((req, res, next) => {
  console.log(`Sent response for: ${req.method} ${req.url}`);
  next();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://192.168.43.138:${PORT}`);
});
