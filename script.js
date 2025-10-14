const books =  [
  { 
    name : "The Way Of Shadows", 
    author :  { name : "Brent Weeks", born : new date(1977, 3, 7), location : "Montana U.S" } ,
    series :  { name :"The Night Angel Trioligy", number: 1, seriesCompleted : true, otherBooksInSeries : ["Beyond The Shadows", "Shadows Edge"] } ,
    genre :  [ "Fantary", "Fiction" ],
    characters : [ "Azoth", "Durzo Blint", "Elene Cromwyll", "Jarl", "Logan Gyre", "Rimbold Drake", "Viridiana Sovari", 
                   "Gwinvere Kirena", "Feir Cousat", "Dorian Ursuul", "Solonariwan Tofusin", "Jenine Gyre", "Neph Dada"],
    language : "english",
    published : new date(2008, 10, 1)
  }, 
  {
    name : "Beyond The Shadows",
    author : { name : "Brent Weeks", born : new date(1977, 3, 7), location : "Montana U.S" } ,
    series : { name :"The Night Angel Trioligy", number: 2, seriesCompleted : true, otherBooksInSeries : ["The Way Of Shadows", "Shadows Edge"] } ,
    genre :  [ "Fantary", "Fiction" ],
    characters : [ "Azoth", "Durzo Blint", "Elene Cromwyll", "Jarl", "Logan Gyre", "Rimbold Drake", "Viridiana Sovari", 
                   "Gwinvere Kirena", "Feir Cousat", "Dorian Ursuul", "Solonariwan Tofusin", "Jenine Gyre", "Neph Dada"],
    language : "english",
    published : new date(2008, 10, 28)

  },
  {
    name : "Shadows Edge",
    author :  { name : "Brent Weeks", born : new date(1977, 3, 7), location : "Montana U.S" } ,
    series :  { name :"The Night Angel Trioligy", number: 2, seriesCompleted : true, otherBooksInSeries : ["The Way Of Shadows", "Beyond The Shadows"]  } ,
    genre :  [ "Fantary", "Fiction" ],
    language : "english",
    characters : [ "Azoth", "Durzo Blint", "Elene Cromwyll", "Jarl", "Logan Gyre", "Rimbold Drake", "Viridiana Sovari", 
                   "Gwinvere Kirena", "Feir Cousat", "Dorian Ursuul", "Solonariwan Tofusin", "Jenine Gyre", "Neph Dada"],
    published : new date(2008, 11, 25)

  },
  {
    name : "Ship Of Magic",
    author : { name: "Robin Hobb", born: new date(1952, 3, 5), location : "Berkley, California U.S", penAs : ["Robin Hobb", "Megan Lindholm" ]} ,
    series : { name : "The Live Ship Traders", number : 1, seriesCompleted: true,  otherBooksInSeries : ["The Mad Ship", "Ship Of Destiny"] } ,
    genre : [ "Fantasy", "Fiction" ],
    language : "english",
    characters : [ "Althea Vestrit", "Ephron Vestrit", "Ronica Vestrit", "Keffria Vestrit", "Kyle Haven", "Wintrow Haven", "Malta Haven", 
                   "Vivacia", "Paragon (Liveship)", "Brashen Trell", "Amber (Liveship Traders)", "Kennit"],
    published: new date(1998, 3, 2);

  },
  {
    name : "Dragons Of Winter Night",
    author : [ 
               { name: "Margaret Weiss", born: new date(1948, 3, 16), location : "Independence, Missouri U.S"}, 
               { name: "Tracy Hickman", born: new date(1955, 11, 25), location : "Salt Lake City, Utah U.S"}
             ],
    series : { name : "The DragonLance Saga", number : 2, seriesCompleted: true,  otherBooksInSeries : ["Dragons Of Autumn Twilight", "Dragons Of Spring Dawning"] } ,
    genre : [ "Fantasy", "Fiction", "Epic Fantasy"],
    characters : [ "Tanis Half-Elven", "Sturm Brightblade", "Flint Fireforge", "Tika Waylan", "Caramon Majere", "Raistlin Majere", "Lauralanthalasa", "Kitiara uth Matar", "Tasslehoff Burrfoot", 
                   "Alhana Starbreeze"," Riverwind", "Goldmoon", "kylan Iverson", "Garn", "Aylaen", "Norgaard", "Wulfe", "Raegar", "Gilthanas", "Derek Crownguard"],
    language : "english",
    published: new date(1985, 7, 1);

  },
  {
    name : "The Serpent Mage ",
    author : [ { name: "Margaret Weiss", born: new date(1948, 3, 16), location : "Independence, Missouri U.S"}, 
               { name: "Tracy Hickman", born: new date(1955, 11, 25), location : "Salt Lake City, Utah U.S"}  ],
    series : { name : "The Death Gate Cycle", number : 4, seriesCompleted: true, othersInSeries : ["Dragon Wing", "Elven Star", "Fire Sea", "The Hand Of Chaos", "Into The Labyrinth", "The Seventh Gate"] } ,
    genre : [ "Fantasy", "Fiction", "Epic Fantasy"],
    language : "english",
    characters : ["Haplo", "Alfred", "Devon", "Grundle", "Alake", "Sang-Drax"],
    published: new date(1992, 1, 1);

  }
]; 









function hamburgerToggle() {
  console.log("Hi from hamburgerToggle");

  const navListElement = document.querySelector(".navList"); // Bevist brukt klasse for kun et element med det klassenavnet
  console.log(navListElement);

  // Metode 1: Skrive CSS i JS som blir inline-CSS
  navListElement.style.display = "flex";
  navListElement.style.flexDirection = "column";

  // Metode 2: Endre aktivt klassenavn via external-CSS fil
  /*navListElement.classList.add("show");
  navListElement.classList.remove("hidden");*/
}

// Gjør funksjonen tilgjengelig i globalt scope slik at den kan brukes i inline onclick-egenskaper.
//globalThis.hamburgerToggle = hamburgerToggle;
