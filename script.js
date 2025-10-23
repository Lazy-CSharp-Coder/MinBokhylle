// books array med litt info
const bookDatabase = 
{  books : [  { name : "The Way Of Shadows", 
              cover : "/Images/thewayofshadows.jpg",
              author :  "Brent Weeks",
              series :  { name :"The Night Angel Trioligy",  number: "1 [of 3]", completed : true, otherBooksInSeries : ["Beyond The Shadows", "Shadows Edge"] } ,
              genre :  [ "Fantasy", "Fiction" ],
              characters : [ "Azoth", "Durzo Blint", "Elene Cromwyll", "Jarl", "Logan Gyre", "Rimbold Drake", "Viridiana Sovari", 
                            "Gwinvere Kirena", "Feir Cousat", "Dorian Ursuul", "Solonariwan Tofusin", "Jenine Gyre", "Neph Dada"],
              language : "English",
              published : new Date(2008, 9, 1),
              publisher : "Orbit"
            }, 
            { name : "Beyond The Shadows",
            cover : "/Images/beyondtheshadows.jpg",
              author : "Brent Weeks",
              series : { name :"The Night Angel Trioligy", number: "2 [of 3]", completed : true, otherBooksInSeries : ["The Way Of Shadows", "Shadows Edge"] } ,
              genre :  [ "Fantasy", "Fiction" ],
              characters : [ "Azoth", "Durzo Blint", "Elene Cromwyll", "Jarl", "Logan Gyre", "Rimbold Drake", "Viridiana Sovari", 
                            "Gwinvere Kirena", "Feir Cousat", "Dorian Ursuul", "Solonariwan Tofusin", "Jenine Gyre", "Neph Dada"],
              language : "English",
              published : new Date(2008, 9, 28),
              publisher : "Orbit"
            },
            { name : "Shadows Edge",
            cover : "/Images/shadowsedge.jpg",
              author :  "Brent Weeks", 
              series :  { name :"The Night Angel Trioligy", number: "3 [of 3]", completed : true, otherBooksInSeries : ["The Way Of Shadows", "Beyond The Shadows"]  } ,
              genre :  [ "Fantasy", "Fiction" ],
              language : "English",
              characters : [ "Azoth", "Durzo Blint", "Elene Cromwyll", "Jarl", "Logan Gyre", "Rimbold Drake", "Viridiana Sovari", 
                            "Gwinvere Kirena", "Feir Cousat", "Dorian Ursuul", "Solonariwan Tofusin", "Jenine Gyre", "Neph Dada"],
              published : new Date(2008, 10, 25),
              publisher : "Orbit"
            },
            { name : "Ship Of Magic",
            cover : "/Images/shipofmagic.jpg",
              author : "Robin Hobb",
              series : { name : "The Live Ship Traders", number : "1 [of 3]", completed: true,  otherBooksInSeries : ["The Mad Ship", "Ship Of Destiny"] } ,
              genre : [ "Fantasy", "Fiction" ],
              language : "English",
              characters : [ "Althea Vestrit", "Ephron Vestrit", "Ronica Vestrit", "Keffria Vestrit", "Kyle Haven", "Wintrow Haven", "Malta Haven", 
                            "Vivacia", "Paragon (Liveship)", "Brashen Trell", "Amber (Liveship Traders)", "Kennit"],
              published: new Date(1998, 2, 2),
              publisher : "Bantam"
            },
            { name : "Dragons Of Winter Night",
            cover : "/Images/dragonswinternight.jpg",
              author : [ "Margaret Weis",  "Tracy Hickman" ],
              series : { name : "The DragonLance Saga", number : "2 [of 3]", completed: true,  otherBooksInSeries : ["Dragons Of Autumn Twilight", "Dragons Of Spring Dawning"] } ,
              genre : [ "Fantasy", "Fiction", "Epic Fantasy"],
              characters : [ "Tanis Half-Elven", "Sturm Brightblade", "Flint Fireforge", "Tika Waylan", "Caramon Majere", "Raistlin Majere", "Lauralanthalasa", "Kitiara uth Matar", "Tasslehoff Burrfoot", 
                            "Alhana Starbreeze"," Riverwind", "Goldmoon", "Kylan Iverson", "Garn", "Aylaen", "Norgaard", "Wulfe", "Raegar", "Gilthanas", "Derek Crownguard"],
              language : "English",
              published: new Date(1985, 6, 1),
              publisher : "TSR"
            },
            { name : "The Serpent Mage ",
            cover : "/Images/serpentmage.jpg",
              author : [ "Margaret Weis",  "Tracy Hickman" ],
              series : { name : "The Death Gate Cycle", number : "4 [of 7]", completed: true, otherBooksInSeries : ["Dragon Wing", "Elven Star", " Fire Sea", "The Hand Of Chaos", "Into The Labyrinth", "The Seventh Gate"] } ,
              genre : [ "Fantasy", "Fiction", "Epic Fantasy"],
              language : "English",
              characters : ["Haplo", "Alfred", "Devon", "Grundle", "Alake", "Sang-Drax"],
              published: new Date(1992, 0, 1),
              publisher : "Bantam"
            },
            { name : "Menneskefluene",
            cover : "/Images/menneskefluene.jpg",
              author : "Hans Olav Lahlum",
              series : { name : "K2 og Patricia", number : "1 [of 12]", completed: false, otherBooksInSeries : ["Satelittmenneskene", "Svanemordet"] } ,
              genre : [ "Crime", "Fiction"],
              language : "Norwegian",
              characters : ["Kolbjørn Kristiansen (K2)", "Paticia"],
              published: new Date(2014, 5, 1),
              publisher : "Cappelen"
            },{
               name : "The Final Empire",
               cover : "/Images/thefinalempire.jpg",
              author : "Brandon Sanderson",
              series : { name : "Mistborn", number : "1 [of 3]", completed: true, otherBooksInSeries : ["The Well of Ascension", "The Hero of Ages"] } ,
              genre : [ "Fantasy", "Fiction"],
              language : "English",
              characters : ["Marsh", "Vin", "Elend Venture", "Sazed", "Kelsier", "Dockson", "Hammond", "Breeze", "Clubs", "Spook", "The Lord Ruler", "Lord Renoux", "Yeden", "OreSeur"],
              published: new Date(2006, 5, 17),
              publisher : "Tor Books"
            }
         ],
  authors : [ { name: "Margaret Weis", 
                image: "/Images/margaretweis.png", 
                born: new Date(1948, 2, 16), 
                location : "Independence, Missouri U.S",
                gender : "female",
              }, 
              { name: "Tracy Hickman", 
                image: "/Images/tracyhickman.png", 
                born: new Date(1955, 10, 25), 
                location : "Salt Lake City, Utah U.S",
                gender : "male"
              }, 
              { name : "Brent Weeks", 
                image: "/Images/brentweeks.png", 
                born : new Date(1977, 2, 7), 
                location : "Montana U.S" ,
                gender : "male"
              },

              { name: "Robin Hobb", 
                image: "/Images/robinhobb.png", 
                born: new Date(1952, 2, 5), 
                location : "Berkley, California U.S", 
                gender : "female",
                penAs : ["Robin Hobb", "Megan Lindholm" ]
              },
              {
                name : "Brandon Sanderson",
                image : "/Images/brandonsanderson.png",
                born : new Date(1975, 11, 19),
                location : "Lincoln, Nebraska U.S",
                gender : "male",
                pensAs : null
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


const maleEffects = 
{
   aiName : "John",
   enterListItems : new Audio("/Sounds/enterlistitemsj.mp3"),
   accessingBooks : new Audio("/Sounds/accessingj.mp3"),
   accessing : new Audio("/Sounds/accessingj.mp3"),
   enterSearchMode : new Audio("/Sounds/searchmodej.mp3"),
   switching : new Audio("/Sounds/switchingj.mp3"),
   bookIntro : new Audio("/Sounds/bookintroj.mp3"),
   featureNotAvailable : new Audio("/Sounds/notavailablej.mp3"),
   alreadyInSearchMode : new Audio("/Sounds/alreadysearchingj.mp3"),
   requestNotFound : new Audio("/Sounds/requestnotfoundj.mp3"),
   noEntriesFound : new Audio("/Sounds/noentriesfoundj.mp3"),
   clickListItem : new Audio("/Sounds/clicklistitemj.mp3"),
   iconsCreatedBy : new Audio("/Sounds/iconscreatedbyj.mp3"),
   lightMode : new Audio("/Sounds/lightmodej.mp3"),
   darkMode : new Audio("/Sounds/darkmodej.mp3"),

   morning : new Audio("/Sounds/morningj.mp3"),
   afternoon : new Audio("/Sounds/afternoonj.mp3"),
   evening : new Audio("/Sounds/eveningj.mp3"),
   night : new Audio("/Sounds/nightj.mp3"),
   introduction : new Audio("/Sounds/introj.mp3"),
   maintenance : new Audio("/Sounds/maintenancej.mp3"),
   website : new Audio("/Sounds/webpagej.mp3"),

   activate : new Audio("/Sounds/activatej.mp3"),
   retrieving : new Audio("/Sounds/retrievingj.mp3")

}

const femaleEffects = 
{
   aiName : "Adeline",
   enterListItems : new Audio("/Sounds/enterlistitemsa.mp3"),
   accessingBooks : new Audio("/Sounds/accessinga.mp3"),
   accessing : new Audio("/Sounds/accessinga.mp3"),
   enterSearchMode : new Audio("/Sounds/searchmodea.mp3"),
   switching : new Audio("/Sounds/switchinga.mp3"),
   bookIntro : new Audio("/Sounds/bookintroa.mp3"),
   featureNotAvailable : new Audio("/Sounds/notavailablea.mp3"),
   alreadyInSearchMode : new Audio("/Sounds/alreadysearchinga.mp3"),
   requestNotFound : new Audio("/Sounds/requestnotfounda.mp3"),
   noEntriesFound : new Audio("/Sounds/noentriesfounda.mp3"),
   clickListItem : new Audio("/Sounds/clicklistitema.mp3"),
   iconsCreatedBy : new Audio("/Sounds/iconscreatedbya.mp3"),
   lightMode : new Audio("/Sounds/lightmodea.mp3"),
   darkMode : new Audio("/Sounds/darkmodea.mp3"),

   morning : new Audio("/Sounds/morninga.mp3"),
   afternoon : new Audio("/Sounds/afternoona.mp3"),
   evening : new Audio("/Sounds/eveninga.mp3"),
   night : new Audio("/Sounds/nighta.mp3"),
   introduction : new Audio("/Sounds/introa.mp3"),
   maintenance : new Audio("/Sounds/maintenancea.mp3"),
   website : new Audio("/Sounds/webpagea.mp3"),

   activate : new Audio("/Sounds/activatea.mp3"),
   retrieving : new Audio("/Sounds/retrievinga.mp3")

}

// startpage funsjoner og eventlisteners 

const femaleCheck = document.querySelector("#femaleCheck");
const maleCheck = document.querySelector("#maleCheck");
const enterBookshelfButton = document.querySelector("#enterBookshelfButton");
const aiVoiceDiv = document.querySelector("#aiVoiceDiv");  
console.log(aiVoiceDiv);
const accessingDiv = document.querySelector("#accessingDiv");

// sette Adeline som default her

let soundEffects = femaleEffects;
femaleCheck.checked = true;


femaleCheck.addEventListener("change", () => 
  { 
    femaleCheck.checked = true; 
    maleCheck.checked = false; 
    soundEffects = femaleEffects; 

  });
maleCheck.addEventListener("change", () => 
{ 
   maleCheck.checked = true; 
   femaleCheck.checked = false; 
   soundEffects = maleEffects;

});

enterBookshelfButton.addEventListener("click", enterDatabase);

// sette opp klokken

const clockDiv = document.querySelector("#clockDiv");

function updateClock()
{
   const timeNow = new Date;
   let hours = timeNow.getHours();
   let minutes = timeNow.getMinutes();
   let seconds = timeNow.getSeconds();

   if(hours < 10) hours = "0" + hours;
   if(minutes < 10) minutes = "0" + minutes;
   if(seconds < 10) seconds = "0" + seconds;

   const timeString = `${hours}:${minutes}:${seconds}`;
   clockDiv.textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);

function introducingBookshelf()
{
   const accessingStatusText = document.querySelector("#accessingStatusText");
   console.log(accessingStatusText);
   loadAiHelper(6, accessingStatusText);

}

// spill intro med greeting og fade in hovedsiden

function playIntroductionAndEnterDatabase()
{
  const timeNow = new Date();
  const hour = timeNow.getHours();
  let timeGreeting;
  console.log("Timen er : " + hour);
  if(hour == 5) 
  {
     if(voiceEnabled) soundEffects.maintenance.play();
     const accessingStatusText = document.querySelector("#accessingStatusText");
     accessingStatusText.textContent = "Server closed for maintenance";
     console.log("det er tid for maitenance");
     return 0;
  }
  if(hour < 5) timeGreeting = soundEffects.night;
  else if(hour < 12) timeGreeting = soundEffects.morning;
       else if(hour < 19) timeGreeting = soundEffects.afternoon;
            else timeGreeting = soundEffects.evening;
  // sette opp hele introduksjon her
  const introduction = soundEffects.introduction;

  timeGreeting.play();
  timeGreeting.addEventListener("ended", function()
  {
    introduction.play();
    introduction.addEventListener("ended", function()
    {
      const startPage = document.querySelector("#startPage");
      const databasePage = document.querySelector("#databasePage");

      startPage.classList.add("fadeOutAnim");
      startPage.addEventListener("animationend", function()
      {
          console.log("i animation end");
          startPage.classList.remove("flex");
          startPage.classList.add("hiddenDisplay");
          startPage.classList.remove("fadeOutAnim");

          if(window.innerWidth < 426) databasePage.classList.add("flex");
          else databasePage.classList.add("grid");
          
          databasePage.classList.remove("hiddenDisplay");
          databasePage.classList.add("fadeInAnim");
          console.log("window inner width er nå : " + window.innerWidth);
         
          // databasePage.classList.add("flex");


          const main = document.querySelector("main");
          main.style.backgroundColor = "transparent";
          const body = document.querySelector("body");
          body.classList.add("fadeInAnim");

          databasePage.addEventListener("animationend", function()
          {
             databasePage.classList.remove("fadeInAnim");
             console.log(window.innerWidth);
             body.classList.remove("fadeInAnim");
             setListAndAnimate();
        }, {once:true});

         

      }, {once:true});

      // sett backgroundcolor: none for å få frem bilde
  
    }, {once:true});
    
  }, {once: true});
  return 1;     
}

// denne funksjonen henter boktittlene fra databasen og legger i listen + anim

function setListAndAnimate()
{
  let delay = 0;
  const delayInc = 300;

  skipButton.classList.add("hiddenDisplay");
  aiVoiceButton.classList.remove("hiddenDisplay");
  
  bookDatabase.books.forEach(function(item) 
  {
    const newListItem = document.createElement("li");
    console.log(newListItem);
    newListItem.textContent = item.name;
    if(voiceEnabled) soundEffects.retrieving.play();

    setTimeout(() => 
    { newListItem.classList.add("slideInTopAnim");
      newListItem.addEventListener("animationend", ()=> { /* play sound here */ }) ;
      listOfBooks.appendChild(newListItem); 
    }, delay);
    
  
    delay += delayInc;
   
    newListItem.addEventListener("click", displayBook);
  });

}

// laste inn fake data - bruker intervall

function loadAiHelper(duration, statusUpdateNode)
{
  let remainingTime = duration;

  const countDownInterval = setInterval(() =>
  {
    remainingTime--;
    // countDisplay.textContent = remainingTime;

    if(remainingTime == 5) 
    {
       statusUpdateNode.textContent = "Loading dependencies";
       console.log("er her i 5 sekunder");
    } 
    else if(remainingTime == 4)
         {
            statusUpdateNode.textContent = "Installing dependencies"
         }
         else if(remainingTime == 3)
              {
                statusUpdateNode.textContent = "Loading database";
              }
              else if(remainingTime == 2)
                   {
                       statusUpdateNode.textContent =  "Loading ai voice : " + soundEffects.aiName;
                   }
                   else if(remainingTime <= 0)                   
                        {
                            clearInterval(countDownInterval);
                            statusUpdateNode.textContent = "Playing : Introduction";
                            if(playIntroductionAndEnterDatabase() == 1) isOnStartPage = false;
                            // ferding med loading
                        }
  }, 1000);

}

// funsjon for å starte opp hele greien

function enterDatabase() 
{
  console.log("entering database function");
  
  // animate out ai voice div and inn loading div

  aiVoiceDiv.classList.add("fadeOutAnim");
  aiVoiceDiv.addEventListener("animationend", function () 
  {
    aiVoiceDiv.classList.remove("flex");
    aiVoiceDiv.classList.add("hiddenDisplay");
    accessingDiv.classList.add("fadeInAnim");
    accessingDiv.classList.remove("hiddenDisplay");
    accessingDiv.classList.add("flex");
    accessingDiv.addEventListener("animationend", () => 
    {
       accessingDiv.classList.remove("fadeInAnim"); 
       introducingBookshelf();
      
    }, {once:true});

  }, {once:true});

}

// funksjon som returnerer en string med en dato som passer

function getDateString(date)
{
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  return `${date.getDate()}th of ${monthNames[date.getMonth()]}, ${date.getFullYear()}`;

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
      divNode.classList.add("fadeOutErrorWin");
      divNode.addEventListener("animationend", function() 
      {
        divNode.classList.remove("fadeOutErrorWin");
        divNode.classList.remove("flex");
        divNode.classList.add("hiddenDisplay");
        nodeReappering.classList.remove("hiddenDisplay");
        nodeReappering.classList.add("grid");
      }, {once:true});
    }
  }, 1000);

}

