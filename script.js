var sidemenu = document.getElementById("sidemenu");
var tablinks = document.getElementsByClassName('tab-links')
var tabcontent = document.getElementsByClassName('tab-content')
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
// javascript for about section
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("")
    }

}