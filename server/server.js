import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import mongoose from "mongoose";
import http from "http";
import cors from "cors";
import { Server as SocketIOServer } from "socket.io";
import { setUpIo } from "./services/socketService.js";
import codingRoomRouter from "./routes/codingRoomRouter.js";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const server = http.createServer(app); //creating http server
const io = new SocketIOServer(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
app.get("/", (req, res) => {
  res.send("server is running");
});
app.use("/api/v1/codingRoom", codingRoomRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});
const port = process.env.PORT || 5000;
setUpIo(io);

try {
  await mongoose.connect(
    "mongodb+srv://chen201296:coding2012@cluster0.spzdrgs.mongodb.net/codingMentor?retryWrites=true&w=majority"
  );
  server.listen(port, () => {
    console.log("server is running on port 5000");
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
