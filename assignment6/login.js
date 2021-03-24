window.onload = loginLoad;
function loginLoad(){
	let clickButton = document.getElementById("myLogin");
	clickButton.onsubmit = checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username');
	const password = urlParams.get('passwordMain');
	
	let id = document.forms["myLogin"]["username"].value;
	let pass = document.forms["myLogin"]["passwordMain"].value;

	if(id == username && pass == password){
		LoginSuccess();
		alert("Login Sucessful.");
	}
	else {
		alert("Your Username or Password Incorrected.");
		return false;
	}
}

function LoginSuccess()
{
	console.log("Load new Page");
	window.location.href = "https://youtu.be/xmSpe4Vfbcw?t=39";
}

			