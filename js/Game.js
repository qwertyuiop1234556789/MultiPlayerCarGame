class Game{
    contructor(){}
    getState(){
        var gamestateRef = database.ref('gameState');
        gamestateRef.on("value", function(data){
            gameState = data.val();
        })}
        
    update(state){
        database.ref('/').update({gameState: state});
    }
    start(){
        if (gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        car1 = createSprite(100, 200);
        car2 = createSprite(300, 200);
        car3 = createSprite(500, 200);
        car4 = createSprite(700, 200);

        cars = [car1, car2, car3, car4];
    }

    play(){
        form.hide();
        text("Game Start", 120, 100);
        Player.getPlayerInfo();

        if (allPlayers!==undefined){
            var x = 0;
            var y;
            var index = 0;
            for (var plr in allPlayers){
                x = x+200;
                y = displayHeight-allPlayers[plr].distance
                cars[index].x = x;
                cars[index].y = y;
                index = index+1;
                if (index === player.index){
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
            }
        }

        if (keyIsDown(UP_ARROW) && player.index!==null){
            player.distance+= 20;
            player.update();
        }

        drawSprites();
    }
    
}