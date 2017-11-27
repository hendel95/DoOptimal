//사용자 Rack
//dfdfdf

var gameStatus = 0; // 0 is on game, 1 is end game.

var rackArray = new Array();
rackArray[0] = new Array("", "", "", "", "", "", "");
rackArray[1] = new Array("", "", "", "", "", "", "");
rackArray[2] = new Array("", "", "", "", "", "", "");
rackArray[3] = new Array("", "", "", "", "", "", "");

var placedArray = new Array();
// var rackArray = new Array("", "", "", "", "", "", "");

var passCnt = 0; // if everyone click in succession of pass 2 times,
// game will be finished.

var tileScore = new Array(); // Array of scores for letters
tileScore["A"] = 1;
tileScore["B"] = 3;
tileScore["C"] = 3;
tileScore["D"] = 2;
tileScore["E"] = 1;
tileScore["F"] = 4;
tileScore["G"] = 2;
tileScore["H"] = 4;
tileScore["I"] = 1;
tileScore["J"] = 8;
tileScore["K"] = 5;
tileScore["L"] = 1;
tileScore["M"] = 3;
tileScore["N"] = 1;
tileScore["O"] = 1;
tileScore["P"] = 3;
tileScore["Q"] = 10;
tileScore["R"] = 1;
tileScore["S"] = 1;
tileScore["T"] = 1;
tileScore["U"] = 1;
tileScore["V"] = 4;
tileScore["W"] = 4;
tileScore["X"] = 8;
tileScore["Y"] = 4;
tileScore["Z"] = 10;

var multiplierArray = new Array(); // Array of square positions that multiply
// scores
multiplierArray["c1r1"] = "3W";
multiplierArray["c1r8"] = "3W";
multiplierArray["c1rF"] = "3W";
multiplierArray["c8r1"] = "3W";
multiplierArray["c8rF"] = "3W";
multiplierArray["cFr1"] = "3W";
multiplierArray["cFr8"] = "3W";
multiplierArray["cFrF"] = "3W";
multiplierArray["c2r2"] = "2W";
multiplierArray["c2rE"] = "2W";
multiplierArray["c3r3"] = "2W";
multiplierArray["c3rD"] = "2W";
multiplierArray["c4r4"] = "2W";
multiplierArray["c4rC"] = "2W";
multiplierArray["c5r5"] = "2W";
multiplierArray["c5rB"] = "2W";
multiplierArray["c8r8"] = "2W";
multiplierArray["cBr5"] = "2W";
multiplierArray["cBrB"] = "2W";
multiplierArray["cCr4"] = "2W";
multiplierArray["cCrC"] = "2W";
multiplierArray["cDr3"] = "2W";
multiplierArray["cDrD"] = "2W";
multiplierArray["cEr2"] = "2W";
multiplierArray["cErE"] = "2W";
multiplierArray["c2r6"] = "3L";
multiplierArray["c2rA"] = "3L";
multiplierArray["c6r2"] = "3L";
multiplierArray["c6r6"] = "3L";
multiplierArray["c6rA"] = "3L";
multiplierArray["c6rE"] = "3L";
multiplierArray["cAr2"] = "3L";
multiplierArray["cAr6"] = "3L";
multiplierArray["cArA"] = "3L";
multiplierArray["cArE"] = "3L";
multiplierArray["cEr6"] = "3L";
multiplierArray["cErA"] = "3L";
multiplierArray["c1r4"] = "2L";
multiplierArray["c1rC"] = "2L";
multiplierArray["c3r7"] = "2L";
multiplierArray["c3r9"] = "2L";
multiplierArray["c4r1"] = "2L";
multiplierArray["c4r8"] = "2L";
multiplierArray["c4rF"] = "2L";
multiplierArray["c7r3"] = "2L";
multiplierArray["c7r7"] = "2L";
multiplierArray["c7r9"] = "2L";
multiplierArray["c7rD"] = "2L";
multiplierArray["c8r4"] = "2L";
multiplierArray["c8rC"] = "2L";
multiplierArray["c9r3"] = "2L";
multiplierArray["c9r7"] = "2L";
multiplierArray["c9r9"] = "2L";
multiplierArray["c9rD"] = "2L";
multiplierArray["cCr1"] = "2L";
multiplierArray["cCr8"] = "2L";
multiplierArray["cCrF"] = "2L";
multiplierArray["cDr7"] = "2L";
multiplierArray["cDr9"] = "2L";
multiplierArray["cFr4"] = "2L";
multiplierArray["cFrC"] = "2L";

