import express from "express";

const authRouter = express.Router();

//GET api/auth
//test route
//access public
authRouter.get("/", (req, res) => {
  res.send("Auth route");
});

export default authRouter;
