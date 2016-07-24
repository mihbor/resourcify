var clickBalance = 0;
if(localStorage["clickBalance"]) clickBalance = parseInt(localStorage["clickBalance"]);

var honourBalance = 0;
if(localStorage["honourBalance"]) honourBalance = parseInt(localStorage["honourBalance"]);

function clicked() {
   clickBalance+=1;
   localStorage["clickBalance"] = clickBalance;
   updateBalance();
   updateMissionStatus();
}

function updateBalance(){
	var clickBalanceElement = document.getElementById("click-balance");
	clickBalanceElement.innerHTML = clickBalance;
}
function updateMissionStatus() {
	if(honourBalance==0){
	  var mission1progressElement = document.getElementById("mission1progress");
	  mission1progressElement.value = clickBalance;
	  if(clickBalance>=100){
		 honourBalance+=1;
		 mission1progressElement.style="display:none";
		 document.getElementById("honour-balanceRow").style="";
	  }
	  var honourBalanceElement = document.getElementById("honour-balance");
	  honourBalanceElement.innerHTML=honourBalance;
   }
}
function resetProgress() {
	clickBalance = 0;
	honourBalance = 0;
	updateBalance();
	updateMissionStatus();
}
