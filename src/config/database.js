const mongoose = require("mongoose");
function database() {
  try {
    mongoose.connect(
      "mongodb+srv://hamza:hamza@cluster0.ehqicba.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
  }
}

module.exports = database;