var fromHex = new Array();
fromHex[""] = "";
fromHex["0"] = 0;
fromHex["1"] = 1;
fromHex["2"] = 2;
fromHex["3"] = 3;
fromHex["4"] = 4;
fromHex["5"] = 5;
fromHex["6"] = 6;
fromHex["7"] = 7;
fromHex["8"] = 8;
fromHex["9"] = 9;
fromHex["A"] = 10;
fromHex["B"] = 11;
fromHex["C"] = 12;
fromHex["D"] = 13;
fromHex["E"] = 14;
fromHex["F"] = 15;
var toHex = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A",
		"B", "C", "D", "E", "F");

var tileBank = new Array("A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A",
		"B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E",
		"E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I",
		"I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L",
		"M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O",
		"O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S",
		"S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W",
		"W", "X", "Y", "Y", "Z"); // The tiles which may be given to the
// player
var tilesRemaining = tileBank.length; // Number of tiles remaining that may be
// given to a player

var selectedTile = -1; // Index of tile in rackArray that has been clicked on
// (selected)

var wordHead = ""; // Head of the word that is currently being scanned
var wordTail = ""; // Tail of the word that is currently being scanned
var wordMin = ""; // Location of the first letter of a word
var wordMax = ""; // Location of the last letter of a word
var wordList = new Array(); // Array of words placed on the board

var touching = false; // Whether the scanned word touches existing tiles on
// the board
var score = new Array(); // Player's total score
score[0] = 0;
score[1] = 0;
score[2] = 0;
score[3] = 0;

var bestplay = getBestPlay();
var highscore = getHighScore();
var swaps = 0; // Number of consecutive tile swaps

var hint_left = new Array();
hint_left[0] = 3;
hint_left[1] = 3;
hint_left[2] = 3;
hint_left[3] = 3;

initTileStorage(); // Randomly pick player's first tiles
// PlayerShow();

// function PlayerShow(){
// document.getElementById("userBox1").style.display="block";
// document.getElementById("userBox2").style.display="block";
// document.getElementById("userBox3").style.display="block";
// document.getElementById("userBox4").style.display="block";

// if(playerNum()==2){
// document.getElementById("userBox3").style.display="none";
// document.getElementById("userBox4").style.display="none";
// }
// else if(playerNum()==3){
// document.getElementById("userBox4").style.display="none";
// }
// }
/*
 * function initTileStorage(){ for(var i = 0 ; i < 4 ; i++ ){ var tiles = 0; for
 * (var j = 0; j < rackArray.length && tilesRemaining > 0; j++){ if
 * (rackArray[i][j] == ""){ var randomTile = randomInt(tileBank.length);
 * rackArray[i][j] = tileBank[randomTile] + ","; arrayRemoveItem(randomTile,
 * tileBank);
 * 
 * tilesRemaining = tileBank.length; } tiles++; } } return true; }
 */
var checkS;
checkS = 0;

// function showUp(){
// if(checkS==0){
// checkS=1;
// document.getElementById("tilerack").style.display="none";
// }
// else{
// checkS=0;
// document.getElementById("tilerack").style.display="block";
// }
// }

function showUp() {
	document.getElementById("tilerack").style.display = "block";
}
function hideRack() {
	document.getElementById("tilerack").style.display = "none";
}

var turn = 0;

var timerVar = setInterval(myTimer, 1000);

var userTimer = 100;

function myTimer() {
	if (gameStatus != 1) {
		var whosTime = 'timer' + turn;
		document.getElementById(whosTime).innerHTML = userTimer--;
		if (userTimer < 0) {
			userTimer = 100;
			turnChange();
		}
	}
}

function turnChange() {
	if (gameStatus != 1) {
		var totalPlayer = playerNum() - 1;
		// remove original turn's turnbox
		var whosTurn = 'turnbox' + turn;
		var turnbox = document.getElementById(whosTurn);
		turnbox.innerHTML = '';
		//
		userTimer = 100;
		showTimer();

		if (turn < totalPlayer)
			turn++;
		else if (turn == totalPlayer)
			turn = 0;

		showWhoTurn();
	}
}

function showTimer() {
	var totalPlayer = playerNum() - 1;
	var whosTime = 'timer' + turn;

	for (i = 0; i < totalPlayer; i++) {
		if (i != turn)
			document.getElementById(whosTime).innerHTML = "Timer";
	}
}

// myturn 추가 이후로 인터페이스 이상해짐 특히 3번 유저가 turn일때 너무 밀림
function showWhoTurn() {
	var whosTurn = 'turnbox' + turn;
	var turnbox = document.getElementById(whosTurn);
	var turnbox_text = '<div class="turn_box"><img src="./img/myturn.png"></div>'

	turnbox.innerHTML = turnbox_text;
}

