
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-analytics.js";
const firebaseConfig = {
  apiKey: "AIzaSyBJspFr6QSvhEAmONVu3Tl7lZrRFQSA-8I",
  authDomain: "analyzerdb.firebaseapp.com",
  databaseURL: "https://analyzerdb-default-rtdb.firebaseio.com",
  projectId: "analyzerdb",
  storageBucket: "analyzerdb.appspot.com",
  messagingSenderId: "326480477399",
  appId: "1:326480477399:web:2b7cf4d69a4895daeb8492",
  measurementId: "G-NHM4EMZ8HS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
import {
  getFirestore, query, doc, setDoc, getDoc, where, getDocs, onSnapshot, collection,
}
  from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js"

import {
  getStorage, ref as sRef, uploadBytesResumable, getDownloadURL
}
  from "https://www.gstatic.com/firebasejs/9.3.0/firebase-storage.js"

const db = getFirestore();
let db2 = firebase.firestore();
var auto_inc; 
var uid10; 
var email10; 
firebase.auth().onAuthStateChanged(function (user) {

  $(function(){
    $('#petnameinputs').inputfit();
    $('#ownernameinputs').inputfit();
    $('#breedinputs').inputfit();
    $('#physicianinputs').inputfit();
  })

  uid10 = user.uid; 
  email10 = user.email; 
  db2.collection("users").doc(uid10).get().then((doc) => {
      var email10 = doc.data().Username; 
      var userlevel10 = doc.data().UserLevel; 
      document.getElementById("usernamelevel").innerHTML = String(email10) + " | " + String(userlevel10)
  }); 
  
  db2.collection("Details").doc("Clinic Details").get()  
  .then((doc) => {
    var clinic1 = doc.data().Clinic; 
    var address1 = doc.data().Address; 
    var person1 = doc.data().LabTechnician; 
    var details1 = doc.data().Details1; 
    var person2 = doc.data().Veterinarian;
    var details2 = doc.data().Details2; 
  
    var clinicdiv = document.getElementById("clinic1"); 
    var addressdiv =document.getElementById("address"); 
    var labtech =document.getElementById("labtechnician1");
    var vet1  = document.getElementById("vet1");
    var details11 = document.getElementById("details1");
    var details21 = document.getElementById("details2"); 
  
    clinicdiv.innerHTML = String(clinic1 ); 
    addressdiv.innerHTML = String(address1); 
    labtech.innerHTML = String(person1); 
    vet1.innerHTML = String(person2)
    details11.innerHTML = String(details1); 
    details21.innerHTML = String (details2); 
  })

  var clicks2 = document.getElementById("clicks"); 
  var myimg = document.getElementById("signature1"); 
  var myimg2 = document.getElementById("logo1"); 
  var myimg3 = document.getElementById("signature2"); 
  //Automatic Image Data (Signatories)!!
  var docRef = db2.collection("Images").doc("Person 1 E-Signature");
docRef.get().then((doc) => {
    if (doc.exists) {
       myimg.src = doc.data().ImageURL; 
       console.log("Signatories 1 Present")
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
//Automatic Image Data (Logo)!!
var docRef = db2.collection("Images").doc("Logo");
docRef.get().then((doc) => {
    if (doc.exists) {
       myimg2.src = doc.data().ImageURL; 
       console.log("Logo Present")
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
//Automatic Image Data (Header)!!
var docRef = db2.collection("Images").doc("Person 2 E-Signature");
docRef.get().then((doc) => {
    if (doc.exists) {
       myimg3.src = doc.data().ImageURL; 
       console.log("Signatories 2 Present")
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});


var logresultstable = document.getElementById("logresults");
  function AddItemToTable(pid,petname, ownername, gender, 
    age,date,time,doctor,machine,barcode,user,
    //mnchip v5
    alb,albunit,albnormal,
    tp,tpunit,tpnormal,
    ca,caunit,canormal, 
    glu,gluunit,glunormal,
    bun,bununit,bunnormal,
    p,punit,pnormal,
    amy,amyunit,amynormal,
    chol,cholunit,cholnormal,
    alp,alpunit,alpnormal,
    cre,creunit,crenormal,
    ck,ckunit,cknormal,
    wbc,wbcunit,wbcnormal,
    lym,lymunit,lymnormal,
    mon,monunit,monnormal,
    gra,graunit,granormal,
    rbc,rbcunit,rbcnormal,
    hgb,hgbunit,hgbnormal,
    hct,hctunit,hctnormal,
    mcv,mcvunit,mcvnormal,
    mch,mchunit,mchnormal,
    mchc,mchcunit,mchcnormal,
    plt,pltunit,pltnormal,
    tbil,tbilunit,tbilnormal,
    alt,altunit,altnormal,
    specie,lymn,lymunitn,lymnormaln,
    monn,monunitn,monnormaln,
    gran,graunitn,granormaln,
    breed,remarks) {


    let tr_data = document.createElement('tr');
    let td0 = document.createElement('td');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    let td7 = document.createElement('td');
    let td8 = document.createElement('td');
    let td9 = document.createElement('td');
    let td10 = document.createElement('td');
    let td11 = document.createElement('td');
    let td12 = document.createElement('td');
    let td13 = document.createElement('td');
    let td14 = document.createElement('td');
    let td15 = document.createElement('td');
    let td16 = document.createElement('td');
    let td17 = document.createElement('td');
    let td18 = document.createElement('td');
    let td19 = document.createElement('td');
    let td20 = document.createElement('td');
    let td21 = document.createElement('td');
    let td22 = document.createElement('td');
    let td23 = document.createElement('td');
    let td24 = document.createElement('td');
    let td25 = document.createElement('td');
    let td26 = document.createElement('td');
    let td27 = document.createElement('td');
    let td28 = document.createElement('td');
    let td29 = document.createElement('td');
    let td30 = document.createElement('td');
    let td31 = document.createElement('td');
    let td32 = document.createElement('td');
    let td33 = document.createElement('td');
    let td34 = document.createElement('td');
    let td35 = document.createElement('td');
    let td36 = document.createElement('td');
    let td37 = document.createElement('td');
    let td38 = document.createElement('td');
    let td39 = document.createElement('td');
    let td40 = document.createElement('td');
    let td41 = document.createElement('td');
    let td42 = document.createElement('td');
    let td43 = document.createElement('td');
    let td44 = document.createElement('td');
    let td45 = document.createElement('td');
    let td46 = document.createElement('td');
    let td47 = document.createElement('td');
    let td48 = document.createElement('td');
    let td49 = document.createElement('td');
    let td50 = document.createElement('td');
    let td51 = document.createElement('td');
    let td52 = document.createElement('td');
    let td53 = document.createElement('td');
    let td54 = document.createElement('td');
    let td55 = document.createElement('td');
    let td56 = document.createElement('td');
    let td57 = document.createElement('td');
    let td58 = document.createElement('td');
    let td59 = document.createElement('td');
    let td60 = document.createElement('td');
    let td61 = document.createElement('td');
    let td62 = document.createElement('td');
    let td63 = document.createElement('td');
    let td64 = document.createElement('td');
    let td65 = document.createElement('td');
    let td66 = document.createElement('td');
    let td67 = document.createElement('td');
    let td68 = document.createElement('td');
    let td69 = document.createElement('td');
    let td70 = document.createElement('td');
    let td71 = document.createElement('td');
    let td72 = document.createElement('td');
    let td73 = document.createElement('td');
    let td74 = document.createElement('td');
    let td75 = document.createElement('td');
    let td76 = document.createElement('td');
    let td77 = document.createElement('td');
    let td78 = document.createElement('td');
    let td79 = document.createElement('td');
    let td80 = document.createElement('td');
    let td81 = document.createElement('td');
    let td82 = document.createElement('td');
    let td83 = document.createElement('td');
    let td84 = document.createElement('td');
    let td85 = document.createElement('td');
    let td86 = document.createElement('td');
    let td87 = document.createElement('td');
    let td88 = document.createElement('td');
    let td89 = document.createElement('td');
    let td90 = document.createElement('td');
    let td91 = document.createElement('td');
    let td92 = document.createElement('td');
    let td93 = document.createElement('td');
    let td94 = document.createElement('td');

    td0.innerHTML = pid;
    td1.innerHTML = petname;
    td2.innerHTML = ownername;
    td3.innerHTML = gender;
    td4.innerHTML = age;
    td5.innerHTML = date;
    td6.innerHTML = time;
    td7.innerHTML = doctor;
    td8.innerHTML = machine;
    td9.innerHTML = barcode;
    td10.innerHTML = user;

    td11.innerHTML = alb;
    td12.innerHTML = albunit;
    td13.innerHTML = albnormal;

    td14.innerHTML = tp;
    td15.innerHTML = tpunit;
    td16.innerHTML = tpnormal;

    td17.innerHTML = ca;
    td18.innerHTML = caunit;
    td19.innerHTML = canormal;

    td20.innerHTML = glu;
    td21.innerHTML = gluunit;
    td22.innerHTML = glunormal;

    td23.innerHTML = bun;
    td24.innerHTML = bununit;
    td25.innerHTML = bunnormal;

    td26.innerHTML = p;
    td27.innerHTML = punit;
    td28.innerHTML = pnormal;

    td29.innerHTML = amy;
    td30.innerHTML = amyunit;
    td31.innerHTML = amynormal;

    td32.innerHTML = chol;
    td33.innerHTML = cholunit;
    td34.innerHTML = cholnormal;

    td35.innerHTML = alp;
    td36.innerHTML = alpunit;
    td37.innerHTML = alpnormal;

    td38.innerHTML = cre;
    td39.innerHTML = creunit;
    td40.innerHTML = crenormal;

    td41.innerHTML = ck;
    td42.innerHTML = ckunit;
    td43.innerHTML = cknormal;

    td44.innerHTML = wbc;
    td45.innerHTML = wbcunit;
    td46.innerHTML = wbcnormal;

    td47.innerHTML = lym;
    td48.innerHTML = lymunit;
    td49.innerHTML = lymnormal;
    
    td50.innerHTML = mon;
    td51.innerHTML = monunit;
    td52.innerHTML = monnormal;

    td53.innerHTML = gra;
    td54.innerHTML = graunit;
    td55.innerHTML = granormal;

    td56.innerHTML = rbc;
    td57.innerHTML = rbcunit;
    td58.innerHTML = rbcnormal;

    td59.innerHTML = hgb;
    td60.innerHTML = hgbunit;
    td61.innerHTML = hgbnormal;

    td62.innerHTML = hct;
    td63.innerHTML = hctunit;
    td64.innerHTML = hctnormal;

    td65.innerHTML = mcv;
    td66.innerHTML = mcvunit;
    td67.innerHTML = mcvnormal;

    td68.innerHTML = mch;
    td69.innerHTML = mchunit;
    td70.innerHTML = mchnormal;

    td71.innerHTML = mchc;
    td72.innerHTML = mchcunit;
    td73.innerHTML = mchcnormal;

    td74.innerHTML = plt;
    td75.innerHTML = pltunit;
    td76.innerHTML = pltnormal;

    td77.innerHTML = tbil;
    td78.innerHTML = tbilunit;
    td79.innerHTML = tbilnormal;

    td80.innerHTML = alt;
    td81.innerHTML = altunit;
    td82.innerHTML = altnormal;

    td83.innerHTML = specie;

    td84.innerHTML = lymn;
    td85.innerHTML = lymunitn;
    td86.innerHTML = lymnormaln;

    td87.innerHTML = monn;
    td88.innerHTML = monunitn;
    td89.innerHTML = monnormaln;

    td90.innerHTML = gran;
    td91.innerHTML = graunitn;
    td92.innerHTML = granormaln;

    td93.innerHTML = breed;
    td94.innerHTML = remarks;

    tr_data.appendChild(td0);
    tr_data.appendChild(td1);
    tr_data.appendChild(td2);
    tr_data.appendChild(td3);
    tr_data.appendChild(td4);
    tr_data.appendChild(td5);
    tr_data.appendChild(td6);
    tr_data.appendChild(td7);
    tr_data.appendChild(td8); 
    tr_data.appendChild(td9);
    tr_data.appendChild(td10);
    tr_data.appendChild(td11);
    tr_data.appendChild(td12);
    tr_data.appendChild(td13);
    tr_data.appendChild(td14);
    tr_data.appendChild(td15);
    tr_data.appendChild(td16);
    tr_data.appendChild(td17);
    tr_data.appendChild(td18);
    tr_data.appendChild(td19);
    tr_data.appendChild(td20);
    tr_data.appendChild(td21);
    tr_data.appendChild(td22);
    tr_data.appendChild(td23);
    tr_data.appendChild(td24);
    tr_data.appendChild(td25);
    tr_data.appendChild(td26);
    tr_data.appendChild(td27);
    tr_data.appendChild(td28);
    tr_data.appendChild(td29);
    tr_data.appendChild(td30);
    tr_data.appendChild(td31);
    tr_data.appendChild(td32);
    tr_data.appendChild(td33);
    tr_data.appendChild(td34);
    tr_data.appendChild(td35);
    tr_data.appendChild(td36);
    tr_data.appendChild(td37);
    tr_data.appendChild(td38);
    tr_data.appendChild(td39);
    tr_data.appendChild(td40);
    tr_data.appendChild(td41);
    tr_data.appendChild(td42);
    tr_data.appendChild(td43);
    tr_data.appendChild(td44);
    tr_data.appendChild(td45);
    tr_data.appendChild(td46);
    tr_data.appendChild(td47);
    tr_data.appendChild(td48);
    tr_data.appendChild(td49);
    tr_data.appendChild(td50);
    tr_data.appendChild(td51);
    tr_data.appendChild(td52);
    tr_data.appendChild(td53);
    tr_data.appendChild(td54);
    tr_data.appendChild(td55);
    tr_data.appendChild(td56);
    tr_data.appendChild(td57);
    tr_data.appendChild(td58);
    tr_data.appendChild(td59);
    tr_data.appendChild(td60);
    tr_data.appendChild(td61);
    tr_data.appendChild(td62);
    tr_data.appendChild(td63);
    tr_data.appendChild(td64);
    tr_data.appendChild(td65);
    tr_data.appendChild(td66);
    tr_data.appendChild(td67);
    tr_data.appendChild(td68);
    tr_data.appendChild(td69);
    tr_data.appendChild(td70);
    tr_data.appendChild(td71);
    tr_data.appendChild(td72);
    tr_data.appendChild(td73);
    tr_data.appendChild(td74);
    tr_data.appendChild(td75);
    tr_data.appendChild(td76);
    tr_data.appendChild(td77);
    tr_data.appendChild(td78);
    tr_data.appendChild(td79);
    tr_data.appendChild(td80);
    tr_data.appendChild(td81);
    tr_data.appendChild(td82);

    tr_data.appendChild(td83);

    tr_data.appendChild(td84);
    tr_data.appendChild(td85);
    tr_data.appendChild(td86);
    tr_data.appendChild(td87);
    tr_data.appendChild(td88);
    tr_data.appendChild(td89);
    tr_data.appendChild(td90);
    tr_data.appendChild(td91);
    tr_data.appendChild(td92);

    tr_data.appendChild(td93);
    tr_data.appendChild(td94);


    logresultstable.appendChild(tr_data);
  } 

  function AddAllItemsToTable(patientdata) {
    logresultstable.innerHTML = "";
    patientdata.forEach(element => {
      AddItemToTable(element.PID, 
        element.PetName, element.OwnerName, 
        element.Gender, element.Age, 
        element.DATE,element.TIME, element.Doctor,element.Machine, element.barcode, element.User,
        //mnchip v5
        element.ALB,element.ALBUNIT,element.ALBNORMAL,
        element.TP,element.TPUNIT,element.TPNORMAL,
        element.CA,element.CAUNIT,element.CANORMAL,
        element.GLU,element.GLUUNIT,element.GLUNORMAL,
        element.BUN,element.BUNUNIT,element.BUNNORMAL,
        element.P,element.PUNIT,element.PNORMAL,
        element.AMY,element.AMYUNIT,element.AMYNORMAL,
        element.CHOL,element.CHOLUNIT,element.CHOLNORMAL,
        element.ALP,element.ALPUNIT,element.ALPNORMAL,
        element.CRE,element.CREUNIT,element.CRENORMAL,
        element.CK,element.CKUNIT,element.CKNORMAL,
        element.WBC,element.WBCUNIT,element.WBCNORMAL,
        element.LYM,element.LYMUNIT,element.LYMNORMAL,
        element.MON,element.MONUNIT,element.MONNORMAL,
        element.GRA,element.GRAUNIT,element.GRANORMAL,
        element.RBC,element.RBCUNIT,element.RBCNORMAL,
        element.HGB,element.HGBUNIT,element.HGBNORMAL,
        element.HCT,element.HCTUNIT,element.HCTNORMAL,
        element.MCV,element.MCVUNIT,element.MCVNORMAL,
        element.MCH,element.MCHUNIT,element.MCHNORMAL,
        element.MCHC,element.MCHCUNIT,element.MCHCNORMAL,
        element.PLT,element.PLTUNIT,element.PLTNORMAL,
        element.TBIL,element.TBILUNIT,element.TBILNORMAL,
        element.ALT,element.ALTUNIT,element.ALTNORMAL,
        element.Specie,
        element.LYMN,element.LYMUNITN, element.LYMNORMALN,
        element.MONN,element.MONUNITN, element.MONNORMALN,
        element.GRAN,element.GRAUNITN, element.GRANORMALN,
        element.Breed,element.Remarks);
    });
  }
  async function GetAllDataOnce() {
    const q = query(collection(db, "patientvalues2"));
    const querySnapshot = await getDocs(q);
    var datalog = [];
    querySnapshot.forEach(doc => {
      datalog.push(doc.data());
    });

    AddAllItemsToTable(datalog);
  }

  async function RealTimeData() {

    const dbRef = collection(db, "patientvalues2");
    onSnapshot(dbRef, (querySnapshot) => {
      var datalog = [];
      querySnapshot.forEach(doc => {
        datalog.push(doc.data());
      });

      AddAllItemsToTable(datalog);

    })
  }
  GetAllDataOnce();
 
  setTimeout(function (wews) {
   
    $(document).ready(function () {

      setTimeout(() => {
        var table = $('#example').DataTable();
        if(localStorage.getItem("textvalue") == null)
        {
            console.log("No Data in Local Storage")
        }
        else {
          table.search(localStorage.getItem("textvalue")).draw();
        }
        localStorage.clear();
        $('#searchsubmit').click(function() {
         table.search($("#textvalue1").val()).draw();
         console.log($("#textvalue1").val())
        })
   
      }, 500);
      setTimeout(() => {
        $("#example"). css("visibility", "visible");
        $("#example_wrapper"). css("visibility", "visible")
        $(".dataTables_info"). css("visibility", "hidden");
        $("#scnrbtn"). css("display", "none");
      
      }, 300);
      $(".spinner-grow"). css("display", "none");
      $('#example').dataTable({
        iDisplayLength: 5,
        dom: '<"top"iflp<"clear">>rt<"bottom"iflp<"clear">>',
        dom: "Bfrltip",
        pagingType: "full_numbers",
        searching: true,
        paginate: true,
        select: true,
        select: {
          style: 'os',
          className: 'focusedRow',
          selector: 'td:last-child a'
        },
        responsive: true,
        "autoWidth": false,
        sorting: true,
        "order": [[5]],
        lengthChange: false,
        pageLength: 12,
        scrollY: "400px",
        columnDefs: [
          {
            "targets": [0],
            "visible": true,
            "searchable": true,
            orderable: true,
          },
          {
            "targets": [1],
            "visible": true,
            "searchable": true,
            orderable: true,
          },
          {
            "targets": [2],
            "visible": true,
            "searchable": true,
            orderable: true,
          },
          {
            "targets": [5],
            "visible": true,
            "searchable": true,
            orderable: true,
          },
          {
            "targets": [10],
            "visible": false,
            "searchable": true,
            orderable: true,
          },
          {
            
            "targets": [3,4,6,7,8,9,11,12,13,14,15,
              16,17,18,19,20,21,22,23,24,25,26,27,28,29,
              30,31,32,33,34,35,36,37,38,39,40,41,42,43,
              44,45,46,47,48,49,50,51,52,53,54,55,56,57,
              58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,
              73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,
            89,90,91,92,93,94],
            "visible": false,
            "searchable": true,
            orderable: true,
          },
          { width: "10px", targets: 0 },
          { width: "500px", targets: 1 },
          { width: "500px", targets: 2 },
          { width: "500px", targets: 5 },
          { width: "500px", targets: 10 },
        ],
        fixedColumns: true,
        "dom": '<lf<t>ip>',
        info: true,
        scrollCollapse: true,
        processing: false,
        language: {

          paginate: { first: "First", last: "Last", next: "Next", previous: "Previous" }

        },
        serverSide: false,
        select: {
          style: 'os',
          items: 'cell'
        },
        orderCellsTop: true,
        fixedHeader: true,
        initComplete: function () {
          var api = this.api();

          // For each column
          api
            .columns()
            .eq(0)
            .each(function (colIdx) {
              // Set the header cell to contain the input element
              var cell = $('.filters th').eq(
                $(api.column(colIdx).header()).index()
              );
              var title = $(cell).text();
              $(cell).html('<input id="searchinput" type="text"/>');

              // On every keypress in this input
              $(
                'input',
                $('.filters th').eq($(api.column(colIdx).header()).index())
              )
                .off('keyup change')
                .on('keyup change', function (e) {
                  e.stopPropagation();

                  // Get the search value
                  $(this).attr('title', $(this).val());
                  var regexr = '({search})'; //$(this).parents('th').find('select').val();

                  var cursorPosition = this.selectionStart;
                  // Search the column for that value
                  api
                    .column(colIdx)
                    .search(
                      this.value != ''
                        ? regexr.replace('{search}', '(((' + this.value + ')))')
                        : '',
                      this.value != '',
                      this.value == ''
                    )
                    .draw();

                  $(this)
                    .focus()[0]
                    .setSelectionRange(cursorPosition, cursorPosition);
                });
            });
        },
      });

     
      
      var table = $('#example').DataTable();
      var container = $('<div/>').insertBefore(table.table().container());
 
      var chart = Highcharts.chart(container[0], {
          chart: {
              type: 'line',
          },
          title: {
              text: '',
          },
          yAxis: {
            title: {
                text: 'Number of Test Ran'
            }
        },
    
        xAxis: {
          allowDecimals: false
        },
    
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: true
                },
            
            },
            line: {
              dataLabels: {
                  enabled: true
              },
          }
        },
          series: [
              {
                  name: "Tests",
                  type: 'line',
                  data: chartData(table),
                  zoneAxis: 'x',
                  zones: [{
                      value: 0,
                      color: '#336e74'
                  }, {
                      value: 1,
                      color: '#483374'
                  }, {
                      value: 2,
                      color: '#5c264c'
                    }, {
                      value: 3,
                      color: '#483374'
                    }, {
                      value: 4,
                      color: '#336e74'
                    }, {
                      value: 5,
                      color: '#5c264c'
                  }, {
                      color: 'red'
                      
                  }]
              },
          ],
      });
      // On each draw, update the data in the chart
      table.on('draw', function () {
          chart.series[0].setData(chartData(table));

      });
  function chartData(table) {
      var counts = {};
   
      // Count the number of entries for each position
      table
          .column(5, { search: 'applied' })
          .data()
          .each(function (val) {
              if (counts[val]) {
                  counts[val] += 1;
              } else {
                  counts[val] = 1;
              }
          });
   
      // And map it to the format highcharts uses
      return $.map(counts, function (val, key) {
          return {
              name: key,
              y: val,
          };
      });
  }


      $('#example tbody').on('click', 'tr', function () {
        $(".modal-body div span").text("");
        $("#pidinfo").html(table.row(this).data()[0]);


        $("#petname").html(table.row(this).data()[1]);
        $("#petnameinputs").val(table.row(this).data()[1]);


        $("#ownername").html(table.row(this).data()[2]);    
        $("#ownernameinputs").val(table.row(this).data()[2]);    


        $("#gender").html(table.row(this).data()[3]);
        $("#genderselect").val(table.row(this).data()[3]);
        $('#genderselect').selectpicker('refresh');


        $("#age").html(table.row(this).data()[4]);
        $("#ageinputs").val(table.row(this).data( )[4]);

        $("#DATE").html(table.row(this).data()[5]);
        $("#timeinputs").html(table.row(this).data()[6]);

        
        $("#physicianinputs").val(table.row(this).data()[7]);
        $("#vet").html(table.row(this).data()[7]);

        $("#machine1").html(table.row(this).data()[8]);
        $("#specieselect").html(table.row(this).data()[83]);
        $("#last-barcode").html(table.row(this).data()[9]);

        $("#breedinputs").val(table.row(this).data()[93]);
        $("#breed").html(table.row(this).data()[93]);

        $("#remarks-textarea").text(table.row(this).data()[94]);
        var barcode5 = document.getElementById("last-barcode").innerText; 
          //barcode
    JsBarcode("#barcode3", barcode5, {
      format: "CODE39",
      flat : true,
    lineColor: "#0aa",
                    width: 1,
                    height: 50,
                    displayValue: true
                  })
        $("#user5").html(table.row(this).data()[10]);

        var mnchipspecie = document.getElementById("specieselect"); 
        db2.collection("Reference Ranges").doc("MNCHIP V5 - "+ String(mnchipspecie.innerText)).get()  
        .then((doc) => {
        

        $("#th_alb").html(table.row(this).data()[11]); 
        var alba = String(document.getElementById("th_alb").innerText);  
        /*low */ var albb = String(doc.data().ALBLower);
        /* high */ var albc = String(doc.data().ALBUpper);    
      
        var data = [
          {
            type: "indicator",
            mode: "gauge",
            value: parseFloat(alba),
            domain: { x: [0, 1], y: [0, 1]},
            steps: { range: [0, 4],visible:true, color: "green", },
            gauge: { 
              shape: "bullet",
              axis: { range: [0, parseFloat(albc)]},
              bar: {color: "rgb(50 135 69)"}
            },                  
          }
        ];
        var layout = { 
        width: 250, height: 200,
        showlegend: false,
        paper_bgcolor:"rgba(0,0,0,0)", 
        font: {
          family: 'Courier New, monospace',
          size: 0,
          color: '#FFFFFF'
        }
        };
        var config = { responsive: true,displayModeBar: false };
        Plotly.newPlot('alb1', data, layout, config);


          if (parseFloat(alba) > parseFloat(albc) || alba.includes(">"))
              {
               th_alb.style.color = "red"
               document.getElementById("th_alb2").style.color = "red"; 
               $("div#alb1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)");                   
              }
             else if (parseFloat(alba) < parseFloat(albb))
              {
               th_alb.style.color = "red"
               document.getElementById("th_alb2").style.color = "red"; 
               $("div#alb1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)");
              }
              else 
              {
               document.getElementById("th_alb").style.color = "black"; 
               document.getElementById("th_alb2").style.color = "black"; 
               $("div#alb1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
              }

        $("#th_albunit").html(table.row(this).data()[12]);
        $("#th_albnormal").html(table.row(this).data()[13]);

        

        $("#th_tp").html(table.row(this).data()[14]);
        var tpa = String(document.getElementById("th_tp").innerText);  
        /*low */ var tpb =  String(doc.data().TPLower)
        /* high */ var tpc =  String(doc.data().TPUpper)

        var data = [
          {
            type: "indicator",
            mode: "gauge",
            value: parseFloat(tpa),
            domain: { x: [0, 1], y: [0, 1] },
            gauge: { 
              shape: "bullet",
              axis: { range: [0, parseFloat(tpc)]},
              bar: {color: "rgb(50 135 69)"}
            },
       
          }
        ];
        var layout = { 
        width: 250, height: 200,
        paper_bgcolor:"rgba(0,0,0,0)", 
        font: {
          family: 'Courier New, monospace',
          size: 0,
          color: '#FFFFFF'
        }
        };
        var config = { responsive: true,displayModeBar: false};
        Plotly.newPlot('tp1', data, layout,config);


        if (parseFloat(tpa) > parseFloat(tpc) || tpa.includes(">"))
        {
         th_tp.style.color = "red"
         document.getElementById("th_tp2").style.color = "red"; 
         $("div#tp1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)"); 
        }
       else if (parseFloat(tpa) < parseFloat(tpb))
        {
         th_tp.style.color = "red"
         document.getElementById("th_tp2").style.color = "red"; 
         $("div#tp1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)");
        }
        else 
        {
         document.getElementById("th_tp").style.color = "black"; 
         document.getElementById("th_tp2").style.color = "black"; 
         $("div#tp1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
        }
        $("#th_tpunit").html(table.row(this).data()[15]);
        $("#th_tpnormal").html(table.row(this).data()[16]);
        

        $("#th_ca").html(table.row(this).data()[17]);
        var caa = String(document.getElementById("th_ca").innerText);  
        /*low */ var cab = String(doc.data().CaLower); 
        /* high */ var cac = String(doc.data().CaUpper);    
        
        var data = [
          {
            type: "indicator",
            mode: "gauge",
            value: parseFloat(caa),
            domain: { x: [0, 1], y: [0, 1] },
            gauge: { 
              shape: "bullet",
              axis: { range: [0, parseFloat(cac)]},
            },
       
            
          }
        ];
        var layout = { 
        width: 250, height: 200,
        paper_bgcolor:"rgba(0,0,0,0)", 
        font: {
          family: 'Courier New, monospace',
          size: 0,
          color: '#FFFFFF'
        }
        };
        Plotly.newPlot('ca1', data, layout);

          if (parseFloat(caa) > parseFloat(cac) || caa.includes(">"))
              {
               th_ca.style.color = "red"
               document.getElementById("th_ca2").style.color = "red"; 
               $("div#ca1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)"); 
              }
             else if (parseFloat(caa) < parseFloat(cab))
              {
               th_ca.style.color = "red"
               document.getElementById("th_ca2").style.color = "red"; 
               $("div#ca1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)");
              }
              else 
              {
               document.getElementById("th_ca").style.color = "black"; 
               document.getElementById("th_ca2").style.color = "black"; 
               $("div#ca1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
               
              }

        $("#th_caunit").html(table.row(this).data()[18]);
        $("#th_canormal").html(table.row(this).data()[19]);


        
        $("#th_glu").html(table.row(this).data()[20]);
        var glua = String(document.getElementById("th_glu").innerText);  
        /*low */ var glub = String(doc.data().GLULower); 
        /* high */ var gluc = String(doc.data().GLUUpper); 

        var data = [
          {
            type: "indicator",
            mode: "gauge",
            value: parseFloat(glua),
            domain: { x: [0, 1], y: [0, 1] },
            gauge: { 
              shape: "bullet",
              axis: { range: [0, parseFloat(gluc)]},
            },
       
            
          }
        ];
        var layout = { 
        width: 250, height: 200,
        paper_bgcolor:"rgba(0,0,0,0)", 
        font: {
          family: 'Courier New, monospace',
          size: 0,
          color: '#FFFFFF'
        }
        };
        Plotly.newPlot('glu1', data, layout);

          if (parseFloat(glua) > parseFloat(gluc) || glua.includes(">"))
              {
               th_glu.style.color = "red"
               document.getElementById("th_glu2").style.color = "red"; 
               $("div#glu1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)"); 
              }
             else if (parseFloat(glua) < parseFloat(glub))
              {
               th_glu.style.color = "red"
               document.getElementById("th_glu2").style.color = "red"; 
               $("div#glu1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)");
              }
              else 
              {
               document.getElementById("th_glu").style.color = "black"; 
               document.getElementById("th_glu2").style.color = "black"; 
               $("div#glu1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
              }

        $("#th_gluunit").html(table.row(this).data()[21]);
        $("#th_glunormal").html(table.row(this).data()[22]);



        $("#th_bun").html(table.row(this).data()[23]);
        var buna = String(document.getElementById("th_bun").innerText);
        /*low */ var bunb = String(doc.data().BUNLower)
        /* high */ var bunc =  String(doc.data().BUNUpper)

        var data = [
          {
            type: "indicator",
            mode: "gauge",
            value: parseFloat(buna),
            domain: { x: [0, 1], y: [0, 1] },
            gauge: { 
              shape: "bullet",
            },
       
            
          }
        ];
        var layout = { 
        width: 250, height: 200,
        paper_bgcolor:"rgba(0,0,0,0)", 
        font: {
          family: 'Courier New, monospace',
          size: 0,
          color: '#FFFFFF'
        }
        };
        Plotly.newPlot('bun1', data, layout);
      
          if (parseFloat(buna) > parseFloat(bunc) || buna.includes(">"))
              {
               th_bun.style.color = "red"
               document.getElementById("th_bun2").style.color = "red"; 
               $("div#bun1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)");
              }
             else if (parseFloat(buna) < parseFloat(bunb))
              {
               th_bun.style.color = "red"
               document.getElementById("th_bun2").style.color = "red"; 
               $("div#bun1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)");
              }
              else 
              {
               document.getElementById("th_bun").style.color = "black"; 
               document.getElementById("th_bun2").style.color = "black"; 
               $("div#bun1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
              }
              
        $("#th_bununit").html(table.row(this).data()[24]);
        $("#th_bunnormal").html(table.row(this).data()[25]);


        
        $("#th_p").html(table.row(this).data()[26]);
        var pa = String(document.getElementById("th_p").innerText);  
        /*low */ var pb =  String(doc.data().PLower)
        /* high */ var pc =  String(doc.data().PUpper)  
        var data = [
          {
            type: "indicator",
            mode: "gauge",
            value: parseFloat(pa),
            domain: { x: [0, 1], y: [0, 1] },
            gauge: { 
              shape: "bullet",
              axis: { range: [0, parseFloat(pc)]},
            },
       
            
          }
        ];
        var layout = { 
        width: 250, height: 200,
        paper_bgcolor:"rgba(0,0,0,0)", 
        font: {
          family: 'Courier New, monospace',
          size: 0,
          color: '#FFFFFF'
        }
        };
        Plotly.newPlot('p1', data, layout);
      
          if (parseFloat(pa) > parseFloat(pc) || pa.includes(">"))
              {
               th_p.style.color = "red"
               document.getElementById("th_p2").style.color = "red"; 
               $("div#p1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)"); 
              }
             else if (parseFloat(pa) < parseFloat(pb))
              {
               th_p.style.color = "red"
               document.getElementById("th_p2").style.color = "red"; 
               $("div#p1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)"); 
              }
              else 
              {
               document.getElementById("th_p").style.color = "black"; 
               document.getElementById("th_p2").style.color = "black"; 
               $("div#p1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
              }        

        $("#th_punit").html(table.row(this).data()[27]);
        $("#th_pnormal").html(table.row(this).data()[28]);


        
        $("#th_amy").html(table.row(this).data()[29]);
        var amya = String(document.getElementById("th_amy").innerText);  
         /*low */ var amyb = String(doc.data().AMYLower); 
               /* high */ var amyc = String(doc.data().AMYUpper);  
               
               var data = [
                {
                  type: "indicator",
                  mode: "gauge",
                  value: parseFloat(amya),
                  domain: { x: [0, 1], y: [0, 1] },
                  gauge: { 
                    shape: "bullet",
                    axis: { range: [0, parseFloat(amyc)]},
                  },
             
                  
                }
              ];
              var layout = { 
              width: 250, height: 200,
              paper_bgcolor:"rgba(0,0,0,0)", 
              font: {
                family: 'Courier New, monospace',
                size: 0,
                color: '#FFFFFF'
              }
              };
              Plotly.newPlot('amy1', data, layout);
             
               if (parseFloat(amya) > parseFloat(amyc) || amya.includes(">"))
               {              
                th_amy.style.color = "red"
                document.getElementById("th_amy2").style.color = "red"; 
                $("div#amy1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)"); 
               }
              else if (parseFloat(amya) < parseFloat(amyb))
               {            
                th_amy.style.color = "red"
                document.getElementById("th_amy2").style.color = "red"; 
                $("div#amy1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)");
               }
               else 
               {              
                document.getElementById("th_amy").style.color = "black"; 
                document.getElementById("th_amy2").style.color = "black"; 
                $("div#amy1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
               }

        $("#th_amyunit").html(table.row(this).data()[30]);
        $("#th_amynormal").html(table.row(this).data()[31]);


        
        $("#th_chol").html(table.row(this).data()[32]);
        var chola = String(document.getElementById("th_chol").innerText);  
         /*low */ var cholb =  String(doc.data().CholLower)
                /* high */ var cholc =  String(doc.data().CholUpper)  

                var data = [
                  {
                    type: "indicator",
                    mode: "gauge",
                    value: parseFloat(chola),
                    domain: { x: [0, 1], y: [0, 1] },
                    gauge: { 
                      shape: "bullet",
                      axis: { range: [0, parseFloat(cholc)]},
                    },
               
                    
                  }
                ];
                var layout = { 
                width: 250, height: 200,
                paper_bgcolor:"rgba(0,0,0,0)", 
                font: {
                  family: 'Courier New, monospace',
                  size: 0,
                  color: '#FFFFFF'
                }
                };
                Plotly.newPlot('chol1', data, layout);
              
                if (parseFloat(chola) > parseFloat(cholc) || chola.includes(">"))
                {             
                 th_chol.style.color = "red"
                 document.getElementById("th_chol2").style.color = "red"; 
                 $("div#chol1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)"); 
                }
               else if (parseFloat(chola) < parseFloat(cholb))
                {              
                 th_chol.style.color = "red"
                 document.getElementById("th_chol2").style.color = "red"; 
                 $("div#chol1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)"); 
                }
                else 
                {              
                 document.getElementById("th_chol").style.color = "black"; 
                 document.getElementById("th_chol2").style.color = "black"; 
                 $("div#chol1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
                }

        $("#th_cholunit").html(table.row(this).data()[33]);
        $("#th_cholnormal").html(table.row(this).data()[34]);


        
        $("#th_alp").html(table.row(this).data()[35]);
        var alpa = String(document.getElementById("th_alp").innerText);  
          /*low */ var alpb =  String(doc.data().AlpLower)
                /* high */ var alpc =  String(doc.data().AlpUpper)   

                var data = [
                  {
                    type: "indicator",
                    mode: "gauge",
                    value: parseFloat(alpa),
                    domain: { x: [0, 1], y: [0, 1] },
                    gauge: { 
                      shape: "bullet",
                      axis: { range: [0, parseFloat(alpc)]},
                    },
               
                    
                  }
                ];
                var layout = { 
                width: 250, height: 200,
                paper_bgcolor:"rgba(0,0,0,0)", 
                font: {
                  family: 'Courier New, monospace',
                  size: 0,
                  color: '#FFFFFF'
                }
                };
                Plotly.newPlot('alp1', data, layout);

                if (parseFloat(alpa) > parseFloat(alpc) || alpa.includes(">"))
                {            
                 th_alp.style.color = "red"
                 document.getElementById("th_alp2").style.color = "red"; 
                 $("div#alp1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)"); 
                }
               else if (parseFloat(alpa) < parseFloat(alpb))
                {             
                 th_alp.style.color = "red"
                 document.getElementById("th_alp2").style.color = "red"; 
                 $("div#alp1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)");
                }
                else 
                {             
                 document.getElementById("th_alp").style.color = "black"; 
                 document.getElementById("th_alp2").style.color = "black"; 
                 $("div#alp1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
                }

        $("#th_alpunit").html(table.row(this).data()[36]);
        $("#th_alpnormal").html(table.row(this).data()[37]);


        $("#th_cre").html(table.row(this).data()[38]);
        var crea = String(document.getElementById("th_cre").innerText);  
          /*low */ var creb = String(doc.data().CreLower)
           /* high */ var crec = String(doc.data().CreUpper)

           var data = [
            {
              type: "indicator",
              mode: "gauge",
              value: parseFloat(crea),
              domain: { x: [0, 1], y: [0, 1] },
              gauge: { 
                shape: "bullet",
                axis: { range: [0, parseFloat(crec)]},
                bar: {color: "#296e74"}
              },
         
              
            }
          ];
          var layout = { 
          width: 250, height: 200,
          paper_bgcolor:"rgba(0,0,0,0)", 
          font: {
            family: 'Courier New, monospace',
            size: 0,
            color: '#FFFFFF'
          }
          };
          Plotly.newPlot('cre1', data, layout);
         
           if (parseFloat(crea) > parseFloat(crec) || crea.includes(">"))
           {
            th_cre.style.color 
            = "red"
            document.getElementById("th_cre2").style.color = "red"; 
            $("div#cre1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)"); 
           }
          else if (parseFloat(crea) < parseFloat(creb))
           {
            th_cre.style.color = "red"
            document.getElementById("th_cre2").style.color = "red"; 
            $("div#cre1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)");
           }
           else 
           {
            document.getElementById("th_cre").style.color = "black"; 
            document.getElementById("th_cre2").style.color = "black"; 
            $("div#cre1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
           }
        $("#th_creunit").html(table.row(this).data()[39]);
        $("#th_crenormal").html(table.row(this).data()[40]);

        
        $("#th_ck").html(table.row(this).data()[41]);
        var cka = String(document.getElementById("th_ck").innerText);  
        /*low */ var ckb = String(doc.data().CkLower)
       /* high */ var ckc = String(doc.data().CkUpper)

       var data = [
        {
          type: "indicator",
          mode: "gauge",
          value: parseFloat(cka),
          domain: { x: [0, 1], y: [0, 1] },
          gauge: { 
            shape: "bullet",
            axis: { range: [0, parseFloat(ckc)]},
          },
     
          
        }
      ];
      var layout = { 
      width: 250, height: 200,
      paper_bgcolor:"rgba(0,0,0,0)", 
      font: {
        family: 'Courier New, monospace',
        size: 0,
        color: '#FFFFFF'
      }
      };
      Plotly.newPlot('ck1', data, layout);
     
       if (parseFloat(cka) > parseFloat(ckc))
       {     
        th_ck.style.color = "red"
        document.getElementById("th_ck2").style.color = "red"; 
        $("div#ck1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)");
       }
      else if (parseFloat(cka) < parseFloat(ckb))
       {        
        th_ck.style.color = "red"
        document.getElementById("th_ck2").style.color = "red"; 
        $("div#ck1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)");
       }
       else 
       {
        document.getElementById("th_ck").style.color = "black"; 
        document.getElementById("th_ck2").style.color = "black"; 
        $("div#ck1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)"); 
       }

        $("#th_ckunit").html(table.row(this).data()[42]);
        $("#th_cknormal").html(table.row(this).data()[43]);

       
        $("#th_tbil").html(table.row(this).data()[77]); 
        var tbila = String(document.getElementById("th_tbil").innerText);  
        /*low */ var tbilb = String(doc.data().TbilLower)
        /* high */ var tbilc = String(doc.data().TbilUpper)  
        var data = [
          {
            type: "indicator",
            mode: "gauge",
            value: parseFloat(tbila),
            domain: { x: [0, 1], y: [0, 1] },
            gauge: { 
              shape: "bullet",
              axis: { range: [0, parseFloat(tbilc)]},
            },
       
            
          }
        ];
        var layout = { 
        width: 250, height: 200,
        paper_bgcolor:"rgba(0,0,0,0)", 
        font: {
          family: 'Courier New, monospace',
          size: 0,
          color: '#FFFFFF'
        }
        };
        Plotly.newPlot('tbil1', data, layout);
      
          if (parseFloat(tbila) > parseFloat(tbilc) || tbila.includes(">"))
              {
               th_tbil.style.color = "red"
               document.getElementById("th_tbil2").style.color = "red"; 
               $("div#tbil1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)"); 
              }
             else if (parseFloat(tbila) < parseFloat(tbilb))
              {
               th_tbil.style.color = "red"
               document.getElementById("th_tbil2").style.color = "red"; 
               $("div#tbil1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)"); 
              }
              else 
              {
               document.getElementById("th_tbil").style.color = "black"; 
               document.getElementById("th_tbil2").style.color = "black"; 
               $("div#tbil1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
              } 
        $("#th_tbilunit").html(table.row(this).data()[78]);
        $("#th_tbilnormal").html(table.row(this).data()[79]);

        $("#th_alt").html(table.row(this).data()[80]);  
        var alta = String(document.getElementById("th_alt").innerText);  
        /*low */ var altb = String(doc.data().AltLower)
        /* high */ var altc = String(doc.data().AltUpper)   

        var data = [
          {
            type: "indicator",
            mode: "gauge",
            value: parseFloat(alta),
            domain: { x: [0, 1], y: [0, 1] },
            gauge: { 
              shape: "bullet",
              axis: { range: [0, parseFloat(altc)]},
            },
       
            
          }
        ];
        var layout = { 
        width: 250, height: 200,
        paper_bgcolor:"rgba(0,0,0,0)", 
        font: {
          family: 'Courier New, monospace',
          size: 0,
          color: '#FFFFFF'
        }
        };
        Plotly.newPlot('alt1', data, layout);
          if (parseFloat(alta) > parseFloat(altc) || alta.includes(">"))
              {
               th_alt.style.color = "red"
               document.getElementById("th_alt2").style.color = "red"; 
               $("div#alt1> .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)");
              }
             else if (parseFloat(alta) < parseFloat(altb))
              {
               th_alt.style.color = "red"
               document.getElementById("th_alt2").style.color = "red"; 
               $("div#alt1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)"); 
              }
              else 
              {
               document.getElementById("th_alt").style.color = "black"; 
               document.getElementById("th_alt2").style.color = "black"; 
               $("div#alt1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
              }
        $("#th_altunit").html(table.row(this).data()[81]);
        $("#th_altnormal").html(table.row(this).data()[82]);


        //-----
        })
        var mythicspecie = document.getElementById("specieselect"); 
        db2.collection("Reference Ranges").doc("Mythic 18 Vet - "+ String(mythicspecie.innerText)).get()  
        .then((doc) => {

        $("#th_wbc").html(table.row(this).data()[44]); 
        var wbca = String(document.getElementById("th_wbc").innerText);  
        /*low */ var wbcb = String(doc.data().WBCLower); 
        /* high */ var wbcc = String(doc.data().WBCUpper);  

        var data = [
          {
            type: "indicator",
            mode: "gauge",
            value: parseFloat(wbca),
            domain: { x: [0, 1], y: [0, 1] },
            gauge: { 
              shape: "bullet",
              axis: { range: [0, parseFloat(wbcc)]},
            },
        
          }
        ];
        var layout = { 
        width: 250, height: 200,
        paper_bgcolor:"rgba(0,0,0,0)", 
        font: {
          family: 'Courier New, monospace',
          size: 0,
          color: '#FFFFFF'
        }
        };
        Plotly.newPlot('wbc1', data, layout);  
          if (parseFloat(wbca) > parseFloat(wbcc))
              {            
               th_wbc.style.color = "red"
               document.getElementById("th_wbc2").style.color = "red"; 
               $("div#wbc1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)"); 
              }
             else if (parseFloat(wbca) < parseFloat(wbcb))
              {
               th_wbc.style.color = "red"
               document.getElementById("th_wbc2").style.color = "red"; 
               $("div#wbc1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)"); 
              }
              else 
              {
               document.getElementById("th_wbc").style.color = "black"; 
               document.getElementById("th_wbc2").style.color = "black"; 
               $("div#wbc1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
              }
        
        $("#th_wbcunit").html(table.row(this).data()[45]);
        $("#th_wbcnormal").html(table.row(this).data()[46]);
        
        $("#th_lym").html(table.row(this).data()[47]); 
        var lyma = String(document.getElementById("th_lym").innerText);  
        /*low */ var lymb = String(doc.data().LymLower); 
        /* high */ var lymc = String(doc.data().LymUpper); ;    

        var data = [
          {
            type: "indicator",
            mode: "gauge",
            value: parseFloat(lyma),
            domain: { x: [0, 1], y: [0, 1] },
            gauge: { 
              shape: "bullet",
              axis: { range: [0, parseFloat(lymc)]},
      
            },
       
          }
        ];
        var layout = { 
        width: 250, height: 200,
        paper_bgcolor:"rgba(0,0,0,0)", 
        font: {
          family: 'Courier New, monospace',
          size: 0,
          color: '#FFFFFF'
        }
        };
        Plotly.newPlot('lym1', data, layout);
      
          if (parseFloat(lyma) > parseFloat(lymc))
              {            
               th_lym.style.color = "red"
               document.getElementById("th_lym2").style.color = "red"; 
               $("div#lym1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)"); 
              }
             else if (parseFloat(lyma) < parseFloat(lymb))
              {            
               th_lym.style.color = "red"
               document.getElementById("th_lym2").style.color = "red"; 
               $("div#lym1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)");
              }
              else 
              {
               document.getElementById("th_lym").style.color = "black"; 
               document.getElementById("th_lym2").style.color = "black"; 
               $("div#lym1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)");
              }

        $("#th_lymunit").html(table.row(this).data()[48]);
        $("#th_lymnormal").html(table.row(this).data()[49]);

        $("#th_mon").html(table.row(this).data()[50]); 
        var mona = String(document.getElementById("th_mon").innerText);  
        /*low */ var monb = String(doc.data().MonLower); 
        /* high */ var monc = String(doc.data().MonUpper);  
        var data = [
          {
            type: "indicator",
            mode: "gauge",
            value: parseFloat(monb),
            domain: { x: [0, 1], y: [0, 1] },
            gauge: { 
              shape: "bullet",
              axis: { range: [0, parseFloat(monc)]},
            },
       
          }
        ];
        var layout = { 
        width: 250, height: 200,
        paper_bgcolor:"rgba(0,0,0,0)", 
        font: {
          family: 'Courier New, monospace',
          size: 0,
          color: '#FFFFFF'
        }
        };
        Plotly.newPlot('mon1', data, layout);  
      
          if (parseFloat(mona) > parseFloat(monc))
              {
               th_mon.style.color = "red"
               document.getElementById("th_mon2").style.color = "red"; 
               $("div#mon1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)"); 
              }
             else if (parseFloat(mona) < parseFloat(monb))
              {
               th_mon.style.color = "red"
               document.getElementById("th_mon2").style.color = "red"; 
               $("div#mon1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)"); 
              }
              else 
              {
               document.getElementById("th_mon").style.color = "black"; 
               document.getElementById("th_mon2").style.color = "black"; 
               $("div#mon1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
              }
    
        $("#th_monunit").html(table.row(this).data()[51]);
        $("#th_monnormal").html(table.row(this).data()[52]);

        $("#th_gra").html(table.row(this).data()[53]); 
        var graa = String(document.getElementById("th_gra").innerText);  
        /*low */ var grab = String(doc.data().GraLower); 
        /* high */ var grac = String(doc.data().GraUpper);    

        var data = [
          {
            type: "indicator",
            mode: "gauge",
            value: parseFloat(graa),
            domain: { x: [0, 1], y: [0, 1] },
            gauge: { 
              shape: "bullet",
              axis: { range: [0, parseFloat(grac)]},
            },
       
          }
        ];
        var layout = { 
        width: 250, height: 200,
        paper_bgcolor:"rgba(0,0,0,0)", 
        font: {
          family: 'Courier New, monospace',
          size: 0,
          color: '#FFFFFF'
        }
        };
        Plotly.newPlot('gra1', data, layout);
      
          if (parseFloat(graa) > parseFloat(grac))
              {
               th_gra.style.color = "red"
               document.getElementById("th_gra2").style.color = "red"; 
               $("div#gra1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)"); 
              }
             else if (parseFloat(graa) < parseFloat(grab))
              {
               th_gra.style.color = "red"
               document.getElementById("th_gra2").style.color = "red"; 
               $("div#gra1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)");
              }
              else 
              {
               document.getElementById("th_gra").style.color = "black"; 
               document.getElementById("th_gra2").style.color = "black"; 
               $("div#gra1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
              }

        $("#th_graunit").html(table.row(this).data()[54]);
        $("#th_granormal").html(table.row(this).data()[55]);
        
        $("#th_rbc").html(table.row(this).data()[56]); 
        var rbca = String(document.getElementById("th_rbc").innerText);  
        /*low */ var rbcb = String(doc.data().RBCLower); 
        /* high */ var rbcc =  String(doc.data().RBCUpper); 

        var data = [
          {
            type: "indicator",
            mode: "gauge",
            gauge: { 
              shape: "bullet",
              axis: { range: [0, parseFloat(rbcc)]},
            },
            value: parseFloat(rbca),
            domain: { x: [0, 1], y: [0, 1] },
          }
        ];
        var layout = { 
        width: 250, height: 200,
        paper_bgcolor:"rgba(0,0,0,0)", 
        font: {
          family: 'Courier New, monospace',
          size: 0,
          color: '#FFFFFF'
        }
        };
        Plotly.newPlot('rbc1', data, layout);
      
          if (parseFloat(rbca) > parseFloat(rbcc))
              {
               th_rbc.style.color = "red"
               document.getElementById("th_rbc2").style.color = "red"; 
               $("div#rbc1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)");
              }
             else if (parseFloat(rbca) < parseFloat(rbcb))
              {
               th_rbc.style.color = "red"
               document.getElementById("th_rbc2").style.color = "red"; 
               $("div#rbc1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)");
              }
              else 
              {
               document.getElementById("th_rbc").style.color = "black"; 
               document.getElementById("th_rbc2").style.color = "black"; 
               $("div#rbc1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
              }

        $("#th_rbcunit").html(table.row(this).data()[57]);
        $("#th_rbcnormal").html(table.row(this).data()[58]);

        $("#th_hgb").html(table.row(this).data()[59]); 
        var hgba = String(document.getElementById("th_hgb").innerText);  
        /*low */ var hgbb =  String(doc.data().HGBLower); 
        /* high */ var hgbc =  String(doc.data().HGBUpper); 
        var data = [
          {
            type: "indicator",
            mode: "gauge",
            gauge: { 
              shape: "bullet",
              axis: { range: [0, parseFloat(hgbc)]},
            },
            value: parseFloat(hgba),
            domain: { x: [0, 1], y: [0, 1] },
          }
        ];
        var layout = { 
        width: 250, height: 200,
        paper_bgcolor:"rgba(0,0,0,0)", 
        font: {
          family: 'Courier New, monospace',
          size: 0,
          color: '#FFFFFF'
        }
        };
        Plotly.newPlot('hgb1', data, layout);
      
          if (parseFloat(hgba) > parseFloat(hgbc))
              {
               th_hgb.style.color = "red"
               document.getElementById("th_hgb2").style.color = "red"; 
               $("div#hgb1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)"); 
              }
             else if (parseFloat(hgba) < parseFloat(hgbb))
              {
               th_hgb.style.color = "red"
               document.getElementById("th_hgb2").style.color = "red"; 
               $("div#hgb1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)");
              }
              else 
              {
               document.getElementById("th_hgb").style.color = "black"; 
               document.getElementById("th_hgb2").style.color = "black"; 
               $("div#hgb1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
              }
        $("#th_hgbunit").html(table.row(this).data()[60]);
        $("#th_hgbnormal").html(table.row(this).data()[61]);
        
        $("#th_hct").html(table.row(this).data()[62]);
        var hcta = String(document.getElementById("th_hct").innerText);  
        /*low */ var hctb = String(doc.data().HCTLower); 
        /* high */ var hctc = String(doc.data().HCTUpper); 

        var data = [
          {
            type: "indicator",
            mode: "gauge",
            gauge: { 
              shape: "bullet",
              axis: { range: [0, parseFloat(hctc)]},
            },
            value: parseFloat(hcta),
            domain: { x: [0, 1], y: [0, 1] },
          }
        ];
        var layout = { 
        width: 250, height: 200,
        paper_bgcolor:"rgba(0,0,0,0)", 
        font: {
          family: 'Courier New, monospace',
          size: 0,
          color: '#FFFFFF'
        }
        };
        Plotly.newPlot('hct1', data, layout);
      
          if (parseFloat(hcta) > parseFloat(hctc))
              {          
               th_hct.style.color = "red"
               document.getElementById("th_hct2").style.color = "red"; 
               $("div#hct1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)"); 
              }
             else if (parseFloat(hcta) < parseFloat(hctb))
              {
             
               th_hct.style.color = "red"
               document.getElementById("th_hct2").style.color = "red";
               $("div#hct1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)"); 
              }
              else 
              {
               document.getElementById("th_hct").style.color = "black"; 
               document.getElementById("th_hct2").style.color = "black"; 
               $("div#hct1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
              }
        $("#th_hctunit").html(table.row(this).data()[63]);
        $("#th_hctnormal").html(table.row(this).data()[64]);
        
        $("#th_mcv").html(table.row(this).data()[65]);  
        var mcva = String(document.getElementById("th_mcv").innerText);  
        /*low */ var mcvb =  String(doc.data().MCVLower); 
        /* high */ var mcvc =  String(doc.data().MCVUpper); 

        var data = [
          {
            type: "indicator",
            mode: "gauge",
            gauge: { 
              shape: "bullet",
              axis: { range: [0, parseFloat(mcvc)]},
            },
            value: parseFloat(mcva),
            domain: { x: [0, 1], y: [0, 1] },
          }
        ];
        var layout = { 
        width: 250, height: 200,
        paper_bgcolor:"rgba(0,0,0,0)", 
        font: {
          family: 'Courier New, monospace',
          size: 0,
          color: '#FFFFFF'
        }
        };
        Plotly.newPlot('mcv1', data, layout);
      
          if (parseFloat(mcva) > parseFloat(mcvc))
              {
               th_mcv.style.color = "red"
               document.getElementById("th_mcv2").style.color = "red"; 
               $("div#mcv1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)"); 
              }
             else if (parseFloat(mcva) < parseFloat(mcvb))
              {
               th_mcv.style.color = "red"
               document.getElementById("th_mcv2").style.color = "red";
               $("div#mcv1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)"); 
              }
              else 
              {
               document.getElementById("th_mcv").style.color = "black"; 
               document.getElementById("th_mcv2").style.color = "black"; 
               $("div#mcv1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
              }
        $("#th_mcvunit").html(table.row(this).data()[66]);
        $("#th_mcvnormal").html(table.row(this).data()[67]);
        
        $("#th_mch").html(table.row(this).data()[68]); 
        var mcha = String(document.getElementById("th_mch").innerText);  
         /*low */ var mchb = String(doc.data().MCHLower); 
        /* high */ var mchc = String(doc.data().MCHUpper); 

        var data = [
          {
            type: "indicator",
            mode: "gauge",
            gauge: { 
              shape: "bullet",
              axis: { range: [0, parseFloat(mchc)]},
            },
            value: parseFloat(mcha),
            domain: { x: [0, 1], y: [0, 1] },
          }
        ];
        var layout = { 
        width: 250, height: 200,
        paper_bgcolor:"rgba(0,0,0,0)", 
        font: {
          family: 'Courier New, monospace',
          size: 0,
          color: '#FFFFFF'
        }
        };
        Plotly.newPlot('mch1', data, layout);
      
          if (parseFloat(mcha) > parseFloat(mchc))
              {
               th_mch.style.color = "red"
               document.getElementById("th_mch2").style.color = "red"; 
               $("div#mch1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)"); 
              }
             else if (parseFloat(mcha) < parseFloat(mchb))
              {
               th_mch.style.color = "red"
               document.getElementById("th_mch2").style.color = "red"; 
               $("div#mch1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)"); 
              }
              else 
              {
               document.getElementById("th_mch").style.color = "black"; 
               document.getElementById("th_mch2").style.color = "black"; 
               $("div#mch1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
              }
        $("#th_mchunit").html(table.row(this).data()[69]);
        $("#th_mchnormal").html(table.row(this).data()[70]);
        
        $("#th_mchc").html(table.row(this).data()[71]); 
        var mchca = String(document.getElementById("th_mchc").innerText);  
        /*low */ var mchcb = String(doc.data().MCHCLower); 
        /* high */ var mchcc = String(doc.data().MCHCUpper); 

        var data = [
          {
            type: "indicator",
            mode: "gauge",
            gauge: { 
              shape: "bullet",
              axis: { range: [0, parseFloat(mchcc)]},
            },
            value: parseFloat(mchca),
            domain: { x: [0, 1], y: [0, 1] },
          }
        ];
        var layout = { 
        width: 250, height: 200,
        paper_bgcolor:"rgba(0,0,0,0)", 
        font: {
          family: 'Courier New, monospace',
          size: 0,
          color: '#FFFFFF'
        }
        };
        Plotly.newPlot('mchc1', data, layout);
          if (parseFloat(mchca) > parseFloat(mchcc))
              {
               th_mchc.style.color = "red"
               document.getElementById("th_mchc2").style.color = "red"; 
               $("div#mchc1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)"); 
              }
             else if (parseFloat(mchca) < parseFloat(mchcb))
              {
               th_mchc.style.color = "red"
               document.getElementById("th_mchc2").style.color = "red"; 
               $("div#mchc1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)");
              }
              else 
              {
               document.getElementById("th_mchc").style.color = "black"; 
               document.getElementById("th_mchc2").style.color = "black"; 
               $("div#mchc1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
              } 
        $("#th_mchcunit").html(table.row(this).data()[72]);
        $("#th_mchcnormal").html(table.row(this).data()[73]);
        
        $("#th_plt").html(table.row(this).data()[74]);
        var plta = String(document.getElementById("th_plt").innerText);  
         /*low */ var pltb =  String(doc.data().PLTLower); 
        /* high */ var pltc =  String(doc.data().PLTUpper); 

        var data = [
          {
            type: "indicator",
            mode: "gauge",
            gauge: { 
              shape: "bullet",
              axis: { range: [0, parseFloat(pltc)]},
            },
            value: parseFloat(plta),
            domain: { x: [0, 1], y: [0, 1] },
          }
        ];
        var layout = { 
        width: 250, height: 200,
        paper_bgcolor:"rgba(0,0,0,0)", 
        font: {
          family: 'Courier New, monospace',
          size: 0,
          color: '#FFFFFF'
        }
        };
        Plotly.newPlot('plt1', data, layout);
      
          if (parseFloat(plta) > parseFloat(pltc))
              {
               th_plt.style.color = "red"
               document.getElementById("th_plt2").style.color = "red"; 
               $("div#plt1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)"); 
              }
             else if (parseFloat(plta) < parseFloat(pltb))
              {
               th_plt.style.color = "red"
               document.getElementById("th_plt2").style.color = "red"; 
               $("div#plt1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)"); 
              }
              else 
              {
               document.getElementById("th_plt").style.color = "black"; 
               document.getElementById("th_plt2").style.color = "black"; 
               $("div#plt1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
              }
        $("#th_pltunit").html(table.row(this).data()[75]);
        $("#th_pltnormal").html(table.row(this).data()[76]);


        $("#th_lymn").html(table.row(this).data()[84]);
        var lymna = String(document.getElementById("th_lymn").innerText);  
        /*low */ var lymnb = String(doc.data().LymNLower); 
        /* high */ var lymnc = String(doc.data().LymNUpper); 

        var data = [
          {
            type: "indicator",
            mode: "gauge",
            value: parseFloat(lymna),
            domain: { x: [0, 1], y: [0, 1] },
            gauge: { 
              shape: "bullet",
              axis: { range: [0, parseFloat(lymnc)]},
            },
       
          }
        ];
        var layout = { 
        width: 250, height: 200,
        paper_bgcolor:"rgba(0,0,0,0)", 
        font: {
          family: 'Courier New, monospace',
          size: 0,
          color: '#FFFFFF'
        }
        };
        Plotly.newPlot('lymn1', data, layout);

          if (parseFloat(lymna) > parseFloat(lymnc))
              {
               th_lymn.style.color = "red"
               document.getElementById("th_lym2n").style.color = "red"; 
               $("div#lymn1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)"); 
              }
             else if (parseFloat(lymna) < parseFloat(lymnb))
              {
               th_lymn.style.color = "red"
               document.getElementById("th_lym2n").style.color = "red"; 
               $("div#lymn1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)"); 
              }
              else 
              {
               document.getElementById("th_lymn").style.color = "black"; 
               document.getElementById("th_lym2n").style.color = "black"; 
               $("div#lymn1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
              } 
        $("#th_lymunitn").html(table.row(this).data()[85]);
        $("#th_lymnormaln").html(table.row(this).data()[86]);

        $("#th_monn").html(table.row(this).data()[87]);
        var monna = String(document.getElementById("th_monn").innerText);  
        /*low */ var monnb = String(doc.data().MonNLower); 
        /* high */ var monnc = String(doc.data().MonNUpper); 

        var data = [
          {
            type: "indicator",
            mode: "gauge",
            value: parseFloat(monna),
            domain: { x: [0, 1], y: [0, 1] },
            gauge: { 
              shape: "bullet",
              axis: { range: [0, parseFloat(monnc)]},
            },
       
          }
        ];
        var layout = { 
        width: 250, height: 200,
        paper_bgcolor:"rgba(0,0,0,0)", 
        font: {
          family: 'Courier New, monospace',
          size: 0,
          color: '#FFFFFF'
        }
        };
        Plotly.newPlot('monn1', data, layout);

          if (parseFloat(monna) > parseFloat(monnc))
              {
               th_monn.style.color = "red"
               document.getElementById("th_mon2n").style.color = "red";
               $("div#monn1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)");  
              }
             else if (parseFloat(monna) < parseFloat(monnb))
              {
               th_monn.style.color = "red"
               document.getElementById("th_mon2n").style.color = "red"; 
               $("div#monn1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)");
              }
              else 
              {
               document.getElementById("th_monn").style.color = "black"; 
               document.getElementById("th_mon2n").style.color = "black"; 
               $("div#monn1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
              } 
        $("#th_monunitn").html(table.row(this).data()[88]);
        $("#th_monnormaln").html(table.row(this).data()[89]);

        $("#th_gran").html(table.row(this).data()[90]);
        var grana = String(document.getElementById("th_gran").innerText);  
        /*low */ var granb = String(doc.data().GraNLower); 
        /* high */ var granc = String(doc.data().GraNUpper); 

        var data = [
          {
            type: "indicator",
            mode: "gauge",
            gauge: { 
              shape: "bullet",
              axis: { range: [0, parseFloat(granc)]},
            },
            value: parseFloat(grana),
            domain: { x: [0, 1], y: [0, 1] },
          }
        ];
        var layout = { 
        width: 250, height: 200,
        paper_bgcolor:"rgba(0,0,0,0)", 
        font: {
          family: 'Courier New, monospace',
          size: 0,
          color: '#FFFFFF'
        }
        };
        Plotly.newPlot('gran1', data, layout);

          if (parseFloat(grana) > parseFloat(granc))
              {
               th_gran.style.color = "red"
               document.getElementById("th_gra2n").style.color = "red"; 
               $("div#gran1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(177 40 40)"); 
              }
             else if (parseFloat(grana) < parseFloat(granb))
              {
               th_gran.style.color = "red"
               document.getElementById("th_gra2n").style.color = "red"; 
               $("div#gran1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(184 170 59)");
              }
              else 
              {
               document.getElementById("th_gran").style.color = "black"; 
               document.getElementById("th_gra2n").style.color = "black"; 
               $("div#gran1 > .plot-container.plotly > .user-select-none.svg-container > svg.main-svg g.indicatorlayer g.trace g.bullet g.value-bullet rect ").css("fill","rgb(50 135 69)");
              } 
        $("#th_graunitn").html(table.row(this).data()[91]);
        $("#th_granormaln").html(table.row(this).data()[92]);
        })
        
        $("#messagemodal").modal("show");
        $("body.modal-open"). css("padding-right", "unset");
        
      });
      
    });
 
  }, 2000);

  $('#updatebtn').click(function() {
    $(".row-gen").css("margin","none");
    $(".row-spc").css("margin-top","none!important");
    $("#updatebtn").css("display","none");
    $("#submitbtn").css("display","block");
    $(".col-gen").css("display","none");
    $(".hideelements"). css("display", "none");
    $("#remarks-textarea").prop("disabled", false);
    $(".inpUpdate1"). css("display", "block");
    $(".inpUpdate1-2"). css("display", "block");
    $(".inpUpdate2"). css("display", "block");
    $(".dropdown.bootstrap-select.select-gen"). css("display", "block");
    $("#breedinputs"). css("display", "block");
    $("#physicianinputs"). css("display", "block");
    $("#printbtn2"). css("display", "block");
    $("#printbtn"). css("display", "none");
    $("#deletebtn"). css("display", "none");

    $('.modal-dialog.modal-dialog-centered.modal-manage').click(function(e) {   
      $("#remarks-textarea").prop("disabled", true);
      }); 
      $('.btn-toolbar.float-right').click(function(event){
        event.stopPropagation();
     });   
     $('#textareaposition').click(function(event){
      $("#remarks-textarea").prop("disabled", false);
      event.stopPropagation();
      $('#textareaposition').click(function(event){
        $("#remarks-textarea").prop("disabled", false);
        event.stopPropagation();
      });   
    });   
  })

  var date2 = document.getElementById("date"); 
  var clock1 = document.getElementById("clock"); 
  var pidinfo1 = document.getElementById("pidinfo"); 
  var petname1 = document.getElementById("petnameinputs"); 
  var ownername1 = document.getElementById("ownernameinputs"); 
  var age1 = document.getElementById("ageinputs"); 
  var gender1 = document.getElementById("genderselect"); 
  var breed1 = document.getElementById("breedinputs"); 
  var vet1 = document.getElementById("physicianinputs");
  var remarks1 = document.getElementById("remarks-textarea");
  var sampledate = document.getElementById("DATE")
  $('#submitbtn').click(function() {
    if (petname1 !== null && petname1.value === "" ||
        ownername1 !== null && ownername1.value === "" ||
        age1 !== null && age1.value === "" ||
        gender1 !== null && gender1.value === "" ||
        breed1 !== null && breed1.value === "" ||
        vet1 !== null && vet1.value === "") {

    document.getElementById("error1").innerHTML = "Missing Details! Please fill out the field/s"
    $('#myModal').modal("show"); 
    $('#myModal').css('display',"block");
    }
    else {
    document.getElementById("error5").innerHTML = "Are you sure you want to update this data?"
    $('#updatemodal').modal("show"); 
    $('#updatemodal').css('display',"block");
    }
  })
 
  $('#updateyes').click(function() {
    db2.collection("Audit Log").doc(date2.innerText + " " + clock1.innerText).set(
      {
      ID : String(email10),
      PID : pidinfo1.innerHTML,
      Date : sampledate.innerText,
      Activity : "Update Test Credentials",
      DateDid : date2.innerText + " " + clock1.innerText 
      })
    db2.collection("patientvalues2").doc(pidinfo1.innerHTML).set(
      {
      PetName : petname1.value,
      OwnerName : ownername1.value, 
      Age : age1.value, 
      Gender : gender1.value,
      Breed: breed1.value,
      Doctor : vet1.value,
      Remarks : remarks1.value
      },{ merge: true }).then(function (event){ 
        document.getElementById("error1").innerHTML = "Update Submitted";
      $('#messagemodal').modal('show');
      setTimeout(() => {
        window.location.reload(); 
      }, 200);
        } , {once: true});   
  })
  $('#updateno').click(function() {
    $('#updatemodal').css('display',"none");
  })

  $('#closeno').click(function() {
    $('#myModal').css('display',"none");
  })

  $('#closebtn2').click(function() {
    $("#updatebtn").css("display","block");
    $("#submitbtn").css("display","none");
    $(".hideelements"). css("display", "block");
    $("#remarks-textarea"). css("display", "block");
    $(".inpUpdate1"). css("display", "none");
    $(".inpUpdate1-2"). css("display", "none");
    $(".inpUpdate2"). css("display", "none");
    $(".dropdown.bootstrap-select.select-gen"). css("display", "none");
    $("#breedinputs"). css("display", "none");
    $("#physicianinputs"). css("display", "none");
    $("#remarks-textarea2"). css("display", "none");
    $("#printbtn"). css("display", "block");
    $("#printbtn2"). css("display", "none");
    if (parseFloat(clicks2.innerText) >= 1) {
      window.location.reload(); 
    }
  })

  $('#printbtn2').click(function() {
    var gender1 = document.getElementById("gender"); 
    var gender2 = document.getElementById("genderselect"); 
    $(".col-gen").css("display","block");
    $("#gender"). css("display", "block");
    $("#genderselectcol"). css("display", "none");
    gender1.innerHTML = gender2.value;   
    window.print();
  })  
})
$('#closebtn').click(function() {
  $('#ModalCenterScn').css("display", "none");
})
$('#scnrbtn').click(function() {
  $('#ModalCenterScn').css("display", "block");
})
$('#deleteno').click(function() {
  $('#ModalCenter').css("display", "none");
})
$('#deleteyes').click(function() {
  var pidno = document.getElementById("pidinfo")
  db2.collection("patientvalues2").doc(pidno.innerHTML).delete().then(() => {
    document.getElementById("error1").innerHTML = "Test No. " + (pidno.innerHTML) + " " + "has been successfully deleted." ;
    $('#deletemodal').modal('hide');
    $('#messagemodal').modal('show');
    setTimeout(() => {
      window.location.reload(); 
    }, 500);
  })
})
$('#deletebtn').click(function() {
  $('#ModalCenter').css("display", "block");
})

/* ED CLINIC */
// $(function() {
//   while( $('#fitin div').height() > $('#fitin').height() ) {
//       $('#fitin div').css('font-size', (parseInt($('#fitin div').css('font-size')) - 1) + "px" );
//   }
// });






