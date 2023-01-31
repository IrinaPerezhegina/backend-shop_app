const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/products", require("./products.routes"));
router.use("/auth", require("./auth.routes"));

module.exports = router;
