// books array med litt info
const bookDatabase = 
{  books : [  { name : "The Way Of Shadows", 
              author :  "Brent Weeks",
              series :  { name :"The Night Angel Trioligy",  number: 1, completed : true, otherBooksInSeries : ["Beyond The Shadows", "Shadows Edge"] } ,
              genre :  [ "Fantary", "Fiction" ],
              characters : [ "Azoth", "Durzo Blint", "Elene Cromwyll", "Jarl", "Logan Gyre", "Rimbold Drake", "Viridiana Sovari", 
                            "Gwinvere Kirena", "Feir Cousat", "Dorian Ursuul", "Solonariwan Tofusin", "Jenine Gyre", "Neph Dada"],
              language : "English",
              published : new Date(2008, 10, 1),
              publisher : "Orbit"
            }, 
            { name : "Beyond The Shadows",
              author : "Brent Weeks",
              series : { name :"The Night Angel Trioligy", number: 2, completed : true, otherBooksInSeries : ["The Way Of Shadows", "Shadows Edge"] } ,
              genre :  [ "Fantary", "Fiction" ],
              characters : [ "Azoth", "Durzo Blint", "Elene Cromwyll", "Jarl", "Logan Gyre", "Rimbold Drake", "Viridiana Sovari", 
                            "Gwinvere Kirena", "Feir Cousat", "Dorian Ursuul", "Solonariwan Tofusin", "Jenine Gyre", "Neph Dada"],
              language : "English",
              published : new Date(2008, 10, 28),
              publisher : "Orbit"
            },
            { name : "Shadows Edge",
              author :  "Brent Weeks", 
              series :  { name :"The Night Angel Trioligy", number: 3, completed : true, otherBooksInSeries : ["The Way Of Shadows", "Beyond The Shadows"]  } ,
              genre :  [ "Fantary", "Fiction" ],
              language : "English",
              characters : [ "Azoth", "Durzo Blint", "Elene Cromwyll", "Jarl", "Logan Gyre", "Rimbold Drake", "Viridiana Sovari", 
                            "Gwinvere Kirena", "Feir Cousat", "Dorian Ursuul", "Solonariwan Tofusin", "Jenine Gyre", "Neph Dada"],
              published : new Date(2008, 11, 25),
              publisher : "Orbit"
            },
            { name : "Ship Of Magic",
              author : "Robin Hobb",
              series : { name : "The Live Ship Traders", number : 1, completed: true,  otherBooksInSeries : ["The Mad Ship", "Ship Of Destiny"] } ,
              genre : [ "Fantasy", "Fiction" ],
              language : "English",
              characters : [ "Althea Vestrit", "Ephron Vestrit", "Ronica Vestrit", "Keffria Vestrit", "Kyle Haven", "Wintrow Haven", "Malta Haven", 
                            "Vivacia", "Paragon (Liveship)", "Brashen Trell", "Amber (Liveship Traders)", "Kennit"],
              published: new Date(1998, 3, 2),
              publisher : "Bantam"
            },
            { name : "Dragons Of Winter Night",
              author : [ "Margaret Weis",  "Tracy Hickman" ],
              series : { name : "The DragonLance Saga", number : 2, completed: true,  otherBooksInSeries : ["Dragons Of Autumn Twilight", "Dragons Of Spring Dawning"] } ,
              genre : [ "Fantasy", "Fiction", "Epic Fantasy"],
              characters : [ "Tanis Half-Elven", "Sturm Brightblade", "Flint Fireforge", "Tika Waylan", "Caramon Majere", "Raistlin Majere", "Lauralanthalasa", "Kitiara uth Matar", "Tasslehoff Burrfoot", 
                            "Alhana Starbreeze"," Riverwind", "Goldmoon", "Kylan Iverson", "Garn", "Aylaen", "Norgaard", "Wulfe", "Raegar", "Gilthanas", "Derek Crownguard"],
              language : "English",
              published: new Date(1985, 7, 1),
              publisher : "TSR"
            },
            { name : "The Serpent Mage ",
              author : [ "Margaret Weis",  "Tracy Hickman" ],
              series : { name : "The Death Gate Cycle", number : 4, completed: true, otherBooksInSeries : ["Dragon Wing", "Elven Star", " Fire Sea", "The Hand Of Chaos", "Into The Labyrinth", "The Seventh Gate"] } ,
              genre : [ "Fantasy", "Fiction", "Epic Fantasy"],
              language : "English",
              characters : ["Haplo", "Alfred", "Devon", "Grundle", "Alake", "Sang-Drax"],
              published: new Date(1992, 1, 1),
              publisher : "Bantam"
            }
         ],
  authors : [ { name: "Margaret Weis", 
                image: "/Images/margaretweis.png", 
                born: new Date(1948, 3, 16), 
                location : "Independence, Missouri U.S",
                gender : "female",
              }, 
              { name: "Tracy Hickman", 
                image: "/Images/tracyhickman.png", 
                born: new Date(1955, 11, 25), 
                location : "Salt Lake City, Utah U.S",
                gender : "male"
              }, 
              { name : "Brent Weeks", 
                image: "/Images/brentweeks.png", 
                born : new Date(1977, 3, 7), 
                location : "Montana U.S" ,
                gender : "male"
              },

              { name: "Robin Hobb", 
                image: "/Images/robinhobb.png", 
                born: new Date(1952, 3, 5), 
                location : "Berkley, California U.S", 
                gender : "male",
                penAs : ["Robin Hobb", "Megan Lindholm" ]
              } 
            ],

  publishers: [ { name : "Orbit",
                  fulllName : "Orbit UK",
                  founded : new Date(1974),
                  countryOfORigin : "United Kingdom",
                  founders : ["test", "test2"],
                  webPage : "https://www.orbit-books.co.uk/",
                },
                { name : "Bantam",
                  fullName : "Batam Books",
                  founded : new Date(1945),
                  countryOfOrigin : "United States",
                  founders :  ["Walter B. Pitkin, Jr." , "Sidney B. Kramer"," Ian Ballantine","Betty Ballantine"] ,
                  webPage : "https://www.randomhousebooks.com/imprint/bantam-books/"
                },
                { name : "TSR",
                  fullName : "TSR Inc. (now : Wizards Of The Coast)",
                  founded : new Date(1983),
                  countryOfOrigin : "United States",
                  founders :  ["Gary Gygax", "Don Kaye"],
                  webPage : "https://company.wizards.com/en"
                }
              ]
};


