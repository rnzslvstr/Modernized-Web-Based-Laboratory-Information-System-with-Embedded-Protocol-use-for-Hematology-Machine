$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});
function myFunction() {
// Declare variables
var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    
for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
    li[i].style.display = "";
    } else {
    li[i].style.display = "none";
}
}
}
