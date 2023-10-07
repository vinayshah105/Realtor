import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
  // console.log(req.body);
  const { username, email, password } = req.body;
  const hasedpassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hasedpassword });

  try {
    await newUser.save();
    res.status(201).json('User Created Successfully');
  } catch (e) {
    res.status(500).json(e.message);
  }
};