// lager ett objekt som inneholder alle feltene til boken som skal manipuleres
const displayAuthorItems =
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
    console.log("I am retrieving author : " + authorString);
    // legg inn søk i author key
    for(let i = 0; i < bookDatabase.authors.length; ++i)
    {
        if(bookDatabase.authors[i].name === authorString) 
        {
           authorObject = bookDatabase.authors[i];
           console.log(authorObject);
           i = bookDatabase.authors.length;
        }
    }

    if(authorObject == 0) return 0;
    
    // legg inn data 
    this.authorImage.src = authorObject.image;
    if(authorObject.gender === "female") this.authorGenderImage.src = "/Icons/womanb.png";
    else this.authorGenderImage.src = "/Icons/manb.png";
    this.authorName.textContent = authorObject.name;
    console.log("autor date object : " + authorObject.born);
    this.authorBorn.textContent = getDateString(authorObject.born);
    this.authorLocation.textContent = authorObject.location;
    if(authorObject.pensAs == undefined) this.authorPensAs.textContent = authorObject.name;
    else this.authorPensAs.textContent = authorObject.penAs.join(", "); 

    return 1;
  }
}

let isAuthorShowing = false;
let authorNumberShowing = 0;

const authorDiv = document.querySelector("#authorDiv");


function showAuthorInfo()
{
  authorDiv.classList.add("scaleInAnim");
  authorDiv.classList.remove("scaleOutAnim");
  authorDiv.classList.remove("hidden");

  // anim authorImage

  // displayAuthorItems.authorImage.classList.remove("scaleInAnim");

  // authorDiv.classList.remove("scaleOutAnim");
  authorDiv.addEventListener("animationend", function() 
  { 
    authorDiv.classList.add("show");
    authorDiv.classList.remove("scaleInAnim");

    // anim authorImage
    // displayAuthorItems.authorImage.classList.remove("hidden");
    // displayAuthorItems.authorImage.classList.add("scaleInAnim");

  }, {once:true});

}

