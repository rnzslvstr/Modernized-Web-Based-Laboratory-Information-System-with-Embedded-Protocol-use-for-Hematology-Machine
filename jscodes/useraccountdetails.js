
var uid10; 
let db10 = firebase.firestore();  
firebase.auth().onAuthStateChanged(function(user) {

    uid10 = user.uid; 
    db10.collection("users").doc(uid10).get().then((doc) => {
        var email10 = doc.data().Username; 
        var userlevel10 = doc.data().UserLevel; 
        document.getElementById("usernamelevel").innerHTML = String(email10) + " | " + String(userlevel10)
    }); 

})