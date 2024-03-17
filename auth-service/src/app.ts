import "reflect-metadata"
import express from 'express';
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler";
import authRouter from "./routes/authRouter";
import userRouter from "./routes/userRouter";
import tenantRouter from "./routes/tenantRouter";

const app = express();

app.use(
    cors({
        origin: "*",
        credentials: true,
    }),
);
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Auth Micro Service :)");
});

app.use("/auth", authRouter);
app.use("/tenants", tenantRouter);
app.use("/users", userRouter);

app.use(errorHandler);



export default app;