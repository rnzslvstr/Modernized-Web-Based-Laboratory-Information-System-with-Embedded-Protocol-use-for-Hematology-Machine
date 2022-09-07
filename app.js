  const http = require('http');
  const cookieParser = require("cookie-parser");
  const csrf = require("csurf"); 
  const bodyParser = require("body-parser")
  const express = require('express')
  const SerialPort = require('serialport')
  const HL7 = require('hl7-standard');
  var hl7parser = require("hl7parser");
    //mythic 18 vet
  const port = new SerialPort('COM6', {
    baudRate: 115200
  }) 
  //mnchip v5
  const port3 = new SerialPort('COM9', {
    baudRate: 115200
  }) 
  var admin = require("firebase-admin"); 
  const app = express()
  const port1 = (process.env.PORT || 9999); 
  let server = http.createServer(app);
  var serviceAccount = require("./serviceAccountKey.json");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://analyzerdb-default-rtdb.firebaseio.com"
  });
  const Readline = SerialPort.parsers.Readline; 
  const csrfMiddleware = csrf({cookie: true}); 
  //------------------------------app usages---------------------------------------//
  app.engine("html", require("ejs").renderFile); 
  app.use(express.static('./'));
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true
  }));
  app.use(cookieParser()); 
  app.use(csrfMiddleware); 
  const io = require("socket.io")(server, {
      allowEIO3: true // false by default
    });
    app.all("*", (req, res, next) => {
      res.cookie("XSRF-TOKEN", req.csrfToken()); 
      next(); 
    }); 
    app.get("/", function(req,res)
    {
      const sessionCookie = req.cookies.session || "";
      admin
        .auth()
        .verifySessionCookie(sessionCookie, true)
        .then(() => {
          res.render("rel/home.html");
        })
        .catch((error) => {
          res.redirect("/login");
        });
    });
    app.get("/login", function(req,res)
    {
      const sessionCookie = req.cookies.session || "";
      admin
        .auth()
        .verifySessionCookie(sessionCookie, true)
        .then(() => {
          res.render("rel/home.html");
        })
        .catch((error) => {
          res.render("login.html");
        });
    });
    app.get("/combo/records", function(req,res)
    {
      const sessionCookie = req.cookies.session || "";
      admin
        .auth()
        .verifySessionCookie(sessionCookie, true)
        .then(() => {
          res.render("combo/managerecords.html");
        })
        .catch((error) => {
          res.redirect("/login");
        });
    });
    app.get("/combo/run", function(req,res)
    {
      const sessionCookie = req.cookies.session || "";
      admin
        .auth()
        .verifySessionCookie(sessionCookie, true)
        .then(() => {
          res.render("combo/runsamples.html");
        })
        .catch((error) => {
          res.redirect("/login");
        });
    });
    app.get("/settings", function(req,res)
    {
      const sessionCookie = req.cookies.session || "";

      admin
        .auth()
        .verifySessionCookie(sessionCookie, true)
        .then(() => {
          res.render("rel/settings.html");
        })
        .catch((error) => {
          res.redirect("/login");
        });
    });
    app.get("/about", function(req,res)
    {
      const sessionCookie = req.cookies.session || "";
      admin
        .auth()
        .verifySessionCookie(sessionCookie, true)
        .then(() => {
          res.render("rel/about.html");
        })
        .catch((error) => {
          res.redirect("/login");
        });
    });
    app.get("/signup", function(req,res)
    {
      const sessionCookie = req.cookies.session || "";
      admin
        .auth()
        .verifySessionCookie(sessionCookie, true)
        .then(() => {
          res.render("signup.html");
        })
        .catch((error) => {
          res.redirect("/login");
        });
    });
    app.get("/home", function(req,res)
    {
      const sessionCookie = req.cookies.session || "";
      admin
        .auth()
        .verifySessionCookie(sessionCookie, true)
        .then(() => {
        
          res.render("rel/home.html");
        })
        .catch((error) => {
          res.redirect("/login");
        });
    });
    app.post("/sessionLogin", (req, res) => {
      const idToken = req.body.idToken.toString();
      const expiresIn = 60 * 60 * 24 * 5 * 1000;
      admin
        .auth()
        .createSessionCookie(idToken, { expiresIn })
        .then(
          (sessionCookie) => {
            const options = { maxAge: expiresIn, httpOnly: true};
            res.cookie("session", sessionCookie, options);
          //   async function start() {
          //     await db.collection('auditlog').delete();
          //  }
          //  start();
            res.end(JSON.stringify({ status: "success" }));
          },
          (error) => {
            res.status(401).send("UNAUTHORIZED REQUEST!");
          }
        );
    });
    app.get("/sessionLogout", (req, res) => {
      res.clearCookie("session");
      res.redirect("/login");
    });
      //System Uptime
      io.on('connection', function(io) {
        
        let uptimedata = process.uptime(); 
        io.emit('uptimedata', uptimedata)
        let status; 
        let barcode; 
        port.on('readable', function () {
      console.log("Message" + port.read())
      })  
      SerialPort.list().then(function(ports){
        ports.forEach(function(port){
          // console.log(port); 
          status = JSON.stringify(port); 
          io.emit('status', status)
        })
      });  
        port.open(function (err) {
          if (err) {
            barcode = "Error " + err.message; 
            io.emit('barcode', barcode)
          }  
        })
      })
  //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^app usages^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
  io.on('connection', function(io) {
  }) 
  //MNCHIP V5
  const parser2 = port3.pipe(new Readline());
  parser2.on('data', function(data) {
    console.log(data); 
    let MSH = data.match(/^MSH.+/);  
    io.emit('MSH', MSH)
      //PID Data
      let PID = data.match(/^PID......................./);
      io.emit('PID', PID)
      //OBR DATA
      let OBR = data.match(/^OBR\|1\|.+/);
      io.emit('OBR', OBR)
  //ALB Data
  let ALB = data.match(/ALB\|(.*?)\|/);
  io.emit('ALB', ALB)
  console.log(ALB); 
  //TP Data
  let TP = data.match(/TP\|(.*?)\|/);
  io.emit('TP', TP)
  console.log(TP); 
  //Ca Data
  let CA = data.match(/Ca\|(.*?)\|/);
  io.emit('CA', CA)
  //GLU Data
  let GLU = data.match(/GLU\|(.*?)\|/);
  io.emit('GLU', GLU)  
  //BUN Data
  let BUN = data.match(/BUN\|(.*?)\|/);
  io.emit('BUN', BUN)
  //P Data
  let P = data.match(/\|P\|(.*?)\|/);
  io.emit('P', P)
  //AMY Data
  let AMY = data.match(/\|AMY\|(.*?)\|/);
  io.emit('AMY', AMY)
  //CHOL
  let CHOL = data.match(/\|CHOL\|(.*?)\|/);
  io.emit('CHOL', CHOL)
  //ALT
  let ALT = data.match(/\|ALT\|(.*?)\|/);
  io.emit('ALT', ALT)
  //TBIL
  let TBIL = data.match(/\|TBIL\|(.*?)\|/);
  io.emit('TBIL', TBIL)
  //ALP
  let ALP = data.match(/\|ALP\|(.*?)\|/);
  io.emit('ALP', ALP)
  //CRE
  let CRE = data.match(/\|CRE\|(.*?)\|/);
  io.emit('CRE', CRE)
  //CK
  let CK = data.match(/\|CK\|(.*?)\|/);
  io.emit('CK', CK)
  })
  //Mythic 18 Vet
 const parser = port.pipe(new Readline());
  parser.on('data', function(data) {
    io.emit('data', data)
    // // port.write("DSR^Q03")
    console.log(data)
    //Analyzer Model Data
    let AMD = data.match(/^MYTHIC 1;/);
    io.emit('AMD', AMD)
      //SID Data
      let SID = data.match(/^SID.+/); 
      io.emit('SID', SID)
      console.log(JSON.stringify(SID))
      // console.log(SID)
      //DATE Data
      let DATE = data.match(/^DATE;.+/);
      io.emit('DATE', DATE)
        //TIME Data
          let TIME = data.match(/^TIME;.+/);
          io.emit('TIME', TIME)
        //SEQ Data
              let SEQ = data.match(/^SEQ;.+;/);
              io.emit('SEQ', SEQ)
    //1 WBC Data
    let WBC = data.match(/^WBC;.+/);
    io.emit('WBC', WBC)
    //WBCL Data
    let WBCL = data.match(/^WBC;.+/);
    io.emit('WBCL', WBCL)  
    //2 NEU Data
  let NEU = data.match(/^NEU%;.+/);
  io.emit('NEU', NEU)
  //NEUL Data
  let NEUL = data.match(/^NEU%;.+/);
  io.emit('NEUL', NEUL)
    //3 LYM Data
      let LYM = data.match(/^LYM%;.+/);
      io.emit('LYM',LYM)
      //LYML Data
    let LYML = data.match(/^LYM%;.+/);
    io.emit('LYML', LYML)   
      //4 MON Data
    let MON = data.match(/^MON%;.+/);
    io.emit('MON', MON)


  let LYMN = data.match(/^LYM;.+/);
    io.emit('LYMN',LYMN)
    
    let MONN = data.match(/^MON;.+/);
    io.emit('MONN', MONN)


    let GRAN = data.match(/^GRA;.+/);
    io.emit('GRAN', GRAN)   


  //MONL Data
  let MONL = data.match(/^MON%;.+/);
  io.emit('MONL', MONL)  
  let GRA = data.match(/^GRA%;.+/);
  io.emit('GRA', GRA)
  //MCHCL Data
  let GRAL = data.match(/^GRA%;.+/);
  io.emit('GRAL', GRAL)
  //5 EOS Data
  let EOS = data.match(/^EOS%;.+/)
  io.emit('EOS', EOS)
  //EOSL Data
  let EOSL = data.match(/^EOS%;.+/);
  io.emit('EOSL', EOSL)
  //12 BAS Data
  let BAS = data.match(/^BAS%;.+/)
  io.emit('BAS', BAS)
  //BAS Data
  let BASL = data.match(/^BAS%;.+/)
  io.emit('BASL', BASL)
      //6 RBC Data
    let RBC = data.match(/^RBC;.+/);
    io.emit('RBC', RBC)
      //RBCL Data
      let RBCL = data.match(/^RBC;.+/);
      io.emit('RBCL', RBCL)
  //7 HGB Data
  let HGB = data.match(/^HGB;.+/);
  io.emit('HGB', HGB)
  //HGBL Data
  let HGBL = data.match(/^HGB;.+/);
  io.emit('HGBL', HGBL)
  //8 HCT Data
  let HCT = data.match(/^HCT;.+/);
  io.emit('HCT', HCT)
  //HGBL Data
  let HCTL = data.match(/^HCT;.+/);
  io.emit('HCTL', HCTL)
  //9 MCV Data
  let MCV = data.match(/^MCV;.+/);
  io.emit('MCV', MCV)
  //MCVL Data
  let MCVL = data.match(/^MCV;.+/);
  io.emit('MCVL', MCVL)
  //10 MCH Data
  let MCH = data.match(/^MCH;.+/);
  io.emit('MCH', MCH)
  let MCHL = data.match(/^MCH;.+/);
  io.emit('MCHL', MCHL)
  let MCHC = data.match(/^MCHC;.+/);
  io.emit('MCHC', MCHC)
  //MCHCL Data
  let MCHCL = data.match(/^MCHC;.+/);
  io.emit('MCHCL', MCHCL)
 
  //12 PLT Data
  let PLT = data.match(/^PLT;.+/);
  io.emit('PLT', PLT)
  //PLTL Data
  let PLTL = data.match(/^PLT;.+/);
  io.emit('PLTL', PLTL)
  
  })


  server.listen(port1, "127.0.0.1");
  console.log('Deployed server running');


