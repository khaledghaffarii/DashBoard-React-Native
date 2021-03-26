const { Router } = require("express");
const db = require("../database");

const router = Router();

router.use((req, res, next) => {
  console.log("Request made to /USER ROUTE");
  next();
});

router.get("/:id", async (req, res) => {
  const results = await db
    .promise()
    .query(
      `SELECT * FROM (disciplined) WHERE  (MPROJECT_id) = ` + req.params.id
    );
  console.log(results);
  res.status(200).send(results[0]);
});


module.exports = router;