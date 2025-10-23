
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
};

export { displayAuthorItems };
