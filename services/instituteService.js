const { Institute } = require("../models");

const addInstitute = async (payload) => {
  try {
    return await Institute.create(payload);
  } catch (error) {
    console.error("Error adding institute:", error);
    throw error;
  }
};

const getAllInstitutes = async () => {
  try {
    const data = await Institute.findAll();
    return data;
  } catch (error) {
    console.error("Error fetching all institutes:", error);
    throw error;
  }
};

const getSingleInstitute = async (where) => {
  try {
    const data = await Institute.findOne({
      where,
    });
    return data;
  } catch (error) {
    console.error("Error fetching single institute:", error);
    throw error;
  }
};

module.exports = {
  addInstitute,
  getAllInstitutes,
  getSingleInstitute,
};
