//사용자 Rack

var rackArray = new Array();
tmp = new Array("", "", "", "", "", "", "");	// Array of tiles player can place
rackArray.push(tmp);
rackArray.push(tmp);
rackArray.push(tmp);
rackArray.push(tmp); // 또는 그냥 젤 위에서 다 때려 박으면 됨

var placedArray = new Array();
//var rackArray = new Array("", "", "", "", "", "", "");

var tileScore = new Array();	// Array of scores for letters
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

var multiplierArray = new Array(); // Array of square positions that multiply scores
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
var toHex = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");


var tileBank = new Array("A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H", "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L", "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R", "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z", " ", " ");	// The tiles which may be given to the player
var tilesRemaining = tileBank.length;	// Number of tiles remaining that may be given to a player

var selectedTile = -1;	// Index of tile in rackArray that has been clicked on (selected)

var wordHead = "";	// Head of the word that is currently being scanned
var wordTail = "";	// Tail of the word that is currently being scanned
var wordMin = "";	// Location of the first letter of a word
var wordMax = "";	// Location of the last letter of a word
var wordList = new Array();	// Array of words placed on the board

initTileStorage();	// Randomly pick player's first tiles

/*
function initTileStorage(){
	for(var i = 0 ; i < 4 ; i++ ){
		var tiles = 0;
		for (var j = 0; j < rackArray.length && tilesRemaining > 0; j++){
			if (rackArray[i][j] == ""){
				var randomTile = randomInt(tileBank.length);
				rackArray[i][j] = tileBank[randomTile] + ",";
				arrayRemoveItem(randomTile, tileBank);

				tilesRemaining = tileBank.length;
			}
			tiles++;
		}
	}
	return true;
}
*/

function initTileStorage()
{
	var tiles = 0;
	for (var i = 0; i < rackArray[0].length && tiles < 6 && tilesRemaining > 0; i++)
	{
		if (rackArray[0][i] != "") ++tiles;
	}

	for (var i = 0; i < rackArray[0].length && tiles < 6 && tilesRemaining > 0; i++)
	{
		if (rackArray[0][i] == "")
		{
			var randomTile = randomInt(tileBank.length);
			rackArray[0][i] = tileBank[randomTile] + ",";
			arrayRemoveItem(randomTile, tileBank);

			tilesRemaining = tileBank.length;
			++tiles;
		}
	}
	return true;
}



function randomInt(N){
	return (N * (Math.random() % 1)) | 0;
	
	
}


function getTileLabel(tileID)
{
	return rackArray[0][tileID].replace(/,.*/, ""); //임시로 [0]
}

function getTilePosition(tileID)
{
	return rackArray[0][tileID].replace(/.*,/, ""); //임시로 [0]
}

function selectTile(tileID)
{
	// Clicking a selected tile returns it to the rack.
	if (tileID == selectedTile)
	{
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
	if (multiplierArray[theLocation] && theLocation != "c8r8")
	{
		multiplyLabel = multiplierArray[theLocation];
	}
	if (multiplyLabel == "") {
		theCell.innerHTML = '<a class="empty" href="#" onclick="placeTile(\'' + theLocation + '\')\; return false\;"><img src="./img/BoardTile.png" class="image"><span>' + multiplyLabel + '</span></a>';
	}
	
	else {
		theCell.innerHTML = '<a class="empty" href="#" onclick="placeTile(\'' + theLocation + '\')\; return false\;"><img src="./img/' + multiplyLabel +  '.png" class="image">';
	}
	
}


function placeTile(boardCell)
{
	if (selectedTile != -1)
	{
		var tileLabel = getTileLabel(selectedTile);
		var tilePosition = getTilePosition(selectedTile);

		if (tilePosition)
		{
			emptyCell(tilePosition);
		}
		
		rackArray[0][selectedTile] = tileLabel + "," + boardCell;
		
		var theCell = document.getElementById(boardCell);
	
		theCell.innerHTML = '<a id="tile' + selectedTile + '" class="tile placed" href="#" onclick="selectTile(' + selectedTile + ')\; return false\;"><img src="./img/BoardTile.png" class="image">' + tileHtml(tileLabel) + '</a>';
		
		selectedTile = -1;
		
		if (!tilePosition)
		{
			drawTileStorage();
		}
	}
	
	return true;
}

function tileHtml(tileLabel)
{
	if (tileLabel == ' ') return "";
	var theScore = tileScore[tileLabel];
	if (theScore == 0) return '<span class="blank">' + tileLabel.toUpperCase() + '<span class="score">0</span></span>';
	//if (theScore == 0) return '<p class="text">' + tileLabel.toUpperCase() + '</p>';
	return tileLabel + '<span class="score">' + theScore + '</span>';
	//return '<p class="text">' + tileLabel + '</p>';
}

function drawTileStorage()	
{
	for (i = 0; i < rackArray[0].length; i++) // 1명이 플레이할때
	{
		var theStore = document.getElementById("tileStorage" + i);
		var tileLabel = getTileLabel(i);
		var tilePosition = getTilePosition(i);
		
		if (!tilePosition)
		{
			if (tileLabel == "")
			{
				theStore.innerHTML = '<a class="empty" href="#" onclick="returnTile(' + i + ')\; return false\;"></a>';
				//theStore.innerHTML = '<p class="text">HINT : 3</p>';
			}
			else
			{
				theStore.innerHTML = '<a id="tile' + i + '" class="tile" href="#" onclick="selectTile(' + i + ')\; return false\;">' + tileHtml(tileLabel) + '</a>';
				//theStore.innerHTML = '<p class="text">HINT : 3</p>';
			}
		}
		else
		{
			var theCell = document.getElementById(tilePosition);

			//theCell.innerHTML = '<a href="#" onclick="returnTile(' + i + ')\;>dd</a>';
			theCell.innerHTML = '<a id="tile' + i + '" class="tile placed" href="#" onclick="selectTile(' + i + ')\; return false\;">' + tileHtml(tileLabel) + '</a>';
			theStore.innerHTML = '<a class="empty" href="#" onclick="returnTile(' + i + ')\; return false\;"></a>';
		}
	}
	
	var theStats = document.getElementById("stats");
	
	//var stats = "Tiles remaining: " + tilesRemaining + " | Current score: " + score;
	//if (highscore > 0) stats += " | High score: " + highscore;
	//if (bestplay > 0) stats += " | Best play: " + bestplay;
	//theStats.innerHTML = stats;
	
	return true;
}

function returnTile(rackPos)
{
	if (selectedTile != -1)
	{
		var tileLabel = getTileLabel(selectedTile);
		var tilePosition = getTilePosition(selectedTile);
	
		if (rackPos == -1) {
			rackPos = selectedTile;
			for (var i = 0; i < rackArray[0].length; ++i)
			{
				if (getTilePosition(i) != "") {
					rackPos = i;
					break;
				}
			}
		}

		if (tilePosition) emptyCell(tilePosition);

		if (rackPos != selectedTile) {
			rackArray[0][selectedTile] = rackArray[0][rackPos];
		}
		rackArray[0][rackPos] = tileLabel + ",";

		drawTileStorage();

		selectedTile = -1;
	}
}

function encodePos(column, row)
{
	return "c" + toHex[column] + "r" + toHex[row];
}

function arrayRemoveItem(itemID, theArray)
{
	if (itemID < theArray.length)
	{
		for (i = itemID; i + 1 < theArray.length; ++i)
		{
			theArray[i] = theArray[i + 1];
		}

		theArray.length -= 1;
	}
	
	return true;
}