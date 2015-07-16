window.onkeyup = function(e) {
   e.preventDefault();
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
   if(change){
	if(this.grid.finish==0){
   		this.grid.randbox();
   		this.grid.print();
	}
	return false;
   }
}

function NewGame(){
	this.grid = new Grid(4);
	this.grid.randbox();
   	this.grid.print();
}
