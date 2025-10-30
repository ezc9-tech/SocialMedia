import express from "express";

const userRouter = express.Router();

//GET api/users
//test route
//access public
userRouter.get("/", (req, res) => {
  res.send("User route");
});

export default userRouter;
