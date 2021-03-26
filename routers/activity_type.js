const { Router } = require("express");
const db = require("../database");

const router = Router();

router.use((req, res, next) => {
  console.log("Request made to /USER ROUTE");
  next();
});

router.get("/:id/:type", async (req, res) => {
  const results = await db
    .promise()
    .query(
      `SELECT * FROM construction_dhashboard_activity_type WHERE (MPROJECT_id) = ` +
        req.params.id +
        ` AND (activity) = ` +
        req.params.type
    );
  console.log(results);
  res.status(200).send(results[0]);
});
module.exports = router;