function initTileStorage() {
	var tiles = 0;
	for (var j = 0; j < playerNum(); j++) {
		tiles = 0;
		for (var i = 0; i < rackArray[j].length && tiles < 7
				&& tilesRemaining > 0; i++) {
			if (rackArray[j][i] != "")
				++tiles;

		}

		for (var i = 0; i < rackArray[j].length && tiles < 7
				&& tilesRemaining > 0; i++) {
			if (rackArray[j][i] == "") {
				var randomTile = randomInt(tileBank.length);
				rackArray[j][i] = tileBank[randomTile] + ",";
				arrayRemoveItem(randomTile, tileBank);

				tilesRemaining = tileBank.length;

				++tiles;
			}
		}
	}

	return true;
}

function randomInt(N) {
	return (N * (Math.random() % 1)) | 0;
}

function getTileLabel(tileID) {
	return rackArray[turn][tileID].replace(/,.*/, ""); // 임시로 [0]
}

function getTilePosition(tileID) {
	return rackArray[turn][tileID].replace(/.*,/, ""); // 임시로 [0]
}

function selectTile(tileID) {
	// Clicking a selected tile returns it to the rack.
	if (tileID == selectedTile) {
		returnTile(-1);
		return;
	}
	drawTileStorage();

	selectedTile = tileID;

	var theTile = document.getElementById("tile" + selectedTile);
	theTile.className = "tile on";

	return true;
}

function emptyCell(theLocation) {
	var theCell = document.getElementById(theLocation);
	var multiplyLabel = "";
	if (multiplierArray[theLocation] && theLocation != "c8r8") {
		multiplyLabel = multiplierArray[theLocation];
	}
	if (multiplyLabel == "") {
		theCell.innerHTML = '<a class="empty" href="#" onclick="placeTile(\''
				+ theLocation
				+ '\')\; return false\;"><img src="./img/BoardTile.png" class="image"><span>'
				+ multiplyLabel + '</span></a>';
	}

	else {
		theCell.innerHTML = '<a class="empty" href="#" onclick="placeTile(\''
				+ theLocation + '\')\; return false\;"><img src="./img/'
				+ multiplyLabel + '.png" class="image">';
	}
	if (theLocation == "c8r8")
		theCell.innerHTML = '<a class="star" href="#" onclick="placeTile(\''
				+ theLocation + '\')\; return false\;"><img src="./img/'
				+ 'star' + '.png" class="image">';

}

function placeTile(boardCell) {
	if (selectedTile != -1) {
		var tileLabel = getTileLabel(selectedTile);
		var tilePosition = getTilePosition(selectedTile);

		if (tilePosition) {
			emptyCell(tilePosition);
		}

		rackArray[turn][selectedTile] = tileLabel + "," + boardCell;

		var theCell = document.getElementById(boardCell);

		theCell.innerHTML = '<a id="tile'
				+ selectedTile
				+ '" class="tile placed" href="#" onclick="selectTile('
				+ selectedTile
				+ ')\; return false\;"><img src="./img/BoardTile.png" class="image">'
				+ tileHtml(tileLabel) + '</a>';

		selectedTile = -1;

		if (!tilePosition) {
			drawTileStorage();
		}
	}

	return true;
}

function tileHtml(tileLabel) {
	if (tileLabel == ' ')
		return "";
	var theScore = tileScore[tileLabel];
	if (theScore == 0)
		return '<span class="blank">' + tileLabel.toUpperCase()
				+ '<span class="score">0</span></span>';
	// if (theScore == 0) return '<p class="text">' + tileLabel.toUpperCase() +
	// '</p>';
	return tileLabel + '<span class="score">' + theScore + '</span>';
	// return '<p class="text">' + tileLabel + '</p>';
}

function drawTileStorage() {
	for (i = 0; i < rackArray[turn].length; i++) {
		var theStore = document.getElementById("tileStorage" + i);
		var tileLabel = getTileLabel(i);
		var tilePosition = getTilePosition(i);

		if (!tilePosition) {
			if (tileLabel == "") {
				theStore.innerHTML = '<a class="empty" href="#" onclick="returnTile('
						+ i + ')\; return false\;"></a>';
				// theStore.innerHTML = '<p class="text">HINT : 3</p>';
			} else {
				theStore.innerHTML = '<a id="tile' + i
						+ '" class="tile" href="#" onclick="selectTile(' + i
						+ ')\; return false\;">' + tileHtml(tileLabel) + '</a>';
				// theStore.innerHTML = '<p class="text">HINT : 3</p>';
			}
		} else {
			var theCell = document.getElementById(tilePosition);

			// theCell.innerHTML = '<a href="#" onclick="returnTile(' + i +
			// ')\;>dd</a>';
			theCell.innerHTML = '<a id="tile' + i
					+ '" class="tile placed" href="#" onclick="selectTile(' + i
					+ ')\; return false\;">' + tileHtml(tileLabel) + '</a>';
			theStore.innerHTML = '<a class="empty" href="#" onclick="returnTile('
					+ i + ')\; return false\;"></a>';
		}
	}

	var theStats = document.getElementById("stats");
	var stats = score[0];
	theStats.innerHTML = stats;

	var theStats2 = document.getElementById("stats2");
	var stats2 = score[1];
	theStats2.innerHTML = stats2;

	var theStats3 = document.getElementById("stats3");
	var stats3 = score[2];
	theStats3.innerHTML = stats3;

	var theStats4 = document.getElementById("stats4");
	var stats4 = score[3];
	theStats4.innerHTML = stats4;

	var tileLeft = document.getElementById("tile_left_text");
	var tile_left_text = "TILES LEFT : " + tilesRemaining;
	tileLeft.innerHTML = tile_left_text;

	// var stats = "Tiles remaining: " + tilesRemaining + " | Current score: " +
	// score;
	// if (highscore > 0) stats += " | High score: " + highscore;
	// if (bestplay > 0) stats += " | Best play: " + bestplay;
	// theStats.innerHTML = stats;

	return true;
}

