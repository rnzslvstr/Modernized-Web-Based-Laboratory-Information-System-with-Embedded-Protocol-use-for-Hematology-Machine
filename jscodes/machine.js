var socket = io();
var machinename = document.getElementById("machinename"); 
socket.on('status', function(status) {
  if (String(status).includes("COM6") || String(status).includes("COM5")){
      //SelectPicker Nav
    const navobj4 = document.createElement("li");
    const navobj5 = document.createElement("a");
    navobj5.textContent = "MNCHIP V5";
    navobj5.href = "/mnchipv5/run"; 
    navobj4.appendChild(navobj5)
    document.getElementById("homeSubmenu1").appendChild(navobj4);

      const navobj = document.createElement("li");
      const navobj2 = document.createElement("a");
      navobj2.textContent = "Mythic 18 Vet";
      navobj2.href = "/myth18vet/run"; 
      navobj.appendChild(navobj2)
      document.getElementById("homeSubmenu1").appendChild(navobj);

      const navobj10 = document.createElement("li");
      const navobj11 = document.createElement("a");
      navobj11.textContent = "Combo Machines";
      navobj11.href = "/combo/run"; 
      navobj10.appendChild(navobj11)
      document.getElementById("homeSubmenu1").appendChild(navobj10);
      socket.close(); 
   }
else
{
  document.getElementById('data4').innerHTML = "Not Connected";
}
}); 