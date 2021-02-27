const { Router } = require("express");
const db = require("../database");
const router = Router();

router.use((req, res, next) => {

  console.log("Request made to /USER ROUTE");
  next();

});

router.get("/", async (req, res) => {
  const results = await db.promise().query(`SELECT * FROM str`);
  console.log(results);
  res.status(200).send(results[0]);
});

////////////////////////// ETA & ATA //////////////////////////

router.get("/str_eta_pl", async (req, res) => {
  const results = await db.promise()
    .query(`SELECT COUNT(eta) as "Number_Rows" FROM str ;
`);
  console.log(results);
  res.status(200).send(results[0]);
});

router.get("/str_ata_act", async (req, res) => {
  const results = await db.promise()
    .query(`SELECT COUNT(ata) as "Number_Rows" FROM str ;
`);
  console.log(results);
  res.status(200).send(results[0]);
});

//STR de chaque projet
router.get("/:id", async (req, res) => {
  const results = await db
    .promise()
    .query(` SELECT (eta),(ata) FROM (str) WHERE MPROJECT_id=` + req.params.id);
  console.log(results);
  res.status(200).send(results[0]);
});
module.exports = router;
