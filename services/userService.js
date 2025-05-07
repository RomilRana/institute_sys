const { User } = require("../models");

const addUser = async (payload) => {
  try {
    return await User.create(payload);
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const data = await User.findAll();
    return data;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

const getSingleUser = async (where) => {
  try {
    const data = await User.findOne({
      where,
    });
    return data;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

module.exports = {
  addUser,
  getAllUsers,
  getSingleUser,
};
