var clickBalance = 0;
if(localStorage["clickBalance"]) clickBalance = parseInt(localStorage["clickBalance"]);

function clicked() {
   var clickBalanceElement = document.getElementById("click-balance");
   clickBalance+=1;
   localStorage["clickBalance"] = clickBalance;
   clickBalanceElement.innerHTML = clickBalance;
}
