import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import officesRouter from "./routes/offices.js";
import safetyRouter from "./routes/safety-scam.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/offices", officesRouter);
app.use("/check", safetyRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
