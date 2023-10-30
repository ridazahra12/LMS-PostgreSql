const user = require("../../models/definitions/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config");
const userService = require("../../service/userService");
module.exports = {
  getUsers: async (req, res) => {
    const data = await userService.getUsers();
    res.send(data);
  },
  createUsers: async (req, res) => {
    const data = await userService.createUsers(req.body);
    res.send(data);
  },
  createUsersHelper: async (data) => {
    const userData = await userService.createUsers(data);
    return userData;
  },
  registerUser: async (req, res) => {
    try {
      const { username, email, phoneNumber, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await user.create({
        username,
        email,
        phoneNumber,
        password: hashedPassword,
      });
      res.status(201).json(newUser); // Return the newly created user
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to register user" });
    }
  },

  // User login function
  loginUser: async (req, res) => {
    try {
      // Extract email and password from the request body
      const { email, password } = req.body;

      // Find the user with the provided email in the database
      const user = await user.findOne({ where: { email } });

      // If no user is found, return a 401 error (Unauthorized)
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Compare the provided password with the hashed password stored in the database
      const passwordMatch = await bcrypt.compare(password, user.password);

      // If passwords do not match, return a 401 error (Unauthorized)
      if (!passwordMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Generate a JSON Web Token (JWT) for authentication
      const token = jwt.sign(
        { userId: user.id }, // Payload of the token
        process.env.JWT_SECRET, // Use an environment variable for the secret key
        {
          expiresIn: "1h", // Token expiration time (1 hour in this example)
        }
      );

      // Respond with the JWT token for the authenticated user
      res.json({ token });
    } catch (error) {
      // Handle errors and respond with a 500 error status if login fails
      console.error(error);
      res.status(500).json({ error: "Failed to log in" });
    }
  },
};
