/**Creating the animated menu*/

//Declaring variables and selecting class names with 'querySelector'
var menuIcon = document.querySelector(".menu-icon");    
var sidebar = document.querySelector(".sidebar");

//Changing width of the sidebar when menu icon is clicked
menuIcon.onclick = function(){
    sidebar.classList.toggle("mini-sidebar")    //Mini sidebar is  another class name
}