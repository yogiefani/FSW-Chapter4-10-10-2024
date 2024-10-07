const express = require("express");
const app = express();

const port = 3000;

const carRoutes = require("./routes/car");

app.use(express.json());
app.use("/api/v1/cars", carRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    status: "404",
    message: "Api Not Exist",
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