function removeAuthorInfo() 
{
  // authorDiv.classList.add("show");

  authorDiv.classList.add("scaleOutAnim");
  authorDiv.addEventListener("animationend", function() 
    {
       authorDiv.classList.add("hidden");
       authorDiv.classList.remove("scaleOutAnim");
       authorDiv.classList.remove("show");

       // anim author image
      //  displayAuthorItems.authorImage.classList.add("hidden");

      // hvis publisher vises, sett column-revers for å evt. flytte den opp
      console.log("er i remove. ispubishershowing:" + isPublisherShowing);
       if(window.innerWidth < 426 && isPublisherShowing)
       {     
          console.log("in mobile mode authour removing");
          const authorPublisherWrapper = document.querySelector("#authorPublisherWrapper");
          authorPublisherWrapper.style.flexDirection = "column-reverse";
       }

    }, { once: true});
  // authorDiv.classList.remove("hidden");
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
      console.log("Author number in list : " + numInList);
      console.log("Author number showing : " + authorNumberShowing);
   
    }
    console.log ("is authorShowing" + isAuthorShowing + numInList + authorNumberShowing);
    
    if(window.innerWidth < 426) authorDiv.style.width = bookDiv.offsetWidth + "px";
    
    if(isAuthorShowing)
    {
      authorDiv.classList.add("scaleOutAnim");
      authorDiv.addEventListener("animationend", function() 
      {
        authorDiv.classList.remove("scaleOutAnim");

        // anim author image
        // displayAuthorItems.authorImage.classList.remove("hidden");
      
        if(authorNumberShowing != numInList)
        {          
          if(voiceEnabled) soundEffects.accessing.play();
          authorDiv.classList.add("scaleInAnim");
      
          if(numInList != -1)
          {
             displayAuthorItems.retrieveAuthor(bookDatabase.books[currentBookArrayNumber].author[numInList]);
             console.log(bookDatabase.books[currentBookArrayNumber].author[numInList]);
          }
          else displayAuthorItems.retrieveAuthor(bookDatabase.books[currentBookArrayNumber].author);
          
          
          isAuthorShowing = true;
          authorNumberShowing = numInList;
        }
        else
        {
          authorDiv.classList.add("hidden");
          authorDiv.classList.remove("show");
          // animasjon author image 

          // displayAuthorItems.authorImage.classList.add("hidden");

          // **


          console.log("skal nå lukke author totalt");
          if(window.innerWidth < 426 && isPublisherShowing)
          {     
             console.log("in mobile mode authour removing");
             const authorPublisherWrapper = document.querySelector("#authorPublisherWrapper");
             authorPublisherWrapper.style.flexDirection = "column-reverse";
          }
          isAuthorShowing = false;
        }
      }, { once: true});
   }
   else
   {  
      let completed = 0;
      
      if(numInList != -1)
      {
        completed = displayAuthorItems.retrieveAuthor(bookDatabase.books[currentBookArrayNumber].author[numInList]);
        console.log(bookDatabase.books[currentBookArrayNumber].author[numInList]);
      
      }
      else completed = displayAuthorItems.retrieveAuthor(bookDatabase.books[currentBookArrayNumber].author);
      if(completed)
      {
        if(voiceEnabled) soundEffects.accessing.play(); 
        showAuthorInfo();
        authorNumberShowing = numInList;
        isAuthorShowing = true;
      }
      else
      {
        const height = authorDiv.offsetHeight;
        if(height == 0) return;  // error message vises allerede
        
        authorDiv.classList.remove("grid");
        authorDiv.classList.add("hiddenDisplay");

        authorErrorWin.classList.add("flex");
        authorErrorWin.classList.remove("hiddenDisplay");
        authorErrorWin.classList.add("scaleInAnim");
        authorErrorWin.style.height = height + "px";
        if(window.innerWidth < 426) authorErrorWin.style.width = bookDiv.offsetWidth + "px";
        authorErrorWin.addEventListener("animationend", function()
        {
          const authorErrorCountText = document.querySelector("#authorErrorCountText");
          authorErrorWin.classList.remove("scaleInAnim");
          if(voiceEnabled) soundEffects.requestNotFound.play();
          closeWindowAutomatically(authorErrorWin, authorErrorCountText, 5, authorDiv);
       
        }, {once:true});
        }
    
   }

}

