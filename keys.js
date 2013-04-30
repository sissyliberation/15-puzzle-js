document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) { moveLeft(); }
    else if(event.keyCode == 39) { moveRight(); }
	else if(event.keyCode == 38) { moveUp(); }
	else if(event.keyCode == 40) { moveDown(); }
});

var puzzle = new Array();
puzzle[0]="0";   puzzle[1]="1";  puzzle[2]="2";  puzzle[3]="3";
puzzle[4]="4";   puzzle[5]="5";  puzzle[6]="6";  puzzle[7]="7";
puzzle[8]="8";   puzzle[9]="9"; puzzle[10]="A"; puzzle[11]="B";
puzzle[12]="C"; puzzle[13]="D"; puzzle[14]="E"; puzzle[15]="_";

var copy = puzzle.slice();

function findEmpty() {
	for(var i=0; i < puzzle.length; ++i) {
		if(puzzle[i]=="_") {return i;}
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
	
	/*
	var v = isCorrect();
	if(v==16) { alert("nice job");} */
	
	
	var a0=document.getElementById("a0"); a0.innerHTML="<h1>"+ puzzle[0]+"</h1>";
	var a1=document.getElementById("a1"); a1.innerHTML="<h1>"+ puzzle[1]+"</h1>";
	var a2=document.getElementById("a2"); a2.innerHTML="<h1>"+ puzzle[2]+"</h1>";
	var a3=document.getElementById("a3"); a3.innerHTML="<h1>"+ puzzle[3]+"</h1>";
	
	var b0=document.getElementById("b0"); b0.innerHTML="<h1>"+ puzzle[4]+"</h1>";
	var b1=document.getElementById("b1"); b1.innerHTML="<h1>"+ puzzle[5]+"</h1>";
	var b2=document.getElementById("b2"); b2.innerHTML="<h1>"+ puzzle[6]+"</h1>";
	var b3=document.getElementById("b3"); b3.innerHTML="<h1>"+ puzzle[7]+"</h1>";
	
	var c0=document.getElementById("c0"); c0.innerHTML="<h1>"+ puzzle[8]+"</h1>";
	var c1=document.getElementById("c1"); c1.innerHTML="<h1>"+ puzzle[9]+"</h1>";
	var c2=document.getElementById("c2"); c2.innerHTML="<h1>"+ puzzle[10]+"</h1>";
	var c3=document.getElementById("c3"); c3.innerHTML="<h1>"+ puzzle[11]+"</h1>";
	
	var d0=document.getElementById("d0"); d0.innerHTML="<h1>"+ puzzle[12]+"</h1>";
	var d1=document.getElementById("d1"); d1.innerHTML="<h1>"+ puzzle[13]+"</h1>";
	var d2=document.getElementById("d2"); d2.innerHTML="<h1>"+ puzzle[14]+"</h1>";
	var d3=document.getElementById("d3"); d3.innerHTML="<h1>"+ puzzle[15]+"</h1>";
}

function moveLeft() {
	if(empty!=3 && empty!=7 && empty!=11 && empty!=15){
		var temp = puzzle[empty+1];
		puzzle[empty+1] = "_";
		puzzle[empty] = temp;
		empty++;
		myFunction();
	}
}

function moveRight() {
	if(empty!=0 && empty!=4 && empty!=8 && empty!=12){
		var temp = puzzle[empty-1];
		puzzle[empty-1] = "_";
		puzzle[empty] = temp;
		empty--;
		myFunction();
	}
}

function moveUp() {
	if(empty!=12 && empty!=13 && empty!=14 && empty!=15 ){
		var temp = puzzle[empty+4];
		puzzle[empty+4] = "_";
		puzzle[empty] = temp;
		empty+=4;
		myFunction();
	}
}

function moveDown() {
	if(empty!=0 && empty!=1 && empty!=2 && empty!=3 ){
		var temp = puzzle[empty-4];
		puzzle[empty-4] = "_";
		puzzle[empty] = temp;
		empty-=4;
		myFunction();
	}
}

function shuffle() {
	for(var i=0; i < 500; ++i) {
		var rand = Math.floor(Math.random()*4); 
		if(rand==0){moveLeft();}
		else if(rand==1){moveRight();}
		else if(rand==2){moveUp();}
		else{moveDown();}
	}
	myFunction();
}