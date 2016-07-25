var clickBalance = 0;
if(localStorage["clickBalance"]) clickBalance = parseInt(localStorage["clickBalance"]);

var honourBalance = 0;
if(localStorage["honourBalance"]) honourBalance = parseInt(localStorage["honourBalance"]);

function clicked() {
   clickBalance+=1;
   save();
   updateMissionStatus();
}

function updateBalance(){
	document.getElementById("click-balance").innerHTML = clickBalance;
	document.getElementById("honour-balance").innerHTML=honourBalance;
	if(clickBalance!=0 || honourBalance!=0) {
		document.getElementById("reset-progress").disabled="";
	}
}

function updateMissionStatus() {
  if(honourBalance==0){
    document.getElementById("mission1progress").value = clickBalance;
    if(clickBalance>=100){
      honourBalance=1;
	}
	save();
  }
  if(honourBalance>0){
	document.getElementById("mission1progress").style="display:none";
	document.getElementById("honour-balanceRow").style="";
  } else {
	  document.getElementById("mission1progress").style="";
	  document.getElementById("honour-balanceRow").style="display:none";
  }
  updateBalance();
}
function resetProgress() {
	clickBalance = 0;
	honourBalance = 0;
	save();
	updateBalance();
	updateMissionStatus();
	document.getElementById("reset-progress").disabled="disabled";
}
function save() {
	localStorage["clickBalance"] = clickBalance;
	localStorage["honourBalance"] = honourBalance;
}
