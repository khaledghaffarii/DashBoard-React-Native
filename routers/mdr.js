const { Router } = require("express");
const db = require("../database");

const router = Router();

router.use((req, res, next) => {
  console.log("Request made to /USER ROUTE");
  next();
});

router.get("/", async (req, res) => {
  const results = await db.promise().query(`SELECT * FROM mdr`);
  console.log(results);
  res.status(200).send(results[0]);
});


////////////////// IFR  ////////////////////

router.get("/date_ifr_pl", async (req, res) => {
  const results = await db
    .promise()
    .query(
      `SELECT COUNT(dateplifr) as "Number_Rows" FROM mdr INNER JOIN mproject WHERE (MPROJECT_id) = mproject.id`
    );
  console.log(results);
  res.status(200).send(results[0]);
});
//const dat_globaly = '2021-02-21'
  router.get("/date_ifr_act", async (req, res) => {
    // let date = "2021-02-21";
    const results = await db
      .promise()
      .query(
        `SELECT COUNT(dateactifr) as "Number_Rows" FROM mdr INNER JOIN mproject WHERE (MPROJECT_id) = mproject.id `
      );
      console.log(results);
    res.status(200).send(results[0]);
  });


// router.get("/ifrpl", async (req, res) => {
//   const results = await db.promise()
//     .query(`SELECT dateplifr FROM  mdr WHERE dateplifr >= '2021-02-21';
// `);
// for(let i=1; i<results.length ;i++){
//   console.log(results[0]);
// }

//   res.status(200).send(results[0]);
// });



////////////////// IFA////////////////////

router.get("/date_ifa_pl", async (req, res) => {
  const results = await db
    .promise()
    .query(
      `SELECT COUNT(dateplifa) as "Number_Rows" FROM mdr INNER JOIN mproject WHERE (MPROJECT_id) = mproject.id`
    );
    console.log(results);
    res.status(200).send(results[0]);
});

router.get("/date_ifa_act", async (req, res) => {
  const results = await db.promise()
    .query(`SELECT COUNT(dateactifa) as "Number_Rows" FROM mdr INNER JOIN mproject WHERE (MPROJECT_id) = mproject.id
`);
  console.log(results);
  res.status(200).send(results[0]);
});



////////////////// IFC  ////////////////////

router.get("/date_ifc_pl", async (req, res) => {
  const results = await db
    .promise()
    .query(
      `SELECT COUNT(dateplb) as "Number_Rows" FROM mdr INNER JOIN mproject WHERE (MPROJECT_id) = mproject.id`
    );
    console.log(results);
    res.status(200).send(results[0]);
});

router.get("/date_ifc_act", async (req, res) => {
  const results = await db
    .promise()
    .query(
      `SELECT COUNT(dateactb) as "Number_Rows" FROM mdr INNER JOIN mproject WHERE (MPROJECT_id) = mproject.id`
  );
  console.log(results);
  res.status(200).send(results[0]);
});
//SELECT `MPROJECT_id` as " " FROM `mdr`

//get ID to project
router.get("/projectId", async (req, res) => {
  const results = await db
    .promise()
    .query(`SELECT (MPROJECT_id)  AS "ID" FROM (mdr)`); 
    console.log(parseInt(results[0]));
    res.status(200).send(results[0]);
  });

//SELECT * FROM `mdr` WHERE MPROJECT_id = 4


//MDR de chaque projet
router.get("/:id", async (req, res) => {
  const results = await db
    .promise()
    .query(` SELECT (dateplifr),(dateactifr),(dateplifa),(dateactifa),(dateplb),(dateactb) FROM (mdr) WHERE MPROJECT_id = ` + req.params.id);
  console.log(results);
  res.status(200).send(results[0]);
});

module.exports = router;
























































// router.post("/", (req, res, next) => {
//   const {
//     documentno,
//     documenttitle,
//     titletranslation,
//     disc,
//     typp,
//     cla,
//     tagno,
//     lastcon,
//     latestrev,
//     revdate,
//     latesta,
//     progress,
//     compatransno,
//     reviewsta,
//     dateplifr,
//     focasifr,
//     tranifr,
//     dateactifr,
//     revtranifr,
//     revdaifr,
//     dateplifa,
//     focasifa,
//     tranifa,
//     dateactifa,
//     revtranifa,
//     revdaifa,
//     dateplb,
//     focasb,
//     tranb,
//     dateactb,
//     revtranb,
//     revdab,
//     orgdoc,
//     mdrupinf,
//     asbuiltreq,
//     desss,
//     wei,
//     pro,
//   } = req.body;
//   if (
//     documentno &&
//     documenttitle &&
//     titletranslation &&
//     disc &&
//     typp &&
//     cla &&
//     tagno &&
//     lastcon &&
//     latestrev &&
//     revdate &&
//     latesta &&
//     progress &&
//     compatransno &&
//     reviewsta &&
//     dateplifr &&
//     focasifr &&
//     tranifr &&
//     dateactifr &&
//     revtranifr &&
//     revdaifr &&
//     dateplifa &&
//     focasifa &&
//     tranifa &&
//     dateactifa &&
//     revtranifa &&
//     revdaifa &&
//     dateplb &&
//     focasb &&
//     tranb &&
//     dateactb &&
//     revtranb &&
//     revdab &&
//     orgdoc &&
//     mdrupinf &&
//     asbuiltreq &&
//     desss &&
//     wei &&
//     pro
//   ) {
//     try {
//       db.promise().query(
//         `INSERT INTO USERS VALUES('${documentno}','${documenttitle}','${titletranslation}','${disc}','${typp}','${cla}','${tagno}','${lastcon}','${latestrev}','${revdate}','${latesta}','${progress}','${compatransno}','${reviewsta}','${dateplifr}','${focasifr}','${tranifr}','${dateactifr}','${revtranifr}','${revdaifr}','${dateplifa}','${focasifa}','${tranifa}','${dateactifa}','${revtranifa}','${revdaifa}','${dateplb}','${focasb}','${tranb}','${dateactb}','${revtranb}','${revdab}','${orgdoc}','${mdrupinf}','${asbuiltreq}','${desss}','${wei}','${pro}')`
//       );
//       res.status(201).send({ msg: "Created User" });
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   next();
// });