// funksjon som returnerer en string med en dato som passer

function getDateString(date)
{
   return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

}

// lager ett objekt som inneholder alle feltene til boken som skal manipuleres
const showAuthorItems =
{
  authorName : document.querySelector("#authorName"),
  authorImage : document.querySelector("#authorImage"),
  authorBorn : document.querySelector("#authorBorn"),
  authorLocation : document.querySelector("#authorLocation"),
  authorPensAs : document.querySelector("#authorPensAs"),

  retrieveAuthor: function(authorString)
  {
    let authorObject = 0;
    // legg inn søk i author key
    for(let i = 0; i < bookDatabase.authors.length; ++i)
    {
        if(bookDatabase.authors[i].name === authorString) 
        {
           authorObject = bookDatabase.authors[i];
           i = bookDatabase.authors.length;
        }
    }

    if(authorObject == 0) return 0;
    // legg inn data 
    this.authorImage.src = authorObject.image;
    this.authorName.textContent = authorObject.name;
    this.authorBorn.textContent = getDateString(authorObject.born);
    this.authorLocation.textContent = authorObject.location;
    if(authorObject.pensAs == undefined) this.authorPensAs.textContent = authorObject.name;
    else this.authorPensAs.textContent = authorObject.penAs.join(", "); 

    return 1;
  }
}

let isAuthorShowing = false;
let authorNumberShowing = -1;
const showAuthorInfoStats = document.querySelector("#showAuthorInfoStats");


function showAuthorInfo()
{
  showAuthorInfoStats.classList.add("scaleBookInAnim");
  showAuthorInfoStats.classList.remove("scaleBookOutAnim");
  showAuthorInfoStats.classList.remove("hidden");

  // showAuthorInfoStats.classList.remove("scaleBookOutAnim");
  showAuthorInfoStats.addEventListener("animationend", function() 
  { 
    showAuthorInfoStats.classList.add("show");
    showAuthorInfoStats.classList.remove("scaleBookInAnim");
  }, {once:true});

}

