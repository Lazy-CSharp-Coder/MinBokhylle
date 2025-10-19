// books array med litt info
const bookDatabase = 
{  books : [  { name : "The Way Of Shadows", 
              author :  "Brent Weeks",
              series :  { name :"The Night Angel Trioligy",  number: 1, completed : true, otherBooksInSeries : ["Beyond The Shadows", "Shadows Edge"] } ,
              genre :  [ "Fantasy", "Fiction" ],
              characters : [ "Azoth", "Durzo Blint", "Elene Cromwyll", "Jarl", "Logan Gyre", "Rimbold Drake", "Viridiana Sovari", 
                            "Gwinvere Kirena", "Feir Cousat", "Dorian Ursuul", "Solonariwan Tofusin", "Jenine Gyre", "Neph Dada"],
              language : "English",
              published : new Date(2008, 10, 1),
              publisher : "Orbit"
            }, 
            { name : "Beyond The Shadows",
              author : "Brent Weeks",
              series : { name :"The Night Angel Trioligy", number: 2, completed : true, otherBooksInSeries : ["The Way Of Shadows", "Shadows Edge"] } ,
              genre :  [ "Fantasy", "Fiction" ],
              characters : [ "Azoth", "Durzo Blint", "Elene Cromwyll", "Jarl", "Logan Gyre", "Rimbold Drake", "Viridiana Sovari", 
                            "Gwinvere Kirena", "Feir Cousat", "Dorian Ursuul", "Solonariwan Tofusin", "Jenine Gyre", "Neph Dada"],
              language : "English",
              published : new Date(2008, 10, 28),
              publisher : "Orbit"
            },
            { name : "Shadows Edge",
              author :  "Brent Weeks", 
              series :  { name :"The Night Angel Trioligy", number: 3, completed : true, otherBooksInSeries : ["The Way Of Shadows", "Beyond The Shadows"]  } ,
              genre :  [ "Fantasy", "Fiction" ],
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
            },
            { name : "Menneskefluene",
              author : "Hans Olav Lahlum",
              series : { name : "K2 og Patricia", number : 1, completed: false, otherBooksInSeries : ["Satelittmenneskene", "Svanemordet"] } ,
              genre : [ "Crime", "Fiction"],
              language : "Norwegian",
              characters : ["Kolbjørn Kristiansen (K2)", "Paticia"],
              published: new Date(2014, 6, 1),
              publisher : "Cappelen"
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
                gender : "female",
                penAs : ["Robin Hobb", "Megan Lindholm" ]
              } 
            ],

  publishers: [ { name : "Orbit",
                  fullName : "Orbit UK",
                  founded : new Date(1974),
                  countryOfOrigin : "United Kingdom",
                  
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

const soundEffects = 
{
   enterListItems : new Audio("/Sounds/enterlistitems.mp3"),
   accessingBooks : new Audio("/Sounds/accessing.mp3"),
   accessing : new Audio("/Sounds/accessing.mp3"),
   enterSearchMode : new Audio("/Sounds/searchmode.mp3"),
   bookIntro : new Audio("/Sounds/bookintro.mp3"),
   featureNotAvailable : new Audio("/Sounds/notavailable.mp3"),
   alreadyInSearchMode : new Audio("/Sounds/alreadysearching.mp3"),
   requestNotFound : new Audio("/Sounds/requestnotfound.mp3"),
   noEntriesFound : new Audio("/Sounds/noentriesfound.mp3"),
   clickListItem : new Audio("/Sounds/clicklistitem.mp3"),
   iconsCreatedBy : new Audio("/Sounds/iconscreatedby.mp3")
}


// funksjon som returnerer en string med en dato som passer

function getDateString(date)
{
   return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

}

// funskjon for å lukke ett vindu med timer

function closeWindowAutomatically(divNode, countDisplay, duration, nodeReappering)
{
  let remainingTime = duration;

  countDisplay.textContent = remainingTime;

  const countDownInterval = setInterval(() =>
  {
    remainingTime--;
    countDisplay.textContent = remainingTime;

    if(remainingTime <= 0)
    {
      clearInterval(countDownInterval);
      divNode.classList.remove("flex");
      divNode.classList.add("hiddenDisplay");
      nodeReappering.classList.remove("hiddenDisplay");
      nodeReappering.classList.add("grid");
    
    }
  }, 1000);

}

// lager ett objekt som inneholder alle feltene til boken som skal manipuleres
const showAuthorItems =
{
  authorName : document.querySelector("#authorName"),
  authorGenderImage : document.querySelector("#authorGenderImage"),
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
    if(authorObject.gender == "female") this.authorGenderImage.src = "/Icons/womanb.png",
    this.authorName.textContent = authorObject.name;
    this.authorBorn.textContent = getDateString(authorObject.born);
    this.authorLocation.textContent = authorObject.location;
    if(authorObject.pensAs == undefined) this.authorPensAs.textContent = authorObject.name;
    else this.authorPensAs.textContent = authorObject.penAs.join(", "); 

    return 1;
  }
}

let isAuthorShowing = false;
let authorNumberShowing = 0;

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
       showAuthorInfoStats.classList.remove("scaleBookOutAnim");
       showAuthorInfoStats.classList.remove("show");

    }, { once: true});
  // showAuthorInfoStats.classList.remove("hidden");
  isAuthorShowing = false;
  
}

