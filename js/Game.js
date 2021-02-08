class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
           player1 = createSprite(200,500);
                player1.addImage("player1",basketImg);
                
                player2 = createSprite(800,500);
                player2.addImage("player2", basketImg);
                players=[player1,player2];
        }
      
    play(){
        
        form.hide();

        Player.getPlayerInfo();
        image(backgroundImg, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        drawSprites();

        if (gameState===1){
            noStroke();
        textSize(35)
        fill("white")
        //text("player1: " + score, width-100, 50)
        //text("player2: " + score, width-100, 100)
             if (keyIsDown(RIGHT_ARROW)&&player.index!==null) {
             player.distance -=10
             player.update();
             }
          if (keyIsDown(LEFT_ARROW)&&player.index!==null) {
             player.distance +=10
             player.update();
             }
               


        }

        for(var plr in allPlayers){
        
            index = index+1;
            x = 500-allPlayers[plr].distance;
            y=500;
            
            players[index -1].x = x;
            players[index - 1].y = y;

            if (index===player.index) {
                fill("black");
                textSize(25);
                text(allPlayers[plr].name,x-25,y+25);
            }

            // Differentiate the main player by printing
            // the name of the player on the basket. 

        }


        // Give movements for the players using arrow keys
        /* if (keyIsDown(RIGHT_ARROW)&&player.index!==null) {
             player.distance +=10
             player.update();
         }
          if (keyIsDown(LEFT_ARROW)&&player.index!==null) {
             player.distance -=10
             player.update();
         }*/

        // Create and spawn fruits randomly
            if(frameCount%20===0){
            fruits = createSprite(random(100,1000),0,100,100);
               fruits.velocityY=6;
               var rand = Math.round(random(1,5));
               switch(rand){
                case 1: fruits.addImage("apple",appleImg);
                break;
                case 2: fruits.addImage("banana",bananaImg);
                break;
                case 3: fruits.addImage("melon",melonImg);
                break;
                case 4: fruits.addImage("orange",orangeImg);
                break;
                case 5: fruits.addImage("pineapple",pineappleImg);
                break;
            }
        }
        
    }

    end(){
       console.log("Game Ended");
    }
}