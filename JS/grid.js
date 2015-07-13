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
		this.color(curentBox, this.Board[i][j].value);
		if(this.Board[i][j].value!=0)
			document.getElementById(curentBox).innerHTML = this.Board[i][j].value;
		else
			document.getElementById(curentBox).innerHTML = "";
	    }
	  }
}

Grid.prototype.color = function(curentBox, value){
	if(value == 0){
		document.getElementById(curentBox).style.backgroundcolor= 'rgba(159, 129, 163, 0.2)';
    		document.getElementById(curentBox).style.background= 'rgba(159, 129, 163, 0.2)';
	}
	else if(value == 2){
		document.getElementById(curentBox).style.backgroundcolor = 'rgba(183, 77, 110, 0.6)';
		document.getElementById(curentBox).style.background = 'rgba(183, 77, 110, 0.6)';
	}
	else if(value == 4){
		document.getElementById(curentBox).style.backgroundcolor= 'rgba(183, 237, 110, 0.6)';
		document.getElementById(curentBox).style.background= 'rgba(183, 237, 110, 0.6)';
	}
	else if(value == 8){
		document.getElementById(curentBox).style.backgroundcolor= 'rgba(183, 54, 220, 0.6)';
		document.getElementById(curentBox).style.background= 'rgba(183, 54, 220, 0.6)';
	}
	else if(value == 16){
		document.getElementById(curentBox).style.backgroundcolor= 'rgba(69, 150, 237, 0.6)';
		document.getElementById(curentBox).style.background= 'rgba(69, 150, 237, 0.6)';
	}
	else if(value == 32){
		document.getElementById(curentBox).style.backgroundcolor= 'rgba(23, 38, 60, 0.6)';
		document.getElementById(curentBox).style.background= 'rgba(23, 38, 60, 0.6)';
	}
	else if(value == 64){
		document.getElementById(curentBox).style.backgroundcolor= 'rgba(159, 129, 69, 0.9)';
		document.getElementById(curentBox).style.background= 'rgba(159, 129, 69, 0.9)';
	}
	else if(value == 128){
		document.getElementById(curentBox).style.backgroundcolor= 'rgba(0, 44, 236, 0.7)';
		document.getElementById(curentBox).style.background= 'rgba(0, 44, 236, 0.7)';
	}
	else if(value == 256){
		document.getElementById(curentBox).style.backgroundcolor= 'rgba(0, 65, 36, 0.9)';
		document.getElementById(curentBox).style.background= 'rgba(0, 65, 36, 0.9)';
	}
	else if(value == 512){
		document.getElementById(curentBox).style.backgroundcolor= 'rgba(255, 170, 66, 0.7)';
		document.getElementById(curentBox).style.background= 'rgba(255, 170, 66, 0.7)';
	}
	else if(value == 1024){
		document.getElementById(curentBox).style.backgroundcolor= 'rgba(186, 185, 240, 0.6)';
		document.getElementById(curentBox).style.background= 'rgba(186, 185, 240, 0.6)';
	}
	else if(value == 2048){
		document.getElementById(curentBox).style.backgroundcolor= 'rgba(210, 255, 212, 0.8)';
		document.getElementById(curentBox).style.background= 'rgba(210, 255, 212, 0.8)';
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
	var rand2 = Math.floor((Math.random() * 1000) + 1);
	var v = 2;
	if(rand2 % 7 == 0)
		v = 4;
	this.Board[vec[rand].x][vec[rand].y].value = v;
	return true;
}

Grid.prototype.up = function(){
	var change = false;
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
						change = true;			
					}
					else if(this.Board[i][j].value == tile.value){
						this.Board[tile.x][tile.y].value *= 2;	
						this.Board[i][j].value = 0;
						cond = true;	
						change = true;			
					}
					else if(i != tile.x+1){
						this.Board[tile.x+1][tile.y].value = this.Board[i][j].value;
						this.Board[i][j].value = 0;
						tile = this.Board[tile.x+1][tile.y];
						change = true;
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
					change = true;
				}
			}
			else if(this.Board[i][j].value>0 && i==0){
				tile = this.Board[i][j];	
			}
		}
	}
	return change;
}

Grid.prototype.down = function(){
	var change = false;
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
						change = true;			
					}
					else if(this.Board[i][j].value == tile.value){
						this.Board[tile.x][tile.y].value *= 2;	
						this.Board[i][j].value = 0;
						cond = true;	
						change = true;			
					}
					else if(i != tile.x-1){
						this.Board[tile.x-1][tile.y].value = this.Board[i][j].value;
						this.Board[i][j].value = 0;
						tile = this.Board[tile.x-1][tile.y];
						change = true;
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
					change = true;
				}
			}
			else if(this.Board[i][j].value>0 && i==this.size-1){
				tile = this.Board[i][j];	
			}
		}
	}
	return change;
}

Grid.prototype.left = function(){
	var change = false;
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
						change = true;			
					}
					else if(this.Board[i][j].value == tile.value){
						this.Board[tile.x][tile.y].value *= 2;	
						this.Board[i][j].value = 0;
						cond = true; change = true;			
					}
					else if(j != tile.y+1){
						this.Board[tile.x][tile.y+1].value = this.Board[i][j].value;
						this.Board[i][j].value = 0;
						tile = this.Board[tile.x][tile.y+1];
						change = true;
					}

					else if(j == tile.y+1){
						tile = this.Board[i][j];
					}
				}
				else if(j != tile.y+1){
					this.Board[tile.x][tile.y+1].value = this.Board[i][j].value;
					this.Board[i][j].value = 0;
					tile = this.Board[tile.x][tile.y+1];
					cond = false;
					change = true;
				}
			}
			else if(this.Board[i][j].value>0 && j==0){
				tile = this.Board[i][j];	
			}
		}
	}
	return change;
}

Grid.prototype.right = function(){
	var change = false;
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
						change = true;			
					}
					else if(this.Board[i][j].value == tile.value){
						this.Board[tile.x][tile.y].value *= 2;	
						this.Board[i][j].value = 0;
						cond = true;	 change = true;			
					}
					else if(j != tile.y-1){
						this.Board[tile.x][tile.y-1].value = this.Board[i][j].value;
						this.Board[i][j].value = 0;
						tile = this.Board[tile.x][tile.y-1];
						change = true;
					}

					else if(j == tile.y-1){
						tile = this.Board[i][j];
					}
				}
				else if(j != tile.y-1){
					this.Board[tile.x][tile.y-1].value = this.Board[i][j].value;
					this.Board[i][j].value = 0;
					tile = this.Board[tile.x][tile.y-1];
					cond = false; change = true;
				}
			}
			else if(this.Board[i][j].value>0 && j==this.size-1){
				tile = this.Board[i][j];	
			}
		}
	}
	return change;
}
