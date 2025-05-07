const { getSingleInstitute } = require("../services/instituteService");

const addInstituteData = async (req, res) => {
  try {
    const { name, type } = req.body;
    if (!name || !type) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const findInstitute = await getSingleInstitute({ name, type });
    if (findInstitute) {
      return res.status(400).json({ message: "Institute already exists" });
    } else {
      const newInstitute = await addInstituteData({ name, type });
      return res.status(201).json({ message: "Institute added successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllInstitutesData = async (req, res) => {
  try {
    const data = await getAllInstitutes();
    if (data.length === 0) {
      return res.status(404).json({ message: "No institutes found" });
    } else {
      return res.status(200).json(data);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { 
    addInstituteData,
    getAllInstitutesData,   
};
