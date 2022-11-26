money = 0;
moneyperclick = 1;
moneypersecond = 0;
clickercost = 10;
clickerown = 0;
clickeradd= 0;

function addcomma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
//updates all values
function reloadall() {
  document.getElementById("click").innerHTML =
     Points/sec: " + addcomma(moneypersecond);
  document.getElementById("total").innerHTML = "Points: " + addcomma(money);
  document.getElementById("clicker").innerHTML =
    clickerown + "-clicker: " + addcomma(clickercost) + " | +" + addcomma(clickeradd) + "/sec";
}
//overwrites save file
function save() {
  localStorage.setItem("money", money);
  localStorage.setItem("moneypersecond", moneypersecond);
  localStorage.setItem("clickercost", clickercost);
  localStorage.setItem("clickerown", clickerown);
  localStorage.setItem("clickeradd", clickeradd);
}
//loads save file
function load() {
  money = parseInt(localStorage.getItem("money"));
  moneypersecond = parseInt(localStorage.getItem("moneypersecond"));
  clickercost = parseInt(localStorage.getItem("clickercost"));
  clickerown = parseInt(localStorage.getItem("clickerown"));
  clickeradd = parseInt(localStorage.getItem("clickeradd"));
  
  
 //timer
function myTimer() {
    money += moneypersecond;
  document.getElementById("total").innerHTML = "Points: " + addcomma(money);
}
setInterval(myTimer, 1000);

//what happens when button is clicked
function clicked() {
  money += moneyperclick;
  document.getElementById("total").innerHTML = "money" + addcomma(money);
}