function returnTile(rackPos) {
	if (selectedTile != -1) {
		var tileLabel = getTileLabel(selectedTile);
		var tilePosition = getTilePosition(selectedTile);

		if (rackPos == -1) {
			rackPos = selectedTile;
			for (var i = 0; i < rackArray[turn].length; ++i) {
				if (getTilePosition(i) != "") {
					rackPos = i;
					break;
				}
			}
		}

		if (tilePosition)
			emptyCell(tilePosition);

		if (rackPos != selectedTile) {
			rackArray[turn][selectedTile] = rackArray[turn][rackPos];
		}
		rackArray[turn][rackPos] = tileLabel + ",";

		drawTileStorage();

		selectedTile = -1;
	}
}

function encodePos(column, row) {
	return "c" + toHex[column] + "r" + toHex[row];
}

function arrayRemoveItem(itemID, theArray) {
	if (itemID < theArray.length) {
		for (i = itemID; i + 1 < theArray.length; ++i) {
			theArray[i] = theArray[i + 1];
		}

		theArray.length -= 1;
	}

	return true;
}

function drawBoard() {

	for (row = 1; row <= 15; row++) {
		for (column = 1; column <= 15; column++) {
			var theLocation = encodePos(column, row);

			if (placedArray[theLocation]) {
				var theCell = document.getElementById(theLocation);
				theCell.innerHTML = '<span class="tile">'
						+ tileHtml(placedArray[theLocation]) + '</span>';
			}
		}
	}

	return true;
}

function exchange() {
	var swapped = 0;

	if (tilesRemaining < 7) {
		alert("You may not swap tiles when there are fewer than 7 remaining in the bag.");

		return false;
	}
	if (swaps > 1) {
		alert("You may not swap tiles more than twice without playing any words.");

		return false;
	}
	for (var i = 0; i < rackArray[turn].length; i++) {
		if (getTilePosition(i)) {
			emptyCell(getTilePosition(i));

			swapped++;

			tileBank[tileBank.length] = getTileLabel(i);
			rackArray[turn][i] = "";
		}
	}

	if (swapped == 0) {
		alert('To swap tiles, place them anywhere on the board then click "swap".');

		return false;
	}

	swaps++;

	for (var i = 0; i < rackArray[turn].length && swapped > 0
			&& tilesRemaining > 0; i++) {
		if (rackArray[turn][i] == "" && tilesRemaining > 0) {
			var randomTile = Math.floor((Math.random() % 1)
					* (tileBank.length - swapped));
			rackArray[turn][i] = tileBank[randomTile] + ",";
			arrayRemoveItem(randomTile, tileBank);

			tilesRemaining = tileBank.length;
			--swapped;
		}
	}
	drawBoard();
	drawTileStorage();

	return true;
}

function checkPlaced() {
	for (i = 0; i < rackArray[turn].length; i++) {
		if (getTilePosition(i)) {
			return true;
		}
	}

	return false;
}

function checkRow() {
	var min = 16;
	var max = 0;
	var theRow = 0;

	for (i = 0; i < rackArray[turn].length; i++) {
		if (getTilePosition(i) != "") {
			if (theRow) {
				if (getTilePositionRow(i) != theRow)
					return false;
			} else {
				theRow = getTilePositionRow(i);
			}

			var tmp = getTilePositionColumn(i);
			if (tmp < min)
				min = tmp;
			if (tmp > max)
				max = tmp;
		}
	}

	if (theRow == 0)
		return false;

	for (i = min; i <= max; i++) {
		if (!placedArray[encodePos(i, theRow)]) {
			for (j = 0; j < rackArray[turn].length; j++) {
				if (getTilePositionColumn(j) == i) {
					break;
				} else if (j == rackArray[turn].length - 1) {
					return false;
				}
			}
		}
	}

	return true;
}

