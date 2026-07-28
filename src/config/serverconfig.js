const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  // If process.env.PORT exists, use it. Otherwise, default to 3000.
  PORT: process.env.PORT || 3000
}