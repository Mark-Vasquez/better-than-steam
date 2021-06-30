'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Games', [
      {
        title: "Duck Punt ",
        publisher: " Pocket Gamer",
        description: "By the time you've read the name and appreciated the pun, you've already achieved an understanding of half of this game's appeal. From there, little is left to the imagination: two teams on an American football field take turns with possession of a duck (rubber, presumably, given the distances achieved) attempting to kick it (as the author ad-libs, a fowl ball) to the goal line... and victory! In the C64 original you would specify the short or long punt, so as to not drastically overshoot near the goal line and be forced to buy a new duck with a point deduction. Also, sporadically the game would declare that an interception had occurred (or, steady yourselves, an ab-duck-tion) A modern remake has been produced for contemporary operating environments with numerous interface and gameplay enhancements.",
        imageUrl: "https://www.mobygames.com/images/shots/l/185226-duck-punt-commodore-64-screenshot-how-hard-do-you-want-to.png",
        snippet: "A modern remake has been produced for contemporary operating environments with numerous interface and gameplay enhancements.",
        genre: "Sports",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title:"Quarterstaff: The Tomb of Setmoth",
        publisher:"Infocom",
        description: "Infocom picked up this title as the first in their RPG line. Originally self-published by Simulated Environment Systems as Quarterstaff (see there for details) exclusively for the Mac, Infocom spruced up the game, added a subtitle, added color for color Macs, fixed numerous bugs, and even changed the story somewhat. They also added a Help window for hints, and various other handy gadgets.",
        imageUrl:"https://www.mobygames.com/images/covers/s/648407-quarterstaff-the-tomb-of-setmoth-macintosh-front-cover.jpg",
        snippet:"Originally self-published by Simulated Environment Systems as Quarterstaff (see there for details) exclusively for the Mac, Infocom spruced up the game, added a subtitle, added color for color Macs, fixed numerous bugs, and even changed the story somewhat.",
        genre:"Role-Playing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title:"Undead Line",
        publisher:"T&E Soft",
        description: "Undead Line is a top-down arcade shooter with scrolling screens, like Commando and other games. The player controls a character (from a selection of three on the MSX 2 version) that shoots projectiles at enemy monsters. The six levels available are presented in a menu and can be selected and played in any order. There is a boss battle at the end of each one. Chests with power-ups are scattered throughout the levels. They open when shot, and in the Genesis version it is possible to cycle through the available power-ups by keeping firing at them. The power-ups include armor and speed boosts, and several types of projectiles.",
        imageUrl:"https://www.mobygames.com/images/covers/s/383143-undead-line-msx-front-cover.jpg",
        snippet:"Undead Line is a top-down arcade shooter with scrolling screens, like Commando and other games",
        genre:"Action",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title:"Border Zone",
        publisher:"Infocom, Inc.",
        description: "Border Zone is a text adventure game in which the player controls three different protagonists throughout three chapters: an American businessman and two special agents - a Western and an Eastern one.",
        imageUrl:"https://www.mobygames.com/images/covers/s/686-border-zone-dos-front-cover.jpg",
        snippet:"It is the 1980's, and the Cold War between the Western Bloc (led by the USA) and the Eastern Bloc (led by the Soviet Union) is at its peak.",
        genre:"Adventure",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title:"Cyberball",
        publisher:"Atari Games Corporation",
        description: "After American Football players started cheating `by using bionic parts, the game was forced to change its rules. By 2022, the game was played not by humans, but two teams of seven robots. To spice things up, the usual pig skin ball was replaced with a 350 pound bomb. Cyberball brings this fast and furious action to life. Gameplay is essentially the same as the real sport, although the 'downs' are replaced by the bomb's heat gradually increasing towards 'critical'. After this it will explode and possession will be swapped. This is prevented when you cross the 50-yard line, lose possession or score a touchdown, in which cases it resets to 'cool'. Field goals and punts are not featured - the only kick is the initial kick-off you receive. Control passes from the quarterback (thrower) to the intended catcher as soon as a pass is released. The two-player game is co-operative - on offense one player passes and the other receives.",
        imageUrl:"https://www.mobygames.com/images/covers/s/171573-cyberball-genesis-front-cover.jpg",
        snippet:"After American Football players started cheating by using bionic parts, the game was forced to change its rules.",
        genre:"Sports",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title:"Ian Fleming's James Bond 007",
        publisher:"Domark Limited",
        description: "You are James Bond 007 and you must stop Mr. Big from delivering heroin for free. You control a boat that can destroy enemy boats and can go up to 100 MPH. You must dodge or destroy enemy boats and must dodge defensive gun fire.",
        imageUrl:"https://www.mobygames.com/images/covers/s/183335-ian-fleming-s-james-bond-007-in-live-and-let-die-the-computer-game-commodore-64-front-cover.jpg",
        snippet:"You are James Bond 007 and you must stop Mr. Big from delivering heroin for free.",
        genre:"Action",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: "Macadam Bumper",
        publisher: "Personal Software Services",
        description: "A single classical-style pinball table is provided in this simulation. A table editor is also provided — this allows you to choose a shape for the table and arrange the component parts as you wish. Up to four players can take it in turns, each with five balls in turn. Unusually, the default table has multiple flippers at the bottom of the table, as well as some located higher up. Use them to return a ball higher on table and to prevent it being lost at the bottom of the table. Hitting some valuable areas of the table gives you a bonus. Gain as many points as possible to rack up a high score.",
        imageUrl: "https://www.mobygames.com/images/covers/s/232056-macadam-bumper-dos-front-cover.jpg",
        snippet: "A single classical-style pinball table is provided in this simulation.",
        genre: "Simulation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title:"NAM-1975",
        publisher:"SNK Corporation",
        description: "As a soldier, you and/or a friend must travel through Vietnam to stop the scientist and his world destroying laser machine. In the game, you must shoot enemy soldiers, tanks, helicopters, jeeps, and more by aiming the machine gun cursor and shooting at them. Within each location, you can pick up more powerful weapons such as machine guns and flame throwers, but these have a limited supply of ammunition. Pressing down on the joystick while running at the same time will cause your character to perform a somersault and be invincible for a second. At the end of every location, you will need to defeat a series of bosses, which are not the same every play. Cut-scenes are viewed in between locations, and contain dramatic digitized dialogue.",
        imageUrl:"https://www.mobygames.com/images/covers/s/43231-nam-1975-neo-geo-front-cover.jpg",
        snippet:"As a soldier, you and/or a friend must travel through Vietnam to stop the scientist and his world destroying laser machine. In the game, you must shoot enemy soldiers, tanks, helicopters, jeeps, and more by aiming the machine gun cursor and shooting at them. ",
        genre:"Action",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title:"Safari Guns",
        publisher:"Infogrames Europe SA",
        description: "You are on safari to make a photo report to save the local animal world from extinction. How the game works is simple. Animals will move into the screen and, after some time, leave the screen. Meanwhile you must photograph them. Besides the animals, there also poachers, which have to be shot with your real weapon. Kill them fast, or they will kill you. If you kill an animal, then you get some penalty points. The game itself offers different locations, from the desert to the jungle and a variety of different animals, like zebras, elephants, and others.",
        imageUrl:"https://www.mobygames.com/images/covers/s/68255-safari-guns-amiga-front-cover.jpg",
        snippet:"You are on safari to make a photo report to save the local animal world from extinction.",
        genre:"Action",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title:"Alien Trilogy",
        publisher:"Acclaim Entertainment, Inc.",
        description: "Alien Trilogy is a first-person shooter based on the first three Alien movies. You control Lt. Ripley in three sections, each based on one film: The colony complex on LV426 (from Aliens), the prison planet (from Alien³) and the derelict spaceship (from Alien).",
        imageUrl:"https://www.mobygames.com/images/covers/s/12255-alien-trilogy-dos-front-cover.jpg",
        snippet:"Enemies include everything the alien life cycle provides: facehuggers, chestbursters, warrior aliens, dog aliens (from Alien³) and alien queens, one of which waits in the final mission of every section.",
        genre:"Action",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {});

  }
};
