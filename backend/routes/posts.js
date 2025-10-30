import express from "express";

const postsRouter = express.Router();

//GET api/posts
//test route
//access public
postsRouter.get("/", (req, res) => {
  res.send("Posts route");
});

export default postsRouter;
