class Game {
  constructor(){

  }
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide()
    textSize(31);
    text("the race has begun all the best",120,100);
    Player.getplayerinfo();
    if(allPlayers!==undefined){
       var displaypos = 131;
       for(var plr in allPlayers){
         if(plr==="player"+player.index){
           fill ("red");
         }else{
           fill(0);
         }
         displaypos = displaypos+24;
         textSize(15);
         text(allPlayers[plr].name+":"+allPlayers[plr].distance,130,displaypos);
        }
    }
    if (keyIsDown(UP_ARROW)&&player.index !==null){
      player.distance = player.distance + 20;
      player.update();
    }
  }
}
