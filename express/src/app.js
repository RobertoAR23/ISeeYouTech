const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Importar CORS
const sessionMiddleware = require("./middlewares/sessionMiddleware");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(sessionMiddleware);

app.use("/users", userRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada." });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
