const Author = require("../models/authors.model");

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (author == null) {
      return res.status(404).json({ message: "Cannot find author" });
    }
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createAuthor = async (req, res) => {
  const author = new Author({
    name: req.body.name,
  });

  try {
    const newAuthor = await author.save();
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (author == null) {
      return res.status(404).json({ message: "Cannot find author" });
    }

    if (req.body.name != null) {
      author.name = req.body.name;
    }

    const updatedAuthor = await author.save();
    res.status(200).json(updatedAuthor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (author == null) {
      return res.status(404).json({ message: "Cannot find author" });
    }

    await author.remove();
    res.status(200).json({ message: "Deleted Author" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
