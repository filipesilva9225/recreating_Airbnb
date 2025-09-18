import express from "express";
import "dotenv/config";

const app = express();
const PORT = 3000;

process.env.PORT;

app.listen(PORT, () => {
  console.log(`servidor está na porta: ${PORT}`);
});
