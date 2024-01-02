//Variabler
const bookHolders = Array.from(document.querySelectorAll("figure"));
const bookAuthor = Array.from(document.getElementsByClassName("bookAuthor"));
const bookTitle = Array.from(document.getElementsByClassName("bookTitle"));
const toTheBooks = document.getElementById("toTheBooks");
const showBooks = document.getElementById("mainPage");
const showInfo = document.getElementById("infoPage");
const theBookAuthor = document.getElementById("theBookAuthor");
const theBookTitle = document.getElementById("theBookTitle");
const chosenBookAuthor = document.getElementById("chosenBookAuthor");
const chosenBookTitle = document.getElementById("chosenBookTitle");
const chosenBookDesc = document.getElementById("chosenBookDesc");
const audienceDetails = document.getElementById("audienceDetails");
const publishedDetails = document.getElementById("publishedDetails");
const pagesDetails = document.getElementById("pagesDetails");
const publisherDetails = document.getElementById("publisherDetails");
async function getTheBook() {
    //Hämta data från API
    const response = await fetch("https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books");
    const data = await response.json();
    /* En loop så att varje bok av de åtta får en författare och titel*/
    for (let i = 0; i < data.length; i++) {
        bookAuthor[i].innerText = data[i].author;
        bookTitle[i].innerText = data[i].title;
    }
    /*En loop för att tilldela varje bok en eventlistner och detaljer om boken som visas när man klikar på boken*/
    for (let i = 0; i < bookHolders.length; i++) {
        bookHolders[i].addEventListener("click", function () {
            /*Gömmer sidan med alla böcker*/
            showBooks.className = "hide";
            /*Tar farm sidan med info om valda boken*/
            showInfo.className = "showInfo";
            /*detaljer om boken*/
            theBookAuthor.innerText = data[i].author;
            theBookTitle.innerText = data[i].title;
            chosenBookAuthor.innerText = data[i].author;
            chosenBookTitle.innerText = data[i].title;
            chosenBookDesc.innerText = data[i].plot;
            audienceDetails.innerText = data[i].audience;
            publishedDetails.innerText = data[i].year;
            pagesDetails.innerText = data[i].pages;
            publisherDetails.innerText = data[i].publisher;
        });
    }
}
getTheBook();