function showAuthor(event)
{
    if(inSearchMode)
    {
      actionNotPermitted();
      return;
    }

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
        if(authorNumberShowing != numInList)
        {
          soundEffects.accessing.play();
          showAuthorInfoStats.classList.add("scaleBookInAnim");
          showAuthorInfoStats.classList.remove("scaleBookOutAnim");
          if(numInList != -1) showAuthorItems.retrieveAuthor(bookDatabase.books[currentBookArrayNumber].author[numInList]);
          else showAuthorItems.retrieveAuthor(bookDatabase.books[currentBookArrayNumber].author);
          isAuthorShowing = true;
          authorNumberShowing = numInList;
        }
        else isAuthorShowing = false;
      }, { once: true});
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
        soundEffects.accessing.play(); 
        showAuthorInfo();
        authorNumberShowing = numInList;
        isAuthorShowing = true;
      }
      else
      {

        showAuthorInfoStats.classList.remove("grid");
        showAuthorInfoStats.classList.add("hiddenDisplay");

        authorErrorWin.classList.add("flex");
        authorErrorWin.classList.remove("hiddenDisplay");
        authorErrorWin.classList.add("scaleBookInAnim");
        authorErrorWin.addEventListener("animationend", function()
        {
          const authorErrorCountText = document.querySelector("#authorErrorCountText");
          authorErrorWin.classList.remove("scaleBookInAnim");
          soundEffects.requestNotFound.play();
          closeWindowAutomatically(authorErrorWin, authorErrorCountText, 5, showAuthorInfoStats);
       
        }, {once:true});
        }
    
   }

}



const displayPublisherItems = 
{
   name : document.querySelector("#publisherName"),
   founded : document.querySelector("#publisherFounded"),
   country : document.querySelector("#publisherCountry"),
   founders : document.querySelector("#publisherFounders"),
   webpage : document.querySelector("#publisherWebPage"),

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
          
             this.founded.textContent = publisherArray[i].founded.getFullYear();
             this.country.textContent = publisherArray[i].countryOfOrigin;
             if(publisherArray[i].founders != undefined)
             {
                if(Array.isArray(publisherArray[i].founders)) this.founders.textContent = publisherArray[i].founders.join(", ");
                else this.founders.textContent = publisherArray[i].founders;
             }
             else this.founders.textContent = "not specified";
             this.webpage  = publisherArray[i].webPage;
             publisherFound = true;
             i = publisherArray.length;
             
          }

      }
      if(publisherFound) return 1;
      else return 0;
      
   }
};

// endre denne til button hvis du får tid til det

const publisherButton = document.querySelector("#publisherButton");
publisherButton.addEventListener("click", showPublisher);
const showPublisherStats = document.querySelector("#showPublisherStats");
console.log(showPublisherStats);
let isPublisherShowing = false;

function removePublisher() 
{
   if(isPublisherShowing)
   {
     showPublisherStats.classList.add("scaleBookOutAnim");
     showPublisherStats.addEventListener("animationend", function() 
     {
       showPublisherStats.classList.add("hidden");
       showPublisherStats.classList.remove("show");
       showPublisherStats.classList.remove("scaleBookOutAnim");
       publisherButton.textContent = "Search database";

     }, {once:true});
     isPublisherShowing = false;
  
   
   }
}

