
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
 //--------Image Upload---------//

 $('#uprint').click(function () {
  $("#printelements").css("display","block");
  $("#textelements").css("display","none");
});
$('#ctext').click(function () {
  $("#printelements").css("display","none");
  $("#textelements").css("display","block");

});


 var reader = new FileReader();
 var proglab = document.getElementById("upprogress");
 var filename1 = document.getElementById("optionselect"); 
 document.getElementById("filenamelabel").innerHTML = filename1.value; ;
 function readURL() {
   var $input = $(this);
   var $newinput = $(this).parent().parent().parent().find('.portimg ');
   if (this.files && this.files[0]) {
     reader.onload = function (e) {
       reset($newinput.next('.delbtn'), true);
       $newinput.attr('src', e.target.result).show();
       $newinput.after('<input type="button" class="delbtn removebtn" value="✖">');
     }
     reader.readAsDataURL(this.files[0]);
     var ImgToUpload = this.files[0];
     var ImgName = document.getElementById("optionselect").value;
     const metaData = {
       contentType: ImgToUpload.type
     }
     const storage = getStorage();
     const storageRef = sRef(storage, "Images/" + ImgName)
     const UploadTask = uploadBytesResumable(storageRef, ImgToUpload, metaData);

     UploadTask.on('state-changed', (snapshot) => {
       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
       proglab.innerHTML = "Upload " + progress + "%";
     },
       (error) => {
         console.log("error" + error);
       },
       () => {
         getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
           SaveURLtoFirestore(downloadURL);
         });
       }
     );
   }
 }

 $(".custom-file-input").change(readURL);
 $("form").on('click', '.delbtn', function (e) {
   reset($(this));
 });

 function reset(elm, prserveFileName) {
   if (elm && elm.length > 0) {
     var $input = elm;
     $input.prev('.portimg').attr('src', '').hide();
     if (!prserveFileName) {
       $($input).parent().parent().parent().find('input.custom-file-input ').val("");
       //input.fileUpload and input#uploadre both need to empty values for particular div
     }
     elm.remove();

   }
 }
 async function SaveURLtoFirestore(url) {
   var filename = document.getElementById("optionselect").value;

   var ref = doc(db, "Images/" + filename);

   await setDoc(ref, {
     ImageName: filename,
     ImageURL: url
   })
 }







let db2 = firebase.firestore();
var submitbtn1 = document.getElementById("subchangeBTN");
var updatebtn1 = document.getElementById("updateBTN");
var forgotbtn1 = document.getElementById("forgotBTN");
var closebtn1 = document.getElementById("closeBTN");
let username5 = document.getElementById("username5");
let userlvl1 = document.getElementById("userlvl1");
let date2 = document.getElementById("date");
let clock1 = document.getElementById("clock");

let desc1 = document.getElementById("desc1");
let desc1inputs = document.getElementById("desc1inputs");

let email1 = document.getElementById("email1");
let email1inputs = document.getElementById("email1inputs");

let username1 = document.getElementById("username1");
let username1inputs = document.getElementById("username1inputs");

let name1 = document.getElementById("username5");
let name1inputs = document.getElementById("name1inputs");