function removeAuthorInfo() 
{
  // showAuthorInfoStats.classList.add("show");

  showAuthorInfoStats.classList.add("scaleBookOutAnim");
  showAuthorInfoStats.addEventListener("animationend", function() 
    {
       showAuthorInfoStats.classList.add("hidden");

    }, { once: true});
  // showAuthorInfoStats.classList.remove("hidden");
  isAuthorShowing = false;
  
}

function showAuthor(event)
{
    let numInList = -1;
  
    if(Array.isArray(bookDatabase.books[currentBookArrayNumber].author))
    {
      const allNodes = Array.from(event.target.parentNode.children);
      console.log(allNodes);
      numInList = allNodes.indexOf(event.target);
      console.log(numInList);
   
    }
    console.log ("is authorShowing" + isAuthorShowing + numInList + authorNumberShowing);

    if(isAuthorShowing)
    {
      
      showAuthorInfoStats.classList.add("scaleBookOutAnim");
      showAuthorInfoStats.addEventListener("animationend", function() 
      {
         showAuthorInfoStats.classList.add("scaleBookInAnim");
         showAuthorInfoStats.classList.remove("scaleBookOutAnim");
         if(numInList != -1) showAuthorItems.retrieveAuthor(bookDatabase.books[currentBookArrayNumber].author[numInList]);
         else showAuthorItems.retrieveAuthor(bookDatabase.books[currentBookArrayNumber].author);
         isAuthorShowing = true;
         authorNumberShowing = numInList;
  
      }, { once: true})

   }
   else
   {  
      let completed = 0;
      
      if(numInList != -1)
      {
        completed = showAuthorItems.retrieveAuthor(bookDatabase.books[currentBookArrayNumber].author[numInList]);
      
      }
      else completed = showAuthorItems.retrieveAuthor(bookDatabase.books[currentBookArrayNumber].author);
      if(completed)
      {
         showAuthorInfo();
         authorNumberShowing = numInList;
         isAuthorShowing = true;
      }
      else
      {
        // vis feilmelding om at forfatteren var ikke i databasen
      }
  
   }

}

let isPublisherDisplaying = false;

const displayPublisherItems = 
{
   name : document.querySelector("#publisherName"),
   founded : document.querySelector("#publisherFounded"),
   country : document.querySelector("#publisherCountry"),
   founders : document.querySelector("#publisherFounders"),
   webpage : document.querySelector("publisherWebPage"),

   retreivePublisher : function (publisherString)
   {
      const publisherArray = bookDatabase.publishers;
      console.log(publisherArray);
      let publisherFound = false;
      for(let i = 0; i < publisherArray.length; i++)
      {
          if(publisherString == publisherArray[i].name)
          {
             console.log("publisher found in retriev function. Number in array : " + i + " - publisher :" + publisherArray[i].name);
             console.log(publisherArray[i]);
             this.name.textContent = publisherArray[i].fullName;
          
             this.founded.textContent = getDateString(publisherArray[i].founded);
             this.country.textContent = publisherArray[i].countryOfOrigin;
             if(publisherArray[i].founders != undefined)
             {
                if(Array.isArray(publisherArray[i].founders)) this.founders.textContent = publisherArray[i].founders.join(", ");
                else this.founders.textContent = publisherArray[i].founders;
             }
             else this.founders.textContent = "not specified";
             this.webpage = publisherArray[i].webPage;
             publisherFound = true;
             i = publisherArray.length;
             
          }

      }
      if(publisherFound) return 1;
      else return 0;
      
   }
};

// endre denne til button hvis du får tid til det

const publisherButton = document.querySelector("#publisher");
publisherButton.addEventListener("click", showPublisher);
const showPublisherStats = document.querySelector("showPublisherStats");

function showPublisher()
{
   const publisherString = bookDatabase.books[currentBookArrayNumber].publisher;
   console.log(publisherString);
   if(displayPublisherItems.retreivePublisher(publisherString)) // publisher found
   {
      console.log("Publisher found");
    

   }
   
}

