//Variabler
const bookHolders: HTMLElement[] = Array.from(document.querySelectorAll("figure"));
const bookAuthor: Element[] = Array.from(document.getElementsByClassName("bookAuthor"));
const bookTitle: Element[] = Array.from(document.getElementsByClassName("bookTitle"));
const toTheBooks: HTMLElement = document.getElementById("toTheBooks");
const showBooks: HTMLElement = document.getElementById("mainPage")
const showInfo: HTMLElement = document.getElementById("infoPage")
const theBookAuthor: HTMLElement = document.getElementById("theBookAuthor")
const theBookTitle: HTMLElement = document.getElementById("theBookTitle")
const chosenBookAuthor: HTMLElement = document.getElementById("chosenBookAuthor")
const chosenBookTitle: HTMLElement = document.getElementById("chosenBookTitle")
const chosenBookDesc:HTMLElement = document.getElementById("chosenBookDesc")
const audienceDetails:HTMLElement = document.getElementById("audienceDetails")
const publishedDetails:HTMLElement = document.getElementById("publishedDetails")
const pagesDetails:HTMLElement = document.getElementById("pagesDetails")
const publisherDetails:HTMLElement = document.getElementById("publisherDetails")

//interface med alla böcker
interface Book {
    audience: string;
    author: string;
    color:string;
    id: number;
    pages: string;
    plot: string;
    publisher: string;
    title: string;
    year: string;
  }

async function getTheBook(): Promise<void> {
    //Hämta data från API
    const response: Response = await fetch ("https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books");
    const data: Book[] = await response.json ();
   
    /* En loop så att varje bok av de åtta får en författare och titel*/
    for (let i = 0; i < data.length; i++) {
      (bookAuthor[i] as HTMLElement).innerText = data[i].author;
      (bookTitle[i] as HTMLElement).innerText = data[i].title;
      
    }

    /*En loop för att tilldela varje bok en eventlistner och detaljer om boken som visas när man klikar på boken*/
    for (let i = 0; i < bookHolders.length; i++) {
      bookHolders[i].addEventListener("click", function() {
        /*Gömmer sidan med alla böcker*/ 
        showBooks.className ="hide";
        /*Tar farm sidan med info om valda boken*/
        showInfo.className ="showInfo";
        /*detaljer om boken*/
        theBookAuthor.innerText = data[i].author;
        theBookTitle.innerText = data[i].title;
        chosenBookAuthor.innerText = data[i].author;
        chosenBookTitle.innerText = data[i].title;
        chosenBookDesc.innerText = data[i].plot
        audienceDetails.innerText = data[i].audience
        publishedDetails.innerText = data[i].year
        pagesDetails.innerText = data[i].pages
        publisherDetails.innerText = data[i].publisher
    });
    }
}
getTheBook()

