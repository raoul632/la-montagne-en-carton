// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

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
        <p class='transient' >  <a href='situations'>Cliqué sur ce lien\
        pour commenncer...</a></p>"
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
                   /* system.setQuality("chance", character.qualities.chance+1);
                    system.doLink('example-choices');*/
                    
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
 ainsi, <a href='page_161_bis'>rendez-vous au 161</a>
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
 avancez le long du couloir, et rendez-vouis au 367.\
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
 Si vous êtes vainqueur, <a href='page_50'>rendez-vous au 50</a>rendez-vous au 50. Après le deuxième assaut, \
 vous pouvez fuir le long du corridor. (Rendez-vous au 269.)\
 </p>\""),
 page_17: new undum.SimpleSituation(
 "<p class='transient'> \
 A l'aide de l'épieu et du maillet (ou d'un maillet de fortune si vous n'en \
 avez pas), vous formez une croix et vous avancez vers le Vampire en \
 l'acculant dans un coin. Le Vampire siffle et essaye de vous attraper, \
 mais il ne peut s'approcher de vous. Il sera cependant difficile de lui \
 enfoncer l'épieu dans le cœur. Tandis que vous marchez vers lui, vous \
 trébuchez et tombez. Par un coup de chance, l'épieu est projeté en \
 avant, et atteint le monstre hurlant. Tentez votre Chance. Si vous êtes \
 chanceux, l'épieu transperce le cœur du Vampire. Si vous êtes \
 malchanceux, le Vampire est simplement écorché par le coup \
 (enlevez-lui 3 points d'ENDURANCE) et il vous rejette en arrière vers \
 la porte située à l'ouest. Si vous fuyez par cette<a href='page_'>Rendez-vous au </a> porte, rendez-vous au \
 380. Si vous continuez à combattre, <a href='page_144'>rendez-vous au 144</a>rendez-vous au 144. Si vous avez \
 eu de la chance et que vous avez tué le Vampire, vous pouvez chercher \
 son trésor - <a href='page_32'>rendez-vous au 32</a>rendez-vous alors au 327.\
 </p>\""),
 page_18: new undum.SimpleSituation(
 "<p class='transient'> \
 Vous marchez vers l'ouest le long du couloir. Au bout d'une \
 cinquantaine de mètres, le passage s'oriente vers le nord. Après avoir \
 fait deux ou trois pas dans ce couloir, vous entendez un bruit \
 d'éboulement sous vos pieds et vous essayez de sauter en arrière tandis \
 que le sol se dérobe. Tentez votre Chance. Si vous êtes chanceux, vous \
 avez réussi à faire un bond en arrière avant qu'un trou ne se forme. Si \
 vous êtes malchanceux, vous n'avez pas été assez rapide et vous \
 tombez dans une fosse de deux mètres de profondeur. Vous perdez 1 \
 point d'ENDURANCE. Si vous avez de la chance, vous feriez mieux \
 de retourner à la bifurcation (<a href='page_261'>rendez-vous au 261</a>rendez-vous au 261). Si vous n'avez pas \
 eu de chan<a href='page_348'>Rendez-vous au 348</a>ce, rendez-vous au 348.\
 </p>\""),
 page_19: new undum.SimpleSituation(
 "<p class='transient'> \
 Ces deux créatures malfaisantes sont des LUTINS. Ils vous attaquent \
 un par un.\
              HABILETÉ ENDURANCE\
 Premier LUTIN  5          5\
 Deuxième LUTIN 5          6\
 Si vous parvenez à tuer les luti<a href='page_317'>Rendez-vous au 317</a>ns, rendez-vous au 317.\
 </p>\""),
 page_20: new undum.SimpleSituation(
 "<p class='transient'> \
 La bagarre commence. Vous avez votre épée, ils ont leurs haches. Ils \
 vous affrontent un par un.\
                HABILETÉ ENDURANCE\
 Premier NAIN       7       6\
 Deuxième NAIN      7       7\
 Troisième NAIN     4       6\
 Quatrième NAIN     5       5\
 Si vous êtes vainqueur, <a href='page_376'>rendez-vous au 376</a>rendez-vous au 376. Si le combat tourne mal, \
 vous pouvez fuir par la porte. Rendez-vous dans ce cas au 291 - mais \
 n'oubliez pas votre pénalité de fuite.\
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
                   /* system.setQuality("chance", character.qualities.chance+1);
                    system.doLink('example-choices');*/
                    
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
                réveille pas - rendez-vous alors au 147.Si vous êtes malchanceux,\
                rendez-vous au 33.\
                 <ul class='options'>\
                 <li><a href='./lucktest'>Tentez votre Chance</a></li>\
                 </ul>\
      </p>\"", 
      { //ouvre la condition 
      actions:{
              lucktest: function(character, system, action) {
                   /* system.setQuality("chance", character.qualities.chance+1);
                    system.doLink('example-choices');*/
                    
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
     page_147: new undum.SimpleSituation(
        "<p class='transient'> \
        Vous quittez la pièce et vous ouvrez la boîte dans le couloir. A\
        l'intérieur, vous trouvez une Pièce d'Or et une petite souris qui était\
        sans doute l'animal familier de la créature. Vous gardez la Pièce, et\
        vous relâchez la souris qui s'enfuit à toute allure le long du couloir.\
        <a href='./lucktest'>Prenez 2 points de CHANCE et rendez-vous au 208</a>.\
        </p>\"",
              { //ouvre la condition 
              actions:{
                      lucktest: function(character, system, action) {
                           /* system.setQuality("chance", character.qualities.chance+1);
                            system.doLink('example-choices');*/                  
                                system.animateQuality( 'chance', character.qualities.chance );
                                  system.doLink( 'page_208' );

                        }

              }
            }
      
      ), 
      page_161: new undum.SimpleSituation(
 "<p class='transient'> \
 </p>\"",
  { //ouvre la condition 
       enter: function( character, system, from ){
                           /* system.setQuality("chance", character.qualities.chance+1);
                            system.doLink('example-choices');*/                  
                            system.write( "<p class='transient'>" 
                       +"En "
                       + "cherchant des portes et des passages secrets, vous avez sondé, martelé, "
                       +"raclé la paroi rocheuse, et tous ces bruits ont résonné dans les couloirs"
                       +"de la montagne. Diverses créatures vagabondent librement dans les"
                       +"souterrains, et ce vacarme a attiré l'attention de l'un des monstres "
                       +"votre enemies est un " + undum.game.result161.nom 
                       +"  <ul class='options'>"
                +"<li><a href='./attack'>Attaquez le " + undum.game.result161.nom +"</a></li>"
                  +"</ul>\! </p>"); 
                        

                        }, 
              actions:{
                   

                     attack: function( character, system, action) {
                   if( system.rnd.dice( 2, 6, character.qualities.habilite ) > system.rnd.dice( 2, 6, undum.game.result161.habilite ) ) {
                    // hit! reduce the opponent's hit points by rolling a 6-sided die and adding our strength
                            //var damage = system.rnd.dice( 1, 6, character.qualities.strength );
                            
                            // the -= operator reduces the variable's value

                            undum.game.result161.endurance -= 2; 

                            system.write( "<p class='transient'>Vous avez toucher le "+undum.game.result161.nom +" </p>" );

                            system.write( "<p class='transient'>il reste "+  undum.game.result161.endurance+ " point de vie au "+undum.game.result161.nom +" </p>" );

                             // check if the opponent is alive and move on to the next enemy if not
                            if( undum.game.result161.endurance <= 0 ) {
                                system.write( "<p class='transient'>Vous avez tué le "+undum.game.result161.nom +"!!"
                                 + " <a href='page_256'>vous pouvez soit retourner à la " 
                                 +" bifurcation  </a><a href='page_364'>, soit pousser la poignée </a>.\</p>" );
                                //system.doLink( 'page_301' );
                                return; // stop the rest of the function from executing
                            }
                        }
                        else if ( system.rnd.dice( 2, 6, character.qualities.habilite ) < system.rnd.dice( 2, 6, undum.game.result161.habilite ) )
                        {
                             //var damage = system.rnd.dice( 1, 6, character.qualities.strength );
                            
                            // the -= operator reduces the variable's value
                           
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
page_161_Bis: new undum.SimpleSituation(
        "<p class='transient'> \
        </p>\"",
  { //ouvre la condition 
       enter: function( character, system, from ){
                           /* system.setQuality("chance", character.qualities.chance+1);
                            system.doLink('example-choices');*/                  
                            system.write( "<p class='transient'>" 
                       +"En "
                       + "cherchant des portes et des passages secrets, vous avez sondé, martelé, "
                       +"raclé la paroi rocheuse, et tous ces bruits ont résonné dans les couloirs"
                       +"de la montagne. Diverses créatures vagabondent librement dans les"
                       +"souterrains, et ce vacarme a attiré l'attention de l'un des monstres "
                       +"votre enemies est un " + undum.game.result161_Bis.nom 
                       +"  <ul class='options'>"
                +"<li><a href='./attack'>Attaquez le " + undum.game.result161_Bis.nom +"</a></li>"
                  +"</ul>\! </p>"); 
                        

                        }, 
           attack: function( character, system, action) {
                   var result = undum.game.fight(character, system,undum.game.result161_Bis); 

                if (result == 'victory')
                {
                   system.write( "<p class='transient'>Vous avez tué le "+undum.game.result161.nom +"!!"
                                 + " <a href='page_117'>Rendez vous au Cliquez !! " 
                                 +" </a>.\</p>" ); 
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

      ), 
      page_208: new undum.SimpleSituation(
        "<p class='transient'> \
        Un peu plus loin dans le passage qui longe le mur ouest, vous trouvez\
        une autre porte. Vous collez votre oreille contre le panneau, mais vous\
        n'entendez rien. <a href='page_397'>Si vous voulez essayer d'ouvrir cette porte</a>, rendezvous\
        au 397. <a href='page_363'>Si vous préférez poursuivre votre chemin</a>, rendez-vous au\
        363.\
        </p>\""
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
       page_278: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#page_278").html());
        }
      }),
     page_301: new undum.SimpleSituation(
                "<p class='transient'> \
                A votre gauche, du côté ouest du passage, il y a une porte de bois brut\
                grossièrement taillé. Vous tendez l'oreille et vous percevez un bruit qui\
                pourrait être le ronflement d'une quelconque créature. Désirez-vous\
                ouvrir cette porte ? Rendez-vous alors au 82. Si vous préférez continuer\
                vers le nord, rendez-vous au 208.\
                 </p>\""

        ), 
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
        "chance", {priority:"0003", group:'stats'}
    ),
    provision: new undum.IntegerQuality( // Fudge as in the FUDGE RPG
        "provision", {priority:"0004", group:'stats'}
    ),
    or: new undum.IntegerQuality( // Fudge as in the FUDGE RPG
        "or", {priority:"0005", group:'stats'}
    ),

    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority:"0001", group:'progress'}
    ),

    novice: new undum.OnOffQuality(
        "Novice", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
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
    character.qualities.habilite = system.rnd.dice(1,6,6);
    character.qualities.endurance = system.rnd.dice(2,6,12);
    character.qualities.chance = system.rnd.dice(1,6,6);
    character.qualities.provision = 10;
    character.qualities.or = 1;
    character.qualities.novice = 1;
    character.qualities.inspiration = 0;
    system.setCharacterText("<p>La journée commençais bien!!</p>");

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
undum.game.enemies_pages_161 = {
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


        ]
    };

      var result161 = undum.game.enemies_pages_161; 
   

     undum.game.randomMonster161 = function( system){
         var index = system.rnd.dice( 1, 6);
         
            return undum.game.enemies_pages_161['page_161'][0].monstre[index];
        };

        undum.game.result161 = undum.game.randomMonster161(system);
        undum.game.result161_Bis = undum.game.randomMonster161(system);
//fin de la partie 161

//Systeme de combat renvoi victory death ou noDeath 

        undum.game.fight = function(character, system, opponent){
                console.log("inside the function" + system); 
                if( system.rnd.dice( 1, 20, character.qualities.accuracy ) > system.rnd.dice( 1, 20, opponent.habilite ) ) {
                        //var damage = system.rnd.dice( 1, 6, character.qualities.strength );
                        opponent.endurance -= 2;
                        system.write( "<p>Vous touchez le"+opponent.nom+" " + damage + " points of damage!</p>" );
                    }
                    else {
                        system.write( "<p>Vous ratez!</p>" );
                    }
                    
                    // if the orc is dead show the end message
                    if( opponent.endurance <= 0 ) {
                        system.write( "<p>Le "+opponent.nom+" Tombe Mort a Terre!</p>" );
                      //  system.doLink(  );
                        return 'victory';
                    }
                    
                    if( system.rnd.dice( 1, 20, opponent.habilite ) > system.rnd.dice( 1, 20, character.qualities.agility ) ) {
                       // var damage = system.rnd.dice( 1, 6, opponent.habilite );
                        system.setQuality( 'hitpoints', character.qualities.hitpoints -2);
                        system.write( "<p>Le "+opponent.nom+" vous touche!</p>" );
                    }
                    else {
                        system.write( "<p>Le "+opponent.nom+" rate!</p>" );
                    }
                    
                    if( character.qualities.hitpoints <= 0 ) {
                        system.write( "<p>Vous tombez !!!</p>" );
                        //system.doLink( 'death' );
                        return 'death'; 
                    }

                    return 'noDeath'; 

        }
  
};
