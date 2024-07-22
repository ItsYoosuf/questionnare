import User from '../Models/user.js'; // Import the User model
import bcrypt from 'bcryptjs'; // Import bcryptjs using default import syntax
import jwt from 'jsonwebtoken';

// Function to register a new user
export async function signUp(req, res) {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ msg: 'User created successfully', userId: user.id });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
}

// Function to sign in an existing user
export async function signIn(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Token generation
    const payload = {
      user: {
        id: user.id
      }
    };
    console.log(payload);
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.status(200).json({ msg: 'Logged in successfully', token });
    });
    
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
}

// Encapsulate both functions in an object
const authController = {
  signUp,
  signIn,
};

// Default export the encapsulated object
export default authController;
