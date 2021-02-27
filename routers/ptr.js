const { Router } = require("express");
const db = require("../database");

const router = Router();

router.use((req, res, next) => {
  console.log("Request made to /USER ROUTE");
  next();
});

router.get("/", async (req, res) => {
  const results = await db.promise().query(`SELECT * FROM ptr`);
  console.log(results);
  res.status(200).send(results[0]);
});
module.exports = router;

/////////////////////////////   R  F  Q   /////////////////////////////

router.get("/rfq_pl", async (req, res) => {
  const results = await db.promise()
    .query(`SELECT COUNT(rfqforecast) as "Number_Rows" FROM ptr ;
`);
  console.log(results);
  res.status(200).send(results[0]);
});

router.get("/rfq_act", async (req, res) => {
  const results = await db.promise()
    .query(`SELECT COUNT(rfqissuetocompany) as "Number_Rows" FROM ptr ;
`);
  console.log(results);
  res.status(200).send(results[0]);
});

//////////////////////   T  E  C   ///////////////////////////////

router.get("/tec_pl", async (req, res) => {
  const results = await db.promise()
    .query(`SELECT COUNT(receivedofferdate) as "Number_Rows" FROM ptr ;

`);
  console.log(results);
  res.status(200).send(results[0]);
});

router.get("/tec_act", async (req, res) => {
  const results = await db
    .promise()
    .query(`SELECT COUNT(bescopereply) as "Number_Rows" FROM ptr ;`);
  console.log(results);
  res.status(200).send(results[0]);
});

//////////////////////    P  O  S   //////////////////////////////////////////

router.get("/pos_pl", async (req, res) => {
  const results = await db
    .promise()
    .query(`SELECT COUNT(poplanned) as "Number_Rows" FROM ptr ;`);
  console.log(results);
  res.status(200).send(results[0]); 
});

router.get("/pos_act", async (req, res) => {
  const results = await db.promise()
    .query(`SELECT COUNT(poissuedate) as "Number_Rows" FROM ptr ;
`);
  console.log(results);
  res.status(200).send(results[0]);
});


//PTR de chaque projet
router.get("/:id", async (req, res) => {
  const results = await db
    .promise()
    .query(` SELECT  (rfqforecast) , (rfqissuetocompany) , (receivedofferdate) , (bescopereply) , (poplanned) , (poissuedate)  FROM  (ptr) WHERE MPROJECT_id = ` + req.params.id);
  console.log(results);
  res.status(200).send(results[0]);
});

module.exports = router;








