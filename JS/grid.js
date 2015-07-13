function Grid(size) {
  this.size = size;
  this.Board = [];

	for (var i = 0; i < this.size; i++) {
	    var row = this.Board[i] = [];

	    for (var j = 0; j < this.size; j++) {
		var tile = new Tile(i,j,0);
	      	this.Board[i].push(tile);
	    }
	  }
  return this;
}

Grid.prototype.print = function(){
	for (var i = 0; i < this.size; i++) {
	    for (var j = 0; j < grid.size; j++) {
		var curentBox = "Box"+(i+1).toString()+(j+1).toString();
		document.getElementById(curentBox).innerHTML = this.Board[i][j].value;
	    }
	  }
}

Grid.prototype.randbox = function(){
	var vec = [];
	var count = 0;
	for(var i=0;i<this.size;i++){
		for(var j=0;j<this.size;j++){
			if(this.Board[i][j].value==0){
				vec.push(this.Board[i][j]);
				count++;
			}
		}	
	}
	if(count==0)
		return false;
	var rand = Math.floor((Math.random() * 1000) + 1) % count;
	this.Board[vec[rand].x][vec[rand].y].value = 2;
	return true;
}

Grid.prototype.up = function(){
	for(var j=0;j<this.size;j++){
		var tile = null;
		var cond = false;
		for(var i=0;i<this.size;i++){
			if(this.Board[i][j].value>0 && i>0){
				if(!cond){
					if(tile==null){
						this.Board[0][j].value = this.Board[i][j].value;
						this.Board[i][j].value = 0;
						tile = this.Board[0][j];			
					}
					else if(this.Board[i][j].value == tile.value){
						this.Board[tile.x][tile.y].value *= 2;	
						this.Board[i][j].value = 0;
						cond = true;				
					}
					else if(i != tile.x+1){
						this.Board[tile.x+1][tile.y].value = this.Board[i][j].value;
						this.Board[i][j].value = 0;
						tile = this.Board[tile.x+1][tile.y];
					}

					else if(i == tile.x+1){
						tile = this.Board[i][j];
					}
				}
				else if(i != tile.x+1){
					this.Board[tile.x+1][tile.y].value = this.Board[i][j].value;
					this.Board[i][j].value = 0;
					tile = this.Board[tile.x+1][tile.y];
					cond = false;
				}
			}
			else if(this.Board[i][j].value>0 && i==0){
				tile = this.Board[i][j];	
			}
		}
	}
}

Grid.prototype.down = function(){
	for(var j=0;j<this.size;j++){
		var tile = null;
		var cond = false;
		for(var i=this.size-1;i>=0;i--){
			if(this.Board[i][j].value>0 && i<this.size-1){
				if(!cond){
					if(tile==null){
						this.Board[this.size-1][j].value = this.Board[i][j].value;
						this.Board[i][j].value = 0;
						tile = this.Board[this.size-1][j];			
					}
					else if(this.Board[i][j].value == tile.value){
						this.Board[tile.x][tile.y].value *= 2;	
						this.Board[i][j].value = 0;
						cond = true;				
					}
					else if(i != tile.x-1){
						this.Board[tile.x-1][tile.y].value = this.Board[i][j].value;
						this.Board[i][j].value = 0;
						tile = this.Board[tile.x-1][tile.y];
					}

					else if(i == tile.x-1){
						tile = this.Board[i][j];
					}
				}
				else if(i != tile.x-1){
					this.Board[tile.x-1][tile.y].value = this.Board[i][j].value;
					this.Board[i][j].value = 0;
					tile = this.Board[tile.x-1][tile.y];
					cond = false;
				}
			}
			else if(this.Board[i][j].value>0 && i==this.size-1){
				tile = this.Board[i][j];	
			}
		}
	}
}

Grid.prototype.left = function(){
	for(var i=0;i<this.size;i++){	
		var tile = null;
		var cond = false;
		for(var j=0;j<this.size;j++){
			if(this.Board[i][j].value>0 && j>0){
				if(!cond){
					if(tile==null){
						this.Board[i][0].value = this.Board[i][j].value;
						this.Board[i][j].value = 0;
						tile = this.Board[i][0];			
					}
					else if(this.Board[i][j].value == tile.value){
						this.Board[tile.x][tile.y].value *= 2;	
						this.Board[i][j].value = 0;
						cond = true;				
					}
					else if(j != tile.y+1){
						this.Board[tile.x][tile.y+1].value = this.Board[i][j].value;
						this.Board[i][j].value = 0;
						tile = this.Board[tile.x][tile.y+1];
					}

					else if(j == tile.y+1){
						tile = this.Board[i][j];
					}
				}
				else if(i != tile.y+1){
					this.Board[tile.x][tile.y+1].value = this.Board[i][j].value;
					this.Board[i][j].value = 0;
					tile = this.Board[tile.x][tile.y+1];
					cond = false;
				}
			}
			else if(this.Board[i][j].value>0 && j==0){
				tile = this.Board[i][j];	
			}
		}
	}
}

Grid.prototype.right = function(){
	for(var i=0;i<this.size;i++){	
		var tile = null;
		var cond = false;
		for(var j=this.size-1;j>=0;j--){
			if(this.Board[i][j].value>0 && j<this.size-1){
				if(!cond){
					if(tile==null){
						this.Board[i][this.size-1].value = this.Board[i][j].value;
						this.Board[i][j].value = 0;
						tile = this.Board[i][this.size-1];			
					}
					else if(this.Board[i][j].value == tile.value){
						this.Board[tile.x][tile.y].value *= 2;	
						this.Board[i][j].value = 0;
						cond = true;				
					}
					else if(j != tile.y-1){
						this.Board[tile.x][tile.y-1].value = this.Board[i][j].value;
						this.Board[i][j].value = 0;
						tile = this.Board[tile.x][tile.y-1];
					}

					else if(j == tile.y-1){
						tile = this.Board[i][j];
					}
				}
				else if(i != tile.y-1){
					this.Board[tile.x][tile.y-1].value = this.Board[i][j].value;
					this.Board[i][j].value = 0;
					tile = this.Board[tile.x][tile.y-1];
					cond = false;
				}
			}
			else if(this.Board[i][j].value>0 && j==this.size-1){
				tile = this.Board[i][j];	
			}
		}
	}
}
