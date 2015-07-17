window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;


   if(this.grid==null || this.grid.finish == 1 || this.grid.finish == 2)
	return false;
   var change = false;
   if(key == 37){
	if(this.grid.left())
		change = true;
   }
   else if(key == 38){ 
	if(this.grid.up())
		change = true;
   }
   else if(key == 39){
	if(this.grid.right())
		change = true;
   }
   else if(key == 40){
	if(this.grid.down())
		change = true;
   }
   if(change){
	if(this.grid.finish==0){
   		this.grid.randbox();
   		this.grid.print();

		this.grid.gameover();
		if(this.grid.finish == 2){
			document.getElementById("game").innerHTML = 'Game Over. Prees new game to play again.';
			document.getElementById("game").style.visibility = 'visible';
			window.confirm("Game Over. Press New Game to play again");
			return;
		}
	}
	else if(this.grid.finish==1){
		document.getElementById("game").innerHTML = 'YOU WIN. Press New Game to play again.';
		document.getElementById("game").style.visibility = 'visible';		
		window.confirm("YOU WIN. Press New Game to play again");
		return;
	}
   }

    if(e.keyCode == 40 && e.target == document.body) {
        e.preventDefault();
        return false;
    }
}

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

function NewGame(){

	this.grid = new Grid(4);
	this.grid.randbox();
   	this.grid.print();	
	document.getElementById("game").style.visibility = 'hidden';
}

