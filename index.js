import express from "express";
import cors from "cors";
import UserRoute from "./Routes/UserRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send({ name: "Sarah", age: 28, address: "Tangerang" });
});
app.use(UserRoute);

// app.listen(PORT, () => console.log(`Server sudah menyala di port ${PORT}`));

app.listen(PORT, "0.0.0.0", function () {});