var uid1;
var auto_inc = 0;
var logresultstable = document.getElementById("logresults");
firebase.auth().onAuthStateChanged(function (user) {
  uid1 = user.uid
  console.log(uid1);
      db2.collection("users").doc(uid1).get().then((doc) => {
          var email10 = doc.data().Username; 
          var userlevel10 = doc.data().UserLevel; 
          document.getElementById("usernamelevel").innerHTML = String(email10) + " | " + String(userlevel10)
      }); 
  db2.collection("users").doc(uid1).get().then((doc) => {
    username5.innerHTML = String(doc.data().Name);
    userlvl1.innerHTML = String(doc.data().UserLevel);
    desc1.innerHTML = String(doc.data().Description);
    email1.innerHTML = String(doc.data().EMail);
    username1.innerHTML = String(doc.data().Username);
    $('#updateBTN').click(function () {
      forgotbtn1.style.display = "none";
      //Description
      desc1.style.display = "none";
      desc1inputs.style.display = "block";
      desc1inputs.value = desc1.innerHTML
      //Email
      email1.style.display = "none";
      email1inputs.style.display = "block";
      email1inputs.value = email1.innerHTML
      //Username
      username1.style.display = "none";
      username1inputs.style.display = "block";
      username1inputs.value = username1.innerHTML

      //Name
      name1.style.display = "none";
      name1inputs.style.display = "block";
      name1inputs.value = username5.innerHTML  

      closebtn1.style.display = "inline-block"
      submitbtn1.style.display = "inline-block";
      updatebtn1.style.display = "none";
    });
    // document.getElementById('subchangebtn')
    // .addEventListener("click", function(event) {
    //     klikaj('rad1');
    // }, {once: true});
    $('#subchangeBTN').click(function () {
      desc1.style.display = "none";
      email1.style.display = "none";
      username1.style.display = "none";
      username5.style.display = "none";

      db2.collection("Audit Log").doc(date2.innerText + " " + clock1.innerText).set(
        {
        ID : String(user.email),
        PID : "-",
        Date : "-",
        Activity : "Change Account Details",
        DateDid : date2.innerText + " " + clock1.innerText 
        })
      db2.collection("username").doc(username1inputs.value).set(
        {
          email: email1inputs.value
        })
      user.updateEmail(email1inputs.value).then(() => {
        console.log("Update Success!");
      }).catch((error) => {
        console.log(error.message);
      });
      db2.collection("users").doc(uid1).set(
        {
          Description: desc1inputs.value,
          ExactDate: date2.innerText + " " + clock1.innerText,
          Username: username1inputs.value,
          EMail: email1inputs.value,
          Name: name1inputs.value,
        }, { merge: true }).then(function (event) {
          document.getElementById("error1").innerHTML = "Update Submitted";
          $('#myModal').modal('show');
          setTimeout(() => {
            window.location.reload();
          }, 200);
        }, { once: true });
    })
    $('#closeBTN').click(function () {
      //Description
      desc1inputs.style.display = "none";
      email1inputs.style.display = "none";
      username1inputs.style.display = "none";
      name1inputs.style.display = "none";

      desc1.style.display = "block";
      email1.style.display = "block";
      username1.style.display = "block";
      username5.style.display = "block";

      closebtn1.style.display = "none";
      submitbtn1.style.display = "none";
      updatebtn1.style.display = "inline-block";
      forgotbtn1.style.display = "inline-block";


      // are you sure you want to discard changes
    });
    $("#optionselect").change(function(){

      $('#uploadre').prop("disabled", false);

  });
    
    var clinic1 = document.getElementById("clinicinputs1"); 
    var address1 = document.getElementById("addressinputs1"); 
    var labtechnician1 = document.getElementById("labtechnician1"); 
    var details10 = document.getElementById("details10"); 
    var vet1 = document.getElementById("vetinputs1"); 
    var details2 = document.getElementById("details2"); 

    db2.collection("Details").doc("Clinic Details").get().then((doc) => {
      clinic1.value = String(doc.data().Clinic);
      address1.value = String(doc.data().Address);
      labtechnician1.value = String(doc.data().LabTechnician);
      details10.value = String(doc.data().Details1);
      vet1.value = String(doc.data().Veterinarian);
      details2.value = String(doc.data().Details2);
    })

    $('#textsubmit').click(function () {
      if (clinic1 !== null && clinic1.value === "" ||
          address1 !== null && address1.value === ""
          || labtechnician1 !== null && labtechnician1.value === ""
          || vet1 !== null && vet1.value === "" 
          || details10 !== null && details10.value === ""
          || details2 !== null && details2.value === "") 
          {
            document.getElementById("error1").innerHTML = "Missing Details! Please fill out the field/s and press submit";
            $('#myModal').modal('show');
          }
      else {
        db2.collection("Audit Log").doc(date2.innerText + " " + clock1.innerText).set(
          {
          ID : String(user.email),
          PID : "-",
          Date : "-",
          Activity : "Update Text Elements",
          DateDid : date2.innerText + " " + clock1.innerText 
          })
        db2.collection("Details").doc("Clinic Details").set(
          {
            Clinic : clinic1.value,
            Address : address1.value, 
            LabTechnician : labtechnician1.value,
            Details1 : details10.value,
            Veterinarian : vet1.value,
            Details2 : details2.value
          }, {merge: true}).then(() => {
            document.getElementById("error1").innerHTML = "Clinic Data Updated!";
            $('#myModal').modal('show');
            window.location.reload(); 
        }).catch((error) => {
          document.getElementById("error1").innerHTML = error.message;
          $('#myModal').modal('show');
      });
      }

      // are you sure you want to discard changes
    });
    document
      .getElementById("forgotBTN")
      .addEventListener("click", (event) => {
        event.preventDefault();
        var email = document.getElementById("email1").innerHTML;
        forgotPassword(email)
      });
    const forgotPassword = (email) => {
      firebase.auth()
        .sendPasswordResetEmail(email)
        .then(function () {
          document.getElementById("error1").innerHTML = "Email Sent to " + email
          $('#myModal').modal('show');
        }).catch(function (error) {
          var errorMessage = error.message;
          document.getElementById("error1").innerHTML = errorMessage
          $('#myModal').modal('show');
          console.log(error);

        });
    }
    function AddItemToTable(activity, id, pid, sampledate,datedid) {
      let tr_data = document.createElement('tr');
      let td0 = document.createElement('td');
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      let td3 = document.createElement('td');
      let td4 = document.createElement('td');
      let td5 = document.createElement('td');
      td0.innerHTML = ++auto_inc;
      td1.innerHTML = activity;
      td2.innerHTML = id;
      td3.innerHTML = pid;
      td4.innerHTML = sampledate;
      td5.innerHTML = datedid;
      tr_data.appendChild(td0);
      tr_data.appendChild(td1);
      tr_data.appendChild(td2);
      tr_data.appendChild(td3);
      tr_data.appendChild(td4);
      tr_data.appendChild(td5);
      logresultstable.appendChild(tr_data);
    }

    function AddAllItemsToTable(auditlog) {
      auto_inc = 0;
      logresultstable.innerHTML = "";
      auditlog.forEach(element => {
        AddItemToTable(element.Activity, element.ID, element.PID, element.Date, element.DateDid);
      });
    }
    async function GetAllDataOnce() {
      const q = query(collection(db, "Audit Log"));
      const querySnapshot = await getDocs(q);
      var datalog = [];
      querySnapshot.forEach(doc => {
        datalog.push(doc.data());
      });

      AddAllItemsToTable(datalog);
    }

    async function RealTimeData() {

      const dbRef = collection(db, "Audit Log");
      onSnapshot(dbRef, (querySnapshot) => {
        var datalog = [];
        querySnapshot.forEach(doc => {
          datalog.push(doc.data());
        });

        AddAllItemsToTable(datalog);

      })
    }
    RealTimeData();
    setTimeout(function () {
      $(document).ready(function () {

        setTimeout(() => {
          $("#example"). css("visibility", "visible");
          $("#example_wrapper"). css("visibility", "visible");
          $(".spinner-grow"). css("display", "none");
        }, 300);
        

        $('#example').dataTable({
          iDisplayLength: 5,
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
          "order": [[0]],
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
              "visible": false,
              "searchable": true,

            },
            {
              "targets": [3],
              "visible": false,
              "searchable": true,
            },
            {
              "targets": [4],
              "visible": false,
              "searchable": true,
            },
            {
              "targets": [5],
              "visible": true,
              "searchable": true,
              orderable: true,
            },

            { width: "10px", targets: 0 },
            { width: "500px", targets: 1 },
            { width: "500px", targets: 2 },
            { width: "500px", targets: 3 },
            { width: "500px", targets: 4 },
            { width: "500px", targets: 5 },
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
        $('#example tbody').on('click', 'tr', function () {
          $(".modal-body1 div span").text("");
          $("#number1").text(table.row(this).data()[0]);
          $("#activity1").text(table.row(this).data()[1]);
          $("#username63").text(table.row(this).data()[2]);
          $("#pid1").text(table.row(this).data()[3]);
          $("#sampledate1").text(table.row(this).data()[4]);
          $("#date6").text(table.row(this).data()[5]);
        
          $("#messagemodal").modal("show");
        });
      });
    }, 2000);

   
    //reference ranges
    var msselect1 = document.getElementById("msselect");
    var machineselect1 = document.getElementById("machineselect");

    var myth18table = document.getElementById("mythic18vettable");
    var mnchipv5table = document.getElementById("mnchipv5table");

    var myth18table1 = document.getElementById("mythic18vettable1");
    var mnchipv5table1 = document.getElementById("mnchipv5table1");

    var speciesinput = document.getElementById("speciesInp");

    var savesubmit1 = document.getElementById("savesubmit");
    var addsubmit1 = document.getElementById("addsubmit");
    var changemachine1 = document.getElementById("changemachine");

    var footerid1 = document.getElementById("footerRefMythic18vet");
    var footerid2 = document.getElementById("footerRefMnchipv5");

    var machinebutton3 = document.getElementById("machinebutton"); 

    //MNCHIP V5 Data
    var albl1 = document.getElementById("albl");
    var albu1 = document.getElementById("albu");
    var albl2 = document.getElementById("albl2");
    var albu2 = document.getElementById("albu2");

    var tpl1 = document.getElementById("tpl");
    var tpu1 = document.getElementById("tpu");
    var tpl2 = document.getElementById("tpl2");
    var tpu2 = document.getElementById("tpu2");

    var cal1 = document.getElementById("calower");
    var cau1 = document.getElementById("caupper");
    var cal2 = document.getElementById("calower2");
    var cau2 = document.getElementById("caupper2");

    var glul1 = document.getElementById("glul");
    var gluu1 = document.getElementById("gluu");
    var glul2 = document.getElementById("glul2");
    var gluu2 = document.getElementById("gluu2");

    var bunl1 = document.getElementById("bunl");
    var bunu1 = document.getElementById("bunu");
    var bunl2 = document.getElementById("bunl2");
    var bunu2 = document.getElementById("bunu2");

    var pl1 = document.getElementById("pl");
    var pu1 = document.getElementById("pu");
    var pl2 = document.getElementById("pl2");
    var pu2 = document.getElementById("pu2");

    var amyl1 = document.getElementById("amyl");
    var amyu1 = document.getElementById("amyu");
    var amyl2 = document.getElementById("amyl2");
    var amyu2 = document.getElementById("amyu2");

    var choll1 = document.getElementById("choll");
    var cholu1 = document.getElementById("cholu");
    var choll2 = document.getElementById("choll2");
    var cholu2 = document.getElementById("cholu2");

    var altl1 = document.getElementById("altl");
    var altu1 = document.getElementById("altu");
    var altl2 = document.getElementById("altl2");
    var altu2 = document.getElementById("altu2");

    var tbill1 = document.getElementById("tbill");
    var tbilu1 = document.getElementById("tbilu");
    var tbill2 = document.getElementById("tbill2");
    var tbilu2 = document.getElementById("tbilu2");

    var alpl1 = document.getElementById("alpl");
    var alpu1 = document.getElementById("alpu");
    var alpl2 = document.getElementById("alpl2");
    var alpu2 = document.getElementById("alpu2");

    var crel1 = document.getElementById("crel");
    var creu1 = document.getElementById("creu");
    var crel2 = document.getElementById("crel2");
    var creu2 = document.getElementById("creu2");

    var ckl1 = document.getElementById("ckl");
    var cku1 = document.getElementById("cku");
    var ckl2 = document.getElementById("ckl2");
    var cku2 = document.getElementById("cku2");

    //Mythic 18 Vet Data

    var wbcl1 = document.getElementById("wbcl");
    var wbcu1 = document.getElementById("wbcu");
    var wbcl2 = document.getElementById("wbcl2");
    var wbcu2 = document.getElementById("wbcu2");

    var lyml1 = document.getElementById("lyml");
    var lymu1 = document.getElementById("lymu");
    var lyml2 = document.getElementById("lyml2");
    var lymu2 = document.getElementById("lymu2");

    var lyml1n = document.getElementById("lymln");
    var lymu1n = document.getElementById("lymun");
    var lyml2n = document.getElementById("lyml2n");
    var lymu2n = document.getElementById("lymu2n");

    var monl1 = document.getElementById("monl");
    var monu1 = document.getElementById("monu");
    var monl2 = document.getElementById("monl2");
    var monu2 = document.getElementById("monu2");

    var monl1n = document.getElementById("monln");
    var monu1n = document.getElementById("monun");
    var monl2n = document.getElementById("monl2n");
    var monu2n = document.getElementById("monu2n");

    var gral1 = document.getElementById("gral");
    var grau1 = document.getElementById("grau");
    var gral2 = document.getElementById("gral2");
    var grau2 = document.getElementById("grau2");

    var gral1n = document.getElementById("graln");
    var grau1n = document.getElementById("graun");
    var gral2n = document.getElementById("gral2n");
    var grau2n = document.getElementById("grau2n");


    var rbcl1 = document.getElementById("rbcl");
    var rbcu1 = document.getElementById("rbcu");
    var rbcl2 = document.getElementById("rbcl2");
    var rbcu2 = document.getElementById("rbcu2");

    var hgbl1 = document.getElementById("hgbl");
    var hgbu1 = document.getElementById("hgbu");
    var hgbl2 = document.getElementById("hgbl2");
    var hgbu2 = document.getElementById("hgbu2");

    var hctl1 = document.getElementById("hctl");
    var hctu1 = document.getElementById("hctu");
    var hctl2 = document.getElementById("hctl2");
    var hctu2 = document.getElementById("hctu2");

    var mcvl1 = document.getElementById("mcvl");
    var mcvu1 = document.getElementById("mcvu");
    var mcvl2 = document.getElementById("mcvl2");
    var mcvu2 = document.getElementById("mcvu2");

    var mchl1 = document.getElementById("mchl");
    var mchu1 = document.getElementById("mchu");
    var mchl2 = document.getElementById("mchl2");
    var mchu2 = document.getElementById("mchu2");

    var mchcl1 = document.getElementById("mchcl");
    var mchcu1 = document.getElementById("mchcu");
    var mchcl2 = document.getElementById("mchcl2");
    var mchcu2 = document.getElementById("mchcu2");

    var pltl1 = document.getElementById("pltl");
    var pltu1 = document.getElementById("pltu");
    var pltl2 = document.getElementById("pltl2");
    var pltu2 = document.getElementById("pltu2");

    var result1 = [];
   

    //Get Data Reference Range
    document.getElementById("machinebutton").addEventListener("click", function (event) {
    
      if (msselect1.value.includes("Mythic 18 Vet")) {
        myth18table.style.display = "table";
        mnchipv5table.style.display = "none";
        footerid1.style.display = "block";
        footerid2.style.display = "none";
        machinebutton3.textContent = "Change Machine"; 
        db2.collection("Reference Ranges").doc(String(msselect1.value)).get()  
        .then((doc) => {
         
            document.getElementById("wbcl2").value = parseFloat(doc.data().WBCLower); 
            document.getElementById("wbcu2").value = parseFloat(doc.data().WBCUpper); 
            document.getElementById("lyml2").value = parseFloat(doc.data().LymLower); 
            document.getElementById("lymu2").value = parseFloat(doc.data().LymUpper); 
            document.getElementById("monl2").value = parseFloat(doc.data().MonLower); 
            document.getElementById("monu2").value = parseFloat(doc.data().MonUpper); 
            document.getElementById("gral2").value = parseFloat(doc.data().GraLower); 
            document.getElementById("grau2").value = parseFloat(doc.data().GraUpper); 

            document.getElementById("lyml2n").value = parseFloat(doc.data().LymNLower); 
            document.getElementById("lymu2n").value = parseFloat(doc.data().LymNUpper); 
            document.getElementById("monl2n").value = parseFloat(doc.data().MonNLower); 
            document.getElementById("monu2n").value = parseFloat(doc.data().MonNUpper); 
            document.getElementById("gral2n").value = parseFloat(doc.data().GraNLower); 
            document.getElementById("grau2n").value = parseFloat(doc.data().GraNUpper); 
            

            document.getElementById("rbcl2").value = parseFloat(doc.data().RBCLower); 
            document.getElementById("rbcu2").value = parseFloat(doc.data().RBCUpper); 
            document.getElementById("hgbl2").value = parseFloat(doc.data().HGBLower); 
            document.getElementById("hgbu2").value = parseFloat(doc.data().HGBUpper); 
            document.getElementById("hctl2").value = parseFloat(doc.data().HCTLower); 
            document.getElementById("hctu2").value = parseFloat(doc.data().HCTUpper); 
            document.getElementById("mcvl2").value = parseFloat(doc.data().MCVLower); 
            document.getElementById("mcvu2").value = parseFloat(doc.data().MCVUpper); 
            document.getElementById("mchl2").value = parseFloat(doc.data().MCHLower); 
            document.getElementById("mchu2").value = parseFloat(doc.data().MCHUpper); 
            document.getElementById("mchcl2").value = parseFloat(doc.data().MCHCLower); 
            document.getElementById("mchcu2").value = parseFloat(doc.data().MCHCUpper); 
            document.getElementById("pltl2").value = parseFloat(doc.data().PLTLower); 
            document.getElementById("pltu2").value = parseFloat(doc.data().PLTUpper); 
      })
      }
      if (msselect1.value.includes("MNCHIP V5")) {
        myth18table.style.display = "none";
        mnchipv5table.style.display = "table";
        footerid2.style.display = "block";
        footerid1.style.display = "none";
        machinebutton3.textContent = "Change Machine"; 
        db2.collection("Reference Ranges").doc(String(msselect1.value)).get()  
        .then((doc) => {
         
            document.getElementById("albl2").value = parseFloat(doc.data().ALBLower); 
            document.getElementById("albu2").value = parseFloat(doc.data().ALBUpper); 
            document.getElementById("tpl2").value = parseFloat(doc.data().TPLower); 
            document.getElementById("tpu2").value = parseFloat(doc.data().TPUpper); 
            document.getElementById("calower2").value = parseFloat(doc.data().CaLower); 
            document.getElementById("caupper2").value = parseFloat(doc.data().CaUpper); 
            document.getElementById("glul2").value = parseFloat(doc.data().GLULower); 
            document.getElementById("gluu2").value = parseFloat(doc.data().GLUUpper); 
            document.getElementById("glul2").value = parseFloat(doc.data().GLULower); 
            document.getElementById("gluu2").value = parseFloat(doc.data().GLUUpper); 
            document.getElementById("bunl2").value = parseFloat(doc.data().BUNLower); 
            document.getElementById("bunu2").value = parseFloat(doc.data().BUNUpper); 
            document.getElementById("pl2").value = parseFloat(doc.data().PLower); 
            document.getElementById("pu2").value = parseFloat(doc.data().PUpper); 
            document.getElementById("amyl2").value = parseFloat(doc.data().AMYLower); 
            document.getElementById("amyu2").value = parseFloat(doc.data().AMYUpper); 
            document.getElementById("choll2").value = parseFloat(doc.data().CholLower); 
            document.getElementById("cholu2").value = parseFloat(doc.data().CholUpper); 
            document.getElementById("altl2").value = parseFloat(doc.data().AltLower); 
            document.getElementById("altu2").value = parseFloat(doc.data().AltUpper); 
            document.getElementById("tbill2").value = parseFloat(doc.data().TbilLower); 
            document.getElementById("tbilu2").value = parseFloat(doc.data().TbilUpper); 
            document.getElementById("alpl2").value = parseFloat(doc.data().AlpLower); 
            document.getElementById("alpu2").value = parseFloat(doc.data().AlpUpper); 
            document.getElementById("crel2").value = parseFloat(doc.data().CreLower); 
            document.getElementById("creu2").value = parseFloat(doc.data().CreUpper); 
            document.getElementById("ckl2").value = parseFloat(doc.data().CkLower); 
            document.getElementById("cku2").value = parseFloat(doc.data().CkUpper); 
      })
       
      }
      if (msselect1 !== null && msselect1.value === "") {
        document.getElementById("error1").innerHTML = "Missing Details! Please fill out the field/s and press submit";
        $('#myModal').modal('show');
      }
    })

    db2.collection("Reference Ranges").get().then(querySnapshot => {
      querySnapshot.forEach(doc => result1.push(doc.id));
      result1.forEach(function (item1) {
        
        const optionObj1 = document.createElement("option");
        optionObj1.textContent = item1;
        document.getElementById("msselect").appendChild(optionObj1);
        
        $('#msselect').selectpicker('refresh');

      });
    })
    //------------breakpoint-------------------------//
    function adddatatodb1() {
      db2.collection("Audit Log").doc(date2.innerText + " " + clock1.innerText).set(
        {
        ID : String(user.email),
        PID : "MNCHIP V5 Reference Range " + speciesinput.value,
        Date : "-",
        Activity : "Add Reference Range",
        DateDid : date2.innerText + " " + clock1.innerText 
        })
      db2.collection("Reference Ranges").doc(machineselect1.value + " - " + speciesinput.value).set(
        {
          ALBLower: albl1.value,
          ALBUpper: albu1.value,
          TPLower: tpl1.value,
          TPUpper: tpu1.value,
          CaLower: cal1.value,
          CaUpper: cau1.value,
          GLULower: glul1.value,
          GLUUpper: gluu1.value,
          BUNLower: bunl1.value,
          BUNUpper: bunu1.value,
          PLower: pl1.value,
          PUpper: pu1.value,
          AMYLower: amyl1.value,
          AMYUpper: amyu1.value,
          CholLower: choll1.value,
          CholUpper: cholu1.value,
          AltLower: altl1.value,
          AltUpper: altu1.value,
          TbilLower: tbill1.value,
          TbilUpper: tbilu1.value,
          AlpLower: alpl1.value,
          AlpUpper: alpu1.value,
          CreLower: crel1.value,
          CreUpper: creu1.value,
          CkLower: ckl1.value,
          CkUpper: cku1.value, 
          Machine: "MNCHIP V5"
        }).then(() => {
          document.getElementById("error1").innerHTML = "Data Updated!";
          $('#myModal').modal('show');
          window.location.reload(); 
      }).catch((error) => {
        document.getElementById("error1").innerHTML = error.message;
        $('#myModal').modal('show');
    });
    }
    function adddatatodb() {
      db2.collection("Audit Log").doc(date2.innerText + " " + clock1.innerText).set(
        {
        ID : String(user.email),
        PID : "Mythic 18 Vet Reference Range " + speciesinput.value,
        Date : "-",
        Activity : "Add Reference Range",
        DateDid : date2.innerText + " " + clock1.innerText 
        })
      db2.collection("Reference Ranges").doc(machineselect1.value + " - " + speciesinput.value).set(
        {
          WBCLower: wbcl1.value,
          WBCUpper: wbcu1.value,
          LymLower: lyml1.value,
          LymUpper: lymu1.value,
          MonLower: monl1.value,
          MonUpper: monu1.value,
          GraLower: gral1.value,
          GraUpper: grau1.value,
         
          LymNLower: lyml1n.value,
          LymNUpper: lymu1n.value,
          MonNLower: monl1n.value,
          MonNUpper: monu1n.value,
          GraNLower: gral1n.value,
          GraNUpper: grau1n.value,
          
          GraUpper: grau1.value,
          RBCLower: rbcl1.value,
          RBCUpper: rbcu1.value,
          HGBLower: hgbl1.value,
          HGBUpper: hgbu1.value,
          HCTLower: hctl1.value,
          HCTUpper: hctu1.value,
          MCVLower: mcvl1.value,
          MCVUpper: mcvu1.value,
          MCHLower: mchl1.value,
          MCHUpper: mchu1.value,
          MCHCLower: mchcl1.value,
          MCHCUpper: mchcu1.value,
          PLTLower: pltl1.value,
          PLTUpper: pltu1.value,
          Machine : "Mythic 18 Vet"
        }).then(() => {
          document.getElementById("error1").innerHTML = "Data Updated!";
          $('#myModal').modal('show');
          window.location.reload(); 
      }).catch((error) => {
        document.getElementById("error1").innerHTML = error.message;
        $('#myModal').modal('show');
    });
    }
    document.getElementById("changemachine").addEventListener("click", function (event) {
      if (machineselect1.value.includes("Mythic 18 Vet")) {
        myth18table1.style.display = "table";
        mnchipv5table1.style.display = "none";
      }
      if (machineselect1.value.includes("MNCHIP V5")) {
        myth18table1.style.display = "none";
        mnchipv5table1.style.display = "table";
      }
    })
    document.getElementById("addsubmit1").addEventListener("click", function (event) {
      if (wbcl2 !== null && wbcl2.value === "" ||
      wbcu2 !== null && wbcu2.value === "" ||
      lyml2 !== null && lyml2.value === "" ||
      lymu2 !== null && lymu2.value === "" ||
      monl2 !== null && monl2.value === "" ||
      monu2 !== null && monu2.value === "" ||
      gral2 !== null && gral2.value === "" ||
      grau2 !== null && grau2.value === "" ||

      lyml2n !== null && lyml2n.value === "" ||
      lymu2n !== null && lymu2n.value === "" ||
      monl2n !== null && monl2n.value === "" ||
      monu2n !== null && monu2n.value === "" ||
      gral2n !== null && gral2n.value === "" ||
      grau2n !== null && grau2n.value === "" ||

      rbcl2 !== null && rbcl2.value === "" ||
      rbcu2 !== null && rbcu2.value === "" ||
      hgbl2 !== null && hgbl2.value === "" ||
      hgbu2 !== null && hgbu2.value === "" ||
      hctl2 !== null && hctl2.value === "" ||
      hctl2 !== null && hctu2.value === "" ||
      mcvl2 !== null && mcvl2.value === "" ||
      mcvu2 !== null && mcvu2.value === "" ||
      mchl2 !== null && mchl2.value === "" ||
      mchu2 !== null && mchu2.value === "" ||
      mchcl2 !== null && mchcl2.value === "" ||
      mchcu2 !== null && mchcu2.value === "" ||
      pltl2 !== null && pltl2.value === "" ||
      pltu2 !== null && pltu2.value === "") {
      document.getElementById("error1").innerHTML = "Missing Details! Please fill out the field/s and press submit";
      $('#myModal').modal('show');
    }
    else {
      db2.collection("Audit Log").doc(date2.innerText + " " + clock1.innerText).set(
        {
        ID : String(user.email),
        PID : msselect1.value,
        Date : "-",
        Activity : "Update Reference Range",
        DateDid : date2.innerText + " " + clock1.innerText 
        })
      db2.collection("Reference Ranges").doc(msselect1.value).set(
        {
          WBCLower: wbcl2.value,
          WBCUpper: wbcu2.value,
          LymLower: lyml2.value,
          LymUpper: lymu2.value,
          MonLower: monl2.value,
          MonUpper: monu2.value,
          GraLower: gral2.value,
          GraUpper: grau2.value,

          LymNLower: lyml2n.value,
          LymNUpper: lymu2n.value,
          MonNLower: monl2n.value,
          MonNUpper: monu2n.value,
          GraNLower: gral2n.value,
          GraNUpper: grau2n.value,


          RBCLower: rbcl2.value,
          RBCUpper: rbcu2.value,
          HGBLower: hgbl2.value,
          HGBUpper: hgbu2.value,
          HCTLower: hctl2.value,
          HCTUpper: hctu2.value,
          MCVLower: mcvl2.value,
          MCVUpper: mcvu2.value,
          MCHLower: mchl2.value,
          MCHUpper: mchu2.value,
          MCHCLower: mchcl2.value,
          MCHCUpper: mchcu2.value,
          PLTLower: pltl2.value,
          PLTUpper: pltu2.value,
          Machine : "Mythic 18 Vet"
        }, {merge: true}).then(() => {
          document.getElementById("error1").innerHTML = "Data Updated!";
          $('#myModal').modal('show');
          window.location.reload(); 
      }).catch((error) => {
        document.getElementById("error1").innerHTML = error.message;
        $('#myModal').modal('show');
    });
    }
    })
    document.getElementById("addsubmit2").addEventListener("click", function (event) {
      if (albl2 !== null && albl2.value === "" ||
      albu2 !== null && albu2.value === "" ||
      tpl2 !== null && tpl2.value === "" ||
      tpu2 !== null && tpu2.value === "" ||
      cal2 !== null && cal2.value === "" ||
      cau2 !== null && cau2.value === "" ||
      glul2 !== null && glul2.value === "" ||
      gluu2 !== null && gluu2.value === "" ||
      bunl2 !== null && bunl2.value === "" ||
      bunu2 !== null && bunu2.value === "" ||
      pl2 !== null && pl2.value === "" ||
      pu2 !== null && pu2.value === "" ||
      amyl2 !== null && amyl2.value === "" ||
      amyu2 !== null && amyu2.value === "" ||
      choll2 !== null && choll2.value === "" ||
      cholu2 !== null && cholu2.value === "" ||
      altl2 !== null && altl2.value === "" ||
      altu2 !== null && altu2.value === "" ||
      tbill2 !== null && tbill2.value === "" ||
      tbilu2 !== null && tbilu2.value === "" ||
      alpl2 !== null && alpl2.value === "" ||
      alpu2 !== null && alpu2.value === "" ||
      crel2 !== null && crel2.value === "" ||
      creu2 !== null && creu2.value === "" ||
      ckl2 !== null && ckl2.value === "" ||
      cku2 !== null && cku2.value === "") {
      document.getElementById("error1").innerHTML = "Missing Details! Please fill out the field/s and press submit";
      $('#myModal').modal('show');
    }
    else {
      db2.collection("Audit Log").doc(date2.innerText + " " + clock1.innerText).set(
        {
        ID : String(user.email),
        PID : msselect1.value,
        Date : "-",
        Activity : "Update Reference Range",
        DateDid : date2.innerText + " " + clock1.innerText 
        })
      db2.collection("Reference Ranges").doc(msselect1.value).set(
        {
          ALBLower: albl2.value,
          ALBUpper: albu2.value,
          TPLower: tpl2.value,
          TPUpper: tpu2.value,
          CaLower: cal2.value,
          CaUpper: cau2.value,
          GLULower: glul2.value,
          GLUUpper: gluu2.value,
          BUNLower: bunl2.value,
          BUNUpper: bunu2.value,
          PLower: pl2.value,
          PUpper: pu2.value,
          AMYLower: amyl2.value,
          AMYUpper: amyu2.value,
          CholLower: choll2.value,
          CholUpper: cholu2.value,
          AltLower: altl2.value,
          AltUpper: altu2.value,
          TbilLower: tbill2.value,
          TbilUpper: tbilu2.value,
          AlpLower: alpl2.value,
          AlpUpper: alpu2.value,
          CreLower: crel2.value,
          CreUpper: creu2.value,
          CkLower: ckl2.value,
          CkUpper: cku2.value
        }, {merge: true}).then(() => {
          document.getElementById("error1").innerHTML = "Data Updated!";
          $('#myModal').modal('show');
          window.location.reload(); 
      }).catch((error) => {
        document.getElementById("error1").innerHTML = error.message;
        $('#myModal').modal('show');
    });
    } 
    })
    document.getElementById("addsubmit").addEventListener("click", function (event) {
      if (machineselect1.value.includes("Mythic 18 Vet")) {
        myth18table1.style.display = "table";
        mnchipv5table1.style.display = "none";
        savesubmit1.style.display = "block"
        changemachine1.style.display = "block"
        addsubmit1.style.display = "none"
      }
      if (machineselect1.value.includes("MNCHIP V5")) {

        myth18table1.style.display = "none";
        mnchipv5table1.style.display = "table";
        savesubmit1.style.display = "block"
        changemachine1.style.display = "block"
        addsubmit1.style.display = "none"
      }
      else if (machineselect1 !== null && machineselect1.value === "") {
        document.getElementById("error1").innerHTML = "Missing Details! Please fill out the field/s and press submit";
        $('#myModal').modal('show');
      }
    })
    document.getElementById("savesubmit").addEventListener("click", function (event) {
      if (machineselect1 !== null && machineselect1.value === "" || speciesinput !== null && speciesinput.value === "") {
        document.getElementById("error1").innerHTML = "Missing Details! Please fill out the field/s and press submit";
        $('#myModal').modal('show');
      }
      else if (machineselect1.value.includes("Mythic 18 Vet")) {
        if (wbcl1 !== null && wbcl1.value === "" ||
          wbcu1 !== null && wbcu1.value === "" ||
          lyml1 !== null && lyml1.value === "" ||
          lymu1 !== null && lymu1.value === "" ||
          monl1 !== null && monl1.value === "" ||
          monu1 !== null && monu1.value === "" ||
          gral1 !== null && gral1.value === "" ||
          grau1 !== null && grau1.value === "" ||

          lyml2n !== null && lyml2n.value === "" ||
          lymu2n !== null && lymu2n.value === "" ||
          monl2n !== null && monl2n.value === "" ||
          monu2n !== null && monu2n.value === "" ||
          gral2n !== null && gral2n.value === "" ||
          grau2n !== null && grau2n.value === "" ||


          rbcl1 !== null && rbcl1.value === "" ||
          rbcu1 !== null && rbcu1.value === "" ||
          hgbl1 !== null && hgbl1.value === "" ||
          hgbu1 !== null && hgbu1.value === "" ||
          hctl1 !== null && hctl1.value === "" ||
          hctl1 !== null && hctu1.value === "" ||
          mcvl1 !== null && mcvl1.value === "" ||
          mcvu1 !== null && mcvu1.value === "" ||
          mchl1 !== null && mchl1.value === "" ||
          mchu1 !== null && mchu1.value === "" ||
          mchcl1 !== null && mchcl1.value === "" ||
          mchcu1 !== null && mchcu1.value === "" ||
          pltl1 !== null && pltl1.value === "" ||
          pltu1 !== null && pltu1.value === "") {
          document.getElementById("error1").innerHTML = "Missing Details! Please fill out the field/s and press submit";
          $('#myModal').modal('show');
        }
        else {
          adddatatodb();
        }
      }
      else if (machineselect1.value.includes("MNCHIP V5")) {
        if (albl1 !== null && albl1.value === "" ||
          albu1 !== null && albu1.value === "" ||
          tpl1 !== null && tpl1.value === "" ||
          tpu1 !== null && tpu1.value === "" ||
          cal1 !== null && cal1.value === "" ||
          cau1 !== null && cau1.value === "" ||
          glul1 !== null && glul1.value === "" ||
          gluu1 !== null && gluu1.value === "" ||
          bunl1 !== null && bunl1.value === "" ||
          bunu1 !== null && bunu1.value === "" ||
          pl1 !== null && pl1.value === "" ||
          pu1 !== null && pu1.value === "" ||
          amyl1 !== null && amyl1.value === "" ||
          amyu1 !== null && amyu1.value === "" ||
          choll1 !== null && choll1.value === "" ||
          cholu1 !== null && cholu1.value === "" ||
          altl1 !== null && altl1.value === "" ||
          altu1 !== null && altu1.value === "" ||
          tbill1 !== null && tbill1.value === "" ||
          tbilu1 !== null && tbilu1.value === "" ||
          alpl1 !== null && alpl1.value === "" ||
          alpu1 !== null && alpu1.value === "" ||
          crel1 !== null && crel1.value === "" ||
          creu1 !== null && creu1.value === "" ||
          ckl1 !== null && ckl1.value === "" ||
          cku1 !== null && cku1.value === "") {
          document.getElementById("error1").innerHTML = "Missing Details! Please fill out the field/s and press submit";
          $('#myModal').modal('show');
        }
        else {
          adddatatodb1();
        }
      }
    })
  })
}); 
