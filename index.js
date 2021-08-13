function nameFocusFunction(){
	if (document.getElementById("name").value == ""){
		document.getElementById("nameOutput").innerHTML = "Hello there! What's your name?";}
}

function nameBlurFunction(){
	if (document.getElementById("name").value == ""){
		document.getElementById("nameOutput").innerHTML = "Please enter your name!" ;}
	else{
		document.getElementById("nameOutput").innerHTML = "Hi, " + document.getElementById("name").value +"!" ;}
}

function birthdayFocusFunction(){
	if (document.getElementById("date").value.length == 0){
		document.getElementById("ageOutput").innerHTML = "Lemme guess, your age is...";}
}

function birthdayBlurFunction(){
	if (document.getElementById("date").value.length == 0){
		document.getElementById("ageOutput").innerHTML = "Please enter your birthday!";}
	else{
		var year = (document.getElementById("date").value.split("-"))[0];
	  	var month = (document.getElementById("date").value.split("-"))[1];
	  	var day = (document.getElementById("date").value.split("-"))[2]
	  
	  	var currDate = new Date();

	  	var age = 0;
	  	if (currDate.getFullYear() > year){
			if (currDate.getMonth() + 1 >= month){
		  		if(currDate.getDate() >= day){
					age = currDate.getFullYear() - year;}
		  		else{
					age = currDate.getFullYear() - year - 1;}
			} 
			else{
		  		age = currDate.getFullYear() - year-1;}
	  	}
	  	document.getElementById("ageOutput").innerHTML =  "Your age is " + age + "!";
	}
}

function switchDarkMode(){
	document.getElementById("mode").className = "panel bg-dark text-white";
	document.getElementById("themeOutput").innerHTML = "You chose Dark Mode!";
}

function switchLightMode(){
	document.getElementById("mode").className = "panel bg-light text-dark";
	document.getElementById("themeOutput").innerHTML = "You chose Light Mode!";
}

function clickSkill(btnID){
	var btn = document.getElementById(btnID);
	btn.parentNode.removeChild(btn);
	document.getElementById("skillsOutput").appendChild(btn);
	btn.onclick = function() {removeSkill(btn, btnID)};
}

function removeSkill(btn,btnID){
	btn.parentNode.removeChild(btn);
	document.getElementById("skillChoices").appendChild(btn);
	btn.onclick = function() {clickSkill(btnID)};
	btn.className = "btn btn-success btn-sm mr-1";
}

function changeRed(btnID){
	var btn = document.getElementById(btnID);
	btn.className = "btn btn-danger btn-sm mr-1";
}

function changeGreen(btnID){
	var btn = document.getElementById(btnID);
	btn.className = "btn btn-success btn-sm mr-1";
}