const showBookInfoItems =
{
  bookname: document.querySelector("#bookName"),
  authorsList : document.querySelector("#authorsList"),
  seriesName : document.querySelector("#seriesName"),
  seriesNumber : document.querySelector("#seriesNumber"),
  seriesCompleted : document.querySelector("#seriesCompleted"),
  otherBooksInSeries : document.querySelector("#otherBooksInSeries"),
  otherBooksButton : document.querySelector("#otherBooksButton"),
  genre : document.querySelector("#genre"),
  characters : document.querySelector("#characters"),
  language : document.querySelector("#language"),
  published : document.querySelector("#published"),
  publisher : document.querySelector("#publisher"),

  clearAuthorList()
  {
     while(this.authorsList.lastChild) this.authorsList.lastChild.remove();

  },

  addAuthor : function(name)
  { 
    const autorListItem = document.createElement("li");
    autorListItem.textContent = name;
    this.authorsList.appendChild(autorListItem);
    autorListItem.addEventListener("click", showAuthor);
  },

  retrieveBook : function(numberInArray) 
  {
    console.log(numberInArray + bookDatabase.books[numberInArray].name);
  
    this.clearAuthorList();

    this.bookname.textContent = bookDatabase.books[numberInArray].name;
    this.seriesName.textContent = bookDatabase.books[numberInArray].series.name;
    this.seriesNumber.textContent = bookDatabase.books[numberInArray].series.number;
    if(bookDatabase.books[numberInArray].series.completed) this.seriesCompleted.textContent = "Yes";
    else this.seriesCompleted.textContent = "No";
    
    
    console.log(bookDatabase.books[numberInArray].series.otherBooksInSeries);
    this.otherBooksInSeries.textContent = bookDatabase.books[numberInArray].series.otherBooksInSeries.join(", ");
    this.genre.textContent = bookDatabase.books[numberInArray].genre.join(", ");
    this.characters.textContent = bookDatabase.books[numberInArray].characters.join(", ");
    this.language.textContent = bookDatabase.books[numberInArray].language;
    this.published.textContent = getDateString(bookDatabase.books[numberInArray].published);
    this.publisher.textContent = bookDatabase.books[numberInArray].publisher;

    // legge inn forfattere
    const author = bookDatabase.books[numberInArray].author;
    if(Array.isArray(author))
    {
      author.forEach( item =>
      { 
        console.log("inne i foreach");
        console.log(item);
        this.addAuthor(item);

      });
    }
    else this.addAuthor(bookDatabase.books[numberInArray].author);
  }
  
};

// henter list element, legger til eventlistener og legger inn bøkenes tittel
const listOfBooks = document.querySelector("#listOfBooks");
let isBookShowing = false;
let currentBookArrayNumber = 0;

function displayBook(event)
{

  // finne child nummer for å vite hvilket objekt i arrayen jeg skal bruke

  console.log("inne i display book");  
  const childElements = Array.from(listOfBooks.children);
  currentBookArrayNumber = childElements.indexOf(event.target);
  console.log(currentBookArrayNumber);

  
  // legge inn data med funksjon i objektet - håndert internt - oppgi kun objektnummer (nummer i array)

  showBookInfoItems.retrieveBook(currentBookArrayNumber);

  const showBookInfoDiv = document.querySelector("#showBookInfoDiv");
  
  if(isBookShowing) 
  {
    if(isAuthorShowing)
    {
       removeAuthorInfo();
      
    }
    showBookInfoDiv.classList.add("show");
    showBookInfoDiv.classList.add("scaleBookOutAnim");
    showBookInfoDiv.classList.remove("hidden");
    showBookInfoDiv.addEventListener("animationend", function() 
    { 
      showBookInfoDiv.classList.add("scaleBookInAnim");
      showBookInfoDiv.classList.remove("scaleBookOutAnim");
      showBookInfoDiv.addEventListener("animationend", function() { showBookInfoDiv.classList.remove("scaleBookInAnim"); }, 
      {once:true}); 
    }, {once:true});
  }
  else
  {  

    showBookInfoDiv.classList.add("scaleBookInAnim");
    showBookInfoDiv.classList.add("show");
    showBookInfoDiv.classList.remove("hidden");
    showBookInfoDiv.addEventListener("animationend", function() { showBookInfoDiv.classList.remove("scaleBookInAnim");}, { once:true}) ;
    isBookShowing = true;
  }

}

console.log(listOfBooks);

bookDatabase.books.forEach(function(item) 
{
  const newListItem = document.createElement("li");
  console.log(newListItem);
  newListItem.textContent = item.name;
  listOfBooks.appendChild(newListItem);
  newListItem.addEventListener("click", displayBook);
});



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
