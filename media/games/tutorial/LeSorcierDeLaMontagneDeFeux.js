// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "9dd448cc-5004-48d4-b662-914fa3b3038f";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<div class='transient' >\
        <h1>Le Sorcier de la Montagne de Feu</h1>\
        <img  src='media/img/title_bg.jpg' class='float_right'>\
        </div>\
        <br>\
        <br>\
        <br>\
        \
        <p>UN LIVRE DONT VOUS ÊTES LE HÉROS</p>\
        \
        \
        <p>\
      \
        <br>\
        <br>\
       \
        </p>\
         \
        <p class='transient' >  <a href='situations'>Cliquez sur ce lien\
        pour commencer...</a></p>"
    ),

    // NB: The 'hub' situation which is the main list of topics, is
    // defined wholly in the HTML file, and doesn't have an entry in
    // the game.situations dictionary in this file.

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.
    situations: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#page_0").html());
        }
    }),  
    page_1: new undum.SimpleSituation(
        "<p class='transient' >\
        \
        Vos deux jours de marche sont enfin terminés. Après avoir ôté votre\
        épée de son fourreau, vous la déposez sur le sol et vous poussez un\
        soupir de soulagement en vous asseyant sur un rocher couvert de\
        mousse pour prendre quelques instants de repos.  \
        \
        <a href='enter'>Cliquez pour la suite</a>\
        \
        </p>\
        \ "
        ),
    enter: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#page_1").html());
        }
    }),
     page_2: new undum.SimpleSituation(
 "<p class='transient'> \
 Tentez votre Chance. Si vous êtes chanceux, vous parvenez à vous \
 enfuir sans éveiller l'attention de l'Ogre. Si vous êtes malchanceux, \
 vous poussez un juron en trébuchant sur une petite pierre que vous \
 envoyez rouler à travers la caverne. Vous tirez votre épée, au cas où \
 l'Ogre vous aurait entendu - . Si vous avez eu de la\
 chance, vous rampez le long du couloir jusqu'au croisement. Rendez-\
  <ul class='options'>\
     <li><a href='./lucktest'>Tentez votre Chance</a></li>\
     </ul>\
 </p>\"", //ouvre les condifion
      {
          

            actions: {
                lucktest: function(character, system, action) {
                    if( system.rnd.dice(2,6) < character.qualities.chance )  
                    {
                          system.write( "<p class='transient'><strong>Vous etes chanceux</strong></p><br>") ; 
                          system.doLink( 'page_269' );

                    }
                    else
                    {
                        system.write( "<p class='transient'>pas de chance </p>") ;
                        system.doLink( 'page_16' );
                    }

                }
            }
        }

 ),
page_3: new undum.SimpleSituation(
 "<p class='transient'> \
 La cloche tinte faiblement, et quelques instants plus tard, vous voyez \
 un vieil homme tout desséché grimper dans une barque amarrée à la \
 rive nord. Il rame lentement dans votre direction, puis s'avance vers \
 vous en clopinant. Il vous demande 3 Pièces d'Or. Vous protestez \
 contre ce tarif trop élevé, et il marmonne une vague excuse en \
 invoquant «l'inflation». Au bout d'un moment, vos protestations le \
 mettent en colère. <a href='page_272'> Allez-vous lui payer les trois Pièces d'Or (rendez-</a>\
 vous dans ce cas au 272)<a href='page_127'> ou le menacer </a>(et vous irez alors au 127) ?\
 </p>\""),
 page_4: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous trouvez dans un couloir nord-sud. Au nord, le passage \
 s'oriente vers l'est à quelques mètres devant vous. Si vous voulez \
 explorer l'endroit, <a href='page_46'>Rendez-vous au 46</a>. Au sud, le couloir tourne \
 également vers l'est. Si vous préférez aller de ce côté<a href='page_332'>Rendez-vous au 332</a>.\
 </p>\""),
 page_5: new undum.SimpleSituation(
 "<p class='transient'> \
 Sur le mur est du passage, il y a une porte de bois brut. En écoutant à \
 la porte, vous entendez quelqu'un chantonner gaiement. Voulez-vous \
 frapper à la porte et entrer <a href='page_97'>Rendez-vous au 97</a>, ou continuerez-\
 vous vers le nord<a href='page_292'>Rendez-vous au 292</a>  ?\
 </p>\""),
 page_6: new undum.SimpleSituation(
 "<p class='transient'> \
 La haute porte n'a pas de poignée. Vous essayez de l'enfoncer, mais \
 sans résultat. La porte ne bougera pas. Vous décidez d'abandonner et \
 vous repassez par l'ouverture du couloir est-ouest à quelque distance \
 en arrière. <a href='page_89'>Rendez-vous au 89.</a> \
 </p>\""),
 page_7: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes sur la berge nord d'une rivière au fort courant, dans une \
 grande caverne souterraine.<a href='page_214'> Rendez-vous au 214.</a>\
 </p>\""),
 page_8: new undum.SimpleSituation(
 "<p class='transient'> \
 Ie passage devant vous aboutit à une porte solide. Vous essayez \
 d'écouter, mais vous n'entendez rien. Vous tournez alors la poignée, \
 la porte s'ouvre et vous cilliez dans la pièce. Tandis que vous y jetez \
 un coup d'oeil, vous entendez un grand cri derrière vous et vous Vous \
 retournez aussitôt : un homme aux allures de sauvage bondit sur vous \
 en brandissant une hache d'armes. C'est un BARBARE fou, et il vous \
 faut le combattre.\
 BARBARE HABILITÉ: 7 ENDURANCE: 6\
 Il y a une porte dans le mur d'en face, situé au nord. Vous pouvez vous \
 enfuir par là pendant le combat <a href='page_189'>Rendez-vous au 189</a>.\
  <ul class='options'>\
                <li><a href='./attack'>Attack!</a></li>\
                </ul>\
                 </p>\"", 
                   {
            actions: {
                attack: function( character, system, action ) {
                    var opponent = undum.game.enemies.barbare; 
                       if( system.rnd.dice( 2, 6, character.qualities.habilite ) > system.rnd.dice( 2, 6, opponent.habilite ) ) {
                    // hit! reduce the opponent's hit points by rolling a 6-sided die and adding our strength
                            //var damage = system.rnd.dice( 1, 6, character.qualities.strength );
                            
                            // the -= operator reduces the variable's value

                            opponent.endurance -= 2; 

                            system.write( "<p class='transient'>Vous avez toucher le barbare </p>" );

                            system.write( "<p class='transient'>il reste "+  opponent.endurance+ " point de vie au barbare  </p>" );

                             // check if the opponent is alive and move on to the next enemy if not
                            if( opponent.endurance <= 0 ) {
                                system.write( "<p class='transient'>Vous avez tué le barbare!!</p>" );
                                system.doLink( 'page_273' );
                                return; // stop the rest of the function from executing
                            }
                        }
                        else if ( system.rnd.dice( 2, 6, character.qualities.habilite ) < system.rnd.dice( 2, 6, opponent.habilite ) )
                        {
                             //var damage = system.rnd.dice( 1, 6, character.qualities.strength );
                            
                            // the -= operator reduces the variable's value
                           
                            system.setQuality('endurance', character.qualities.endurance -2);
                              system.animateQuality( 'endurance', character.qualities.endurance -2 );
                            system.write( "<p class='transient'>Le barbare vous touche !!</p>" );
                               if( character.qualities.endurance <= 0 ) {
                                system.write( "<p class='transient'>Vous tomber au sol!</p>" );
                                system.doLink( 'death' );
                            }

                        }
                  
                }
            }
        }
 ),
 page_9: new undum.SimpleSituation(
 "<p class='transient'> \
 Stupéfait que votre mensonge ait réussi, vous décidez de pousser un \
 peu plus loin votre chance. Vous pouvez soit examiner les outils du \
 Squelette, soit faire semblant de chercher des feuilles de plans de \
 travail, en fouillant les tiroirs des divers établis. Si vous choisissez les \
 outils, <a href='page_34'>Rendez-vous au 34 </a>. Si vous fouillez les tiroirs, <href='page_322>rendez-vous au 322.</a>\
  Vous entendez un bruit qui vient de derrière la porte située au \
 nord, et vous réalisez qu'il va falloir vous dépêcher !\
 </p>\""),
 page_10: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes revenu à la bifurcation et vous prenez la direction du \
 nord. <a href='page_77'>Rendez-vous au 77</a>.\
</p>\""),
 page_11: new undum.SimpleSituation(
 "<p class='transient'> \
 <img src='media/img/11_img.JPG' class='float_right'> \
 Vous suivez le passage vers l'ouest jusqu'à ce qu'il tourne vers le sud. \
 Juste avant ce coude, il y a une pancarte qui indique : « En \
 construction. » Devant vous, les premières marches d'un escalier qui \
 descend. Trois marches, seulement ont été construites. Sur le sol sont \
 posés des pelles, des pioches et d'autres outils et lorsque vous avez \
 tourné le coin, ils se mettent soudain à s'agiter et à travailler pour \
 continuer de bâtir l'escalier. Vous voyez maintenant tous ces outils \
 creuser et piocher comme s'ils étaient tenus par des ouvriers \
 invisibles. Une chanson fredonnée s'élève et vous reconnaissez l'air de \
 « Le travail, c'est la Santé ». Devant ce spectacle, vous éclatez de rire. \
 La scène en effet est cocasse. Vous vous asseyez pour observer ces \
 outils magiques ; vous parlez même à certains d'entre eux. Prenez 2 \
 points d'ENDURANCE et 1 point d'HABILETÉ pendant que vous vous \
 détendez. Puis, revenez dans le passage en remontant vers le \
 croisement ; là, <a href='page_366'>vous pouvez choisir d'aller au nord </a>\
 <a href='page_250'>ou au sud.</a>\
 </p>\""
, //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.setQuality('endurance', character.qualities.endurance +2);
               system.setQuality('habilite', character.qualities.habilite +1);
            }
        }
 ),
 page_12: new undum.SimpleSituation(
 "<p class='transient'> \
 Au moment où vous tirez la poignée, un bruit métallique assourdissant \
 retentit dans le passage. Vous la repoussez frénétiquement pour arrêter \
 le signal d'alarme, mais il a déjà produit son effet. Vous entendez des \
 bruits de pas qui s'approchent dans le couloir. <a href='page_161'> Rendez-vous au 161 </a>\
 </p>\""),
 page_13: new undum.SimpleSituation(
 "<p class='transient'> \
 Votre tête vous fait mal et vous vous sentez tout étourdi en vous \
 relevant. Les quatre hommes se met-tent en mouvement et s'avancent \
 vers vous en file indienne, leurs armes prêtes. Vous cherchez votre \
 chemin à tâtons le long du mur pour essayer d'atteindre la porte du \
 sud, et il s'en faudra d'un cheveu que vous n'y arriviez. Votre pied \
 glisse sur un caillou et vous tombez par terre. Avant d'avoir pu vous \
 relever, les créatures sont sur vous.<a href='page_282'> Rendez-vous au 282.</a>\
 </p>\""),
 page_14: new undum.SimpleSituation(
 "<p class='transient'> \
 Il n'y a pas trace de passage secret ; en revanche, vous entendez des \
 bruits de pas qui viennent vers vous. Pour découvrir ce qui s'approche \
 ainsi, <a href='page_1612'>rendez-vous au 161</a>\
 </p>\""),
 page_15: new undum.SimpleSituation(
 "<p class='transient'> \
 Tandis que vous êtes assis sur le banc en train de manger, vous vous \
 détendez profondément et les courbatures de votre corps semblent \
 disparaître d'elles-mêmes. Ce lieu de repos est enchanté. Vous avez \
 droit à deux points d'ENDURANCE en plus de ceux que vous rend \
 votre repas (mais seulement si ce local n'excède pas vos points \
 d'ENDURANCE de départ ; vous pouvez également reprendre 1 point \
 D’HABILETÉ si vous en avez perdu. Lorsque vous êtes prêts à repartir, \
 avancez le long du couloir, <a href='page_367'>et rendez-vous au 367.</a>\
 </p>\""
  , //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.setQuality('endurance', character.qualities.endurance +2);
               system.setQuality('habilite', character.qualities.habilite +1);
            }
        }
        ),
 page_16: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous tirez votre épée du fourreau; l'Ogre vous a entendu et se prépare \
 à l'attaque :\
 OGRE HABILETÉ: 8 ENDURANCE: 10\
  <ul class='options'>\
                <li><a href='./attack'>Attack!</a></li>\
                </ul>\
 \
 </p>\""
 , //DEBUG
 {
  actions: {
  attack: function( character, system, action) {
                   var result = undum.game.fight(character, system , undum.game.bestiaire['page_16'][0].monstre[0]);    
                    
                if (result == 'victory')
                {
                   system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_16'][0].monstre[0].nom+"!!"
                                 + " <a href='page_50'>Rendez vous au Cliquez !! " 
                                 +" </a>.</p>" ); 
                }
                if (result == 'death')
                {
                system.doLink('death');

                } 

                if (result == 'noDeath')
                {
                      undum.game.nombrederound++; 
                }
                if(undum.game.nombrederound == 2)
                {
                     system.write( "<p class='transient'><a href='page_269'>vous pouvez fuir le long du corridor.</a>  </p>") 
                }

           }
         }
       }

 ),
 page_17: new undum.SimpleSituation(
 "<p class='transient'> \
 A l'aide de l'épieu et du maillet (ou d'un maillet de fortune si vous n'en \
 avez pas), vous formez une croix et vous avancez vers le Vampire en \
 l'acculant dans un coin. Le Vampire siffle et essaye de vous attraper, \
 mais il ne peut s'approcher de vous. Il sera cependant difficile de lui \
 enfoncer l'épieu dans le cœur. Tandis que vous marchez vers lui, vous \
 trébuchez et tombez. Par un coup de chance, l'épieu est projeté en \
 avant, et atteint le monstre hurlant.\
 <ul class='options'>\
     <li><a href='./lucktest'>Tentez votre Chance</a></li>\
     </ul>\
 </p>\""
 , //ouvre les condifion
      {
          

            actions: {
                lucktest: function(character, system, action) {
                    if( system.rnd.dice(2,6) < character.qualities.chance )  
                    {
                          system.write( "<p class='transient'><strong>l'épieu transperce le cœur du Vampire.</strong></p><br>") ; 
                          system.doLink( 'page_327' );

                    }
                    else
                    {
                        system.write( "<p class='transient'>le Vampire est simplement écorché par le coup"
                     +"(enlevez-lui 3 points d'ENDURANCE) et il vous rejette en arrière vers "
                     +"la porte située à l'ouest."
                     +"Si vous fuyez par cette porte, <a href='page_380'>rendez-vous au 380</a>. Si"
                      +"vous continuez à combattre, <a href='page_144'> rendez-vous au 144. </a></p>") ;
                    }

                }
            }
        }
        ),
 page_18: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous marchez vers l'ouest le long du couloir. Au bout d'une \
 cinquantaine de mètres, le passage s'oriente vers le nord. Après avoir \
 fait deux ou trois pas dans ce couloir, vous entendez un bruit \
 d'éboulement sous vos pieds et vous essayez de sauter en arrière tandis \
 que le sol se dérobe. Tentez votre Chance.\
  <ul class='options'>\
     <li><a href='./lucktest'>Tentez votre Chance</a></li>\
     </ul>\
 </p>\"",
  {
          

            actions: {
                lucktest: function(character, system, action) {
                    if( system.rnd.dice(2,6) < character.qualities.chance )  
                    {
                          system.write( "<p class='transient'>"
                              +"vous avez réussi à faire un bond en arrière avant qu'un trou ne"
                                      +"se formevous avez de la chance, vous feriez mieux" 
                                       + "de retourner à la bifurcation</p>") ; 
                          system.doLink( 'page_261' );

                    }
                    else
                    {
                      system.setQuality('endurance', character.qualities.endurance -1);
                              system.animateQuality( 'endurance', character.qualities.endurance -1 );
                        system.write( "<p class='transient'> Vous n'avez pas été assez rapide et vous "
                                      +"tombez dans une fosse de deux mètres de profondeur.  Vous perdez 1" 
                                      +"point d'ENDURANCE </p>") ;
                        system.doLink( 'page_348' );
                    }

                }
            }
        }
 ),//DEBUG
 page_19: new undum.SimpleSituation(
 "<p class='transient'> \
 Ces deux créatures malfaisantes sont des LUTINS. Ils vous attaquent \
 un par un.\
  <ul class='options'>\
                <li><a href='./attack'>Attack!</a></li>\
                </ul>\
 \
 </p>\"",
  {
  actions: {
  attack: function( character, system, action) {
        if(undum.game.bestiaire['page_19'][0].monstre[0].endurance>0)
        {
                   var result = undum.game.fight(character, system , undum.game.bestiaire['page_19'][0].monstre[0]);    
                 }
                 else if((undum.game.bestiaire['page_19'][0].monstre[1].endurance > 0)  && (undum.game.bestiaire['page_19'][0].monstre[0].endurance <=0))
                 {
                      var result = undum.game.fight(character, system , undum.game.bestiaire['page_19'][0].monstre[1]);    
                 }
                 
                    
                else if (undum.game.bestiaire['page_19'][0].monstre[1].endurance <=0)
                {
                   system.write( "<p class='transient'>Vous avez tué les 2 lutins!!"
                                 + " <a href='page_317'>Rendez vous au Cliquez !! " 
                                 +" </a>.</p>" ); 
                }
                else if (result == 'death')
                {
                system.doLink('death');
                } 
                else if (result == 'noDeath')
                {

                }
             

           }
         },
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
            $( "hr" ).remove();
           }
       }
       ),
 page_20: new undum.SimpleSituation(
 "<p class='transient'> \
 La bagarre commence. Vous avez votre épée, ils ont leurs haches. Ils \
 vous affrontent un par un.\
 <ul class='options'>\
                <li><a href='./attack'>Attack!</a></li>\
                </ul>\
 </p>\"",
  {
  actions: {
  attack: function( character, system, action) {

        if(undum.game.bestiaire['page_20'][0].monstre[undum.game.nombrederound].endurance>0)
        {
                   var result = undum.game.fight(character, system , undum.game.bestiaire['page_20'][0].monstre[undum.game.nombrederound]);
                   if (undum.game.bestiaire['page_20'][0].monstre[undum.game.nombrederound].endurance <=0)
                   {
                     system.write( "<p class='transient'>Vous avez tué "+ (undum.game.nombrederound + 1 )+" nain!!"
                                  +"<br />mais vous pouvez fuir par la porte. <a href='page_291'>Rendez-vous dans ce cas au 291 </a>"
                                 +" .</p>" ); 
                     undum.game.nombrederound++; 
                     if(undum.game.nombrederound == 4)
                     {
                      undum.game.nombrederound= 0;
                       system.write( "<p class='transient'>Vous avez tué les 4 nains!!"
                                 + " <a href='page_376'>rendez-vous au 376</a> rendez-vous au 376 !! " 
                                 +" .</p>" ); 
                     }
                   }
        }            
        else if (result == 'death')
        {
        system.doLink('death');
        } 
        else if (result == 'noDeath')
        {
           system.write( "<p class='transient'> vous pouvez fuir par la porte. <a href='page_291'>Rendez-vous dans ce cas au 291 </a>"
                                 +" .</p>" ); 
        }
             

           }
         }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
            $( "hr" ).remove();
           }
       }
       ),
  page_21: new undum.SimpleSituation(
 "<p class='transient'> \
 Le sang verdâtre des farfadets morts s'écoule de leurs corps en \
 dégageant une odeur repoussante. Vous contournez les cadavres et \
 vous examinez le coffre. Il est solide, fait de chêne et de fer, et bien \
 fermé. Vous pouvez essayer de briser la serrure à l'aide de votre épée \
 (<a href='page_33'>rendez-vous alors au 339</a>, ou le laisser et sortir par la porte ouverte \
 <a href='page_293'>Rendez-vous au 293</a>\
 </p>\""),
 page_22: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous furetez un peu partout à la recherche d'une trace de porte secrète, \
 mais vous n'en trouvez pas. Tandis que vous faites une pause pour \
 réfléchir à la situation, un mince jet de gaz s'échappe du plafond en \
 sifflant.Vous toussez à vous en étouffer pour essayer de libérer vos \
 poumons, mais rien à faire, vous tombez à genoux, la tête vous tourne \
 et vous vous écroulez sur le sol en perdant connaissance. Lorsque vous \
 revenez à vous, vous vous trouvez dans un endroit inconnu. <a href='page_4'>Rendez-\
 vous au 4.</a>\
 </p>\""),
 page_23: new undum.SimpleSituation(
 "<p class='transient'> \
 Le couloir aboutit à une porte bien solide. Vous écoutez au panneau, \
 mais vous n'entendez rien. Allez-vous entrer dans la pièce <a href='page_326'>(rendez-\
 vous alors au 326)</a>, ou retourner à la bifurcation <a href='page_229'>Rendez-vous au 229</a>  \
 ?\
 </p>\""),
 page_24: new undum.SimpleSituation(//DEBUG SUITE D UN COMBAT ANTERIEUR lié 174
 "<p class='transient'> \
 Après avoir subi votre troisième blessure, vous remarquez que votre \
 force décline. Vous perdez 1 point d'HABILETÉ. Vous en déduisez \
 qu'il s'agit, là encore, d'un pouvoir magique de la repoussante créature \
 et vous vous sentez parcouru d'un frisson de panique. Allez-vous \
 continuer ou prendre la fuite ? Si vous choisissez de vous enfuir, \
 inscrivez votre pénalité, et rendez-vous au 360 en vous échappant par\
 la porte située au nord. Sinon, le combat continue. Si vous avez vaincu \
 la créature, Mais désormais, à chaque troisième \
 blessure que vous inflige le monstre, vous perdez un point \
 d'HABILETÉ.\
 <ul class='options'>\
                 <li><a href='./attack'>Attaquez le wight ?</a></li>\
                 <li><a href='./fuite'>Fuir le wight ?</a></li>\
                </ul>\
                 </p>\"",
      {
          

            actions: {
                attack: function( character, system, action) {
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_41'][0].monstre[0]);    
                            //var init =  character.qualities.endurance; 
                        if (result == 'victory')
                        {
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_41'][0].monstre[0].nom+"!!"
                                         + " <a href='page_135'>Rendez-vous au 135</a> .</p>" ); 
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if(undum.game.nombredecoup == 3)
                        {
                          system.setQuality('habilite', character.qualities.habilite -1);
                        }

                        if (result == 'noDeath')
                        {
                             if(undum.game.initfight  !=  character.qualities.endurance)
                            {
                              undum.game.nombredecoup++; 
                            }
                        }
                      }, 
                   fuir: function( character, system, action) {
                        system.setQuality('endurance', character.qualities.endurance -2);
                        if( character.qualities.endurance <= 0)
                        {
                            system.doLink('page_360');
                        }
                        else
                        {
                          system.doLink('death');
                        }
                   }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
            undum.game.nombredecoup = 0; 
            undum.game.initfight = 0; 
            $( "hr" ).remove();
           },
           enter: function(character, system, action){
            undum.game.initfight =  character.qualities.endurance; 
            system.setQuality('habilite', character.qualities.habilite -1);
           }

                 
            
        }),
 page_25: new undum.SimpleSituation(
 "<p class='transient'> \
 Les peintures sont des portraits d'hommes. Un frisson vous parcourt \
 l'échiné lorsque vous lisez sur une plaque le nom de celui qui se trouve \
 sur le mur ouest - il s'agit de Zagor, le Sorcier dont vous cherchez le \
 trésor. En regardant ce portrait, vous vous rendez compte que vous vous \
 mesurez à un adversaire redoutable. Vous avez le sentiment d'être \
 observé et vous remarquez les yeux perçants qui suivent chacun de vos \
 mouvements. Vous vous sentez attiré vers ce portrait et votre peur \
 s'accroît. Vous perdez un point d'HABILETÉ. Avez-vous le courage \
 d'essayer de combattre le Sorcier 1 Vous pouvez soit sortir tout droit par \
 la porte nord <a href='page_90'> (et vous rendre au 90) </a>- mais il s'agira alors d'une fuite , \
 soit chercher dans votre sac à dos une arme que vous pourriez utiliser \
 pour combattre le pouvoir du Sorcier - et dans<a href='page_340'>Rendez-vous au ce cas au\
 340.</a> \
 </p>\""
   , //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.animateQuality( 'habilite', character.qualities.habilite -1 );
               system.setQuality('habilite', character.qualities.habilite -1);
            }
        }
        ),
 page_26: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous rappelez le petit livre à la reliure de cuir de Di Maggio, et \
 vous prononcez silencieusement, du bout des lèvres, la formule \
 magique enfermée dans ses pages.\
 Vous poussez un grand cri en direction du Dragon, et il s'immobilise. \
 Il penche la tête de côté et vous regarde d'un air soupçonneux. Vous \
 lui jetez une pierre à la tête et elle rebondit sur son mufle. La bête \
 laisse échapper un cri de colère et prend une profonde inspiration qui \
 provoque un rugissement dans sa gorge. Le Dragon souffle et vous \
 apercevez entre ses dents une autre boule de feu en train de se former. \
 Vous vous tenez prêt, et lorsque la boule de feu jaillit de sa gueule, \
 vous vous écriez :\
 Ekil Erif Ekam Erif Erif Erif Di Maggio\
 La boule de feu s'arrête aussitôt. Avec un cri de douleur, le Dragon \
 essaye d'éloigner les flammes de son museau, mais elles continuent de \
 le brûler. En poussant de terribles hurlements, le monstre fait volte-\
 face et bondit dans les ténèbres, secouant sa tête en tous sens.<a href='page_371'> Rendez-\
 vous au 371.</a>\
 </p>\""),
 page_27: new undum.SimpleSituation(//ok
 "<p class='transient'> \
 L'épée est une épée magique, et elle vous aidera à combattre. Aussi \
 longtemps que vous vous servirez de cette épée, vous pourrez \
 augmenter de 2 points votre total de départ en matière d'HABILETÉ. \
 Vous pouvez également ajouter deux points à votre total actuel \
 d'HABILETÉ. Vous gagnez également 2 points de CHANCE pour \
 avoir trouvé cette épée.\
 CHANCE. <ul class='options'>\
                <li><a href='./prendre'>Prendre l'epee!</a></li>\
                <li><a href='./pasprendre'>conserver votre propre épée!</a></li>\
                </ul>\
                 </p>\"", //ouvre les condifion
      {
        actions: {
                prendre: function(character, system, action) {
                   
                    character.qualities.arme = -3; 


                    system.animateQuality( 'habilite', character.qualities.habilite +2 );
                    system.setQuality('arme', character.qualities.arme +2);
                    system.setQuality('chance', character.qualities.chance +2);
                    system.doLink( 'page_319' );

                },
                pasprendre:function(character, system, action){
                     system.setQuality('chance', character.qualities.chance +2);
                    system.doLink( 'page_319' );
                }
            }
        }
 ),
 page_28: new undum.SimpleSituation(//action
 "<p class='transient'> \
 L'énorme Géant est étendu raide mort ! Vous fouillez sa caverne et n'y \
 trouvez pas grand-chose d'utile en dehors d'une bourse qu'il porte à sa \
 ceinture et qui contient 8 Pièces d'Or. Vous êtes un peu inquiet en ce \
 qui concerne la deuxième chaise. A qui appartient-elle ? Vous décidez \
 de quitter la caverne par le chemin que vous aviez pris.<a href='page_351'> Rendez-vous \
 au 351. </a> Mais avant cela, ajoutez 2 points de CHANCE et 2 autres \
 d'HABILETÉ pour votre victoire.\
 </p>\"", 
      {
       enter: function(character, system, to) {
               system.animateQuality('or', character.qualities.or +8);
               system.setQuality('habilite', character.qualities.habilite +2);
               system.setQuality('chance', character.qualities.chance +2);
            }
        }
        ),
 page_29: new undum.SimpleSituation(
 "<p class='transient'> \
 A part les bottes auxquelles vous décidez de n'accorder aucune \
 attention, il y a peu de choses dans la caverne. Vous choisissez de \
 rebrousser chemin dans la direction d'où vous êtes venu.<a href='page_375'> Rendez-vous \
 au 375. </a>\
 </p>\""),
 page_30: new undum.SimpleSituation(
 "<p class='transient'> \
 Une pierre se détache du roc et révèle une anfractuo-sité dans laquelle \
 est cachée une corde. Si vous voulez tirer sur la corde<a href='page_67'>Rendez-vous au 67</a>.\
 Si vous pensez qu'il est plus prudent de n'y point toucher, vous \
 pouvez revenir au croisement (<a href='page_267'>rendez-vous au dans ce cas au 267</a>).\
 </p>\""),
  page_31: new undum.SimpleSituation(//action inventaire si pierre précieuse
 "<p class='transient'> \
 Si vous êtes en possession de la pierre précieuse arrachée à l'œil du\
 Cyclope, vous la tenez devant le Sorcier. Son regard menaçant se \
 transforme alors en une expression de douleur. De toute évidence, il \
 ressent le pouvoir de la pierre. Soudain, ses yeux deviennent blancs et \
 son visage flasque. Votre confiance en vous-même se renforce lorsque \
 vous réalisez que vous venez de gagner votre première vraie bataille. \
 Prenez 2 points d'HABILETÉ. Rangez la pierre précieuse dans votre \
 sac à dos et sortez par la porte nord.<a href='page_90'> Rendez-vous au 90. </a>\
 </p>\"", 
      {
       enter: function(character, system, to) {
               system.animateQuality('habilite', character.qualities.habilite +2);
              
            }
        }
        
  ),
 page_32: new undum.SimpleSituation(//action inventaire fromage
 "<p class='transient'> \
 Vous lancez le Fromage à travers la pièce en direction des Rats qui se \
 battent pour le dévorer, en échangeant des coups de pattes et de dents.\
 Ayant ainsi détourné leur attention, il ne vous reste plus qu'à traverser \
 la pièce et à sortir par la porte qui s'ouvre dans le mur nord.<a href='page_124'>  Rendez-\
 vous au 124.</a> Prenez 2 points de CHANCE pour prix de votre bonne \
 fortune.\
 </p>\"", 
      {
       enter: function(character, system, to) {
               system.animateQuality('chance', character.qualities.chance +2);
              system.removeCharacterInventory("fromage");
            }
        }
        ),
 page_33: new undum.SimpleSituation(//action
 "<p class='transient'> \
 La créature endormie se réveille en sursaut. Elle bondit et se rue sur \
 vous, sans arme. Vous devriez pouvoir la vaincre avec votre épée, \
 mais ses dents acérées semblent plutôt dangereuses. Vous avez le droit \
 de prendre fuite par la porte (<a href='page_320'>rendez-vous alors au 320)</a> mais vous \
 pouvez choisir de rester et de combattre le FARFADET qui vous \
 attaque.\
  <ul class='options'>\
                <li><a href='./attack'>Attack!</a></li>\
                </ul>\
                 </p>\""  , //DEBUG
 {
  actions: {
  attack: function( character, system, action) {
                   var result = undum.game.fight(character, system , undum.game.bestiaire['page_33'][0].monstre[0]);    
                    
                if (result == 'victory')
                {
                   system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_33'][0].monstre[0].nom+"!!"
                                 + " <a href='page_147'>Rendez vous au Cliquez !! " 
                                 +" </a>.</p>" ); 
                }
                if (result == 'death')
                {
                system.doLink('death');

                } 

                if (result == 'noDeath')
                {
                   
                }

           }
         }
       }
 ),
 page_34: new undum.SimpleSituation(//inventaire échange 
 "<p class='transient'> \
 En examinant les outils, vous trouvez un maillet en Bois bien dur et \
 un ciseau muni d'une solide lame d'argent. Vous pouvez prendre l'un \
 ou l'autre de ces outils, à condition d'abandonner en échange l'une des \
 pièces de votre équipement. Si vous acceptez cet échange, modifiez \
 votre Liste d'Équipement en conséquence. Le bruit en provenance de \
 la porte nord devient plus fort et vous allez voir de quoi il s'agit. \
 <a href='page_96'>Rendez-vous au 96.</a>\
  <ul class='options'>\
                <li><a href='./prendremaillet'>Prendre le Maillet ?</a></li>\
                 <li><a href='./prendreciseau'>Prendre le Ciseau d'argent ?</a></li>\
                </ul>\
                 </p>\"",
      {
          

            actions: {
                prendremaillet: function(character, system, action) {
                     $( "ul.options" ).remove(); //obligé de bypass la fonction en carton du framework
                  system.addCharacterInventory("Maillet dur"); 
                        system.write( "<p class='transient'>il vous faut lachez un objet</p>" ); 
                        if(system.isItemExistInventory("Maillet dur")){
                     var res = system.buildMenuCharacterInventory(); 
                   }
                }, 
                 prendreciseau: function(character, system, action) {
                   $( "ul.options" ).remove();
                   system.addCharacterInventory("Ciseau argent"); 
                   system.write( "<p class='transient'>il vous faut lachez un objet</p>" ); 
                    if(system.isItemExistInventory("Ciseau argent")){
                 var res = system.buildMenuCharacterInventory(); 
                 }
            }
        }
      }
        ),
 page_35: new undum.SimpleSituation(
 "<p class='transient'> \
 Lorsque vous entrez dans la pièce, la porte se referme derrière vous. \
 Vous entendez un déclic et un sifflement. Au milieu du plafond, il y a \
 un orifice par lequel s'échappe un jet de gaz à l'odeur âcre. Vous \
 prenez une inspiration et vous toussez très fort. Vous regardez la \
 porte, puis la clé. Allez-vous retourner à cette porte et prendre la fuite \
 (<a href='page_136'>rendez-vous alors au 136)</a>, ou retenir votre respiration et vous \
 précipiter sur la clé pour vous en emparer (<a href='page_361'> rendez-vous dans ce cas au \
 361)</a> ?\
 </p>\""),
 page_36: new undum.SimpleSituation(
 "<p class='transient'> \
 <img  src='media/img/36_img.JPG' class='float_center'>\
 La porte verrouillée s'ouvre à la volée et une puanteur nauséabonde \
 vous monte aux narines. À l'intérieur de la pièce, le plancher est \
 recouvert de vase, d'os et de végétaux en décomposition. Un vieil \
 homme aux cheveux ébouriffés, vêtu de haillons, se rue sur vous en \
 hurlant. Sa barbe est longue et grise et il brandit un vieux pied de \
 chaise en bois. Est-il simplement fou comme il semblerait, ou bien y \
 a-t-il là un nouveau piège 1 Vous avez le choix entre crier plus fort \
 que lui pour essayer de le calmer <a href='page_263'>(et vous rendre au 263) </a>, ou tirer \
 votre épée et l'attaquer <a href='page_353'>(vous irez dans ce cas au 353).</a>\
 </p>\""),
 page_37: new undum.SimpleSituation(
 "<p class='transient'> \
 Debout au milieu du croisement, vous avez le choix entre aller au nord \
 <a href='page_366'>rendez-vous au 366 </a> .. <a href='page_11'>à l'ouest rendez-vous au 11</a>\
  <a href='page_277'>, ou au sud (rendez-vous au 277)</a>\
 </p>\""),
 page_38: new undum.SimpleSituation(//action rajout de provision 
 "<p class='transient'> \
 Vous ouvrez la porte et vous trouvez le garde-manger du Loup-Garou, \
 un mélange d'os et de viande avariée. L'odeur est repoussante mais \
 vous découvrez cependant un bocal d'œufs de caille qui semblent tout \
 à fait mangeables. Si vous voulez, vous pouvez les prendre, ils vous \
 feront deux repas supplémentaires ; ajoutez alors 2 points à vos \
 Provisions. De retour dans la pièce, vous pouvez maintenant sortir par \
 la porte sud.<a href='page_66'> Rendez-vous au 66.</a>\
 </p>\"" , //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.setQuality('provision', character.qualities.provision +2);
            }
        }
        ),
 page_39: new undum.SimpleSituation(//action BASTON DE FIN 
 "<p class='transient'> \
 Votre adversaire est surpris que vous ayez disparu et, levant les mains \
 pour les mettre en visière au-dessus de ses yeux, il scrute la pièce d'un \
 regard intense. Il sent votre présence, mais ne sait pas exactement où \
 vous êtes. Vous tirez votre épée et vous marchez sur lui. Il penche la \
 tête et renifle. En le combattant, il vous faudra maintenir une certaine \
 distance entre lui et vous car, s'il parvient à vous saisir, votre \
 invisibilité ne vous sera plus d'aucun secours. Mais tant que vous \
 restez inaccessible, vous bénéficiez des avantages suivants :\
 Vous pouvez ajouter 2 points au chiffre obtenu en lançant le dé \
 lorsque vous déterminez votre Force d'Attaque.\
 Chaque assaut victorieux lui enlève 3 points d'ENDURANCE, car, \
 comme il ne peut pas vous voir, il lui est impossible de se défendre \
 efficacement.\
 Chaque fois qu'il vous inflige une blessure, jetez un dé. Si le chiffre \
 obtenu est impair, il vous a blessé normalement. Si ce chiffre est 2 ou \
 4, il ne vous a infligé qu'une blessure à 1 point. Si vous faites un 6, \
 vous avez paré le coup et vous n'êtes pas blessé.\
 Menez la bataille à son terme :\
 SORCIER HABILETÉ: 11 ENDURANCE: 18\
 .\
  <ul class='options'>\
                <li><a href='./attack'>Attaquez le sorcier!</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
            console.log("the system is " + system); 
                           var result = undum.game.fightmago(character, system , undum.game.bestiaire['page_142'][0].monstre[undum.game.nombrederound]);    
                            
                        if (undum.game.bestiaire['page_142'][0].monstre[undum.game.nombrederound].endurance <=0)
                        {
                          
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_142'][0].monstre[undum.game.nombrederound].nom+"!!"
                                         + " vous êtes vainqueur <a href='page_396'>Rendez-vous au 396</a> " 
                                         +"   </p>" ); 
                       
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            
                        }
                    

                   }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
            $( "hr" ).remove();
           }
       }
       ),
 page_40: new undum.SimpleSituation(
 "<p class='transient'> \
 Le bruit perçant devient de plus en plus fort. La douleur est \
 insupportable. Réduisez votre total d'HABILETÉ d'1 point à cause de \
 ce supplice. Vous avancez à tâtons dans le noir pour essayer de trouver \
 un mur. Allez-vous vers :\
 Le mur ouest ?<a href='page_355'> Rendez-vous au 355</a>\
 Le mur nord ? <a href='page_265'> Rendez-vous au 265</a>\
 Le mur est ?<a href='page_181'> Rendez-vous au 181</a>\
 <img  src='media/img/101_img.JPG' class='float_right'>\
 </p>\"", 
    {
       enter: function(character, system, to) {
               system.setQuality('habilite', character.qualities.habilite -1);
            }
        }
        ), 
  page_41: new undum.SimpleSituation(//action
 "<p class='transient'> \
 C'est un adversaire redoutable : c'est un ÊTRE ! Il est massif, puissant \
 et malfaisant. Le combat s'engage :\
 L'ÊTRE HABILETÉ: 9 ENDURANCE: 6\
 Vous combattez avec votre épée.\
  <ul class='options'>\
                <li><a href='./attack'>Attack!</a></li>\
                </ul>\
                 </p>\""  ,
                  {
          actions: {
          attack: function( character, system, action) {
                          
                           system.write( "<p class='transient'>Vous avez touchez le wight!!"
                                         + " <a href='page_310'>Rendez vous au Cliquez !! " 
                                         +" </a>.</p>" ); 
                        }
                       

                   }, 
                   exit:function(character, system, action) {
                 $( "hr" ).remove();
            }
                 }
       
                 ),
 page_42: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous arrivez enfin au bout du couloir. Vous vous trouvez à un \
 croisement. Vous pouvez aller à l'ouest (<a href='page_257'>rendez-vous au 257</a>), ou à \
 l'est<a href='page_113'> Rendez-vous au 113</a> .\
 </p>\""),
 page_43: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes dans un passage nord-sud.<a href='page_354'> Pour allez au nord </a>, \
 . Pour le <a href='page_52'>sud, rendez-vous au 52 </a>.\
 </p>\""),
 page_44: new undum.SimpleSituation(
 "<p class='transient'> \
 Haletant après la bataille, vous vous asseyez pour récupérer et vous \
 finissez de manger les Provisions que vous aviez entamées. \
 Finalement, vous rangez vos affaires dans votre sac à dos et vous \
 avancez dans le cours d'eau.<a href='page_399'> Rendez-vous au 399. </a>\
  <ul class='options'>\
                <li><a href='./repas'>Voulez vous Prendre un Repas ?</a></li>\
                </ul>\
                 </p>\"",
                  {
  actions: {
  repas:function(character, system, action){
                      if((character.qualities.provision>0))
                      {
                        system.setQuality('provision', character.qualities.provision -1);
                        system.setQuality('endurance', character.qualities.endurance +4);
                        //undum.game.nombretentative++; 
                        system.clearLinks('./repas'); 
                        

                      }
        }
        }
        }),
 page_45: new undum.SimpleSituation(
 "<p class='transient'> \
 Le Fromage heurte le portrait et rebondit. Vous entendez un rire \
 sinistre qui s'élève des murs et vous comprenez que le Sorcier est en \
 train de se moquer de vous. Vous décidez de quitter la pièce par la \
 porte sud.<a href='page_90'> Rendez-vous au 90.</a>\
 </p>\""),
 page_46: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes dans un petit passage est-ouest, avec une porte qui barre la \
 direction de l'est. A l'ouest, le passage tourne vers le sud au bout de \
 quelques mètres. Pour suivre ce tournant, <a href='page_4'>rendez-vous au 4</a>. Si vous \
 choisissez de passer la porte <a href='page_206'>Rendez-vous au 206</a>.\
 </p>\""),
 page_47: new undum.SimpleSituation(//action
 "<p class='transient'> \
 Lorsque vous êtes au milieu de la rivière, le pont se met à se balancer \
 sous votre poids. La rambarde se dérobe brusquement au moment où \
 vous vous appuyez dessus. \
  <ul class='options'>\
                <li><a href='./lucktest'>Lancez un dé.!</a></li>\
                </ul>\
                 </p>\"", {
          
                                actions: {
                                    lucktest: function(character, system, action) {
                                        if( system.rnd.dice(1,6) < 5 )  
                                        {
                                              system.write( "<p class='transient'><strong>vous retrouvez votre équilibre</strong></p><br>") ; 
                                              system.doLink( 'page_298' );

                                        }
                                        else
                                        {
                                            system.write( "<p class='transient'> Un 6 vous précipite dans la \
                                              rivière et vous allez au 158 </p>") ;
                                            system.doLink( 'page_158' );
                                        }

                                    }
                                }
                    }
        ),
 page_48: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous trouvez dans un couloir est-ouest. Si vous allez à l'est vous \
 arriverez à un tournant s'orientant vers le nord.<a href='page_391'> Si vous choisissez \
 cette direction,</a> <a href='page_60'>  Pour aller à l'ouest, rendez-vous \
 au 60.</a>\
 </p>\""),
 page_49: new undum.SimpleSituation(
 "<p class='transient'> \
 La porte grince en s'ouvrant sur ses gonds rouillés. La pièce est \
 sombre et vos yeux s'habituent à l'obscurité tandis que vous refermez \
 la porte derrière vous. Vous entendez un bruissement de pas, mais \
 avant que vous ayez pu réagir, vous recevez sur la tête un coup qui \
 vous assomme. Vous perdez 2 points d'ENDURANCE et <a href='page_122'> vous allez au \
 122. </a>\
 </p>\"", //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.animateQuality('endurance', character.qualities.endurance -2);
                    }
        }
        ),
 page_50: new undum.SimpleSituation(
 "<p class='transient'> \
 La créature que vous avez tuée s'écroule sur le sol. Vous fouillez ses \
 vêtements sans rien trouver, mais un petit sac pend à son cou. A \
 l'intérieur du sac se trouve une petite clé de bronze gravée du chiffre \
 9. Vous pouvez la prendre si vous le désirez. Il n'y a rien d'autre \
 d'intéressant dans la caverne, et vous sortez en retournant à la \
 bifurcation. <a href='page_269'> Rendez-vous au 269. </a>\
  <ul class='options'>\
                <li><a href='./prendre'>Prendre la clef!</a></li>\
                </ul>\
 </p>\"", 
      {
          

            actions: {
                prendre: function(character, system, action) {
                  system.addCharacterInventory("clef-9"); 
                  system.clearContent('ul'); 
                }
            }
        }
        ),
  page_51: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous buvez la Potion et vous voyez alors une expression d'étonnement \
 naître sur le visage du Troll. Il s'avance vers vous, il essaie de vous \
 toucher, mais vous faites un pas de côté et il ne rencontre que le vide. \
 Il gesticule en tous sens pour tenter de vous saisir, mais vous parvenez \
 facilement à l'esquiver. Il finit par abandonner et retourne dans sa \
 chambre juste à temps, au moment où vous sentez que vous réappa-\
 raissez. Prenez 2 points de CHANCE. Vous pouvez continuer votre \
 chemin en direction du nord.<a href='page_287'>  Rendez-vous au 287. </a>\
 </p>\"", //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.setQuality('chance', character.qualities.chance +2);
        
            }
        }
        ),
 page_52: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous trouvez à un croisement à angle droit en forme de T. Un \
 passage vers l'est part d'un corridor nord-sud.\
 Si vous allez au sud <a href='page_391'> Rendez-vous au 391 </a>\
 Si vous voulez essayer de découvrir des passages secrets dans le \
 couloir qui mène vers le sud <a href='page_362'> Rendez-vous au 362</a>\
 Si vous allez au nord <a href='page_354'> Rendez-vous au 354</a>\
 Si vous voulez découvrir des passages secrets dans le couloir qui mène \
 vers le nord <a href='page_234'> Rendez-vous au 234</a>\
 Si vous prenez la direction de l'est <a href='page_291'> Rendez-vous au 291 </a>\
 </p>\""),
 page_53: new undum.SimpleSituation(//action
 "<p class='transient'> \
 Vous essayez d'enfoncer la porte d'un vigoureux coup d'épaule. Lancez \
 deux dés. Si le chiffre obtenu est égal ou inférieur à votre total \
 d'HABILETÉ\
   <ul class='options'>\
                <li><a href='./porte'>Enfoncer la porte!</a></li>\
                </ul>\
                 </p>\"",  //DEBUG
 {
  actions: {
  porte: function( character, system, action) {
   
           if( system.rnd.dice(2,6) <= character.qualities.habilite )  
                    {
                          system.write( "<p class='transient'><strong>la porte s'ouvre</strong></p><br>") ; 
                          system.doLink( 'page_155' );

                    }
                    else
                    {
                        system.write( "<p class='transient'>la porte est ébranlée mais"
                        + "ne bouge pas, et vous grimacez de douleur à cause du choc à l'épaule. "
                        + " vous continuez votre  chemin le long du couloir </p>") ;
                        system.animateQuality('endurance', character.qualities.endurance -1);
                        system.doLink( 'page_300' );
                    }

           }
         }
       }
       ),
 page_54: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous trouvez devant une porte à l'extrémité nord d'un passage \
 nord-sud. Pour aller au sud, <a href='page_308'>rendez-vous au 308</a>. Pour passer la porte, \
 <a href='page_179'>Rendez-vous au 179</a>\
 </p>\""),
 page_55: new undum.SimpleSituation(
 "<p class='transient'> \
 Lancez deux dés. Si le chiffre obtenu est inférieur ou égal à votre total \
 de CHANCE et s'il est également inférieur ou égal à votre total \
 d'ENDURANCE, alors .... \
  <ul class='options'>\
                <li><a href='./lucktest'>Tentez Votre chance!</a></li>\
                </ul>\
 </p>\"", 
      {
          

            actions: {
                lucktest: function(character, system, action) {
                    
                    if( (system.rnd.dice(2,6) < character.qualities.chance) && (system.rnd.dice(2,6) < character.qualities.endurance) )  
                    {
                      system.clearLinks('./lucktest');
                          system.write( "<p class='transient'>vous parvenez à vous tenir sur le radeau et à le"
                            +"pour atteindre la rive nord (n'enlevez pas de point de CHANCE)."
                            +" Vous arrivez sain et sauf, mais lorsque vous mettez le pied"
                            +"  sur la berge, le radeau s'éloigne et dérive en traversant la rivière"
                            +"jusqu'à la rive sud.  <a href='page_7'> Rendez-vous au 7. </a>  </p><br>") ; 
                         

                    }
                    else
                    {
                      system.clearLinks('./lucktest');
                        system.write( "<p class='transient'>le radeau vous  "
                          +" envoie dans l'eau, et il vous faut nager pour revenir sur la rive sud"
                          +"  <a href='page_166'>Rendez-vous alors au 166. </a>  </p>") ;
                    }

                }
            }
        }
        ),
 page_56: new undum.SimpleSituation(
 "<p class='transient'> \
 Lorsque votre épée tombe à l'eau, une voix, dans un gargouillement, \
 vous dit: «Merci! ». A présent, il semble que la seule façon de\
 poursuivre votre chemin soit de nager en suivant le courant vers l'est. \
 Vous plongez dans l'eau.<a href='page_399'> Rendez-vous au 399.</a>\
 </p>\""),
 page_57: new undum.SimpleSituation(
 "<p class='transient'> \
 Lorsque vous entrez dans la caverne, vous entendez des bruits de pas \
 sonores derrière vous, des pieds qui se posent lourdement sur le sol \
 rocailleux. Vous vous accroupissez près de l'entrée, dans une petite \
 anfractuosité de rocher. Les pas se font de plus en plus pesants et vous \
 voyez un OGRE immense entrer dans la caverne ! Il mesure plus de \
 deux mètres de haut, et est vêtu de vêtements grossiers taillés dans la \
 peau d'un quelconque animal. Il tient à la main une grosse massue de \
 bois. Vous avez le choix entre :\
 L'attaquer quand il entre <a href='page_16'>Rendez-vous au 16 </a>\
 Essayer de vous glisser au-dehors sans qu'il vous remarque <a href='page_2'> Rendez-\
 vous au 2 </a>\
 Essayer de détourner son attention en jetant quelque chose à l'autre \
 bout de la caverne <a href='page_119'> Rendez-vous au 119 </a>\
 </p>\""),
 page_58: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous rampez prudemment le long du couloir. Bientôt, il tourne \
 brusquement vers le nord. Il y a dans le coin un solide banc de bois et \
 au-dessus du banc une pancarte sur laquelle on peut lire : « Repose-toi \
 ici, voyageur fourbu. » Vous pouvez vous arrêter en cet endroit et \
 prendre un repas si vous le désirez (<a href='page_15'>rendez-vous alors au 15</a>). Vous \
 pouvez également choisir de continuer (<a href='page_367'>et vous rendre au 367 </a>).\
 </p>\""),
 page_59: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous marchez vers l'ouest pendant quelque temps, puis vers le nord \
 jusqu'à un étrange tournant en épingle à cheveu qui vous ramène vers \
 le sud. Vous finissez par arriver à un croisement qui vous offre trois \
 voies possibles. <a href='page_150'>Rendez-vous au 150. </a>\
 </p>\""),
 page_60: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous marchez le long du couloir pour découvrir que le passage qui \
 mène vers l'ouest est bloqué par une lourde herse. Vous retournez là \
 d'où vous venez.<a href='page_48'> Rendez-vous au 48. </a>\
 </p>\""),
 page_61: new undum.SimpleSituation(
 "<p class='transient'> \
 En examinant la caverne, vous entendez soudain un bruit de pas \
 précipités derrière vous, et lorsque vous vous retournez, vous voyez se \
 dessiner devant vous la silhouette noire et saugrenue d'une \
 ARAIGNÉE GEANTE qui vous a suivi. L'araignée n'est qu'à un mètre \
 de vous et vous tirez aussitôt votre épée pour vous défendre.\
 <ul class='options'>\
                <li><a href='./attack'>Attack!</a></li>\
                </ul>\
                 </p>\"",  //DEBUG
 {
  actions: {
  attack: function( character, system, action) {
    console.log("the system is " + system); 
                   var result = undum.game.fight(character, system , undum.game.bestiaire['page_61'][0].monstre[0]);    
                    
                if (result == 'victory')
                {
                  system.clearContent('ul'); 
                  undum.game.nombrederound = 0; 
                   system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_61'][0].monstre[0].nom+"!!"
                                 + " <a href='page_29'>Rendez vous au Cliquez !! " 
                                 +" </a>.</p>" ); 
                }
                if (result == 'death')
                {
                system.doLink('death');

                } 

                if (result == 'noDeath')
                {
                     undum.game.nombrederound++; 
                }
                   if(undum.game.nombrederound == 2)
                {
                     system.write( "<p class='transient'><a href='page_375'>vous pouvez fuir vers le croisement</a>  </p>") 
                }
               

           }
         }
       }
         ),
 page_62: new undum.SimpleSituation(
 "<p class='transient'> \
 <img  src='media/img/62_img.JPG' class='float_right'>\
 Vous poursuivez votre chemin le long du couloir vers l'est. Au bout \
 d'une trentaine de mètres, le couloir s'oriente au sud. Vous suivez le \
 tournant et vous êtes finalement arrêté par une massive porte blindée. \
 Si vous voulez essayer d'ouvrir la porte, <a href='page_6'>rendez-vous au 6</a>. Si vous \
 préférez revenir en arrière et passer par l'ouverture étroite,<a href='page_89'> rendez-\
 vous au 89.</a>\
 </p>\""),
 page_63: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous marchez le long du couloir et vous vous apercevez qu'il devient \
 de plus en plus étroit. A un certain moment, vous vous baissez car le \
 plafond est de plus en plus bas, et, au même instant, un rire s'élève et \
 se répercute en écho autour de vous. Souhaitez-vous poursuivre ? Si \
 oui, <a href='page_281'>rendez-vous au 281</a>. Si vous préférez revenir en arrière,<a href='page_10'> rendez-\
 vous au 10.</a>\
 </p>\""),
 page_64: new undum.SimpleSituation( 
 "<p class='transient'> \
 La Goule danse de joie autour de votre corps et l'étend sur le sol à côté \
 des autres. Puis elle vous retourne et enfonce ses dents dans la partie \
 charnue de votre individu. Ce n'est pas si souvent qu'elle peut se \
 nourrir de chair fraîche.\
 Votre aventure est terminée.\
 <ul class='options'>\
                <li><a href='./end'>Visitez votre tombeau!</a></li>\
                </ul>\
 </p>\"", {
          

            actions: {
                end: function(character, system, action) {
                   /* system.setQuality("chance", character.qualities.chance+1);
                    system.doLink('example-choices');*/
                    system.doLink('death'); 
                    

                }
            }
        } 
 ),
 page_65: new undum.SimpleSituation(//fuite
 "<p class='transient'> \
 Alors que vous bondissez sur le Chef, son serviteur se relève, ramasse \
 un gourdin et rejoint la mêlée. Mais à votre grand dam, c'est vous qu'il \
 attaque ! Misérable ingrat ! Voyant cela, vous pouvez choisir de \
 prendre la fuite par la porte le long du couloir  , \
 ou de poursuivre le combat . Si vous choisissez la \
 fuite, vous subirez les pénalités habituelles prévues dans ce cas.\
<ul class='options'>\
                <li><a href='./attack'>Attaquez!</a></li>\
                <li><a href='./fuite'>Prendre la fuite</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
           
                      system.doLink('page_372');
                    
                   }, 

            fuite:function( character, system, action){
              system.clearLinks('./attack'); 
              system.clearLinks('./fuite'); 
                        system.animateQuality( 'endurance', character.qualities.endurance -2 )
                            if (character.qualities.endurance <= 0 )
                            {
                              system.doLink('death');
                            }
                            else
                            {
                              system.doLink('page_293');
                            }
                         
                    }
                 }
       }),
 page_66: new undum.SimpleSituation(
 "<p class='transient'> \
 La porte s'ouvre et vous vous retrouvez dans le passage qui mène à la \
 berge de la rivière. Vous retournez au cours d'eau et vous avez alors le \
 choix : ou bien vous vous rendez devant la porte qui s'ouvre au milieu \
 du pan de roc <a href='page_372'>(et vous allez dans ce cas au 104)</a>, ou bien vous suivez le \
 passage vers l'est le long de la rivière <a href='page_99'>(rendez-vous alors au 99)</a>.\
 </p>\""),
 page_67: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous tirez la corde et une petite porte s'ouvre, révélant un passage qui \
 mène à un couloir nord-sud. Préférez-vous revenir au croisement <a href='page_267'>(et \
 vous rendre au 267) </a> ou passer par cette porte secrète <a href='page_177'>(en vous rendant \
 au 177)? </a>\
 </p>\""),
 page_68: new undum.SimpleSituation(
 "<p class='transient'> \
 Les deux Lutins tortionnaires échangent un regard stupéfait, puis ils se \
 tournent vers vous. Ils parlent entre eux et vous font signe d'attendre \
 tandis qu'ils vont chercher un autre Nain pour les distraire. Ils dis-\
 paraissent de la pièce et vous vous rendez compte que le Nain est tout \
 à fait mort, ainsi que vous l'aviez deviné. Vous estimez préférable de \
 partir et vous vous hâtez le long du couloir en direction du nord. <a href='page_303'>Vous \
 allez au 303.</a>\
 </p>\""),
 page_69: new undum.SimpleSituation(
 "<p class='transient'> \
 Au bout d'un moment, le couloir tourne vers le nord et vous le suivez \
 jusqu'à ce que vous arriviez à une autre bifurcation. Là, vous voyez \
 une flèche gravée dans le roc qui indique le nord et vous décidez \
 d'essayer cette direction.<a href='page_244'> Rendez-vous au 244.</a>\
 </p>\""),
 page_70: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous suivez vers l'est le couloir au sol pavé, puis vous le suivez vers \
 le nord, puis encore vers l'est, et enfin à nouveau au nord jusqu'à ce \
 que vous aboutissiez à un croisement.<a href='page_244'> Rendez-vous au 267.</a>\
 </p>\""),
    page_71: new undum.SimpleSituation(
       "<p class='transient'> \
                Le passage forme un virage à droite en direction du nord. Vous vous\
                approchez prudemment d'une guérite qui se trouve au coin et en jetant\
                un coup d'oeil à l'intérieur, vous apercevez une étrange créature qui\
                ressemble à un Lutin, vêtue d'une armure de cuir et endormie à son\
                poste. Vous essayez de passer devant sur la pointe des pieds. Tentez\
                votre Chance. Si vous êtes chanceux, le Lutin ne se réveille pas et\
                continue à ronfler bruyamment.  \
                 <img src='media/img/lutin_71.JPG' class='float_right'>\
                Si vous êtes malchanceux, vous faites en marchant un bruit qui le réveille, et il\
                ouvre les yeux. \
        <ul class='options'>\
     <li><a href='./lucktest'>Tentez votre Chance</a></li>\
     </ul>\
         </p>\"", //ouvre les condifion
      {
          

            actions: {
                lucktest: function(character, system, action) {
                    if( system.rnd.dice(2,6) < character.qualities.chance )  
                    {
                          system.write( "<p class='transient'><strong>Vous etes chanceux</strong></p><br>") ; 
                          system.doLink( 'page_301' );

                    }
                    else
                    {
                        system.write( "<p class='transient'>pas de chance </p>") ;
                        system.doLink( 'page_248' );
                    }

                }
            }
        }
        ),
 page_72: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous avez à présent une nouvelle armure, semblable à la vôtre. \
 Choisissez laquelle vous voulez conserver et jetez l'autre.<a href='page_319'> Rendez-\
 vous au 319.</a>\
  <ul class='options'>\
 <li><a href='./garde'>conserver l'armure?</a></li>\
  <li><a href='./jette'>jetez l'armure?</a></li>\
 </ul>\
  </p>\"" , //ouvre les condifion
      {
      actions: {
                garde: function(character, system, action) {
                
              system.removeCharacterInventory("cuirasse"); 
                    system.clearLinks('./garde');

                },
                jette: function(character, system, action) {
                system.removeCharacterInventory("cuirasse"); 
                    system.clearLinks('./jette');
                }
            }, 
      exit: function(character, system, to) {
            $( "hr" ).remove();
      }
        }),
 page_73: new undum.SimpleSituation(
 "<p class='transient'> \
 Devant vous, le passage vous mène en direction du nord. Le sol \
 rocheux devient sableux et finalement, vous marchez sur du sable à \
 gros grains. Vous remarquez que le passage s'élargit et vous entendez \
 le bruit d'une rivière qui coule à quelque distance en avant. Vous \
 poursuivez votre chemin, et vous arrivez dans une grande caverne que \
 traverse la rivière.<a href='page_218'> Rendez-vous au 218. </a>\
 </p>\""),
 page_74: new undum.SimpleSituation( //action
 "<p class='transient'> \
 Tentez votre Chance. Si vous êtes chanceux, vous pouvez échapper à \
 la puissance de son regard \
 <ul class='options'>\
                <li><a href='./lucktest'>Tentez votre Chance!</a></li>\
                </ul>\
                 </p>\"", //ouvre les condifion chance
      {
          

            actions: {
                lucktest: function(character, system, action) {
                    if( system.rnd.dice(2,6) < character.qualities.chance )  
                    {
                          system.write( "<p class='transient'><strong>Vous etes chanceux</strong>"
                            +"  vous échapper à la puissance de son regard et vous préparer à l'attaque."
                            +" <a href='page_279'> Rendez-vous alors au 279. </a></p><br>") ; 
                         

                    }
                    else
                    {
                        system.write( "<p class='transient'> vous êtes malchanceux, vous êtes sous sa domination"
                        +"  et vous laissez tomber votre épée lorsqu'il vous l'ordonne."
                        +" <a href='page_118'>Rendez- vous dans ce cas au 118. </a> </p>") ;
                    }

                }
            }
        }  
                 ),
 page_75: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous asseyez et prenez un peu de repos après ce combat \
 exténuant. Vous pouvez manger quelques Provisions à présent. Vous \
 arrachez la pierre précieuse à la statue immobile. Elle est lourde et \
 vaut 50 Pièces d'Or. Vous la rangez dans votre sac à dos. En \
 examinant la pièce et la statue vous vous apercevez que sur la poitrine \
 de celle-ci, il y a une plaque de métal amovible. Vous l'enlevez, \
 découvrant ainsi une cachette qui contient une clé. Vous la détaillez et \
 vous remarquez que le nombre 111 est gravé dessus. Avec un sourire, \
 vous rangez la clé, avec la pierre précieuse, dans votre sac à dos, et \
 vous vous mettez en chemin en direction du croisement.<a href='page_93'> Rendez-vous \
 au 93  </a> après avoir pris 3 points de CHANCE - vous avez trouvé là un \
 objet très précieux.\
  </p>\"", {
          

           
                enter: function(character, system, action) {
                   /* system.setQuality("chance", character.qualities.chance+1);
                    system.doLink('example-choices');*/
                 system.addCharacterInventory("pierre précieuse"); 
                 system.addCharacterInventory("clef-111"); 
                    system.animateQuality( 'chance', character.qualities.chance +3 );

                }
            
        } 
        ),
 page_76: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous arrivez à une autre bifurcation. Une flèche gravée dans le mur \
 indique le nord et vous décidez de suivre cette direction. <a href='page_244'>Rendez-vous \
 au 244. </a>\
 </p>\""),
 page_77: new undum.SimpleSituation( 
 "<p class='transient'> \
 Après avoir parcouru plusieurs mètres dans le passage, vous arrivez à \
 un croisement qui vous permet d'aller à l'ouest ou à l'est. Il y a une \
 anfractuosité dans la roche du mur nord qui vous offre un abri où vous \
 pourrez manger des Provisions et vous reposer sans risquer de vous \
 faire voir. Si vous souhaitez prendre un repas à cet endroit, faites-le. \
 Vous aurez ensuite le choix entre aller à l'est <a href='page_345'>(en vous rendant au 345)</a> \
 ou à l'ouest (<a href='page_18'>rendez-vous alors au 18)</a>.\
 <ul class='options'>\
                <li><a href='./repas'>Voulez vous Prendre un Repas ?</a></li>\
                </ul>\
                 </p>\"",
                  {
  actions: {
      repas:function(character, system, action){
                          if((character.qualities.provision>0))
                          {
                            system.setQuality('provision', character.qualities.provision -1);
                            system.setQuality('endurance', character.qualities.endurance +4);
                            //undum.game.nombretentative++; 
                            system.clearLinks('./repas'); 
                            

                          }
            }
        }
      }
        ),
 page_78: new undum.SimpleSituation(
 "<p class='transient'> \
 Le passage aboutit à une massive porte de bois dotée de gonds en \
 métal. En écoutant à cette porte, vous entendez quelqu'un marmonner \
 étrangement, et un bruit de marmites et de casseroles qui \
 s'entrechoquent. Ils sont plusieurs, là-dedans, cela ne fait aucun doute.\
 Voulez-vous franchir cette porte<a href='page_159'> (et vous rendre au 159) </a>, ou \
 rebrousser chemin  <a href='page_237'>(en allant au 237) </a>\
 </p>\""),
 page_79: new undum.SimpleSituation(
 "<p class='transient'> \
 Le couloir se termine en cul-de-sac Si vous voulez chercher un \
 passage secret, <a href='page_137'>rendez-vous au 137</a>. Sinon, <a href='page_267'> retournez au croisement, au \
 267.</a>\
 </p>\""),
 page_80: new undum.SimpleSituation(
 "<p class='transient'> \
 La clé entre dans la serrure et la porte s'ouvre. Vous vous retrouvez \
 alors dans un hangar à bateaux. De nombreux bateaux, à divers stades \
 de leur construction, sont rassemblés en cet endroit. En dehors de la \
 porte que vous venez de franchir, il y en a une autre dans le mur nord. \
 Quand vous entrez, les Squelettes interrompent leurs besognes et \
 tendent leurs cous osseux pour vous regarder passer. Ils ramassent des\
 planches et des marteaux, puis s'avancent vers vous. Ils sont cinq. \
 Vous avez le choix entre :\
 Leur adresser un sourire gêné et revenir sur vos pas en repassant par la \
 porte pour regagner le couloir <a href='page_129'>Rendez-vous au 129 </a>\
 Leur dire que vous êtes venu acheter un bateau <a href='page_123'> Rendez-vous au 123 </a>\
 Leur dire que vous êtes leur nouveau patron et leur donner l'ordre de \
 se remettre au travail <a href='page_195'> Rendez-vous au 195 </a>\
 Tirer votre épée et vous préparer à la bagarre <a href='page_140'> Rendez-vous au 140 </a>\
 </p>\""),
 page_81: new undum.SimpleSituation(
 "<p class='transient'> \
 Un bruit vous fait sursauter et vous incite à quitter la pièce au plus \
 vite. Vous allez examiner la porte nord. <a href='page_205'>Rendez-vous au 205. </a>\
 </p>\""),
        page_82:new undum.SimpleSituation(
      "<p class='transient'> \
       La porte s'ouvre sur une petite pièce où règne une forte odeur. Au\
                milieu se trouve une table bancale sur laquelle est posée une bougie\
                allumée. Sous la table, il y a une petite boîte en bois. Une créature de\
                petite taille, à la silhouette trapue, le visage laid et couvert de verrues,\
                don sur une paillasse posée dans un coin, à l'autre bout de la pièce ;\
                c'est une créature semblable à celle que vous avez trouvée endormie\
                dans la guérite. C'est probablement le veilleur de nuit. Vous pouvez\
                choisir de regagner le couloir et de continuer vers le nord <a href='page_208'>(rendez-vous\
                au 208)</a> ou de ramper sur le sol de la pièce pour essayer de vous\
                emparer de la boîte sans réveiller la créature. Si vous essayez de voler\
                la boîte, tentez votre Chance. Si vous êtes chanceux, la créature ne se\
                réveille pas -  <a href='page_147'>rendez-vous alors au 147</a>.Si vous êtes malchanceux,\
                 <a href='page_33'>rendez-vous au 33.</a>\
                 <ul class='options'>\
                 <li><a href='./lucktest'>Tentez votre Chance</a></li>\
                 </ul>\
      </p>\"", 
      { //ouvre la condition 
      actions:{
              lucktest: function(character, system, action) {
                    if( system.rnd.dice(2,6) < character.qualities.chance )  
                    {
                        system.animateQuality( 'chance', character.qualities.chance );
                          system.write( "<p class='transient'><strong>Vous etes chanceux</strong></p><br>") ; 
                          system.doLink( 'page_147' );

                    }
                    else
                    {
                         system.animateQuality( 'chance', character.qualities.chance );
                        system.write( "<p class='transient'>pas de chance </p>") ;
                        system.doLink( 'page_33' );
                    }

                }

      }
    }
    ),
 page_83: new undum.SimpleSituation(//chance
 "<p class='transient'> \
 Tentez votre Chance. Si vous êtes chanceux, vous parvenez à franchir \
 la porte nord \
 <ul class='options'>\
                <li><a href='./lucktest'>Tentez Votre chance</a></li>\
                </ul>\
                 </p>\"",  //ouvre les condifion chance
      {
          

            actions: {
                lucktest: function(character, system, action) {      
                    if( system.rnd.dice(2,6) < character.qualities.chance )  
                    {
                      system.setQuality('chance', character.qualities.chance -1);
                          system.write( "<p class='transient'><strong>Vous etes chanceux</strong></p><br>") ; 
                          system.doLink( 'page_360' );

                    }
                    else
                    {
                      system.setQuality('chance', character.qualities.chance -1);
                        system.write( "<p class='transient'>pas de chance </p>") ;
                        system.doLink( 'page_154' );
                    }

                }
            }
        }
        ),
 page_84: new undum.SimpleSituation(
 "<p class='transient'> \
 <img  src='media/img/84_img.JPG' class='float_center'>\
 La porte s'ouvre sur une petite pièce confortable, meublée d'une table, \
 de plusieurs chaises et d'une grande bibliothèque qui couvre \
 entièrement l'un des murs. Un vieil homme à la longue barbe grise est \
 assis à la table et sur son épaule, une petite créature ailée est \
 accroupie. Cet animal ne mesure pas plus de six centimètres de haut. Il \
 a deux bras et deux jambes ; sa peau a une couleur gris poussière. Il a \
 de petites dents blanches et pointues et ses ailes sont repliées dans son \
 dos. Le vieil homme ne dit rien lorsque vous franchissez la porte, mais \
 il vous fait signe de vous asseoir à la table. Il tient dans sa main deux \
 petits objets blancs qu'il agite devant vous. Vous avez le choix entre :\
 Vous asseoir comme il vous y invite<a href='page_204'> Rendez-vous au 204 </a>\
 Quitter la pièce et revenir au croisement <a href='page_280'> Rendez-vous au 280 </a>\
 Tirer votre épée et vous ruer en avant<a href='page_377'>  Rendez-vous au 377 </a>\
 </p>\""),
 page_85: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes à une croisée des chemins.\
 Pour aller au nord <a href='page_106'>Rendez-vous au 106 </a>\
 Pour aller au sud <a href='page_373'>Rendez-vous au 373</a>\
 Pour aller à l'est<a href='page_318'> Rendez-vous au 318</a>\
 Pour aller à l'ouest <a href='page_59'>Rendez-vous au 59</a>\
 </p>\""),
 page_86: new undum.SimpleSituation(//action bagarre
 "<p class='transient'> \
 D'énormes mâchoires s'ouvrent devant vous en un long bâillement. \
 D'après leur taille le CROCODILE à qui elles appartiennent et vers \
 lequel vous nagez doit mesurer au moins trois mètres de long. \
 L'animal fouette de sa queue la surface de l'eau et glisse vers vous. \
 Vous devez lancer deux assauts contre lui.\
 CROCODILE HABILETÉ: 7 ENDURANCE: 6\
 Votre combat attire vers vous une sorte de « turbulence » que vous \
 aviez remarquée précédemment et qui maintenant se déplace dans \
 votre direction. Vous observez ce remous du coin de l'oeil et il vous \
 faut prendre une décision. Si vous estimez que le Crocodile est à votre \
 merci, vous pouvez poursuivre le combat.\
 <ul class='options'>\
                <li><a href='./attack'>Attack!</a></li>\
                </ul>\
                 </p>\"",  //DEBUG
 {
  actions: {
  attack: function( character, system, action) {
    console.log("the system is " + system); 
                   var result = undum.game.fight(character, system , undum.game.bestiaire['page_86'][0].monstre[0]);    
                    
                if (result == 'victory')
                {
                  undum.game.nombrederound = 0; 
                   system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_86'][0].monstre[0].nom+"!!"
                                 + " <a href='page_259'>Rendez vous au Cliquez !! " 
                                 +" </a>.</p>" ); 
                }
                if (result == 'death')
                {
                system.doLink('death');

                } 

                if (result == 'noDeath')
                {
                      undum.game.nombrederound++; 
                }
                if(undum.game.nombrederound == 2)
                {
                     system.write( "<p class='transient'>Sinon, vous pouvez essayer d'occuper votre adversaire en"
                      +"ayant le faible espoir que le mystérieux visiteur qui s'approche vous "
                      +"aidera d'une quelconque manière. Dans ce cas, lancez un nouvel assaut"
                      + " <a href='page_350'>Rendez-vous au 350</a> </p>") 
                }

           }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
           }
         }
       }
       ),
 page_87: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes de retour à la bifurcation et, cette fois, vous allez au nord. \
   <a href='page_262'>Rendez-vous au 262. </a>\
 </p>\""),
 page_88: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous entrez dans une autre petite pièce vide au milieu de laquelle se \
 trouve une fontaine. Elle n'a rien de particulièrement remarquable, il \
 s'agit d'un poisson sculpté qui laisse échapper de sa bouche un mince \
 jet d'eau. Une pancarte en bois est accrochée au poisson et un message \
 y est inscrit. Il est écrit dans la langue des Lutins, une langue que vous \
 ne connaissez pas très bien. Vous ne pouvez pas comprendre le \
 premier mot, mais les deux autres signifient « .. .non potable ». Vous \
 avez très soif cependant. Allez-vous quand même boire à cette \
 fontaine ? Si oui, <a href='page_216'>rendez-vous au 216</a>. Sinon, vous passez votre \
 chemin et vous quittez la pièce par une porte qui s'ouvre dans le mur \
 nord<a href='page_384'>(rendez-vous au 384)</a> .\
 </p>\""),
 page_89: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous glissez dans l'ouverture et vous arrivez en haut d'un \
 escalier dont vous descendez prudemment les marches...<a href='page_286'> Rendez-vous \
 au 286.</a>\
 </p>\""),
 page_90: new undum.SimpleSituation(
 "<p class='transient'> \
 La porte s'ouvre sur un passage étroit que vous suivez en direction du \
 nord. Quelques mètres plus loin, le passage tourne vers l'est, puis vers \
 le nord à nouveau. À hauteur de ce deuxième virage, il y a une petite \
 niche creusée dans le roc. Elle semble constituer une excellente\
 cachette, et il y a même une grosse pierre sur laquelle on peut s'asseoir \
 confortablement. Vous avez le droit de vous arrêter ici et de manger \
 quelques-unes de vos Provisions si vous le souhaitez. Après vous être \
 reposé, vous continuerez vers le nord. <a href='page_253'> Rendez-vous au 253. </a>\
 </p>\""),
 page_91: new undum.SimpleSituation( //chance
 "<p class='transient'> \
 Si vous êtes chanceux, votre tricherie restera ignorée. Tentez votre \
 Chance. Si vous avez de la chance, vous partez avec vos gains. Lancez \
 deux dés pour voir combien de Pièces d'Or vous avez gagnées. Sinon... \
 <ul class='options'>\
                <li><a href='./lucktest'>Tentez votre chance ?</a></li>\
                </ul>\
                 </p>\"",
      {
          

            actions: {
                lucktest: function(character, system, action) {
                    system.animateQuality( 'chance', character.qualities.chance -1 );
                    var nbrGold = system.rnd.dice(2,6)
                    if( nbrGold < character.qualities.chance )  
                    {
                          system.write( "<p class='transient'><strong>Vous etes chanceux</strong>"
                            +" vous avez gagné "+ nbrGold+"Po "
                            +" <a href='page_131'>rendez-vous au 131</a> </p><br>") ; 
                         system.clearLinks('./lucktest'); 

                    }
                    else
                    {
                        system.write( "<p class='transient'>vous n'avez  pas de chance, les quatre Nains"
                        +" ont vu que vous distribuiez les cartes en les prenant sous le jeu."
                        +" Ils saisissent alors leurs haches derrière eux"
                        +" et vous attaquent.<a href='page_20'> Rendez-vous au 20.</a></p>") ;
                          system.clearLinks('./lucktest'); 
                    }

                }
            }
        }
        ),
 page_92: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes de retour au croisement. Vous regardez sur votre gauche \
 vers l'entrée de la caverne qui vous apparaît au lointain dans \
 l'obscurité, mais vous marchez droit devant vous <a href='page_71'>et vous allez au 71. </a>\
 </p>\""),
 page_93: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous revenez au croisement et, cette fois, vous prenez vers le nord. \
 <a href='page_8'>Rendez-vous au 8. </a>\
 </p>\""),
 page_94: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous marchez le long d'un couloir qui mène droit au sud, puis qui \
 tourne à l'ouest. Quelques mètres plus loin, il aboutit au croisement de \
 trois chemins. Vous pouvez essayer de découvrir un passage secret le \
 long du couloir (<a href='page_260'>rendez-vous au 260)</a>, ou aller droit au croisement \
 .<a href='page_329'>(rendez-vous au 329)</a>\
 </p>\""),
 page_95: new undum.SimpleSituation(
 "<p class='transient'> \
 Ces armes n'ont rien de remarquable, en fait il n'en est pas une seule \
 qui soit plus utile que votre épée. Tandis que vous fouillez les débris, \
 vous entendez des coups sourds en provenance du nord, suivis d'un cri \
 qui vous fait courir un frisson le long de l'échiné. Vous vous précipitez \
 vers la porte nord pour voir de quoi il retourne.<a href='page_205'> Rendez-vous au 205.</a>\
 </p>\""),
 page_96: new undum.SimpleSituation(
 "<p class='transient'> \
 La porte s'ouvre sur un petit couloir d'une quinzaine de mètres de \
 longueur. Il y a deux portes, une à chaque bout. Vous réalisez \
 maintenant ce qui provoquait ce bruit. Ce sont d'autres Squelettes ! Ils \
 sont quatre, armés d'épées, et ils courent le long du couloir, dans votre \
 direction. Ils ne semblent pas vous avoir vu, et vous découvrez une \
 anfractuosité dans le mur qui peut vous servir de cachette. Vous \
 décidez de vous y glisser. <a href='page_374'> Rendez-vous au 374. </a>\
 </p>\""),
 page_97: new undum.SimpleSituation(
 "<p class='transient'> \
 <img  src='media/img/97_img.JPG' class='float_center'>\
 « Entrez ! » vous ordonne une voix, et vous avancez dans une petite \
 pièce meublée d'une table, d'une chaise, d'étagères, de placards, etc., \
 qui tous ont connu de meilleurs jours. Sur les étagères s'alignent des \
 assiettes, des bols, des tasses et des centaines de vieux livres. Au \
 milieu de tout ce désordre un petit homme âgé, vêtu d'une robe de \
 chambre blanche et crasseuse, se balance d'avant en arrière, \
 confortablement installé dans un rocking-chair. Il fredonne quelque \
 chose d'un air joyeux en vous regardant fixement, et semble tout à fait \
 en paix avec le monde. Au bout d'un moment, il vous dit : « Bonjour. » \
 Vous avez le choix entre :\
 Engager la conversation avec lui <a href='page_334'> Rendez-vous au 334 </a>\
 Tirer votre épée et passer à l'attaque <a href='page_247'>Rendez-vous au 247 </a>\
 Décider de ne pas perdre de temps avec lui et repartir en direction du \
 nord <a href='page_292'> Rendez-vous au 292 </a>\
 </p>\""),
 page_98: new undum.SimpleSituation(
 "<p class='transient'> \
 Tandis que vous vous glissez dans la pièce en rampant, une voix vous \
 lance : « Bienvenu, aventurier ! Je vous attendais. » Vous vous arrêtez, \
 regardez autour de vous et vous relevez. Le petit homme âgé a changé. \
 Il n'est plus si vieux, ses cheveux ne sont plus si gris et il est à présent \
 d'une taille imposante. Il a un regard noir et profond qui vous fixe \
 impitoyablement.<a href='page_358'> Rendez-vous au 358. </a>\
 </p>\""),
 page_99: new undum.SimpleSituation(
 "<p class='transient'> \
 Le couloir vous mène vers l'est. A quelque distance devant vous, vous \
 apercevez une porte solide qui bloque le passage. Vous allez \
 l'examiner. <a href='page_383'> Rendez-vous au 383. </a>\
 </p>\""),
 page_100: new undum.SimpleSituation(
 "<p class='transient'> \
 Avec réticence, ils acceptent que vous veniez vous joindre à eux. À \
 mesure que vous bavardez et jouez, ils se détendent, et finalement \
 vous êtes tous en train de rire et de vous raconter des histoires drôles. \
 Ils semblent tout à fait inoffensifs. Vous pouvez jouer honnêtement ou \
 essayer de tricher. Si vous voulez jouer pour de bon<a href='page_346'>rendez-vous au \
 346</a>, . Si vous préférez tricher<a href='page_91'>Rendez-vous au 91</a> .\
 </p>\""),
page_101: new undum.SimpleSituation(
 "<p class='transient'> \
Par chance l'épieu que vous avez lancé atteint au coeur le Vampire qui\
pousse un cri de douleur. Vous bondissez sur lui et enfoncez plus\
profondément l'épieu dans son corps. Ses cris d'agonie se font de plus\
en plus faibles et son corps sans vie s'effondre sur le sol.<a href='page_327'> Rendez-vous\
au 327.</a>\
<img src='media/img/101_img.JPG' class='float_center'>\
 </p>\""),
 page_102: new undum.SimpleSituation(
 "<p class='transient'> \
 La porte n'est pas verrouillée et s'ouvre. La pièce que vous voyez \
 maintenant semble être une petite salle de torture : divers instruments \
 destinés à infliger des supplices sont en effet accrochés aux murs. Au \
 centre de la pièce, deux petites créatures bossues exercent leur \
 diabolique besogne sur la personne d'un Nain attaché par les poignets \
 à un crochet fixé au plafond. Les deux bossus le percent et le \
 découpent cruellement avec leurs épées. Le Nain pousse un dernier \
 cri, puis se tait, les yeux fermés. Ses geôliers émettent quelques \
 exclamations exprimant leur dépit et se tournent vers vous en vous \
 regardant avec colère comme si vous étiez responsable de \
 l'évanouissement du Nain. Vous devez agir rapidement. Vous avez le \
 choix entre :\
 Refermer aussitôt la porte et poursuivre votre chemin le long du \
 couloir<a href='page_303'>  Rendez-vous au 303 </a>\
 Tirer votre épée et essayer de combattre les deux créatures <a href='page_19'>  Rendez-\
 vous au 19 </a>\
 Vous précipiter vers le Nain et lui donner un coup d'épée en lançant un \
 grand rire sardonique pour donner le change aux tortionnaires<a href='page_68'>  Rendez-\
 vous au 68 </a>\
 </p>\""),
 page_103: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous sentez une pierre bouger, et derrière, vous trouvez un levier. \
 Allez-vous tirer le levier ou le laisser et retourner au croisement ? Si \
 vous tirez le levier, <a href='page_252'>rendez-vous au 252</a>. Si vous retournez au \
 croisement <a href='page_359'>Rendez-vous au 359</a>.\
 </p>\""),
 page_104: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous retrouvez dans un petit passage étroit qui aboutit à une \
 porte située au nord. Vous essayez d'ouvrir cette porte.<a href='page_49'>  Rendez-vous \
 au 49. </a>\
 </p>\""),
 page_105: new undum.SimpleSituation( 
 "<p class='transient'> \
 Vous fouillez dans votre sac à dos. Qu'y a-t-il à l'intérieur ? Vous \
 pouvez essayer d'utiliser un quelconque des accessoires suivants si \
 vous l'avez sur votre Liste d'Équipement :\
<ul class='options'>\
 <li><a href='./potinvi'>Potion d'Invisibilité ?</a></li>\
  <li><a href='./ocycl'>avez vous L'Œil du Cyclope (pierre précieuse) ?</a></li>\
  <li><a href='./fromage'>avez vous Un morceau de Fromage ?</a></li>\
  <li><a href='./arc'>avez vous L'Arc à la Flèche d'Argent ?</a></li>\
  <li><a href='./batony'>avez vous Un Un Bâton en forme de Y  ?</a></li>\
 </ul>\
  </p>\"" , //ouvre les condifion
      {
      actions: {
                potinvi: function(character, system, action) {

                    if(system.isItemExistInventory("potion invi")){
          
                     system.doLink('page_39');
                    }                 

                },
                 ocycl: function(character, system, action) {

                    if(system.isItemExistInventory("pierre précieuse")){
          
                     system.doLink('page_382');
                    }

                }, 
                 fromage: function(character, system, action) {
                  if(system.isItemExistInventory("fromage")){
                     system.doLink('page_368');
                    }         
                }, 
                 arc: function(character, system, action) {
                  if(system.isItemExistInventory("arc")){
                     system.doLink('page_194');
                   }
                }, 
                 batony: function(character, system, action) {
                  if(system.isItemExistInventory("batonY")){
                     system.doLink('page_215');
                   }
                }
            }, 
      exit: function(character, system, to) {
            $( "hr" ).remove();
      }
        }
        ),
 page_106: new undum.SimpleSituation(
 "<p class='transient'> \
 Le passage devant vous mène vers le nord sur une bonne distance. \
 Vous pouvez vous reposer dans ce couloir et manger vos Provisions. \
 Par la suite, le passage tourne à l'ouest et se rétrécit considérablement. \
 Vous arrivez à une voûte de pierres qui vous oblige à vous baisser \
 pour la franchir. De l'autre côté de la voûte, vous vous arrêtez un \
 moment et vous regardez autour de vous. Vous êtes dans une grande \
 caverne qui s'enfonce dans l'obscurité. La caverne est partiellement \
 éclairée par la lumière du jour qui s'infiltre par une ouverture au-\
 dessus de vous. Il vous est impossible de voir où mène la caverne. \
 Vous allumez votre lanterne pour explorer l'endroit et vous entendez \
 alors un grondement. Une faible lueur vacille dans les ténèbres. Et \
 soudain, un jet de feu jaillit des profondeurs de la caverne en vous \
 manquant de peu, et en brûlant la mousse dont le mur est couvert par \
 endroits ! Vous vous jetez à plat ventre sur le sol et vous levez les \
 yeux : un énorme DRAGON émerge de l'obscurité et avance dans \
 votre direction. Des volutes de fumée lui sortent des narines. Sa peau \
 d'écaillés rou-geâtres brille d'une lueur huileuse. Le monstre est long \
 d'une quinzaine de mètres ! Comment allez-vous faire pour vous \
 lancer à l'assaut de cette créature ?\
 Vous tirez votre épée en vous préparant à l'attaque ?<a href='page_152'> Rendez-vous au 152 </a>\
  Vous fouillez dans votre mémoire pour essayer de trouver un \
 autre moyen de le combattre ?<a href='page_126'> Rendez-vous au 126 </a>\
 <img  src='media/img/106_img.jpg' class='float_center'>\
 </p>\""),
 page_107: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous traversez la pièce sur la pointe des pieds et vous montez un \
 escalier étroit qui aboutit à un couloir.\
 « C'était facile », pensez-vous, et, à la réflexion, vous vous demandez \
 si vous n'auriez pas mieux fait de fouiller les corps. Cela en valait \
 peut-être la peine. Si vous voulez revenir en arrière et fouiller les \
 corps, en commençant par le troisième, <a href='page_148'>rendez-vous au 148</a>. Si vous \
 préférez poursuivre votre chemin<a href='page_197'>Rendez-vous au 197</a>.\
 </p>\""),
 page_108: new undum.SimpleSituation(
 "<p class='transient'> \
 <img  src='media/img/101_img.JPG' class='float_right'>\
 Au moment où votre pied touche une dalle en forme de main, vous \
 sentez qu'on vous serre la cheville comme dans un étau. Vous regardez \
 à vos pieds, et vous apercevez une main fantomatique qui s'accroche à \
 vous. Vous essayez de retrouver votre équilibre et vous y parvenez. \
 Mais à votre grande terreur, vous réalisez soudain que de chaque dalle \
 en forme de main s'élève une autre main semblable, et le sol est ainsi \
 jonché de mains décharnées qui se tendent et essayent d'attraper \
 quelque chose. Vous tirez votre épée et vous tentez d'en frapper la \
 main. Menez ce combat à son terme :\
 MAIN HABILETÉ: 6 ENDURANCE: 4\
 Si vous êtes vainqueur.\
<ul class='options'>\
                <li><a href='./attack'>Attack la Main!</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
            console.log("the system is " + system); 
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_108'][0].monstre[0]);    
                            
                        if (result == 'victory')
                        {
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_108'][0].monstre[0].nom+"!!"
                                         + "  <a href='page_185'>Rendez-vous au 185</a>" 
                                         +"   </p>" ); 
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            
                        }
                      

                   }
                 }
       }
       ),
 page_109: new undum.SimpleSituation(//ajout endurance et habilité 
 "<p class='transient'> \
 Le liquide est doux et onctueux. À mesure que vous en buvez, vous \
 vous mettez à rayonner. Vous vous sentez à la fois euphorique et \
 légèrement ivre. Votre confiance en vous-même s'accroît et votre \
 fatigue disparaît. La bouteille contient de l'EAU SAINTE, bénie par le \
 Grand Prêtre de Kaynlesh-Ma. Elle vous a presque rendu toute votre \
 ENDURANCE. Augmentez-en le total jusqu'à un chiffre inférieur de 2 \
 points à votre ENDURANCE de départ. (Si votre ENDURANCE était \
 plus élevée encore, n'y changez rien, vous êtes suffisamment fort \
 comme cela !) Ajoutez des points à votre total actuel d'HABILETÉ \
 jusqu'à obtenir un chiffre inférieur d'1 point à votre HABILETÉ de \
 départ. Vous avez également droit à quatre points de CHANCE \
 supplémentaires pour avoir fait une aussi heureuse trouvaille. Si vous \
 avez déjà regardé le parchemin, vous pouvez quitter la pièce en \
 direction du nord (<a href='page_120'>rendez-vous au 120)</a>. Sinon, vous pouvez y jeter un \
 coup d'œil<a href='page_212'> (et vous rendre au 212) </a>, ou n'y prêter aucune attention et \
 aller vers le nord de toute façon.\
 </p>\""  , //ouvre les condifion
      {
       enter: function(character, system, to) {

        if (character.qualities.habilite < (undum.game.inithabilite -1) )
        {
          var valhab =  undum.game.inithabilite -1;
        system.setQuality('habilite', valhab);
      }
   

      if (character.qualities.endurance < (undum.game.initendurance -2) )
        {
          var valend =  undum.game.initendurance -2;
          system.setQuality('endurance', valend);
        }
    
               
                 system.setQuality('chance', character.qualities.chance +4);

               
            }
        }
        ),
 page_110: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes maintenant plus riche de 8 Pièces d'Or. Vous trouvez \
 également 2 autres Pièces d'Or qu'il a cachées dans sa botte pour plus \
 de sûreté.<a href='page_319'> Rendez-vous au 319. </a> Inscrivez votre gain en Pièces d'Or sur \
 votre Feuille d'Aventure.\
 <img  src='media/img/62_img.JPG' class='float_center'>\
 </p>\""
  , //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.setQuality('or', character.qualities.or +10);

            }
        }
        ),
 page_111: new undum.SimpleSituation(
 "<p class='transient'> \
 Il ne se laissera pas amadouer. Tandis que vous faites quelques pas \
 autour de la pièce, d'une démarche embarrassée, il crie quelque chose \
 au chien. <a href='page_249'>Rendez-vous au 249.</a>\
 </p>\""),
 page_112: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous ne voyez rien dans la pièce qui puisse vous aider dans votre \
 combat. Qu'allez-vous faire ?\
 Tirer votre épée, serrer les dents et partir à l'attaque ? <a href='page_142'>Rendez-vous au 142 </a>\
Chercher dans votre sac à dos une autre arme que vous pourriez utiliser ?\
 <a href='page_105'>Rendez-vous au 105 </a>\
 </p>\""),
 page_113: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous arrivez à une autre bifurcation. Vous avez le choix entre aller au \
 nord (<a href='page_285'>rendez-vous au 285</a> <a href='page_78'>ou poursuivre vers l'est (rendez-vous au 78).</a> \
 </p>\""),
 page_114: new undum.SimpleSituation(
 "<p class='transient'> \
 Le passage mène vers le sud, puis vers l'est, et vous vous retrouvez \
 finalement à un croisement.<a href='page_359'> Rendez-vous au 359.</a>\
 </p>\""),
 page_115: new undum.SimpleSituation(
 "<p class='transient'> \
 Les malheureux étendus à vos pieds semblent presque heureux d'avoir \
 été soulagés du fardeau de la vie. Et tandis que vous les contemplez, \
 vous avez le sentiment que vous n'êtes pas seul à savoir qu'ils sont \
 morts. Vous jetez un coup d'œil autour de la pièce et vous avez le \
 choix entre :\
 Examiner les armes posées à terre <a href='page_95'>Rendez-vous au 95 </a>\
 Vous approcher du cadavre étendu dans le coin nord-est <a href='page_313'> Rendez-vous \
 au 313 </a>\
 Aller voir ce qu'il y a dans les tonneaux <a href='page_330'> Rendez-vous au 330</a>\
 </p>\""),
 page_116: new undum.SimpleSituation( 
 "<p class='transient'> \
 Les deux FARFADETS ivres qui se trouvent face à vous sont de toute \
 évidence surpris en vous voyant entrer, et ils cherchent \
 maladroitement leurs armes en s'efforçant de s'en saisir aussi vite que \
 possible. Vous devez les attaquer un par un. Lorsque vous lancerez les \
 dés pour déterminer votre Force d'Attaque, vous pourrez ajouter 1 \
 point au total obtenu, en raison de leur ivresse, et cela, à chaque \
 assaut.\
 voulez prendre la fuite pendant la bataille, <a href='page_42'>vous pouvez le faire en \
 vous rendant au 42.</a>\
 <ul class='options'>\
                <li><a href='./attack'>Attaquez les farfadets!</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
            console.log("the system is " + system); 
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_116'][0].monstre[undum.game.nombrederound]);    
                            
                        if (undum.game.bestiaire['page_116'][0].monstre[undum.game.nombrederound].endurance <=0)
                        {
                          
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_116'][0].monstre[undum.game.nombrederound].nom+"!!"
                                         + " " 
                                         +"   </p>" ); 
                           undum.game.nombrederound++; 
                               if(undum.game.nombrederound == 2)
                                {
                                     system.write( "<p class='transient'><a href='page_378'>Vous avez tué les 2 fafradets rendez-vous au 378</a>  </p>") 
                                }
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            
                        }
                    

                   }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
           }
       }
       ),
 page_117: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes dans un passage est-ouest. Pour aller à l'est<a href='page_354'>Rendez-vous au 354 </a> \
  Si vous préférez l'ouest<a href='page_308'>Rendez-vous au 308</a>.\
 </p>\""),
 page_118: new undum.SimpleSituation(
 "<p class='transient'> \
 Lorsque vous vous approchez de lui, il se dresse dans son cercueil, \
 déploie sa cape et vous en enveloppe. Votre dernier souvenir, c'est la \
 douleur fulgurante que vous ressentez au moment où ses dents \
 pointues s'enfoncent dans votre cou. Vous n'auriez jamais dû vous \
 laisser prendre par le regard d'un VAMPIRE.\
   <ul class='options'>\
                <li><a href='./mort'>Vous êtes Mort!</a></li>\
                </ul>\
                 </p>\"",  //DEBUG
 {
  actions: {
  mort: function( character, system, action) {
                 
                 system.doLink('death');

           }
         }
       }
       ),
 page_119: new undum.SimpleSituation( //action inventaire
 "<p class='transient'> \
 Vous ouvrez votre sac à dos et vous y cherchez quelque chose que \
 vous pourriez lancer dans la caverne. Consultez votre Liste \
 d'Equipement, choisissez-y ce que vous lancerez et rayez l'objet de \
 cette Liste. Si vous n'avez pas d'Équipement, il vous faudra lancer une \
 Pièce d'Or. Vous jetez l'objet qui tombe sur le sol de la caverne avec \
 un bruit sonore.\
 L'Ogre regarde dans la direction d'où est venu le bruit et va voir ce qui \
 se passe. Pendant ce temps, vous sortez en rampant et vous retournez à \
 la bifurcation en suivant le couloir en sens inverse.<a href='page_269'> Rendez-vous au\
 269.</a>\
 </p>\"",  //DEBUG
 {
 
  enter: function( character, system, action) {
                 
                 system.buildMenuCharacterInventory();

           }
         
       }
       ),
 page_120: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous quittez la pièce, suivez un court passage et arrivez à un escalier \
 qui monte. Vous en gravissez les marches, et vous vous retrouvez \
 bientôt dans un couloir.<a href='page_197'> Rendez-vous au 197. </a>\
 </p>\""),
 page_121: new undum.SimpleSituation(
 "<p class='transient'> \
 Le couloir est orienté vers l'est pendant quelques mètres, puis il tourne \
 au sud, revient ensuite vers l'est et se termine enfin par un cul-de-sac. \
 Allez-vous examiner ce cul-de-sac (<a href='page_103'>rendez-vous alors au 103)</a>, ou \
 préférez-vous retourner au croisement <a href='page_359'>(et vous rendre alors au 359) </a> ?\
 <img  src='media/img/62_img.JPG' class='float_center'>\
 </p>\""),
 page_122: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous réveillez avec des élancements dans la tête et vous jetez un \
 regard autour de vous. La pièce fait environ huit mètres carrés et des \
 portes s'ouvrent au nord et au sud. On vous a jeté dans le coin sud-\
 ouest. Quatre hommes se tiennent debout, immobiles, au centre de la \
 pièce. Il semble tout au moins que ce sont des hommes. Leur peau a \
 une teinte gris-verdâtre. Leurs vêtements sont en lambeaux et tous les \
 quatre fixent le plafond d'un regard vide. L'un tient une massue, un \
 autre une faux, le troisième une hache et le dernier une pioche. Ils \
 vous ignorent complètement.\
 Autour de la pièce, il y a des outils de paysans (fourches, manches de \
 haches, bâtons en pointe, etc.) qui peuvent servir d'armes, ainsi que \
 deux boucliers et plusieurs tonneaux. Dans le coin nord-est, un cadavre \
 tient une épée dans une main et un bouclier dans l'autre. Vous vous\
 passez la main sur le visage pour voir si vous ne saignez pas ; à votre \
 grand soulagement, vous ne découvrez aucune trace de sang. Mais \
 lorsque vos mains ont bougé, les étranges créatures au centre de la \
 pièce ont baissé les yeux vers vous. Que faites-vous ?\
 Vous essayez de leur parler ? <a href='page_268'> Rendez-vous au 268 </a>\
 Vous vous relevez d'un bond et vous les attaquez avec votre épée ? \
 <a href='page_282'>Rendez-vous au 282 </a>\
 Vous tentez tant bien que mal de vous enfuir par la porte sud ? \
 <a href='page_13'>Rendez-vous au 13</a>\
 <img  src='media/img/122_img.JPG' class='float_center'>\
 </p>\""),
 page_123: new undum.SimpleSituation( //action 
 "<p class='transient'> \
 Vont-ils croire votre histoire d'achat de bateau ? Les Squelettes sont \
 plutôt simples d'esprit, aussi, lancez donc un dé\
  <ul class='options'>\
                <li><a href='./lucktest'>lancez donc un dé ?</a></li>\
                </ul>\
                 </p>\"",
      {
          

            actions: {
                lucktest: function(character, system, action) {
                    var result = system.rnd.dice(1,6); 
                    if( result <= 3 )  
                    {
                          system.write( "<p class='transient'>ils vous croient et ils quittent tous"
                          +" le hangar par la porte aménagée  dans le mur nord, vous laissant ainsi seul avec les bateaux."
                          +" <a href='page_184'>rendez-vous au 184</a> </p><br>") ; 
                          system.setQuality('chance', character.qualities.chance +2); 
                          system.clearContent('ul'); 
                          system.clearContent('li'); 

                    }
                    else if( (result > 3) && (result <6) )
                    {
                        system.write( "<p class='transient'>ils ne savent que penser et envoient deux"
                        +"  des leurs prendre les ordres tandis  que les trois autres vous surveillent"
                        +" avec leurs armes de fortune.   <a href='page_164'>Rendez-vous au 164 </a></p>") ;
                          system.clearContent('ul'); 
                          system.clearContent('li');                        
                    }
                    else
                    {
                      system.write( "<p class='transient'>ils ne croient pas un mot de "
                        +" ce que vous dites, et continuent d'avancer sur vous. "
                        +"<a href='page_140'> Rendez-vous au 140.</a> </p>") ;
                        system.clearContent('ul'); 
                          system.clearContent('li');
                    }

                }
            }, 
            exit : function(character, system, action) {
              //on nettois 
                $( "hr" ).remove();
                $( "ul" ).remove();
            }
        }
 ),
 page_124: new undum.SimpleSituation(
 "<p class='transient'> \
 La porte s'ouvre sur un large couloir que vous suivez sur une certaine \
 distance jusqu'à ce que vous arriviez à une bifurcation. Là, vous \
 <a href='page_138'>pouvez aller au nord</a> <a href='page_76'>, ou à l'est (rendez-vous au 76)</a>.\
 </p>\""),
 page_125: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous ramassez la corde. Elle semble normale. Elle a même l'air de \
 pouvoir vous être très utile à l'occasion. Vous ouvrez votre sac à dos \
 pour l'y ranger, mais soudain, elle prend vie dans vos mains, remonte \
 rapidement le long de votre bras et tente de s'enrouler autour de votre \
 cou. Vous vous efforcez de couper la corde avec votre épée avant que \
 son étreinte ne se resserre. Tentez votre Chance. Si vous êtes \
 chanceux,\
 vous arrivez à couper la corde et elle tombe sur le sol. Mais si vous \
 êtes malchanceux, la corde se resserre et vous perdez un point \
 d'ENDURANCE. Il vous faut à nouveau Tenter votre Chance pour \
 essayer de couper la corde, et vous aurez ainsi à la tenter jusqu'à ce \
 que vous y parveniez. A chaque échec, vous perdez 1 point \
 d'ENDURANCE (et vous n'oubliez pas de réduire votre total de \
 CHANCE). \
  <ul class='options'>\
                <li><a href='./lucktest'>Tentez votre chance ?</a></li>\
                </ul>\
                 </p>\"",
      {
          

            actions: {
                lucktest: function(character, system, action) {
                    if( system.rnd.dice(2,6) < character.qualities.chance )  
                    {
                       system.setQuality('chance', character.qualities.chance -1);
                          system.write( "<p class='transient'><strong>Vous etes chanceux</strong>"
                            +"<a href='page_73'> Rendez-vous  au 73</a></p><br>") ; 
                      system.clearLinks('./lucktest'); 

                    }
                    else
                    {
                      system.setQuality('chance', character.qualities.chance -1);
                      system.setQuality('endurance', character.qualities.endurance -1);
                        system.write( "<p class='transient'>pas de chance Réessayer !</p>") ;
              
                    }

                }
            }
        }),
 page_126: new undum.SimpleSituation(//situation peut être laissé le choix 

 "<p class='transient'> \
 Le nom de « Farrigo Di Maggio » vous dit-il quelque chose ? Si tel \
 n'est pas le cas, il vous faut combattre le Dragon.<a href='page_152'> Rendez-vous au 152. </a> \
 Si au contraire vous connaissez ce nom <a href='page_26'>Rendez-vous au 26</a>.\
 </p>\""),
 page_127: new undum.SimpleSituation(
 "<p class='transient'> \
 Vos menaces ne l'impressionnent pas le moins du monde. Tandis que \
 vous continuez à discuter et que sa colère grandit, vous remarquez une \
 transformation dans son apparence. Il se redresse et paraît soudain \
 plus fort. Son visage et ses bras se couvrent de poils. Ses dents \
 deviennent pointues et acérées. Il vous faut prendre une décision \
 rapide. Allez-vous lui offrir 5 Pièces d'Or pour le calmer (déduisez \
 cette somme de votre Or , ou vous préparer à \
 l'attaquer\
 <ul class='options'>\
                <li><a href='./donnez'>Allez-vous lui offrir 5 Pièces d'Or pour le calmer ?</a></li>\
                <li><a href='./attaquez'>Voulez vous attaquez la créature ?</a></li>\
                </ul>\
                 </p>\"",
                  {
  actions: {
              donnez:function(character, system, action){

                 if((character.qualities.or -5) >= 0 )
                              {  system.setQuality('or', character.qualities.or -5);
                                system.clearContent('ul'); 
                                system.clearContent('li');      
                                system.write( "<p class='transient'>" 
                                 +" (déduisez cette somme de votre Or et <a href='page_272'>rendez-vous au 272)</p>" ); 

                              }
                              else{
                                  system.write( "<p class='transient'>" 
                                 +"Vous n'avez pas cette Or </p>" ); 
                              }
                          }, 
              attaquez:function(character, system, action){
                              system.doLink('page_188'); 
                          }
                    }
      }
        ),
 page_128: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous entendez un grondement et le sol se met à vibrer. La herse \
 s'élève lentement et avec bruit, disparaissant dans le plafond. Vous \
 pouvez maintenant aller jusqu'à la bifurcation. Choisirez-vous de \
 poursuivre vers l'ouest (<a href='page_210'>rendez-vous au 210)</a>, <a href='page_58'>ou vers l'est (rendez-\
 vous au 58) </a>?\
 </p>\""),
 page_129: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous revenez au bord de la rivière et vous décidez d'essayer la porte \
 aménagée au milieu du pan de roc. <a href='page_104'>Rendez-vous au 104. </a>\
 </p>\""),
 page_130: new undum.SimpleSituation(//situation 
 "<p class='transient'> \
 Le vieil homme vous demande combien vous misez. Vous pouvez \
 parier entre 1 et 20 Pièces d'Or (mais en tout cas pas plus que vous \
 n'en possédez !). Il vous donne les deux dés blancs avec lesquels il \
 jouait, et vous demande de les lancer. Jetez les dés une fois pour vous \
 et une fois pour le vieil homme. Si vous obtenez un total plus élevé \
 que le sien, vous gagnez une somme égale à celle que vous avez \
 pariée, et que le vieil homme doit vous payer. Si c'est son total qui est \
 plus élevé, vous perdez votre mise. Vous pouvez continuer aussi \
 longtemps que vous aurez des Pièces d'Or et partir ensuite par la porte \
 pour revenir à la bifurcation. Si vous gagnez, prenez 2 points \
 d'HABILETÉ, 2 d'ENDURANCE et 2 de CHANCE.<a href='page_280'> Rendez-vous après \
 au 280.</a>    \
 combien souhaitiez vous misez : <input id=\"ngold\"type=\"number\" name=\"quantity\" min=\"1\" max=\"20\"></a>\
 <ul class='options'>\
        <li><a href='./pariez'> Vous voulez parriez ?   </li>\
        </ul>\
        </p>\"",
              {
            actions:{
                pariez: function(character, system, action) {
                  var val = $('#ngold').val();
                 var yourres = system.rnd.dice(2,6); 
                 var theresoldman = system.rnd.dice(2,6); 
                 if(val <= character.qualities.or)
                 {

                    if (yourres > theresoldman)
                    {
                      var result = parseInt(character.qualities.or) + parseInt(val); 
                         system.setQuality('or', result);
                          system.write( "<p class='transient'>" 
                                 +"vous avez gagné "+ val+"  d'Or </p>" );
                          if(undum.game.nombredecoup == 0)
                          {
                            system.setQuality('endurance', character.qualities.endurance +2);
                            if((character.qualities.habilite +2) <= undum.game.inithabilite)
                            {
                              system.setQuality('habilite', character.qualities.habilite +2);
                            }
                            if((character.qualities.chance +2) <= undum.game.initchance)
                            {
                            system.setQuality('chance', character.qualities.chance +2);
                            }
                            undum.game.nombredecoup++;
                          }
                    }
                    else if(yourres < theresoldman)
                    {
                      var result = parseInt(character.qualities.or) - parseInt(val); 
                      system.write( "<p class='transient'>" 
                                 +"vous avez perdu "+ val+"  d'Or </p>" ); 
                      system.setQuality('or', result);
                    }
                    else
                    {
                        system.write( "<p class='transient'>" 
                                 +" match nul </p>" ); 
                    }
                  }
                  else
                  {
                       system.write( "<p class='transient'>" 
                                 +" vous n'avez pas assez d'or</p>" );
                  }

                }
            }, 
            exit:function(character, system, action) {
            undum.game.nombredecoup = 0; 
            }
           
        }),
 page_131: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous bavardez de choses et d'autres, et ils semblent avoir très envie \
 d'avoir avec vous des relations amicales. Ils se sentent seuls dans cette \
 montagne, entourés de tant d'êtres malfaisants, et ils sont heureux de \
 parler à des visiteurs qui viennent d'un monde où l'on respecte les lois. \
 Ils vous expliquent que vous vous trouvez dans le Labyrinthe de \
 Zagor. Le seul moyen d'en trouver l'issue c'est d'aller encore plus loin \
 à l'intérieur des souterrains. Ils vous indiquent le chemin pour sortir \
 du labyrinthe : après avoir quitté cette pièce, vous tournerez à droite, à \
 droite encore, puis à gauche, ensuite vous irez tout droit... A ce \
 moment, ils sont moins précis. Il ne sont pas tout à fait sûrs du chemin \
 qu'il convient de suivre. Si vous le désirez, vous pouvez vous restaurer \
 en prenant un Repas, mais vous devrez le partager avec eux et, de ce \
 fait, vous n'aurez droit qu'à la moitié des points d'ENDURANCE \
 habituels. Enfin, vous les remerciez et vous sortez de la pièce. \
 <a href='page_291'>Rendez-vous au 291.</a>\
 <ul class='options'>\
                <li><a href='./repas'>Voulez vous Prendre un Repas ?</a></li>\
                </ul>\
                 </p>\"",
                  {
  actions: {
  repas:function(character, system, action){
                      if((character.qualities.provision>0))
                      {
                        system.setQuality('provision', character.qualities.provision -1);
                        system.setQuality('endurance', character.qualities.endurance +2);
                        //undum.game.nombretentative++; 
                        system.clearLinks('./repas'); 
                        

                      }
        }
        }
      }),
 page_132: new undum.SimpleSituation(
 "<p class='transient'> \
 Le bouclier est en bois et d'un modèle courant. Vous pouvez le garder \
 ou le jeter. <a href='page_319'> Rendez-vous au 319. </a>\
   <ul class='options'>\
 <li><a href='./garde'>conserver le bouclier?</a></li>\
  <li><a href='./jette'>jetez le bouclier ?</a></li>\
 </ul>\
  </p>\"" , //ouvre les condifion
      {
      actions: {
                garde: function(character, system, action) {
                
              system.removeCharacterInventory("bouclier bois"); 
                    system.clearLinks('./garde');

                },
                jette: function(character, system, action) {
                system.removeCharacterInventory("bouclier bois"); 
                    system.clearLinks('./jette');
                }
            }, 
      exit: function(character, system, to) {
            $( "hr" ).remove();
      }
        }),
 page_133: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes dans un couloir nord-sud qui se termine en cul-de-sac. Vous \
 jetez un regard autour de vous pour essayer de déceler sur la paroi \
 rocheuse un quelconque signe qui pourrait révéler quelque chose \
 d'intéressant, lorsque une pierre se détache soudain de la voûte au-\
 dessus de vous et vous tombe sur la tête. Bien que le choc n'ait pas été \
 trop rude, vous vous sentez légèrement étourdi. Vous luttez pour \
 garder votre conscience, mais vous n'y parvenez pas et vous vous \
 effondrez sur le sol. Quand vous ouvrez à nouveau les yeux, vous vous \
 trouvez à un croisement.<a href='page_52'> Rendez-vous au 52.</a>\
 </p>\""),
 page_134: new undum.SimpleSituation(
 "<p class='transient'> \
 Il n'y a personne dans la pièce, et il ne semble pas qu'il y ait d'autre \
 issue. Au milieu, se trouve une table sur laquelle sont posés deux \
 casques, l'un en bronze, l'autre en fer. Tous les deux sont à peu près à \
 votre taille. Allez-vous essayer de vous coiffer d'un de ces casques, ou \
 estimez-vous que c'est prendre là un risque inutile ?\
 Si vous essayez le casque de bronze <a href='page_202'> Rendez-vous au 202 </a>\
 Si vous essayez celui de fer <a href='page_325'> Rendez-vous au 325 </a>\
 Si vous décidez de revenir à la bifurcation <a href='page_87'> Rendez-vous au 87 </a>\
 </p>\""),
 page_135: new undum.SimpleSituation(
 "<p class='transient'> \
 L'Être gît recroquevillé dans un coin de la pièce. Vous allez à son \
 bureau et vous ouvrez la boîte. Il y a 18 Pièces d'Or à l'intérieur. Vous \
 pouvez les prendre ; n'oubliez pas de les inscrire sur votre Feuille \
 d'Aventure. Vous avez droit à 2 points de CHANCE pour avoir vaincu \
 la créature, et vous pouvez également vous restaurer en prenant un \
 Repas. Quand vous êtes prêt à repartir, vous quittez la pièce par la \
 porte nord. <a href='page_360'>Rendez-vous au 360. </a>\
  <ul class='options'>\
                <li><a href='./repas'>Voulez vous Prendre un Repas ?</a></li>\
                </ul>\
                 </p>\"", //ouvre les condifion
      {
         actions: {
           repas:function(character, system, action){
                      if((character.qualities.provision>0))
                      {
                        system.setQuality('provision', character.qualities.provision -1);
                        system.setQuality('endurance', character.qualities.endurance +4);
                        //undum.game.nombretentative++; 
                        system.clearLinks('./repas'); 
                        

                      }
        }
        },
       enter: function(character, system, to) {
               system.setQuality('or', character.qualities.or + 18);
               system.setQuality('chance', character.qualities.chance + 2);
                           }
        }
        ),
 page_136: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous arrivez à la porte que vous parvenez à ouvrir après vous être \
 battu avec la serrure. Vous sortez précipitamment de la pièce en \
 refermant la porte derrière vous, vous respirez profondément à \
 plusieurs reprises et vous revenez à la bifurcation. <a href='page_229'> Rendez-vous au 229. </a>\
 </p>\""),
 page_137: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous ne trouvez pas de passage secret, mais en appuyant sur le mur, \
 vous entendez un déclic. Vous avez alors un étourdissement, et vous \
 vous effondrez sur le sol. Quand vous reprenez conscience, vous ne \
 reconnaissez pas l'endroit où vous êtes.<a href='page_354'> Rendez-vous au 354. </a>\
 </p>\""),
 page_138: new undum.SimpleSituation(
 "<p class='transient'> \
 Le passage s'élargit et vous vous apercevez que vous allez bientôt \
 arriver dans une grande caverne. Vous entendez des bruits en \
 provenance de cette caverne, à quelque distance devant vous et vous \
 avancez avec prudence. En vous approchant, vous distinguez au loin \
 une immense silhouette et vous êtes passablement impressionné \
 lorsque vous réalisez que cet homme gigantesque doit mesurer au \
 moins trois mètres de haut ! Vêtu d'une tunique de cuir, le monstre, \
 assis à une table, est occupé à manger. La caverne fait au moins cent \
 mètres de long, et c'est là sans doute la demeure de ce GEANT. Il y a \
 une grande table et deux chaises contre l'un des murs. C'est à cette \
 table que la créature est assise. Le Géant est trop absorbé dans la \
 consommation de son repas (un énorme cochon) pour remarquer votre \
 présence. Dans la\
 caverne, il y a également une paillasse, une grande fourrure qui lui \
 sert sans doute de couverture ou de cape, et un immense marteau de \
 pierre que vous ne pourriez même pas espérer remuer. Dans un coin \
 brûle un feu dont la fumée s'échappe par une ouverture pratiquée dans \
 le plafond. Il semble qu'il n'y ait pas d'autre issue dans la caverne que \
 le passage par lequel vous arrivez. Allez-vous affronter cette brute <a href='page_351'> (et \
 vous rendre au 163),</a> ou revenir à la bifurcation (<a href='page_351'>rendez-vous alors au 351)</a> ?\
 </p>\""),
 page_139: new undum.SimpleSituation( //situation 3 clés si pas 3 clef 
 "<p class='transient'> \
 Au cours de votre aventure, vous avez trouvé différentes clés et vous \
 avez dû conserver certaines d'entre elles. Vous avez à présent la \
 possibilité d'utiliser trois de ces clés pour essayer d'ouvrir les serrures \
 du coffre.\
 Chaque clé porte un numéro distinct. Pour savoir si vous avez les \
 bonnes clés, faites la somme des trois chiffres qu'elles portent. \
 Rendez-vous ensuite au numéro que vous donne le total obtenu, et \
 vous verrez alors si vous avez choisi les clés qui vous ouvriront le \
 coffre.\
 Si vous n'avez pas trois clés numérotées, voici venue la fin de votre \
 aventure. Vous n'avez plus qu'à vous asseoir sur le coffre et à pleurer, \
 car vous venez de comprendre qu'il va falloir recommencer à explorer \
 la montagne depuis le début pour trouver les clés qui vous manquent.\
 qu'elle est la somme des clefs ?  : <input id=\"nclef\"type=\"number\" name=\"quantity\" ></a>\
 <ul class='options'>\
        <li><a href='./pariez'> Est ce que le somme est exact ?   </li>\
        </ul>\
        </p>\"",
              {
            actions:{
                pariez: function(character, system, action) {
                  var val = $('#nclef').val();
                
                
                    if (val == "396")
                    {
                        system.doLink('page_396');
                    }
                    else if(val == "379")
                    {
                      system.doLink('page_379');
                    }
                    else if(val == "198")
                    {
                     system.doLink('page_198');
                    }
                    else if(val == "321")
                    {
                     system.doLink('page_321');
                    }
                     else if(val == "219")
                    {
                     system.doLink('page_219');
                    }
                    else if(val == "200")
                    {
                     system.doLink('page_200');
                    }
                    else if(val == "288")
                    {
                     system.doLink('page_288');
                    }
                     else if(val == "347")
                    {
                     system.doLink('page_347');
                    }
                     else if(val == "245")
                    {
                     system.doLink('page_245');
                    }
                     else if(val == "335")
                    {
                     system.doLink('page_335');
                    }
                      else if(val == "186")
                    {
                     system.doLink('page_186');
                    }
                     else if(val == "233")
                    {
                     system.doLink('page_233');
                    }
                     else if(val == "231")
                    {
                     system.doLink('page_231');
                    }
                    else if(val == "288")
                    {
                     system.doLink('page_288');
                    }
                    else if(val == "276")
                    {
                     system.doLink('page_276');
                    }
                    else if(val == "302")
                    {
                     system.doLink('page_302');
                    }
                    else
                    {
                      system.write( "<p class='transient'> le chiffre ne correspond pas </p>") 
                    }
                  
                

                }
            }, 
            exit:function(character, system, action) {
            $( "hr" ).remove();
            }
           
        }
        ),
 page_140: new undum.SimpleSituation( //combat particulier
 "<p class='transient'> \
 Les Squelettes avancent sur vous et vous acculent contre la porte. Le \
 chef s'approche. Derrière lui marchent côte à côte deux Squelettes ; les \
 deux derniers suivent derrière. Il faut d'abord combattre le chef :\
 SQUELETTE HABILETÉ: 7 ENDURANCE: 5\
 Ensuite, vous aurez à vous battre contre les autres en les affrontant \
 deux par deux. Voici comment se dérouleront ces combats : vous \
 aurez deux paires de Squelettes à affronter, mais chacun des deux \
 Squelettes, formant une paire, vous attaquera séparément à chaque \
 assaut. Vous devrez choisir lequel vous voulez combattre en priorité. \
 Vous mènerez\
 alors le premier assaut contre le Squelette que vous venez de choisir. \
 Ensuite, le deuxième Squelette vous attaquera ; vous lancerez les dés \
 pour mesurer votre Force d'Attaque à la manière habituelle, mais si \
 votre Force d'Attaque est supérieure à la sienne, vous n'aurez pas pour \
 autant blessé ce Squelette, vous aurez simplement évité le coup porté \
 par lui. En revanche, si sa Force d'Attaque est supérieure à la vôtre, \
 vous serez blessé selon les règles habituelles. Chaque assaut se \
 déroule ainsi en deux temps, et vous aurez gagné le combat lorsque le \
 Squelette que vous avez choisi d'affronter en premier sera vaincu. \
 Vous n'aurez donc qu'un seul Squelette à tuer à chaque combat par \
 paire, mais ils seront deux à pouvoir vous blesser.\
 Si vous sortez vainqueur de cette bataille<a href='page_395'>Rendez-vous au 395</a>, rendez-vous au 395.\
  <ul class='options'>\
                <li><a href='./attack'>Attaquez les Squelettes!</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
            console.log("the system is " + system); 
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_140'][0].monstre[undum.game.nombrederound]);    
                            
                        if (undum.game.bestiaire['page_140'][0].monstre[undum.game.nombrederound].endurance <=0)
                        {
                          
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_140'][0].monstre[undum.game.nombrederound].nom+"!!"
                                         + " " 
                                         +"   </p>" ); 
                           undum.game.nombrederound++; 
                               if(undum.game.nombrederound == 5)
                                {
                                     system.write( "<p class='transient'>vous sortez vainqueur de cette bataille<a href='page_395'>Rendez-vous au 395</a>,"
                                     +" rendez-vous au 395. </p>") 
                                }
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            
                        }
                    

                   }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
           }
       }
       ),
 page_141: new undum.SimpleSituation(
 "<p class='transient'> \
 <img  src='media/img/101_img.JPG' class='float_right'>\
 Lorsque le vieil homme apprend que vous cherchez le trésor, il se met \
 en colère et vous ordonne de vous en aller : il n'a que faire des \
 aventuriers chercheurs de trésors. Son chien a senti sa colère et vous \
 montre les dents d'un air menaçant. Vous pouvez soit sourire au vieil \
 homme, le remercier et sortir par la porte sud (<a href='page_66'>rendez-vous alors au 66)</a>\
  soit rester et essayer de l'amadouer (<a href='page_111'>rendez-vous dans ce cas au 111) </a>.\
 </p>\""),
 page_142: new undum.SimpleSituation(
 "<p class='transient'> \
 D'une voix tonitruante, il lance : « Pauvre imbécile ! Crois-tu que tu \
 peux te mesurer à mon pouvoir en utilisant cette arme dérisoire ? » \
 Vous continuez cependant d'avancer avec détermination. « Si c'est une \
 simple rossée que tu cherches, étranger, je te donnerai la dernière de ta \
 vie ! » ajoute-t-il, puis il disparaît et reparaît derrière vous. Vous \
 faites volte-face pour l'affronter, et le combat s'engage. Mais c'est une \
 lutte à mort. Cette fois, il vous sera impossible de prendre la fuite.\
 SORCIER HABILETÉ: 11 ENDURANCE: 18\
  <ul class='options'>\
                <li><a href='./attack'>Attaquez le Sorcier!</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
            console.log("the system is " + system); 
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_142'][0].monstre[undum.game.nombrederound]);    
                            
                        if (undum.game.bestiaire['page_142'][0].monstre[undum.game.nombrederound].endurance <=0)
                        {
                          
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_142'][0].monstre[undum.game.nombrederound].nom+"!!"
                                         + " " 
                                         +"   </p>" ); 
                           undum.game.nombrederound++; 
                               if(undum.game.nombrederound == 1)
                                {
                                     system.write( "<p class='transient'>Si vous êtes vainqueur<a href='page_396'>Rendez-vous au 396</a>  </p>") 
                                }
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            
                        }
                    

                   }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
           }
       }
       ),
 page_143: new undum.SimpleSituation(
 "<p class='transient'> \
 <img  src='media/img/143_img.JPG' class='float_center'>\
 Vous vous accroupissez sur le sable de la rive. Tandis que vous \
 préparez votre repas, vous remarquez que le sable bouge à deux \
 mètres de vous environ. Le sable s'agite de plus en plus et vous vous \
 levez d'un bond, votre épée à la main, Soudain, une énorme tête \
 cylindrique jaillit de la surface sablonneuse, puis se met à se tortiller \
 et flaire votre odeur. Le corps lisse et annelé d'un VER MARIN \
 GÉANT s'élève alors, et oscille dans votre direction. En même temps, \
 une ouverture béante hérissée de petites dents pointues apparaît dans \
 ce qui lui tient lieu de tête. Il vous faut combattre cette créature.\
 VER MARIN HABILETÉ : 7 ENDURANCE : 7 GÉANT\
<ul class='options'>\
                <li><a href='./attack'>Attaquez le Vers Marin Géant!</a></li>\
                <li><a href='./fuite'>Prendre la fuite</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
           
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_143'][0].monstre[undum.game.nombrederound]);    
                            
                        if (undum.game.bestiaire['page_143'][0].monstre[undum.game.nombrederound].endurance <=0)
                        {
                          
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_143'][0].monstre[undum.game.nombrederound].nom+"!!"
                                         + " " 
                                         +"   </p>" ); 
                           undum.game.nombrederound++; 
                               if(undum.game.nombrederound == 1)
                                {
                                   system.clearLinks('./attack'); 
                                   system.clearLinks('./fuite'); 
                                     system.write( "<p class='transient'>vous êtes vainqueur, <a href='page_44'>rendez-vous au 44</a>  </p>") 
                                }
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            
                        }
                    
                   }, 

            fuite:function( character, system, action){
              system.clearLinks('./attack'); 
              system.clearLinks('./fuite'); 
                        system.animateQuality( 'endurance', character.qualities.endurance -4 );
                         system.setQuality('provision', character.qualities.provision -1);
                            if (character.qualities.endurance <= 0 )
                            {
                              system.doLink('death');
                            }
                         system.write( "<p class='transient'>Vous prenez la fuite, vous plongez dans la riviére "
                          + " en suivant le courant <a href='page_399'>rendez-vous au 399</a> vous perdez 4 point d'endurance"
                          +" et une provision   </p>")
                    }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
           }
       }
),
 page_144: new undum.SimpleSituation(
 "<p class='transient'> \
     La créature plonge son regard dans le vôtre et vous devenez incapable\
    de contrôler vos actes. Le monstre vous ordonne d'avancer. Vous vous\
    approchez lentement de lui, la bouche ouverte. Il vous ordonne de jeter\
    votre épieu à terre. Mais, tandis que vous contemplez cet épieu, vous\
    sentez que votre volonté vous revient brusquement et vous lancez votre\
    arme sur le Vampire alors que vous êtes tout près de lui.\
    <ul class='options'>\
                 <li><a href='./lucktest'>Tentez votre Chance</a></li>\
                 </ul>\
 </p>\"", 

      { //ouvre la condition 
      actions:{
              lucktest: function(character, system, action) {
                    if( system.rnd.dice(2,6) < character.qualities.chance )  
                    {
                        system.animateQuality( 'chance', character.qualities.chance );
                          system.write( "<p class='transient'><strong>Vous etes chanceux</strong></p><br>") ; 
                          system.doLink( 'page_101' );

                    }
                    else
                    {
                         system.animateQuality( 'chance', character.qualities.chance );
                        system.write( "<p class='transient'>pas de chance </p>") ;
                        system.doLink( 'page_217' );
                    }

                }

      }
    }
 ),
 page_145: new undum.SimpleSituation(
 "<p class='transient'> \
 La boîte est tombée sur le sol pendant que vous combattiez le Serpent, \
 et une clé couleur de bronze en est sortie ; le chiffre 99 est gravé \
 dessus. Vous pouvez prendre cette clé (et l'inscrire sur votre Liste \
 d'Équipement), puis quitter la pièce. Ajoutez-vous un point de \
 CHANCE<a href='page_363'> et rendez-vous au 363</a> .\
 <ul class='options'>\
                <li><a href='./prendre'>Voulez vous prendre la clé ?</a></li>\
                </ul>\
                 </p>\"",
                  {
  actions: {
  prendre:function(character, system, action){
                      if((character.qualities.provision>0))
                      {
                        system.addCharacterInventory("clef-99"); 
                        //undum.game.nombretentative++; 
                        system.clearLinks('./prendre'); 
                        

                      }
        }
        }, 
        exit: function(character, system, action){
           $( "hr" ).remove();
           
        },
        enter:function(character, system, action){
          system.setQuality("chance", character.qualities.chance + 1);
        }
      }
        ),
 page_146: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous ne trouvez aucun passage secret. Vous retournez au croisement et\
 vous continuez vers le nord (<a href='page_366'>rendez-vous au 366)</a>, ou vers l'ouest\
 (rendez-vous au 11).<a href='page_11'>Rendez-vous au 11</a>\
 </p>\""),
     page_147: new undum.SimpleSituation(
        "<p class='transient'> \
        Vous quittez la pièce et vous ouvrez la boîte dans le couloir. A\
        l'intérieur, vous trouvez une Pièce d'Or et une petite souris qui était\
        sans doute l'animal familier de la créature. Vous gardez la Pièce, et\
        vous relâchez la souris qui s'enfuit à toute allure le long du couloir.\
        <a href='./lucktest'>Prenez 2 points de CHANCE et rendez-vous au 208</a>.\
        </p>\"",
              { 
              actions:{
                      lucktest: function(character, system, action) {                  
                                system.animateQuality( 'chance', character.qualities.chance );
                                  system.doLink( 'page_208' );

                        }

              }
            }
      
      ), 
      page_148: new undum.SimpleSituation(
 "<p class='transient'> \
 Tandis que vous fouillez le corps, vous essayez d'éviter de regarder \
 son visage terrifiant, aux chairs grises et décomposées. Des vers lui \
 sortent du nez et de la bouche. Soudain, vous faites un bond en arrière \
 lorsque vous vous apercevez avec stupéfaction que ses paupières \
 s'agitent et s'ouvrent. Vous évitez juste à temps de vous faire \
 cruellement griffer par un coup de ses ongles longs et pointus. Il \
 bondit sur ses pieds et vous dévisage, un sourire sadique au coin des \
 lèvres. <a href='page_230'> Rendez-vous au 230. </a>\
 </p>\""),
 page_149: new undum.SimpleSituation(
 "<p class='transient'> \
 Tandis que vous contemplez cette peinture murale vivante, vous ne \
 vous rendez pas compte que votre chandelle brûle rapidement. \
 Soudain, sa flamme vacille et s'éteint ! Vous entendez à nouveau les \
 cris perçants et ils deviennent si aigus qu'ils en sont bientôt \
 insupportables. Vous vous laissez tomber à genoux, les mains \
 plaquées contre vos oreilles, et vous rampez vers le mur. Dans quelle \
 direction allez-vous ramper ?\
 Vers le mur est ? <a href='page_181'> Rendez-vous au 181 </a>\
 Vers le mur nord ?  <a href='page_265'>Rendez-vous au 265 </a>\
 Vers le mur ouest ? <a href='page_355'> Rendez-vous au 355</a>\
 </p>\""),
 page_150: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes à la croisée de trois chemins.\
 Pour aller au nord ? <a href='page_222'>  Rendez-vous au 222</a>\
 Pour aller à l'est ? <a href='page_297'>  Rendez-vous au 297</a>\
 Pour aller au sud ? <a href='page_133'>  Rendez-vous au 133</a>\
 </p>\""),
 page_151: new undum.SimpleSituation(//situation 
 "<p class='transient'> \
 Vous gagnez du terrain sur la « turbulence » qui agite l'eau, mais à \
 quelques mètres de la rive nord, vous apercevez les yeux d'un sinistre \
 reptile qui vous observe à la surface de la rivière. Or, vous nagez droit \
 vers lui. Si vous jugez préférable de ne pas avoir affaire au \
 propriétaire des yeux en question, vous pouvez faire volte-face  \
  \
 . Sinon, vous \
 pouvez prendre le risque d'affronter les yeux \
  Enfin, vous pouvez choisir de faire un détour qui vous rapprochera \
 de la « turbulence »\
  <ul class='options'>\
                <li><a href='./fuite'>Faire vole face ?</a></li>\
                <li><a href='./atack'>Voulez vous prendre le risque d'affronter les yeux  ?</a></li>\
                <li><a href='./strange'>faire un détour qui vous rapprochera de la « turbulence » ?</a></li>\
                </ul>\
                 </p>\"",
                  {
  actions: {
  fuite:function(character, system, action){
    system.clearLinks('./fuite'); 
    system.clearLinks('./atack'); 
    system.clearLinks('./strange'); 
             system.setQuality('endurance', character.qualities.endurance -1); 
              system.write( "<p class='transient'>Vous arrivez épuisé sur l'autre rive"
                +" vous perdez 1 point d'endurance <a href='page_218'> vous allez au 218 </a> </p>") ;
                    }, 
              atack:function(character, system, action){
                  system.doLink('page_86');
              }, 
              strange:function(character, system, action){
                  system.doLink('page_158');
              }
        }, 
        exit:function(character, system, action){
            $( "hr" ).remove();
        }
      }
        ),
 page_152: new undum.SimpleSituation(//combat
 "<p class='transient'> \
 Menez le combat :\
 DRAGON HABILETÉ : 10 ENDURANCE : 12\
  <ul class='options'>\
                <li><a href='./attack'>Attaquez le Dragon!</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
            console.log("the system is " + system); 
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_152'][0].monstre[undum.game.nombrederound]);    
                            
                        if (undum.game.bestiaire['page_152'][0].monstre[undum.game.nombrederound].endurance <=0)
                        {
                          
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_152'][0].monstre[undum.game.nombrederound].nom+"!!"
                                         + " " 
                                         +"   </p>" ); 
                           undum.game.nombrederound++; 
                               if(undum.game.nombrederound == 1)
                                {
                                     system.write( "<p class='transient'><a href='page_371'>Vous avez tué le Dragon "
                                      +" Rendez vous au 371</a>  </p>") 
                                }
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            
                        }
                    

                   }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
           }
       }
),
 page_153: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous passez les deux épées dans votre ceinture, mais la nouvelle \
 semble avoir son caractère bien à elle. Elle commence par vous faire \
 une coupure à la jambe (vous perdez 1 point d'ENDURANCE) et \
 lorsque vous la retirez de votre ceinture, elle devient caoutchouteuse. \
 Elle est tout à fait inutile à présent, et vous la jetez à la rivière. Il \
 semble que le seul chemin à suivre soit désormais de descendre la \
 rivière en nageant vers l'est. Vous plongez donc et vous vous mettez à \
 nager.<a href='page_399'>  Rendez-vous au 399. </a>\
 </p>\"", //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.setQuality('endurance', character.qualities.endurance -1);
               
            }
        }
        ),
 page_154: new undum.SimpleSituation(
 "<p class='transient'> \
 Lorsque vous bougez, les yeux de la créature s'ouvrent aussitôt. Elle \
 vous voit et se met lentement debout. Son souffle se fait plus lourd et \
 elle marche vers vous. Il va falloir la combattre.<a href='page_41'>  Rendez-vous au 41. </a>\
 </p>\""),
 page_155: new undum.SimpleSituation(//situation 
 "<p class='transient'> \
 La porte se fend en deux ; vous parvenez à casser le panneau et à \
 entrer. Une torche est fixée à l'un des murs et éclaire une petite salle \
 d'armes remplie d'épées, de boucliers, de casques, de poignards, de \
 cuirasses et autres objets de même nature. Vous fouillez ce dépôt \
 d'armes mais sans rien trouver qui soit plus utile que votre épée. \
 Pourtant, votre regard est attiré par un bouclier rond, en fer. au centre \
 duquel est gravé un croissant. Si vous désirez prendre ce bouclier, il \
 vous aidera à détourner les coups que vous porteront les créatures \
 ennemies. Désormais, si une créature vous inflige une blessure lors \
 d'un combat pendant lequel vous utiliserez ce bouclier, vous pourrez \
 lancer un dé. Si vous faites un 6, la créature ne vous aura atteint que \
 pour la valeur d'1 point, au lieu de 2 en temps normal. Si, pour une \
 raison quelconque, une créature ne vous infligeait qu'une blessure à un \
 point, un 6 obtenu au dé signifierait que le coup n'a pas porté du tout. \
 Mais ce bouclier est lourd, et pour pouvoir l'emporter, il vous faudra \
 abandonner une pièce de votre équipement (rectifiez alors votre Liste \
 d'Equipement). Vous quittez à présent la pièce et vous suivez le \
 couloir. <a href='page_300'>  Rendez-vous au 300. </a>\
 <img  src='media/img/155_img.JPG' class='float_center'>\
  <ul class='options'>\
 <li><a href='./bouclier'>prendre le bouclier ?</a></li>\
 </ul>\
  </p>\"" , //ouvre les condifion
      {
      actions: {
                bouclier: function(character, system, action) {
                        if(undum.game.nombredecoup <2){
                    character.qualities.armure = -3; 
                    system.setQuality('armure', character.qualities.armure +1);
                    system.clearLinks('./bouclier');
                       $( "ul.options" ).remove(); //obligé de bypass la fonction en carton du framework
                    system.buildMenuCharacterInventory();
                     system.write( "<p class='transient'> merci de jeter une piéce de votre équipement </p>" ); 
                  }
                
            }, 
      exit: function(character, system, to) {
            $( "hr" ).remove();
      }
        }
      }
        ),
 page_156: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous essayez d'enfoncer la porte à coups d'épaule. Jetez deux dés. Si \
 le chiffre obtenu est égal ou inférieur au total de vos points \
 d'HABILETÉ ....\
 <ul class='options'>\
                <li><a href='./enfoncer'>Essayer d'enfoncer la porte!</a></li>\
                </ul>\
 </p>\"", {
          

            actions: {
                enfoncer: function(character, system, action) {
                           if( system.rnd.dice(2,6) < character.qualities.habilite )  
                    {
                      system.clearLinks('./enfoncer'); 
                          system.write( "<p class='transient'><a href='page_343'> vous avez réussi et vous allez au 343 </a></p>") ; 
                          

                    }
                    else
                    {
                      system.clearLinks('./enfoncer'); 
                        system.write( "<p class='transient'>vous frottez votre "
                          + " épaule endolorie et vous décidez de ne pas faire de seconde tentative. "
                          +" Retournez à la bifurcation <a href='page_92'>en vous rendant au 92. </a> </p>") ;
                    }
                }
            }, 
            exit:function(character, system, action) {
                 $( "hr" ).remove();
            }
        } ),
 page_157: new undum.SimpleSituation(
 "<p class='transient'> \
 La porte s'ouvre sur un passage est-ouest qui s'oriente au nord au bout \
 de quelques mètres. Si vous voulez suivre cette direction, <a href='page_4'>Rendez-vous au au 4.</a>\
  Si vous préférez ne pas franchir la porte<a href='page_329'>Rendez-vous au 329</a>.\
 </p>\""),
 page_158: new undum.SimpleSituation(
 "<p class='transient'> \
 La surface de l'eau, autour de vous, se ride et s'agite comme si une \
 main imaginaire jetait des cailloux invisibles dans la rivière. Votre \
 gorge se serre soudain lorsque vous découvrez qu'il s'agit de... \
 PIRANHAS ! Et vous sentez déjà leurs dents pointues s'enfoncer dans \
 votre chair. Vous gesticulez, vous leur donner des coups de pied, vous \
 vous défendez avec toutes les armes dont vous disposez en essayant de \
 les tenir à distance assez longtemps pour pouvoir rejoindre la rive sud. \
 Combattez les Piranhas comme s'il s'agissait d'une seule et même \
 créature.\
 Menez cette bataille à son terme.\
 Si vous gagnez,  \
  \
 <ul class='options'>\
                <li><a href='./attack'>Attack!</a></li>\
                </ul>\
                 </p>\"",
                  {
  actions: {
  attack: function( character, system, action) {
    console.log("the system is " + system); 
                   var result = undum.game.fight(character, system , undum.game.bestiaire['page_158'][0].monstre[0]);    
                    
                if (result == 'victory')
                {
                  system.clearLinks('./attack'); 
                   system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_158'][0].monstre[0].nom+"!!"
                                 + " <a href='page_218'>vous réussissez à sortir de l'eau et à vous allonger, !! " 
                                 + " tout pantelant, sur la rive sud.  "
                                 +" </a>. </p><p class='once'> <ul class='options'><li><a href='./repas'> Vous pouvez alors prendre un repas.</a></ul>"

                                +" </p>" ); 
                }
                if (result == 'death')
                {
                system.doLink('death');

                } 

                if (result == 'noDeath')
                {
                      
                }
              

           }, 
        repas:function(character, system, action){
                      if((character.qualities.provision>0))
                      {
                        system.setQuality('provision', character.qualities.provision -1);
                        system.setQuality('endurance', character.qualities.endurance +4);
                        //undum.game.nombretentative++; 
                        system.clearLinks('./repas'); 
                        

                      }
        }
         }
       }
),
 page_159: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous ouvrez la porte et vous découvrez une grande pièce qui est la \
 salle à manger de ces mêmes créatures au visage constellé de verrues \
 que vous reconnaissez à présent. Assis autour d'une grande table, cinq\
 FARFADETS sont occupés à avaler goulûment une soupe de gésiers \
 de rats ; ils en bavent de bonheur. En même temps, ils se disputent \
 âprement pour savoir qui aura droit à ronger les os de rats qui restent \
 au fond de la marmite de soupe. Trop absorbés par cette grave \
 question, ils ne vous voient pas entrer. Vous pouvez vous montrer \
 plein de hardiesse et les attaquer (<a href='page_365'>rendez-vous alors au 365)</a>, ou \
 estimer au contraire qu'il n'y a aucun avantage à affronter cinq de ces \
 créatures en même temps ; dans ce cas, vous essayez de prendre la \
 fuite. Si vous souhaitez quitter la pièce, Tentez votre Chance. Si vous \
 êtes chanceux, vous arrivez à sortir sans qu'ils vous remarquent \
 (<a href='page_237'>rendez-vous au 237)</a>, et vous n'aurez aucune pénalité de fuite. Si vous \
 êtes malchanceux, ils vous voient. Préparez-vous alors à la bagarre,<a href='page_365'> et \
 rendez-vous au 365.</a>\
 </p>\""),
 page_160: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous suivez un long passage étroit qui va vers le sud, puis vers l'est, \
 revient ensuite au sud, et vous mène finalement à une croisée des \
 chemins.<a href='page_267'> Rendez-vous au 267.</a>\
 </p>\""),
      page_161: new undum.SimpleSituation(
 "<p class='transient'> \
 </p>\"",
  { 
       enter: function( character, system, from ){
                    if((undum.game.result161.nom != 'undefined') && (parseInt(undum.game.result161.endurance) >0) )
                    {                 
                            system.write( "<p class='transient'>" 
                       +"En "
                       + "cherchant des portes et des passages secrets, vous avez sondé, martelé, "
                       +"raclé la paroi rocheuse, et tous ces bruits ont résonné dans les couloirs"
                       +"de la montagne. Diverses créatures vagabondent librement dans les"
                       +"souterrains, et ce vacarme a attiré l'attention de l'un des monstres "
                       +"votre enemies est un " + undum.game.result161.nom 
                       +"  <ul class='options'>"
                +"<li><a href='./attack'>Attaquez le " + undum.game.result161.nom +"</a></li>"
                  +"</ul> </p>"); 
                     }
                     else{
                     system.write(  "<p class='transient'>" 
                       +" vous voyez le cadavre d'une créatures <a href='page_256'>vous pouvez soit retourner à la "
                       +"  bifurcation  </a><a href='page_364'>, soit pousser la poignée </a>.</p>");

                     }   

                        }, 
              actions:{
                   

                     attack: function( character, system, action) {
                   if( system.rnd.dice( 2, 6, character.qualities.habilite ) > system.rnd.dice( 2, 6, undum.game.result161.habilite ) ) {

                            undum.game.result161.endurance -= 2; 

                            system.write( "<p class='transient'>Vous avez toucher le "+undum.game.result161.nom +" </p>" );
                            system.write( "<p class='transient'>il reste "+  undum.game.result161.endurance+ " point de vie au "+undum.game.result161.nom +" </p>" );
                            if( undum.game.result161.endurance <= 0 ) {
                                system.write( "<p class='transient'>Vous avez tué le "+undum.game.result161.nom +"!!"
                                 + " <a href='page_256'>vous pouvez soit retourner à la " 
                                 +" bifurcation  </a><a href='page_364'>, soit pousser la poignée </a>.</p>" );
                                return; 
                            }
                        }
                        else if ( system.rnd.dice( 2, 6, character.qualities.habilite ) < system.rnd.dice( 2, 6, undum.game.result161.habilite ) )
                        {                     
                            system.setQuality('endurance', character.qualities.endurance -2);
                              system.animateQuality( 'endurance', character.qualities.endurance -2 );
                            system.write( "<p class='transient'>Le "+undum.game.result161.nom +" vous touche !!</p>" );
                               if( character.qualities.endurance <= 0 ) {
                                system.write( "<p class='transient'>Vous tomber au sol!</p>" );
                                system.doLink( 'death' );
                            }

                        }
                }

              }
            }
 ),
page_1612: new undum.SimpleSituation(
        "<p class='transient'> \
        </p>\"",
  { 
       enter: function( character, system, from ){
                        if((undum.game.result161_Bis.nom != 'undefined') && (parseInt(undum.game.result161.endurance) >0) )
                    {                 
                       
                            system.write( "<p class='transient'>" 
                       +"En "
                       + "cherchant des portes et des passages secrets, vous avez sondé, martelé, "
                       +"raclé la paroi rocheuse, et tous ces bruits ont résonné dans les couloirs"
                       +"de la montagne. Diverses créatures vagabondent librement dans les"
                       +"souterrains, et ce vacarme a attiré l'attention de l'un des monstres "
                       +"votre enemies est un " + undum.game.result161_Bis.nom + " "
                       +"  <ul class='options'>"
                +"<li><a href='./attack'>Attaquez le " + undum.game.result161_Bis.nom +"</a></li>"
                  +"</ul>  </p>");
                  }
                   else{
                       system.write("<p class='transient'> <a href='page_117'>Vous voyez le cadavre d'une créature rendez vous au 117 Cliquez ! </a></p>");

                     }   

                        }, 
        actions:{
           attack: function( character, system, action) {
                   var result = undum.game.fight(character, system, undum.game.result161_Bis); 

                if (result == 'victory')
                {
                   system.write( "<p class='transient'>Vous avez tué le "+undum.game.result161_Bis.nom +" !!"
                                 + " <a href='page_117'>Rendez vous au Cliquez ! " 
                                 +" </a>. </p>" ); 
                }
                if (result == 'death')
                {
                system.doLink('death');

                } 

                if (result == 'noDeath')
                {

                }
              }

           }, 
          exit:function( character, system, from ){
            $( "hr" ).remove();
          }
         }
      ),
page_1613: new undum.SimpleSituation(
        "<p class='transient'> \
        </p>\"",
  {  
       enter: function( character, system, from ){
                                     if((undum.game.result161_Bis2.nom != 'undefined') && (parseInt(undum.game.result161_Bis2.endurance) >0) )
                    {            
                            system.write( "<p class='transient'>" 
                       +"En "
                       + "cherchant des portes et des passages secrets, vous avez sondé, martelé, "
                       +"raclé la paroi rocheuse, et tous ces bruits ont résonné dans les couloirs"
                       +"de la montagne. Diverses créatures vagabondent librement dans les"
                       +"souterrains, et ce vacarme a attiré l'attention de l'un des monstres "
                       +"votre enemies est un " + undum.game.result161_Bis2.nom + " "
                       +"  <ul class='options'>"
                +"<li><a href='./attack'>Attaquez le " + undum.game.result161_Bis2.nom +"</a></li>"
                  +"</ul>  </p>"); 
                          }
                          else{
                       system.write("<p class='transient'>" 
                       + " <a href='page_43'>Vous sentez le cadavre d'une créature rendez vous au 43 Cliquez ! </a></p>"); 

                     }  
                        }, 
        actions:{
           attack: function( character, system, action) {
                   var result = undum.game.fight(character, system, undum.game.result161_Bis2); 

                if (result == 'victory')
                {
                   system.write( "<p class='transient'>Vous avez tué le "+undum.game.result161_Bis2.nom +" !!"
                                 + " <a href='page_43'>Rendez vous au Cliquez ! " 
                                 +" </a>. </p>" ); 
                }
                if (result == 'death')
                {
                system.doLink('death');

                } 

                if (result == 'noDeath')
                {

                }
              }

           }, 
          exit:function( character, system, from ){
            $( "hr" ).remove();
          }
         }
      ),
page_1614: new undum.SimpleSituation(
        "<p class='transient'> \
        </p>\"",
  { //ouvre la condition 
       enter: function( character, system, from ){
                                              if((undum.game.result161_Bis3.nom != 'undefined') && (parseInt(undum.game.result161_Bis3.endurance) >0) )
                    {              
                            system.write( "<p class='transient'>" 
                       +"En "
                       + "cherchant des portes et des passages secrets, vous avez sondé, martelé, "
                       +"raclé la paroi rocheuse, et tous ces bruits ont résonné dans les couloirs"
                       +"de la montagne. Diverses créatures vagabondent librement dans les"
                       +"souterrains, et ce vacarme a attiré l'attention de l'un des monstres "
                       +"votre enemies est un " + undum.game.result161_Bis3.nom + " "
                       +"  <ul class='options'>"
                +"<li><a href='./attack'>Attaquez le " + undum.game.result161_Bis3.nom +"</a></li>"
                  +"</ul>  </p>"); 
                          }
                          else{
                      system.write( "<p class='transient'>" 
                       +" <a href='page_48'>Une créature est morte dans cette piéce, rendez vous au 48 Cliquez ! </a></p>"); 

                     }  
                        }, 
        actions:{
           attack: function( character, system, action) {
                   var result = undum.game.fight(character, system, undum.game.result161_Bis3); 

                if (result == 'victory')
                {
                   system.write( "<p class='transient'>Vous avez tué le "+undum.game.result161_Bis3.nom +" !!"
                                 + " <a href='page_48'>Rendez vous au Cliquez ! " 
                                 +" </a>. </p>" ); 
                }
                if (result == 'death')
                {
                system.doLink('death');

                } 

                if (result == 'noDeath')
                {

                }
              }

           }, 
          exit:function( character, system, from ){
            $( "hr" ).remove();
          }
         }
      ),
page_1615: new undum.SimpleSituation(
        "<p class='transient'> \
        </p>\"",
  { //ouvre la condition 
       enter: function( character, system, from ){
                              
                      if((undum.game.result161_Bis4.nom != 'undefined') && (parseInt(undum.game.result161_Bis4.endurance) >0) )
                    {                    
                            system.write( "<p class='transient'>" 
                       +"En "
                       + "cherchant des portes et des passages secrets, vous avez sondé, martelé, "
                       +"raclé la paroi rocheuse, et tous ces bruits ont résonné dans les couloirs"
                       +"de la montagne. Diverses créatures vagabondent librement dans les"
                       +"souterrains, et ce vacarme a attiré l'attention de l'un des monstres "
                       +"votre enemies est un " + undum.game.result161_Bis4.nom + " "
                       +"  <ul class='options'>"
                +"<li><a href='./attack'>Attaquez le " + undum.game.result161_Bis4.nom +"</a></li>"
                  +"</ul>  </p>"); 
                          }
                           else{
                       system.write("<p class='transient'>" 
                       +" <a href='page_291'>Une créature est morte dans cette piéce, rendez vous au 291 Cliquez ! </a></p>"); 

                     }  
                        }, 
        actions:{
           attack: function( character, system, action) {
                   var result = undum.game.fight(character, system, undum.game.result161_Bis4); 

                if (result == 'victory')
                {
                   system.write( "<p class='transient'>Vous avez tué le "+undum.game.result161_Bis4.nom +" !!"
                                 + " <a href='page_291'>Rendez vous au Cliquez ! " 
                                 +" </a>. </p>" ); 
                }
                if (result == 'death')
                {
                system.doLink('death');

                } 

                if (result == 'noDeath')
                {

                }
              }

           }, 
          exit:function( character, system, from ){
            $( "hr" ).remove();
          }
         }
      ),
page_162: new undum.SimpleSituation(
 "<p class='transient'> \
 Le passage est orienté vers le nord et vous le suivez jusqu'à ce que \
 vous arriviez à une nouvelle bifurcation. Là, vous pouvez soit \
 continuer vers le nord (<a href='page_23'>rendez-vous au 23)</a>, soit aller vers l'ouest \
 <a href='page_69'>(rendez-vous au 69).</a>\
 </p>\""),
 page_163: new undum.SimpleSituation(//chance combat
 "<p class='transient'> \
 </p>\""  , //ouvre les condifion
      {
        actions: {
  attack: function( character, system, action) {
    
                   var result = undum.game.fight(character, system , undum.game.bestiaire['page_163'][0].monstre[0]);    
                    
                if (result == 'victory')
                {
                   system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_163'][0].monstre[0].nom+"!!"
                                 + " <a href='page_28'>Rendez vous au Cliquez !! " 
                                 +" </a>.</p>" ); 
                }
                if (result == 'death')
                {
                system.doLink('death');

                } 

                if (result == 'noDeath')
                {
                      undum.game.nombrederound++; 
                }
                if(undum.game.nombrederound == 2)
                {
                     system.write( "<p class='transient'><a href='page_351'>vous pouvez fuir le long du corridor.</a>  </p>") 
                }

           }
         }
       ,
       enter: function(character, system, to) {
          if( system.rnd.dice(2,6) < character.qualities.chance )  
                    {
                      system.setQuality('chance', character.qualities.chance -1);
                          system.write( "<p class='transient'>"
                            +"Vous tirez votre épée et vous entrez dans la caverne. Le Géant s'arrête"
                            +"soudain de mâcher, relève la tête et renifle autour de lui. Il se retourne"
                            +" et vous voit approcher. Avec un rugissement sonore, il lance la"
                            +" carcasse du cochon dans votre direction "
                            +"<strong>Vous etes chanceux</strong> il vous rate"
                            +" il faut maintenant le combatre <ul class='options'>"
                            +" <li><a href='./attack'>Attack!</a></li>"
                            +" </ul> </p><br>") ; 
                        

                    }
                    else
                    {
                      system.setQuality('chance', character.qualities.chance -1);
                      system.setQuality('endurance', character.qualities.endurance -1);
                        system.write( "<p class='transient'>"
                            +"Vous tirez votre épée et vous entrez dans la caverne. Le Géant s'arrête"
                            +"soudain de mâcher, relève la tête et renifle autour de lui. Il se retourne"
                            +" et vous voit approcher. Avec un rugissement sonore, il lance la"
                            +" carcasse du cochon dans votre direction "
                            +"<strong>Vous n etes pas chanceux</strong> il vous touche"
                            +" il faut maintenant le combatre <ul class='options'>"
                            +" <li><a href='./attack'>Attack!</a></li>"
                            +" </ul> </p><br>")  ;
                       
                    }
             
            }, 
            exit: function(character, system, to) {
               $( "hr" ).remove();
            }
        }
        ),
 page_164: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous rendez compte que les deux Squelettes qui viennent de \
 quitter le hangar reviendront bientôt et dévoileront votre mensonge. Il \
 vous faut agir vite. Allez-vous rapidement battre en retraite par la \
 porte qui se trouve derrière vous (<a href='page_129'>rendez-vous alors au 129)</a>, ou tirer \
 votre épée et attaquer les squelettes présents dans le hangar (<a href='page_236'>et vous \
 rendre au 236)</a>\
 </p>\""),
 page_165: new undum.SimpleSituation(
 "<p class='transient'> \
 Le vieil homme vous remercie et lace ses bottes d'un air penaud. Vous \
 lui expliquez que vous ne lui voulez aucun mal et il se calme, \
 rappelant son chien. Il vous révèle que cet endroit est le seul passage \
 qui mène aux salles intérieures. Quelques années auparavant, la rivière \
 était entrée en crue au début du printemps, après une fonte des neiges \
 particulièrement impressionnante et il était alors devenu impossible \
 de s'approvisionner à l'extérieur. Tous les habitants des environs \
 mouraient de faim mais le Maître, se rendant compte qu'il avait besoin \
 de se défendre contre le monde du dehors, jeta un sort sur la région. \
 Les créatures qui échappèrent à la mort gardent désormais le passage.\
 Il vous pose ensuite des questions pour savoir qui vous êtes et ce que \
 vous cherchez. Qu'allez-vous faire ?\
 Être franc avec lui et lui révéler l'objet de votre quête ?<a href='page_141'> Rendez-vous \
 au 141 </a>\
 Le remercier d'avoir bavardé avec vous et partir par la porte sud ? \
 <a href='page_66'>Rendez-vous au 66 </a>\
 Essayer de vous emparer des clés et aller à la porte la plus proche ? \
 <a href='page_249'>Rendez-vous au 249 </a>\
 <img  src='media/img/62_img.JPG' class='float_right'>\
 </p>\""),
 page_166: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous tombez dans l'eau glacée et vous nagez frénétiquement pour \
 essayer d'atteindre la rive sud. A votre grand étonnement, le radeau \
 revient de lui-même à la rive sud après avoir fait demi-tour au milieu \
 du cours d'eau. Vous accélérez l'allure, car les remous que vous \
 provoquez en nageant pourraient attirer l'attention d'une quelconque \
 créature habitant la rivière. Jetez un dé. Si vous faites 1, 2, 3 ou 4, \
 vous parvenez à rejoindre la rive sain et sauf.\
.\
 <ul class='options'>\
                <li><a href='./lucktest'>Tentez votre chance ?</a></li>\
                </ul>\
                 </p>\"",
      {
          

            actions: {
                lucktest: function(character, system, action) {
                    system.clearLinks('./lucktest'); 
                    if( system.rnd.dice(1,6) <= 4 )  
                    {
                          system.write( "<p class='transient'>vous parvenez à rejoindre la rive sain et sauf.<a href='page_218'> Rendez-vous alors au 218.</a></p><br>") ; 
                          

                    }
                    else
                    {
                        system.write( "<p class='transient'> vous avez fait 5 ou 6 <a href='page_158'>Rendez-vous au 158</a> </p>") ;
                
                    }

                }
            }, 
            exit:function(character, system, action) {
                 $( "hr" ).remove();
            }
        }),
 page_167: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous découvrez une porte qui ouvre sur une bifurcation. Au nord, un \
 court passage se termine en impasse, et à l'est un autre couloir mène à \
 un nouveau croisement. Si vous décidez de franchir cette porte \
 secrète, <a href='page_187'>rendez-vous au 187</a>. Si vous préférez ne pas vous aventurer \
 dans cette direction, refermez la porte et retournez au croisement \
 précédent en revenant sur vos pas. <a href='page_359'>Rendez-vous alors au 359.</a>\
 </p>\""),
 page_168: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous ouvrez la porte qui donne dans une vaste pièce. Une haute chaise \
 et une table massive semblent indiquer que quelqu'un ou quelque \
 chose d'important occupe cet endroit. Vous apercevez un coffre posé \
 au milieu de la pièce. Dans un coin se tient une créature de la taille \
 d'un homme ; elle a le visage constellé de verrues et domine une autre \
 créature plus petite mais d'apparence semblable. Un fouet à la main, le \
 CHEF DES FARFA DETS est en train d'infliger une correction à son \
 serviteur qui gémit sous les coups. Qu'allez-vous faire ?\
 Les attaquer tous deux ? <a href='page_372'> Rendez-vous au 372 </a>\
 Bondir sur le Chef en espérant que son serviteur vous viendra en aide \
 ? <a href='page_65'>Rendez-vous au 65 </a>\
 Quitter la pièce et retourner au croisement ? <a href='page_293'> Rendez-vous au 293</a>\
 <img  src='media/img/168_img.JPG' class='float_center'>\
 </p>\""),
 page_169: new undum.SimpleSituation( //the end 169
 "<p class='transient'> \
 Une à une, toutes les clés s'engagent et tournent dans les serrures. \
 Vous les avez placées comme il fallait ! Lorsque tourne la dernière \
 clé, le couvercle du coffre se libère et vous le soulevez. <a href='page_400'> Rendez-vous \
 au 400  </a> pour voir ce qu'il vous révèle.\
 </p>\""),
 page_170: new undum.SimpleSituation( //reliquat d'une situation précédente
 "<p class='transient'> \
 Le crucifix est en argent massif et vaut 4 Pièces d'Or. Inscrivez-le sur \
 votre Feuille d'Aventure <a href='page_319'>Rendez-vous au 319</a> .\
 </p>\"" 
        ),
 page_171: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous trouvez à l'extrémité nord d'un court passage nord-sud. \
 Vous êtes devant un cul-de-sac. Si vous voulez examiner le mur, \
 <a href='page_337'>rendez-vous au 337</a><a href='page_187'> Pour aller au sud, rendez-vous au 187 </a>.\
 </p>\""),
 page_172: new undum.SimpleSituation(
 "<p class='transient'> \
 Le vieil homme bat des paupières et ouvre les yeux. Il vous voit et \
 saisit une moitié de rame posée près de son banc. Vous lui expliquez \
 que vous ne lui voulez aucun mal, mais il reste sur ses gardes et vous \
 observe avec méfiance. Bien qu'il semble lui-même plutôt inoffensif, \
 son chien pourrait se révéler dangereux. Les bottes du vieil homme \
 sont délacées. Qu'allez-vous faire ?\
 Vous précipiter sur le chien en brandissant votre épée ?<a href='page_249'> Rendez-vous \
 au 249 </a>\
 Demander à l'homme des renseignements qui pourraient vous aider \
 dans votre quête ?<a href='page_141'>Rendez-vous au 141 </a>\
 Lui dire que les lacets de ses bottes sont défaits ? <a href='page_165'>Rendez-vous au 165 </a>\
 </p>\""),
 page_173: new undum.SimpleSituation(//chance depend inventaire
 "<p class='transient'> \
 Seules les armes en argent seront efficaces dans la situation présente. \
 Lorsque la créature vous aura infligé votre troisième blessure,rendez-\
 vous au 24.Si vous parvenez à la terrasser avant cela;\
  vous pouvez également prendre la fuite par la porte nord \
 . Si vous disposez de «Celui qui \
 donne Sommeil», Tentez votre Chance. Si vous êtes chanceux, vous \
 faites mouche et la créature meurt sur le coup. Si vous êtes \
 malchanceux, vous la ratez.\
<ul class='options'>\
                <li><a href='./lucktest'>Tentez votre chance ?</a></li>\
                 <li><a href='./attack'>Attaquez le wight ?</a></li>\
                 <li><a href='./fuite'>Fuir le wight ?</a></li>\
                </ul>\
                 </p>\"",
      {
          

            actions: {
                lucktest: function(character, system, action) {
                  if(system.isItemExistInventory("arc")){
                    if( system.rnd.dice(2,6) < character.qualities.chance )  
                    {
                       system.setQuality('chance', character.qualities.chance -1);
                          system.write( "<p class='transient'><strong>Vous etes chanceux"
                            +" <a href='page_135'>Rendez-vous au 135</a></strong></p><br>") ; 
                          
                           system.clearLinks('./lucktest');
                    }
                    else
                    {
                      system.setQuality('chance', character.qualities.chance -1);
                        system.write( "<p class='transient'>pas de chance </p>") ;
                      system.clearLinks('./lucktest');   
                    }
                  }
                  else{
                       system.write( "<p class='transient'>vous n'avez pas celui qui donne le sommeil  </p>") ;
                       system.clearLinks('./lucktest');
                  }

                },
                attack: function( character, system, action) {
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_41'][0].monstre[0]);    
                        if (result == 'victory')
                        {
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_41'][0].monstre[0].nom+"!!"
                                         + " <a href='page_135'>Rendez-vous au 135</a> .</p>" ); 
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if(undum.game.nombredecoup == 3)
                        {
                          system.doLink('page_24');
                        }

                        if (result == 'noDeath')
                        {
                             if(undum.game.initfight  !=  character.qualities.endurance)
                            {
                              undum.game.nombredecoup++; 
                            }
                        }
                      }, 
                   fuir: function( character, system, action) {
                        system.setQuality('endurance', character.qualities.endurance -2);
                        if( character.qualities.endurance <= 0)
                        {
                            system.doLink('page_360');
                        }
                        else
                        {
                          system.doLink('death');
                        }
                   }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
            undum.game.nombredecoup = 0; 
            undum.game.initfight = 0; 
            $( "hr" ).remove();
           },
           enter: function(character, system, action){
            undum.game.initfight =  character.qualities.endurance; 
           }

                 
            
        }),
 page_174: new undum.SimpleSituation(
 "<p class='transient'> \
 <a href='page_198'>Rendez-vous au 198.</a>\
 </p>\""),
 page_175: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous trouvez dans un couloir étroit. Derrière vous, il y a une \
 porte qui donne à l'est. Droit devant, il y a un croisement. Si vous \
 voulez franchir la porte, <a href='page_177'>rendez-vous au 177</a>. Pour aller au croisement, \
 <a href='page_267'>rendez-vous au 267.</a>\
 </p>\""),
 page_176: new undum.SimpleSituation(
 "<p class='transient'> \
 Tandis que vous marchez le long du passage, il s'élargit de plus en \
 plus et, finalement, vous arrivez à l'entrée d'une caverne, une sorte de \
 grotte naturelle s'enfon-çant dans le roc. Vous jetez un coup d'œil dans \
 l'obscurité : apparemment, la caverne fait environ trente mètres de \
 long et ne comporte aucune issue visible. Voulez-vous pénétrer dans \
 cette caverne<a href='page_270'> (et vous rendre au 270) </a>, ou préférez-vous revenir vers la \
 bifurcation (<a href='page_375'>rendez-vous dans ce cas au 375)</a> ?\
 </p>\""),
 page_177: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous trouvez dans un passage nord-sud. Au nord, vous apercevez \
 un autre couloir qui bifurque vers l'est. Si vous voulez vous y rendre, \
 <a href='page_52'>allez au 52.</a> Au sud, le passage tourne vers l'ouest. Vous pouvez vous \
 rendre à l'extrémité sud du passage<a href='page_391'> en allant au 391</a>. Dans le mur \
 ouest, en face de vous, il y a une porte secrète. Si vous désirez la \
 franchir<a href='page_175'> Rendez-vous au 175</a>.\
 </p>\""),
 page_178: new undum.SimpleSituation(
 "<p class='transient'> \
 En avançant avec prudence, sur la pointe des pieds, vous traversez la \
 pièce pour atteindre la porte dans le mur nord. Vous ouvrez cette porte \
 et vous la franchissez. <a href='page_162'> Rendez-vous au 162. </a>\
 </p>\""),
 page_179: new undum.SimpleSituation( 
 "<p class='transient'> \
                 </p>\"", 
                 {
          actions: {
          
              attack: function( character, system, action ) {
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_179'][0].monstre[0]);    
                            
                        if (undum.game.bestiaire['page_179'][0].monstre[0].endurance <=0)
                        {
                           system.clearLinks('./attack'); 
                      system.clearLinks('./fuite'); 
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_179'][0].monstre[0].nom+"!!"
                                         + "  <a href='page_258'>Rendez-vous au 258</a>" 
                                         +"   </p>" );      
                              
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            undum.game.nombrederound++; 
                        }
                        if(undum.game.nombrederound == 3)
                          {
                               system.write( "<p class='transient'><ul class='options'> "
                                +" <li><a href='./fuite'>Vous pouvez prendre la fuite</a></li> </ul>  </p>") 
                          }
                    

                   },
                  fuite: function( character, system, action) {
                     system.clearLinks('./attack'); 
                      system.clearLinks('./fuite'); 
                     system.setQuality('endurance', character.qualities.endurance -2);
                     if(character.qualities.endurance <= 0){
                      system.doLink('death');

                     }
                     else{
                       system.write( "<p class='transient'> vous vous arrangez pour faire un "
                         +"mouvement circulaire qui vous rapproche de la porte par laquelle vous vous enfuyer"
                                +" <a href='page_54'>Rendez-vous au 54</a>  </p>") 
                     }
                  }

                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
           },
           enter: function(character, system, action) {
               
              
                if(undum.game.bestiaire['page_179'][0].monstre[0].endurance <= 0)
                {
                   system.write( "<p class='transient'>Vous voyez le cadavre du Minotaure"
                                         + "  <a href='page_258'>Rendez-vous au 258</a>" 
                                         +"   </p>" );    
               
                }
                else
                {
                  system.write( "<p class='transient'> Vous venez d'entrer dans une grande pièce carrée. Des débris de"
                  +"  poteries traînent çà et là sur le sol. Vous apercevez également un"
                  +"  grand vase d'argile, intact, et rempli d'un liquide clair. Il y a aussi un"
                  +"  grand bol plein de Pièces d'Or. Lorsque vous pénétrez dans la pièce, la"
                    +" porte claque derrière vous et vous vous retournez pour faire face à une "
                        +" créature à l'aspect étrange, moitié homme, moitié taureau. La créature "
                        +" vous regarde d'un air menaçant. C'est un MINOTAURE et il s'avance "
                        +"  vers vous ! "
                        +" Il incline la tête, ses cornes pointées sur votre poitrine, et se met est-à-dire charger."
                        +" Il vous faut le combattre : "
                        +"  MINOTAURE HABILITÉ : 9 ENDURANCE: 9"
                        +"  <img  src='media/img/179_img.JPG' class='float_center'> "
                        +" <ul class='options'> <li><a href='./attack'>Attaquez le Minotaure!</a></li> </ul></p>") ;
                }
            }
       }
),
 page_180: new undum.SimpleSituation(
 "<p class='transient'> \
 Le passage va vers l'ouest, puis tourne au sud. Finale ment, vous \
 arrivez à un cul-de-sac. Vous pouvez retourner à la croisée des trois \
 chemins et aller à l'est (<a href='page_70'>rendez-vous alors au 70)</a>,  <a href='page_329'>ou au nord (rendez-\
 vous au 329)</a> ; vous pouvez également explorer le cul-de-sac<a href='page_22'> (rendez-\
 vous au 22).</a>\
 </p>\""),
 page_181: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous courez le long du couloir en quête d'une porte, mais vous n'en \
 trouvez pas. Vos oreilles vous font terriblement mal ! Vous perdez \
 encore un point d'HABILETÉ. Vous pouvez essayer le mur ouest \
 (<a href='page_355'>rendez-vous au 355) </a><a href='page_265'>ou le mur nord (rendez-vous au 265)</a> , mais il \
 vous faut de toute façon trouver très vite une issue !\
 </p>\"" , //ouvre les condifion
      {
       enter: function(character, system, to) {
         
               system.setQuality('habilite', character.qualities.habilite -1);
            }
        }
        ),
 page_182: new undum.SimpleSituation(
 "<p class='transient'> \
 Deux des clés s'adaptent parfaitement aux serrures. Mais pas la \
 troisième. Vous faites un bond de côté car un jet de liquide vient de \
 jaillir du coffre. Il vous a manqué de justesse, mais vous perdez quand \
 même 2 points d'ENDURANCE : le liquide en effet répand des \
 vapeurs acides qui vous font tousser et étouffer à moitié. Vous revenez \
 devant le coffre et vous essayez une nouvelle combinaison de trois \
 clés. Faites la somme des chiffres gravés sur les clés choisies et \
 <a href='page_139'>retournez au 139 </a> rendez-vous au paragraphe correspondant à ce total. Si vous n'avez pas \
 d'autres clés à essayer, vous vous asseyez, épuisé et désespéré d'avoir \
 échoué si près du but. Pensez à chercher des clés, la prochaine fois que \
 vous pénétrerez dans les souterrains !\
 </p>\"",
   { 
            exit:function(character, system, action) {
             $( "hr" ).remove();
            }, 
            enter:function(character, system, action) {
                system.setQuality('endurance', character.qualities.endurance -2);
                if(character.qualities.endurance <= 0){
                  system.doLink('death');
                }
            }
        }),
 page_183: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous fouillez les corps des Farfadets morts, mais vous ne trouvez que \
 quelques dents, des ongles, des os et des cou-teaux disséminés dans \
 leurs poches. Vous fouillez également les placards autour de la pièce \
 mais vous n'y découvrez que des bols, des assiettes et des cuillères \
 rudi-mentaires. Sous un dressoir, cependant, vous trouvez une mallette \
 de cuir fin d'une cinquantaine de centimètres de long. Vous pouvez\
 ouvrir cette mallette (<a href='page_266'>rendez-vous au 266)</a>, ou la laisser là et sortir par \
 la porte (<a href='page_237'>rendez-vous au 237)</a>. Vous êtes fier de votre victoire, et vous \
 prenez 1 point d'HABILETÉ et 5 d'ENDURANCE.\
 </p>\"" , //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.setQuality('endurance', character.qualities.endurance +5);
               system.setQuality('habilite', character.qualities.habilite +1);
            }
        }
        ),
 page_184: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes seul dans le Hangar à Bateaux et vous disposez d'un certain \
 laps de temps pour l'explorer avant le retour inévitable des Squelettes. \
 Vous pouvez fouiller les tiroirs des établis (<a href='page_322'>rendez-vous au 322)</a>, ou \
 examiner les outils (<a href='page_34'>rendez-vous au 34)</a> avant qu'ils ne reviennent. \
 Tandis que vous commencez vos investigations, vous entendez un \
 bruit qui provient de derrière la porte aménagée dans le mur nord.\
 </p>\""),
 page_185: new undum.SimpleSituation(
 "<p class='transient'> \
 La main se ratatine et se renfonce dans le sol. En même temps, les \
 autres mains s'immobilisent et retombent en disparaissant dans les \
 dalles. Cette fois, vous décidez de marcher sur les dalles en forme \
 d'étoiles et vous traversez la pièce avec prudence, en direction de la \
 porte dans le mur nord. La porte s'ouvre. Prenez 2 points de CHANCE. \
 <a href='page_162'>Rendez-vous au 162.</a>\
 </p>\""),
 page_186: new undum.SimpleSituation(
 "<p class='transient'> \
 <a href='page_198'>Rendez-vous au 198. </a>\
 </p>\""),
 page_187: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes debout dans le couloir, au milieu d'un tournant. Au nord, le \
 passage se termine par un cul-de-sac. Si vous voulez l'explorer, \
 <a href='page_171'>rendez-vous au 171</a>. Si vous préférez aller vers l'est, <a href='page_308'>rendez-vous au 308.</a>\
 </p>\""),
 page_188: new undum.SimpleSituation(
 "<p class='transient'> \
 Il fait à présent un peu moins de deux mètres de haut. Il avance sur \
 vous. Son corps est couvert de poils. Ses dents sont pointues. Ses yeux \
 lancent des éclairs. Ses ongles sont aussi acérés que des griffes. Son \
 nez s'est transformé en un museau de rat. C'est un RAT-GAROU!\
 RAT-GAROU HABILETÉ: 8 ENDURANCE: 5\
 Combattez-le.  Si vous \
 choisissez de prendre la fuite, vous pouvez le faire en traversant le \
 pont branlant (<a href='page_209'>rendez-vous alors au 209)</a>.\
 <ul class='options'>\
                <li><a href='./attack'>Attack!</a></li>\
                </ul>\
                 </p>\"",  //DEBUG
 {
  actions: {
  attack: function( character, system, action) {
    console.log("the system is " + system); 
                   var result = undum.game.fight(character, system , undum.game.bestiaire['page_188'][0].monstre[0]);    
                    
                if (result == 'victory')
                {
                   system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_188'][0].monstre[0].nom+"!!"
                                 + " <a href='page_342'>rendez-vous au 342.</a> !! " 
                                 +" </p>" ); 
                }
                if (result == 'death')
                {
                system.doLink('death');

                } 

                if (result == 'noDeath')
                {
                     
                }
             
           }
         }
       }
 ),
 page_189: new undum.SimpleSituation(
 "<p class='transient'> \
  <img  src='media/img/190_img.JPG' class='float_center'>\
 La porte s'ouvre sur un petit couloir qui aboutit quelques mètres plus \
 loin à une autre porte semblable à celle que vous venez de franchir. \
 Vous vous penchez pour écouter, mais vous n'entendez rien. Vous \
 essayez de tourner la poignée, et avec succès puisque la porte s'ouvre \
 sans résistance, découvrant une autre pièce de même dimension. Cette \
 pièce est magnifiquement décorée ; le sol est de marbre poli et les \
 murs de pierres brutes sont peints en blanc. À chacun des quatre murs \
 sont accrochés des tableaux et il y a une autre porte aménagée dans le \
 mur nord. Vous pouvez traverser cette pièce <a href='page_90'>(et vous rendre au 90)</a>, ou \
 vous attarder pour contempler les tableaux <a href='page_25'>(vous irez alors au 25) </a>.\
 </p>\""),
 page_190: new undum.SimpleSituation(
 "<p class='transient'> \
 <img  src='media/img/62_img.JPG' class='float_right'>\
 Vous vous trouvez dans un étroit passage nord-sud. Au nord, il finit en \
 cul-de-sac. Vous pouvez explorer cette impasse<a href='page_167'> (et vous rendre au 167)</a>\
  ou n'y accorder aucune attention et revenir au croisement \
 .<a href='page_359'>(rendez-vous au 359)</a>\
 </p>\""),
 page_191: new undum.SimpleSituation(
 "<p class='transient'> \
 Il pousse un hurlement et se cache derrière son bureau. Il est terrifié \
 par votre comportement agressif. D'une petite voix aiguë, il vous \
 déclare qu'il est le maître du Labyrinthe de Zagor. Vous lui parlez \
 pour le rassurer, en lui expliquant que vous ne lui voulez aucun mal. \
 Finalement, il sort de derrière son bureau. Il s'assied et tandis qu'il \
 reprend confiance, une chose étrange se produit. Son attitude devient \
 ferme et assurée. Il cite le titre d'un livre qu'il montre du doigt ; \
 aussitôt, le livre glisse de son étagère, s'envole et vient se poser sur le \
 bureau, devant lui. Vous en tirez la conclusion que ce personnage est \
 un Sorcier doté de pouvoirs surnaturels ; peut-être même est-ce le \
 Maître de la montagne en personne, venu voir ce que vous faites dans \
 son domaine. Vous lui demandez quel chemin prendre pour sortir du \
 labyrinthe. Il vous répond qu'il faut franchir la porte sud, passer \
 devant une autre porte située sur votre droite, c'est-à-dire à l'ouest, \
 jusqu'à ce que vous parveniez au bout du couloir. Là, vous devrez \
 tourner à gauche. Vous traverserez un croisement, puis vous prendrez \
 à nouveau à gauche à la bifurcation suivante.\
 Si vous suivez ce conseil, sortez par la porte sud et empruntez le \
 chemin indiqué jusqu'à ce que vous arriviez au deuxième croisement \
 <a href='page_308'>Rendez-vous au 308 </a>\
 Si vous décidez de sortir par la porte sud, mais de prendre ensuite un \
 autre chemin <a href='page_392'>Rendez-vous au 392 </a>\
 Si vous préférez sortir par la porte ouest <a href='page_46'>Rendez-vous au 46 </a>\
 </p>\""),
 page_192: new undum.SimpleSituation(
 "<p class='transient'> \
 <a href='page_169'>Rendez-vous au 169.</a>\
 </p>\""),
 page_193: new undum.SimpleSituation(
 "<p class='transient'> \
 <img  src='media/img/193_img.JPG' class='float_center'>\
 La porte s'ouvre et vous entrez dans une petite pièce. Vous écarquillez \
 les yeux en regardant autour de vous car les murs de la pièce sont \
 finement ouvragés, couverts de mosaïques et d'incrustations de marbre \
 qui donnent à l'endroit une beauté inattendue, telle que jamais encore \
 vous n'en avez vue. Dans un coin se dresse une haute statue de métal \
 représentant une créature dotée d'un œil unique au milieu du front. C'est \
 un Cyclope et son œil est constitué d'une pierre précieuse étincelante.\
 Comme il n'y a pas d'autre issue dans la pièce, il va falloir rebrousser \
 chemin jusqu'à la bifurcation - mais cette pierre précieuse est tentante. \
 Allez-vous la laisser là et revenir au croisement (<a href='page_93'>rendez-vous alors au 93)</a>,\
  ou essayer de la dessertir pour la prendre <a href='page_338'> avec vous (rendez-vous au 338)? </a>\
 </p>\""),
 page_194: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous tendez votre arc et vous tirez, mais vous constatez avec \
 désespoir que la flèche s'arrête à quelques centimètres de sa poitrine et \
 tombe sur le sol sans l'avoir atteint. Il lève les yeux et vous regarde \
 avec un sourire sinistre et triomphant. Qu'allez-vous faire ?\
 Tirer votre épée et avancer sur lui ?<a href='page_142'> Rendez-vous au 142</a>. Essayer de \
 trouver autre chose dans votre sac à dos avec quoi l'affronter ? \
<a href='page_105'> Rendez-vous au 105.</a>\
 </p>\""),
 page_195: new undum.SimpleSituation(
 "<p class='transient'> \
 C'est une histoire peu vraisemblable que vous racontez là car ils ne \
 voient pas beaucoup d'êtres humains, et on les aurait prévenus de \
 l'arrivée d'un nouveau patron. Les Squelettes, cependant, n'ont pas \
 l'esprit très vif - vous le savez et c'est pourquoi vous avez essayé ce \
 mensonge. \
 <ul class='options'>\
                <li><a href='./lucktest'>Lancez un dé. </a></li>\
                </ul>\
                 </p>\"", //ouvre les condifion chance
      {
          

            actions: {
                lucktest: function(character, system, action) {
                     system.clearLinks('./lucktest'); 
                    var result = system.rnd.dice(1,6); 
                    if( result <= 2 )  
                    {
                      system.setQuality('chance', character.qualities.chance -1);
                          system.write( "<p class='transient'>ils ne vous "
                          + "croient pas et continuent d'avancer sur vous. <a href='page_140'> Rendez-vous au 140</a></p><br>") ; 

                    }
                    else if ( (result > 2) &&  (result <5) )  
                    {
                      system.setQuality('chance', character.qualities.chance -1);
                        system.write( "<p class='transient'>ils ne savent que penser et envoient deux des"
                          +       " leurs aux nouvelles. Pendant qu'ils vont se renseigner, les autres vous "
                          +"  maintiennent sous la menace de leurs armes.<a href='page_164'>  Rendez-vous au 164</a></p>") ;
                      
                    }
                    else
                    {
                      system.setQuality('chance', character.qualities.chance +1);
                       system.write( "<p class='transient'>ils vous croient et reprennent le travail !"
                          +"  <a href='page_9'>  Rendez-vous au 9</a></p>") ;
                    }

                }
            }
        }
        ),
 page_196: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous fouillez la pièce. Malgré tous vos efforts, vous ne parvenez pas à \
 découvrir le mécanisme secret qui permet d'ouvrir la porte dans la \
 bibliothèque. Le vieil homme a dû la fermer de l'intérieur. En \
 revanche, vous trouvez 5 Pièces d'Or dans un tiroir de la table. Vous \
 prenez la décision de rebrousser chemin vers le sud en direction de la \
 bifurcation. <a href='page_280'> Rendez-vous au 280. </a>\
 </p>\""
  , //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.setQuality('or', character.qualities.or +5);
         
            }
        }),
 page_197: new undum.SimpleSituation(
 "<p class='transient'> \
 Au sommet des marches, le passage s'oriente brusquement à l'est. \
 Vous vous arrêtez quelques instants pour vous repérer et vous \
 entendez bientôt un grincement dans le roc, juste derrière vous. Vous \
 vous retournez à temps pour voir se baisser une lourde herse qui barre \
 soudain le passage par lequel vous êtes venu. Il ne vous reste plus qu'à \
 avancer, à présent ! Vous pouvez partir tout droit<a href='page_48'>(rendez-vous alors au 48) </a> \
 , ou essayer de découvrir un passage secret dissimulé dans le \
 mur<a href='page_295'>(rendez-vous au 295)</a> .\
 </p>\""),
 page_198: new undum.SimpleSituation(
 "<p class='transient'> \
 L'une des clés fonctionne, mais pas les deux autres. Tandis que vous \
 essayez malgré tout de les faire tourner dans les serrures, vous \
 entendez deux petits déclics suivis de deux bruits métalliques : deux \
 minuscules fléchettes viennent de jaillir du coffre, pointées dans votre \
 direction. Vous faites un bon en arrière pour essayer de les éviter, \
 mais votre tête heurte le mur derrière vous et vous vous effondrez sur \
 le sol, inconscient. Tentez votre Chance. Si vous êtes chanceux, les \
 fléchettes vous ratent et vous revenez à vous avec un fort mal de tête. \
 Vous perdez 2 points d'ENDURANCE. Si vous êtes malchanceux, les \
 fléchettes vous atteignent et vous ne vous réveillerez plus jamais. Si \
 vous avez eu de la chance, vous pouvez essayer d'autres clés \
 (rappelez-vous que l'une de ces clés est la bonne). Faites la somme des \
 chiffres des nouvelles clés et rendez-vous au numéro obtenu.\
 Si vous avez essayé toutes les combinaisons possibles avec les clés \
 qui sont en votre possession, il ne vous reste plus qu'à vous enfouir le \
 visage dans les mains et à pleurer, car vous étiez tout près de réussir \
 mais il va falloir recommencer à zéro. Retournez à l'entrée de la \
 montagne, et pensez cette fois à chercher des clés au cours de vos \
 pérégrinations !\
  <ul class='options'>\
                <li><a href='./lucktest'>Tentez votre chance ?</a></li>\
                </ul>\
                 </p>\"",
      {
          

            actions: {
                lucktest: function(character, system, action) {
                
                    
                    if( system.rnd.dice(2,6) < character.qualities.chance )  
                    {
                       system.clearLinks('./lucktest');
                      system.setQuality('chance', character.qualities.chance -1);
                      system.setQuality('endurance', character.qualities.endurance -2);

                      if(character.qualities.endurance  <= 0){
                          system.doLink('death');
                      }
                          system.write( "<p class='transient'><strong>Vous etes chanceux</strong>"
                            +" <a href='page_139'>(rendez-vous au 139)</a></p><br>") ; 
                        

                    }
                    else
                    {
                      system.clearLinks('./lucktest');
                      system.write( "<p class='transient'>adios "
                            +" </a></p>") ; 
                       system.doLink('death');
                    }

                }
            }, 
            exit:function(character, system, action) {
             $( "hr" ).remove();
            }
        }),
 page_199: new undum.SimpleSituation(
 "<p class='transient'> \
 Le passage s'élargit devant vous et vous pouvez voir une grande \
 caverne un peu plus loin. Vous l'examinez à la lumière de votre \
 lanterne et vous apercevez des armes de pierre posées sur le sol ; il y a \
 également un feu de bois qui couve au centre de la caverne. Vous ne \
 trouvez aucune issue, cependant. Il ne vous reste plus qu'à revenir sur \
 vos pas, mais, lorsque vous vous retournez, vous vous immobilisez \
 soudain en voyant deux HOMMES DES CAVERNES qui vous barrent \
 le passage vers la sortie. Ils grognent en vous observant avec \
 agressivité. Vous tirez votre épée et vous vous tenez prêt à combattre.\
 HABILETÉ ENDURANCE\
 Affrontez-les un par un. Si vous êtes vainqueur, quittez la caverne et \
 retournez à la bifurcation. \
  <ul class='options'>\
                <li><a href='./attack'>Attaquez les hommes des cavernes!</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
            console.log("the system is " + system); 
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_199'][0].monstre[undum.game.nombrederound]);    
                            
                        if (undum.game.bestiaire['page_199'][0].monstre[undum.game.nombrederound].endurance <=0)
                        {
                          
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_199'][0].monstre[undum.game.nombrederound].nom+"!!"
                                         + " " 
                                         +"   </p>" ); 
                           undum.game.nombrederound++; 
                               if(undum.game.nombrederound == 2)
                                {
                                     system.write( "<p class='transient'><a href='page_283'>Vous avez tué les 2 Hommes "
                                      +"rendez-vous au 283</a>  </p>") 
                                }
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            
                        }
                    

                   }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
           }
       }
),
 page_200: new undum.SimpleSituation(
 "<p class='transient'> \
 <a href='page_387'>Rendez-vous au 387. </a>\
 </p>\""),
 page_201: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous effondrez sur le sol. Vous retirez la fléchette et vous pansez \
 la blessure. Vous en ressentez quelque soulagement, mais vous restez \
 quand même affaibli. Vous décidez de prendre les choses calmement \
 et d'examiner le contenu du coffre. Mais avant cela, vous pouvez \
 prendre un Repas, si vous le désirez. Il y a 25 Pièces d'Or dans le \
 coffre ; quant\
 à la bouteille, d'après l'étiquette, elle contient une dose, et une seule, \
 de Potion d'Invisibilité. Le gant reste un mystère. Vous avez le droit \
 de ranger l'une de ces trois trouvailles dans votre sac à dos ; vous \
 quittez <a href='page_293'>ensuite la pièce pour vous rendre au 293.</a>\
 <ul class='options'>\
                <li><a href='./repas'>Voulez vous Prendre un Repas ?</a></li>\
                 <li><a href='./prendrepotion'>Voulez vous prendre la potion ?</a></li>\
                  <li><a href='./prendreor'>Voulez vous prendre l'or ?</a></li>\
                   <li><a href='./prendregant'>Voulez vous prendre le gant?</a></li>\
                </ul>\
                 </p>\"",
                  {
  actions: {
  repas:function(character, system, action){
                      if((character.qualities.provision>0))
                      {
                        system.setQuality('provision', character.qualities.provision -1);
                        system.setQuality('endurance', character.qualities.endurance +4);
                        system.clearLinks('./repas'); 
                        

                      }
        }, 
       prendrepotion:function(character, system, action){
          system.clearLinks('./prendrepotion');
          system.clearLinks('./prendreor'); 
          system.clearLinks('./prendregant'); 
          system.addCharacterInventory("potion invi");  
       }, 
       prendreor:function(character, system, action){
          system.clearLinks('./prendrepotion');
          system.clearLinks('./prendreor'); 
          system.clearLinks('./prendregant'); 
          system.setQuality('or', character.qualities.or +25);
       }, 
       prendregant:function(character, system, action){
          system.clearLinks('./prendrepotion');
          system.clearLinks('./prendreor'); 
          system.clearLinks('./prendregant'); 
          system.addCharacterInventory("gant myst"); 
       }
        }
      }
        ),
 page_202: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous mettez le casque sur votre tête. Il vous va bien. Mais soudain, \
 vous ressentez au front une douleur fulgurante. Vous êtes pris de \
 panique. Ce casque est ensorcelé, et il vous est impossible de l'enlever \
 en dépit de vos efforts désespérés. Vous perdez 1 point d'HABILETÉ. \
 Bientôt, la douleur disparaît, mais vous ne parvenez toujours pas à \
 ôter le casque de votre tête. Vous revenez sur vos pas en titubant et \
 vous essayez de reprendre vos esprits tandis que vous retournez à la \
 bifurcation.  <a href='page_87'>Rendez-vous au 87.</a>\
 </p>\"" , //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.setQuality('habilite', character.qualities.habilite -1);
            }
        }
        ),
 page_203: new undum.SimpleSituation(//clés hangar a bateau 
 "<p class='transient'> \
 Prenez 1 point de CHANCE pour avoir vaincu le Loup-Garou. Vous \
 pouvez vous reposer et manger si vous le désirez. Vous jetez un coup \
 d'ceil autour de la pièce, et vous ne trouvez rien de bien intéressant à \
 l'exception d'un trousseau de clés dont l'une porte la mention : « \
 Hangar à Bateaux. » Aucune de ces clés n'est numérotée. Vous pouvez \
 les prendre si vous le souhaitez. Il y a des portes à l'ouest et au sud. Si \
 vous ouvrez la porte à l'ouest, <a href='page_38'>rendez-vous au 38. </a>Si vous préférez \
 aller au sud,<a href='page_66'>rendez-vous au 66.</a> \
 </p>\"", //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.setQuality('chance', character.qualities.chance +1);
               system.addCharacterInventory("clés hangar"); 
            }
        }),
 page_204: new undum.SimpleSituation(
 "<p class='transient'> \
 Le vieil homme ne lève pas les yeux de la table, mais son petit animal \
 diabolique vous regarde d'un air soupçonneux et commence à émettre \
 des sons d'une voix frêle et aiguë. Le vieillard laisse échapper un \
 grognement et vous demande si vous êtes homme à jouer avec lui en \
 misant de l'argent. Si vous acceptez (et vous ne pouvez le faire que si \
 vous disposez au moins d'1 Pièce d'Or), <a href='page_130'>rendez-vous au 130.</a> Sinon, \
 vous avez le choix entre quitter la pièce <a href='page_280'>(et vous rendre au 280)</a>, ou \
 attaquer le vieil homme (<a href='page_377'>rendez-vous alors au 377)</a>.\
 </p>\""),
 page_205: new undum.SimpleSituation(
 "<p class='transient'> \
 <img  src='media/img/205_img.JPG' class='float_center'>\
 La porte s'ouvre et vous vous retrouvez dans une sorte de crypte \
 obscure. L'endroit est vaste. Un autel est dressé à l'une des extrémités \
 de la crypte, et des cercueils sont posés ça et là sur le sol. Il y a une \
 porte derrière vous dans le mur situé au sud, et une autre dans le mur \
 nord. Si vous désirez fouiller cette pièce, <a href='page_254'>rendez-vous au 254.</a> Si \
 l'endroit vous fait peur, vous pouvez le quitter par la porte ouest \
 <a href='page_380'>(rendez-vous au 380).</a>\
 </p>\""),
 page_206: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous entrez dans une grande pièce carrée. Au centre de la pièce, un \
 vieil homme aux cheveux gris est assis à un bureau. Des papiers et des \
 parchemins de toute sorte s'entassent devant lui, et il tient à la main \
 une longue plume d'oie. Il est entouré de livres, il y en a des milliers \
 alignés sur les étagères qui recouvrent les murs du sol au plafond. \
 Lorsque vous entrez, il lève les yeux sur vous. Va-t-il vous reconnaître \
 ? Si vous êtes déjà venu dans cette pièce, <a href='page_284'>rendez-vous au 284 </a>; sinon, \
 <a href='page_341'>allez au 341.</a>\
 </p>\""),
 page_207: new undum.SimpleSituation(
 "<p class='transient'> \
 En franchissant la porte, vous pénétrez dans une grande pièce. Le sol \
 est jonché de débris de bois. En dehors de la porte que vous venez de \
 passer, il en est une autre dans le mur nord. Dans un coin se trouve un \
 bureau de bois brut sur lequel est posée une boîte. Dans un autre coin, \
 apparemment endormie (à moins qu'elle ne soit morte), une créature \
 hideuse est étendue ; elle a la taille d'un homme, la peau couverte de \
 verrues, les cheveux en bataille et ses ongles sont de véritables griffes. \
 Allez-vous essayer d'atteindre la porte nord en marchant sur la pointe \
 des pieds (<a href='page_83'>rendez-vous alors au 83)</a>, ou vous approcher du bureau, \
 toujours sur la pointe des pieds, pour voir ce que contient la boîte \
 (<a href='page_154'> rendez-vous dans ce cas au 154) </a>?\
 </p>\""),
      page_208: new undum.SimpleSituation(
        "<p class='transient'> \
        Un peu plus loin dans le passage qui longe le mur ouest, vous trouvez\
        une autre porte. Vous collez votre oreille contre le panneau, mais vous\
        n'entendez rien. <a href='page_397'>Si vous voulez essayer d'ouvrir cette porte, rendezvous\
        au 397.</a> Si vous préférez poursuivre votre chemin, <a href='page_363'>rendez-vous au\
        363.</a>\
        </p>\""
      ),
       page_209: new undum.SimpleSituation(//chance 
 "<p class='transient'> \
 Les planches du pont laissé à l'abandon pendant des années sont \
 complètement pourries. L'une d'elles se casse net sous vos pas. Lancez \
 un dé. Si vous faites un 6 ... \
  Si vous faites entre 1 et 5, vous parvenez à reprendre votre \
 équilibre. \
  <ul class='options'>\
                <li><a href='./lucktest'>Tentez votre chance ?</a></li>\
                </ul>\
                 </p>\"",
      {
          

            actions: {
                lucktest: function(character, system, action) {
                   system.clearLinks('./lucktest'); 
                    var res = system.rnd.dice(1,6); 
                    if( res < 6 )  
                    {
                          system.write( "<p class='transient'>vous parvenez à reprendre votre "
                            +"  équilibre. <a href='page_47'>Rendez-vous au 47.</a> </p>") ; 
                          

                    }
                    else
                    {
                        system.write( "<p class='transient'> <a href='page_158'>vous tombez dans la rivière et vous allez au 158.</a> </p>") ;
                       
                    }

                }
            }
        }
        ),
 page_210: new undum.SimpleSituation(
 "<p class='transient'> \
 En suivant le passage, vous arrivez bientôt à une autre bifurcation qui \
 vous donne le choix entre continuer tout droit en direction de l'ouest \
 (<a href='page_225'>rendez-vous au 225</a>), ou prendre la direction du nord <a href='page_357'>(rendez-vous au 357)</a>.\
 </p>\""),
 page_211: new undum.SimpleSituation(//combat arme en argent
 "<p class='transient'> \
 Les Etres ne sont vulnérables qu'aux armes d'argent massif. Si l'arme \
 que vous avez en main n'est pas en' argent, lancez un nouvel assaut. \
 Rappelez-vous que chaque blessure qu'il vous inflige compte, mais \
 que vous ne pouvez pas le blesser ; de ce fait, sa force restera intacte \
 (HABILETÉ: 9, ENDURANCE: 6) à moins que vous n'avez choisi une \
 arme en argent. Si vous disposez d'une telle arme, vous feriez bien de \
 vous en servir à présent en vous<a href='page_173'> rendant au 173 </a>. Si vous n'en avez pas, \
 ou si vous estimez que vous avez suffisamment pâti du combat, il ne \
 vous reste plus qu'à vous enfuir par la porte nord .\
  Rappelez-vous que, dans ce cas, il vous inflige une dernière \
 blessure tandis que vous vous échappez.\
 <ul class='options'>\
                <li><a href='./fuite'>Voulez vous enfuir ?</a></li>\
                </ul>\
                 </p>\"",
                  {
  actions: {
  fuite:function(character, system, action){
                    system.setQuality('endurance', character.qualities.endurance -2);
                    system.clearLinks('./fuite'); 
                    if( character.qualities.endurance <= 0)
                    {
                        system.doLink('death');
                    }
                    else
                    {
                      system.write( "<p class='transient'> <a href='page_360'>(rendez-vous au 360)</a> </p>") ;
                    }
        }
        }
        }
        ),
 page_212: new undum.SimpleSituation(
 "<p class='transient'> \
 Le parchemin est très abîmé et presque illisible. Il s'agit sans doute \
 d'une carte au-dessus de laquelle on peut lire les mots : « Le \
 Labyrinthe de Zagor. » Les seuls éléments que vous puissiez tirer de \
 l'examen du document, c'est qu'il se trouve au nord une pièce désignée \
 par les lettres « ...GER », et une autre au sud à côté de laquelle \
 figurent les lettres : « SM...P.. .LE ».\
 Vous pliez la carte et la glissez dans votre poche.\
 Si vous n'avez pas encore essayé de boire le liquide contenu dans la \
 bouteille, vous pouvez le faire, si tel est votre désir<a href='page_369'>  ; rendez-vous dans \
 ce cas au 369</a>. Dans le cas contraire, vous pouvez poursuivre votre \
 chemin en direction du nord<a href='page_120'>(rendez-vous au 120)</a> .\
 </p>\""),
 page_213: new undum.SimpleSituation(
 "<p class='transient'> \
 <img  src='media/img/62_img.JPG' class='float_right'>\
 La porte est fermée à clé. Vous pouvez essayer de l'enfoncer en jetant \
 deux dés. Si le chiffre obtenu est égal ou inférieur à votre total \
 d'HABILETÉ, la porte s'ouvre sous les coups et . Si le \
 chiffre donné par les dés est supérieur à vos points d'HABILETÉ, la \
 porte reste fermée, vous perdez 1 point d'ENDURANCE pour vous \
 être fait mal à l'épaule, et il vous faut poursuivre votre chemin le long \
 du passage \
  <ul class='options'>\
                <li><a href='./lucktest'>Enfoncer la porte</a></li>\
                </ul>\
                 </p>\"",
      {
          

            actions: {
                lucktest: function(character, system, action) {
                    system.clearLinks('./lucktest'); 
                    if( system.rnd.dice(2,6) <= character.qualities.habilite )  
                    {
                          system.write( "<p class='transient'>la porte s'ouvre sous les coups et "
                            +"<a href='page_36'>vous allez au 36 </a></p><br>") ; 
                          

                    }
                    else
                    {
                       system.setQuality('endurance', character.qualities.endurance -1);
                        system.write( "<p class='transient'>vous  êtes fait mal à l'épaule, et il vous"
                        +" faut poursuivre votre chemin le long  du passage "
                        +" <a href='page_314'>en vous rendant au 314.</a></p>") ;
                        
                    }

                }
            }
        }),
 page_214: new undum.SimpleSituation(
 "<p class='transient'> \
 Face à vous, c'est-à-dire au nord, il y a un pan de roc lisse et luisant \
 d'humidité. Des mousses de diverses couleurs poussent à sa surface. Il \
 règne un silence inquiétant ponctué seulement par le clapotis de la \
 rivière qui coule derrière vous. Vous avez trois possibilités :\
 Il existe un passage orienté au nord-ouest ; si vous le prenez <a href='page_271'>Rendez-\
 vous au 271 </a>\
 Au milieu de la paroi rocheuse, face à vous, se trouve une porte de \
 bois ; si vous ouvrez la porte<a href='page_104'> Rendez-vous au 104 </a>\
 Un autre passage suit le cours de la rivière en direction de l'est. Si \
 vous voulez l'emprunter<a href='page_99'> Rendez-vous au 99</a>\
 </p>\""),
 page_215: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous fouillez dans votre sac à dos à la recherche du bâton, mais vous \
 vous apercevez qu'il s'est cassé en deux ! Il s'est brisé pendant vos \
 pérégrinations. Que décidez-vous ?\
 Vous tirez votre épée et vous partez à l'attaque ? <a href='page_142'>Rendez-vous au 142 </a>\
 Vous essayez de trouver autre chose dans votre sac à dos ? <a href='page_105'>Rendez-\
 vous au 105</a>\
 </p>\""),
 page_216: new undum.SimpleSituation(//situation init 
 "<p class='transient'> \
 L'eau est rafraîchissante. A mesure que vous en buvez, vous sentez un \
 influx bienfaisant se répandre dans tout votre corps, comme si vous \
 vous abreuviez à une fontaine de jouvence. Prenez 4 points \
 d'ENDURANCE et rétablissez vos points d'HABILITÉ et de CHANCE \
 à leur niveau initial. Ce qui est pour vous une fontaine de vie devient \
 sans doute une fontaine de mort pour les Lutins malfaisants. Vous \
 pouvez prendre un Repas en cet endroit. Lorsque vous serez reposé, \
 sortez par la porte nord.<a href='page_384'> Rendez-vous au 384. </a>\
 <ul class='options'>\
                <li><a href='./repas'>Voulez vous Prendre un Repas ?</a></li>\
                </ul>\
                 </p>\"", //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.setQuality('endurance', character.qualities.endurance +4);
              
               if (character.qualities.habilite < undum.game.inithabilite)
               {
               system.setQuality('habilite', undum.game.inithabilite);
              }

              if (character.qualities.chance < undum.game.initchance)
               {
               system.setQuality('chance', undum.game.initchance);
              }

             
   
            }, 
            exit: function(character, system, to) {
               $( "hr" ).remove();
            }, 
             actions: {
              repas:function(character, system, action){
                      if((character.qualities.provision>0))
                      {
                        system.setQuality('provision', character.qualities.provision -1);
                        system.setQuality('endurance', character.qualities.endurance +4);
                        //undum.game.nombretentative++; 
                        system.clearLinks('./repas'); 
                        

                      }
        }
        }
        }
        ),
 page_217: new undum.SimpleSituation(
 "<p class='transient'> \
 L'épieu manque de peu la tête du vampire. En observant sa trajectoire, \
 votre regard croise à nouveau celui de la créature. Une fois encore, le \
 Vampire vous ordonne d'avancer, et une fois encore, votre volonté est \
 anéantie,<a href='page_118'> Rendez-vous au 118.</a>\
 </p>\""),
 page_218: new undum.SimpleSituation(
 "<p class='transient'> \
 <img  src='media/img/218_img.JPG' class='float_center'>\
 Vous vous trouvez sur la berge sud d'une rivière souterraine et vous \
 contemplez ses obscures profondeurs. Il semble qu'il y ait quatre \
 moyens de la traverser. A votre gauche, une cloche rouillée porte une \
 inscription : « Service du bac, tarif 2 Pièces d'Or, sonnez S.V.P. » \
 Juste devant vous, un petit radeau muni d'une longue perche est \
 amarré à la berge ; vous pourriez l'utiliser pour traverser. A droite, un \
 vieux pont branlant enjambe la rivière. Et si vous n'avez confiance ni \
 dans le bac, ni dans le radeau, ni dans le pont, vous avez la possibilité \
 de nager jusqu'à l'autre rive. Quel moyen allez-vous choisir ?\
 Sonnerez-vous la cloche ?  <a href='page_3'>Rendez-vous au 3</a>\
 Utiliserez-vous le radeau ? <a href='page_386'> Rendez-vous au 386</a>\
 Vous risquerez-vous sur le pont ?<a href='page_209'> Rendez-vous au 209</a>\
 Préférez-vous nager ? <a href='page_316'> Rendez-vous au 316</a>\
 </p>\""),
 page_219: new undum.SimpleSituation(
 "<p class='transient'> \
 <a href='page_182'>Rendez-vous au 182.</a>\
 </p>\""),
 page_220: new undum.SimpleSituation(
 "<p class='transient'> \
 Vos plaisanteries l'exaspèrent. Il agite la main, marmonne quelques \
 étranges syllabes, puis pointe l'index dans votre direction. Aussitôt, \
 vous avez la tête qui tourne et vous tombez évanoui. Lorsque vous \
 reprenez conscience, vous êtes étendu dans un passage qui se termine \
 en cul-de-sac. <a href='page_171'>Rendez-vous au 171. </a>\
 </p>\""),
 page_221: new undum.SimpleSituation(//cas special
 "<p class='transient'> \
 Quels sont ces mystérieux objets que vous avez rassemblés ? Qu'avez-\
 vous inscrit en premier sur votre Liste d'Équipement ?\
 L'armure ? <a href='page_72'>Rendez-vous au 72 </a>\
 Le bouclier 1  <a href='page_132'>Rendez-vous au 132</a>\
 L'épée ? <a href='page_27'>Rendez-vous au 27</a>\
 L'or ? <a href='page_110'>Rendez-vous au 110</a>\
 Le crucifix ?  <a href='page_170'>Rendez-vous au 170</a>\
 </p>\""),
 page_222: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous remontez un long couloir, puis vous suivez un tournant en \
 épingle à cheveux situé à son sommet et finalement vous parcourez un \
 passage est-ouest, à l'est d'un croisement. <a href='page_85'>Rendez-vous au 85 </a>.\
 </p>\""),
 page_223: new undum.SimpleSituation(
 "<p class='transient'> \
 La porte est solidement fermée. Vous pouvez essayer de la forcer \
 (<a href='page_53'>rendez-vous au 53)</a>, ou continuer le long du couloir <a href='page_300'> (rendez-vous au 300)</a>.\
 </p>\""),
 page_224: new undum.SimpleSituation(
 "<p class='transient'> \
 Tandis que vous observez les mouvements de la créature, vous croisez \
 soudain son regard perçant. Vous êtes magnétisé et votre volonté \
 disparaît; la créature vous ordonne alors de vous avancer vers elle. \
 <a href='page_118'>Rendez-vous au 118.</a>\
 </p>\""),
 page_225: new undum.SimpleSituation(
 "<p class='transient'> \
 Le passage continue vers l'ouest, puis tourne droit au nord. Un peu \
 plus loin, vous arrivez à une bifurcation où un couloir étroit reprend la \
 direction de l'ouest. Allez-vous poursuivre vers le nord  <a href='page_77'>(et vous rendre \
 au 77),</a> ou choisir d'aller à l'ouest <a href='page_63'>(et vous rendre au 63)</a> ?\
 </p>\""),
 page_226: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous parcourez une courte distance vers le sud puis vous rencontrez \
 un croisement.  <a href='page_267'>Rendez-vous au 267. </a>\
 </p>\""),
 page_227: new undum.SimpleSituation(
 "<p class='transient'> \
 <img  src='media/img/227_img.JPG' class='float_center'>\
 La porte s'ouvre et vous vous retrouvez dans une petite pièce enfumée. \
 Quatre petits hommes d'un mètre de hauteur chacun, mais \
 apparemment d'âge mûr, sont assis autour d'une table de bois ; ils ont \
 la peau tannée et de longues barbes en broussaille. Ils jouent aux \
 cartes en échangeant des rires, des jurons ou des plaisanteries. Chacun \
 d'eux est appuyé contre le dossier d'une chaise minuscule et tire sur \
 une longue pipe au fourneau d'argile. Sur la table, il y a un tas de \
 pièces de cuivre et quatre chopes de bière. A votre entrée, ils cessent \
 de rire et de jouer. Ils sont sur leur garde, mais n'ont pas l'air très \
 dangereux. L'un d'eux se lève et formule quelques commentaires \
 concernant votre manque d'éducation, car vous n'avez pas frappé avant \
 d'entrer. Les trois autres approuvent d'un hochement de tête. Que \
 faites-vous ?\
 Vous bavardez avec eux en essayant de vous en faire des amis ? \
 <a href='page_131'> Rendez-vous au 131</a>\
 Vous vous excusez, vous les saluez et vous quittez la pièce ?<a href='page_291'> Rendez-\
 vous au 291</a>\
 Vous vous proposez comme partenaire pour jouer avec eux ?<a href='page_100'> Rendez-\
 vous au 100</a>\
 Vous tirez votre épée et vous attaquez leur chef, celui qui s'est levé ? \
<a href='page_20'> Rendez-vous au 20</a>\
 Si vous êtes déjà venu dans cette pièce, vous la trouvez vide. Rendez-\
<a href='page_291'> vous alors au 291. </a>\
 </p>\""),
 page_228: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous ne trouvez pas de passage secret. Vous faites attention de ne pas \
 être trop bruyant, pour ne pas attirer quelque créature errant dans les \
 parages. Vous restez un instant immobile à écouter, mais vous \
 n'entendez rien. Vous retournez alors au croisement. <a href='page_85'>Rendez-vous au 85.</a>\
 </p>\""),
 page_229: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes de retour à la bifurcation, et cette fois, vous prenez à droite. \
 <a href='page_69'>Rendez-vous au 69.</a>\
 </p>\""),
 page_230: new undum.SimpleSituation(
 "<p class='transient'> \
 La créature qui vous fait face à présent est une femme aux chairs à \
 moitié décomposées. Ses yeux vifs vous observent en remuant en tous \
 sens. Sa langue très longue jaillit par instants de sa bouche avec un \
 sifflement. Elle a les dents et les ongles pointus, et ne semble \
 nullement s'effrayer de votre arme. C'est une GOULE!\
 GOULE HABILETÉ: 8 ENDURANCE: 7\
 Elle aura la faculté de vous paralyser si jamais elle parvient à vous \
 infliger quatre blessures distinctes, lors du combat ; aussi, prenez \
 garde ! \
  <ul class='options'>\
                <li><a href='./attack'>Attaquez la Goule</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
              //sert a compter le nombre de coup reçus 
                          var init =  character.qualities.endurance; 
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_230'][0].monstre[undum.game.nombrederound]);    
                           
                        if (undum.game.bestiaire['page_230'][0].monstre[undum.game.nombrederound].endurance <=0)
                        {
                          
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_230'][0].monstre[undum.game.nombrederound].nom+"!!"
                                         + " vous êtes vainqueur, <a href='page_390'>rendez-vous au 390</a>" 
                                         +"   </p>" ); 
                       
                        }
                        if ((result == 'death') || (undum.game.nombredecoup == 4) )
                        {
                        system.doLink('page_64');

                        } 

                        if (result == 'noDeath')
                        {
                            if(init !=  character.qualities.endurance)
                            {
                              undum.game.nombredecoup++; 
                            }
                        }
                    

                   }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
            undum.game.nombredecoup = 0; 
            $( "hr" ).remove();
           }
       }
),
 page_231: new undum.SimpleSituation(
 "<p class='transient'> \
 <a href='page_182'>Rendez-vous au 182.</a>\
 </p>\""),
 page_232: new undum.SimpleSituation(
 "<p class='transient'> \
 Presque épuisé par votre difficile combat contre l'Araignée, vous vous \
 mettez à taillader les bottes avec votre épée pour vous en libérer. Elles \
 se déchirent enfin et vous pouvez à présent quitter la caverne et \
 retourner au croisement en reprenant le passage par lequel vous êtes \
 venu. <a href='page_375'> Rendez-vous au 375. </a>\
 </p>\""),
 page_233: new undum.SimpleSituation(
 "<p class='transient'> \
 <a href='page_198'>Rendez-vous au 198.</a>\
 </p>\""),
 page_234: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous ne trouvez aucun passage secret. En revanche, votre manège a \
 attiré l'attention d'une créature sinistre...<a href='page_1613'> Rendez-vous au 161 </a>, et vous \
 découvrirez ce qui vient d'apparaître devant vous. Vous aurez à \
 combattre ce monstre.\
 </p>\""),
 page_235: new undum.SimpleSituation(
 "<p class='transient'> \
 Le passage que vous suivez mène vers l'ouest puis tourne brusquement \
 au nord ; quelques mètres plus loin, vous trouvez un autre couloir qui \
 reprend la direction de l'ouest. Vous pouvez choisir de prendre ce \
 passage orienté à l'ouest (<a href='page_176'>rendez-vous au 176)</a>, ou de continuer tout \
 droit vers le nord. Dans ce cas <a href='page_5'>Rendez-vous au 5</a> .\
 </p>\""),
 page_236: new undum.SimpleSituation(//combat 
 "<p class='transient'> \
 Le combat s'engage. Les squelettes vous attaquent un par un :\
  <ul class='options'>\
                <li><a href='./attack'>Attaquez les squelettes!</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
            console.log("the system is " + system); 
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_236'][0].monstre[undum.game.nombrederound]);    
                            
                        if (undum.game.bestiaire['page_236'][0].monstre[undum.game.nombrederound].endurance <=0)
                        {
                          
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_236'][0].monstre[undum.game.nombrederound].nom+"!!"
                                         + " " 
                                         +"   </p>" ); 
                           undum.game.nombrederound++; 
                               if(undum.game.nombrederound == 3)
                                {
                                     system.write( "<p class='transient'><a href='page_395'>Vous avez tué les 3 squelettes rendez-vous au 395</a>  </p>") 
                                }
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            
                        }
                    

                   }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
             $( "hr" ).remove();
           }
       }
),
 page_237: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous courez le long du passage et vous arrivez de nouveau à la \
 bifurcation. Cette fois, prenez la direction du nord,<a href='page_285'> et rendez-vous au 285.</a>\
 </p>\""),
 page_238: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes à la croisée de trois chemins.\
 Pour aller à l'est <a href='page_70'>Rendez-vous au 70 </a>\
 Pour aller à l'ouest <a href='page_180'>Rendez-vous au 180</a>\
 Pour aller au nord<a href='page_329'> Rendez-vous au 329 </a>\
 </p>\""),
 page_239: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous repensez aux paroles du vieil homme : « Vous pourriez en avoir \
 besoin plus tôt que vous ne croyez... », vous a-t-il dit. Vous cherchez à \
 tâtons dans votre sac à dos et vous en retirez la chandelle. Elle \
 s'allume aussitôt d'elle-même. Le hurlement s'arrête et la pièce \
 apparaît baignée d'une lumière bleue que diffuse la chandelle. Sur les \
 murs, les silhouettes peintes se mettent à bouger ! Elles semblent \
 pousser des cris silencieux, comme si elles étaient prisonnières d'un \
 enfer en deux dimensions. Dans le mur opposé, une autre porte est \
 aménagée. Vous pouvez la franchir (<a href='page_88'>rendez-vous au 88)</a>, ou rester dans \
 la pièce pour poursuivre votre examen des lieux (<a href='page_149'>rendez-vous alors au 149).</a>\
  Prenez un point de CHANCE pour vous récompenser de votre \
 prévoyance.\
 </p>\""
  , //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.setQuality('chance', character.qualities.chance +1);
         
            }
        }),
 page_240: new undum.SimpleSituation(
 "<p class='transient'> \
 <img  src='media/img/240_img.JPG' class='float_center'>\
 La boîte est légère, mais quelque chose fait du bruit à l'intérieur. Vous \
 soulevez le couvercle et un petit SERPENT jaillissant de la boîte vous \
 mord au poignet. Il vous faut combattre ce Serpent.\
 SERPENT HABILETÉ: 5 ENDURANCE: 2\
  <ul class='options'>\
                <li><a href='./attack'>Attaquez le Serpent</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_240'][0].monstre[0]);    
                            
                        if (undum.game.bestiaire['page_240'][0].monstre[0].endurance <=0)
                        {
                          system.clearLinks('./attack'); 
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_240'][0].monstre[0].nom+"!!"
                                         + " <a href='page_145'>Vous avez tué le serpent</a>" 
                                         +"   </p>" ); 
                        
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            
                        }
                    

                   }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
           }
       }
),
 page_241: new undum.SimpleSituation(
 "<p class='transient'> \
 <img  src='media/img/101_img.JPG' class='float_right'>\
 Tandis que vous vous lancez à l'attaque du portrait avec votre épieu, \
 vous ressentez soudain une douleur, comme si on vous tordait le \
 poignet. Quelque force invisible vous oblige ainsi à laisser tomber \
 votre arme. Vous décidez de prendre la fuite, et vous sortez par la \
 porte nord. <a href='page_90'> Rendez-vous au 90 </a>, mais le pouvoir du Sorcier vous fait \
 perdre un autre point d'HABILETÉ.\
 </p>\"" , //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.setQuality('habilite', character.qualities.habilite -1);
            }
        }
        ),
 page_242: new undum.SimpleSituation(
 "<p class='transient'> \
 La porte s'ouvre sur une petite pièce faiblement éclairée. Les murs \
 sont tendus de draperies ouvragées, dentelées d'or et d'argent. Une \
 flamme solitaire brûle dans un coin projetant sa lumière sur une table \
 basse au milieu de la pièce. Sur cette table, un grand coffre est posé. \
 Vous vous avancez pour examiner le coffre et, à ce moment, un bruit \
 mystérieux s'élève et vous environne sans que vous puissiez \
 déterminer d'où il vient. C'est comme le roulement du tonnerre dans \
 les nuages lorsque l'orage s'apprête à éclater.\
 Vous vous approchez du coffre et vous constatez qu'il est fermé par \
 trois serrures. Le bruit s'intensifie à mesure de votre avance. Qu'allez-\
 vous faire ?\
 Frapper le coffre de votre épée pour tenter d'en fendre le bois et \
 l'ouvrir ainsi ? <a href='page_379'> Rendez-vous au 379 </a>\
 Fouiller dans votre sac à dos pour essayer d'y trouver des clés qui \
 ouvriraient les serrures ? <a href='page_139'> Rendez-vous au 139</a>\
 </p>\""),
 page_243: new undum.SimpleSituation(//malus
 "<p class='transient'> \
 A votre grande horreur, vous réalisez que ce prétendu levier était un \
 piège ! Bien qu'il ait l'apparence d'une poignée, il s'agit en fait d'une \
 lame d'épée recouverte de cire, et vous vous êtes gravement coupé à la \
 main en la saisissant. Est-ce la main droite ou la main gauche ?\
 Lancez un dé. Si le chiffre obtenu est impair, c'est la main avec \
 laquelle vous tenez votre épée qui est blessée, et votre adresse à \
 combattre s'en trouve fortement diminuée. Vous perdez 3 points \
 d'HABILETÉ et 1 point d'ENDURANCE. Si vous avez obtenu un \
 chiffre pair, c'est votre autre main qui est atteinte et, de ce fait, la \
 blessure n'aura pas de trop fâcheuses conséquences. Vous perdez \
 cependant 1 point d'HABILETÉ et 2 d'ENDURANCE. Si maintenant \
 vous voulez essayer de tirer le levier de droite   \
 Vous n'avez d'ailleurs pas d'autre choix, car seul ce levier peut vous \
 permettre d'aller plus loin - et faites attention : désormais, il faudra \
 penser à vous servir de votre main valide !\
  <ul class='options'>\
                <li><a href='./lucktest'>Tentez votre chance ... </a></li>\
                </ul>\
                 </p>\"",
      {
          

            actions: {
                lucktest: function(character, system, action) {
                  system.clearLinks('./lucktest'); 
                  var res = system.rnd.dice(1,6); 
                    
                    if( (res % 2) == 0  )  
                    {
                      system.setQuality('endurance', character.qualities.endurance -2);
                        system.setQuality('habilite', character.qualities.habilite -1);
                          system.write( "<p class='transient'>le resultat est paire"
                            +" <a href='page_128'>rendez-vous au 128.</a></p>") ; 
                        

                    }
                    else
                    {
                        system.setQuality('endurance', character.qualities.endurance -1);
                        system.setQuality('habilite', character.qualities.habilite -3);
                        system.write( "<p class='transient'>pas de chance le resultat"
                        +" <a href='page_128'>rendez-vous au 128.</a> est impaire </p>") ;
                        
                    }

                }
            }, 
            exit:function(character, system, action) {
              $( "hr" ).remove();
            }
        }
        ),
 page_244: new undum.SimpleSituation(
 "<p class='transient'> \
 Le passage est orienté vers le nord, et vous entendez à quelque \
 distance le clapotis d'une rivière souterraine. L'air se rafraîchit. Vous \
 parvenez bientôt sur la berge de la rivière. L'espace s'est agrandi, \
 mais, à votre grand désespoir, il n'y a de toute évidence aucun moyen \
 d'atteindre la rive opposée. La rivière coule en direction de l'est, et \
 s'enfonce au sein d'une caverne qui s'ouvre dans le roc. Vous pouvez \
 vous asseoir là, vous reposer et prendre un Repas<a href='page_143'>(rendez-vous au 143)</a> \
 , ou continuer par le seul chemin qui semble possible, c'est-à-dire \
 sauter dans la rivière et suivre le courant à la nage<a href='page_399'>(rendez-vous au 399)</a> .\
 </p>\""),
 page_245: new undum.SimpleSituation(
 "<p class='transient'> \
 <a href='page_198'>Rendez-vous au 198.</a>\
 </p>\""),
 page_246: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous mettez en route vers le sud par un passage pavé. Le passage \
 tourne à l'ouest, puis au sud, puis à l'ouest encore, et vous mène enfin \
 à la croisée de trois chemins.\
 Pour aller au nord <a href='page_329'>Rendez-vous au 329 </a>\
 Pour aller à l'ouest <a href='page_180'>Rendez-vous au 180 </a>\
 Pour aller à nouveau <a href='page_70'>vers l'est  Rendez-vous au 70</a>\
 </p>\""),
 page_247: new undum.SimpleSituation(
 "<p class='transient'> \
 Il est quelque peu surpris par votre assaut, mais il se contente de lever \
 la main. Aussitôt vous vous heurtez violemment à... rien du tout \
 apparemment. Vous vous retrouvez assis par terre à vous frotter le \
 nez, et vous vous sentez tout estourbi.\
 Vous perdez 2 points d'ENDURANCE. Le vieil homme pouffe de rire \
 et dit : « Pauvre imbécile ; pensiez-vous que je restais sans défense en \
 cet antre du mal ? Vous allez regretter votre folie. » Vous vous relevez \
 et vous retournez dans le couloir en prenant la direction du nord. \
 \
 </p>\"" , //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.setQuality('endurance', character.qualities.endurance -2);
              if(character.qualities.endurance <= 0){
                 system.doLink( 'death' );
              }
              else{
                  system.write( "<p class='transient'><a href='page_292'>Rendez-vous au 292.</a></p>" );
              }
            }
        }
        ),
        page_248: new undum.SimpleSituation(
                "<p class='transient'> \
                <img src='media/img/lutin_71.JPG' class='float_right'>\
                La créature qui vient de s'éveiller est un FARFADET ! Il se met\
                péniblement debout, et attrape une corde qui doit probablement\
                actionner une sonnette d'alarme. Il vous faut l'attaquer vite.\
                FARFADET HABILETÉ: 6 ENDURANCE: 5 \
                Si vous êtes vainqueur, vous pouvez continuer votre chemin le long du\
                passage, et vous rendre au 301. \
                <ul class='options'>\
                <li><a href='./attack'>Attack!</a></li>\
                </ul>\
                 </p>\"", 
                   {
            actions: {
                attack: function( character, system, action ) {
                       if( system.rnd.dice( 2, 6, character.qualities.habilite ) > system.rnd.dice( 2, 6, undum.game.enemies.farfadet.habilite ) ) {
                    // hit! reduce the opponent's hit points by rolling a 6-sided die and adding our strength
                            //var damage = system.rnd.dice( 1, 6, character.qualities.strength );
                            
                            // the -= operator reduces the variable's value

                            undum.game.enemies.farfadet.endurance -= 2; 

                            system.write( "<p class='transient'>Vous avez toucher le farfadet </p>" );

                            system.write( "<p class='transient'>il reste "+  undum.game.enemies.farfadet.endurance+ " point de vie au farfadet  </p>" );

                             // check if the opponent is alive and move on to the next enemy if not
                            if( undum.game.enemies.farfadet.endurance <= 0 ) {
                                system.write( "<p class='transient'>Vous avez tué le farfadet!!</p>" );
                                system.doLink( 'page_301' );
                                return; // stop the rest of the function from executing
                            }
                        }
                        else if ( system.rnd.dice( 2, 6, character.qualities.habilite ) < system.rnd.dice( 2, 6, undum.game.enemies.farfadet.habilite ) )
                        {
                             //var damage = system.rnd.dice( 1, 6, character.qualities.strength );
                            
                            // the -= operator reduces the variable's value
                           
                            system.setQuality('endurance', character.qualities.endurance -2);
                              system.animateQuality( 'endurance', character.qualities.endurance -2 );
                            system.write( "<p class='transient'>Le farfadet vous touche !!</p>" );
                               if( character.qualities.endurance <= 0 ) {
                                system.write( "<p class='transient'>Vous tomber au sol!</p>" );
                                system.doLink( 'death' );
                            }

                        }
                  
                }
            }
        } // fin de la situation 
        ),  
      page_249: new undum.SimpleSituation(
       "<p class='transient'> \
       Le chien bondit sur vous dès que vous avez bougé. Ses horribles dents \
       noires se précipitent sur votre gorge !\
       Lorsqu'il ne se trouve plus qu'a deux mètres de vous, une flamme \
       jaillit de sa gueule, et elle vous aurait atteint en plein visage si vous ne \
       vous étiez baissé juste à temps ! Il vous faut à présent combattre le \
       chien.\
       CHIEN HABILETÉ: 7 ENDURANCE: 6\
       À sa force d'attaque normale, il faut ajouter à chaque assaut l'avantage \
       que lui donne son souffle de feu. Pour cela, lancez un dé. Si vous \
       faites 1 ou 2, la flamme vous atteint ; et vous perdez un point \
       d'ENDURANCE. Rappelez-vous qu'il faut lancer le dé à chaque assaut \
       et que ces points éventuels de pénalité s'ajoutent à ceux que vous \
       perdez selon les règles habituelles, au cours du combat. Si vous faites \
       entre 3 et 6, vous évitez le jet de feu.\
       <ul class='options'>\
                <li><a href='./attack'>Attaquez le Chien !</a></li>\
                <li><a href='./fuite'>Fuir !!!</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
            
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_249'][0].monstre[0]);    
                        
                        if(system.rnd.dice( 1, 6) <= 2)  {
                          system.setQuality('endurance', character.qualities.endurance -1);
                           system.write( "<p class='transient'> "
                                         + "la flamme vous atteint et vous perdez un point d'ENDURANCE. " 
                                         +"   </p>" ); 
                           if(character.qualities.endurance <= 0){
                            system.doLink('death');
                           }
                        }

                        if (undum.game.bestiaire['page_249'][0].monstre[0].endurance <=0)
                        {
                           system.clearLinks('./fuite'); 
                            system.clearLinks('./attack'); 
                          system.setQuality('chance', character.qualities.endurance +1);
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_249'][0].monstre[0].nom+"!!"
                                         + "<a href='page_304'>rendez-vous au 304</a> " 
                                         +"   </p>" ); 
                         
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            
                        }
                    

                   },
                      fuite: function( character, system, action) {
                          system.write( "<p class='transient'>Vous prenez la fuite par la porte sud "
                                         + "<a href='page_66'>Rendez-vous au 66</a> " 
                                         +"   </p>" ); 

                      }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
           }
       }),
 page_250: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous trouvez dans un court passage qui se termine en cul-de-sac \
 un peu plus loin. Vous examinez soigneusement la paroi rocheuse, \
 mais il ne semble pas qu'il y ait d'issue. Vous revenez donc au \
 croisement et, cette fois, vous continuez tout droit en direction du \
 nord. <a href='page_366'>Rendez-vous au 366.</a>\
 </p>\""),
 page_251: new undum.SimpleSituation(
 "<p class='transient'> \
 <img  src='media/img/251_img.JPG' class='float_right'>\
 Le passage tourne brusquement au nord et vous entendez un bruit \
 d'eau qui coule à quelque distance. Vous arrivez bientôt sur la berge \
 sud d'une rivière souterraine. Debout sur les cailloux de la rive, vous \
 percevez des battements d'ailes et vous levez les yeux : trois \
 CHAUVES-SOURIS GÉANTES fondent sur vous pour vous attaquer \
 en piqué. Combattez-les toutes les trois à la fois, comme si elles \
 n'étaient qu'une seule et même créature.\
 CHAUVES-SOURIS\
 GÉANTES HABILETÉ: 6 ENDURANCE: 6\
 Vous pouvez aussi \
 prendre la fuite en sautant dans la rivière  .\
<ul class='options'>\
                <li><a href='./attack'>Attaquez les CHAUVES-SOURIS!</a></li>\
                <li><a href='./fuite'>Fuir comme un lache!</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
          
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_251'][0].monstre[0]);    
                            
                        if (undum.game.bestiaire['page_251'][0].monstre[0].endurance <=0)
                        {
                          
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_251'][0].monstre[0].nom+"!!"
                                         + "<a href='page_344'>rendez-vous au 344.</a> " 
                                         +"   </p>" ); 
                          
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            
                        }
                    

                   }, 
                   fuite: function( character, system, action) {
                     system.clearLinks('./fuite'); 
                     system.clearLinks('./attack'); 
                     system.setQuality('endurance', character.qualities.endurance -2);
                     if ( character.qualities.endurance<= 0) {
                       system.doLink('death');

                     }
                     else{
                      system.write( "<p class='transient'> Vous perdez 2 Pe <a href='page_399'>(rendez-vous au 399)</a> "
                                         +"   </p>" ); 
                    }

                   }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
           }
       }),
 page_252: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous tirez le levier, et le mur de roc en face de vous, ainsi que la \
 partie du sol sur laquelle vous vous tenez, se mettent à bouger avec un \
 grincement sonore. Vous pivotez sur vous-même comme si vous étiez \
 sur une immense table tournante, et vous vous retrouvez de l'autre \
 côté de la paroi rocheuse dans un passage nord-sud. Irez-vous au nord \
 (<a href='page_312'>-vous dans ce cas au 312)</a> ou au sud <a href='page_226'>(rendez-vous au 226)</a> ?\
 </p>\""),
 page_253: new undum.SimpleSituation(
 "<p class='transient'> \
 Le passage aboutit à une autre porte de bois. Cette fois, il s'agit d'une \
 petite porte munie d'une poignée en os sculpté. Vous écoutez \
 attentivement, mais vous n'entendez aucun bruit venant de l'intérieur. \
 Vous essayez de tourner la poignée, et la porte s'ouvre sur une pièce \
 en forme de poire dont le sol est constitué de pierres brutes sur \
 lesquelles il n'est pas facile de marcher. Des pierres et de la poussière \
 forment un\
 tas de gravats dans un coin, mais il y a également deux morceaux de \
 bois de forme étrange et une corde.\
 Dans le mur nord, une porte vous permet de poursuivre votre chemin. \
 Qu'allez-vous faire 1 bruit d'eau qui s'écoule lentement, goutte à \
 goutte. L'autel est finement sculpté et incrusté de pierres précieuses. \
 Des draperies magnifiquement tissées, bien qu'usées jusqu'à la corde \
 par endroits, couvrent les murs. Il y a exactement trois cercueils dans \
 la pièce. Vous faites soudain volte-face en percevant un grincement, et \
 la lumière de votre lanterne tombe sur le plus grand des cercueils. Il \
 est en train de s'ouvrir !\
 Examiner les morceaux de bois ? <a href='page_328'> Rendez-vous au 328 </a>\
 Examiner la corde ?  <a href='page_125'>Rendez-vous au 125 </a>\
 Franchir la porte nord ? <a href='page_73'>Rendez-vous au 73</a>\
 </p>\""),
 page_254: new undum.SimpleSituation(
 "<p class='transient'> \
 Il règne un silence mortel. Vous contournez les cercueils à pas feutrés, \
 et vous sursautez en entendant un\
 Tandis que vous gardez les yeux fixés sur le couvercle qui se soulève, \
 un homme grand, au visage livide, se redresse et s'assied. Ses yeux \
 s'ouvrent et se tournent vers vous. Alors, l'expression de son visage se \
 transforme brusquement, passant de la placidité à une haine féroce. Sa \
 bouche s'ouvre et un terrible sifflement monte de sa gorge. Il a comme \
 des dents de loup. Il vous fait signe de vous approcher de lui. Vous \
 avez le choix entre quatre possibilités :\
 Vous approcher de lui, comme il le souhaite<a href='page_352'> Rendez-vous au 352 </a>\
 Tirer votre épée et vous apprêter au combat <a href='page_333'>Rendez-vous au 333 </a>\
 Essayer de trouver dans votre sac à dos une autre arme pour l'attaquer \
 <a href='page_279'>Rendez-vous au 279 </a>\
 Courir vers la porte située à l'ouest<a href='page_380'> Rendez-vous au 380</a>\
 <img  src='media/img/62_img.JPG' class='float_right'>\
 </p>\""),
 page_255: new undum.SimpleSituation(
 "<p class='transient'> \
 Le passage aboutit à une massive porte de bois. Si vous voulez essayer \
 de l'ouvrir, <a href='page_193'>rendez-vous au 193.</a> Si vous préférez revenir à la \
 bifurcation et prendre un autre chemin,<a href='page_93'>rendez-vous au 93.</a> \
 </p>\""),
 page_256: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous trouvez à un croisement qui vous laisse le choix entre aller \
 au nord (<a href='page_398'>rendez-vous au 398)</a> - bien que dans cette direction, le \
 passage aboutisse très vite à un cul-de-sac -, aller à l'ouest <a href='page_297'>(rendez-\
 vous au 297)</a>, ou encore au sud<a href='page_114'>(rendez-vous au 114)</a> .\
 </p>\""),
 page_257: new undum.SimpleSituation(
 "<p class='transient'> \
 Le passage aboutit bientôt à une porte de bois. Vous écoutez à cette \
 porte, et vous entendez des cris de colère qui proviennent de l'intérieur \
 de la pièce. Allez-vous entrer pour voir ce qui<a href='page_168'> se passe (rendez-vous \
 alors au 168)</a>, ou revenir sur vos pas <a href='page_293'>(et vous rendre au 293)</a> ?\
 </p>\""),
 page_258: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous examinez les débris de pots cassés, mais vous ne trouvez rien \
 d'intéressant. Le liquide inodore a l'apparence et le goût de l'eau. \
 Quant aux pièces dans le bol, il s'agit d'un leurre. Il y a bien huit \
 Pièces d'Or à la surface (et vous pouvez les emporter avec vous), mais, \
 au-dessous, ce ne sont que morceaux de poterie entassés.\
 Vous videz le bol, mais il vous glisse des mains et se brise sur le sol. \
 Une clé de couleur rouge apparaît alors ; elle était cachée dans un \
 double fond. Vous pouvez prendre cette clé. Elle porte le numéro 111.\
 Vous avez la possibilité de vous reposer et \
 gagnez 2 points de CHANCE pour avoir vaincu le Minotaure \
 quittez ensuite la pièce.<a href='page_54'> Rendez-vous au 54.</a>\
 <ul class='options'>\
                <li><a href='./prendre'>Voulez vous prendre la cle ?</a></li>\
                <li><a href='./repas'>Voulez vous Prendre un Repas ?</a></li>\
                </ul>\
                 </p>\"",
                  {
  actions: {
  prendre:function(character, system, action){
                  if (undum.game.initpage_258 == 1)
                       {system.addCharacterInventory("clef-111"); }
                        system.clearLinks('./prendre'); 
                        

                      
        },repas:function(character, system, action){
                      if(character.qualities.provision>0 && (undum.game.initpage_258 == 1))
                      {
                        system.setQuality('provision', character.qualities.provision -1);
                        system.setQuality('endurance', character.qualities.endurance +4);
                        //undum.game.nombretentative++; 
                        system.clearLinks('./repas'); 
                        

                      }
        }
        },
        enter: function(character, system, to) {

              if ((character.qualities.chance +2) < undum.game.initchance)
               {
                system.setQuality('chance', character.qualities.chance +2);
              }
              undum.game.initpage_258++; 
            }
        }
      
        ),
 page_259: new undum.SimpleSituation(
 "<p class='transient'> \
 Tout  en  nageant  vers  la  rive  après  avoir  abandonné  le  corps  du\
 Crocodile, vous jetez un coup d'œil en arrière et vous voyez la \
 mystérieuse « turbulence » s'approcher du reptile mort. La « \
 turbulence » s'agite soudain frénétiquement, puis s'éloigne, et il ne \
 reste alors plus aucune trace du Crocodile. Vous vous félicitez de \
 n'avoir pas eu l'occasion de voir ce qui provoquait ces étranges \
 remous, et vous vous hissez sur la berge nord de la rivière. Vous \
 gagnez 1 point d'HABILETÉ et 2 points de CHANCE.<a href='page_7'> Rendez-vous au 7.</a>\
 </p>\"" , //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.setQuality('chance', character.qualities.chance +2);
               system.setQuality('habilite', character.qualities.habilite +1);
            }
        }
        ),
 page_260: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous ne découvrez pas de passage secret. <a href='page_359'> Si vous allez au nord, \
 </a>. Si vous allez au sud, <a href='page_329'>rendez-vous au 329.</a>\
 </p>\""),
 page_261: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous arrivez à la bifurcation, et vous poursuivez votre chemin vers \
 l'est. <a href='page_345'>Rendez-vous au 345.</a>\
 </p>\""),
 page_262: new undum.SimpleSituation(
 "<p class='transient'> \
 Un peu plus loin, vous atteignez une autre bifurcation qui vous permet \
 d'aller soit vers l'est <a href='page_199'>(rendez-vous au 199)</a>, <a href='page_251'>soit vers l'ouest (rendez-\
 vous au 251).</a>\
 </p>\""),
 page_263: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous criez : « Te voilà libre, vieillard ! » de toute la force de vos \
 poumons. Il cesse aussitôt ses hurlements. S'arrêtant net, il s'effondre \
 sur le sol et pleure à gros sanglots. Puis, petit à petit, il se reprend et \
 vous remercie avec chaleur. Vous bavardez avec lui dans l'espoir de \
 découvrir quelques secrets au sujet de la montagne, et il commence à \
 vous conter son histoire.\
 Bien des années auparavant, il était, tout comme vous, un aventurier \
 parti à la recherche du trésor gardé par le Sorcier. Les Farfadets \
 l'avaient alors capturé et jeté dans cette cellule solitaire. Depuis, il \
 était devenu pour eux une sorte d'animal familier. Vous lui demandez \
 s'il souhaite vous accompagner dans votre quête, mais il n'a qu'un seul \
 désir : s'en aller et revoir le monde extérieur. Vous lui demandez \
 conseil, mais il vous répond qu'il ne sait pas grand-chose. Il vous \
 recommande toutefois de vous montrer respectueux envers le passeur. \
 Il vous signale également qu'il faut tirer le levier de droite dans le mur \
 qui se trouve un peu plus loin, pour ouvrir la grille de fer à laquelle \
 aboutit le passage. Il sait aussi que les clés du Hangar à Bateaux sont \
 gardées par un homme et son chien. Vous vous serrez la main, vous \
 quittez tous deux la pièce, et vous prenez chacun un chemin différent. \
 Vous gagnez 1 point de CHANCE.<a href='page_314'> Rendez-vous au 314. </a>\
 </p>\"" , //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.setQuality('chance', character.qualities.chance +1);
               
            }
        }),
 page_264: new undum.SimpleSituation(
 "<p class='transient'> \
 Il ne faut pas espérer enfoncer la porte : elle est en bois de chêne \
 massif d'une douzaine de centimètres d'épaisseur ! Vous n'êtes \
 parvenu qu'à vous faire mal au bras avec lequel vous maniez votre \
 épée en vous livrant à cette tentative. Résultat : vous perdez 1 point \
 d'HABILETÉ. Vous ne pourrez franchir la porte que si vous êtes en \
 possession de la clé du Hangar à Bateaux (si vous avez cette clé),  \
 , et vous êtes bien sot de ne pas l'avoir utilisée dès le \
 début). Dans le cas contraire, il vous faudra retourner à la rivière et \
 prendre un autre chemin. <a href='page_129'>Rendez-vous au 129. </a>\
 <ul class='options'>\
 <li><a href='./use'>Utilisez la clé du hangar ?</a></li>\
 </ul>\
  </p>\"" , //ouvre les condifion
      {
      actions: {
                use: function(character, system, action) {

                    if(system.isItemExistInventory("clés hangar")){
          
                     system.doLink('page_80');
                    }
                    else
                    {
                  system.write( "<p class='transient'>vous n\'avez pas cette clé  "
                          +"  </p>") ;
                    }

                    system.clearLinks('./use');

                }
            },
       enter: function(character, system, to) {
               system.setQuality('habilite', character.qualities.habilite -1);
            }, 
      exit: function(character, system, to) {
            $( "hr" ).remove();
      }
        }),
 page_265: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous cherchez à tâtons une porte dans le mur, et vous en trouvez une. \
 Vous tournez hâtivement la poignée ; la porte s'ouvre ! <a href='page_88'>Rendez-vous \
 au 88.</a>\
 </p>\""),
 page_266: new undum.SimpleSituation(//bonus
 "<p class='transient'> \
 <img  src='media/img/266_img.JPG' class='float_center'>\
 La mallette s'ouvre facilement et vous trouvez à l'intérieur un arc \
 magnifique et une flèche d'argent. Sur le couvercle de la mallette, on \
 peut lire cette inscription : « Celui qui donne le sommeil à ceux qui ne\
 peuvent dormir... » Vous rangez l'arc, la flèche et la mallette dans \
 votre sac à dos, et vous quittez la pièce, mais vous pouvez avant cela \
 manger quelques Provisions. Vous gagnez par la même occasion 1 \
 point de CHANCE. <a href='page_237'>Rendez-vous au 237.</a>\
 <ul class='options'>\
                <li><a href='./repas'>Voulez vous Prendre un Repas ?</a></li>\
                </ul>\
                 </p>\"",
                  {
  actions: {
  repas:function(character, system, action){
                      if((character.qualities.provision>0))
                      {
                        system.setQuality('provision', character.qualities.provision -1);
                        system.setQuality('endurance', character.qualities.endurance +4);
                        //undum.game.nombretentative++; 
                        system.clearLinks('./repas'); 
                        

                      }
        }
        }, 
        enter:function(character, system, action){
          system.addCharacterInventory("arc"); 
          system.addCharacterInventory("flêche argent"); 
          system.setQuality('chance', character.qualities.chance +1);
        }, 
        exit:function(character, system, action){
           $( "hr" ).remove();
        }
      }
      ),
 page_267: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous trouvez maintenant à un croisement.\
 Pour aller au nord<a href='page_312'> Rendez-vous au 312</a>\
 Pour aller au sud <a href='page_246'> Rendez-vous au 246</a>\
 Pour aller à l'ouest <a href='page_79'>Rendez-vous au 79</a>\
 Pour aller à l'est <a href='page_349'>Rendez-vous au 349</a>\
 </p>\""),
 page_268: new undum.SimpleSituation(
 "<p class='transient'> \
 Leur vocabulaire se limite à une série de grognements et de \
 grommellements. Ils semblent n'avoir pas la moindre once \
 d'intelligence. Pire encore, vos paroles ont simplement servi à attirer \
 leur attention sur vous. Ils empoignent leurs armes, et il semble que \
 vous allez devoir les combattre. Il y a cependant une faible chance \
 pour que vous puissiez prendre la fuite par la porte que vous venez de \
 franchir. Si vous voulez essayer de vous échapper par cette porte, \
 <a href='page_13'>rendez-vous au 13.</a> Si vous préférez vous résigner au combat,<a href='page_282'> rendez-\
 vous au 282.</a>\
 </p>\""),
 page_269: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes de retour à la bifurcation, et vous prenez la direction de \
 l'ouest. <a href='page_225'>Rendez-vous au 225.</a>\
 </p>\""),
 page_270: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous entrez dans la caverne et vous apercevez des dizaines de \
 stalactites et de stalagmites, aux couleurs magnifiques, qui entourent \
 l'endroit. De tous côtés, on entend tomber des gouttes d'eau, et \
 l'ensemble donne l'impression d'une grotte magique. Au fond de la \
 caverne, vous trouvez une paire de bottes qui semblent de fabrication \
 récente Qu'allez-vous faire ?\
 Continuer à explorer la caverne ? <a href='page_61'> Rendez-vous au 61 </a>\
 Essayer les bottes ?<a href='page_394'> Rendez-vous au 394 </a>\
 Quitter la caverne et revenir à la bifurcation ? <a href='page_375'>Rendez-vous au 375</a>\
 </p>\""),
 page_271: new undum.SimpleSituation(
 "<p class='transient'> \
 Le passage se rétrécit et aboutit quelques mètres plus loin à une porte. \
 Si vous voulez franchir cette porte, <a href='page_336'>rendez-vous au 336.</a> Si vous \
 préférez retourner à la rivière <a href='page_214'>Rendez-vous au 214</a>.\
 </p>\""),
 page_272: new undum.SimpleSituation(
 "<p class='transient'> \
 Il se calme, prend votre Or (n'oubliez pas de retrancher cette somme \
 de votre pécule), et vous fait traverser la rivière dans sa barque en \
 direction de la berge nord. Après avoir amarré son embarcation, il se \
 dirige à pas lents vers un couloir qu'il emprunte, et disparaît.<a href='page_7'> Rendez-\
 vous au 7. </a>\
 </p>\""),
 page_273: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous ne trouvez rien de bien utile en fouillant la pièce, sauf peut-être \
 une mallette de bois qui contient cinq petits piquets taillés en pointe. \
 Vous pouvez les emporter si vous le désirez, et quitter la pièce en \
 franchissant la porte située dans le mur nord.<a href='page_189'> Rendez-vous au 189.</a>\
 </p>\""),
 page_274: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous quittez la caverne en suivant un couloir long et étroit. Quelques \
 centaines de mètres plus loin, il aboutit à une porte de bois légèrement \
 entrouverte. Avec précaution, vous l'entrebâillez un peu plus, et vous \
 glissez la tête par l'ouverture pour voir ce qu'il y a dans la pièce. Vous \
 apercevez un vieil homme assis seul à une table. Il joue aux cartes. \
 Les cheveux et la barbe gris, il semble tout à fait inoffensif. Qu'allez-\
 vous faire ? Vous précipiter à l'intérieur, votre épée à la main, pour \
 surprendre le vieil homme ?<a href='page_324'> Rendez-vous au 324</a>. Frapper à la porte et \
 entrer, puis le saluer courtoisement ? <a href='page_356'>Rendez-vous au 356 </a>. Vous \
 mettre à quatre pattes et essayer de vous glisser dans la pièce sans \
 vous faire remarquer ? <a href='page_98'>Rendez-vous au 98.</a>\
 </p>\""),
 page_275: new undum.SimpleSituation(
 "<p class='transient'> \
 <img  src='media/img/275_img.JPG' class='float_center'>\
 En vous dirigeant vers le second corps, vous heurtez du pied le \
 troisième, par inadvertance. Alors, les yeux du cadavre s'ouvrent et le \
 mort s'assied en essayant de vous griffer avec ses ongles longs et \
 acérés. Tentez votre Chance. Si vous êtes chanceux, la créature vous \
 rate. Si vous êtes malchanceux, elle parvient à vous enfoncer ses \
 ongles dans la jambe et vous perdez 1 point d'ENDURANCE. \
 .\
  <ul class='options'>\
                <li><a href='./lucktest'>Tentez votre chance ?</a></li>\
                </ul>\
                 </p>\"",
      {
          

            actions: {
                lucktest: function(character, system, action) {
                    
                    if( system.rnd.dice(2,6) < character.qualities.chance )  
                    {
                      system.setQuality('chance', character.qualities.chance -1);
                          system.write( "<p class='transient'><strong>Vous etes chanceux</strong>"
                            + " <a href='page_230'>vous alors au 230</a> </p><br>") ; 
                          

                    }
                    else
                    {
                      system.setQuality('chance', character.qualities.chance -1);
                      system.setQuality('endurance', character.qualities.endurance -1);
                        system.write( "<p class='transient'>pas de chance "
                          +"  <a href='page_230'>vous alors au 230</a> </p>") ;
                    
                    }

                }
            }
        }
        ),
 page_276: new undum.SimpleSituation(
 "<p class='transient'> \
 <a href='page_182'>Rendez-vous au 182</a>.\
 </p>\""),
 page_277: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous trouvez dans un petit passage qui aboutit à un cul-de-sac \
 quelques mètres plus loin. Vous pouvez, si vous le souhaitez, chercher \
 un passage secret <a href='page_146'>(et vous rendre au 146)</a>, ou retourner au croisement. \
 Dans ce dernier cas, vous avez le choix entre poursuivre votre chemin \
 droit au nord (<a href='page_366'>rendez-vous au 366)</a>, ou tourner à l'ouest<a href='page_11'> (rendez-vous \
 au 11).</a>\
 </p>\""),
 page_278: new undum.SimpleSituation(
 "<p class='transient'> \
Le passage aboutit bientôt à une porte fermée à clé. Vous collez votre \
oreille contre le panneau, mais vous n'entendez rien. Voulez-vous\
 essayer d'enfoncer la porte ? \
  Dans ce cas, <a href='page_156'>rendez-vous au 156.</a> Si vous \
 préférez rebrousser chemin et retourner au\
 croisement, <a href='page_92'>rendez-vous au 92.</a>\
 </p>\""),
 page_279: new undum.SimpleSituation(//peut être a construire 
 "<p class='transient'> \
 La créature qui vous fait face est un VAMPIRE ! Vous avez plusieurs \
 moyens de l'affronter. Un crucifix le tiendra à distance, mais ne le \
 tuera pas. Si vous en avez un dans votre sac à dos, vous pouvez \
 l'utiliser pour atteindre la porte ouest et la franchir sans que le \
 Vampire soit en mesure de vous en empêcher<a href='page_380'>Rendez-vous au 380</a> \
 . Si vous êtes résolu à tuer le Vampire, il vous faut le vaincre et \
 lui transpercer le cœur avec un épieu. Si vous disposez d'un épieu et \
 que vous décidez de le tuer, <a href='page_17'>rendez-vous au 17</a>. Si vous ne possédez ni \
 crucifix ni épieu, tirez votre épée,<a href='page_333'>et rendez-vous au 333.</a> \
 <ul class='options'>\
 <li><a href='./crucifix'>avez vous le crucifix ?</a></li>\
  <li><a href='./epieu'>avez vous l epieu ?</a></li>\
  <li><a href='./epee'>tirez votre épée?</a></li>\
 </ul>\
  </p>\"" , //ouvre les condifion
      {
      actions: {
                crucifix: function(character, system, action) {

                    if(system.isItemExistInventory("crucifix")){
          
                     system.doLink('page_80');
                    }
                 

                    system.clearLinks('./crucifix');

                },
                 epieu: function(character, system, action) {

                    if(system.isItemExistInventory("epieu")){
          
                     system.doLink('page_17');
                    }
                  

                    system.clearLinks('./epieu');

                }, 
                 epee: function(character, system, action) {

                  
          
                     system.doLink('page_333');
                   

                }
            }, 
      exit: function(character, system, to) {
            $( "hr" ).remove();
      }
        }),
 page_280: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes de retour à la bifurcation, et, cette fois, vous prenez à l'est. \
 Le passage tourne ensuite vers le nord, au bout de quelques mètres. \
 <a href='page_311'>Rendez-vous au 311.</a>\
 </p>\""),
 page_281: new undum.SimpleSituation(
 "<p class='transient'> \
 Le passage devient si étroit que vous ne pouvez plus vous tenir debout. \
 Vous poursuivez donc votre chemin à quatre pattes. Mais finalement, \
 vous ne pouvez plus avancer du tout, et vous vous résignez à \
 rebrousser chemin vers la bifurcation. <a href='page_10'>Rendez-vous au 10. </a>\
 </p>\""),
 page_282: new undum.SimpleSituation(//combat a revoir 
 "<p class='transient'> \
 Les quatre créatures qui avancent vers vous d'un pas traînant sont des \
 ZOMBIES complètement décervelés. Leur regard vide indique que \
 leur volonté est sans doute contrôlée par une puissance extérieure. \
 Vous êtes trop étourdi pour avoir des pensées claires, mais il vous faut \
 agir vite. Un premier Zombie se tient devant vous et brandit sa \
 massue. Il ne vous reste plus qu'à le combattre.\
 ZOMBIE HABILETÉ: 7 ENDURANCE: 6\
 Si vous terrassez le premier Zombie, prenez 2 points de CHANCE et \
 affrontez les trois autres (vous les combattrez un par un) :\
ZOMBIE avec faux 6 6, ZOMBIE avec pioche 6 6, ZOMBIE avec hache 6 5\
 <ul class='options'>\
                <li><a href='./attack'>Attaquez les Zombies!</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_282'][0].monstre[undum.game.nombrederound]);    
                            
                        if (undum.game.bestiaire['page_282'][0].monstre[undum.game.nombrederound].endurance <=0)
                        {
                          
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_282'][0].monstre[undum.game.nombrederound].nom+"!!"
                                         + " " 
                                         +"   </p>" ); 
                           undum.game.nombrederound++; 
                               if(undum.game.nombrederound == 4)
                                {
                                  system.setQuality('chance', character.qualities.chance +2);
                                     system.write( "<p class='transient'>Vous avez tué les zombies rendez-vous au 115  </p>") 
                                     system.doLink('page_115');
                                }
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            
                        }
                    

                   }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
            $( "hr" ).remove();
           }
       }
       ),
 page_283: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes de retour à la bifurcation et vous prenez la direction de \
 l'ouest. <a href='page_251'> Rendez-vous au 251.</a>\
 </p>\""),
 page_284: new undum.SimpleSituation(
 "<p class='transient'> \
 « Encore vous ! » s'exclame le Maître du Labyrinthe, visiblement \
 agacé d'être à nouveau dérangé, « vous m'empêchez de me concentrer. \
 Allez-vous-en ! »\
 Vous commencez à lui expliquer que vous êtes revenu là par erreur \
 mais vous avez à peine le temps d'ouvrir la bouche qu'un regard \
 glacial du vieil homme vous contraint au silence. Vous décidez de le \
 laisser seul. Si vous voulez sortir par la porte<a href='page_46'> ouest, rendez-vous au \
 46.</a>  Si vous préférez la porte sud<a href='page_392'>Rendez-vous au 392</a>\
 </p>\""),
 page_285: new undum.SimpleSituation(
 "<p class='transient'> \
 Du côté droit du passage (c'est-à-dire à l'est), il y a une porte. Vous \
 collez votre oreille contre le trou de la serrure, et vous entendez à \
 l'intérieur un homme appeler à l'aide. Décidez-vous d'ouvrir la porte \
 (<a href='page_213'>rendez-vous au 213)</a>, <href='page_314'>ou de poursuivre votre chemin  (rendez-vous au\
 314) </a>?\
 </p>\""),
 page_286: new undum.SimpleSituation(
 "<p class='transient'> \
 L'escalier est taillé dans le roc et une vingtaine de marches descendent \
 vers un passage qui vous mène à une grande salle ouverte. Il y règne \
 une odeur de chair putréfiée. L'odeur est si nauséabonde que vous êtes \
 tenté de revenir sur vos pas. Trois corps sont étendus sur le sol. Vous \
 pouvez fouiller les corps si vous le désirez, ou traverser la salle sur la \
 pointe des pieds. Qu'allez-vous faire ?\
 Fouiller le premier cadavre ? <a href='page_294'>Rendez-vous au 294 </a>Fouiller le deuxième \
 cadavre ? <a href='page_275'>Rendez-vous au 275</a> Fouiller le troisième cadavre ? <a href='page_148'>Rendez-\
 vous au 148 </a> Traverser la salle sur la pointe des pieds ? <a href='page_107'>Rendez-vous \
 au 107 </a>\
 </p>\""),
 page_287: new undum.SimpleSituation(//situation particuliere 
 "<p class='transient'> \
 Le passage vous mène au bout d'une certaine distance au pied d'un \
 escalier taillé dans le roc. Vous en montez les marches, et vous arrivez \
 à une porte de bois aux gonds rouillés. Vous écoutez à la porte et vous \
 entendez des grattements. Vous tournez la poignée et la porte s'ouvre \
 en grinçant. Vous entrez alors dans une pièce nue au sol jonché \
 d'ossements. Il y a une autre porte dans le mur d'en face. Trois RATS \
 GÉANTS sont en train de ronger des os. Ils s'interrompent et lèvent les \
 yeux vers vous lorsque vous entrez. Chacun d'eux est long d'au moins \
 un mètre, et leur pelage écorché par endroits témoigne de leur goût \
 pour la bagarre. Si vous voulez traverser la pièce, il vous faudra les \
 affronter, car il ne fait pas de doute qu'ils voient en vous un mets de \
 choix. Si au cours de votre aventure vous vous êtes procuré du \
 fromage, Sinon, <a href='page_309'>rendez-vous au 309 </a>.\
 <img  src='media/img/287_img.JPG' class='float_center'>\
  <ul class='options'>\
 <li><a href='./use'>Utilisez le fromage?</a></li>\
 </ul>\
  </p>\"" , //ouvre les condifion
      {
      actions: {
                use: function(character, system, action) {

                    if(system.isItemExistInventory("fromage")){
          
                     system.doLink('page_32');
                    }
                    else
                    {
                  system.write( "<p class='transient'>vous n\'avez pas de fromage "
                    +"<a href='page_309'>rendez-vous au 309 </a>  "
                          +"  </p>") ;
                    }

                    system.clearLinks('./use');

                }
            },
       enter: function(character, system, to) {
              
            }, 
      exit: function(character, system, to) {
            $( "hr" ).remove();
      }
        }
        ),
 page_288: new undum.SimpleSituation(
 "<p class='transient'> \
 <a href='page_182'>Rendez-vous au 182. </a>\
 </p>\""),
 page_289: new undum.SimpleSituation(//combat 
 "<p class='transient'> \
 Vous regardez désespérément autour de vous, mais vous ne voyez rien \
 qui puisse vous aider. Soudain, votre regard s'arrête sur le jeu de \
 cartes qu'il était en train de manipuler lorsque vous êtes entré, et vous \
 vous rappelez certaines rumeurs qui couraient parmi les villageois \
 selon lesquelles « le pouvoir du Sorcier lui vient de ses cartes ». Le \
 Sorcier remarque que vous les observez et vous vous précipitez tous \
 deux sur le jeu de cartes. Vous arrivez à la table le premier. «N'y \
 touchez pas ! hurle-t-il, ou ma colère sera terrible ! » Mais vous vous \
 emparez des cartes et vous en brûlez une avec votre lanterne. Le \
 Sorcier pousse des cris sauvages, puis il vous supplie de les lui rendre. \
 Vous continuez cependant à brûler les cartes une par une, et tandis que \
 vous y mettez le feu, la taille du Sorcier diminue. Lorsque la dernière \
 carte s'envole en fumée, il n'est plus, face à vous, qu'un homme brisé. \
 « Mon livre ! » s'écrie-t-il d'une voix rauque ; il tente alors d'ouvrir la \
 porte à l'autre bout de la pièce. Mais vous vous précipitez, votre épée à \
 la main, et vous bondissez sur lui. Menez le combat à son terme :\
 SORCIER HABILETÉ: 7 ENDURANCE: 12\
  <ul class='options'>\
                <li><a href='./attack'>Attaquez les farfadets!</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_116'][0].monstre[0]);    
                            
                        if (undum.game.bestiaire['page_289'][0].monstre[0].endurance <=0)
                        {
                          
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_289'][0].monstre[0].nom+"!!"
                                         + "  <a href='page_321'>Rendez-vous au 321. </a>" 
                                         +"   </p>" ); 
                          
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            
                        }
                    

                   }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
           }
       }),
 page_290: new undum.SimpleSituation(
 "<p class='transient'> \
 <a href='page_198'>Rendez-vous au 198. </a>\
 </p>\""),
 page_291: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous trouvez au milieu d'un couloir est-ouest. A l'est, il se \
 termine en un cul-de-sac que vous pouvez examiner <a href='page_315'>en vous rendant \
 au 315</a>. A l'ouest, il y a une bifurcation qui vous est familière. Si vous \
 voulez vous y rendre, <a href='page_52'>allez au 52 </a>. Un autre passage - très court - part \
 vers le nord et aboutit à une haute porte de bois. Si vous préférez \
 essayer de franchir cette porte<a href='page_227'>, rendez-vous au 227</a>.\
 </p>\""),
 page_292: new undum.SimpleSituation(
 "<p class='transient'> \
 Au nord, le passage aboutit à une massive porte de bois. Vous écoutez \
 à la porte, mais vous n'entendez rien. Il semble qu'il n'y ait d'autre \
 choix que d'ouvrir cette porte et de pénétrer dans la pièce qui se trouve \
 derrière. C'est ce que vous faites et vous découvrez une grande pièce \
 carrée. Vous promenez votre lanterne tout autour et vous constatez \
 qu'elle est vide ; vous apercevez cependant des peintures murales. \
 Soudain, votre lanterne s'éteint. Vous essayez de la rallumer, mais \
 sans succès. Dans les ténèbres, vous entendez une série de bruits \
 terrifiants, des mugissements, des cris, des vociférations, des plaintes \
 qui augmentent d'intensité et atteignent bientôt un tel niveau sonore \
 que vous êtes obligé de plaquer vos mains contre vos oreilles. \
 Disposez-vous d'une chandelle bleue ? Si oui <a href='page_239'>Rendez-vous au 239</a>. \
 Sinon <a href='page_40'>Rendez-vous au 40</a>.\
 </p>\""),
 page_293: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes de retour à la bifurcation, et vous prenez la direction de \
 l'est. <a href='page_113'>Rendez-vous au 113.</a>\
 </p>\""),
 page_294: new undum.SimpleSituation(//bonus po 
 "<p class='transient'> \
 Vous trouvez 5 Pièces d'Or dans les poches du cadavre. Inscrivez-les \
 sur votre Feuille d'Aventure et prenez un point de CHANCE pour cette \
 découverte. Vous avez maintenant plusieurs possibilités :\
 Fouiller le deuxième corps <a href='page_275'>Rendez-vous au 275 </a>\
 Fouiller le troisième corps <a href='page_148'>Rendez-vous au 148 </a>\
 Traverser la pièce sur la pointe des pieds en direction du nord <a href='page_107'>Rendez-\
 vous au 107</a>\
 </p>\"", //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.setQuality('or', character.qualities.or +5);
                system.setQuality('chance', character.qualities.chance +1);
              
            }
        }),
 page_295: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous ne trouvez pas de passage secret. En revanche, vos investigations \
 ont attiré une créature ; vous entendez en effet des pas, dans le couloir, \
 qui viennent vers vous. Pour savoir quel genre de monstre s'approche \
 ainsi, <a href='page_1614'>rendez-vous au 161</a>rendez-vous au 161. Il vous faudra le combattre et si vous êtes \
 vainqueur, vous pourrez poursuivre votre chemin le long du passage \
 </p>\""),
 page_296: new undum.SimpleSituation(//inventaire sort de boulle de feux
 "<p class='transient'> \
 La boîte contient un petit livre à la reliure de cuir qui porte le titre \
 suivant : Comment le Dragon Fabrique et Souffle le Feu. Vous en \
 ouvrez les pages et vous commencez à lire. Par chance, le livre est \
 écrit dans votre langue, et sans doute les FARFADETS étaient-ils \
 incapables de comprendre la valeur de cet ouvrage, sinon, ils l'auraient \
 certainement gardé avec plus de soin. Le livre a été écrit à la main, \
 d'une écriture minuscule, et l'auteur se nomme Farrigo Di Maggio. Il \
 expose dans ces pages l'œuvre de sa vie, c'est-à-dire la découverte \
 d'une formule magique qui permet de neutraliser les Dragons et leur \
 souffle ardent. Les lignes que vous lisez vous apprennent que lorsque \
 Farrigo parvint à mettre parfaitement au point cette formule, il vivait \
 les dernières années de sa vie ; devenu alors trop vieux pour faire lui-\
 même usage de sa trouvaille, il se contenta de la consigner dans ce \
 livre qu'il enferma dans un coffre.\
 Mais, effrayé à l'idée que l'ouvrage pût tomber en de mauvaises \
 mains, il cacha soigneusement ce coffre dans les profondeurs de la \
 Montagne au Sommet de Feu. Voici ce qu'on peut lire à la dernière \
 page du livre :\
 <img  src='media/img/296_img.JPG' class='float_center'>\
 Vous répétez ces quelques mots lentement et à voix basse. Soudain, la \
 page semble projeter une lueur et lorsque, au bout d'un moment, cette \
 lueur s'évanouit, toute écriture a disparu du livre. Vous vous répétez \
 dans votre tête la formule magique afin d'être sûr de vous en souvenir, \
 puis vous quittez la pièce.<a href='page_42'> Rendez-vous au 42.</a>\
 </p>\""),
 page_297: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes dans un couloir est-ouest qui se termine à chaque extrémité \
 par un croisement en forme de T. Si vous choisissez d'aller vers \
 l'ouest, <a href='page_150'>rendez-vous au 150</a>. Si vous préférez l'est, <a href='page_256'>rendez-vous au 256.</a>\
 </p>\""),
 page_298: new undum.SimpleSituation(
 "<p class='transient'> \
 Des flaques d'eau ont rendu le pont glissant. Soudain, vous glissez sur \
 une plaque de mousse humide qui recouvre le bois. Lancez un dé. Si \
 vous faites un 6, vous tombez dans la rivière, et il ne vous reste plus \
 qu'à nager vers la berge la plus proche. Rendez-vous alors au 86. Si \
 vous faites un autre chiffre, vous avez eu de la chance, et vous \
 parvenez à rattraper votre équilibre. Vous pouvez alors atteindre la \
 rive nord. <a href='page_7'> Rendez-vous au 7.</a>\
 </p>\""),
 page_299: new undum.SimpleSituation(
 "<p class='transient'> \
 Le passage mène vers l'est pendant plusieurs mètres, puis tourne vers \
 le nord. Vous marchez longtemps dans cette dernière direction et vous \
 pouvez, si vous le désirez, essayer de découvrir des passages secrets \
 au long de votre chemin. Dans ce cas, <a href='page_260'>rendez-vous au 260</a>. Si vous \
 préférez continuer vers le nord sans vous arrêter<a href='page_359'>Rendez-vous au 359</a>.\
 </p>\""),
 page_300: new undum.SimpleSituation(
 "<p class='transient'> \
 Dans le mur est du passage, il y a une autre porte, métallique cette \
 fois. En écoutant à cette nouvelle porte, vous entendez des hurlements \
 provoqués sans doute par quelque séance de torture. Si vous voulez \
 tenter d'ouvrir la porte, <a href='page_102'>rendez-vous au 102</a>. Si vous préférez \
 poursuivre votre chemin le long du couloir <a href='page_303'>Rendez-vous au 303</a>.\
 </p>\""),
     page_301: new undum.SimpleSituation(
                "<p class='transient'> \
                A votre gauche, du côté ouest du passage, il y a une porte de bois brut\
                grossièrement taillé. Vous tendez l'oreille et vous percevez un bruit qui\
                pourrait être le ronflement d'une quelconque créature. Désirez-vous\
                ouvrir cette porte ? <a href='page_82'>Rendez-vous alors au 82</a>. Si vous préférez continuer\
                vers le nord, <a href='page_208'>rendez-vous au 208.</a>\
                 </p>\""

        ),
     page_302: new undum.SimpleSituation(
 "<p class='transient'> \
 <a href='page_198'>Rendez-vous au 198.</a>\
 </p>\""),
 page_303: new undum.SimpleSituation(
 "<p class='transient'> \
 <img  src='media/img/303_img.JPG' class='float_center'>\
 Vous parvenez à l'extrémité du passage qui aboutit alors à un autre \
 couloir est-ouest. Mais il y a une herse de fer en travers de votre \
 chemin et il ne faut pas espérer la forcer. Deux leviers dépassent du \
 mur à votre droite, et selon toute vraisemblance, l'un de ces leviers \
 commande l'ouverture de la herse. Allez-vous tirer sur le levier de \
 droite ou sur celui de gauche ?\
 Levier droit\
 <a href='page_128'>Rendez-vous au 128 </a>\
 Levier gauche\
 <a href='page_243'>Rendez-vous au 243 </a>\
 </p>\""),
 page_304: new undum.SimpleSituation(//combat
 "<p class='transient'> \
 Le vieil homme est furieux que vous ayez tué son chien ! Ses yeux \
 deviennent tout blancs sous l'effet de la colère. Il se lève lentement de \
 son siège, et lorsqu'il se tient debout, il semble grandir et gagner en \
 robustesse. Il se métamorphose sous vos yeux. Son visage et ses avant-\
 bras se couvrent de poils. Son nez s'allonge et prend la forme d'un \
 museau de chien. Ses dents sont soudain pointues. C'est un LOUP-\
 GAROU, il s'avance vers vous.\
Vous ne pouvez prendre la fuite que par la porte sud située derrière\
vous. Rendez-vous alors au 66.  Si vous ne voulez pas fuir, il vous faut\
le combattre : \
LOUP-GAROU HABILETÉ: 8 ENDURANCE: 8 \
Si vous êtes vainqueur, rendez-vous au 203. \
  <ul class='options'>\
                <li><a href='./attack'>Attaquez le LOUP-GAROU !</a></li>\
                <li><a href='./fuite'>Fuir en courant !</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
            console.log("the system is " + system); 
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_304'][0].monstre[0]);    
                            
                        if (undum.game.bestiaire['page_304'][0].monstre[0].endurance <=0)
                        {
                          
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_304'][0].monstre[0].nom+"!!"
                                         + " <a href='page_203'>vous êtes vainqueur, rendez-vous au 203.</a>" 
                                         +"   </p>" ); 
                           
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            
                        }
                    

                   }, 
                   fuite: function( character, system, action) {
                    
              system.clearLinks('./attack'); 
              system.clearLinks('./fuite'); 
                        system.animateQuality( 'endurance', character.qualities.endurance -2);
                        
                            if (character.qualities.endurance <= 0 )
                            {
                              system.doLink('death');
                            }
                            else{
                         system.write( "<p class='transient'>Vous fuyer par la porte sud située derrière "
                          + " <a href='page_66'>rendez-vous au 66</a> vous perdez 2 point d'endurance"
                          +"  </p>")

                       }
                    
                   }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
           }
       }),
 page_305: new undum.SimpleSituation(
 "<p class='transient'> \
 Tentez votre Chance trois fois. Si vous êtes chanceux par trois fois, \
 vous parvenez à traverser la pièce et à sortir par la porte située de \
 l'autre côté. Rendez-vous au 162 . Mais au premier lancer de dé qui \
 révélera votre malchance, vous poserez le pied sur une dalle en forme \
 de main et vous devrez alors vous rendre au 108.\
  <ul class='options'>\
                <li><a href='./lucktest'>Tentez votre chance ?</a></li>\
                </ul>\
                 </p>\"",
      {
          

            actions: {
                lucktest: function(character, system, action) {
                    if( system.rnd.dice(2,6) < character.qualities.chance )  
                    {
                      if(undum.game.nombredecoup <3){
                      system.setQuality('chance', character.qualities.chance -1);

                      undum.game.nombredecoup++;

                          system.write( "<p class='transient'><strong>Vous etes chanceux</strong>"
                            +" vous avez fait  "+ undum.game.nombredecoup +" pas</p>") ; 
                           
                        }
                        if(undum.game.nombredecoup == 3){
                          system.clearLinks('./lucktest');
                          system.write( "<p class='transient'><strong>Vous etes chanceux</strong>"
                            +" <a href='page_162'>rendez-vous au 162.</a></p><br>") ; 

                        }

                    }
                    else
                    {
                      system.setQuality('chance', character.qualities.chance -1);
                        system.write( "<p class='transient'><a href='page_108'>rendez-vous au 108.</a> "
                          +" </p>") ;
                       
                    }

                }
            }, 
           exit : function(character, system, action){
            undum.game.nombredecoup = 0; 
           }
        }
        ),
 page_306: new undum.SimpleSituation(//Biiss 4eme 161
 "<p class='transient'> \
 Vous ne trouvez toujours pas de passage secret. En revanche, vous \
 apercevez la silhouette d'une créature qui vient vers vous le long du \
 couloir. Pour découvrii de quoi il s'agit, <a href='page_1615'>rendez-vous au 161</a> en vous \
 tenant prêt à combattre. \
 </p>\""),
 page_307: new undum.SimpleSituation(
 "<p class='transient'> \
 Le passage tourne en tous sens puis aboutit finalement à une solide \
 porte de fer. Vous écoutez, mais vous n'entendez rien. Vous pouvez \
 essayer d'ouvrir la porte (<a href='page_134'>rendez-vous au 134)</a>, ou choisir de retourner \
 à la bifurcation <a href='page_87'>(et vous rendre au 87).</a>\
 </p>\""),
 page_308: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous trouvez à un croisement. Il y a un passage qui mène vers \
 l'ouest pendant quelques mètres, puis qui tourne au nord. Le chemin \
 qui part vers le nord aboutit à une porte. A l'est, il y a un troisième \
 couloir qui, plus loin, s'oriente au sud. Enfin, le dernier passage mène \
 droit vers le sud aussi loin que porte la vue.\
 Si vous allez à l'ouest  <a href='page_187'>Rendez-vous au 187</a>\
 Si vous allez au nord <a href='page_54'> Rendez-vous au 54</a>\
 Si vous allez au sud <a href='page_160'>Rendez-vous au 160</a>\
 Si vous allez à l'est  <a href='page_354'>Rendez-vous au 354</a>\
 </p>\""),
 page_309: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous tirez votre épée et vous attendez l'assaut des RATS. Alors que \
 leur chef s'apprête à bondir, vous poussez un cri retentissant, et vous \
 vous précipitez en avant. Votre cri a effrayé les deux autres rats et ils \
 reculent de quelques pas. Affrontez chaque RAT un par un:\
 Si vous êtes vainqueur, vous pouvez partir par la porte située dans le \
 mur nord. \
 <ul class='options'>\
                <li><a href='./attack'>Attaquez les rats !</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) { 
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_309'][0].monstre[undum.game.nombrederound]);    
                            
                        if (undum.game.bestiaire['page_309'][0].monstre[undum.game.nombrederound].endurance <=0)
                        {
                          
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_309'][0].monstre[undum.game.nombrederound].nom+"!!"
                                         + " " 
                                         +"   </p>" ); 
                           undum.game.nombrederound++; 
                               if(undum.game.nombrederound == 3)
                                {
                                     system.write( "<p class='transient'><a href='page_124'>Vous avez tué les 3 rats rendez-vous au 124</a>  </p>") 
                                }
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            
                        }
                    

                   }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
           }
       }),
 page_310: new undum.SimpleSituation(
 "<p class='transient'> \
 Il y a quelque chose qui ne va pas très bien. Vous lui avez porté un \
 rude coup et il semble ne pas s'en être aperçu ! Vous en déduisez que \
 cette créature est invulnérable aux armes habituelles. Vous pouvez \
 alors choisir une autre arme. Prenez-la avec vous ou conservez \
 l'ancienne si vous n'en avez pas d'autre, et <a href='page_211'>Rendez-vous au 211</a> \
 </p>\""),
 page_311: new undum.SimpleSituation(
 "<p class='transient'> \
 <img  src='media/img/311_img.JPG' class='float_center'>\
 Le passage aboutit à une porte contre laquelle vous collez votre \
 oreille, mais vous n'entendez rien. Vous tournez la poignée et la porte \
 s'ouvre sur une grande pièce carrée. La salle est dépourvue de tout \
 ameublement, et le sol est recouvert d'une mosaïque de dalles. La \
 plupart de ces dalles sont soit en forme de main, soit en forme d'étoile. \
 Il n'y a qu'une seule autre issue à la pièce : une porte dans le mur \
 opposé. Que choisissez-vous de faire ?\
 Vous traversez la pièce pour atteindre la porte ? <a href='page_305'>Rendez-vous au 305 </a>\
 Vous traversez la pièce en prenant bien soin de ne marcher que sur les \
 dalles en forme d'étoile ? <a href='page_178'>Rendez-vous au 178</a>\
 Vous traversez la pièce en ne marchant que sur les dalles en forme de \
 main ? <a href='page_108'>Rendez-vous au 108 </a>\
 </p>\""),
 page_312: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous suivez un passage long et étroit qui est orienté au nord, puis \
 tourne à l'ouest pour revenir une nouvelle fois au nord un peu plus \
 loin, et vous arrivez finalement à un croisement. <a href='page_308'>Rendez-vous au 308.</a>\
 </p>\""),
 page_313: new undum.SimpleSituation(//bonus 
 "<p class='transient'> \
 Vous examinez le corps. Le pauvre malheureux a de toute évidence \
 subi le même assaut que vous, mais son crâne moins robuste a éclaté \
 sous le coup de massue. Il est vêtu d'une cuirasse semblable à la vôtre, \
 tient un bouclier de bois dans une main et une épée à la lame d'acier \
 dans l'autre. Ses poches contiennent 8 Pièces d'Or et un crucifix en \
 argent est accroché à son cou. Vous pouvez emporter deux de ces \
 objets au choix. Inscrivez-les sur votre Liste d'Équipement et <a href='page_221'>rendez-\
 vous au 221. </a> Prenez également 1 point de CHANCE et un autre \
 d'HABILETÉ.\
  <ul class='options'>\
 <li><a href='./crucifix'>prendre le crucifix ?</a></li>\
  <li><a href='./epeeacier'>prendre l'épée ?</a></li>\
  <li><a href='./bouclierbois'>prendre le bouclier ?</a></li>\
  <li><a href='./armure'>prendre l'armure ?</a></li>\
  <li><a href='./or'>prendre l'or ?</a></li>\
 </ul>\
  </p>\"" , //ouvre les condifion
      {
      actions: {
                crucifix: function(character, system, action) {
                if(undum.game.nombredecoup <2){
                    system.addCharacterInventory("crucifix"); 
                    system.clearLinks('./crucifix');
                  }
                    undum.game.nombredecoup++; 

                },
                epeeacier: function(character, system, action) {
                        if(undum.game.nombredecoup <2){
                    character.qualities.arme = -3; 
                    system.setQuality('arme', character.qualities.arme +1);
                    system.clearLinks('./epeeacier');
                  }
                  undum.game.nombredecoup++; 
                },
                bouclierbois: function(character, system, action) {
                        if(undum.game.nombredecoup <2){
                    system.addCharacterInventory("bouclier bois"); 
                    system.clearLinks('./bouclierbois');
                    }
                        undum.game.nombredecoup++; 
                },
                 armure: function(character, system, action) {
                  if(undum.game.nombredecoup <2){
              system.addCharacterInventory("cuirasse"); 
              system.clearLinks('./armure');
                     }
                        undum.game.nombredecoup++; 
                },
                 or: function(character, system, action) {
                
              system.clearLinks('./or');
                     
                        undum.game.nombredecoup++; 
                }
            },
       enter: function(character, system, to) {
            
              system.setQuality('habilite', character.qualities.habilite +1);
                system.setQuality('chance', character.qualities.chance +1);
            }, 
      exit: function(character, system, to) {
            $( "hr" ).remove();
            undum.game.nombredecoup = 0; 
      }
        }),
 page_314: new undum.SimpleSituation(
 "<p class='transient'> \
 Un peu plus loin, vous découvrez une porte dans le mur est du \
 passage. Vous tendez l'oreille, mais vous n'entendez pas le moindre \
 bruit. Désirez-vous ouvrir la porte pour voir ce qu'il y a derrière ? Si \
 oui, <a href='page_223'>rendez-vous au 223</a>. Si vous préférez au contraire poursuivre \
 votre chemin le long du passage <a href='page_300'>Rendez-vous au 300</a>.\
 </p>\""),
 page_315: new undum.SimpleSituation(
 "<p class='transient'> \
 Apparemment, il n'y a aucun passage secret dans le cul-de-sac, mais \
 vous pouvez toujours vous en assurer en <a href='page_306'>vous rendant au 306.</a> Si vous \
 ne voulez pas pousser plus loin vos investigations pour tenter de \
 découvrir une issue cachée <a href='page_291'>, rendez-vous au 291</a>.\
 </p>\""),
 page_316: new undum.SimpleSituation(//situation particuliére 
 "<p class='transient'> \
 L'eau est glaciale. Vous vous mettez à nager, et vous remarquez que \
 vos mouvements attirent vers vous une « turbulence » qui se déplace à \
 la surface de l'eau. Votre force et votre endurance seront-elles \
 suffisantes pour vous permettre de tenir bon ? Lancez deux dés. Si le \
 chiffre obtenu est inférieur ou égal à vos points d'EN-DURANCE, \
 vous pensez que vous pouvez réussir à traverser la rivière, et vous \
 nagez de toutes vos forces en direction de la berge nord. \
 Si les dés vous donnent un chiffre supérieur à vos points \
 d'ENDURANCE, vous préférez ne pas prendre de risques, et vous \
 retournez à la berge sud. Une fois parvenu à \
 la rive sud, vous pourrez prendre un Repas.\
  <ul class='options'>\
                <li><a href='./lucktest'>Tentez votre chance ?</a></li>\
                </ul>\
                 </p>\"",
      {
          

            actions: {
                lucktest: function(character, system, action) {
                  var res = system.rnd.dice(2,6); 
                    if( res < character.qualities.endurance )  
                    {
                          system.write( "<p class='transient'> votre resultat est "
                            + res + "<a href='page_151'> Rendez-vous au 151. </a> </p><br>") ; 
                        

                    }
                    else
                    {
                        system.write( "<p class='transient'> votre resultat est "
                            + res + "<a href='page_218'> Rendez-vous au 218. </a> </p><br>") ; 
                    }

                }
            }
        }),
       page_317: new undum.SimpleSituation(//situation 
                "<p class='transient'>\
               Vous coupez la corde à laquelle est pendu le nain. Comme vous le\
        pensiez, il est bel et bien mort. En fouillant les poches des deux Lutins,\
        vous trouvez un gros morceau de Fromage à l'odeur alléchante. Si vous\
        voulez l'emporter, rangez-le dans votre sac à dos, et quittez la pièce en\
        prenant la direction du nord.<a href='page_303'> Rendez-vous au 303.</a>\
                   <ul class='options'>\
 <li><a href='./prendre'>prendre le fromage?</a></li>\
 </ul>\
  </p>\"" , //ouvre les condifion
      {
      actions: {
                prendre: function(character, system, action) {
                
              system.addCharacterInventory("fromage"); 
                    system.clearLinks('./prendre');

                }
            }, 
      exit: function(character, system, to) {
            $( "hr" ).remove();
      }
    }

        ),
 page_318: new undum.SimpleSituation(
 "<p class='transient'> \
 Le passage se termine en cul-de-sac. Vous pouvez ou bien retourner au \
 croisement (<a href='page_85'>rendez-vous au 85)</a>, ou bien essayer de découvrir un \
 passage secret<a href='page_228'>(rendez-vous au 228)</a> .\
 </p>\""),
 page_319: new undum.SimpleSituation(
 "<p class='transient'> \
 Pour découvrir le secret du second objet que vous avez ramassé, \
 <a href='page_221'>rendez-vous au 221,</a> et voyez de quoi il retourne. Si vous savez déjà \
 tout des deux objets,<a href='page_81'>rendez-vous au 81.</a> \
 </p>\""
),
 page_320: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous quittez la pièce en courant et vous claquez la porte derrière vous. \
 Vous prenez le couloir en direction du nord, et vous passez devant une \
 porte semblable un peu plus loin.<a href='page_363'> Rendez-vous au 363.</a>\
 </p>\""),
 page_321: new undum.SimpleSituation(
 "<p class='transient'> \
 <a href='page_169'>Rendez-vous au 169.</a>\
 </p>\""),
 page_322: new undum.SimpleSituation(//je valide 
 "<p class='transient'> \
 Tous les tiroirs sont pleins de clous, de punaises et de divers objets \
 sans grande importance. Vous trouvez toutefois, dans l'un des tiroirs, \
 une clé en cuivre qui porte le numéro 66. Voilà qui semble intéressant. \
 Vous avez le droit de prendre cette clé, mais en échange, il va vous \
 falloir abandonner une pièce de votre équipement. Si vous prenez cette \
 clé, modifiez alors votre Liste d'Equipement en conséquence. Tandis \
 que vous examiniez les tiroirs, le bruit en provenance du mur nord \
 s'est intensifié. Vous allez à la porte nord pour voir de quoi il s'agit. \
 <a href='page_96'>Rendez-vous au 96.</a>\
  <ul class='options'>\
                <li><a href='./enleve'>supprimé un objet de votre inventaire et prendre la clé?</a></li>\
                </ul>\
                 </p>\"",
      {
          

            actions: {
                enleve: function(character, system, action) {
                  $( "ul" ).remove();
                  
                  system.buildMenuCharacterInventory(); 
                  system.addCharacterInventory("clef-66"); 
                 undum.game.nombretentative++; 

                }, 
                prendre: function(character, system, action) {
                 
                 
                  if(nombretentative >0)
                  {
                    system.addCharacterInventory("clef-66"); 
                  }

                }
            }, 
            exit: function(character, system, action) {
                undum.game.nombretentative = 0; 
            }
        }
        ),
 page_323: new undum.SimpleSituation(
 "<p class='transient'> \
 Quelques mètres plus loin, vous parvenez à une autre bifurcation. \
 Vous<a href='page_8'> pouvez aller soit au nord </a>, soit à l'est <a href='page_255'>(rendez-\
 vous au 255)</a>.\
 </p>\""),
 page_324: new undum.SimpleSituation(
 "<p class='transient'> \
 Lorsque vous faites irruption dans la pièce, le vieil homme se tourne \
 vers vous sans être le moins du monde impressionné par votre \
 intrusion. Et soudain, il disparaît ! 11 reparaît un instant plus tard près \
 du mur derrière vous, et lorsque vous vous retournez pour lui faire \
 face, il éclate de rire. Et ce n'est pas le frêle gloussement d'un vieillard \
 qui sort de sa gorge, mais le rire tonitruant d'un homme dans la force \
 de l'âge. A nouveau, il disparaît, puis reparaît dans un autre coin de la \
 pièce en vous lançant un regard de défi, et en riant de plus belle, d'un \
 rire sardonique et moqueur. Vous pivotez vers lui juste à temps pour \
 le voir disparaître une nouvelle fois. Lorsqu'il reparaît, il flotte en l'air \
 au-dessus de votre tête et descend lentement sur vous en planant. \
 L'éclat intense de son regard vous fait frissonner tandis qu'il approche. \
 <a href='page_358'>Rendez-vous au 358.</a>\
 </p>\""),
 page_325: new undum.SimpleSituation(//situation ajout inventaire 
 "<p class='transient'> \
 Vous mettez le casque sur votre tête. Il vous va bien. Un influx \
 bienfaisant se répand dans votre corps, et vous emplit d'une force et \
 d'une confiance en vous que vous n'avez jamais ressenties auparavant. \
 Le casque possède un pouvoir magique, et aussi longtemps que vous le \
 porterez dans vos combats, il vous donnera droit à un point \
 supplémentaire que vous pourrez ajouter aux chiffres obtenus aux dés \
 lorsque vous déterminerez votre force d'Attaque. Inscrivez-le sur votre \
 Liste d'Equipement, et revenez à la bifurcation<a href='page_87'>(rendez-vous au 87)</a> .\
 </p>\""  , //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.addCharacterInventory("casque");
              undum.game.bonus++; 
            }
        }
        ),
 page_326: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous entrez dans une petite pièce aux murs de roc. Une clé d'or est \
 accrochée au mur du fond. Il semble n'y avoir aucune issue à la pièce. \
 <img  src='media/img/326_img.jpg' class='float_right'>\
 Voulez-vous aller chercher cette clé <a href='page_35'>(rendez-vous alors au 35)</a> ou \
 préfé-rez-vous la laisser là et revenir à la bifurcation <a href='page_229'>(rendez vous au 229)</a> ?\
 </p>\""),
 page_327: new undum.SimpleSituation(//situation choix repas 
 "<p class='transient'> \
 Le corps allongé sur le sol vieillit à vue d'oeil. Le visage de la créature \
 paraît cinquante ans, puis quatre-vingt-dix ; en quelques instants, il \
 semble avoir largement dépassé la centaine d'années. Sa peau se \
 putréfie et ses yeux se décomposent tandis que vous l'observez. Vous \
 remarquez alors un mouvement à hauteur de la poitrine du vampire et \
 une petite tête noire jaillit au travers du thorax, parmi les restes \
 décomposés du cadavre. On dirait tout d'abord une musaraigne, mais \
 l'animal apparaît bientôt dans son entier et déploie des ailes : vous \
 vous\
 apercevez alors qu'il s'agit d'une chauve-souris. Vous faites un geste \
 vers elle, mais elle s'envole aussitôt et disparaît dans l'obscurité.\
 Vous fouillez rapidement la pièce (rappelez-vous qu'il y a plusieurs \
 autres cercueils en cet endroit ! ) et vous trouvez 30 Pièces d'Or, un \
 livre et un morceau de bois en forme de Y. Vous pouvez emporter ces \
 objets (inscrivez-les dans ce cas sur votre Feuille d'Aventure) à la \
 condition d'abandonner une pièce de votre équipement.\
 Vous pouvez sortir par la porte ouest. <a href='page_380'>Rendez-vous au 380. </a>Si vous \
 avez faim, vous avez droit à un Repas ; vous prenez par la même \
 occasion 3 points de CHANCE pour avoir vaincu le Vampire.\
<ul class='options'>\
                <li><a href='./repas'>Voulez vous Prendre un Repas (mangez avant de prendre les objets) ?</a></li>\
                <li><a href='./objet'>Voulez vous prendre les objets ?</a></li>\
                </ul>\
                 </p>\"",
                  {
  actions: {
  repas:function(character, system, action){
                      if((character.qualities.provision>0))
                      {
                        system.setQuality('provision', character.qualities.provision -1);
                        system.setQuality('endurance', character.qualities.endurance +4);
                        //undum.game.nombretentative++; 
                        system.clearLinks('./repas'); 
                        

                      }
        }, 
        objet:function(character, system, action){
            system.setQuality('or', character.qualities.or +30);
              system.addCharacterInventory("livre"); 
              system.addCharacterInventory("batonY"); 
                system.clearLinks('./objet'); 
                $( "ul.options" ).remove();
                system.write( "<p class='transient'> <strong>il vous faut lachez un objet</strong>  </p></br>" );
                system.buildMenuCharacterInventory(); 

                 
        }
        }, //ouvre les condifion
       enter: function(character, system, to) {
               system.setQuality('chance', character.qualities.chance +3);
            },
            exit: function(character, system, to) {
              $( "hr" ).remove();
            }

        
      }),
 page_328: new undum.SimpleSituation(
 "<p class='transient'> \
 Les deux morceaux de bois ont la forme d'un Y et sont tout propres, \
 comme s'ils venaient du fond d'une rivière. Vous pouvez les ranger \
 dans votre sac à dos ; ensuite, vous avez le choix entre partir par la \
 porte nord (<a href='page_73'>rendez-vous au 73)</a>, ou rester et examiner la corde <a href='page_125'>(rendez-\
 vous au 125).</a> Si vous prenez les morceaux de bois, vous devrez vous \
 séparer d'une pièce de votre équipement.\
 </p>\""),
 page_329: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous mettez en marche, et vous vous retrouvez au milieu d'un \
 passage nord-sud. Il y a une porte dans le mur ouest et, face à la porte, \
 un couloir part vers l'est. En direction du nord, vous apercevez une \
 porte à quelques mètres de distance. Au sud vous distinguez un \
 croisement. Où déciderez-vous d'aller ?\
 À la porte du mur ouest ? <a href='page_157'> Rendez-vous au 157 </a>\
 A la porte située au nord ? <a href='page_392'> Rendez-vous au 392 </a>\
 À l'est?<a href='page_299'> Rendez-vous au 299 </a>\
 Au sud ?<a href='page_238'> Rendez-vous au 238 </a>\
 </p>\""),
 page_330: new undum.SimpleSituation(
 "<p class='transient'> \
 Les tonneaux contiennent un liquide de couleur marron clair. Vous le \
 reniflez. On dirait du rhum. Vous le goûtez. Il s'agit bien de rhum, en \
 effet. Vous joignez vos mains en forme de coupe, vous y recueillez un \
 peu du breuvage et vous en buvez une gorgée. Sacrebleu, c'est bon ! \
 Vous regagnez 6 points d'ENDURANCE et 1 point de CHANCE. \
 <a href='page_81'> Rendez-vous maintenant au 81.</a>\
 </p>\"" , //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.setQuality('endurance', character.qualities.endurance +6);
               system.setQuality('chance', character.qualities.chance +1);
            }
        }),
 page_331: new undum.SimpleSituation(//BAGARRE
 "<p class='transient'> \
 La créature a la taille d'un homme, mais ses longs bras semblent très \
 puissants. Menez cette bataille :\
 HABILETÉ : 8 ENDURANCE : 8\
 Si vous êtes vainqueur, vous pouvez partir en direction du nord \
  <ul class='options'>\
                <li><a href='./attack'>Attaquez la créature!</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
            console.log("the system is " + system); 
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_331'][0].monstre[0]);    
                            
                        if (undum.game.bestiaire['page_331'][0].monstre[0].endurance <=0)
                        {
                          
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_331'][0].monstre[0].nom+"!!"
                                         + " <a href='page_287'>(rendez-vous au 287).</a>" 
                                         +"   </p>" ); 
                         
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            
                        }
                    

                   }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
           }
       }
       ),
 page_332: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous trouvez devant une porte qui barre le passage à l'extrémité \
 d'un couloir est-ouest. Pour franchit la porte, <a href='page_329'>rendez-vous au 329.</a> Vers \
 l'ouest, le passage tourne au nord. Pour prendre cette direction, \
<a href='page_4'> rendez-vous au 4.</a>\
 </p>\""),
 page_333: new undum.SimpleSituation(//bagarre situation 
 "<p class='transient'> \
 Vous brandissez votre épée en direction de la créature, mais celle-ci \
 tend le bras et attrape la lame dans sa main ! Sa force est si grande que \
 votre épée en devient presque totalement inefficace. Vous êtes saisi de \
 panique en vous en rendant compte, mais il faut poursuivre le combat.\
 TROLL VAMPIRE HABILITÉ: 10 ENDURANCE: 10\
 Si vous terrassez le vampire, rendez-vous au 327.\
 Si vous voulez essayer de prendre la fuite, vous ne pourrez le faire \
 qu'après avoir mené six assauts et seulement si vous avez de la \
 chance.\
  <ul class='options'>\
                <li><a href='./attack'>Attaquez le TROLL VAMPIRE !</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
            console.log("the system is " + system); 
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_333'][0].monstre[0]);    
                            
                        if (undum.game.bestiaire['page_333'][0].monstre[0].endurance <=0)
                        {
                          
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_333'][0].monstre[0].nom+"!!"
                                         + " <a href='page_327'>rendez-vous au 327. </a> " 
                                         +"   </p>" ); 
                          
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            undum.game.nombrederound++; 
                        }
                          if(undum.game.nombrederound == 5)
                          {
                               system.write( "<p class='transient'> <ul class='options'> "
                                +" <a href='./fuite'>vous pouvez prendre la fuite !</a></ul></p>") 
                          }
                    

                   }, 
                   fuite: function( character, system, action) {
                    var result = system.rnd.dice(2,6) ; 
                        if( (result >= 11) && (character.qualities.chance< 11))  
                    {
                          system.write( "<p class='transient'><strong>pas de chance</strong></p><br>") ; 
                          system.doLink( 'page_224' );

                    }
                    else
                    {
                        system.write( "<p class='transient'>vous pouvez vous enfuir"
                        +" par la porte ouest (<a href='page_380'>rendez-vous au 380)</a> </p>") ;
                       
                    }
                   }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
           }
       }
       ),
 page_334: new undum.SimpleSituation(
 "<p class='transient'> \
 Tandis que vous lui parlez, le vieil homme se lève. « - Mon Dieu, mon \
 Dieu, un étranger ! s'exclame-t-il, mais entrez donc, cher Monsieur, le \
 magasin est ouvert. Que puis-je vous proposer 1 Qu'aimeriez-vous \
 acheter ? Qu'est-ce qui vous ferait plaisir ? Dans quelle direction \
 allez-vous ? Au nord ? A l'ouest ? »\
 Vous racontez alors votre histoire au vieil homme. Il vous écoute avec \
 attention, puis répond: «-Je vois, je vois, dans ce cas, vous allez sans \
 nul doute avoir besoin d'une de mes Chandelles Bleues. Ce sera 20 \
 Pièces d'Or, s'il vous plaît. En espèces, si ça ne vous dérange pas. Je \
 sais, je sais, c'est cher, mais tout est cher de nos jours, n'est-il pas vrai \
 ? Il n'y a pas si longtemps, elles valaient 5 Pièces d'Or, mais vous \
 savez à quel point le prix de la cire a augmenté depuis la Longue et \
 Sombre Nuit ; ah ! mais non, suis-je bête, vous n'êtes pas au courant, \
 puisque vous ne venez pas de là-bas ; de toute façon, croyez-moi, je \
 peux vous garantir que le prix en vaut la chandelle, vous pourriez bien \
 en avoir besoin plus tôt que vous ne croyez... »\
 Si vous décidez d'acheter une chandelle, payez-en le prix et inscrivez-\
 la sur votre Liste d'Équipement.\
 Peu à peu, le bavardage du vieil homme vous fatigue ; aussi quittez-\
 vous la pièce pour aller au nord.<a href='page_292'> Rendez-vous au 292.</a>\
 </p>\""),
 page_335: new undum.SimpleSituation(
 "<p class='transient'> \
 <a href='page_182'>Rendez-vous au 182. </a>\
 </p>\""),
 page_336: new undum.SimpleSituation(
 "<p class='transient'> \
 <img  src='media/img/336_img.JPG' class='float_center'>\
 Vous vous trouvez dans une petite pièce où règne une odeur \
 repoussante. Vous remarquez qu'il y a deux portes : une à l'ouest et \
 une autre au sud, derrière vous. Les rares meubles disséminés dans la \
 pièce ont été fabriqués avec des morceaux de vieux bateaux. Il semble \
 qu'il n'y ait rien de bien intéressant dans cet endroit, à l'exception d'un \
 trousseau de clés accroché au mur. Un vieil homme vêtu de haillons \
 est endormi sur un « banc » qui n'est, en fait, qu'une barque coupée en \
 deux, et ronfle bruyamment. A côté de lui, un chien au poil marron, à \
 l'air méchant, les yeux rouges et les dents noires, vous fixe d'un regard \
 soupçonneux. Vous l'avez réveillé en entrant. Il émet du fond de sa \
 gorge un grognement peu amical. Qu'allez-vous faire ?\
 Sortir sur la pointe des pieds par la porte sud ? <a href='page_66'>Rendez-vous au 66</a>\
 Frapper à la porte derrière vous et toussoter pour réveiller le vieil \
 homme ? <a href='page_172'>Rendez-vous au 172</a>\
 Bondir dans la pièce en brandissant votre épée pour attaquer le chien ? \
<a href='page_249'> Rendez-vous au 249 </a>\
 </p>\""),
 page_337: new undum.SimpleSituation(
 "<p class='transient'> \
 <img  src='media/img/101_img.JPG' class='float_right'>\
 Vous ne découvrez aucun passage secret, mais alors que vous sondez \
 les murs vous entendez un déclic. Vous vous sentez soudain tout \
 étourdi et vous vous écroulez sur le sol. Lorsque vous reprenez \
 connaissance, vous ne reconnaissez pas le décor autour de vous. \
 <a href='page_267'> Rendez-vous au 267.</a>\
 </p>\""),
 page_338: new undum.SimpleSituation(//BAGARRE
 "<p class='transient'> \
 Vous approchez prudemment de la statue. Soudain, vous faites volte-\
 face en entendant un bruit de pas derrière vous, mais ce n'est qu'un rat. \
 Vous essayez de retirer la pierre précieuse, mais elle est solidement \
 sertie. Vous tentez de l'enlever avec la pointe de votre épée et, tandis \
 que vous vous efforcez d'arriver à vos fins, vous entendez un \
 grincement qui ne présage rien de bon. A votre grande terreur, la \
 statue se met à bouger ! Vous faites un bond en arrière, et vous tirez \
 votre épée. Le CYCLOPE DE FER tourne la tête vers vous et descend \
 de son piédestal. Il faut vous battre !\
 CYCLOPE DE FER HABILETÉ : 10 ENDURANCE : 10\
 <ul class='options'>\
                <li><a href='./attack'>Attaquez le CYCLOPE DE FER!</a></li>\
                 <li><a href='./fuite'>vous pouvez prendre la fuite !</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
            console.log("the system is " + system); 
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_338'][0].monstre[0]);    
                            
                        if (undum.game.bestiaire['page_338'][0].monstre[0].endurance <=0)
                        {
                          
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_338'][0].monstre[0].nom+"!!"
                                         + " <a href='page_75'>rendez-vous au 75. </a> " 
                                         +"   </p>" ); 
                          
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                           
                        }
                          
                    

                   }, 
                   fuite: function( character, system, action) {
                    system.setQuality('endurance', character.qualities.endurance -2);
                    if(character.qualities.endurance <= 0){
                        system.doLink('death');
                    }
                    else{
                      system.write( "<p class='transient'>vous pouvez vous enfuir"
                        +" en repassant la porte et en retournant à la bifurcation <a href='page_93'>rendez-vous au 93</a> </p>") ;
                    }
                   }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
            $( "hr" ).remove();
           }
       }),
 page_339: new undum.SimpleSituation(//malus
 "<p class='transient'> \
 A l'évidence, la serrure n'est guère solide ; elle saute immédiatement \
 en effet, et atterrit quelques mètres plus loin. Vous soulevez le lourd \
 couvercle et vos yeux s'ouvrent tout grands en voyant l'éclat d'or qui \
 en jaillit. Il y a un bon nombre de Pièces d'Or, à l'intérieur. Dans un \
 coin est posée une petite bouteille noire munie d'un bouchon de verre \
 qui la clôt hermétiquement. La bouteille contient un liquide dont vous \
 ignorez la nature. Vous trouvez également dans le coffre un gant de \
 soie noire. Mais tandis que vous admirez ce trésor, vous entendez un \
 déclic et aussitôt, vous grimacez de douleur car une fléchette vient de \
 vous atteindre à l'estomac. Lancez un dé et ôtez le chiffre obtenu de \
 vos points d'ENDURANCE pour savoir quel est exactement l'effet du \
 poison dont la fléchette est imprégnée. Si vous êtes toujours vivant, \
\
 <ul class='options'>\
                <li><a href='./lucktest'>Tentez votre chance ?</a></li>\
                </ul>\
                 </p>\"",
      {
          

            actions: {
                lucktest: function(character, system, action) {
                
                    system.clearLinks('./lucktest'); 
                    var result = system.rnd.dice(1,6); 
                      system.setQuality('endurance', character.qualities.endurance - result);
                      if( character.qualities.endurance > 0)
                      {
                          system.write( "<p class='transient'>vous perdez " +result+ " point d endurance"
                            +" <a href='page_289'>rendez-vous au 289.</a></p><br>") ; 

                        }
                        else{

                           system.doLink('death');
                        }
                        

                    
                   

                }
            }, 
            exit:function(character, system, action) {
                $( "hr" ).remove();
            }
        }),
 page_340: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous tentez de lutter contre le regard du tableau en utilisant divers \
 objets de votre Liste d'Equipement, mais aucun d'entre eux ne se \
 révèle efficace. Vous avez alors la possibilité d'essayer l'une des \
 méthodes suivantes :\
 Lacérer la toile du tableau avec votre épée <a href='page_388'>  Rendez-vous au 388 </a>\
 Brandir l'Œil du Cyclope devant le portrait <a href='page_31'> Rendez-vous au 31</a>\
 Le transpercer à l'aide d'un épieu <a href='page_241'> Rendez-vous au 241 </a>\
 Lui jeter un morceau de Fromage <a href='page_45'> Rendez-vous au 45 </a>\
 </p>\""),
 page_341: new undum.SimpleSituation(
 "<p class='transient'> \
 Le vieil homme vous lance un regard courroucé lorsque vous entrez \
 dans la pièce. Vous pouvez, si vous le souhaitez, repartir aussitôt après \
 vous être excusé en disant que vous vous êtes perdu.\
 Dans ce cas, vous sortez soit par la porte ouest<a href='page_46'>Rendez-vous au 46</a> (rendez-vous au 46), \
 soit par la porte sud (<a href='page_392'>rendez-vous au 392).</a> Vous pouvez également \
 choisir de rester et de parler au vieil homme. Dans cette hypothèse, \
 vous avez le choix entre lui parler d'une manière <a href='page_220'>(rendez-vous au 220) </a>  \
 ou exiger d'un ton péremptoire qu'il réponde à vos questions \
 (<a href='page_191'>rendez-vous alors au 191)</a>.\
 </p>\""),
 page_342: new undum.SimpleSituation(
 "<p class='transient'> \
 Le RAT-GAROU s'effondre sur le sol. Vous fouillez son corps et vous \
 trouvez sur lui 2 Pièces d'Or, le prix de sa dernière traversée. Vous le \
 maudissez d'avoir essayé de vous escroquer. Ajoutez les deux Pièces \
 d'Or à votre pécule, et passez de l'autre côté de la rivière en ramant \
 vous-même. Vous gagnez 2 points de CHANCE. Vous amarrez \
 l'embarcation à la rive nord et vous jetez un coup d'œil vers le cadavre \
 du Rat. Le corps a disparu ! <a href='page_7'>Rendez-vous au 7</a>\
 </p>\"", //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.setQuality('or', character.qualities.or +2);
               system.setQuality('chance', character.qualities.chance +2);
               
            }
        }
        ),
 page_343: new undum.SimpleSituation(
  "<p class='transient'> \
 La porte s'ouvre à la volée et vous tombez en avant, tête la première.\
 Vous avez soudain un coup au cœur en réalisant que vous ne tombez \
 pas sur le sol, mais dans une fosse. Par chance, celle-ci n'est pas très \
 profonde et vous atterrissez moins de deux mètres plus bas. Vous \
 perdez 1 point d'ENDURANCE en raison des contusions provoquées \
 par cette chute, vous vous hissez hors de la fosse, et vous sortez de la \
 pièce par la porte en prenant la direction de l'ouest.<a href='page_92'> Rendez-vous au 92.</a>\
 </p>\"", //ouvre les condifion
      {
       enter: function(character, system, to) {
              
               system.setQuality('endurance', character.qualities.endurance -1 );
               if(character.qualities.endurance <= 0){
                  system.doLink('death');
               }
               
            }, 
            exit:function(character, system, action) {
                $( "hr" ).remove();
            }
        }
        ),
 page_344: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous rengainez votre épée dans son fourreau et vous avancez vers le \
 bord de la rivière. Pouvez-vous y nager sans risque ? Il n'y a pas \
 d'autre moyen d'atteindre la rive nord ; apparemment, aucun danger \
 immédiat ne semble devoir vous menacer, ni dans l'eau ni sur la berge. \
 Vous remarquez soudain l'éclat d'une épée qui repose au fond de l'eau \
 à quelques pas de vous. Il vous est facile de la ramasser en pataugeant \
 quelque peu dans la rivière. Cette épée est légère, beaucoup plus \
 maniable que la vôtre et sa lame est bien effilée. Cette arme \
 magnifique vous donnera 1 point d'HABILETÉ supplémentaire chaque \
 fois que vous l'utiliserez. Inscrivez-la sur votre Liste d'Équipement. \
 Bientôt, une voix mystérieuse qui semble vous parler à l'intérieur de \
 vous-même vous conseille de jeter votre ancienne épée dans la rivière. \
 Si vous suivez ce conseil, <a href='page_56'>rendez-vous au 56.</a> Si, au contraire, vous \
 préférez conserver les deux épées,<a href='page_153'> rendez-vous au 153.</a>\
 </p>\""),
 page_345: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous suivez le passage qui mène vers l'est sur une distance de \
 plusieurs mètres. Le couloir tourne alors au nord. Bientôt, vous arrivez \
 à une autre bifurcation qui vous laisse le choix entre continuer tout \
 droit (<a href='page_381'>rendez-vous au 381),</a> ou prendre à gauche un passage orienté à \
 l'est, qui plus loin oblique vers le nord <a href='page_311'>(rendez-vous au 311).</a> \
 </p>\""),
 page_346: new undum.SimpleSituation(//Bonus 
 "<p class='transient'> \
 Les cartes peuvent être avec vous ou contre vous. Vous avez deux \
 possibilités.\
 Vous pouvez d'une part vous en remettre entièrement aux cartes. Dans \
 ce cas, lancez deux dés. Si le chiffre obtenu est pair, vous perdez \
 autant de Pièces d'Or ou toutes vos pièces si vous en possédez moins \
 que ce chiffre. Si les dés vous donnent un chiffre impair, vous gagnez \
 autant de Pièces d'Or.\
 Vous pouvez d'autre part vous servir de votre CHANCE pour vous \
 aider à gagner. Tentez votre Chance. Si vous êtes chanceux, lancez \
 deux dés pour savoir combien de Pièces d'Or vous avez gagnées. Si \
 vous êtes malchanceux, le chiffre obtenu aux dés vous indiquera \
 combien de Pièces vous avez perdues.\
 Rectifiez en conséquence votre Feuille d'Aventure. Si vous avez \
 gagné, vous prenez 2 points de CHANCE supplémentaires pour saluer \
 votre bonne fortune. Lorsque vous en aurez terminé,<a href='page_131'> rendez-vous au 131.</a>\
 </p>\""),
 page_347: new undum.SimpleSituation(
 "<p class='transient'> \
 <a href='page_182'>Rendez-vous au 182.</a>\
 </p>\""),
 page_348: new undum.SimpleSituation(//situation inventaire 
 "<p class='transient'> \
 Vous êtes au fond d'un trou, quelque peu meurtri mais sans blessure \
 grave. Après vous être relevé, vous regardez autour de vous et vous \
 voyez deux passages : l'un est court, orienté au sud, et mène à une \
 petite pièce ; un autre part vers le nord. Vous vous inquiétez du bruit \
 que vous avez fait en tombant, et plus encore des grognements qui \
 proviennent de la pièce située au sud. Avant d'avoir eu le temps de \
 réfléchir à la question, vous voyez apparaître au coin du couloir une \
 grosse tête repoussante. Un instant plus tard, un TROLL surgit de son antre. \
<img  src='media/img/348_img.JPG' class='float_center'>\
 Vous vous êtes tordu la cheville et vous ne pouvez pas vous \
 déplacer très vite, mais le Troll, lui, est prêt au combat. Il va vous \
 falloir affronter cette brute.<a href='page_331'> Rendez-vous au 331 </a> - mais si vous avez \
 dans votre sac à dos une Potion d'Invisibilité\
  <ul class='options'>\
 <li><a href='./use'>Utilisez la Potion d'Invisibilité ?</a></li>\
 </ul>\
  </p>\"" , //ouvre les condifion
      {
      actions: {
                use: function(character, system, action) {

                    if(system.isItemExistInventory("potion invi")){
          
                     system.doLink('page_51');
                    }
                    else
                    {
                  system.write( "<p class='transient'>vous n\'avez pas cette potion  "
                          +"  </p>") ;
                    }

                    system.clearLinks('./use');

                }
            },
       enter: function(character, system, to) {
              
            }, 
      exit: function(character, system, to) {
            $( "hr" ).remove();
      }
        }),
 page_349: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous avancez le long du passage sur une distance de quelques mètres \
 et vous arrivez bientôt à un cul-de-sac. Vous avez le choix entre \
 retourner au croisement (<a href='page_267'>rendez-vous au 267)</a> ou explorer le cul-de-\
 sac <a href='page_30'> (rendez-vous au 30).</a>\
 </p>\""),
 page_350: new undum.SimpleSituation(//combat contre des poisson 
 "<p class='transient'> \
 La « turbulence » vous entoure et vous sentez frétiller contre vous une \
 multitude de petits poissons. Ils vous écorchent la peau en vous \
 mordant avec agressivité, et vous réalisez alors que vous êtes assailli \
 par des PIRANHAS!\
 Si au cours du combat avec le Crocodile, vous avez réussi à le blesser, \
 vous avez de la chance, car la plupart des poissons carnivores vont \
 s'attaquer au reptile, attirés par le sang qui coule de ses plaies. Mais si \
 vous n'avez pas blessé le Crocodile, les Piranhas se jetteront soit sur \
 vous, soit sur lui, et pour savoir qui sera leur victime, jetez un dé. Si \
 vous faites un 1 ou un 2, la plupart des Piranhas choisiront de \
 s'attaquer à vous. Si vous faites entre 3 et 6, en revanche, la majorité \
 des poissons se précipitera sur le Crocodile.\
 Affrontez les Piranhas comme s'ils étaient une seule et même créature. \
 <ul class='options'>\
                <li><a href='./lucktest'>Tentez votre chance!</a></li>\
                </ul>\
                 </p>\"", //ouvre les condifion chance
      {
          

            actions: {
                lucktest: function(character, system, action) {
                    if( system.rnd.dice(1,6) <= 2 )  
                    {
                          system.write( "<p class='transient'><strong>Pas de chance</strong></p><br>") ; 
                          system.doLink( 'page_351_bis' );

                    }
                    else
                    {
                        system.write( "<p class='transient'>Vous avez de la chance </p>") ;
                        system.doLink( 'page_351_bis2' );
                    }

                }
            }
        }
        ), 
page_351_bis: new undum.SimpleSituation(
 "<p class='transient'> \
  Affrontez les Piranhas comme s'ils étaient une seule et même créature. \
 PIRANHAS HABILETÉ: 5 ENDURANCE: 5\
  <ul class='options'>\
                <li><a href='./attack'>Attack!</a></li>\
                </ul>\
                 </p>\"",  //DEBUG
 {
  actions: {
  attack: function( character, system, action) {
   
                   var result = undum.game.fight(character, system , undum.game.bestiaire['page_350_bis'][0].monstre[0]);    
                    
            if (result == 'victory')
                {
                   system.clearContent('ul');
                   system.clearContent('li');
                  system.clearContent('p');
                  system.animateQuality('chance', character.qualities.chance +1);
                   system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_350_bis2'][0].monstre[0].nom+"!!"
                                 + " <a href='page_7'>Rendez vous au Cliquez Ici !! " 
                                 +" </a>."
                                 + "<ul class='options'>"
                +"<li><a href='./eat'>Voulez vous mangez une ration ?</a></li>"
                +"</ul>  </p>" ); 
                }
                if (result == 'death')
                {
                system.doLink('death');

                } 

                if (result == 'noDeath')
                {
                     
                }
               

           }, 
            eat: function( character, system, action) {
            system.animateQuality('endurance', character.qualities.endurance +4);
            system.setQuality('provision', character.qualities.provision +1);
            system.clearContent('ul');
            system.clearContent('li');
                   
            }
         }
       }
       ),
  page_351_bis2: new undum.SimpleSituation(
 "<p class='transient'> \
 c'est le Crocodile qui est visé, vous n'aurez à combattre que \
 ceux qui ne se sont pas joints à leurs congénères. Vos attaquants \
 seront alors beaucoup moins nombreux, et voici leurs points :\
 PIRANHAS HABILITÉ : 5 ENDURANCE :1\
     <ul class='options'>\
                <li><a href='./attack'>Attack!</a></li>\
                </ul>\
                 </p>\"",  //DEBUG
 {
  actions: {
  attack: function( character, system, action) {
   
                   var result = undum.game.fight(character, system , undum.game.bestiaire['page_350_bis2'][0].monstre[0]);    
                    
                if (result == 'victory')
                {
                   system.clearContent('ul');
                   system.clearContent('li');
                  system.clearContent('p');
                  system.animateQuality('chance', character.qualities.chance +1);
                   system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_350_bis2'][0].monstre[0].nom+"!!"
                                 + " <a href='page_7'>Rendez vous au Cliquez Ici !! " 
                                 +" </a>."
                                 + "<ul class='options'>"
                +"<li><a href='./eat'>Voulez vous mangez une ration ?</a></li>"
                +"</ul>  </p>" ); 
                }
                if (result == 'death')
                {
                system.doLink('death');

                } 

                if (result == 'noDeath')
                {
                     
                }
               

           }, 
          eat: function( character, system, action) {
            system.animateQuality('endurance', character.qualities.endurance +4);
            system.setQuality('provision', character.qualities.provision +1);
            system.clearContent('ul');
            system.clearContent('li');
                   
            }
         }
       }
       ),
 page_351: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes de retour à la bifurcation, et vous prenez la direction de \
 l'est. <a href='page_76'>Rendez-vous au 76.</a>\
 </p>\""),//malus
 page_352: new undum.SimpleSituation(
 "<p class='transient'> \
 Tandis que vous vous approchez de lui, ses yeux vous fixent avec une \
 intensité qui révèle toute l'étendue de son pouvoir. Vous vous sentez \
 faiblir sous ce regard implacable. Vous perdez 1 point d'ENDU-\
 RANCE. Peu à peu, votre volonté vous échappe. Allez-vous tirer votre \
 épée et le combattre (<a href='page_74'>rendez-vous alors au 74),</a> ou chercher dans votre \
 sac à dos quelque autre moyen de l'attaquer (<a href='page_279'>\
  rendez-vous dans ce cas au 279) ?</a>\
 </p>\""),
 page_353: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous fendez lorsque le vieil homme bondit sur vous les bras \
 tendus en avant, et vous lui passez votre épée au travers de la poitrine. \
 Mais aussitôt, vous vous maudissez d'avoir agi ainsi, car vous réalisez \
 que le vieillard ne cherchait pas à vous attaquer ; son excitation était \
 simplement due au soulagement qu'il éprouvait d'être enfin libéré \
 après avoir passé apparemment un bon nombre d'années en prison. \
 Vous ne pouvez plus maintenant lui poser de questions sur les périls \
 qui vous attendent, et vous vous êtes privé ainsi d'une précieuse source \
 de renseignements.<a href='page_314'> Rendez-vous au 314 </a>pour poursuivre votre chemin.\
 </p>\""),
 page_354: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous trouvez au milieu d'une courbe, et vous avez le choix entre \
 suivre le passage vers l'ouest ou vers le sud.\
 Pour aller à l'ouest<a href='page_308'> Rendez-vous au 308 </a>\
 Pour aller au sud <a href='page_52'> Rendez-vous au 52</a>\
 Si vous voulez essayer de découvrir des passages secrets en allant vers \
 l'ouest <a href='page_14'>Rendez-vous au 14 </a>\
 Si vous voulez essayer de découvrir des passages secrets en allant vers \
 le sud <a href='page_234'>Rendez-vous au 234 </a>\
 </p>\""),
 page_355: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous tâtonnez le long du mur, mais sans trouver d'issue par où vous \
 échapper. Le bruit vous fait hurler de douleur ! Vous perdez encore 1 \
 point d'HABILITÉ. Vous pouvez tenter de trouver une porte soit dans \
 le mur est (<a href='page_181'>rendez-vous au 181)</a>\
  soit dans le mur nord <a href='page_265'>(rendez-vous au 265).</a>\
 </p>\""),
 page_356: new undum.SimpleSituation(
 "<p class='transient'> \
 Le vieil homme lève les yeux vers vous, vous rend votre salut et vous \
 fait signe de vous asseoir. Vous vous asseyez à la table, et vous \
 remarquez qu'il vous observe. Son regard insistant a un pouvoir \
 hypnotique, mais vous vous en rendez compte à temps pour détourner \
 les yeux. Il ouvre alors la bouche pour parler, et à votre grande \
 stupeur, au lieu d'une simple voix d'homme, vous entendez résonner \
 dans toute la pièce une voix d'une extraordinaire puissance qui semble \
 provenir des murs eux-mêmes. Vous jetez à nouveau un coup d'œil \
 vers le vieillard et vous le voyez se métamorphoser sous vos yeux. Sa \
 taille devient imposante. Ses haillons se transforment en longues \
 robes de velours et d'or. Il vous contemple fixement de ses veux noirs. \
 Il vous attendait... <a href='page_358'>Rendez-vous au 358.</a>\
 </p>\""),
 page_357: new undum.SimpleSituation(
 "<p class='transient'> \
 Le passage mène vers le nord ; bientôt, il s'élargit en une grande \
 caverne aux murs de roche brute. Il semble qu'il n'y ait pas d'issue à la \
 caverne en dehors du chemin que vous venez d'emprunter pour y \
 parvenir. Vous pouvez choisir de revenir sur vos pas jusqu'à la \
 bifurcation (<a href='page_269'>rendez-vous au 269)</a>, ou d'entrer dans la caverne <a href='page_57'>(rendez-\
 vous au 57).</a>\
 </p>\""),
 page_358: new undum.SimpleSituation(
 "<p class='transient'> \
 <img  src='media/img/358_img.JPG' class='float_center'>\
 Le combat va faire appel à toute votre force et à toute votre ruse. \
 Votre adversaire s'est volatilisé, puis il a reparu à l'autre bout de la \
 pièce devant une porte munie de deux serrures. Comment allez-vous \
 l'affronter ?\
 En avançant sur lui, votre épée à la main ?<a href='page_142'> Rendez-vous au 142 </a>\
 En cherchant dans votre sac à dos l'arme qui vous semblera la plus \
 efficace pour le combattre ? <a href='page_105'>Rendez-vous au 105</a>\
 En essayant de découvrir autour de vous quelque chose qui pourrait \
 vous servir à l'attaquer ou à vous défendre ? <a href='page_389'>Rendez-vous au 389</a>\
 </p>\""),
 page_359: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous trouvez à une croisée de chemins.\
 Pour aller au nord <a href='page_190'>Rendez-vous au 190 </a>\
 Pour aller au sud  <a href='page_94'>Rendez-vous au 94 </a>\
 Pour aller à l'est <a href='page_121'>Rendez-vous au 121 </a>\
 Pour aller à l'ouest <a href='page_385'>Rendez-vous au 385</a>\
 </p>\""),
 page_360: new undum.SimpleSituation(
 "<p class='transient'> \
 La porte claque bruyamment derrière vous. Vous vous retrouvez dans \
 un passage orienté vers le nord. Vous le suivez sur une distance de \
 plusieurs mètres ; il tourne alors vers l'ouest, et vous continuez dans \
 cette direction. Un peu plus loin, vous trouvez une étroite ouverture \
 dans le mur nord, et vous décidez de la franchir. <a href='page_89'>Rendez-vous au 89.</a>\
 </p>\""),
 page_361: new undum.SimpleSituation(//situation 
 "<p class='transient'> \
 Vous décrochez la clé ; elle porte le numéro 125. Mais vous n'avez pas \
 le loisir de l'examiner très longuement, car vos poumons vous brûlent. \
 Lancez deux dés. Si le chiffre obtenu est égal ou inférieur à votre total \
 d'HABILETÉ...\
 <ul class='options'>\
                <li><a href='./lucktest'>Tester votre habilite</a></li>\
                </ul>\
                 </p>\"",
      {
        actions: {
                lucktest: function(character, system, action) {
                 system.clearLinks('./lucktest'); 
                    
                    if( system.rnd.dice(2,6) <= character.qualities.habilite )  
                    {
                          system.write( "<p class='transient'>vous parvenez à traverser la pièce et "
                            +" à atteindre la porte nord  <a href='page_136'>(rendez-vous au 136)</a></p><br>") ; 
                        

                    }
                    else
                    {
                      system.setQuality('endurance', character.qualities.endurance -3);
                       if(character.qualities.endurance <= 0)
                       {
                          system.doLink('death');
                       }
                       else
                       {
                      system.setQuality('habilite', character.qualities.habilite -2);

                        system.write( "<p class='transient'>pas de chance "
                          +" vous ne pouvez éviter d'inspirer une bouffée de gaz "
                          +"  Vous perdez 2 points d'HABILETÉ et 3 points d'ENDURANCE"
                          +"  puis vous vous précipitez vers la porte<a href='page_136'>(rendez-vous au 136) </p>") ;
                     }
                    }

                }
            },
       enter: function(character, system, to) {
               system.addCharacterInventory("clef-125"); 
            }, 
            exit:function(character, system, to) {
                $( "hr" ).remove();
            }
        }),
 page_362: new undum.SimpleSituation(
 "<p class='transient'> \
 Tandis que vous sondez les murs le long du passage, vous découvrez \
 dans le mur ouest une porte secrète qui s'ouvre et que vous \
 franchissez. <a href='page_177'>Rendez-vous au 177.</a>\
 </p>\""),
 page_363: new undum.SimpleSituation(
 "<p class='transient'> \
 Un peu plus loin, dans le mur ouest, vous trouvez une autre porte \
 semblable à la précédente. Vous tendez l'oreille, et vous faites une \
 grimace en entendant des voix chanter si fort et si faux que jamais \
 vous n'auriez cru possible de parvenir à une telle cacophonie. Voulez-\
 vous entrer dans la pièce pour voir qui produit ce vacarme <a href='page_370'>(rendez-\
 vous au 370)</a>, ou préférez-vous poursuivre votre chemin le long du \
 passage (<a href='page_42'>rendez-vous alors au 42)</a> ?\
 </p>\""),
 page_364: new undum.SimpleSituation(
 "<p class='transient'> \
 Lorsque vous poussez la poignée, une petite porte de pierre s'ouvre en \
 coulissant dans la roche. Vous avez le choix entre n'y prêter aucune \
 attention et revenir à la bifurcation (<a href='page_256'>rendez-vous au 256),</a> ou au \
 contraire la franchir (<a href='page_373'>rendez-vous alors au 373).</a> Mais il vous faut \
 prendre une décision rapide, car la porte ne va pas tarder à se refermer \
 d'elle-même.\
 </p>\""),
 page_365: new undum.SimpleSituation(//BAGARRE 
 "<p class='transient'> \
 Les FARFADETS vous attaquent un par un.\
 il y'a cinq FARFADET\
  <ul class='options'>\
                <li><a href='./attack'>Attaquez les farfadets!</a></li>\
                 <li><a href='./fuite'>Vous vous enfuyer!</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
            console.log("the system is " + system); 
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_365'][0].monstre[undum.game.nombrederound]);    
                            
                        if (undum.game.bestiaire['page_365'][0].monstre[undum.game.nombrederound].endurance <=0)
                        {
                          
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_365'][0].monstre[undum.game.nombrederound].nom+"!!"
                                         + " " 
                                         +"   </p>" ); 
                           undum.game.nombrederound++; 
                               if(undum.game.nombrederound == 5)
                                {
                                  system.clearLinks('./attack'); 
                                  system.clearLinks('./fuite'); 
                                     system.write( "<p class='transient'><a href='page_183'>Vous avez tué les farfadets rendez-vous au 183</a>  </p>") 
                                }
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            
                        }
                    

                   }, 
                   fuite: function( character, system, action) {
                    system.setQuality('endurance', character.qualities.endurance -2);
                    if(character.qualities.endurance <= 0){
                        system.doLink('death');
                    }
                    else{
                      system.clearLinks('./attack'); 
                                  system.clearLinks('./fuite'); 
                      system.write( "<p class='transient'>vous pouvez vous enfuir"
                        +" <a href='page_237'>rendez-vous au 93</a> </p>") ;
                    }
                   }

                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
           }
       }
       ),
 page_366: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous suivez un passage orienté au nord. Au bout d'une certaine \
 distance, il tourne brusquement vers l'est. Vous poursuivez votre \
 chemin vers l'est, et vous passez bientôt devant une ouverture étroite \
 aménagée dans le mur nord. Vous pouvez franchir cette ouverture<a href='page_89'> (et \
 vous rendre au 89),</a> ou continuer vers l'est <a href='page_62'>(et vous rendre au 62).</a>\
 </p>\""),
 page_367: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous arrivez à une autre bifurcation. Si vous voulez prendre la \
 direction de l'ouest, <a href='page_235'>rendez-vous au 235. </a>Si vous préférez aller vers \
 l'est, <a href='page_323'>rendez-vous au 323.</a>\
 </p>\""),
 page_368: new undum.SimpleSituation(//situation malus 
 "<p class='transient'> \
 </p>\"", //ouvre les condifion
 {
       enter: function(character, system, action) {
               
               system.setQuality('endurance', character.qualities.endurance -3);
                if(character.qualities.endurance <= 0)
                {
                  system.write( "<p class='transient'>la flamme vous tue"
                        +" <a href='death'>rendez-vous avec la mort</a> </p>") ;
                }
                else
                {
                  system.write( "<p class='transient'>Le rire du Sorcier résonne dans la pièce. « Nous allons voir lequel de"
                  +"  nous deux est une souris ! » s'exclame-t-il, et il lève la main. Il claque"
                  +" alors des doigts, et une flamme jaillissant de sa main vous atteint en"
                  +" pleine poitrine."
                    +" Vous perdez 3 points d'ENDURANCE"
                        +" Il va vous falloir tenter autre chose : "
                        +" Tirer votre épée et vous ruer sur lui <a href='page_142'> Rendez-vous au 142 </a>"
                        +"  Essayer une autre des armes rangées dans votre sac à dos <a href='page_105'>Rendez-vous  au 105 </a></p>") ;
                }
            },
            exit: function(character, system, to) {
              $( "hr" ).remove();
            }

        
      }
      ),
 page_369: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous avalez une gorgée du liquide <a href='page_109'>(rendez-vous au 109).</a>\
 </p>\""),
 page_370: new undum.SimpleSituation(
 "<p class='transient'> \
 La porte s'ouvre sur une petite pièce. Elle est sale et en désordre. Une \
 paillasse est posée dans un coin. Au centre de la pièce, fixée sur une \
 table de bois, une chandelle brûle et éclaire l'endroit d'une lueur \
 vacillante. Il y a sous la table une petite boîte. Autour de cette même \
 table sont assises deux petites créatures à la peau couverte de verrues ; \
 les deux êtres sont vêtus de cuirasses. Ils boivent une espèce de grog, \
 et en voyant la façon dont ils se lèvent en titubant à votre entrée, vous \
 en déduisez qu'ils sont ivres. Vous avez le choix entre tirer votre épée \
 et bondir sur eux (<a href='page_116'>rendez-vous au 116),</a> ou refermer immédiatement la \
 porte et courir le long du passage (<a href='page_42'>rendez-vous alors au 42)</a>\
 </p>\""),
 page_371: new undum.SimpleSituation(//bonus 
 "<p class='transient'> \
 Vous êtes en sécurité pour le moment, et vous explorez la caverne ; \
 bientôt, vous découvrez un passage qui vous permet de continuer vers \
 l'ouest.<a href='page_274'> Rendez-vous au 274.</a> Vous pouvez vous reposer et prendre un \
 Repas avant de repartir. Ajoutez 3 points à votre total de CHANCE \
 pour avoir vaincu le Dragon.\
<ul class='options'>\
                <li><a href='./repas'>Voulez vous Prendre un Repas ?</a></li>\
                </ul>\
                 </p>\"",
                  {
  actions: {
  repas:function(character, system, action){
                      if((character.qualities.provision>0))
                      {
                        system.setQuality('provision', character.qualities.provision -1);
                        system.setQuality('endurance', character.qualities.endurance +4);
                        //undum.game.nombretentative++; 
                        system.clearLinks('./repas'); 
                        

                      }
        }
        }, //ouvre les condifion
       enter: function(character, system, to) {
               
               system.setQuality('chance', character.qualities.chance +3);
            },
            exit: function(character, system, to) {
              $( "hr" ).remove();
            }

        
      }),
 page_372: new undum.SimpleSituation(
 "<p class='transient'> \
 Le combat s'engage !\
 <img  src='media/img/372_img.JPG' class='float_center'>\
 CHEF DES FARFADETS et sont SERVITEUR\
 Affrontez-les un par un. Si vous les terrassez tous deux, rendez-vous \
 au 21.\
  <ul class='options'>\
                <li><a href='./attack'>Attaquez les farfadets!</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_372'][0].monstre[undum.game.nombrederound]);    
                            
                        if (undum.game.bestiaire['page_372'][0].monstre[undum.game.nombrederound].endurance <=0)
                        {
                          system.clearLinks('./attack'); 
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_372'][0].monstre[undum.game.nombrederound].nom+"!!"
                                         + " <a href='page_21'>Vous avez tué les 2 farfadets rendez-vous au 21</a>" 
                                         +"   </p>" ); 
                          
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            
                        }
                    

                   }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
           }
       }),
 page_373: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous trouvez dans un cul-de-sac à l'extrémité sud d'un passage \
 nord-sud. Si vous allez vers le nord, vous parviendrez à un croisement. \
 <a href='page_85'>Rendez-vous au 85.</a>\
 </p>\""),
 page_374: new undum.SimpleSituation(
 "<p class='transient'> \
 Les Squelettes ne remarquent pas votre présence et disparaissent par \
 la porte qui ouvre sur le hangar à bateaux. Avec un soupir de \
 soulagement, vous poursuivez votre chemin pour essayer la porte \
 située à l'extrémité nord du passage. Mais avant de repartir, vous \
 pouvez, si vous le désirez, prendre un repas. Vous gagnez par la même \
 occasion 2 points de CHANCE pour avoir réussi à échapper aux \
 squelettes.<a href='page_207'> Rendez-vous au 207.</a>\
 <ul class='options'>\
                <li><a href='./repas'>Voulez vous Prendre un Repas ?</a></li>\
                </ul>\
                 </p>\"",
                  {
  actions: {
  repas:function(character, system, action){
                      if((character.qualities.provision>0))
                      {
                        system.setQuality('provision', character.qualities.provision -1);
                        system.setQuality('endurance', character.qualities.endurance +4);
                        //undum.game.nombretentative++; 
                        system.clearLinks('./repas'); 
                        

                      }
        }
        }, //ouvre les condifion
       enter: function(character, system, to) {
               
               system.setQuality('chance', character.qualities.chance +2);
            },
            exit: function(character, system, to) {
              $( "hr" ).remove();
            }

        
      }),
 page_375: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes de retour à la bifurcation, et, cette fois, vous prenez la \
 direction du nord.<a href='page_5'> Rendez-vous au 5.</a>\
 </p>\""),
 page_376: new undum.SimpleSituation(//rajout po choix repas 
 "<p class='transient'> \
 Vous avez le droit de ramasser toutes les pièces de cuivre qui se \
 trouvent sur la table. Elles ont une valeur totale de 4 Pièces d'Or. \
 Ensuite, vous partez par la porte. <a href='page_291'> Rendez-vous au 291.</a> Vous pouvez, si \
 vous le désirez, vous arrêter pour prendre un repas, et vous bénéficiez \
 également de 3 points de CHANCE supplémentaires.\
  <ul class='options'>\
                <li><a href='./repas'>Voulez vous Prendre un Repas ?</a></li>\
                </ul>\
                 </p>\"",
                  {
  actions: {
  repas:function(character, system, action){
                      if((character.qualities.provision>0))
                      {
                        system.setQuality('provision', character.qualities.provision -1);
                        system.setQuality('endurance', character.qualities.endurance +4);
                        //undum.game.nombretentative++; 
                        system.clearLinks('./repas'); 
                        

                      }
        }
        }, //ouvre les condifion
       enter: function(character, system, to) {
               system.setQuality('or', character.qualities.or +4);
               system.setQuality('chance', character.qualities.chance +3);
            },
            exit: function(character, system, to) {
              $( "hr" ).remove();
            }

        
      }
),
 page_377: new undum.SimpleSituation(//combat 
 "<p class='transient'> \
 Lorsque vous tirez votre épée, le DIABLOTIN AILE s'envole et vous \
 attaque ; pendant ce temps, le vieil homme se précipite vers la \
 bibliothèque, manipule un livre qui ouvre une porte secrète, et s'enfuit. \
 Il ne vous reste plus qu'à combattre sa créature.\
 DIABLOTIN AILÉ HABILETÉ: 5 ENDURANCE: 7\
  <ul class='options'>\
                <li><a href='./attack'>Attaquez DIABLOTIN AILE!</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
            console.log("the system is " + system); 
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_377'][0].monstre[0]);    
                            
                        if (undum.game.bestiaire['page_377'][0].monstre[0].endurance <=0)
                        {
                          
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_377'][0].monstre[0].nom+"!!"
                                         + " vous êtes vainqueur, <a href='page_196'>rendez-vous au 196.</a>" 
                                         +"   </p>" ); 
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            
                        }
                    

                   }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
           }
       }),
 page_378: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous essuyez votre épée ensanglantée sur la paillasse. Le sang vert \
 laisse une tache gluante sur la paille. Vous enjambez les cadavres pour \
 vous approcher de la table, et la puanteur des créatures vous donne un \
 haut-le-cœur. Vous ramassez la boîte sous la table et vous l'examinez. \
 C'est une petite boîte en bois munie d'un couvercle attaché par des \
 charnières rudimentaires. Une petite plaque de cuivre y est fixée, sur \
 laquelle on peut lire ce nom : « Farrigo Di Maggio. » Si vous voulez \
 ouvrir cette boîte, <a href='page_296'>rendez-vous au 296.</a> Si vous préférez l'abandonner \
 et quitter la pièce,<a href='page_42'> rendez-vous au 42.</a>\
 </p>\""),
 page_379: new undum.SimpleSituation( //chance
 "<p class='transient'> \
 Tandis que vous vous préparez à abattre votre épée sur le coffre, le \
 roulement devient de plus en plus intense. Vous levez votre arme, et \
 lorsque vous en frappez le couvercle, vous entendez un craquement \
 assourdissant; au même instant, un petit éclair frappe la garde de votre \
 épée et vous envoie rouler sur le sol.\
 Tentez votre Chance. Si vous êtes chanceux, vous avez lâché votre \
 épée juste au moment où l'éclair a jailli; l'épée a éclaté en mille \
 morceaux, mais vous êtes indemne. Si vous êtes malchanceux, il ne \
 reste plus de vous qu'un petit tas de chair calcinée qui forme une \
 silhouette noirâtre sur le sol.\
 La prochaine fois, n'essayez pas de frapper le coffre ! Si vous avez eu \
 de la chance, vous pouvez utiliser les clés rangées dans votre sac à \
 dos. \
  <ul class='options'>\
                <li><a href='./lucktest'>Tentez votre chance ?</a></li>\
                </ul>\
                 </p>\"",
      {
          

            actions: {
                lucktest: function(character, system, action) {
                
                    system.clearLinks('./lucktest'); 
                    if( system.rnd.dice(2,6) < character.qualities.chance )  
                    {
                      system.setQuality('chance', character.qualities.chance -1);
                          system.write( "<p class='transient'><strong>Vous etes chanceux</strong>"
                            +" <a href='page_139'>Rendez-vous alors au 139.</a></p><br>") ; 
                        

                    }
                    else
                    {
                      
                        system.write( "<p class='transient'>vous êtes mort "
                          +" </p>") ;
                       system.doLink('death');
                    }

                }
            }
        }),
 page_380: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous trouvez dans apercevez un croisement direction. Rendez-vous au\
 un étroit passage est-ouest. A l'ouest, vous un \
 peu plus loin. <a href='page_37'>Vous partez dans cette 37.</a>\
 </p>\""),
 page_381: new undum.SimpleSituation(
 "<p class='transient'> \
 Le passage aboutit à une porte de bois aux garnitures de fer. Diverses \
 inscriptions sont gravées sur le panneau, mais il n'en est pas une dont \
 vous compreniez le sens. Vous tendez l'oreille sans rien entendre. \
 Vous pouvez soit ouvrir la porte <a href='page_84'>(et vous rendre au 84)</a>, soit retourner \
 à la bifurcation <a href='page_280'>(et vous rendre au 280).</a>\
 </p>\""),
 page_382: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous brandissez l'Œil devant lui, et la pierre précieuse émet une faible \
 lueur. Vous dirigez cette lueur sur lui et il pousse un hurlement ! Il \
 recule et se blottit dans un coin de la pièce ; un rayon de lumière jaillit \
 alors de la pierre précieuse. Lorsque ce rayon l'atteint, il s'effondre sur \
 le sol, et une extraordinaire transformation s'opère alors. Il se ratatine \
 peu à peu et vieillit à vue d'œil. Sa peau se ride et se craquèle, et il \
 n'est bientôt plus qu'une petite silhouette molle recroquevillée dans \
 son coin. Quelques instants plus tard, la pierre précieuse s'éteint et \
 vous vous approchez du petit tas de vêtements immobiles ; il ne reste \
 de lui que ses robes d'or et de velours. <a href='page_396'>Rendez-vous au 396.</a>\
 </p>\""),
 page_383: new undum.SimpleSituation(//situation choix 
 "<p class='transient'> \
 <img  src='media/img/383_img.JPG' class='float_center'>\
 Au-dessus de la porte, une pancarte indique : « Hangar à Bateaux. » La \
 porte est solidement verrouillée, mais une petite fenêtre munie de \
 barreaux permet de regarder à l'intérieur. Vous apercevez alors un \
 groupe de Squelettes qui travaillent à la construction d'un bateau. \
 Leurs gestes sont rapides et saccadés et on croirait voir bouger des \
 insectes.\
 Si vous possédez une clé portant l'inscription « Hangar à Bateaux » \
 \
 Si vous voulez tenter d'enfoncer la porte <a href='page_264'>Rendez-vous au 264 </a>\
 Si vous préférez retourner sur la berge de la rivière et prendre un autre \
 chemin <a href='page_129'>Rendez-vous au 129</a>\
 <ul class='options'>\
 <li><a href='./use'>Utilisez la clé du hangar ?</a></li>\
 </ul>\
  </p>\"" , //ouvre les condifion
      {
      actions: {
                use: function(character, system, action) {

                    if(system.isItemExistInventory("clés hangar")){
          
                     system.doLink('page_80');
                    }
                    else
                    {
                  system.write( "<p class='transient'>vous n\'avez pas cette clé  "
                          +"  </p>") ;
                    }

                    system.clearLinks('./use');

                }
            },
       enter: function(character, system, to) {
              
            }, 
      exit: function(character, system, to) {
            $( "hr" ).remove();
      }
        }),
 page_384: new undum.SimpleSituation(
 "<p class='transient'> \
 La porte s'ouvre sur un passage que vous suivez en direction du nord. \
 Bientôt, vous arrivez à une courbe qui s'oriente vers l'est. Au bout de \
 quelques mètres, vous parvenez à une bifurcation ; vous avez alors le \
 choix entre aller vers le nord (<a href='page_262'>rendez-vous au 262),</a> ou poursuivre vers \
 l'est <a href='page_307'>(rendez-vous au 307).</a> \
 </p>\""),
 page_385: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous marchez vers l'ouest pendant un certain temps, puis le passage \
 tourne vers le nord. Un peu plus loin, vous arrivez à une bifurcation. \
 Vous pouvez aller au sud (<a href='page_114'>rendez-vous au 114),</a> <a href='page_297'>ou à l'ouest (rendez-\
 vous au 297).</a> Au nord, le passage aboutit très vite à un cul-de-sac. Si \
 vous voulez vous y rendre, <a href='page_398'>allez au 398.</a>\
 </p>\""),
 page_386: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous montez sur le radeau et vous entreprenez de traverser la rivière \
 en naviguant à la perche. L'opération se révèle difficile. Au milieu du \
 cours d'eau, le radeau semble soudain s'animer à sa guise sans plus \
 vous obéir, s'agitant dangereusement en tous sens. Vous vous \
 apercevez que l'embarcation essaie de chavirer d'elle-même pour vous\
 jeter à l'eau ! Vous avez alors deux possibilités : ou bien vous faites \
 confiance à vos propres forces et à votre chance en essayant de tenir \
 bon et de mener malgré tout le radeau de l'autre côté de la rivière, sur \
 la berge nord (<a href='page_55'>rendez-vous alors au 55),</a> ou bien vous sautez à l'eau et \
 vous tentez de regagner à la nage la berge sud <a href='page_166'>(rendez-vous dans ce \
 cas au 166).</a>\
 </p>\""),
 page_387: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous essayez les clés. Aucune ne tourne dans les serrures. Lorsque \
 vous essayez la troisième clé, un mécanisme se déclenche et votre \
 dernier souvenir se résume à une sensation de douleur provoquée par \
 les trois fléchettes qui viennent de vous transpercer la peau. Chacune \
 d'elles est imprégnée d'un poison violent dont l'effet est immédiat. \
 N'utilisez pas cette combinaison de clés la prochaine fois !\
    <ul class='options'>\
                <li><a href='./mort'>Vous êtes Mort!</a></li>\
                </ul>\
                 </p>\"",  //DEBUG
 {
  actions: {
  mort: function( character, system, action) {
                 
           system.doLink('death');

           }
         }
       }),
 page_388: new undum.SimpleSituation(
 "<p class='transient'> \
 Votre épée vous échappe des mains, s'envole et retombe sur vous ; \
 vous avez tout juste le temps de faire un bond de côté pour l'éviter. La \
 lame cependant vous égratigne la joue, et vous perdez 1 point \
 d'ENDU-RANCE. Vous estimez préférable de quitter la pièce. \
 Ramassez votre épée et <a href='page_90'>rendez-vous au 90.</a> Vous perdez 1 point \
 d'HABILETÉ en raison de la peur que vous inspire le pouvoir du \
 Sorcier.\
 </p>\""  , //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.setQuality('endurance', character.qualities.endurance -1);
               if(character.qualities.endurance<=0 )
               {
                  system.doLink('death');
               }
               system.setQuality('habilite', character.qualities.habilite -1);
            }
        }
        ),
 page_389: new undum.SimpleSituation(
 "<p class='transient'> \
 Tentez votre Chance. Si vous êtes chanceux,  Si \
 vous êtes malchanceux,  \
 <ul class='options'>\
                <li><a href='./lucktest'>Tentez votre chance ?</a></li>\
                </ul>\
                 </p>\"",
      {
          

            actions: {
                lucktest: function(character, system, action) {
                
                    system.clearLinks('./lucktest'); 
                    if( system.rnd.dice(2,6) < character.qualities.chance )  
                    {
                      system.setQuality('chance', character.qualities.chance -1);
                          system.write( "<p class='transient'><strong>Vous etes chanceux</strong>"
                            +" <a href='page_289'>rendez-vous au 289.</a></p><br>") ; 
                        

                    }
                    else
                    {
                      system.setQuality('chance', character.qualities.chance -1);
                        system.write( "<p class='transient'><a href='page_112'>rendez-vous au 112.</a> "
                          +" </p>") ;
                       
                    }

                }
            }
        }),
 page_390: new undum.SimpleSituation(
 "<p class='transient'> \
 La Goule a un soubresaut et meurt à vos pieds. Vous fouillez son \
 cadavre, mais vous ne trouvez rien d'intéressant. Une paire de boucles \
 d'oreilles, valant environ 1 Pièce d'Or, traîne dans une de ses poches. \
 Vous pouvez les prendre. Si vous n'avez pas encore fouillé le premier \
 corps, vous le faites maintenant, et vous trouvez 5 Pièces d'Or que \
 vous pouvez également conserver. Si vous le désirez, vous avez le \
 droit de vous reposer et de prendre un Repas en ce lieu. Pour avoir tué \
 la Goule,\
 vous gagnez 2 points de CHANCE. Ensuite, vous aurez le choix entre \
 aller au nord (<a href='page_120'>rendez-vous au 120),</a> ou fouiller le deuxième cadavre \
 (<a href='page_393'>rendez-vous alors au 393).</a>\
  <ul class='options'>\
                <li><a href='./repas'>Voulez vous Prendre un Repas ?</a></li>\
                </ul>\
                 </p>\"",
                  {
  actions: {
  repas:function(character, system, action){
                      if((character.qualities.provision>0))
                      {
                        system.setQuality('provision', character.qualities.provision -1);
                        system.setQuality('endurance', character.qualities.endurance +4);
                        //undum.game.nombretentative++; 
                        system.clearLinks('./repas'); 
                        

                      }
                                            }
        }, 
           enter: function(character, system, action){
            system.setQuality('chance', character.qualities.chance +2);
            system.setQuality('or', character.qualities.or+5);

           }, 
           exit:function(character, system, action){
              $( "hr" ).remove();
           }
        }
        ),
 page_391: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous vous trouvez à l'extrémité sud d'un couloir nord-sud. Au nord, \
 vous apercevez un passage qui part du mur est. Qu'allez-vous faire ?\
 Suivre ce passage ?<a href='page_52'> Rendez-vous au 52</a>\
 Essayer de découvrir un passage secret en allant vers le nord ? \
 <a href='page_362'>Rendez-vous au 362 </a>\
 Prendre la direction du sud en suivant une courbe qui tourne vers \
 l'ouest ?<a href='page_48'> Rendez-vous au 48 </a>\
 </p>\""),
 page_392: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous êtes dans un couloir nord-sud. Vous avez le choix entre aller au \
 nord en franchissant une haute porte de bois (<a href='page_206'>rendez-vous au 206),</a> ou \
 prendre la direction du sud <a href='page_329'> (rendez-vous au 329).</a>\
 </p>\""),
 page_393: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous fouillez les poches de l'autre cadavre et vous y dénichez 8 Pièces \
 d'Or, un vieux morceau de parchemin et une bouteille contenant un \
 liquide ; vous pouvez emporter ces objets. Si vous voulez lire le \
 parchemin, <a href='page_212'>rendez-vous au 212.</a> Si vous voulez boire le liquide qui se \
 trouve dans la bouteille,<a href='page_369'> rendez-vous au 369.</a>\
 </p>\"" , //ouvre les condifion
      {
       enter: function(character, system, to) {
               system.setQuality('or', character.qualities.or +8);
              
            }
        }
),
 page_394: new undum.SimpleSituation(
 "<p class='transient'> \
 Les bottes sont élégantes, taillées dans un cuir rouge foncé. Elles sont \
 beaucoup plus solides que les vôtres et vous vont très bien. Vous faites \
 quelques pas après les avoir passées, mais vous vous apercevez bientôt \
 avec horreur que vous ne pouvez plus bouger ; il semble que les bottes \
 vous enserrent les pieds avec une force considérable. Tandis que vous\
 vous efforcez de vous en libérer, vous entendez un craquement et un \
 bruit de chute :\
 un stalactite vient de tomber ; vous tournez la tête, et vous voyez venir \
 vers vous une immense silhouette noire. A mesure qu'elle s'approche, \
 vous distinguez mieux la silhouette, et votre sang se glace, car c'est \
 une ARAIGNÉE GÉANTE d'un mètre de long au moins qui s'avance \
 vers vous sur ses pattes velues; vous entendez s'agiter ses mandibules \
 <img  src='media/img/394_img.JPG' class='float_center'>\
 : le monstre salive à l'idée de vous avoir au menu de son prochain \
 repas. Vous tirez votre épée pour vous défendre, mais vous ne pouvez \
 toujours pas bouger, prisonnier de vos bottes, et il vous faut en\
 conséquence ôter 2 points au chiffre que vous obtiendrez chaque fois \
 que vous lancerez les dés pour déterminer votre Force d'Attaque.\
 ARAIGNÉE GÉANTE HABILETÉ: 7 ENDURANCE: 8\
  <ul class='options'>\
                <li><a href='./attack'>Attaquez l' ARAIGNÉE GÉANTE !</a></li>\
                </ul>\
                 </p>\"", 
                 {
          actions: {
          attack: function( character, system, action) {
            console.log("the system is " + system); 
                           var result = undum.game.fight(character, system , undum.game.bestiaire['page_394'][0].monstre[0]);    
                            
                        if (undum.game.bestiaire['page_394'][0].monstre[0].endurance <=0)
                        {
                          
                           system.write( "<p class='transient'>Vous avez tué le "+undum.game.bestiaire['page_394'][0].monstre[0].nom+"!!"
                                         + "Si vous sortez vainqueur du combat <a href='page_232'>Rendez-vous au 232</a>. " 
                                         +"   </p>" ); 
                           
                        }
                        if (result == 'death')
                        {
                        system.doLink('death');

                        } 

                        if (result == 'noDeath')
                        {
                            
                        }
                    

                   }
                 }, 
           exit : function(character, system, action){
            undum.game.nombrederound = 0; 
           }
       }),
 page_395: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous enjambez les ossements qui jonchent le sol et vous examinez \
 d'un peu plus près le Hangar à Bateaux. Vous ramassez quelques-uns \
 des outils dispersés à terre, et vous les observez en détail : ce sont des \
 marteaux, des clous, des ciseaux et toutes sortes d'objets semblables. \
 Ils paraissent tout à fait quelconques. Bientôt, vous entendez un bruit \
 sonore qui provient de quelque part au-delà de la porte nord et vous \
 allez devoir abréger vos investigations, car le bruit se rapproche et il \
 va falloir réagir. Vous avez le temps toutefois soit de fouiller les \
 tiroirs des établis qui se trouvent dans le hangar (<a href='page_322'>rendez-vous alors au 322),</a>\
  soit d'examiner les outils avec encore plus d'attention <a href='page_34'>(rendez-\
 vous dans ce cas au 34).</a> A vous de choisir.\
 </p>\""),
 page_396: new undum.SimpleSituation(//malus situation endurance
 "<p class='transient'> \
 A présent que le Sorcier est vaincu, vous savez que votre quête est \
 presque terminée. Vous vous approchez de la porte aux deux serrures. \
 Il n'y a pas de clés alentour. Vous prenez alors deux clés dans votre \
 sac à dos et vous essayez d'ouvrir la porte. Les clés tournent dans les \
 serrures ! Vous poussez la porte et vous jetez un coup d'œil à \
 l'intérieur.\
 <ul class='options'>\
                <li><a href='./porte'>Enfoncer la porte ?</a></li>\
                <li><a href='./clef'>j'ai des clef ?</a></li>\
                </ul>\
                 </p>\"",
      {
          

            actions: {
                porte: function(character, system, action) {
                    
                    system.setQuality('endurance', character.qualities.endurance -5);

                    if(character.qualities.endurance <= 0)
                    {
                        system.doLink('death');
                    }
                    else
                    {
                          system.write( "<p class='transient'> <a href='page_242'>Rendez-vous au 242. </a> </p>" ); 
                    }

                },
                clef: function(character, system, action) {
                   system.write( "<p class='transient'> <a href='page_242'>Rendez-vous au 242. </a> </p>" ); 
                }
            }
        }),
 page_397: new undum.SimpleSituation(
 "<p class='transient'> \
 La porte s'ouvre sur une petite pièce au sol de pierre et aux murs sales. \
 Une odeur de moisi flotte dans l'air. Au centre de la pièce, il y a une \
 table rudimentaire sur laquelle est posée une chandelle allumée. Sous \
 la table, vous apercevez une petite boîte. A l'autre bout de la pièce, \
 vous\
 remarquez une paillasse dans un coin. Vous avez le choix : ouvrir la \
 boîte <a href='page_240'>(et vous rendre au 240)</a>, ou quitter la pièce <a href='page_363'>(et aller au 363).</a>\
 </p>\""),
 page_398: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous sondez la paroi rocheuse à l'extrémité du passage. Une des \
 pierres se détache et révèle une cachette dans laquelle est dissimulé un \
 bouton muni d'une poignée. Préférez-vous tirer sur cette poignée<a href='page_12'> (et \
 vous rendre au 12)</a>, ou la pousser <a href='page_364'>(et aller au 364) ?</a>\
 </p>\""),
 page_399: new undum.SimpleSituation(
 "<p class='transient'> \
 Il y a un fort courant qui vous entraîne rapidement en aval. Vous êtes \
 emporté à travers une ouverture, puis projeté dans une grande caverne \
 avec une rive de chaque côté. Le courant alors vous pousse vers la rive \
 sud, où vous échouez enfin. <a href='page_218'>Rendez-vous au 218.</a>\
 </p>\""),
 page_400: new undum.SimpleSituation(//c'est la fin de la montagne de feux 
 "<p class='transient'> \
 <img  src='media/img/400_img.JPG' class='float_center'>\
 Le Sorcier de la Montagne au Sommet de Feu est mort, et vous êtes à\
 présent en possession de ses richesses. Il y a dans son coffre au moins\
 mille pièces d'or, des joyaux, des diamants, des rubis et des perles.\
 Caché au-dessous, vous trouvez son grimoire et, en le feuilletant, vous\
 vous rendez compte que ce livre est sans doute plus précieux encore\
 que le trésor proprement dit. Il y est enseigné tout ce qu'il faut savoir\
 pour commander aux secrets et aux créatures de la Montagne au\
 Sommet de Feu. Grâce à cet ouvrage, vous disposez désormais de\
 pouvoirs sans limites, et votre retour sain et sauf au village est assuré.\
 Mais si vous le désirez, vous pouvez rester là et devenir à votre tour le\
 Maître de la Montagne...\
 <img  src='media/img/400_img2.JPG' class='float_center'>\
 </p>\""),
     death: new undum.SimpleSituation(
                "<p class='transient'> \
                La journée commençais bien \
                 <img src='media/img/mort.JPG' class='float_center'>\
                   </p>\""
        )

};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    habilite: new undum.IntegerQuality(
        "Habilite", {priority:"0001", group:'stats'}
    ),
    endurance: new undum.NumericQuality(
        "Endurance", {priority:"0002", group:'stats'}
    ),
    chance: new undum.IntegerQuality( // Fudge as in the FUDGE RPG
        "Chance", {priority:"0003", group:'stats'}
    ),
    provision: new undum.IntegerQuality( // Fudge as in the FUDGE RPG
        "Provision", {priority:"0004", group:'stats'}
    ),
    or: new undum.IntegerQuality( // Fudge as in the FUDGE RPG
        "Or", {priority:"0005", group:'stats'}
    ),
     arme: new undum.WeaponAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Arme'>Arme</span>",
        {priority:"0006", group:'stats'}
    ),
         armure: new undum.ArmoryAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Armure'>Armure</span>",
        {priority:"0007", group:'stats'}
    ),

    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority:"0001", group:'progress'}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {


//new if u want to save stats from your char 
var idSave = 'undum_'+undum.game.id+"_"+undum.game.version;

    

 if (localStorage[idSave]) {
var storedNames = JSON.parse(localStorage[idSave]);
 var statRef = new Array(); 
 var inventory = new Array(); 
 var bonus = new Array();

 statRef = storedNames.stat;
 inventory = storedNames.inventory; 
 bonus =  storedNames.bonus;

 //console.log("il y a une sauvegarde donc je reprend les stats "); 
  character.qualities.habilite = statRef[0];
    character.qualities.endurance = statRef[1];
    character.qualities.chance = statRef[2];
    character.qualities.provision = statRef[3];
    character.qualities.or = statRef[4];
       character.qualities.arme = statRef[5]; 
   character.qualities.armure= statRef[6]; 


//on peuple l'inventaire rustine qui pallie a la faiblesse de la fonction setinventory et du add 
system.setCharacterInventory("<p><strong>Objet : </strong> <br/><span>empty</span> </p>");


$.each(inventory, function( index, value ) {
  system.addCharacterInventory(value); 
});

system.removeCharacterInventory("empty");
//CODE IF ENABLED
//console.log("il y a une sauvegarde"); 


//bonus et stat de départ verif pour pas que certaine situation depasse la valeur d'origine
 
   undum.game.inithabilite = bonus[0]; 
   undum.game.initendurance = bonus[1];
   undum.game.initchance = bonus[2];
   undum.game.bonus = bonus[3];  
}
else
{
  //console.log("il y a pas de sauvegarde creation des stats "); 
   character.qualities.habilite = system.rnd.dice(1,6,6);
    character.qualities.endurance = system.rnd.dice(2,6,12);
    character.qualities.chance = system.rnd.dice(1,6,6);
    character.qualities.provision = 10;
    character.qualities.or = 1;
    character.qualities.arme = -3; 
   character.qualities.armure= -3; 

   system.setCharacterInventory("<p><strong>Objet : </strong> <br/> <span>lanterne </span></p>");

//bonus et stat de départ 
   
   undum.game.inithabilite = character.qualities.habilite; 
   undum.game.initendurance = character.qualities.endurance; 
   undum.game.initchance =  character.qualities.chance; 
   undum.game.bonus = 0; 
}
//end of new 




    character.qualities.inspiration = 0;
    system.setCharacterText("<p>Un donjon Froid et Obscure!!</p>");

    undum.game.enemies = {
        farfadet: {
            habilite:6,
            endurance: 5,
            nom:"farfadet"
        },
        barbare:{
            habilite:7,
            endurance: 6, 
            nom:"barbare"
        }
        
    };

//Partie lié page 161 objet et fonction qui rend un monstre aléatoire 161
undum.game.bestiaire = {
    page_161 : [
        {
            monstre : [
                {
                     habilite:7,
                    endurance: 6, 
                    nom:"lutin"
                },
                {
                     habilite:6,
                    endurance: 3, 
                    nom:"farfadet"
                },
                {
                    habilite:6,
                    endurance: 4, 
                    nom:"diablotin"
                },
                {
                    habilite:5,
                    endurance: 4, 
                    nom:"rat geants"
                    
                },
                 {
                habilite:6,
                endurance: 5, 
                nom:"squelette"
                },
                {
                    habilite:8,
                    endurance: 4, 
                    nom:"troll"
                }
            ]
        },


        ], 
        page_16 :[
             {
              monstre:[
             {

                     habilite:8,
                    endurance: 10, 
                    nom:"OGRE"
             }
             ]
           }
           ], 
          page_19:[
              {
                monstre:[
                {
                habilite:5,
                endurance: 5, 
                nom:"Premier LUTIN"
                },
                {
                    habilite:5,
                    endurance: 6, 
                    nom:"Deuxième LUTIN"
                }
                ]

              }
          ],
          page_20:[
          {
            monstre:[
            {
                habilite:7,
                endurance: 6, 
                nom:"Premier NAIN"
            }, 
            {
                habilite:7,
                endurance: 7, 
                nom:"Deuxième NAIN "
            }, 
            {
                habilite:4,
                endurance: 6, 
                nom:"Troisième NAIN"
            },
            {
                habilite:5,
                endurance: 5, 
                nom:"Quatrième NAIN"
            }

            ]

          }
          ],
          page_33:[
          {
            monstre:[
             {
                     habilite:6,
                    endurance: 4, 
                    nom:"farfadet"
                }
            ]

          }
          ], 
          page_41:[
          {
            monstre:[
            {
               habilite:9,
                    endurance: 6, 
                    nom:"être"
            }
            ]
          }
          ], 
          page_61:[
          {
          monstre:[
            {
              habilite:7,
                      endurance: 8, 
                      nom:"ARAIGNÉE GÉANTE"
            }
            ]
          }
          ], 
           page_86:[
          {
          monstre:[
            {
              habilite:7,
                      endurance: 6, 
                      nom:"crocodile"
            }
            ]
          }
          ],
           page_140:[
          {
          monstre:[
          {
              habilite:7,
                      endurance: 5, 
                      nom:"Chef Squelette"
            }, 
            {
              habilite:6,
                      endurance: 6, 
                      nom:"Premier Squelette"
            }, 
            {
              habilite:5,
                      endurance: 6, 
                      nom:"Deuxieme Squelette"
            }, 
            {
              habilite:5,
                      endurance: 5, 
                      nom:"Quatrième Squelette"
            }, 
            {
              habilite:6,
                      endurance: 5, 
                      nom:"Cinquième Squelette"
            }
            ]
          }
          ],  
          page_142:[{
            monstre:[{
              habilite:11,
                    endurance: 18, 
                    nom:"Sorcier"
            }
            ]
          }
          ],  
          page_143:[{
            monstre:[{
              habilite:7,
                    endurance: 7, 
                    nom:"Ver Marin"
            }
            ]
          }
          ],  
          page_152:[{
            monstre:[{
              habilite:10,
                    endurance: 12, 
                    nom:"Dragon"
            }
            ]
          }
          ], 
          page_158:[{
            monstre:[{
              habilite:5,
                    endurance: 5, 
                    nom:"PIRANHAS"
            }
            ]
          }
          ],  
          page_179:[{
            monstre:[{
              habilite:9,
                    endurance: 9, 
                    nom:"Minotaure"
            }
            ]
          }
          ],  
          page_163:[{
            monstre:[{
              habilite:8,
                    endurance: 9, 
                    nom:"Geant"
            }
            ]
          }
          ],  
          page_199:[{
            monstre:[{
              habilite:7,
                    endurance: 6, 
                    nom:"Homme Des Cavernes"
            }, 
            {
              habilite:6,
                    endurance: 4, 
                    nom:"Deuxième Homme Des Cavernes"
            }
            ]
          }
          ],  
          page_230:[{
            monstre:[{
              habilite:8,
                    endurance: 7, 
                    nom:"Goule"
            }
            ]
          }
          ],  
          page_236:[{
            monstre:[{
              habilite:6,
                    endurance: 6, 
                    nom:"Squelette A"
            }, 
            {
              habilite:5,
                    endurance: 5, 
                    nom:"Squelette B"
            }, 
            {
              habilite:6,
                    endurance: 5, 
                    nom:"Squelette C"
            }
            ]
          }
          ],  
          page_240:[{
            monstre:[{
              habilite:5,
                    endurance: 2, 
                    nom:"Serpent"
            }
            ]
          }
          ],  
          page_249:[{
            monstre:[{
              habilite:7,
                    endurance: 6, 
                    nom:"Chien"
            }
            ]
          }
          ],  
          page_251:[{
            monstre:[{
              habilite:6,
                    endurance: 6, 
                    nom:"Chauve-Souris"
            }
            ]
          }
          ],  
          page_282:[{
            monstre:[{
              habilite:7,
                    endurance: 6, 
                    nom:"Zombie"
            }, 
            {
              habilite:6,
                    endurance: 6, 
                    nom:"Zombie avec faux"
            }, 
            {
              habilite:6,
                    endurance: 6, 
                    nom:"Zombie avec pioches"
            }, 
            {
              habilite:6,
                    endurance: 5, 
                    nom:"Zombie avec hache"
            }
            ]
          }
          ],  
          page_289:[{
            monstre:[{
              habilite:7,
                    endurance: 12, 
                    nom:"Sorcier"
            }
            ]
          }
          ],  
          page_304:[{
            monstre:[{
              habilite:8,
                    endurance:8 , 
                    nom:"Loup-Garou"
            }
            ]
          }
          ],  
          page_309:[
          {
            monstre:[{
              habilite:5,
                    endurance: 4, 
                    nom:"Premier Rat"
            }, 
            {
             habilite:6,
                    endurance: 3, 
                    nom:"Second Rat"
            },
            { 
             habilite:5,
                    endurance: 5, 
                    nom:"Troisième Rat"
            }
            ]
          }
          ],
            page_350_bis:[{
            monstre:[{
              habilite:5,
                    endurance: 5, 
                    nom:"PIRANHAS"
            }
            ]
          }
          ],
            page_331:[{
            monstre:[{
              habilite:8,
                    endurance: 8, 
                    nom:"Creature"
            }
            ]
          }
          ],
            page_333:[{
            monstre:[{
              habilite:10,
                    endurance: 10, 
                    nom:"Troll Vampire"
            }
            ]
          }
          ],
            page_338:[{
            monstre:[{
              habilite:10,
                    endurance: 10, 
                    nom:"Cyclope de Fer"
            }
            ]
          }
          ],
            page_365:[{
            monstre:[{
              habilite:6,
                    endurance: 5, 
                    nom:"Premier FARFADET"
            }, 
            {
              habilite:6,
                    endurance: 5, 
                    nom:"Deuxième FARFADET"
            }, 
            {
              habilite:4,
                    endurance: 4, 
                    nom:"Troisième FARFADET"
            }, 
            {
              habilite:3,
                    endurance: 4, 
                    nom:"Quatrième FARFADET"
            }, 
            {
              habilite:2,
                    endurance: 4, 
                    nom:"Cinquième FARFADET"
            }
            ]
          }
          ], 
            page_350_bis2:[{
            monstre:[{
              habilite:5,
                    endurance: 1, 
                    nom:"PIRANHAS"
            }
            ]
          }
          ], 
            page_372:[{
            monstre:[{
              habilite:7,
                    endurance:6 , 
                    nom:"Chef des farfadets"
            }, 
            {
              habilite:5,
                    endurance:3 , 
                    nom:"Serviteur"
            }
            ]
          }
          ], 
            page_108:[{
            monstre:[{
              habilite:6,
                    endurance:4 , 
                    nom:"Main"
            }
            ]
          }
          ], 
            page_377:[{
            monstre:[{
              habilite:5,
                    endurance:7 , 
                    nom:"Diablotin Ailé"
            }
            ]
          }
          ], 
            page_394:[{
            monstre:[{
              habilite:7,
                    endurance:8,  
                    nom:"Araignée Géante"
            }
            ]
          }
          ], 
            page_116:[{ //les deux farfadets sont bourré donc - 1
            monstre:[
            {
              habilite:4,
                    endurance:5 , 
                    nom:"Premier FARFADET"
            }, 
            {
              habilite:3,
                    endurance:5 , 
                    nom:"Deuxieme FARFADET"
            }
            ]
          }
          ],  
            page_188:[{ 
            monstre:[
            {
              habilite:8,
                    endurance:5 , 
                    nom:"Rat-Garou"
            }
            ]
          }
          ]
        
    };

//GÉANT HABILETÉ: 8 ENDURANCE: 9
//Variable d'ajustement 
//sert pour compter le nombre de round en cas d'evenement 
//sert aussi pour les multiples adversaires 
  undum.game.nombrederound = 0; 
  undum.game.nombretentative = 0; 

//sert pour le nombre de coup porté ou reçus 
undum.game.nombredecoup= 0; 
//sert a stocke une valeur avant le combat 
undum.game.initfight =0; 
//ref circulaire 
undum.game.initpage_258 = 0; 
   

     undum.game.randomMonster161 = function( system){
         var index = system.rnd.dice( 1, 6);
         
            return undum.game.bestiaire['page_161'][0].monstre[index];
        };

        undum.game.result161 = undum.game.randomMonster161(system);
        undum.game.result161_Bis = undum.game.randomMonster161(system);
        undum.game.result161_Bis2 = undum.game.randomMonster161(system);
        undum.game.result161_Bis3 = undum.game.randomMonster161(system);
        undum.game.result161_Bis4 = undum.game.randomMonster161(system);
//fin de la partie 161

//Systeme de combat renvoi victory death ou noDeath 



undum.game.fightmago = function(character, system, opponent){
             //   console.log("inside the function" + system); 
            var jetDesPerso = system.rnd.dice( 2, 6, parseInt(character.qualities.habilite) ) ; 

             jetDesPerso = parseInt(jetDesPerso) + parseInt(undum.game.bonus); 

             var jetDesMonstre = system.rnd.dice( 2, 6, parseInt(opponent.habilite) ) ;
             // if the orc is dead show the end message
               $(".special").remove(); 

              system.write( "<p class='transient special'>Votre jet de dés est : <strong>"+jetDesPerso+" </strong> le sien : <strong>"+ jetDesMonstre +"</strong> </p>" );
                                  

                   if( jetDesPerso > jetDesMonstre) {
                       
                        opponent.endurance -= 3;
                        system.write( "<p class='transient special'>Vous touchez le "+opponent.nom+" 3 points de domage!</p>" );
                          if( opponent.endurance <= 0 ){
                          system.write( "<p class='transient'>Le "+opponent.nom+" Tombe Mort a Terre!</p>" );
                        return 'victory';
                          }
                          else
                          {
                          return 'noDeath';
                      }
                    }
                    else if( opponent.endurance <= 0 ) {
                        system.write( "<p class='transient'>Le "+opponent.nom+" Tombe Mort a Terre!</p>" );
                    
                        return 'victory';
                    }
                    else {
                        system.write( "<p class='transient'>Vous ratez!</p>" );
                       
                    }
                    
                    
                    
                    if( jetDesMonstre > jetDesPerso ) {
                      var special = system.rnd.dice( 1, 6); 
                   if((special %2) == 0) 
                   { 
                          if((special ==2) ||(special ==4))
                          {
                            system.animateQuality( 'endurance', character.qualities.endurance -1 );
                        system.write( "<p class='transient special'>Le "+opponent.nom+" vous touche!</p>" );
                          }
                          else
                          {
                             system.write( "<p class='transient special'> Vous parrez le coup </p>" );
                          }
                        
                      }
                      else
                      {
                        system.animateQuality( 'endurance', character.qualities.endurance -2 );
                        system.write( "<p class='transient special'>Le "+opponent.nom+" vous touche!</p>" );
                      }
                        if( character.qualities.endurance.endurance <= 0 ){
                        system.write( "<p class='transient'>Vous tombez !!!</p>" );
                        return 'death'; 
                        }
                    }
                    else {
                        system.write( "<p class='transient special'>Le "+opponent.nom+" rate!</p>" );
                        
                    }
                    
                    if( character.qualities.endurance <= 0 ) {
                        system.write( "<p class='transient'>Vous tombez !!!</p>" );
                       
                        return 'death'; 
                    }

                    return 'noDeath'; 

        }



undum.game.fight = function(character, system, opponent){
             //   console.log("inside the function" + system); 
             var jetDesPerso = system.rnd.dice( 2, 6, parseInt(character.qualities.habilite) ) ; 

             jetDesPerso = parseInt(jetDesPerso) + parseInt(undum.game.bonus); 

             var jetDesMonstre = system.rnd.dice( 2, 6, parseInt(opponent.habilite) ) ;
             // if the orc is dead show the end message
                   
             //tout n'est qu'impermanence on supprime les classes special 
             $(".special").remove(); 

              system.write( "<p class='transient special'>Votre jet de dés est : <strong>"+jetDesPerso+" </strong> le sien : <strong>"+ jetDesMonstre +"</strong> </p>" );
                   if( jetDesPerso > jetDesMonstre) {
                       
                        opponent.endurance -= 2;
                        system.write( "<p class='transient special'>Vous touchez le "+opponent.nom+" 2 points de dommage!</p>" );
                          if( opponent.endurance <= 0 ){
                          system.write( "<p class='transient'>Le "+opponent.nom+" Tombe Mort a Terre!</p>" );
                        return 'victory';
                          }
                          else
                          {
                          return 'noDeath';
                      }
                    }
                    else if( opponent.endurance <= 0 ) {
                        system.write( "<p class='transient'>Le "+opponent.nom+" Tombe Mort a Terre!</p>" );
                    
                        return 'victory';
                    }
                    else {
                        system.write( "<p class='transient special'>Vous ratez!</p>" );
                       
                    }
                    
                    
                    //si bouclier ou pas donc  character.qualities.armure = -2
                    if( jetDesMonstre > jetDesPerso ) {
                          if(character.qualities.armure == -2)
                          {
                              var jetsvg = system.rnd.dice( 1, 6); 
                              if(jetsvg == 6)
                              {
                                system.animateQuality( 'endurance', character.qualities.endurance -1 );
                            system.write( "<p class='transient special'>Le "+opponent.nom+" vous touche, mais le bouclier parre le coup</p>" );
                              }
                              else
                              {
                                system.animateQuality( 'endurance', character.qualities.endurance -2 );
                            system.write( "<p class='transient special'>Le "+opponent.nom+" vous touche!</p>" );     
                              }
                          }
                          else
                          {
                            system.animateQuality( 'endurance', character.qualities.endurance -2 );
                            system.write( "<p class='transient special'>Le "+opponent.nom+" vous touche!</p>" );
                      
                        if( character.qualities.endurance.endurance <= 0 ){
                        system.write( "<p class='transient'>Vous tombez !!!</p>" );
                        return 'death'; 
                          }
                         }
                    }
                    else {
                        system.write( "<p class='transient special'>Le "+opponent.nom+" rate!</p>" );
                        
                    }
                    
                    if( character.qualities.endurance <= 0 ) {
                        system.write( "<p class='transient'>Vous tombez !!!</p>" );
                       
                        return 'death'; 
                    }

                    return 'noDeath'; 

        }
  
};

