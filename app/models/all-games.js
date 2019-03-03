import Movie from 'drinking-game/models/movie';
import TVShow from 'drinking-game/models/tv-show';
import BoardGame from 'drinking-game/models/board-game';
import VideoGame from 'drinking-game/models/video-game';

const allGames = [
  Movie.create({title: 'Larry the Cable Guy: Health Inspector', year: '2006',
    oneDrink: ['Someone says "dickweed"', 'Donnie throws a soccer ball', 'Larry tries to help Jack',
              'Someone farts', 'Larry suggests Butlin is a boy', 'Larry refers to himself in the 3rd person',
              'Someone refers to Larry\'s truck as the "Larrymobile"', 'Larry eats a Moonpie',
              'Larry mispronounces something'],
    twoDrinks: ['Larry says "I can do this all day"', 'Larry is in a restaurant', 'Larry smells "Deer Urine"'],
    finishDrink: ['The mayor looks at some woman\'s boobs', 'Larry gets a phone call', 'Larry finds vermin']
  }),
  Movie.create({title: 'Django Unchained', year: '2012',
    oneDrink: ['Someone uses the n-word', 'A lantern is lit', 'Someone has a drink', 'Someone fires a gun', 'A woman screams',
              'A slave is disciplined or talked down on', 'Someone says "man dingo"', 'Django is wearing sunglasses',
              'Django imagines his wife', 'Dr. Schultz pulls out a warrant'],
    twoDrinks: ['Dr. Schultz\'s horse bows', 'See a chain gang of saves', 'Someone is killed while riding a horse'],
    finishDrink: ['Django looks through his telescope', 'A whip is cracked', 'A gun is pointed at Dr. Schultz and Django']
  }),
  Movie.create({title: 'Action Point', year: '2018',
    oneDrink: ['D.C. calls his daughter "chicken butt"', 'Anyone calls D.C.\'s daughter "Boogie"', 'D.C. refers to his staff as the "shit birds"',
              'Everytime someone splashes into the water', 'The bear drinks a beer', 'D.C. throws away his beer can',
              'Bennie is holding his hatchet', 'Bennie calls the dog "Suzy Sue"', 'Boogie mentions "The Clash"'],
    twoDrinks: ['D.C. gets hit on the head', 'Bennie takes some pills', 'Killer is holding a snake'],
    finishDrink: ['The bear drinks whiskey', 'D.C. is launched through the barn wall', 'D.C. goes down a slide']
  }),
  Movie.create({title: 'Tag', year: '2018',
    oneDrink: ['Someone new gets tagged', 'Everytime Jerry avoids a tag', 'Everytime someone is in a disguise',
              'Everytime someone has a drink', 'Group goes to Hogan\'s mom\'s basement', 'Chilli smokes something',
              'Chilli or Bob hit on Cheryl', 'Hogan\'s wife acts crazy', 'Someone starts running'],
    twoDrinks: ['Someone gets knocked to the ground', 'Rest of the group tries to get information on where Jerry is',
                'Won\'t let Lou be part of the game'],
    finishDrink: ['The group makes an ammendment', 'Jerry breaks a window', 'Slow motion scene']
  }),
  Movie.create({title: 'Superbad', year: '2007',
    oneDrink: ['Evan uses a phone', 'Seth and Evan talk about sex', 'Seth talks to Jules',
              'Someone looks at Fogell\'s fake ID', 'Seth gets mad at Fogell', 'Someone has a drink',
              'Seth tries to steal alcohol', 'Seth and Evan argue', 'Fogell is attacked by the homeless man'],
    twoDrinks: ['Jesse spits on someone', 'Someone calls Fogell "McLovin"', 'One of the cops pulls out his gun'],
    finishDrink: ['Seth gets hit by a car', 'Seth gets blood on his pants', 'Someone fire a gun']
  }),
  Movie.create({title: 'Blockers', year: '2018',
    oneDrink: ['Someone takes a picture', 'Mitchell doesn\'t understand a youth reference',
              'Someone has a drink', 'Julie kisses Auston', 'Sam sees her crush', 'Someone stands through the roof of the limo',
              'Mitchell does something he doesn\'t want to', 'Mitchell shows how strong he is',
              'One of the parents reconciles with their kid'],
    twoDrinks: ['Someone pukes', 'Kayla does drugs', 'They catch Auston\'s parents having sex'],
    finishDrink: ['Hunter gets knocked down', 'Someone mentions Hunter cheated on his wife',
                  'One of the parents reads their kids messages']
  }),
  Movie.create({title: 'The Lord of the Rings: The Fellowship of the Ring', year: '2001',
    oneDrink: ['Someone smokes a pipe', 'Merry and Pippin get into michief', 'A ringwraith appears',
              'Sam stands up for Frodo', 'Strider/Aragorn defends the Hobbits', 'Frodo gets away from a ringwraith',
              'Boromir acts sketchy', 'Legolas fires an arrow', 'Someone tries to take the ring from Frodo',
              'Someone sees the eye of Sauron'],
    twoDrinks: ['Someone goes into hiding', 'Frodo wears the ring', 'Gandalf gets mad at Merry or Pippen'],
    finishDrink: ['Someone gets betrayed', 'Someone speaks in Elvish', 'Bilbo gives something to Frodo']
  }),
  Movie.create({title: 'Wonder Woman', year: '2017',
    oneDrink: ['Someone says "Aries"', 'Diana or Sameer speak a different language', 'Diana doesn\'t understand something',
              'Diana blocks a bullet with her wrist guard', 'Diana jumps high or far',
              'Diana has on a new outfit', 'A gun is fired', 'Sir Patrick says "armistice"',
              'Ludendorff fires a gun'],
    twoDrinks: ['Ludendorff inhales his mysterious powder', 'The Lasso of Truth is used', 'Poisonous gas is used'],
    finishDrink: ['Steve Trevor flies a plane', 'Steve and Diana dance together', 'Charlie sings']
  }),
  Movie.create({title: '300', year: '2006',
    oneDrink: ['Someone asks for the Spartan\'s surrender', 'One of the Spartans is killed', 'Theron acts creepy or betrays his people',
              'Someone gets kicked', 'Leonidas kills someone', 'Leonidas refuses to kneel',
              'One of the Spartans hits someone with their shield', 'One of the Spartans throws a spear',
              'Someone talks about the honour of dying in battle', 'Someone calls Leonidas "my king"'],
    twoDrinks: ['Someone calls Xerxes a god', 'The Spartans stop a Persian attack', 'Spartans are training'],
    finishDrink: ['The Persians fire a volley of arrows', 'A Persian messager addresses the Spartans',
                  'The hunchback speaks to Leonidas']
  }),
  Movie.create({title: 'Jackass 3D', year: '2010',
    oneDrink: ['Johnny Knoxville laughs', 'Bam punches someone', 'Preston or Wee Man don\'t have a shirt on',
              'Chris Pontius is wearing bunny ears or a speedo', 'Someone is laying on the ground in pain', 'Someone is pranked',
              'Someone is charged by a bull', 'Someone is dressed up as an old person', 'Can see someones butt'],
    twoDrinks: ['Someone is launched into the air', 'Someone is hit in the head', 'Someone is hurt by an animal'],
    finishDrink: ['Someone is bleeding', 'There is a slow motion scene', 'Bam is scared of a snake']
  }),
  Movie.create({title: 'Fantastic Beasts and Where to Find Them', year: '2016',
    oneDrink: ['You see one of the creatures', 'Newt\'s suitcase is opened', 'Queenie reads someone\'s mind',
              'Jacob is confused or amazed by something magical', 'Graves talks to Credence', 'An Obscurus appears',
              'Someone teleports', 'Someone casts a spell', 'Someone screams'],
    twoDrinks: ['Newt catches one of his escaped creatures', 'Someone calls a mogul a "no mag"',
                'Mary Lou disapproves of magic'],
    finishDrink: ['Newt defends or expresses empathy for one of his creatures', 'Credence is abused',
                  'See Jacob\'s baked goods']
  }),
  Movie.create({title: 'Get Him to the Greek', year: '2010',
    oneDrink: ['Aldous drinks or does drugs', 'Aaron is drunk or high', 'Aldous gets mad at Aaron',
              'Aaron and Aldous miss a flight or change their flight',
              'Daphne is tired', 'Sergio gets angry', 'Sergio calls Aaron', 'Sergio says "mind fuck"',
              'Someone says "African Child"', 'Someone says "Jeffery"'],
    twoDrinks: ['Aaron has something put up his butt', 'Aldous performs', 'Someone strokes a furry wall'],
    finishDrink: ['Aaron pukes', 'Aaron is running', 'Someone is bleeding']
  }),
  Movie.create({title: '21 Jump Street', year: '2012',
    oneDrink: ['Schmidt chokes up', 'Jenko does something "sciencey"', 'Captain Dickson gets mad or raises his voice',
              'Mr. Walters is eating chips', 'Molly kisses someone', 'Jenko is out of touch with what is cool',
              'There is a car chase', 'A gun is fired', 'Someone gets punched'],
    twoDrinks: ['Ms. Griggs is turned on by Jenko', 'Someone does HFS', 'Someone does a "molecule Monday" presentation'],
    finishDrink: ['Schmidt or Jenko arrest someone', 'The Principal is mad at Schmidt and Jenko',
                  'Schmidt is talking to Molly on the phone']
  }),
  Movie.create({title: '22 Jump Street', year: '2014',
    oneDrink: ['Schmidt feels left out', 'Jenko does something athletic that Schmidt can\'t', 'Jenko has a drink',
              'Jenko and Zook are working out', 'Jenko drives their vehicle', 'Captain Dickson gets mad or raises his voice',
              'Mercedes suggests Schmidt is old', 'Someone gets shot', 'The twins finish each others sentence'],
    twoDrinks: ['Jenko catches a pass from Zook', 'Captain Dickson says "it\'s the same case" or "do the same thing"',
                'Ghost gets away'],
    finishDrink: ['Jenko lets Schmidt drive', 'Captain Dickson is raging',
                  'Schmidt or Jenko are watching their spy cameras']
  }),
  TVShow.create({title: 'Two and a Half Men', season: '1',
    oneDrink: ['Charlie makes fun of Allen', 'Charlie is hungover', 'Charlie has a drink', 'Charlie buys liquor',
              'Charlie uses Jake to pick up a girl', 'Charlie is harsh towards his mom', 'Allen makes a scene',
              'Charlie plays his piano', 'Charlie ignores a phone call', 'Anyone says "I understand"',
              'Judith and Allen fight'],
    twoDrinks: ['Jake sings one of Charlie\'s jingles', 'Berta makes a snappy comment', 'Charlie hits on a girl'],
    finishDrink: ['Rose is at the balcony door', 'Someone refers to Judith\'s sexual orientation',
                  'Judith thinks Charlie is a bad role model']
  }),
  TVShow.create({title: 'Kitchen Nightmares [US]', season: '1-7',
    oneDrink: ['Gordon swears', 'Gordon spits out the food he is eating', 'Gordon laughs or makes a joke',
              'Food is raw', 'Something is cooked in a microwave', 'Gordon discovers an unsanitary practice',
              'A table gets up and leaves', 'The owner defends their bad choices', 'Gordon finds a lot of dust',
              'Something smells weird'],
    twoDrinks: ['Gordon shutsdown the restaurant', 'Someone gets fired', 'Gordon doesn\'t like the menu'],
    finishDrink: ['Gordon makes the server or owner try the food',
                  'Owner cries when they see their new restaurant',
                  'Gordon finds a dead animal']
  }),
  TVShow.create({title: 'The Office [US]', season: '1-8',
    oneDrink: ['Jim pranks or tricks Dwight', 'Jim and Pam flirt', 'Michael offends someone', 'Michael holds a meeting',
              'Michael says "That\'s what she said"', 'Dwight does something for Michael', 'Jim stares at the camera',
              'Michael is in the warehouse', 'Stanley is doing a crossword', 'Dwight complains about Jim',
              'Michael irritates Ryan', 'Angela talks about her cats', 'Kevin eats something', 'Dwight talks about beats or his farm'],
    twoDrinks: ['Michael does an impression', 'There is awkward silence',
                'Someone reminds Dwight he is only Assistant to the Regional Manager', 'Someone is mad at Michael'],
    finishDrink: ['Creed steals or admits to a crime', 'Jan or David visit Scranton', 'A party is held',
                  'Michael makes a racist comment or offends someone']
  }),
  TVShow.create({title: 'Hell\'s Kitchen [US]', season: '1-Present',
    oneDrink: ['Gordon swears', 'Gordon spits out the food he is eating', 'A table gets up and leaves',
              'A cook argues with Gordon', 'Food is overcooked', 'Food is raw', 'An arguement breaks out in the dorm',
              'A cook makes a big mistake', 'Something doesn\'t arrive at the pass on time'],
    twoDrinks: ['A cook is kicked out of the kitchen', 'Gordon throws food in the trash', 'A celebrity sits at one of the chefs tables'],
    finishDrink: ['The whole team is kicked out of the kitchen', 'A cook gets eliminated', 'Gordon refuses to try the food']
  }),
  TVShow.create({title: 'Friends', season: '1-10',
    oneDrink: ['Someone is in Central Perk', 'Joey doesn\'t understand a joke', 'Ross says something scientific',
              'Rachel screws up an order at the coffee shop',
              'Monica cleans', 'Phoebe sings', 'Rachel goes shopping', 'Chandler makes a joke', 'Monica and Ross fight',
              'Joey doesn\'t get an acting Job', 'Joey hooks up with someone', 'Someone sits on the couch', 'Ross wines',
              'Monica gets someone to taste her food'],
    twoDrinks: ['Chandler references his terrible childhood', 'They spy on the ugly naked guy',
                'Ross talks about any of his past wives or divorces', 'A family member appears',
                'Someone falls in love'],
    finishDrink: ['Joey gets the role', 'Ross gets married or divorced', 'Ross says "we were on a break"']
  }),
  TVShow.create({title: 'How I Met Your Mother', season: '1-9',
    oneDrink: ['Barney says "epic", "legendary", "bro", or "challenge accepted"', 'Marshall and Lily have sex', 'Ted states a fact',
              'Barney gambles or goes to the stripclub', 'Everytime the group is in MacLaren\'s',
              'Anyone makes fun of Canada or Robin for being Canadian', 'Barney wants or gets a high-five',
              'Barney hits on a girl', 'Ted is on a date', 'A yellow umbrella appears', 'Someone takes a bus or taxi'],
    twoDrinks: ['Barney talks about the Playbook or Bro code', 'Robin makes a Canada reference', 'Barney has a drink thrown in his face',
                'Barney completes a challenge'],
    finishDrink: ['Someone breaks up', 'Someone gets engaged', 'See one of the dopplegangers']
  }),
  TVShow.create({title: 'Brooklyn Nine-Nine', season: '1-Present',
    oneDrink: ['Jake or Amy make an arrest', 'Hitchcock or Skully are eating', 'Gina is mean to someone',
              'Charles doesn\'t realize something he said is weird', 'Someone is interogating a criminal',
              'Jake comes up with a persona', 'Amy sucks up to Holt', 'Terry refers to himself in the third person',
              'Terry is eating yogurt', 'Jake does something childish', 'Rosa gets mad at someone or something'],
    twoDrinks: ['Captain Holt has a fatherly or role model moment with one of the detectives', 'Amy has a drink',
                'Jake makes a Die Hard reference', 'Terry shows how strong he is', 'Doug Judy sings'],
    finishDrink: ['Hitchcock takes his shirt off', 'Something in the precinct is on fire',
                  'The precinct gets a new captain', 'Doug Judy gets away from Jake',
                  'Jake says "title of _____ sextape"']
  }),
  TVShow.create({title: 'That \'70s Show', season: '1-8',
    oneDrink: ['The gang is hanging out in the basement', 'They are in the "circle"', 'Eric is driving the Vista Cruiser',
              'Eric kisses Donna', 'Fez hits on Jackie', 'Eric and Donna fight', 'Michael and Jackie fight', 'Anytime cops show up',
              'Michael doesn\'t get sarcasm', 'Michael hits on someone', 'Laurie does or says something slutty',
              'Red talks about war', 'Red gives Eric chores to do', 'Kitty laughs'],
    twoDrinks: ['Red threatens to put his foot in someones ass', 'Kitty has a drink', 'Eric is a smart mouth',
                'Someone hits Michael'],
    finishDrink: ['Someone falls off the water tower', 'Red has a moment with Eric or Steven', 'Some relationship breaks up']
  }),
  TVShow.create({title: 'Parks and Recreation', season: '1-7',
    oneDrink: ['Leslie has waffles', 'Leslie talks about Pawnee\'s history', 'Leslie doesn\'t like Eagleton',
              'Jerry has an accident', 'Ron shows his dislike for government', 'Ron has breakfast, steak, or whiskey',
              'Ron doesn\'t want to talk to someone',
              'Tom or Andy hit on Anne', 'Tom is a jerk or not helpful', 'Chris refers to someone by their full name',
              'Ben says something nerdy', 'Leslie gets mad', 'Chris takes suplements', 'Chris cooks or eats something healthy',
              'April says something weird', 'Someone is mean to Jerry', 'Something goes over Andy\'s head',
              'Somebody laughs at Jerry'],
    twoDrinks: ['Leslie runs a meeting, public event, or public forum', 'Andy shines someone\'s shoes',
                'Tammy tries to seduce or control Ron', 'Jamm is obnoxious', 'Ron builds something',
                'Ben makes an accounting joke'],
    finishDrink: ['See Little Sebastien', 'Ben quits his job', 'April tells someone she loves them',
                  'Ron smiles or laughs', 'Start calling Jerry a new name']
  }),
  TVShow.create({title: 'Family Guy', season: '1-Present',
    oneDrink: ['Peter is a bad husband', 'Peter is a bad father', 'Brian has a drink', 'Stewie plots to kill his mom',
              'Stewie has a new invention', 'Quagmire says "giggity"', 'Cleveland laughs', 'Joe says something depressing',
              'Peter gets hurt', 'Peter makes a dumb purchase', 'Lois gets mad at Peter', 'Someone makes fun of Meg', 'Someone has sex'],
    twoDrinks: ['There is a cutaway', 'The show makes fun of a celebrity', 'Someone gets drunk'],
    finishDrink: ['Someone dies', 'Brian and/or Stewie time travel', 'Peter gets into a fight']
  }),
  TVShow.create({title: 'Everybody Loves Raymond', season: '1-9',
    oneDrink: ['Ray is watching TV', 'Ray lies to keep the peace', 'Marie is condesending towards Debra',
              'Debra gets upset with Ray', 'Debra comes home with the kids', 'Robert taps his chin',
              'Ray goes to his parent\'s house', 'Robert, Frank, or Marie walk into Ray\'s house without knocking',
              'Ray is at Nemo\'s restaurant', 'Ray is insecure'],
    twoDrinks: ['Robert complains or is jealous of Ray', 'Frank makes a mean joke about Marie',
                'Marie offers Ray food'],
    finishDrink: ['Frank is cheap', 'Ray tries to hide from someone', 'Someone says "everybody loves Raymond"']
  }),
  TVShow.create({title: 'Hockey Night in Canada', season: '1952-Present',
    oneDrink: ['A goal is scored', 'A penalty is called', 'Someone goes offside', 'Icing is called',
              'A shot is blocked', 'Don Cherry cuts off Ron MacLean', 'Someone is knocked down by a hit',
              'Puck goes out of play', 'There is a battle behind the red line'],
    twoDrinks: ['Don Cherry is critical of someone\'s play', 'Ref gets hit by the puck', 'A goalie stops a breakaway or penalty shot'],
    finishDrink: ['There is a fight', 'Game goes to overtime', 'Don Cherry says "keep your stick off the ice"']
  }),
  TVShow.create({title: 'Ghost Adventures', season: '1-Present',
    oneDrink: ['Capture a light anomaly on camera', 'Capture and EVP on a recorder or camera',
              'A voice comes through the spirit box', 'Hear a bang or footsteps', 'One of the guys swear',
              'One of the guys claim to be affected or touched by a spirit', 'Interview someone',
              'Believe they are dealing with a dark entity', 'Someone investigates on their own'],
    twoDrinks: ['One of the guys claim the energy in the room has changed', 'Zak wears a mask',
                'One of the guys needs to go outside for some air or to calm down'],
    finishDrink: ['Capture a figure on camera', 'See an object move on camera', 'Someone is scratched or marked']
  }),
  TVShow.create({title: 'White Collar', season: '1-6',
    oneDrink: ['Neal doesn\'t listen to Peter', 'Neal lies to Peter', 'Neal puts on a hat', 'Neal smiles',
              'Mozzie drinks wine', 'Mozzie has a conspiracy theory', 'Mozzie calls Peter "the suit" or Elizabeth "Mrs. Suit"',
              'Peter is suspicious of Neal', 'Peter drinks coffee', 'Elizabeth is nice to Neal or Mozzie'],
    twoDrinks: ['Peter draws his gun', 'Neal admits to one of his crimes', 'Neal cuts his anklet', 'Elizabeth helps with a case'],
    finishDrink: ['Someone is killed', 'Neal is arrested', 'One of Neal\'s aliases is revealed']
  }),
  TVShow.create({title: 'Prison Break', season: '1-5',
    oneDrink: ['Michael hugs Lincoln', 'Michael flirts with or protects Sarah', 'Michael is in the infirmary',
              'Lincoln punches someone', 'Lincoln yells "LJ"', 'Brad Bellick antogonizes someone',
              'Bagwell shows his tongue', 'Bagwell says "pretty"', 'Sucre helps Michael', 'Sucre calls someone "Papi"',
              'Alex Mahone lies or tries to kill someone', 'Someone mentions "The Company" or "Scylla"',
              'Someone is looking down the barrel of a gun', 'Someone calls Bagwell "T-Bag"'],
    twoDrinks: ['Someone threatens Michael or Lincoln', 'Someone is killed', 'Someone gets betrayed', 'A gun is fired'],
    finishDrink: ['Michael smiles', 'Michael uses his tatoos', 'Michael escapes prison or a near death situation']
  }),
  TVShow.create({title: 'Murdoch Mysteries', season: '1-Present',
    oneDrink: ['George has a crazy theory', 'George says "Higgins"', 'George flirts with or is escorting a woman',
              'George calls detective Murdoch "sir"', 'Inspector Brackenreid gets mad', 'Inspector Brackenreid calls someone "bugalugs"',
              'Henry screws something up', 'Murdoch visits the Morgue', 'Murdoch has a new invention', 'Murdoch says "Toronto Constabulary"',
              'Julia says "William"'],
    twoDrinks: ['A dead body is discovered', 'A clue is discovered', 'Inspector Brackenreid has a drink',
                'Inspector Brackenreid hits someone', 'Someone is tailing a suspect'],
    finishDrink: ['Terrence Meyers shows up', 'Julia makes a sexual remark or move on Murdoch', 'Someone is thrown into a cell']
  }),
  TVShow.create({title: 'The Big Bang Theory', season: '1-12',
    oneDrink: ['Sheldon doesn\'t pickup on sarcasm or irony', 'Sheldon annoys Leonard', 'Sheldon or Leonard are working at their desks',
              'Sheldon is condescending towards Howard',
              'Leonard drives Sheldon somewhere', 'Leonard makes a sarcastic remark to Sheldon',
              'Penny mooches dinner off the guys', 'Penny is drinking', 'Penny makes fun of Sheldon and Leonard\'s relationship',
              'Raj makes a flamboyant remark', 'Raj gets drunk', 'Raj cannot talk to a woman',
              'Raj\'s sexual orientation is questioned',
              'Howard makes fun of Raj', 'Howard makes a sexual joke or remark',
              'Bernadette frightens someone or gets angry', 'Bernadette rips on or makes fun of Howard',
              'Amy calls Penny "bestie"',
              'The guys are in the comic book store'],
    twoDrinks: ['Someone is sitting in Sheldon\'s spot', 'Sheldon kisses Amy', 'Howard does a magic trick',
                'Someone has sex', 'A couple breaks up'],
    finishDrink: ['Someone meets a celebrity', 'Sheldon says "Bazinga"', 'Sheldon gets drunk', 'Sheldon\'s mom scolds him']
  }),
  BoardGame.create({title: 'Monopoly', company: 'Hasbro',
    oneDrink: ['One of your opponents passes Go', 'You end up in jail', 'You land on one of your opponent\'s properties',
              'Someone else rolls a six', 'You don\'t purchase a vacant property', 'You roll a one', 'End of each round',
              'Two players in a row roll the same number', 'Dice rolls off the table'],
    twoDrinks: ['One of your opponents escape jail', 'One of your opponents adds an additional house', 'Someone lands on a railroad'],
    finishDrink: ['One of your opponents builds a hotel', 'Anyone lands on Boardwalk']
  }),
  BoardGame.create({title: 'Risk', company: 'Hasbro',
    oneDrink: ['One of your opponents conquers one of your territories', 'Your opponent defends the territory you are attacking',
              'Every 15 minutes of gaming', 'One of your opponents controls 3 adjacent territories at the end of their turn',
              'You cannot capture a territory that has fewer defenders', 'You don\'t conquer a territory during your turn',
              'Each time you move troups to a different territory'],
    twoDrinks: ['Any player rolls a six', 'All players accept the one with the most territories at the end of the round',
                'One of your opponents controls 5 adjacent territories at the end of their turn'],
    finishDrink: ['A dice roll between any 2 players ends in a tie', 'One of your opponents controls 7 adjacent territories at the end of their turn',
                  'An army is eliminated']
  }),
  BoardGame.create({title: 'Clue', company: 'Hasbro',
    oneDrink: ['You have to show one of your cards to an opponent', 'You enter a new room', 'You force an opponent into a new room',
              'Everytime you can check off a new square on your game card', 'You roll a one', 'Someone has no card to show you (1 for each)',
              'End of each round'],
    twoDrinks: ['Any player rolls a six', 'You finish a turn in the same room you started', 'Someone tries to solve the crime'],
    finishDrink: ['You end a turn not in any room', 'No one can show you a card', 'Someone is wrong when trying to solve the crime']
  }),
  BoardGame.create({title: 'Chutes and Ladders Game', company: 'Hasbro',
    oneDrink: ['You climb up a ladder', 'You fall down a chute', 'You roll a one', 'One of your opponents finishes the game', 'An opponent passes you',
              'End of each round', 'You end a round in first place', 'You end a round in last place'],
    twoDrinks: ['Any player rolls a 6', 'Any of your opponents climbs up a ladder', 'Any two players are on the same square'],
    finishDrink: ['You fall down a chute to the first row of the board', 'You climb a ladder to the top row of the board', 'You reach the middle row of the board']
  }),
  BoardGame.create({title: 'Snakes and Ladders',
    oneDrink: ['You climb up a ladder', 'You fall down a snake', 'You roll a one', 'One of your opponents finishes the game', 'An opponent passes you',
              'End of each round', 'You end a round in first place', 'You end a round in last place'],
    twoDrinks: ['Any player rolls a 6', 'Any of your opponents climbs up a ladder', 'Any two players are on the same square'],
    finishDrink: ['You fall down a snake to the first row of the board', 'You climb a snake to the top row of the board', 'You reach the middle row of the board']
  }),
  BoardGame.create({title: 'Uno', company: 'Mattel',
    oneDrink: ['The game switches directions', 'The colour to play changes', 'You force an opponent to pick up cards',
              'Any players plays a 10', 'The pickup pile runs out of cards', 'The same number is played by two players in a row',
              'You cannot play a card', 'End of each round'],
    twoDrinks: ['Your turn is skipped', 'Someone says "uno" (down to last card)', 'Any chain of 2 pickup cards'],
    finishDrink: ['Any chain of 3 pickup cards', 'You only have one care and then pickup a card', 'Any player wins the game']
  }),
  VideoGame.create({title: 'NHL 18', year: '2017',
    oneDrink: ['You deke out your opponent', 'You get a penalty', 'You go offside', 'You ice the puck', 'You lose a faceoff',
              'You hit the post or crossbar', 'You fan on a one timer', 'Your opponent clears the puck while your on a power play',
              'You lose the puck from a poke check'],
    twoDrinks: ['Your opponent scores a goal on you', 'One of your shots gets blocked', 'Your player\'s stick breaks'],
    finishDrink: ['You lose a fight', 'You don\'t score when on a breakaway or penalty shot', 'A player is injured']
  }),
  VideoGame.create({title: 'NHL 19', year: '2018',
    oneDrink: ['You deke out your opponent', 'You get a penalty', 'You go offside', 'You ice the puck', 'You lose a faceoff',
              'You hit the post or crossbar', 'You fan on a one timer', 'Your opponent clears the puck while your on a power play',
              'You lose the puck from a poke check'],
    twoDrinks: ['Your opponent scores a goal on you', 'One of your shots gets blocked', 'Your player\'s stick breaks'],
    finishDrink: ['You lose a fight', 'You don\'t score when on a breakaway or penalty shot', 'A player is injured']
  }),
  Movie.create({title: 'The Lord of the Rings: The Two Towers', year: '2002',
    oneDrink: ['Someone carries Merry and Pippin', 'A tree moans',
              'Golum says "precious"', 'Golum calls Frodo "master"',
              'Sam is mean to Golum', 'See the Evenstar necklace that Arwen gave Aragorn',
              'Legolas fires an arrow', 'Gimli or Legolas tell the other how many kills they have',
              'Théoden draws his sword'],
    twoDrinks: ['Golum talks to himself', 'Gimli rides on the back of a horse',
                'Frodo and Sam come across supporters of Sauron', 'Éowyn talks to Aragorn'],
    finishDrink: ['Frodo draws Sting', 'Gandalf finds Aragorn, Legolas, and Gimli',
                  'Someone speaks in Elvish', 'Gimli says "don\'t tell the elf"']
  }),
  Movie.create({title: 'The Lord of the Rings: The Return of the King', year: '2003',
    oneDrink: ['Gimli, Merry, or Pippin ride on a horse with someone else',
              'Sam attacks or is angry at Golum', 'One of the Hobbits uses a sword',
              'Golum says "precious"', 'Golum calls Frodo "master"',
              'Aragorn draws Andúril (the king\'s sword)', 'Legolas fires an arrow',
              'Gimli or Legolas tell the other how many kills they have',
              'Someone in the Fellowship has a drink'],
    twoDrinks: ['Golum attacks Frodo', 'See the eye of Sauron',
                'Gandalf uses his staff', 'One of the Hobbits draws a sword'],
    finishDrink: ['Golum attacks Frodo', 'A calvary charge starts', 'An elephant is taken down']
  }),
  Movie.create({title: 'Comedy Central Roast of Justin Bieber', year: '2015',
    oneDrink: ['Someone makes fun of Kevin for being short', 'Someone makes fun of Shaq for being big',
              'Someone suggests Natasha is a slut', 'Someone brings up Martha Stewart going to prison',
              'Someone makes fun of Snoop Dogg or Martha Stewart for being old',
              'Someone brings up Hannibal exposing Bill Cosby', 'Someone makes fun of Jeff Ross\' appearance',
              'Someone brings up one of Justin\'s crimes', 'A new member of the dais starts roasting'],
    twoDrinks: ['Kevin Hart laughs really loud', 'Someone brings up one of Justin\'s ex-girlfriends',
                'Someone gives a standing ovation for a joke'],
    finishDrink: ['Someone runs around the podium', 'Someone says "ISIS"', 'Someone makes fun of someone in the crowd']
  }),
  Movie.create({title: 'Comedy Central Roast of James Franco', year: '2013',
    oneDrink: ['Seth Rogen or Jonah Hill laugh really loud', 'Someone makes fun of James\' appearance',
              'Someone suggest that James is gay', 'Someone makes fun of James\' Oscars performance',
              'Someone makes fun of Jonas\' size', 'Someone makes an Indian joke towards Aziz',
              'Jonah covers his face', 'A shot of James with his eyes squinting',
              'A new member of the dais starts roasting'],
    twoDrinks: ['Someone makes fun of Sarah\'s age', 'Someone makes fun of Aziz for hanging out with Kanye West',
                'Someone makes fun of Jeff Ross\' or Nick Kroll\'s lack of fame'],
    finishDrink: ['Someone does an impression', 'Someone makes fun of Bill or Andy for leaving SNL',
                  'Aziz slaps the couch']
  }),
  Movie.create({title: 'Harry Potter and the Socerers Stone', year: '2001',
    oneDrink: ['Harry performs something magical', 'Harry learns something about his past',
              'Hermione answers a question', 'Hermione corrects someone',
              'Ron gets scared', 'Ron says "bloody hell" or "blimey"','A staircase moves',
              'A ghost or painting talks', 'Anyone recognizes Harry by his name',
              'Anyone says "Harry"', 'Anyone talks about Harry\'s parent'],
    twoDrinks: ['Hagrid says "I should not have said that"' , 'Someone wins or loses house points',
                'Someone talks about Voldemort', 'Snape is accused of being bad'],
    finishDrink: ['Harry looks into the Mirror of Erised', 'Harry puts on the cloak of invisibility',
                  'Ron plays Wizard\'s chess', 'Neville cannot remember something']
  }),
  Movie.create({title: 'Smallfoot', year: '2018',
    oneDrink: ['A Yeti refers to a human as a Smallfoot', 'Someone is fired at the gong',
              'Percy uses his phone', 'The Stonekeeper denies or covers up the existence of the "Smallfoot"',
              'Someone rings the gong', 'Someone jumps through the clouds',
              'Someone says "push it down"'],
    twoDrinks: ['One of the stones is referenced', 'Someone goes over the side of the cliff',
                'Fleem is pessemistic or selfish', 'Someone refers to the sun as the "sky snail"'],
    finishDrink: ['Someone misses ringing the gong', 'One of the bigfoot visits the village',
                  'Migo sees a plane']
  }),
  Movie.create({title: 'Elf', year: '2003',
    oneDrink: ['Buddy eats or drinks something that has sugar', 'A person or animal attacks Buddy',
              'Buddy screams', 'Walter is angry at something Buddy did',
              'Buddy is hit by something', 'Buddy puts up Christmas decorations',
              'Mr. Greenway yells at Walter', 'Buddy starts singing'],
    twoDrinks: ['Buddy eats candy off the street', 'Buddy says "Santa"',
                'Buddy uses a phone', 'Jovie starts singing'],
    finishDrink: ['Buddy runs around in a revolving door', 'Buddy says "son of a nutcracker"',
                  'Buddy is in Santa\'s sleigh']
  }),
  Movie.create({title: 'Kong: Skull Island', year: '2017',
    oneDrink: ['Someone dies', 'A helicopter is knocked down',
              'A new type of creature appears', 'Kong throws something',
              'Kong runs or jumps', 'A gun is fired',
              'Packard wants to kill Kong'],
    twoDrinks: ['Kong attacks someone', 'Mason takes a picture',
                'A bomb is dropped', 'Someone talks over a radio or walkie-talkie'],
    finishDrink: ['Kong sees a human but doesn\'t attack ', 'Kong helps someone',
                  'Kong gets hurt', 'Someone tries to help Kong']
  }),
];

export default allGames;