function checkColumn() {
	var min = 16;
	var max = 0;
	var theColumn = 0;
	var i;

	for (i = 0; i < rackArray[turn].length; i++) {
		if (getTilePosition(i) != "") {
			if (theColumn) {
				if (getTilePositionColumn(i) != theColumn)
					return false;
			} else {
				theColumn = getTilePositionColumn(i);
			}

			var tmp = getTilePositionRow(i);
			if (tmp < min)
				min = tmp;
			if (tmp > max)
				max = tmp;
		}
	}

	if (theColumn == 0)
		return false;

	for (i = min; i <= max; i++) {
		if (!placedArray[encodePos(theColumn, i)]) {
			for (j = 0; j < rackArray[turn].length; j++) {
				if (getTilePositionRow(j) == i) {
					break;
				} else if (j == rackArray[turn].length - 1) {
					return false;
				}
			}
		}
	}

	return true;
}

function gameToString() {
	var str = score[turn] + "/" + swaps + "/" + rackArray[turn].join(".") + "/"
			+ tileBank.join("") + "/";
	for (var row = 1; row <= 15; ++row) {
		for (var col = 1; col <= 15; ++col) {
			var myPos = encodePos(col, row);
			if (placedArray[myPos]) {
				str += placedArray[myPos];
			} else if (multiplierArray[myPos]) {
				str += multiplierArray[myPos];
			}
			str += ".";
		}
	}
	return str;
}

function gameFromString(str) {
	var a = str.split("/");
	score[turn] = parseInt(a[0]);
	swaps = parseInt(a[1]);
	for (i = 0; i < rackArray[turn].length; i++) {
		if (getTilePosition(i) != "") {
			emptyCell(getTilePosition(i));
		}
	}
	rackArray[turn] = a[2].split(".");
	tileBank = a[3].split("");
	a = a[4].split(".");
	var i = 0;
	for (var row = 1; row <= 15; ++row) {
		for (var col = 1; col <= 15; ++col) {
			var myPos = encodePos(col, row);
			if (a[i].length == 1) {
				multiplierArray[myPos] = "";
				placedArray[myPos] = a[i];
			} else {
				multiplierArray[myPos] = a[i]; // May be empty, or "2W", etc
				if (placedArray[myPos]) {
					emptyCell(myPos);
					placedArray[myPos] = "";
				}
			}
			++i;
		}
	}
	tilesRemaining = tileBank.length;
	selectedTile = -1;
	drawTileStorage();
	drawBoard();
}

