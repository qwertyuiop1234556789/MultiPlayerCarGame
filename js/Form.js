class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton('play');
        this.greeting = createElement('h2');
    }

    hide(){
        this.greeting.hide();
    }
    
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(displayWidth/2-50, 50);
        this.input.position(displayWidth/2- 45, displayHeight/2);
        this.button.position(displayWidth/2+5, displayHeight/2+50);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+= 1;
            player.index = playerCount;
            player.updateCount(playerCount);
            player.update();
            this.greeting.html("Welcome "+ player.name);
            this.greeting.position(displayWidth/2-70, displayHeight/4);
        })
    }
}