// objekt for publisher items - henter alle id'ene der

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
             this.webpage.textContent = this.webpage.href = publisherArray[i].webPage;
             
             publisherFound = true;
             i = publisherArray.length;
             
          }

      }
      if(publisherFound) return 1;
      else return 0;
      
   }
};

// endre denne til button hvis du får tid til det

const publisher = document.querySelector("#publisher");
publisher.addEventListener("click", showPublisher);
const publisherDiv = document.querySelector("#publisherDiv");
console.log(publisherDiv);
let isPublisherShowing = false;

function removePublisher() 
{
   if(isPublisherShowing)
   {
     publisherDiv.classList.add("scaleOutAnim");
     publisherDiv.addEventListener("animationend", function() 
     {
       publisherDiv.classList.add("hidden");
       publisherDiv.classList.remove("show");
       publisherDiv.classList.remove("scaleOutAnim");


       if(window.innerWidth < 426)
       {     
          console.log("in mobile mode - setter tilbake til column");
          const authorPublisherWrapper = document.querySelector("#authorPublisherWrapper");
          authorPublisherWrapper.style.flexDirection = "column";
       }

       

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
      if(window.innerWidth < 426)
      {     
        if(!isAuthorShowing) 
        {
          console.log("in mobile mode");
          const authorPublisherWrapper = document.querySelector("#authorPublisherWrapper");
          authorPublisherWrapper.style.flexDirection = "column-reverse";
        }
      }
      console.log("Publisher found");
      if(isPublisherShowing)
      {
          removePublisher();
        
      }
      else
      {
        console.log("er i animation for å vise publisher");
        if(voiceEnabled) soundEffects.accessing.play();
        publisherDiv.classList.add("scaleInAnim");
        publisherDiv.classList.remove("hidden");
        publisherDiv.classList.add("show");

        publisherDiv.addEventListener("animationend", function() 
        {
            if(voiceEnabled) soundEffects.website.play();
            publisherDiv.classList.remove("scaleInAnim");
            isPublisherShowing = true;
     

        }, { once: true});
      }
  
   }
   else
   {
      console.log("error publisher routine");
      console.log(displayPublisherItems);
      const height = publisherDiv.offsetHeight;
      console.log("height : " + height);

      if(height == 0) return;   // error win vises allerede
      
      publisherDiv.classList.remove("grid");
      publisherDiv.classList.add("hiddenDisplay");

      publisherErrorWin.classList.add("flex");
      publisherErrorWin.classList.remove("hiddenDisplay");
      publisherErrorWin.classList.add("scaleInAnim");
      publisherErrorWin.style.height = height + "px";
      console.log("bookdiv width : " + bookDiv.offsetWidth);
      if(window.innerWidth < 426) publisherErrorWin.style.width = bookDiv.offsetWidth + "px";
      publisherErrorWin.addEventListener("animationend", function()
      {
        const publisherErrorCountText = document.querySelector("#publisherErrorCountText");
        publisherErrorWin.classList.remove("scaleInAnim");
        if(voiceEnabled) soundEffects.requestNotFound.play();
        closeWindowAutomatically(publisherErrorWin, publisherErrorCountText, 5, publisherDiv);

      }, {once:true});
    }
   
}
// objekt for å vise book items på skjermen -inneholder alle queryselectors

const displayBookItems =
{
  bookname: document.querySelector("#bookName"),
  cover : document.querySelector("#bookCoverImg"),
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
    this.cover.src = bookDatabase.books[numberInArray].cover;
    this.seriesName.textContent = bookDatabase.books[numberInArray].series.name;
    this.seriesNumber.textContent = bookDatabase.books[numberInArray].series.number;
    if(bookDatabase.books[numberInArray].series.completed) this.seriesCompleted.textContent = "Yes";
    else this.seriesCompleted.textContent = "No";
    
    
    console.log(bookDatabase.books[numberInArray].series.otherBooksInSeries);
    this.otherBooksInSeries.textContent = bookDatabase.books[numberInArray].series.otherBooksInSeries.join(", ");

    this.otherBooksButton.addEventListener("click", removeAllAndDisplaySearch);

    this.genre.textContent = bookDatabase.books[numberInArray].genre.join(", ");
    this.characters.textContent = bookDatabase.books[numberInArray].characters.join(", ");
    this.language.textContent = bookDatabase.books[numberInArray].language;
    this.published.textContent = getDateString(bookDatabase.books[numberInArray].published);
    this.publisher.textContent = bookDatabase.books[numberInArray].publisher;
    // this.publisher.appendChild(publisherButton);

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

  } 
  
  // legge inn data med funksjon i objektet - håndert internt - oppgi kun objektnummer (nummer i array)

  const bookDiv = document.querySelector("#bookDiv");

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
    bookDiv.classList.add("show");
    bookDiv.classList.add("scaleOutAnim");
    bookDiv.classList.remove("hidden");
    bookDiv.addEventListener("animationend", function() 
    { 
      // ordne cover til neste anim

      displayBookItems.cover.classList.remove("scaleInAnim");
      displayBookItems.cover.classList.add("hidden");
      

      console.log("eri i lukk og fromsearch er : " + fromSearch);
      if(!fromSearch && voiceEnabled) soundEffects.accessingBooks.play();
      fromSearch = false;
      displayBookItems.retrieveBook(currentBookArrayNumber);
      bookDiv.classList.add("scaleInAnim");
      bookDiv.classList.remove("scaleOutAnim");
      bookDiv.addEventListener("animationend", function() 
      { 
        bookDiv.classList.remove("scaleInAnim"); 
        displayBookItems.cover.classList.add("scaleInAnim");
        displayBookItems.cover.classList.remove("hidden");
        
  
      
      }, 
      {once:true}); 
    }, {once:true});
  }
  else
  {  
      // spille av førstegangsbeskjed
    displayBookItems.retrieveBook(currentBookArrayNumber);
    if(hasBookIntroBeenPlayed == false) 
    {
      if(voiceEnabled) soundEffects.bookIntro.play();
      hasBookIntroBeenPlayed = true;
    } else  if(!fromSearch && voiceEnabled) soundEffects.accessingBooks.play();
    console.log("From search er " + fromSearch);
    fromSearch = false;
    bookDiv.classList.add("scaleInAnim");
    bookDiv.classList.add("show");
    bookDiv.classList.remove("hidden");
    bookDiv.addEventListener("animationend", function() 
    { 
      bookDiv.classList.remove("scaleInAnim");
      
      displayBookItems.cover.classList.remove("hidden");
      displayBookItems.cover.classList.add("scaleInAnim");

      // displayBookItems.otherBooksButton.classList.add("fadeInAnim");

      // displayBookItems.cover.addEventListener("animationend", () => { displayBookItems.cover.classList.remove("scaleInAnim");}, {once:true});


    }, { once:true}) ;

    isBookShowing = true;

  }
   
}

