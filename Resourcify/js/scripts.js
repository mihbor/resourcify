var clickBalance = 0;
if(localStorage["clickBalance"]) clickBalance = parseInt(localStorage["clickBalance"]);

var honourBalance = 0;
if(localStorage["honourBalance"]) honourBalance = parseInt(localStorage["honourBalance"]);

function clicked() {
   var clickBalanceElement = document.getElementById("click-balance");
   clickBalance+=1;
   localStorage["clickBalance"] = clickBalance;
   clickBalanceElement.innerHTML = clickBalance;
}