const publisherErrorWin = document.querySelector("#publisherErrorWin");
const authorErrorWin = document.querySelector("#authorErrorWin");

function showPublisher()
{
   if(inSearchMode)
   {
     actionNotPermitted();
     return;
   }

   const publisherString = bookDatabase.books[currentBookArrayNumber].publisher;
   console.log(publisherString);
   if(displayPublisherItems.retreivePublisher(publisherString)) // publisher found
   {
      console.log("Publisher found");
      if(isPublisherShowing)
      {
          removePublisher();
        
      }
      else
      {
        console.log("er i animation for å vise publisher");
        soundEffects.accessing.play();
        showPublisherStats.classList.add("scaleBookInAnim");
        showPublisherStats.classList.remove("hidden");
        showPublisherStats.classList.add("show");
        showPublisherStats.addEventListener("animationend", function() 
        {
            showPublisherStats.classList.remove("scaleBookInAnim");
            isPublisherShowing = true;
            publisherButton.textContent = "Close database";

        }, { once: true});
      }
  
   }
   else
   {
      console.log("error publisher routine");
      console.log(displayPublisherItems);
     
      showPublisherStats.classList.remove("grid");
      showPublisherStats.classList.add("hiddenDisplay");

      publisherErrorWin.classList.add("flex");
      publisherErrorWin.classList.remove("hiddenDisplay");
      publisherErrorWin.classList.add("scaleBookInAnim");
      publisherErrorWin.addEventListener("animationend", function()
      {
        const publisherErrorCountText = document.querySelector("#publisherErrorCountText");
        publisherErrorWin.classList.remove("scaleBookInAnim");
        soundEffects.requestNotFound.play();
        closeWindowAutomatically(publisherErrorWin, publisherErrorCountText, 5, showPublisherStats);

      }, {once:true});
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
    this.otherBooksInSeries.appendChild(this.otherBooksButton);
    this.genre.textContent = bookDatabase.books[numberInArray].genre.join(", ");
    this.characters.textContent = bookDatabase.books[numberInArray].characters.join(", ");
    this.language.textContent = bookDatabase.books[numberInArray].language;
    this.published.textContent = getDateString(bookDatabase.books[numberInArray].published);
    this.publisher.textContent = bookDatabase.books[numberInArray].publisher;
    this.publisher.appendChild(publisherButton);

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
let fromSearch = false;
let hasBookIntroBeenPlayed = false;

function displayBook(event)
{

  // finne child nummer for å vite hvilket objekt i arrayen jeg skal bruke
  closeSearchWindow();
  console.log("inne i display book");  
  if(!fromSearch)
  {
    const childElements = Array.from(listOfBooks.children);
    currentBookArrayNumber = childElements.indexOf(event.target);
    console.log(currentBookArrayNumber);

  } else fromSearch = false;
  
  // legge inn data med funksjon i objektet - håndert internt - oppgi kun objektnummer (nummer i array)

  showBookInfoItems.retrieveBook(currentBookArrayNumber);

  const showBookInfoDiv = document.querySelector("#showBookInfoDiv");

  if(isBookShowing) 
  {
    const delay = 0;
    if(isPublisherShowing) setTimeout(() => 
    {
      removePublisher();
      isPublisherShowing = false;
      console.log("er her i set timeout"); 
    }, delay);
    
    if(isAuthorShowing)
    {
       removeAuthorInfo();
       isAuthorShowing = false;
            
    }
    showBookInfoDiv.classList.add("show");
    showBookInfoDiv.classList.add("scaleBookOutAnim");
    showBookInfoDiv.classList.remove("hidden");
    showBookInfoDiv.addEventListener("animationend", function() 
    { 
      soundEffects.accessingBooks.play();
      showBookInfoDiv.classList.add("scaleBookInAnim");
      showBookInfoDiv.classList.remove("scaleBookOutAnim");
      showBookInfoDiv.addEventListener("animationend", function() { showBookInfoDiv.classList.remove("scaleBookInAnim"); }, 
      {once:true}); 
    }, {once:true});
  }
  else
  {  
      // spille av førstegangsbeskjed
    if(hasBookIntroBeenPlayed == false) 
    {
      soundEffects.bookIntro.play();
      hasBookIntroBeenPlayed = true;
    }
    else soundEffects.accessingBooks.play();
    showBookInfoDiv.classList.add("scaleBookInAnim");
    showBookInfoDiv.classList.add("show");
    showBookInfoDiv.classList.remove("hidden");
    showBookInfoDiv.addEventListener("animationend", function() { showBookInfoDiv.classList.remove("scaleBookInAnim");}, { once:true}) ;
    isBookShowing = true;
  }

}

console.log(listOfBooks);

let delay = 0;
const delayInc = 300;

bookDatabase.books.forEach(function(item) 
{
  const newListItem = document.createElement("li");
  console.log(newListItem);
  newListItem.textContent = item.name;

  setTimeout(() => 
  { newListItem.classList.add("slideInTopAnim");
    newListItem.addEventListener("animationend", ()=> { /* play sound here */ }) ;
    listOfBooks.appendChild(newListItem); 
  }, delay);
  
 
  delay += delayInc;

  newListItem.addEventListener("click", displayBook);
});

// sette opp credit button med eventlistnere og animasjon

const creditButton = document.querySelector("#creditButton");
let isCreditsDisplaying = false;
creditButton.addEventListener("click", function () 
{
  const creditIconDiv = document.querySelector("#creditIconDiv");
  if(isCreditsDisplaying)
  {
    creditIconDiv.classList.remove("scaleBookInAnim");
    creditIconDiv.classList.add("scaleBookOutAnim");
    creditIconDiv.addEventListener("animationend", function() 
    {
      creditIconDiv.classList.remove("showDisplay");
      creditIconDiv.classList.add("hiddenDisplay");
      creditIconDiv.classList.remove("scaleBookOutAnim");
    } , {once: true});
    isCreditsDisplaying = false;

  }
  else
  {
  //  creditIconDiv.classList.add("slideInBottomAnim");
   soundEffects.iconsCreatedBy.play();
   creditIconDiv.classList.add("scaleBookInAnim");
   creditIconDiv.classList.add("showDisplay");
   creditIconDiv.classList.remove("hiddenDisplay");
   isCreditsDisplaying = true;
  }

});


// searching med tilhørende animasjon

// denne brukes ikke men blir

function setSearchingPointsChildren(parent)
{
   const pointChild = [];
   let animDelay = 1.8;
   const delayDecrease = 0.8;

   for(let i = 0; i < 3; i++)
   {
       pointChild[i] = document.createElement("p");
       pointChild[i].classList.add("pointAnim");
       pointChild[i].style.animationDelay = animDelay + "s";
       animDelay -= delayDecrease;
       parent.appendChild(pointChild[i]);
   }

   return parent;
}


const searchDiv = document.querySelector("#searchDiv");
const searchingStatus = document.querySelector("#searchingStatus");
const matchFoundText = document.querySelector("#matchFoundText");
const searchResultsList = document.querySelector("#searchResultsList");
let inSearchMode = false;

function actionNotPermitted()
{
  // legg inn audio her
  soundEffects.featureNotAvailable.play();

}


// fjern vinduer som er i veien og vis search

function removeAllAndDisplaySearch()
{
   let windowOpenNode = undefined;

   if(inSearchMode)
   {
     soundEffects.alreadyInSearchMode.play();
     return;
   }

   if(isAuthorShowing)
   {
     windowOpenNode = showAuthorInfoStats;
     removeAuthorInfo();
  }
   if(isPublisherShowing)
   {
     if(windowOpenNode == undefined) windowOpenNode = showPublisherStats;
     removePublisher();
   }
   
   if(windowOpenNode) windowOpenNode.addEventListener("animationend", function () 
   {
     searchAndListResults();
    

   }, {once:true});

   else searchAndListResults();
   
   inSearchMode = true;
}

const closeSearchButton = document.querySelector("#closeSearchButton");
closeSearchButton.addEventListener("click", closeSearchWindow);
let matchingBooksInSearch = [];

function searchAndListResults()
{
  // set display: none på author og publisher

  showAuthorInfoStats.classList.remove("grid");
  showAuthorInfoStats.classList.add("hiddenDisplay");
  showPublisherStats.classList.remove("grid");
  showPublisherStats.classList.add("hiddenDisplay");

  // vis searchDiv og begynn
  searchDiv.classList.remove("hiddenDisplay");
  searchDiv.classList.add("showDisplay");
  searchDiv.classList.add("slideInTopAnim");


  let matchFound = false;
  const otherBooksList = bookDatabase.books[currentBookArrayNumber].series.otherBooksInSeries;
 

  const list = Array.from(listOfBooks.children);
  const newListArray = [];

  const clickToAccessText = document.querySelector("#clickToAccessText");
  const errorMessageText = document.querySelector("#errorMessageText");

  let delay = 2;
  const delayInc = 1;
  
  
  soundEffects.enterSearchMode.play();
  console.log("should have played sound");
  matchFoundText.textContent = "Awaiting search";

  while(searchResultsList.lastChild) searchResultsList.lastChild.remove();

  for(let i = 0; i < otherBooksList.length; ++i)
  {
     list.forEach(item =>
     {
        if(otherBooksList[i] === item.textContent)  
        {
            const newListItem = document.createElement("li");
            newListItem.textContent = item.textContent;
            // newListItem.classList.add("hiddenDisplay");

            newListArray.push(newListItem);
            matchingBooksInSearch.push(i);
          
            matchFound = true;
        }
     });
  }
  if(matchFound)
  { 
    console.log(newListArray);
           
    newListArray.forEach(function(item, index, array)  
    {
                 
      item.classList.add("slideInTopAnim");
      item.classList.add("hidden");
      item.style.animationDelay = delay + "s";
      // sette opp eventlistener for trykk
      item.addEventListener("click", () => 
      { 
        const childrenArray = Array.from(item.parentNode.children);
        currentBookArrayNumber = matchingBooksInSearch[childrenArray.indexOf(item)];
        closeSearchWindow();
        fromSearch = true;
        displayBook();
      
      });



      item.addEventListener("animationstart", () =>
      {

        searchingStatus.textContent = "Loading";
        if(array.length > 1)  matchFoundText.textContent = "Adding entries";
        else matchFoundText.textContent = "Adding entry"

        item.classList.remove("hidden");
       

      });
      item.addEventListener("animationend", () => 
      { 
              // soundEffects.enterListItems.play(); 
        if(index == array.length -1)
        { 
          searchingStatus.textContent = "Awaiting user input";
          matchFoundText.textContent = "Entries added";
          clickToAccessText.textContent = "Click list item to access book";
          soundEffects.clickListItem.play();
        
        }
      });
      searchResultsList.appendChild(item); 
      delay += delayInc;
      
    } );
      
  }
  else
  {
    setTimeout(()=>{
      searchingStatus.textContent = "Awaiting user input";
      matchFoundText.textContent = "No entries found";
      soundEffects.noEntriesFound.play();
      clickToAccessText.textContent = "Click close to exit search"
    
    }, 2000); 
    // legg inn no matches found
  }
  
}

function closeSearchWindow()
{
   if(inSearchMode)
   {
    
    searchDiv.classList.remove("slideInTopAnim");
    searchDiv.classList.add("slideOutTopAnim");
    searchDiv.addEventListener("animationend", () =>
    {
      searchDiv.classList.remove("showDisplay");
      searchDiv.classList.remove("slideOutTopAnim");
      searchDiv.classList.add("hiddenDisplay");

      showAuthorInfoStats.classList.add("grid");
      showAuthorInfoStats.classList.remove("hiddenDisplay");
      showPublisherStats.classList.add("grid");
      showPublisherStats.classList.remove("hiddenDisplay"); 
      searchingStatus.textContent = "Searching";

      inSearchMode = false;
    }, {once: true});
   }
}



const otherBooksButton = document.querySelector("#otherBooksButton");
otherBooksButton.addEventListener("click", removeAllAndDisplaySearch);

let darkMode = true;
const darkLightIcon = document.querySelector("#darkLightIcon");

function darkLightModeToggle()
{
    const main = document.querySelector("body");
    if(darkMode) 
    {
        main.classList.add("lightMode");
        darkMode = false;
    }
    else
    {
        main.classList.remove("lightMode");
        darkMode = true;
    }
}


darkLightIcon.addEventListener("click", darkLightModeToggle);