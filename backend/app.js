import express from "express";
import cors from "cors";
import employeeRouter from "./routes/employees.router.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "PUT", "DELETE"]
   
}))

app.use(express.json());

app.use("/api", employeeRouter)


export default app;