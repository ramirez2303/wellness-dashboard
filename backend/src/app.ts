import express from "express";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./routes/AuthRoutes";
import mentalRoutes from "./routes/MentalRoutes";
import physicalRoutes from "./routes/PhysicalRoutes";

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use(helmet());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/mental", mentalRoutes);
app.use("/api/physical", physicalRoutes);

export default app;
