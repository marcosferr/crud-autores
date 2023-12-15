const router = require("express").Router();
const {
  getAllCites,
  getCite,
  createCite,
  updateCite,
  deleteCite,
} = require("../controllers/cites.controller");

router.get("/", getAllCites);
router.get("/:id", getCite);
router.post("/", createCite);
router.put("/:id", updateCite);
router.delete("/:id", deleteCite);

module.exports = router;
