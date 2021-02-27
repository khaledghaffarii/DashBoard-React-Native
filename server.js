const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const session = require("express-session");
const store = new session.MemoryStore();
const mdrRoute = require('./routers/mdr');
const otRoute = require("./routers/ot");
const tqrRoute = require("./routers/tqr");
const strRoute = require("./routers/str");
const rfirRoute = require("./routers/rfir");
const ptrRoute = require("./routers/ptr");
const etrRoute = require("./routers/etr");
const emplosRoute = require("./routers/emplos");
const emploRoute = require("./routers/emplo");
const consoRoute = require("./routers/conso");
const constructionRoute = require("./routers/construction");
const projectRoute = require("./routers/project");
const progressRoute = require("./routers/progress")
const markupRoute = require("./routers/markup");
const factPrevRoute = require("./routers/factPrev");
const factReelRoute = require("./routers/factReel");
const https = require("https");
const path = require("path");
const fs = require("fs");


app.use(express.urlencoded({ extented: false }));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(
  session({
    secret: "some secret",
    cookie: { maxAge: 30000 },
    saveUninitialized: true,
    store,
  })
);  

app.use((req, res, next) => {
  console.log(store);
  console.log(`${req.method} - ${req.url}`);
  next();
});
app.use("/project", projectRoute);
app.use("/mdr", mdrRoute);
app.use("/ot", otRoute);
app.use("/tqr", tqrRoute);
app.use("/str", strRoute);
app.use("/rfir", rfirRoute);
app.use("/ptr", ptrRoute);
app.use("/etr", etrRoute);
app.use("/emplos", emplosRoute);
app.use("/emplo", emploRoute);
app.use("/emplos", emplosRoute);
app.use("/conso", consoRoute);
app.use("/construction", constructionRoute);
app.use("/progress",progressRoute);
app.use("/markup",markupRoute);
app.use("/factPrev", factPrevRoute);
app.use("/factReel", factReelRoute);
app.get("/", (req, res,next) => {res.status(200).send("HELLO  PROGRAMMERS!!!")});



const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
  },
  app
);



sslServer.listen(3000, () => {
  console.log("Secure server 🚀🔑 on port 3000");
});





































































// // var express = require("express");
// // var app = express();

// // var mysql = require("mysql");
// // var bodyParser = require("body-parser");

// // app.use(bodyParser.json({ type: "application/json" }));
// // app.use(bodyParser.urlencoded({ extended: true }));

// // var con = mysql.createConnection({
// //   // host: "127.0.0.1",
// //   // port: "8080",
// //   host: "localhost",
// //   user: "ghaffari",
// //   password: "*EST1919acab",
// //   database: "dashBoard",
// //   insecureAuth: true,
// // });

// // var server = app.listen(19006, () => {
// //   host = server.address().address;
// //   port = server.address().port;
// //   console.log("start");
// // });

// // con.connect(function (error) {
// //    console.log("connected");
// //   //  if (error) console.log(error);
// //   // else
// // });
// // app.get("/", (req, res) => res.status(200).send("HELLO  PROGRAMMERS!!!"));

// // app.get("/mdr", function (req, res) {
// //   con.query("SELECT * FROM mdr ", (error, rows, fields) => {
// //     console.log("test1");
// //     // if (error) console.log(error);
// //     // else {
// //        //if (error) throw err;
// //         //console.log(res.send(rows));
// //         console.log(error)
// //         console.log(rows);
// //         res.send(rows);

// //     // }
// //   });
// // });

// //App Config
// //var express = require("express");
// var express = require("express");
// var app = express();
// var mysql = require("mysql");

// const port = process.env.PORT || 8080;
// app.use(express.json());

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "ghaffari",
//   password: "*EST1919acab",
//   database: "dashBoard",
//   insecureAuth: true,
// });









// con.connect(function (error) {
//   console.log("connected");
// });

// app.get("/", (req, res) => res.status(200).send("HELLO  PROGRAMMERS!!!"));

// app.get("/mdr", function (req, res) {
//   con.query("SELECT * FROM mdr", (error, rows, fields) => {
//     console.log("test1");
//     console.log(rows);
//     res.status(200).send(rows);
//   });
//   //res.send(rows);
//   //if (error) console.log(error);
//   //else {
//   //if (error) throw err;
//   //console.log(res.send(rows));
//   //}
// });
// app.listen(port, () => console.log(`listen on locolhost:${port}`));
