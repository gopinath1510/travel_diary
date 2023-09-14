import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user-routes";
import postRouter from "./routing/post-routes";
import cors from "cors";

const app = express();
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter);
app.get("/message",(req,res)=>{
  res.json("message");
})
// connections
mongoose
  .connect(
    `mongodb://admin:gopinath2002@ac-stqe5w0-shard-00-00.cgigyym.mongodb.net:27017,ac-stqe5w0-shard-00-01.cgigyym.mongodb.net:27017,ac-stqe5w0-shard-00-02.cgigyym.mongodb.net:27017/?ssl=true&replicaSet=atlas-pzglvr-shard-0&authSource=admin&retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(5000, () =>
      console.log("Connection Succesfull  & Listening to localhost Port 5000")
    )
  )
  .catch((err) => console.log(err));
