import Movie from 'drinking-game/models/movie';
import TVShow from 'drinking-game/models/tv-show';
import BoardGame from 'drinking-game/models/board-game';

const movies = [
  Movie.create({title: 'Larry the Cable Guy: Health Inspector', year: '2006',
    oneDrink: ['Someone says "dickweed"', 'Donnie throws a soccer ball', 'Larry Tries to help Jack',
              'Someone farts', 'Larry suggests Butlin is a boy', 'Larry refers to himself in the 3rd person',
              'Someone refers to Larry\'s truck as the "Larrymobile"', 'Larry eats a Moonpie'],
    twoDrinks: ['Larry says "I can do this all day"'],
    finishDrink: ['The mayor looks at some woman\'s boobs']
  }),
  Movie.create({title: 'Django Unchained', year: '2012',
    oneDrink: ['Someone uses the n-word', 'A lantern is lit', 'Someone has a drink', 'Someone fires a gun', 'A woman screams'],
    twoDrinks: ['Dr. Schultz\'s horse bows'],
    finishDrink: ['Django looks through his telescope']
  }),
  Movie.create({title: 'Action Point', year: '2018',
    oneDrink: ['D.C. calls his daughter "chicken butt"', 'Anyone calls D.C.\'s daughter "Boogie"', 'D.C. refers to his staff as the "shit birds"',
              'Everytime someone splashes into the water', 'The bear drinks a beer', 'D.C. throws away his beer can'],
    twoDrinks: ['D.C. gets hit on the head', 'Bennie takes some pills', 'Killer is holding a snake'],
    finishDrink: ['The bear drinks whiskey', 'D.C. is launched through the barn wall']
  }),
  Movie.create({title: 'Tag', year: '2018',
    oneDrink: ['Someone new gets tagged', 'Everytime Jerry avoids a tag', 'Everytime someone is in a costume',
              'Everytime someone has a drink', 'Chilli or Bob hit on Cheryl', 'Hogan\'s wife acts crazy',
              'Group goes to Hogan\'s mom\'s basement', 'Someone gets knocked to the ground'],
    twoDrinks: ['Rest of the group tries to get information on where Jerry is', 'Don\'t let Lou be part of the game',
                'Someone runs away'],
    finishDrink: ['Everytime the group makes an ammendment', 'Jerry breaks a window']
  }),
  Movie.create({title: 'Superbad', year: '2007',
    oneDrink: ['Evan uses a phone', 'Seth and Evan talk about sex', 'Seth talks to Jules',
              'Someone looks at Fogell\'s fake ID', 'Seth gets mad at Fogell', 'Someone has a drink',
              'Seth tries to steal alcohol', 'Seth and Evan argue'],
    twoDrinks: ['Jesse spits on someone', 'Someone calls Fogell "McLovin"', 'One of the cops pulls out his gun'],
    finishDrink: ['Seth gets blood on his pants', 'Seth gets hit by a car', 'Someone fire a gun']
  }),
  Movie.create({title: 'Blockers', year: '2018',
    oneDrink: ['Someone takes a picture', 'Mitchell doesn\'t understand a youth reference', '',
              'Someone has a drink', 'Julie kisses Auston', 'Sam sees her crush', 'Someone stands through the roof of the limo',
              'Mitchell does something he doesn\'t want to', 'One of the parents reconciles with their kid'],
    twoDrinks: ['Someone pukes', 'Kayla does drugs', 'They catch Auston\'s parents having sex'],
    finishDrink: ['Hunter gets knocked down', 'Someone mentions Hunter cheated on his wife']
  }),
  Movie.create({title: 'The Lord of the Rings: The Fellowship of the Ring', year: '2001',
    oneDrink: ['Someone smokes a pipe', 'Merry and Pippin get into michief', 'A ringwraith appears',
              'Sam stands up for Frodo', 'Strider/Aragorn defends the Hobbits', 'Frodo gets away from a ringwraith',
              'Boromir acts sketchy', 'Legolas fires an arrow', 'Someone tries to take the ring from Frodo',
              'Someone sees the eye of Sauron'],
    twoDrinks: ['Someone goes into hiding', 'Frodo wears the ring', 'Gandalf gets mad at Merry or Pippen'],
    finishDrink: ['Someone gets betrayed', 'Someone speaks in Elvish']
  })
];

