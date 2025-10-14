const books =  [
  { 
    name : "The Way Of Shadows", 
    author :  { name : "Brent Weeks", born : new date(1977, 3, 7), location : "Montana U.S" } ,
    series :  { name :"The Night Angel Trioligy", number: 1, seriesCompleted : true } ,
    genre :  [ "Fantary", "Fiction" ],
    language : "english",
    published : new date(2008, 10, 1)
  }, 
  {
    name : "Beyond The Shadows",
    author : { name : "Brent Weeks", born : new date(1977, 3, 7), location : "Montana U.S" } ,
    series : { name :"The Night Angel Trioligy", number: 2, seriesCompleted : true } ,
    genre :  [ "Fantary", "Fiction" ],
    language : "english",
    published : new date(2008, 10, 28)

  },
  {
    name : "Shadows Edge",
    author :  { name : "Brent Weeks", born : new date(1977, 3, 7), location : "Montana U.S" } ,
    series :  { name :"The Night Angel Trioligy", number: 2, seriesCompleted : true } ,
    genre :  [ "Fantary", "Fiction" ],
    language : "english",
    published : new date(2008, 11, 25)

  },
  {
    name : "Ship Of Magic",
    author : { name: "Robin Hobb", born: new date(1952, 3, 5), location : "Berkley, California U.S", penAlias : "Megan Lindholm"} ,
    series : { name : "The Live Ship Traders", number : 1, seriesCompleted: true} ,
    genre : [ "Fantasy", "Fiction" ],
    language : "english",
    published: new date(1998, 3, 2);

  },
  {
    name : "Dragons Of Autumn Twilight",
    author : [ 
               { name: "Margaret Weiss", born: new date(1948, 3, 16), location : "Independence, Missouri U.S"}, 
               { name: "Tracy Hickman", born: new date(1955, 11, 25), location : "Salt Lake City, Utah U.S"}
             ],
    series : { name : "The DragonLance Saga", number : 1, seriesCompleted: true} ,
    genre : [ "Fantasy", "Fiction" ],
    language : "english",
    published: new date(1998, 3, 2);

  },
  {
    name : "Ship Of Magic",
    author : [ { name: "Robin Hobb", born: new date(1952, 3, 5), location : "Berkley, California U.S", penAlias : "Megan Lindholm"} ],
    series : [ { name : "The Live Ship Traders", number : 1, seriesCompleted: true} ],
    genre : [ "Fantasy", "Fiction" ],
    language : "english",
    published: new date(1998, 3, 2);

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
