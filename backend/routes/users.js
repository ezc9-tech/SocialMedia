import express from 'express';
import { check, validationResult } from 'express-validator';
import User from '../models/User.js';
import gravatar from 'gravatar';
import bcrypt from 'bcryptjs';

const userRouter = express.Router();

// @route   POST api/users
// @desc    Register user
// @access  Public
userRouter.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with six or more characters',
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // Check if user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ message: 'User already exists' }] });
      }

      // Get user's gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });

      // Create new user instance
      user = new User({ name, email, avatar, password });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save user to database
      await user.save();

      // Return success message (or you could return a JWT here)
      res.status(201).send('User Registered');
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  },
);

export default userRouter;
