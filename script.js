const books =  [
  { 
    name : "The Way Of Shadows", 
    author : [ { name : "Brent Weeks", born : new date(1977, 3, 7), location : "Montana U.S" } ],
    series : [ { name :"The Night Angel Trioligy", number: 1, seriesCompleted : true } ],
    genre :  [ "Fantary", "Fiction" ],
    language : "english",
    published : new date(2008, 10)
  }, 
  {
    name : "Beyond The Shadows",
    author : [ { name : "Brent Weeks", born : new date(1977, 3, 7), location : "Montana U.S" } ],
    series : [ { name :"The Night Angel Trioligy", number: 2, seriesCompleted : true } ],
    genre :  [ "Fantary", "Fiction" ],
    language : "english",
    published : new date(2008, 10)

  }
  {
    name : "Beyond The Shadows",
    author : [ { name : "Brent Weeks", born : new date(1977, 3, 7), location : "Montana U.S" } ],
    series : [ { name :"The Night Angel Trioligy", number: 2, seriesCompleted : true } ],
    genre :  [ "Fantary", "Fiction" ],
    language : "english",
    published : new date(2008, 10)

  }

]









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
