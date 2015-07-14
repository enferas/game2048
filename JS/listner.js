window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

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
   else if(key == 32){
	this.grid = new Grid(4);
	change = true;
	}
   if(change){
   	this.grid.randbox();
   	this.grid.print();
	}
}
