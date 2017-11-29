


var img1 = new Array("img/2people.png", "img/P2.png");
var i, checkP = 0;
i = 0;


//player 버튼 설정
function chgP2() {
	if (i == 0) {
		i = 1;
		checkP = 2;
		document.button_player3.src = img2[0];
		document.button_player4.src = img3[0];
	}
	else {
		i = 0;
		checkP=0;
	}
	document.form1.reset();
	document.button_player2.src = img1[i];
	document.getElementById("player1").style.display = "block";
	document.getElementById("player2").style.display = "block";
	document.getElementById("player3").style.display = "none";
	document.getElementById("player4").style.display = "none";
}
var img2 = new Array("img/3people.png", "img/3P.png");


function chgP3() {
	if (i == 0) {
		i = 1;
		checkP = 3;
		document.button_player2.src = img1[0];
		document.button_player4.src = img3[0];
	}
	else {
		i = 0;
		checkP=0;
	}
	document.form1.reset();
	document.button_player3.src = img2[i];
	document.getElementById("player1").style.display = "block";
	document.getElementById("player2").style.display = "block";
	document.getElementById("player3").style.display = "block";
	document.getElementById("player4").style.display = "none";
}
var img3 = new Array("img/4people.png", "img/4P.png");


function chgP4() {
	if (i == 0) {
		i = 1;
		checkP = 4;
		document.button_player2.src = img1[0];
		document.button_player3.src = img2[0];
	}
	else {
		i = 0;
		checkP=0;
	}
	document.form1.reset();
	document.button_player4.src = img3[i];
	document.getElementById("player1").style.display = "block";
	document.getElementById("player2").style.display = "block";
	document.getElementById("player3").style.display = "block";
	document.getElementById("player4").style.display = "block";

}

//Level 버튼 설정

var i, checkL;
i = 0;

var img4 = new Array("img/level1.png", "img/L1.png");
function chgL1() {
	if (i == 0) {
		i = 1;
		document.button_level2.src = img5[0];
		document.button_level3.src = img6[0];
		checkL=1;
	}
	else {
		i = 0;
		checkL=0;
	}
	document.button_level1.src = img4[i];
}

var img5 = new Array("img/level2.png", "img/L2.png");
function chgL2() {
	if (i == 0) {
		i = 1;
		document.button_level1.src = img4[0];
		document.button_level3.src = img6[0];
		checkL=2;
	}
	else {
		i = 0;
		checkL=0;
	}
	document.button_level2.src = img5[i];
}

var img6 = new Array("img/level3.png", "img/L3.png");
function chgL3() {
	if (i == 0) {
		i = 1;
		document.button_level1.src = img4[0];
		document.button_level2.src = img5[0];
		checkL=3;
	}
	else {
		i = 0;
		checkL=0;
	}
	document.button_level3.src = img6[i];
}

var img7 = new Array("img/on.png", "img/off.png");

//BGM 버튼 설정

function chgM() {
	if (i == 0) {
		i = 1;
	}
	else {
		i = 0;
	}
	document.button_bgm.src = img7[i];
}
//Alert 설정
function checkAlert()
{
	var form = document.form1;

	if(checkP==0&&checkL==0)
	alert("Select player and level");
	else if(checkP==0)
	alert("Select the number of player");
	else if(checkL==0)
	alert("Select a Level");
	else if(checkP==2&&(form.player1.value==""||form.player2.value=="")){
		alert("Enter player's names");
		if(form.player1.value=="")
			form.player1.focus();
		else if(form.player2.value=="")
			form.player2.focus();			
	}	
	else if(checkP==3&&(form.player1.value==""||form.player2.value==""||form.player3.value=="")){
		alert("Enter player's names");
		if(form.player1.value=="")
			form.player1.focus();
		else if(form.player2.value=="")
			form.player2.focus();
		else if(form.player3.value=="")
			form.playe3.focus();		
	}	
	else if(checkP==4&&(form.player1.value==""||form.player2.value==""||form.player3.value==""||form.player4.value=="")){
		alert("Enter player's names");
		if(form.player1.value=="")
			form.player1.focus();
		else if(form.player2.value=="")
			form.player2.focus();
		else if(form.player3.value=="")
			form.playe3.focus();
		else if(form.player4.value=="")
			form.player4.focus();			
	}	
	else{
		document.form1.level.value=checkL;
		form.submit();
	}
}