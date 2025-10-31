import express from 'express';
import { authenticate } from '../middleware/auth.js';
import User from '../models/User.js';

const authRouter = express.Router();

//GET api/auth
//test route
//access public
authRouter.get('/', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

export default authRouter;