function finalise() {
	var undoSavedNew = gameToString();
	var tilesPlayed = 0;
	touching = false;
	wordList.length = 0;
	var usedMultipliers = new Array(); // Temporary array of bonus squares used
	// in words

	if (!placedArray["c8r8"]) {
		for (var i = 0; i < rackArray[turn].length; i++) {
			if (getTilePosition(i) == "c8r8") {
				break;
			} else {
				if (i == rackArray[turn].length - 1) {
					alert("When starting, one of your tiles must be placed on the centre square.");

					return false;
				}
			}
		}
	}

	if (!checkPlaced()) {
		alert("You haven't placed any tiles.");

		return false;
	}

	if (!checkRow() && !checkColumn()) {
		alert("Tiles must be placed in a continuous horizontal or vertical line.");

		return false;
	}

	if (!checkWords()) {
		// Reset blanks.
		for (var i = 0; i < rackArray[turn].length; i++) {
			rackArray[turn][i] = rackArray[turn][i].replace(/[a-z],/, " ,");
		}
		return false;
	}
	for (var i = 0; i < rackArray[turn].length; i++) // Move used tiles from
	// rackArray to
	// placedArray
	{
		if (getTilePosition(i)) {
			placedArray[getTilePosition(i)] = getTileLabel(i);

			rackArray[turn][i] = "";
			tilesPlayed++;
		}
	}

	for (var i = 0; i < wordList.length; i++) // Remove duplicates from
	// wordList
	{
		for (var j = 0; j < wordList.length; j++) {
			if (wordList[i] == wordList[j] && i != j) {
				arrayRemoveItem(j, wordList);

				i = -1;
			}
		}
	}

	var allScores = new Array();
	allScores[0] = "";
	allScores[1] = "";
	allScores[2] = "";
	allScores[3] = "";

	var totalScore = new Array();
	totalScore[0] = 0;
	totalScore[1] = 0;
	totalScore[2] = 0;
	totalScore[3] = 0;

	for (var i = 0; i < wordList.length; i++) // Score each word
	{
		var fromTile = wordList[i].replace(/,.*/, "");
		var fromTileColumn = fromHex[fromTile.replace(/c(.*)r.*/, "$1")];
		var fromTileRow = fromHex[fromTile.replace(/c.*r/, "")];

		var toTile = wordList[i].replace(/^.*,/, "");
		var toTileColumn = fromHex[toTile.replace(/c(.*)r.*/, "$1")];
		var toTileRow = fromHex[toTile.replace(/c.*r/, "")];

		var displayScore = "";
		var displayWord = "";
		var subScore = 0;
		var wordMultiplier = 1;

		if (fromTileColumn == toTileColumn) // If word is vertically aligned
		{
			for (var j = fromTileRow; j <= toTileRow; j++) {
				currTile = encodePos(fromTileColumn, j);
				displayWord += placedArray[currTile];
				displayScore += "[";

				if (multiplierArray[currTile] == "2L") {
					subScore += tileScore[placedArray[currTile]] * 2;
					displayScore += "+" + tileScore[placedArray[currTile]]
							+ " x 2L";

					usedMultipliers[usedMultipliers.length] = currTile;
				} else if (multiplierArray[currTile] == "3L") {
					subScore += tileScore[placedArray[currTile]] * 3;
					displayScore += "+" + tileScore[placedArray[currTile]]
							+ " x 3L";

					usedMultipliers[usedMultipliers.length] = currTile;
				} else {
					subScore += tileScore[placedArray[currTile]];
					displayScore += "+" + tileScore[placedArray[currTile]];

					if (multiplierArray[currTile] == "2W") {
						wordMultiplier *= 2;

						usedMultipliers[usedMultipliers.length] = currTile;
					} else if (multiplierArray[currTile] == "3W") {
						wordMultiplier *= 3;

						usedMultipliers[usedMultipliers.length] = currTile;
					}
				}

				displayScore += "]   ";
			}
		} else {
			for (var j = fromTileColumn; j <= toTileColumn; j++) {
				currTile = encodePos(j, fromTileRow);
				displayWord += placedArray[currTile];
				displayScore += "[";
				var mult = multiplierArray[currTile];

				if (mult && mult.charAt(1) == "L") {
					subScore += tileScore[placedArray[currTile]]
							* parseInt(mult.charAt(0));
					displayScore += "+" + tileScore[placedArray[currTile]]
							+ " x " + mult;

					usedMultipliers[usedMultipliers.length] = currTile;
				} else {
					subScore += tileScore[placedArray[currTile]];
					displayScore += "+" + tileScore[placedArray[currTile]];

					if (mult && mult.charAt(1) == "W") {
						wordMultiplier *= parseInt(mult.charAt(0));

						usedMultipliers[usedMultipliers.length] = currTile;
					}
				}

				displayScore += "]   ";
			}
		}

		if (wordMultiplier > 1) {
			subScore *= wordMultiplier;
			displayScore = "(   " + displayScore + ")   x   " + wordMultiplier
					+ "   ";
		}

		displayScore += "=   " + subScore;
		if (subScore == 1) {
			displayScore += " point";
		} else {
			displayScore += " points";
		}
		displayScore = "Word score \"" + displayWord + "\":  " + displayScore;

		totalScore[turn] += subScore;

		allScores[turn] += displayScore + "\n";
	}

	// Bonus points for using all 7 tiles
	if (tilesPlayed == 7) {
		totalScore[turn] += 50;

		allScores[turn] += "You get a 50 point BONUS for using all 7 of your tiles!\n";
	}
	if (allScores[turn].match("\n.*\n")) {
		allScores[turn] += "Total score for this turn: " + totalScore[turn];
		if (totalScore[turn] == 1) {
			allScores[turn] += " point\n";
		} else {
			allScores[turn] += " points\n";
		}
	}
	if (totalScore[turn] > bestplay) {
		if (bestplay > 0)
			allScores[turn] += "This was your highest scoring turn ever!";
		setBestPlay(totalScore[turn]);
		bestplay = totalScore[turn];
	}

	alert(allScores[turn]);

	score[turn] += totalScore[turn];

	for (var i = 0; i < usedMultipliers.length; i++) // Remove bonuses from
	// used bonus tiles
	{
		multiplierArray[usedMultipliers[i]] = "";
	}

	swaps = 0;
	undoSaved = undoSavedNew;

	if (tilesRemaining > 0) {
		initTileStorage();
		drawTileStorage();
		drawBoard();
	} else {
		for (var i = 0; i < rackArray[turn].length; i++) {
			if (rackArray[turn][i] == "") {
				if (i == rackArray[turn].length - 1) {
					if (highscore > 0 && score[turn] > highscore) {
						alert("CONGRATULATIONS! You beat your highscore by finishing with a score of "
								+ score + " points.");
					} else {
						alert("CONGRATULATIONS! You finished with a score of "
								+ score[turn] + " points.");
					}
					if (score[turn] > highscore) {
						setHighScore(score[turn]);
						highscore = score[turn];
					}
				}
			} else {
				break;
			}
		}

		drawTileStorage();
		drawBoard();

	}
	hideRack();
	turnChange();
	drawTileStorage();
	drawHintLeft();

	return true;
}

