const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = ["Buy Food", "Cook Food", "eat Food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function (req, res) {
  let today = new Date();
  
  let options = {
      weekday: "long",
      day:"numeric",
      month:"long"
  };
  let day = today.toLocaleDateString("en-IN", options);
 
  res.render("list", { kindOfDay: day, newListItems: items});
});


app.post("/", function (req, res) {
    let item = req.body.newItem;

    items.push(item); 

    // console.log(item);
    res.redirect("/")
})

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

















 // Using if else
  // if (currentDay === 0){
  //     day = "Sunday";
  //     // res.sendFile(__dirname + "/weekend.html");
  // }else if(currentDay === 1){
  //     day = "Monday";
  // }else if(currentDay === 2){
  //     day = "Tuesday";
  // }else if(currentDay === 3){
  //     day = "Wednesday";
  // }else if(currentDay === 4){
  //     day = "Thunesday";
  // }else if(currentDay === 5){
  //     day = "Friday";
  // }else{
  //     day = "Saturday";
  //     // res.sendFile(__dirname + "/weekday.html");
  // }



//   note : use switch statement instead of if else when the if els statement is used more than  5 times

  //  Using switch
//   switch (currentDay) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//       day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thrusday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//       break;
//     default:
//       console.log("error: Current day is equal to : " + currentDay);
//       break;
//   }