console.log(listOfBooks);


// sette opp credit button med eventlistnere og animasjon

const creditButton = document.querySelector("#creditButton");
let isCreditsDisplaying = false;
creditButton.addEventListener("click", function () 
{
  const creditIconDiv = document.querySelector("#creditIconDiv");
  if(isCreditsDisplaying)
  {
    creditIconDiv.classList.remove("scaleInAnim");
    creditIconDiv.classList.add("scaleOutAnim");
    creditIconDiv.addEventListener("animationend", function() 
    {
      creditIconDiv.classList.remove("showDisplay");
      creditIconDiv.classList.add("hiddenDisplay");
      creditIconDiv.classList.remove("scaleOutAnim");
    } , {once: true});
    isCreditsDisplaying = false;

  }
  else
  {
  //  creditIconDiv.classList.add("slideInBottomAnim");
   if(voiceEnabled) soundEffects.iconsCreatedBy.play();
   creditIconDiv.classList.add("scaleInAnim");
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
  if(voiceEnabled) soundEffects.featureNotAvailable.play();

}

// fjern vinduer som er i veien og vis search

function removeAllAndDisplaySearch()
{
   let windowOpenNode = undefined;

   if(inSearchMode)
   {
     if(voiceEnabled) soundEffects.alreadyInSearchMode.play();
     return;
   }

   if(isAuthorShowing)
   {
     windowOpenNode = authorDiv;
     removeAuthorInfo();
  }
   if(isPublisherShowing)
   {
     if(windowOpenNode == undefined) windowOpenNode = publisherDiv;
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

// sett i gang search og list resultat - hvis det er noen

function searchAndListResults()
{
  // set display: none på author og publisher
  const heightOfAuthorWin = authorDiv.offsetHeight;


  authorDiv.classList.remove("grid");
  authorDiv.classList.add("hiddenDisplay");
  publisherDiv.classList.remove("grid");
  publisherDiv.classList.add("hiddenDisplay");

  // vis searchDiv og begynn
  searchDiv.classList.remove("hiddenDisplay");
  searchDiv.classList.add("showDisplay");
  searchDiv.classList.add("scaleInAnim");


  let matchFound = false;
  const otherBooksList = bookDatabase.books[currentBookArrayNumber].series.otherBooksInSeries;
 

  const list = Array.from(listOfBooks.children);
  const newListArray = [];

  const clickToAccessText = document.querySelector("#clickToAccessText");
  const errorMessageText = document.querySelector("#errorMessageText");

  let delay = 2;
  const delayInc = 1;
  
  if(voiceEnabled) soundEffects.enterSearchMode.play();
  console.log("should have played sound");
  matchFoundText.textContent = "Awaiting search";
  clickToAccessText.textContent = "...";
  clickToAccessText.style.opacity = "0";

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
        if(voiceEnabled) soundEffects.switching.play();
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
              // if(voiceEnabled) soundEffects.enterListItems.play(); 
        if(index == array.length -1)
        { 
          searchingStatus.textContent = "Awaiting user input";
          matchFoundText.textContent = "Entries added";
          clickToAccessText.style.opacity = "1";
          clickToAccessText.textContent = "Click list item to access book";
          if(voiceEnabled) soundEffects.clickListItem.play();
        
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
      if(voiceEnabled) soundEffects.noEntriesFound.play();
      clickToAccessText.textContent = "Click close to exit search"
    
    }, 2200); 

  }
  
}

function closeSearchWindow()
{
   if(inSearchMode)
   {
    
    searchDiv.classList.remove("scaleInAnim");
    searchDiv.classList.add("scaleOutAnim");
    searchDiv.addEventListener("animationend", () =>
    {
      searchDiv.classList.remove("showDisplay");
      searchDiv.classList.remove("scaleOutAnim");
      searchDiv.classList.add("hiddenDisplay");

      authorDiv.classList.add("grid");
      authorDiv.classList.remove("hiddenDisplay");
      publisherDiv.classList.add("grid");
      publisherDiv.classList.remove("hiddenDisplay"); 
      searchingStatus.textContent = "Searching";

      inSearchMode = false;
    }, {once: true});
   }
}



let darkMode = true;
const darkLightIcon = document.querySelector("#darkLightIcon");

let isOnStartPage = true;

function darkLightModeToggle()
{
    if(isOnStartPage) return;
    const main = document.querySelector("body");
    if(darkMode) 
    {
        main.classList.add("lightMode");
        if(voiceEnabled) soundEffects.lightMode.play();
        darkMode = false;
    }
    else
    {
        main.classList.remove("lightMode");
        if(voiceEnabled) soundEffects.darkMode.play();
        darkMode = true;
    }
}


darkLightIcon.addEventListener("click", darkLightModeToggle);

// disable AI Voice button 

let voiceEnabled = true;
const aiVoiceButton = document.querySelector("#aiVoiceButton");
aiVoiceButton.addEventListener("click", function()
{
   if(voiceEnabled && !isOnStartPage)
   {
     aiVoiceButton.textContent = "Enable AI Voice";
     voiceEnabled = false;
   }
   else
   {
      aiVoiceButton.textContent = "Disable AI Voice";
      soundEffects.activate.play();
      voiceEnabled = true;
   }
});


// knapp for å skippe introen

const skipButton = document.querySelector("#skipButton");
const skipButtonMobile = document.querySelector("#skipButtonMobile");

function skipIntroduction()
{
  if(isOnStartPage)
  {
    startPage.classList.remove("flex");
    startPage.classList.add("hiddenDisplay");
    startPage.classList.remove("fadeOutAnim");
    databasePage.classList.add("fadeInAnim");
    databasePage.classList.remove("hiddenDisplay");
    console.log("window width : " + window.innerWidth);
    const main = document.querySelector("main");
    main.style.backgroundColor = "transparent";
    const body = document.querySelector("body");
    body.classList.add("fadeInAnim");

    databasePage.addEventListener("animationend", function()
    {
        databasePage.classList.remove("fadeInAnim");
        if(window.innerWidth <= 426)
        {          
         databasePage.classList.add("flex");
         console.log("legger til flex");
        }
        else databasePage.classList.add("grid");
        body.classList.remove("fadeInAnim");
        setListAndAnimate();
 
    }, {once:true});
    isOnStartPage = false;
  }
}

skipButton.addEventListener("click", skipIntroduction);
skipButtonMobile.addEventListener("click", skipIntroduction);

if(window.innerWidth < 426) 
{
  const authorPublisherWrapper = document.querySelector("#authorPublisherWrapper");
  authorPublisherWrapper.style.alignItems = "center";
}

