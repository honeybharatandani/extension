 let btn = document.getElementById("getTimezone"); //The getElementById() method returns the element that has the ID attribute with the specified value


 if (btn !== null) //used for checking condition
 {
     btn.addEventListener("click", Timezone); //addeventlistener method used to called the function when user clicks on it it shld received op
 }

 function Timezone() {
     let time = document.getElementById("showTimezone"); //showtimezone id called

     alert(Date()); //date function called which is predefined
 }
 //*****************************************************