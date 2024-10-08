const express = require("express");
const userRoutes = require("./routes/routes");

const app = express();
const port = 3000;

// Reading json from body (client)
app.use(express.json());

// Routes
app.use(userRoutes);

// Middleware to handle page not found
app.use((req, res, next) => {
    res.status(404).json({
        status: "Failed",
        message: "API not found !",
        isSuccess: false,
    });
    // Go to the next middleware
    next();
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
