import express from 'express';

const profileRouter = express.Router();

//GET api/profile
//test route
//access public
profileRouter.get('/s', (req, res) => {
  res.send('Profile route');
});

export default profileRouter;
