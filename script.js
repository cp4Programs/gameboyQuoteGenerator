const quoteButton = document.querySelector(".arrow-button1");
const content = document.querySelector("#content");
const author = document.querySelector("#author");
const display = document.querySelector(".grey-button1")
const quoteList = [];
const authorList = [];

quoteButton.addEventListener("click", () => {

    const index = Math.floor(Math.random() * 10)
    const page = Math.floor(Math.random() * 7268)
    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?=page${page}`)
        .then(res => res.json())
        .then(res => {
            console.log(res.data[index].quoteText)
            console.log(res.data[index].quoteAuthor)

            content.innerText = `"${res.data[index].quoteText}"`;
            author.innerText = res.data[index].quoteAuthor;
            quoteList.push(res.data[index].quoteText)
            authorList.push(res.data[index].quoteAuthor)
        })
})

const previousQuote = document.querySelector(".arrow-button2");
previousQuote.addEventListener("click", () => {
    content.innerText = `"${quoteList[quoteList.length - 2]}"`;
    author.innerText = authorList[authorList.length - 2];
})

display.addEventListener("click", () => {
    console.log(quoteList, authorList);
})