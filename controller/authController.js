const { addUser, getSingleUser } = require("../services/userService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { name, role, institute_id, email, password } = req.body;

    if (!name || !role || !institute_id) {
      return res.status(400).json({ message: "All fields are required" });
    }
    let hashedPassword = bcrypt.hashSync(password, 8);
    let payload = {
      name,
      role,
      institute_id,
      email,
      password: hashedPassword,
    };

    const userData = await addUser(payload);
    if (userData) {
      return res.status(201).json({ message: "User created successfully" });
    } else {
      return res.status(400).json({ message: "User creation failed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await getSingleUser({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET
    );
    return res.status(201).json({ message: "Login successfully", user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  register,
  login,
};