const tvShows = [
  TVShow.create({title: 'Two and a Half Men', season: '1',
    oneDrink: ['Charlie makes fun of Allen', 'Charlie is hungover', 'Charlie has a drink', 'Charlie buys liquor',
              'Charlie uses Jake to pick up a girl', 'Charlie is harsh towards his mom', 'Allen makes a scene',
              'Charlie plays his piano', 'Charlie ignores a phone call', 'Anyone says "I understand"',
              'Judith and Allen fight'],
    twoDrinks: ['Jake sings one of Charlie\'s jingles', 'Berta makes a snappy comment', 'Charlie hits on a girl'],
    finishDrink: ['']
  }),
  TVShow.create({title: 'Kitchen Nightmares [US]', season: '1-7',
    oneDrink: ['Gordon swears', 'Gordon spits out the food he is eating', 'A table gets up and leaves',
              'The owner defends their bad choices', 'Gordon laughs or makes a joke', 'Food is raw'],
    twoDrinks: ['Gordon shutsdown the restaurant', 'Someone gets fired'],
    finishDrink: ['Gordon makes the server or owner try their food',
                  'Owner cries when they see their new restaurant']
  }),
  TVShow.create({title: 'The Office [US]', season: '1-8',
    oneDrink: ['Jim pranks or tricks Dwight', 'Jim and Pam flirt', 'Michael offends someone', 'Michael holds a meeting',
              'Michael says "That\'s what she said"', 'Dwight does something for Michael', 'Jim stares at the camera',
              'Michael is in the warehouse', 'Stanley is doing a crossword', 'Jan gets mad at Michael', 'Dwight complains about Jim',
              'Someone wins a Dundie', 'Dwight interogates someone', 'Michael irritates Ryan', 'Michael causes a conflict',
              'Michael kisses someone', 'Angela talks about her cats', 'Kevin eats something', 'Dwight talks about beats or his farm'],
    twoDrinks: ['Michael does an impression', 'There is awkward silence', 'Jan or David visit Scranton',
                'Someone calls Dwight "Assistant to the Regional Manager"', 'Someone shouts at Michael'],
    finishDrink: ['Creed steals or admits to a crime', 'A party is held', 'Michael makes a racist comment',
                  'Someone is fired', 'Mose is running']
  }),
  TVShow.create({title: 'Hell\'s Kitchen [US]', season: '1-Present',
    oneDrink: ['Gordon swears', 'Gordon spits out the food he is eating', 'A table gets up and leaves',
              'A cook argues with Gordon', 'Food is overcooked', 'Food is raw', 'An arguement breaks out in the dorm'],
    twoDrinks: ['A cook is kicked out of the kitchen', 'Gordon throws food in the trash'],
    finishDrink: ['The whole team is kicked out of the kitchen',
                  'A cook gets eliminated']
  }),
  TVShow.create({title: 'Friends', season: '1-10',
    oneDrink: ['Joey doesn\'t understand a joke', 'Ross says something scientific', 'Rachel screws up an order at the coffee shop',
              'Monica cleans', 'Phoebe sings', 'Rachel goes shopping', 'Chandler makes a joke', 'Monica and Ross fight',
              'Joey doesn\'t get an acting Job', 'Joey hooks up with someone', 'Someone sits on the couch', 'Ross wines',
              'Monica gets someone to taste her food'],
    twoDrinks: ['Chandler references his terrible childhood', 'They spy on the ugly naked guy', 'Ross talks about any of his past wives or divorces'],
    finishDrink: ['Ross gets divorced', 'Ross says "we were on a break"']
  }),
  TVShow.create({title: 'How I Met Your Mother', season: '1-9',
    oneDrink: ['Barney says "epic", "legendary", "bro", or "challenge accepted"', 'Marshall and Lily have sex', 'Ted states a fact',
              'Barney gambles', 'Barney goes to the stripclub', 'Anyone gets drunk', 'Everytime the group is in MacLaren\'s',
              'Anyone makes fun of Canada or Robin for being Canadian', 'Barney wants or gets a high-five', 'Any two people in the group are fighting',
              'Barney hits on a girl', 'Ted is on a date', 'A yellow umbrella appears', 'Someone takes a bus or taxi'],
    twoDrinks: ['Barney talks about the Playbook or Bro code', 'Robin makes a Canada reference', 'Barney has a drink thrown in his face',
                'Barney completes a challenge', 'Barney hooks up with a girl'],
    finishDrink: ['Someone breaks up', 'Someone gets engaged', 'See one of the dopplegangers', 'Two people get into a sword fight']
  }),
  TVShow.create({title: 'Brooklyn Nine-Nine', season: '1-Present',
    oneDrink: ['Jake or Amy make an arrest', 'Hitchcock or Skully are eating', 'Jake and Amy flirt', 'Gina is mean to someone',
              'Charles says something weird', 'Someone is interogating a criminal', 'Jake comes up with a persona',
              'Amy sucks up to Holt', 'Adrian says or does something weird', 'Terry refers to himself in the third person',
              'Terry is eating yogurt', 'Jake does something childish', 'Rosa gets mad at someone or something'],
    twoDrinks: ['Doug Judy sings', 'Captain Holt has a fatherly moment with one of the detectives', 'Amy has a drink',
                'Jake makes a Die Hard reference', 'Terry shows how strong he is'],
    finishDrink: ['The precinct gets a new captain', 'Hitchcock takes his shirt off', 'Something in the precinct is on fire']
  }),
  TVShow.create({title: 'That \'70s Show', season: '1-8',
    oneDrink: ['The gang is hanging out in the basement', 'They are in the "circle"', 'Eric is driving the Vista Cruiser',
              'Eric kisses Donna', 'Fez hits on Jackie', 'Eric and Donna fight', 'Michael and Jackie fight', 'Anytime cops show up',
              'Michael doesn\'t get sarcasm', 'Michael hits on someone', 'Laurie does or says something slutty',
              'Red talks about war', 'Red gives Eric chores to do', 'Kitty laughs'],
    twoDrinks: ['Red threatens to put his foot in someones ass', 'Kitty has a drink', 'Eric is a smart mouth'],
    finishDrink: ['Someone falls off the water tower', 'Red has a moment with Eric or Steven', 'Some relationship breaks up']
  }),
  TVShow.create({title: 'Parks and Recreation', season: '1-7',
    oneDrink: ['Leslie has waffles', 'Jerry has an accident', 'Ron has breakfast, steak, or whiskey',
              'Tom hits on Anne', 'Chris refers to Anne by her full name', 'Ben says somethign nerdy',
              'Leslie gets mad', 'Chris takes suplements', 'Chris cooks or eats something healthy',
              'April says something weird', 'Someone is mean to Jerry', 'Something goes over Andy\'s head'],
    twoDrinks: ['Leslie runs a meeting or public forum', 'Andy shines someone\'s shoes', 'Tammy tries to seduce or control Ron',
                'Jamm is obnoxious', 'Ron builds something', 'Ben makes an accounting joke'],
    finishDrink: ['See Little Sebastien', 'Ben quits his job', 'April tells someone she loves them', 'Ron smiles or laughs']
  }),
  TVShow.create({title: 'Family Guy', season: '1-Present',
    oneDrink: ['Peter is a bad husband', 'Peter is a bad father', 'Brian has a drink', 'Stewie plots to kill his mom',
              'Stewie has a new invention', 'Quagmire says "giggity"', 'Cleveland laughs', 'Joe says something depressing',
              'Peter gets hurt', 'Peter makes a dumb purchase', 'Lois gets mad at Peter', 'Someone makes fun of Meg', 'Someone has sex'],
    twoDrinks: ['There is a cutaway', 'The show makes fun of a celebrity', 'Someone gets drunk'],
    finishDrink: ['Someone dies', 'Brian and/or Stewie time travel', 'Peter gets into a fight']
  })
];

const boardGames = [
  BoardGame.create({title: 'Monopoly',
    oneDrink: ['One of your opponents passes Go', 'You end up in jail', 'You land on one of your opponent\'s properties'],
    twoDrinks: ['One of your opponents escape jail', 'One of your opponents adds an additional house'],
    finishDrink: ['One of your opponents builds a hotel']
  })
];

export default {movies, tvShows, boardGames};
