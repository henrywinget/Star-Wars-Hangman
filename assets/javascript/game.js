//JS code for Star Wars hangman!

//Optional code for Star Wars API
// function SWAPI () {
//     var SWterm = false;
//     var queryURL = "https://swapi.co/api/";
//     //Calls our TMDB API to figure the movie API
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         var data = response.results;
//         console.log(data);
//         var movie = data[0];
//         console.log(movie);
//         var movieID = movie.id;
//         console.log(movieID);
// }
// }

var hangman = {
//Array of "Star Words" to use
starWords : {
chewbacca: {
    name: "Chewbacca",
    image: "Chewbacca.png",
    description: "Known primarily for his adventures with Han, Luke, and, briefly, Jedi Master Yoda, 'Chewie' is actually married, has a son named Lumpawaroo, and was a military leader on his home planet Kashyyyk.",
    song: "assets/audio/chewbacca.wav"
},
skywalker: {
    name: "Skywalker (family)",
    image: "skywalker.png",
    description: "The most recognizable and famous family name in the galaxy, and also the premier focus for all three Star Wars trilogies. Don't believe me? There's the obvious that 1-3 are about Anakin, and 4-6 is about Luke and Leia, but, although the argument that the protagonist of the 3rd trilogy revolves around Rey, whose lineage is still, even after The Last Jedi, unknown, the real focus of the new trilogy is on Ben Solo/Kylo Ren, the grandson of Anakin/Darth Vader. This family is given credit to bringing balance to Force and, by the time episode 9 wraps up, this will hold even more weight. That's not a prediction, that's a prophecy.",
    song: "assets/audio/skywalker.wav"
},
yavin: {
    name: "Yavin 4",
    image: "yavin.png",
    description: "One of the most famous and recognized planets in the galaxy for one simple fact: it was the setting for destruction of the First Death Star. In fact, every single timeline in the Star Wars universe is based on either 'Before the Battle of Yavin' or 'After the Battle of Yavin'. Mind (and Death Star) = blown.",
    song: "assets/audio/yavin.WAV"
},
tatooine: {
    name: "Tatooine",
    image: "Tatooine.png",
    description: "The famous setting of the twin suns, the homeworld of both Anakin and Luke Skywalker, Tusken Raiders, Jawas, Jabba the Hutt, etc. Well, I guess you'll never find a more wretched hive of scum and villainy.",
    song: "assets/audio/tatooine.mp3"
},
artoodeetoo: {
    name: "R2D2",
    image: "r2d2.png",
    description: "The real protagonist of the Star Wars movies. This guy was responsible for saving everyone's behind in the Invasion of Naboo, the Battle of Geonosis, the Battle of Coruscant, and multiple other events throughout the Clone Wars and Galactic Civil War. He has never had a full memory-wipe or programming update and, therefore, is one of the few characters in the midst who are fully aware of all events proceding Order 66.",
    song: "assets/audio/R2D2.wav"
},
alderaan: {
    name: "Alderaan",
    image: "Alderaan.png",
    description: "The first full planetary destruction in the history of the galaxy, Alderaan met it's fate under orders from General Grand Moff Tarkin after attempting to discover the location of the hidden Rebel Base from Princess Leia. This was Leia's home planet after being adopted by Bail Organa shortly after Order 66.",
    song: "assets/audio/alderaan.wav"
},
kenobi: {
    name: "Obi-Wan Kenobi",
    image: "Kenobi.png",
    description: "Obi-Wan Kenobi, appearing first as the wise, old mentor to Luke Skywalker, was born on the planet Stewjon, learned as youngling under Master Yoda, and eventually was taken on as the Padawan learner to Qui-Gon Jinn. After the defeat of Darth Maul, he was promoted to Jedi Knight, took on Anakin Skywalker as his Padawan, and was promoted to Jedi Master after his multiple successes in The Clone Wars. Also, in canon, he later killed Darth Maul (again) in his exile on Tattooine",
    song: "assets/audio/obiwan.wav"
},
yoda: {
    name: "Yoda",
    image: "yoda.png",
    description: "Grand Master Yoda was originally described by George Lucas as being the archetypical 'insignificant creature found on the side of the road who turns out to be the grand wizard'. Very appropriate, I'd say. Turns out, Yoda is only one of two confirmed members of his own species in canon, the other being the much younger female Jedi Master Yaddle, who left the Jedi council during the Clone Wars.",
    song: "assets/audio/yoda.WAV"
},
lightsaber: {
    name: "Lightsaber",
    image: "lightsaber.png",
    description: "'A more elegant weapon for a more civilized age'. Probably the most badass weapon in all of fiction. Can you think where Star Wars would be without the lightsaber? During order 66, the Emperor did not just call for the annihilation of all Jedi, but also publicly destroyed every collected, ownerless lightsaber. It is a common fan theory that Luke's green lightsaber crystal actually came from Qui-Gon Jinn's hilt, after Luke returned to Obi-Wan's hut on Tattooine shortly before the events of Return of the Jedi.",
    song: "assets/audio/lightsaber.mp3"
},
emperor: {
    name: "Emperor Palpatine (Darth Sidious)",
    image: "palpatine.png",
    description: "The most powerful dark side user in history and wielder of 'unlimited power', Sheev Palpatine used his supreme knowledge of the Force as well as his equally strong skills of guile and persuasion to harken the rise of the first Galactic Empire. Also known as 'Darth Sidious', he, aided by his former master Darth Plaguis, used the Dark Side to shift the balance of the Force to actually spawn Anakin Skywalker inside the womb of Shmi Skywalker, a slave on Tattooine.",
    song: "assets/audio/emperor.wav"
},
destiny: {
    name: "Destiny (aka the Force!)",
    image: "destiny.png",
    description: "A living narrative of Star Wars, destiny drives the fate of many characters. This destiny is the Force, and realizing this opens the doors of Star Wars much more wide than the simple space opera of the later 70's and early 80's. It surrounds us and penetrates us; it binds the galaxy together.",
    song: "assets/audio/destiny.wav"
}, 
millenium: {
    name: "Millenium Falcon",
    image: "millenium.png",
    description: "The ship that made the Kessel run in less than 12 parsecs! This bucket of bolts was won by Han Solo from Lando Calrissian over a card game and has been heavily modified since, hence it having a few surprises left in her, sweetheart. Fun fact, even though the Kessel run quote is a famous oversight, much of the Galaxy is mapped out by safe travel paths known by a unit of measurement 'parsec' and the Kessel run is usually taken in 15-16 due to nearby asteroid fields.",
    song: "assets/audio/millenium.wav"
},
calrissian: {
    name: "Lando Calrissian",
    image: "Calrissian.png",
    description: "A smooth talking entrepreneur, Lando was a pivotal member of the Rebel Alliance and is most famously known for handing over Han Solo and company to the Galactic Empire, and for Han's subsequent rescue at Jabba's palace. Lando was born on the planet Soccoro and was a smuggler before his years as an honest businessman.",
    song: "assets/audio/calrissian.mp3"
},
organa: {
    name: "Organa (family)",
    image: "Organa.png",
    description: "The House of Organa, also known as the Royal House of Alderaan was an Alderaanian Noble House that dated back to the earliest days of Alderaan's colonization. Viceroy Bail Organa adopted Leia after her mother's death and he and his wife Breha Organa helped make her into the badass, loud-mouthed, confident general she became. This family was wiped out during the destruction of Alderaan, sans Leia.",
    song: "assets/audio/organa.WAV"
},
nerfherder: {
    name: "Scruffy-looking, nerfherder!",
    image: "nerfherder.png",
    description: "It's a real thing! Nerfs were a species of furry, non-sentient animals raised for their milk, meat, and hide, typically on planets like Alderaan where Leia was raised. The animals were known to shed and expel filthy mucus through the nose and mouth, and thus being a nerf-herder was typically looked down on.",
    song: "assets/audio/nerfherder.wav"
},
tauntaun: {
    name: "Tauntaun",
    image: "tauntaun.png",
    description: "Always Luke-warm! Although covered in furr, Tauntauns are actually reptillian and, though they can easily stand the day-time temperature of Hoth, they cannot handle the extremes of night that would drop below -80 degrees Fahrenheight.",
    song: "assets/audio/tauntaun.wav"
},
bantha: {
    name: "Bantha",
    image: "bantha.png",
    description: "Used primarily by Tusken Raiders of Tattooine, and by other sentient creatures of desert planets, they were utilized by many other species for products such as Bantha steak, butter and clothes or furniture, though the sand-people worshipped them and held any attack on a bantha as an attack on them!",
    song: "assets/audio/bantha.mp3"
},
ewok: {
    name: "Ewok",
    image: "ewok.png",
    description: "Ewoks were furry individuals that stood about one meter tall, hailing from the Forest Moon of Endor. They used spears, slings, and knives as weapons, used hang gliders as vehicles, and were also physically strong enough to overpower a combat trained human!",
    song: "assets/audio/ewok.wav"
}, 
wampa: {
    name: "Wampa",
    image: "wampa.png",
    description: "The wampa, or wampa ice creature, was a carnivorous, white-furred species living on the planet Hoth. Trandoshan hunters often kept trophies such as wampa hide at lodges such as on Wasskah, and during the Galactic Civil War, the Rebels were often on guard for random Wampa attacks on their bases as the ice creatures seeked shelter, warmth, and food.",
    song: "assets/audio/wampa.mp3"
},
solo: {
    name: "Han Solo",
    image: "Solo.png",
    description: "The original half-witted, scruffy looking, nerfherder, Han Solo's business on Tattooine just before the Battle of Yavin spiraled his career from low-life smuggler to war hero and General of the Rebel Alliance. Solo ran afoul of Jabba the Hutt after ditching a shipment of spice to avoid trouble with the Empire, owing the Hutt a great deal of money as a result. Han was the husband of Leia Organa, father of Ben Solo, and lifelong friend of Chewbacca.",
    song: "assets/audio/solo.wav"
},
vader: {
    name: "Darth Vader (Anakin Skywalker)",
    image: "vader.png",
    description: "The Chosen One. The Empire's fist. The Commander of the 501st legion. Darth Vader was the symbol of tyranny and oppression in the galaxy and was the sole instrument in the execution of Order 66. The son of Shmi Skywalker, husband of Padme Amidala, biological father of Luke and Leia, and grandfather of Ben Solo (Kylo Ren), Anakin Skywalker's turn to the Dark Side was the symbol of the Jedi's hubris and the irony of their misinterpretation of the chosen one prophecy. The word 'Vader' also can be tied to an old Dutch translation of 'father'.",
    song: "assets/audio/vader.wav"
}
},

//Variables that set stats for the game

wordInPlay: null,
lettersOfTheWord: [],
matchedLetters: [],
guessedLetters: [],
guessesRem: 0,
totalGuesses: 0,
letterGuessed: null,
wins: 0,
losses: 0,

//When page first loads, this method is called

beginGame: function(){
    var objWord = Object.keys(this.starWords);
    this.wordInPlay = objWord[Math.floor(Math.random() * objWord.length)];

    //Split chosen word into separate letters
    this.lettersOfTheWord = this.wordInPlay.split("");
    //Displays the word to in underscores
    this.rebuildWordView();
    //Sets the # of guesses into the HTML
    this.processUpdateTotalGuesses();

},

//When user guesses a letter 
updatePage: function(letter) {
    //If there are no guesses left, restart the game
    var lose;

    if (this.guessesRem === 0) {
        this.restartGame();
        lose = true;
    }
    //When you lose, lossses counter increases by 1
    if (lose) {
        this.losses ++;
        document.querySelector("#losses").innerHTML = this.losses;
    }
    
    else {
        //Check for and deal with incorrect guesses
        this.updateGuesses(letter);
        //Check for and deal with correct guesses
        this.updateMatchedLetters(letter);
        //Change the view of the sheet; guessed letters are revealed and unguessed stay " _"
        this.rebuildWordView();

        //If the user wins, restart the game
        if (this.updateWins() === true) {
            this.restartGame();
        }
    }
},

//Function determines what occurs when user makes incorrect guess
updateGuesses: function(letter) {
    //If the letter is not in guessedLetters and letter is not in lettersOfTheWord array
    if ((this.guessedLetters.indexOf(letter)=== -1) && (this.lettersOfTheWord.indexOf(letter) === -1)) {
        //Add letter to guessedLetters array
        this.guessedLetters.push(letter);

        //Decrease guesses by 1
        this.guessesRem--;

        //Update guesses remaining and guesses letters on page
        document.querySelector("#guesses-rem").innerHTML = this.guessesRem;
        document.querySelector("#guessed").innerHTML = this.guessedLetters.join(", ");
    }
},

//Function sets initial guesses user gets
processUpdateTotalGuesses: function() {
    //User will get more guesser longer the word is
    this.totalGuesses = this.lettersOfTheWord.length + 5;
    this.guessesRem = this.totalGuesses;

    //Reads guesses remaining on the page
    document.querySelector("#guesses-rem").innerHTML = this.guessesRem;
},

//Function determines what happens if user makes a correct guess
updateMatchedLetters: function(letter) {
    for (var i = 0; i < this.lettersOfTheWord.length; i++) {
        //If guessed letter is in the word and it hasn't been guessed
        if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
            //Push new guessed letter into matchedLetters array
            this.matchedLetters.push(letter);
        }
    }
},

