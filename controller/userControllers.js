const User = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.getUser = async (req, res) => {
  res.status(500).json({
    status: "success",
    message: "This route is not yet implemented",
  });
};

exports.createUser = async (req, res) => {
  res.status(500).json({
    status: "success",
    message: "This route is not yet implemented",
  });
};

exports.updateUser = async (req, res) => {
  res.status(500).json({
    status: "success",
    message: "This route is not yet implemented",
  });
};

exports.deleteUser = async (req, res) => {
  res.status(500).json({
    status: "success",
    message: "This route is not yet implemented",
  });
};
