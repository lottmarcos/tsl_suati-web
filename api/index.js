import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";
import financeRoutes from "./routes/finance.js";
import memberRoutes from "./routes/member.js";
import subsystemRoutes from "./routes/subsystem.js";
import systemRoutes from "./routes/system.js";
import teamRoutes from "./routes/team.js";

const app = express();

//middlewares

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//routes

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/finance", financeRoutes);
app.use("/api/member", memberRoutes);
app.use("/api/subsystem", subsystemRoutes);
app.use("/api/system", systemRoutes);
app.use("/api/team", teamRoutes);

app.listen(8800, () => {
  console.log("API working");
});
