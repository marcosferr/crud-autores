const router = require("express").Router();
const {
  getAllCites,
  getCiteById,
  createCite,
  updateCiteById,
  deleteCiteById,
} = require("../controllers/cites.controller");

router.get("/", getAllCites);
router.get("/:id", getCiteById);
router.post("/", createCite);
router.put("/:id", updateCiteById);
router.delete("/:id", deleteCiteById);

module.exports = router;
