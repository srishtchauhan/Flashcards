const express = require("express");
const app = express();
const cors = require("cors");
const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config();

app.use(cors());
app.use(express.json());

// Establish MySQL connection using Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD , {
    host: process.env.DB_HOST ,    dialect: 'mysql', port: process.env.PORT,
    // logging: false,
    dialectOptions: {
        connectTimeout: 60000  // Increase to 60 seconds (60000 ms)
      }
});

// Define the model
const Todo = sequelize.define('Todo', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'todos'
});

// Sync the model with the database
sequelize.sync().then(() => {
    console.log("Database & tables created!");
}).catch((err) => {
    console.error("Unable to sync with the database:", err);
});

// Routes
app.post("/create", async (req, res) => {
    try {
        await Todo.create({
            title: req.body.title,
            description: req.body.description
        });
        res.status(200).json({ msg: "Todo created" });
        console.log("DATA SENT");
    } catch (err) {
        res.status(500).json({ error: "Error creating todo" });
        console.error(err);
    }
});

// app.get("/getData", async (req, res) => {
//     try {
//         const data = await Todo.findAll();
//         res.status(200).json(data);
//     } catch (err) {
//         res.status(500).json({ error: "Error retrieving data" });
//         console.error(err);
//     }
// });
app.get("/getData", async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ error: "Error retrieving data" });
        console.error(err);
    }
});

app.get("/get_data", async (req, res) => {
    const { page = 1, limit = 1 } = req.query; // Default: page 1, limit 1

    try {
        const todos = await Todo.findAll({
            limit: parseInt(limit),           // Number of records to fetch
            offset: (page - 1) * limit        // Skip records according to the page number
        });

        // Get the total count of records for pagination info
        const totalCount = await Todo.count();

        res.status(200).json({
            todos,
            pagination: {
                totalItems: totalCount,
                totalPages: Math.ceil(totalCount / limit),
                currentPage: parseInt(page),
                perPage: parseInt(limit)
            }
        });
    } catch (err) {
        res.status(500).json({ error: "Error retrieving data" });
        console.error(err);
    }
});



app.put("/editData/:id", async (req, res) => {
    try {
        await Todo.update(
            {
                title: req.body.title,
                description: req.body.description
            },
            { where: { id: req.params.id } }
        );
        res.status(200).json({ msg: "Todo updated" });
        console.log("Data updated");
    } catch (err) {
        res.status(500).json({ error: "Error updating todo" });
        console.error(err);
    }
});

app.delete("/deleteData/:id", async (req, res) => {
    try {
        await Todo.destroy({ where: { id: req.params.id } });
        res.status(200).json({ msg: "Todo deleted" });
        console.log("Data deleted");
    } catch (err) {
        res.status(500).json({ error: "Error deleting todo" });
        console.error(err);
    }
});

// Start the server
const port = process.env.PORT;
app.listen(port, () => console.log(`Server has started at port ${port}`));
