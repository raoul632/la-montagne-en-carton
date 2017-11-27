/*****

 Undum port of Cloak of Darkness.

 Copyright (c) 2011 by Juhana Leinonen.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


Based on original concept by Roger Firth (http://www.firthworks.com/roger/cloak/).
Undum (c) I D Millington (http://undum.com).

*****/




undum.game.id = "4E5CD666-CFED-4C02-B1B6-8BC98290DB18";
undum.game.version = "1.1";

/* Variables used in the game. Their initial values will be set in
 * undum.game.init() at the end of this file so that if the player 
 * restarts the game the variables will be correctly initialized.
 */
var trampledness;
var darkness;
var cloakWorn;


/**
 * Situations and actions - the game itself.
 */
undum.game.situations = {

    intro: new undum.SimpleSituation(
	"<p>Hurrying through the rainswept November night, \
	you're glad to see the bright lights of the Opera House. \
	It's surprising that there aren't more people about but, hey, \
	what do you expect in a cheap demo game...?</p>",
	{
		/* The enter function of a SimpleSituation will run immediately after the
		 * main text. Here we move to the foyer right after displaying the intro.
		 */
  
		enter: function( character, system, from ) {
			system.doLink( 'foyer' );
		}
	}
	),
    foyer: new undum.SimpleSituation(
	"<h3>Foyer</h3>\
	<p>You are standing in a spacious hall, \
	splendidly decorated in red and gold, \
	with glittering chandeliers overhead. \
	The entrance from the street is to the \
	<a href='./street' class='once'>north</a>, \
	and there are doorways <a href='bar'>south</a> \
	and <a href='cloakroom'>west</a>.</p>",
	{
		actions: {
			street: "<p class='transient'>You've only just arrived, and besides, \
				the weather outside seems to be getting worse.</p>"
		}
	}
	),
    /* The bar needs two different descriptions, depending on whether we have the cloak
     * with us or not. SimpleSituation allows only one description so we use Situation instead.
     */
    bar: new undum.Situation( {
        enter: function( character, system, from ) {
		if( darkness  ) {
			/* The parser IF version of Cloak makes any action trample the message,
			 * but in hypertext the reader can't do anything unless they are provided
			 * action links. We'll add some things here for the reader to do and
			 * at the same time demonstrate the list style links.
			 */
			system.write( "<h3>Darkness</h3>\
				<p>It's pitch dark, and you can't see a thing.</p>\
				<ul class='options'>\
					<li>Try to find a <a href='./lightswitch'>light switch</a></li>\
					<li>Look for <a href='./otherexit'>another exit</a></li>\
					<li>Return to <a href='foyer'>the foyer</a></li>\
				</ul>" );
		}
		else {
			system.write( "<h3>Bar</h3>\
				<p>The bar, much rougher than you'd have guessed \
				after the opulence of the <a href='foyer'>foyer to the north</a>, \
				is completely empty. There seems to be some sort \
				of <a href='message'>message</a> scrawled in the sawdust on the floor.</p>" );
		}
	},
	/* SimpleSituation provides "actions" that handles the switch statements for us (see cloakroom below).
	 * With Situation we don't have that luxury, so we have to handle things manually.
	 */ 
	act: function( character, system, action ) {
		switch( action ) {
			case "lightswitch":
				system.write( "<p class='transient'>In the dark? You could easily disturb something.</p>" );
				trampledness++;
				break;
			case "otherexit": 
				system.write( "<p class='transient'>Blundering around in the dark isn't a good idea!</p>" );
				trampledness += 2;
				break;
		}
	}
	} ),

    /* Reading the message ends the game so we can make it a Situation with just the enter function.
     * Again, using SimpleSituation wouldn't work because we need to choose which text to show 
     * based on reader's previous actions.
     * Note how Undum doesn't have any special method to indicate that the story has ended. We simply
     * show a situation with no active links.
     */
    message: new undum.Situation({
	enter: function( character, system, action ) {
		if( trampledness < 2 ) {
			/* At the end of the story file we'll set up the score to be a character quality
			 * and increase it here.
			 */
			system.setQuality( "score", character.qualities.score + 1 );
			system.write( "<p>The message, neatly marked in the sawdust, reads...</p><h1>You have won</h1>" );
		}
		else {
			system.write( "<p>The message has been carelessly trampled, \
				making it difficult to read. You can just distinguish the words...</p> \
				<h1>You have lost</h1>" );
		}
	}
	}),
    /* Let's spice up the room description with a picture. The <img> tag will do that.
     * The picture is by missycorley (http://www.flickr.com/photos/26689329@N03/).
     */
    cloakroom: new undum.SimpleSituation( 
	"<h3>Cloakroom</h3> \
	<img src='media/img/hook.png' style='float:right;' /> \
	<p>The walls of this small room were clearly once lined with hooks, \
	though now only <a href='./hook' class='once'>one</a> remains. \
	The exit is a door to the <a href='foyer'>east</a>.</p>",
	{
		/* Actions can be either functions (like the hook) or strings (like the cloak).
		 * The cloak action used here is equivalent to 
		 * cloak: function( character, system, action ) { system.write( "<p>A handsome cloak...</p>" ); }
		 */
		actions: {
			hook: function( character, system, action ) {
				if( cloakWorn ) {
					system.setQuality( "score", character.qualities.score + 1 );
					system.write( "<p>You hang <a href='./cloak' class='once'>your velvet cloak</a> on the small brass hook.</p>" );
					cloakWorn = false;
					darkness = false;
				}
				else {
					system.write( "<p>It's just a small brass hook, with a cloak hanging on it.</p>" );
				}
			},
			cloak: "<p>A handsome cloak, of velvet trimmed with satin, \
				and slightly spattered with raindrops. Its blackness \
				is so deep that it almost seems to suck light from the room.</p>"

		}
	}
	)
};

/* Defining the first situation */
undum.game.start = "intro";

/* We use only one quality, "score", but it still needs a qualityGroup made for it */
undum.game.qualities = {
	score: new undum.IntegerQuality( "Score", { priority: "0001", group: "score" } )
};
undum.game.qualityGroups = { 
	score: new undum.QualityGroup( null, { priority: "0001" } )
};

/* Initializing variables */
undum.game.init = function( character, system ) {
	character.qualities.score = 0;
	trampledness = 0;
	/* It's not actually necessary to have separate flags for
	 * the bar's darkness and player wearing the cloak because
	 * they will always have the same value.
	 */
	darkness = true;
	cloakWorn = true;
};
