const Cite = require("../models/cites.model");

exports.createCite = async (req, res) => {
  try {
    const { cite, author } = req.body;
    const newCite = new Cite({ cite, author });
    const savedCite = await newCite.save();
    res.status(201).json(savedCite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllCites = async (req, res) => {
  try {
    const cites = await Cite.find();
    res.status(200).json(cites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCiteById = async (req, res) => {
  try {
    const cite = await Cite.findById(req.params.id);
    if (!cite) {
      return res.status(404).json({ message: "Cite not found" });
    }
    res.status(200).json(cite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCiteById = async (req, res) => {
  try {
    const { cite, author } = req.body;
    const updatedCite = await Cite.findByIdAndUpdate(
      req.params.id,
      { cite, author },
      { new: true }
    );
    if (!updatedCite) {
      return res.status(404).json({ message: "Cite not found" });
    }
    res.status(200).json(updatedCite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteCiteById = async (req, res) => {
  try {
    const deletedCite = await Cite.findByIdAndDelete(req.params.id);
    if (!deletedCite) {
      return res.status(404).json({ message: "Cite not found" });
    }
    res.status(200).json({ message: "Cite deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