function getTilePositionRow(tileID) {
	var thePosition = getTilePosition(tileID);

	return fromHex[thePosition.replace(/c.*r(.*)/, "$1")];
}

function getTilePositionColumn(tileID) {
	var thePosition = getTilePosition(tileID);

	return fromHex[thePosition.replace(/c(.*)r.*/, "$1")];
}

function getAdjacent(column, row, direction) {
	var theLabel = "";
	var theColumn = column;
	var theRow = row;
	var theDirection = direction;

	if (theDirection == "above") {
		wordMin = encodePos(column, row);
		theRow--;
	} else if (theDirection == "below") {
		wordMax = encodePos(column, row);
		theRow++;
	} else if (theDirection == "left") {
		wordMin = encodePos(column, row);
		theColumn--;
	} else if (theDirection == "right") {
		wordMax = encodePos(column, row);
		theColumn++;
	}

	var currLocation = encodePos(theColumn, theRow);

	if (placedArray[currLocation]) {
		touching = true;

		theLabel = placedArray[currLocation];
	} else {
		for (var i = 0; i < rackArray[turn].length; i++) {
			if (getTilePosition(i) == currLocation) {
				theLabel = getTileLabel(i);
			}
		}
	}

	if (theLabel) {
		if (theDirection == "above" || theDirection == "left") {
			wordHead = theLabel + wordHead;
		} else {
			wordTail += theLabel;
		}

		getAdjacent(theColumn, theRow, theDirection);

		return true;
	}

	return false;
}

function checkDictionary(theWord) {
	theWord = theWord.toLowerCase();

	{
		if (g_wordmap[theWord] == 1) {
			return true;
		} else {
			return false;
		}

	}

}

function checkWords() {
	var blanks = new Array;
	for (var i = 0; i < rackArray[turn].length; i++) {
		var thePos = getTilePosition(i);
		if (thePos && getTileLabel(i) == ' ') {
			blanks[blanks.length] = thePos + "," + i;
		}
	}
	if (blanks.length) {
		var theLabels;
		if (blanks.length == 1) {
			theLabels = prompt("What letter is the blank?");
		} else {
			blanks.sort(); // Expect blanks in left-right or top-bottom order
			theLabels = prompt("What letters are the blanks (in order from left to right or top to bottom)?");
		}
		if (!theLabels || theLabels.length != blanks.length)
			return false;
		for (var i = 0; i < blanks.length; i++) {
			var ch = theLabels.charAt(i).toLowerCase();
			if (ch < 'a' || ch > 'z')
				return false;
			var j = blanks[i];
			j = j.charAt(j.length - 1);
			rackArray[turn][j] = rackArray[turn][j].replace(/.*,/, ch + ",");
		}
	}
	for (var i = 0; i < rackArray[turn].length; i++) {
		var thePosition = getTilePosition(i);

		if (thePosition) {
			var theRow = getTilePositionRow(i);
			var theColumn = getTilePositionColumn(i);
			var theLabel = getTileLabel(i);

			wordHead = "";
			wordTail = "";

			getAdjacent(theColumn, theRow, "left");
			getAdjacent(theColumn, theRow, "right");

			if (wordHead != "" || wordTail != "") {
				if (!checkDictionary(wordHead + theLabel + wordTail)) {
					alert("\"" + wordHead + theLabel + wordTail
							+ "\" is not in the dictionary.");
					return false;
				}

				wordList[wordList.length] = wordMin + "," + wordMax;
			}

			wordHead = "";
			wordTail = "";

			getAdjacent(theColumn, theRow, "above");
			getAdjacent(theColumn, theRow, "below");

			if (wordHead != "" || wordTail != "") {
				if (!checkDictionary(wordHead + theLabel + wordTail)) {
					alert("\"" + wordHead + theLabel + wordTail
							+ "\" is not in the dictionary.");
					return false;
				}

				wordList[wordList.length] = wordMin + "," + wordMax;
			}
		}
	}

	if (placedArray["c8r8"] && !touching) {
		alert("At least one of your placed tiles must touch an existing tile.");

		return false;
	}

	return true;
}

function shuffle() {
	var copied = [ "", "", "", "", "", "", "" ];
	var coindex = [ "-1", "-1", "-1", "-1", "-1", "-1", "-1" ];
	var i = 0;
	var j = 0;

	for (i = 0; i < 7; i++) {
		coindex[i] = randomInt(7);

		for (j = 0; j < i; j++) {
			if (coindex[i] == coindex[j]) {
				i--;
				break;
			}
		}

	}

	for (i = 0; i < 7; i++) {
		copied[i] = rackArray[turn][coindex[i]];

	}

	for (i = 0; i < 7; i++) {
		rackArray[turn][i] = copied[i];
	}

	return drawTileStorage();
}

function getBestPlay() {
	return getCookie("sscrable_bestplay");
}

