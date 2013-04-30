document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) { moveLeft(); }
    else if(event.keyCode == 39) { moveRight(); }
	else if(event.keyCode == 38) { moveUp(); }
	else if(event.keyCode == 40) { moveDown(); }
});

var puzzle = new Array();
puzzle[0]="0";   puzzle[1]="1";   puzzle[2]="2"; puzzle[3]="3";
puzzle[4]="4";   puzzle[5]="5";   puzzle[6]="6";   puzzle[7]="7";
puzzle[8]="8";   puzzle[9]="9";  puzzle[10]="A"; puzzle[11]="B";
puzzle[12]="C"; puzzle[13]="D"; puzzle[14]="E"; puzzle[15]="X";

var copy = puzzle.slice();

function findEmpty() {
	for(var i=0; i < puzzle.length; ++i) {
		if(puzzle[i]=="X") {return i;}
	}
}

function isCorrect() {
	var count=0;
	for(var i=0; i < puzzle.length; ++i) {
		if(puzzle[i]==copy[i]) {++count;}
	}
	return count;
}

function showEmpty() {
	var x = findEmpty();
	alert(+x);
}

var empty = findEmpty(); // index of empty slot

function concat() {
	var output = puzzle[0]+" "+ puzzle[1]+" "+ puzzle[2]+" "+ puzzle[3]+"</br>"+
	puzzle[4]+" "+puzzle[5]+" "+puzzle[6]+" "+puzzle[7]+"</br>"+
	puzzle[8]+" "+puzzle[9]+" "+puzzle[10]+" "+puzzle[11]+"</br>"+
	puzzle[12]+" "+puzzle[13]+" "+puzzle[14]+" "+puzzle[15]+"</br>";
	return output;
}

function myFunction() {
	var x=document.getElementById("demo");
	var temp = concat();
	x.innerHTML=temp;
	var v = isCorrect();
	if(v==16) { alert("nice job");}
}

function moveLeft() {
	if(empty!=3 && empty!=7 && empty!=11 && empty!=15){
		var temp = puzzle[empty+1];
		puzzle[empty+1] = "X";
		puzzle[empty] = temp;
		empty++;
		myFunction();
	}
}

function moveRight() {
	if(empty!=0 && empty!=4 && empty!=8 && empty!=12){
		var temp = puzzle[empty-1];
		puzzle[empty-1] = "X";
		puzzle[empty] = temp;
		empty--;
		myFunction();
	}
}

function moveUp() {
	if(empty!=12 && empty!=13 && empty!=14 && empty!=15 ){
		var temp = puzzle[empty+4];
		puzzle[empty+4] = "X";
		puzzle[empty] = temp;
		empty+=4;
		myFunction();
	}
}

function moveDown() {
	if(empty!=0 && empty!=1 && empty!=2 && empty!=3 ){
		var temp = puzzle[empty-4];
		puzzle[empty-4] = "X";
		puzzle[empty] = temp;
		empty-=4;
		myFunction();
	}
}

function shuffle() {
	for(var i=0; i < 100; ++i) {
		var rand = Math.floor(Math.random()*4); 
		if(rand==0){moveLeft();}
		else if(rand==1){moveRight();}
		else if(rand==2){moveUp();}
		else{moveDown();}
	}
	myFunction();
}