//Function builds display of word that is being guessed; ex: "li_ght_aber"
rebuildWordView: function (){
    var wordView = "";

    //Loop through letters of word trying to guess
    for (var i = 0; i < this.lettersOfTheWord.length; i++) {
        //If the current letter has been guessed, display that letter
        if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) !== -1) {
            wordView += this.lettersOfTheWord[i];
        }
        //if it hasn't been guessed, display a "_"
        else {
            wordView += "&nbsp;_&nbsp;"
        }
    }

    //Update page with new string
    document.querySelector("#current").innerHTML = wordView;
},

//Function that restarts the game (resets variables)
restartGame: function() {
    document.querySelector("#guessed").innerHTML = "";
    this.wordInPlay = null;
    this.lettersOfTheWord = [];
    this.matchedLetters = [];
    this.guessedLetters = [];
    this.guessesRem = 0;
    this.totalGuesses = 0;
    this.letterGuessed = null;
    this.beginGame();
    this.rebuildWordView();
},

//Function that checks to see if user has won
updateWins: function() {
    var win;

    //If you haven't correctly guessed a letter in the word yet, set win to false
    if (this.matchedLetters.length === 0) {
        win = false;
    }
    //Otherwise, win is set to true
    else { 
        win = true;
    }

    //If a letter appears in the lettersOfTheWord array, but not in matchedLetters, set win to false
    for (var i = 0; i < this.lettersOfTheWord.length; i++) {
        if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) === -1) {
            win = false;
        }
    }

    //If win is true
    if (win) {
        //Wins plus 1
        this.wins = this.wins + 1;
        //Update wins on page
        document.querySelector("#wins").innerHTML = this.wins;
        //Update starWord on top of image
        document.querySelector("#star-word").innerHTML = "<span>" + this.starWords[this.wordInPlay].name + "</span>";
        //Update image
        document.querySelector("#image").innerHTML = "<img class = 'SW-image' src = 'assets/images/" + this.starWords[this.wordInPlay].image + "' alt='" + "'>";
        //Update description
        document.querySelector("#description").innerHTML = this.starWords[this.wordInPlay].description;
        //Plays audio track per word
        var audio = new Audio(this.starWords[this.wordInPlay].song);
        audio.play();

        //Return true, which will trigger the restart of our game in updatePage function
        return true;
      }
      //If win is fase, return false to updatePage function
      return false;
    }
};
//Start game when page loads
hangman.beginGame();

//When key is pressed
document.onkeyup = function(event) {
    //Capture key and make it lowercase
    hangman.letterGuessed = String.fromCharCode(event.which).toLowerCase();
    //Pass the guessed letter into updatePage function to run game logic
    hangman.updatePage(hangman.letterGuessed);
    //Clears "Any key to start game"
    document.querySelector("#press-start").innerHTML = " "
};

