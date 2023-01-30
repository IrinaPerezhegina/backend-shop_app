const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/products", require("./products.routes"));

module.exports = router;
