/* Combat
 * ------
 * 
 * Copyright (C) 2011 Juhana Leinonen
 * Creative Commons Attribution 3.0 (http://creativecommons.org/licenses/by/3.0/)
 * 
 * An Undum example of a simple randomized combat system. 
 */

undum.game.id = "561a9788-1b83-46e3-a0ff-7acd85a6bf40";
undum.game.version = "1.0";

// No time for backstories, straight to action! 
undum.game.situations.goblin = new undum.SimpleSituation(
    "<h3>Goblin</h3>"
    + "<p>You encounter a snarling goblin!</p>" 
    + "<ul class='options'>"
    + "<li><a href='./attack'>Attack!</a></li>"
    + "<li><a href='./potion'>Drink a health potion</a></li>"
    + "</ul>",
    {
        actions: {
            attack: function( character, system, action ) {
             
            }
        }
    }
);

// A similar deal with the orc. In a story with more combat it'd be wiser to
// make a function(s) that would handle combat instead of copypasting the
// code every time.
undum.game.situations.orc = new undum.SimpleSituation(
        "<h3>Orc</h3>"
        + "<p>You come across a terrifying orc!</p>"
        + "<ul class='options'>"
        + "<li><a href='./attack'>Attack!</a></li>"
        + "<li><a href='./potion'>Drink a health potion</a></li>"
        + "</ul>",
        {
            actions: {
                attack: function( character, system, action ) {
                    if( system.rnd.dice( 1, 20, character.qualities.accuracy ) > system.rnd.dice( 1, 20, undum.game.enemies.orc.agility ) ) {
                        var damage = system.rnd.dice( 1, 6, character.qualities.strength );
                        undum.game.enemies.orc.hitpoints -= damage;
                        system.write( "<p>You hit the orc for " + damage + " points of damage!</p>" );
                    }
                    else {
                        system.write( "<p>You miss!</p>" );
                    }
                    
                    // if the orc is dead show the end message
                    if( undum.game.enemies.orc.hitpoints <= 0 ) {
                        system.write( "<p>The orc falls dead to the ground!</p>" );
                        system.doLink( 'victory' );
                        return;
                    }
                    
                    if( system.rnd.dice( 1, 20, undum.game.enemies.orc.accuracy ) > system.rnd.dice( 1, 20, character.qualities.agility ) ) {
                        var damage = system.rnd.dice( 1, 6, undum.game.enemies.orc.strength );
                        system.setQuality( 'hitpoints', character.qualities.hitpoints - damage );
                        system.write( "<p>The orc hits you for " + damage + " points of damage!</p>" );
                    }
                    else {
                        system.write( "<p>The orc misses!</p>" );
                    }
                    
                    if( character.qualities.hitpoints <= 0 ) {
                        system.write( "<p>You fall dead to the ground!</p>" );
                        system.doLink( 'death' );
                    }
                },
                // for the health potion we can just copy the previous function
                potion: undum.game.situations.goblin.actions.potion
            }
        }
    );


// A situation that prints the game over message when the player's hit points reach zero.
// There are no links leading away from this situation so the game is effectively over.
undum.game.situations.death = new undum.SimpleSituation( "<h1>You are slain</h1>" );

// Same deal with victory
undum.game.situations.victory = new undum.SimpleSituation( "<h1>You are victorious</h1>" );

// start the game with the goblin encounter
undum.game.start = "goblin";

// setup player character qualities
undum.game.qualities = {
    agility: new undum.IntegerQuality( "Agility", { group: "stats" } ),
    accuracy: new undum.IntegerQuality( "Accuracy", { group: "stats" } ),
    strength: new undum.IntegerQuality( "Strength", { group: "stats" } ),
    hitpoints: new undum.IntegerQuality( "Hit points", { group: "health" } ),
    potions: new undum.IntegerQuality( "Health potions", { group: "inventory" } )
};

// qualityGroups under which the qualities are grouped.
// The priority defines the order in which the groups are shown on the screen.
// The higher the number, the lower they are placed. 
undum.game.qualityGroups = {
    stats: new undum.QualityGroup( 'Stats', { priority: "0001" } ),
    health: new undum.QualityGroup( 'Health', { priority: "0002" } ),
    inventory: new undum.QualityGroup( 'Inventory', { priority: "0003" } )
};


undum.game.test = function(character, undum.game.enemies ){
   // check if we hit the opponent by rolling a 20-sided die,
                // adding our accuracy, and comparing to the opponent's 
                // agility + die roll
                if( system.rnd.dice( 1, 20, character.qualities.accuracy ) > system.rnd.dice( 1, 20, undum.game.enemies.goblin.agility ) ) {
                    // hit! reduce the opponent's hit points by rolling a 6-sided die and adding our strength
                    var damage = system.rnd.dice( 1, 6, character.qualities.strength );
                    
                    // the -= operator reduces the variable's value
                    undum.game.enemies.goblin.hitpoints -= damage;
                    system.write( "<p>You hit the goblin for " + damage + " points of damage!</p>" );
                }
                else {
                    // miss!
                    system.write( "<p>You miss!</p>" );
                }
                
                // check if the opponent is alive and move on to the next enemy if not
                if( undum.game.enemies.goblin.hitpoints <= 0 ) {
                    system.write( "<p>The goblin falls dead to the ground!</p>" );
                    system.doLink( 'orc' );
                    return; // stop the rest of the function from executing
                }
                
                // the enemy hits us; same rules apply
                if( system.rnd.dice( 1, 20, undum.game.enemies.goblin.accuracy ) > system.rnd.dice( 1, 20, character.qualities.agility ) ) {
                    var damage = system.rnd.dice( 1, 6, undum.game.enemies.goblin.strength );
                    
                    // instead of reducing our hitpoints directly use the
                    // function that does it for us and flashes the new
                    // value in the character stat bar
                    system.setQuality( 'hitpoints', character.qualities.hitpoints - damage );
                    system.write( "<p>The goblin hits you for " + damage + " points of damage!</p>" );
                }
                else {
                    // miss!
                    system.write( "<p>The goblin misses!</p>" );
                }
                
                // check if the player is still alive, show game over message if not
                if( character.qualities.hitpoints <= 0 ) {
                    system.write( "<p>You fall dead to the ground!</p>" );
                    system.doLink( 'death' );
                }

}
// general game settings
undum.game.init = function( character, system ) {
    // set the player character's stats
    character.qualities.agility = 6;
    character.qualities.accuracy = 8;
    character.qualities.strength = 3;
    character.qualities.hitpoints = 20;
    character.qualities.potions = 2;
    
    // set enemy variables
    undum.game.enemies = {
        goblin: {
            agility: 2,
            accuracy: 3,
            strength: 1,
            hitpoints: 10
        },
        orc: {
            agility: 3,
            accuracy: 5,
            strength: 5,
            hitpoints: 15
        }
    };
};