// Mistakes into Miracles
window.onload = function(){
	game = new Phaser.Game(1000, 800, Phaser.AUTO);
//add states
	game.state.add("Preloader", Preloader);
	game.state.add("Mainmenu", Mainmenu);
	game.state.add("StatTraining", StatTraining);
	game.state.add("DateNight", DateNight);
	game.state.add("Gameover",Gameover);
	game.state.start("Preloader");
}
var Preloader={
	preload: function() { // preload assets
		console.log('Preloader: preload');
		this.load.path = "assets/sprites/";
		this.load.atlas("atlas","spritesheet.png","sprites.json");
		this.load.image("elephant","legfaceman.png");
		this.load.image("gorilla","handfeetman.png");
		this.load.image("snake","windyman.png");
		this.load.image("sudan","sudan.png");
		this.state.start("Mainmenu");
	},
	create: function() {
		console.log('Preloader: create');
		game.state.start('Mainmenu');
	}
};
var Mainmenu={
	create: function(){ //creates everything needed for main menu
		console.log('Mainmenu: create');
		var startbutton = game.add.button(game.world.centerX/2, 50, "atlas", this.start, this, "jumping", "idle1", "damaged"); //add button
		this.add.text(150,game.world.height/2,"Click the funny little man to start",{fontSize: "32px", fill: "white" });
	},
	start: function(){ //changes state when the button is pressed
		console.log('Mainmenu: start');
		this.state.start("StatTraining");
	}
};
var StatTraining={
	create: function(){ //creates everything needed for the current main game state
		console.log("StatTraining: create");
		var elephantbutton = game.add.button(700, 0, "elephant", function(){elephantcount++;day++;}, this); //buttons increase scores/days when pressed
		elephantbutton.scale.setTo(.5,.5);
		var snakebutton = game.add.button(700, 200, "snake", function(){snakecount++;day++;}, this);
		snakebutton.scale.setTo(.5,.5);
		var gorillabutton = game.add.button(700, 500, "gorilla", function(){gorillacount++;day++;}, this);
		gorillabutton.scale.setTo(.25,.25);
		var sudansprite = game.add.sprite(300,300,"sudan");
		sudansprite.scale.setTo(.5,.5);

		this.elephanttext=game.add.text(50, 50, "Leg face man points: 0", { fontSize: '32px', fill: 'white' }); //displays each stat
		this.snaketext=game.add.text(50, 250, "Long mover points: 0", { fontSize: '32px', fill: 'white' });
		this.gorillatext=game.add.text(50, 550, "Small hands frenchman points: 0", { fontSize: '32px', fill: 'white' });
		this.daytext=game.add.text(game.world.width/2, 600, "Day: 0", { fontSize: '32px', fill: 'white' });

	},
	update: function(){
		this.elephanttext.text="Leg face man points: "+elephantcount; //updates each text object
		this.snaketext.text="Long mover points: "+snakecount;
		this.gorillatext.text="Small hands frenchman points: "+gorillacount;
		this.daytext.text="Day: "+day;
	}
};
var DateNight={
	create: function(){ //creates everything needed for the current main game state
		console.log("DateNight: create");
		
	},
	update: function(){
		
	}
};
var Gameover={
	create: function(){ //creates everything needed for the current gameover state
		console.log("Gameover: create");
	},
	restart: function(){  //returns to main menu when a TBD button is pressed
		console.log("Gameover: restart");
		game.state.start("Mainmenu");
	}
};

//initialize game
var game;
var day=0;
var snakecount=0;
var gorillacount=0;
var elephantcount=0;