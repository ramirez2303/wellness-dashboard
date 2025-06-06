import express from "express";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./routes/AuthRoutes";

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);
app.use(helmet());

// Routes
app.use("/api/auth", authRoutes);

export default app;
