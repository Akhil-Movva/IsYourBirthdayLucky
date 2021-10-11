var date = document.querySelector("#date");
var number = document.querySelector("#number");
var btn = document.querySelector("#btn");
var form=document.querySelector("#form");


function clickHandler(event) {
  event.preventDefault();
  var dob = date.value;
  dob = Number(dob.slice(8, dob.length));
  var num = number.value;
  var rem, sum = 0
  var luckyImg, message;

  console.log(dob);
  console.log(num);
  while (dob > 0) {
    rem = dob % 10;
    sum = sum + rem;
    dob = Math.floor(dob / 10);
  }
  luckyImg = document.createElement("img");
  luckyImg.style.height = "200px";
  luckyImg.style.width = "400px";
  luckyImg.style.margin = "auto";
  document.getElementById("graphics").appendChild(luckyImg);


  if (sum % num == 0) {

    luckyImg.src = "https://media.giphy.com/media/SUQzS3BEeUhLnIhLtD/giphy.gif";
    message = "Yayy...your birthday is lucky!!!";
  } else {
    luckyImg.src = "https://media.giphy.com/media/WpaVhEcp3Qo2TjwyI1/giphy.gif";
    message = "Oops...your birthday is not lucky:("
  }
 
  var text = document.getElementById("message");
  text.innerText = message;
  text.style.textAlign = "center";
  text.style.fontSize = "2rem";
  text.style.color = "#1F2937";

  //form.removeEventListener("submit", clickHandler);
  btn.disabled=true;

}

form.addEventListener("submit", clickHandler);
