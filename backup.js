
// gamle måten

const books =  [
    { 
      name : "The Way Of Shadows", 
      author :  { name : "Brent Weeks", image: "/Images/brentweeks.png", born : new Date(1977, 3, 7), location : "Montana U.S" } ,
      series :  { name :"The Night Angel Trioligy",  number: 1, completed : true, otherBooksInSeries : ["Beyond The Shadows", "Shadows Edge"] } ,
      genre :  [ "Fantary", "Fiction" ],
      characters : [ "Azoth", "Durzo Blint", "Elene Cromwyll", "Jarl", "Logan Gyre", "Rimbold Drake", "Viridiana Sovari", 
                     "Gwinvere Kirena", "Feir Cousat", "Dorian Ursuul", "Solonariwan Tofusin", "Jenine Gyre", "Neph Dada"],
      language : "English",
      published : new Date(2008, 10, 1),
      publisher : "Orbit"
    }, 
    {
      name : "Beyond The Shadows",
      author : { name : "Brent Weeks", image: "/Images/brentweeks.png", born : new Date(1977, 3, 7), location : "Montana U.S" } ,
      series : { name :"The Night Angel Trioligy", number: 2, completed : true, otherBooksInSeries : ["The Way Of Shadows", "Shadows Edge"] } ,
      genre :  [ "Fantary", "Fiction" ],
      characters : [ "Azoth", "Durzo Blint", "Elene Cromwyll", "Jarl", "Logan Gyre", "Rimbold Drake", "Viridiana Sovari", 
                     "Gwinvere Kirena", "Feir Cousat", "Dorian Ursuul", "Solonariwan Tofusin", "Jenine Gyre", "Neph Dada"],
      language : "English",
      published : new Date(2008, 10, 28),
      publisher : "Orbit"
  
    },
    {
      name : "Shadows Edge",
      author :  { name : "Brent Weeks", image: "/Images/brentweeks.png", born : new Date(1977, 3, 7), location : "Montana U.S" } ,
      series :  { name :"The Night Angel Trioligy", number: 3, completed : true, otherBooksInSeries : ["The Way Of Shadows", "Beyond The Shadows"]  } ,
      genre :  [ "Fantary", "Fiction" ],
      language : "English",
      characters : [ "Azoth", "Durzo Blint", "Elene Cromwyll", "Jarl", "Logan Gyre", "Rimbold Drake", "Viridiana Sovari", 
                     "Gwinvere Kirena", "Feir Cousat", "Dorian Ursuul", "Solonariwan Tofusin", "Jenine Gyre", "Neph Dada"],
      published : new Date(2008, 11, 25),
      publisher : "Orbit"
  
    },
    {
      name : "Ship Of Magic",
      author : { name: "Robin Hobb", image: "/Images/robinhobb.png", born: new Date(1952, 3, 5), location : "Berkley, California U.S", penAs : ["Robin Hobb", "Megan Lindholm" ]} ,
      series : { name : "The Live Ship Traders", number : 1, completed: true,  otherBooksInSeries : ["The Mad Ship", "Ship Of Destiny"] } ,
      genre : [ "Fantasy", "Fiction" ],
      language : "English",
      characters : [ "Althea Vestrit", "Ephron Vestrit", "Ronica Vestrit", "Keffria Vestrit", "Kyle Haven", "Wintrow Haven", "Malta Haven", 
                     "Vivacia", "Paragon (Liveship)", "Brashen Trell", "Amber (Liveship Traders)", "Kennit"],
      published: new Date(1998, 3, 2),
      publisher : "Bantam"
  
    },
    {
      name : "Dragons Of Winter Night",
      author : [ 
                 { name: "Margaret Weis", image: "/Images/margaretweis.png", born: new Date(1948, 3, 16), location : "Independence, Missouri U.S"}, 
                 { name: "Tracy Hickman", image: "/Images/tracyhickman.png", born: new Date(1955, 11, 25), location : "Salt Lake City, Utah U.S"}
               ],
      series : { name : "The DragonLance Saga", number : 2, completed: true,  otherBooksInSeries : ["Dragons Of Autumn Twilight", "Dragons Of Spring Dawning"] } ,
      genre : [ "Fantasy", "Fiction", "Epic Fantasy"],
      characters : [ "Tanis Half-Elven", "Sturm Brightblade", "Flint Fireforge", "Tika Waylan", "Caramon Majere", "Raistlin Majere", "Lauralanthalasa", "Kitiara uth Matar", "Tasslehoff Burrfoot", 
                     "Alhana Starbreeze"," Riverwind", "Goldmoon", "Kylan Iverson", "Garn", "Aylaen", "Norgaard", "Wulfe", "Raegar", "Gilthanas", "Derek Crownguard"],
      language : "English",
      published: new Date(1985, 7, 1),
      publisher : "TSR"
  
    },
    {
      name : "The Serpent Mage ",
      author : [ { name: "Margaret Weis", image: "/Images/margaretweis.png", born: new Date(1948, 3, 16), location : "Independence, Missouri U.S"}, 
                 { name: "Tracy Hickman", image: "/Images/tracyhickman.png", born: new Date(1955, 11, 25), location : "Salt Lake City, Utah U.S"}  ],
      series : { name : "The Death Gate Cycle", number : 4, completed: true, otherBooksInSeries : ["Dragon Wing", "Elven Star", " Fire Sea", "The Hand Of Chaos", "Into The Labyrinth", "The Seventh Gate"] } ,
      genre : [ "Fantasy", "Fiction", "Epic Fantasy"],
      language : "English",
      characters : ["Haplo", "Alfred", "Devon", "Grundle", "Alake", "Sang-Drax"],
      published: new Date(1992, 1, 1),
      publisher : "Bantam"
  
    }
  ]; 
  
  // publishers array - skal kobles mot publishers key i books for å hindre dobbel registrering
  
  const publishers = [
    {
      name : "Orbit",
      fulllName : "Orbit UK",
      founded : new Date(1974),
      countryOfORigin : "United Kingdom",
      webPage : "https://www.orbit-books.co.uk/",
  
    },
    { 
      name : "Bantam",
      fullName : "Batam Books",
      founded : new Date(1945),
      countryOfOrigin : "United States",
      founders :  ["Walter B. Pitkin, Jr." , "Sidney B. Kramer"," Ian Ballantine","Betty Ballantine"] ,
      webPage : "https://www.randomhousebooks.com/imprint/bantam-books/"
    },
    { 
      name : "TSR",
      fullName : "TSR Inc. (now : Wizards Of The Coast)",
      founded : new Date(1983),
      countryOfOrigin : "United States",
      founders :  ["Gary Gygax", "Don Kaye"],
      webPage : "https://company.wizards.com/en"
    }
    
  ];