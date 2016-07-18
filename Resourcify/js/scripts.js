var clickBalance = 0;
if(localStorage["clickBalance"]) clickBalance = parseInt(localStorage["clickBalance"]);

var honourBalance = 0;
if(localStorage["honourBalance"]) honourBalance = parseInt(localStorage["honourBalance"]);

function clicked() {
   var clickBalanceElement = document.getElementById("click-balance");
   clickBalance+=1;
   localStorage["clickBalance"] = clickBalance;
   clickBalanceElement.innerHTML = clickBalance;
   updateMissionStatus();
}
function updateMissionStatus() {
	if(honourBalance==0){
	 var mission1progressElement = document.getElementById("mission1progress");
	 mission1progressElement.value = clickBalance;
	 if(clickBalance>=100){
		 honourBalance+=1;
		 mission1progressElement.style="display:none";
	 }
   }
}
