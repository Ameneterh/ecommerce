import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";
import bidsRouter from "./routes/bids.routes.js";
import notificationsRouter from "./routes/notification.route.js";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();

// deployment config
const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDb Database!"))
  .catch((error) => console.log(error));

const PORT = process.env.PORT || 5000;

app.use("/backend/users", userRouter);
app.use("/backend/products", productRouter);
app.use("/backend/bids", bidsRouter);
app.use("/backend/notifications", notificationsRouter);

// render deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
