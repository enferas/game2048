window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if(key == 37)
	this.grid.left();
   else if(key == 38) 
	this.grid.up();
   else if(key == 39)
	this.grid.right();
   else if(key == 40)
	this.grid.down();
   else if(key == 32)
	this.grid = new Grid(4);
   this.grid.randbox();
   this.grid.print();

}
 


