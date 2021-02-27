const { Router } = require("express");
const db = require("../database");

const router = Router();

router.use((req, res, next) => {
  console.log("Request made to /USER ROUTE");
  next();
});

router.get("/", async (req, res) => {
  const results = await db.promise().query(`SELECT * FROM etr`);
  console.log(results);
  res.status(200).send(results[0]);
});

////////////////// INSPECTION ////////////////////

router.get("/inspection_pl", async (req, res) => {
  const results = await db.promise()
    .query(`SELECT COUNT(plan ) as "Number_Rows" FROM etr;
`);
  console.log(results);
  res.status(200).send(results[0]);
});

router.get("/inspection_fact", async (req, res) => {
  const results = await db.promise()
    .query(`SELECT COUNT(factbyeppm) as "Number_Rows" FROM etr;

`);
  console.log(results);
  res.status(200).send(results[0]);
});

////////////////// FOB ////////////////////

router.get("/fob_pl", async (req, res) => {
  const results = await db
    .promise()
    .query(`SELECT COUNT(fobplan) as "Number_Rows" FROM etr;`);
  console.log(results);
  res.status(200).send(results[0]);
});

router.get("/fob_fact", async (req, res) => {
  const results = await db
    .promise()
    .query(`SELECT COUNT(fobfact ) as "Number_Rows" FROM etr;`);
  console.log(results);
  res.status(200).send(results[0]);
});

//ETR de chaque projet 
router.get("/:id", async (req, res) => {
  const results = await db
    .promise()
    .query(` SELECT (plan),(factbyeppm),(fobplan),(fobfact) FROM (etr) WHERE MPROJECT_id=` + req.params.id);
  console.log(results);
  res.status(200).send(results[0]);
});
module.exports = router;
