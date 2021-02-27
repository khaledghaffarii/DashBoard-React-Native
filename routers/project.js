const { Router } = require("express");
const db = require("../database");

const router = Router();

router.use((req, res, next) => {
  console.log("Request made to /USER ROUTE");
  next();
});

router.get("/", async (req, res) => {
  const results = await db.promise().query(`SELECT * FROM mproject
`);
  console.log(results);
  res.status(200).send(results[0]);
});
// `SELECT mproject.id,(projectname),(dateplifr),(dateactifr),(dateplifa),(dateactifa),(dateplb),(dateactb FROM mproject INNER JOIN mdr on MPROJECT_id  = mproject.id
// `;

// router.get("/:id", async (req, res) => {  
//   const results = await db
//     .promise()
//     .query(` SELECT * FROM mproject WHERE (id) = ` + req.params.id );
//   console.log(results);
//   res.status(200).send(results[0]);
  
// });

module.exports = router;
