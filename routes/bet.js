const { Router } = require("express");
const {
  betsGet,
  betsPost,
  betsPut,
  betsDelete,
} = require("../controllers/bets");
const router = new Router();
router.get("/", betsGet);
router.post("/", betsPost);
router.put("/:id",betsPut);
// router.delete("/", betsDelete);

module.exports = router;