function getCookie(cookieName) {
	var theCookie = document.cookie;
	if (theCookie.match(new RegExp("(^|; )" + cookieName + "=([^;]*)")))
		return RegExp.$2;
	return 0;
}

function getHighScore() {
	return getCookie("sscrable_highscore");
}

function setBestPlay(value) {
	document.cookie = "sscrable_bestplay=" + value
			+ ";expires=Tue, 19-Jan-2038 03:14:07 GMT";
}

// USER NAME 받아오기

function getQuerystring(paramName) {
	var _tempUrl = window.location.search.substring(1); // url에서 처음부터 '?'까지 삭제
	var _tempArray = _tempUrl.split('&'); // '&'을 기준으로 분리하기
	for (var i = 0; _tempArray.length; i++) {
		var _keyValuePair = _tempArray[i].split('='); // '=' 을 기준으로 분리하기
		if (_keyValuePair[0] == paramName) { // _keyValuePair[0] : 파라미터 명
			// _keyValuePair[1] : 파라미터 값
			return _keyValuePair[1];
		}
	}
}

var player1N = getQuerystring("player1");
var player2N = getQuerystring("player2");
var player3N = getQuerystring("player3");
var player4N = getQuerystring("player4");

var playerNameArray = new Array(player1N, player2N, player3N, player4N);

function playerNum() {
	if (player3N == "" && player4N == "")
		return 2;
	else if (player4N == "")
		return 3;
	else {
		return 4;
	}
}

function pass() {
	if (gameStatus != 1) {
		hideRack();
		turnChange();
		drawTileStorage();
		drawHintLeft();
		var tmp = passCnt;
		passCnt = tmp + 1;
		if (passCnt == playerNum() * 2) {
			confirm("game finished");
			gameFinish();
		}
	}
}

function gameFinish() {
	var playernum = playerNum();

	for (var i = 0; i < playernum; i++) {
		addEntry(playerNameArray[i], score[i]);
	}

	gameStatus = 1;

	var whosTurn = 'turnbox' + turn;
	var turnbox = document.getElementById(whosTurn);
	turnbox.innerHTML = '';

	for (var i = 0; i < playerNum(); i++) {
		rackArray[i] = new Array("", "", "", "", "", "", "");
		var whosTime = 'timer' + turn;
		document.getElementById(whosTime).innerHTML = '';
	}
	
	drawTileStorage();

}

function addEntry(entryName, entryScore) {
	// Parse any JSON previously stored in allEntries
	var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
	if (existingEntries == null)
		existingEntries = [];

	var testObject2 = {
		'name' : entryName,
		'score' : entryScore
	};
	localStorage.setItem('testObject2', JSON.stringify(testObject2));

	existingEntries.push(testObject2);
	localStorage.setItem("allEntries", JSON.stringify(existingEntries));
};

function findHint() {
	var characterlist = rackArray[turn];
	characterlist.sort();
	var hintlist = [];

	var arr = findOccation();

	for (var i = 0; i < arr.length; i++) {
		var obj = {};
		for (var j = 0; j < arr[i].length; j++) {
			// console.log(arr[i][j]);
			var count = obj[characterlist[arr[i][j]][0]]
			if (isNaN(count)) {
				count = 0;
			}
			obj[characterlist[arr[i][j]][0]] = count + 1;
		}
		// console.log(obj);
		var s = "";

		for ( var j in obj) {
			s += j.toLowerCase();
			s += obj[j];
		}
		// console.log(s);
		// console.log(s, new_wordmap[s]);
		if (typeof (new_wordmap[s]) != 'undefined') {
			hintlist.push(new_wordmap[s]);
		}
	}
	// console.log(hintlist);

	var hint_content = document.getElementById("hint_content");
	var hint = ""
	for (var i = 0; i < hintlist.length; i++) {
		hint += hintlist[i] + "   ";
	}
	hint_content.innerHTML = hint;
}

function findOccation() {
	var characterlist = rackArray[turn];
	var len = characterlist.length;
	var arr = [];

	for (var i = 0; i < len; i++) {
		for (var j = i + 1; j < len; j++) {
			for (var k = j + 1; k < len; k++) {
				arr.push([ i, j, k ]);
			}
		}
	}
	for (var i = 0; i < len; i++) {
		for (var j = i + 1; j < len; j++) {
			for (var k = j + 1; k < len; k++) {
				for (var l = k + 1; l < len; l++) {
					arr.push([ i, j, k, l ]);
				}
			}
		}
	}
	// console.log(arr);
	return arr;
}

function drawHintLeft() {
	var str = "HINT : " + hint_left[turn];
	var hint_text = document.getElementById("hint_text");
	hint_text.innerHTML = str;
}

function decreaseHint() {
	hint_left[turn]--;
	drawHintLeft();
}

