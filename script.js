const quoteButton = document.querySelector(".arrow-button1");
const previousQuote = document.querySelector(".arrow-button2");
const content = document.querySelector("#content");
const author = document.querySelector("#author");
const clearList = document.querySelector(".grey-button1")
const quoteList = [];
const authorList = [];
let currentQuote = content.innerText;
let currentAuthor = author.innerText;
let currentIndex = 0;

quoteButton.addEventListener("click", () => {
    const index = Math.floor(Math.random() * 10)
    const page = Math.floor(Math.random() * 7268)
    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?=page${page}`)
        .then(res => res.json())
        .then(res => {
            if (currentIndex < quoteList.length - 1) {
                currentIndex++;
                content.innerText = quoteList[currentIndex];
                author.innerText = authorList[currentIndex];
            } else if (currentIndex === quoteList.length - 1) {
                quoteList.push(res.data[index].quoteText)
                authorList.push(res.data[index].quoteAuthor)
                currentIndex++;
                content.innerText = quoteList[currentIndex];
                author.innerText = authorList[currentIndex];
                console.log(currentIndex);
            } else {
                quoteList.push(res.data[index].quoteText)
                authorList.push(res.data[index].quoteAuthor)
                content.innerText = quoteList[currentIndex];
                author.innerText = authorList[currentIndex];
                currentIndex++;
                console.log(currentIndex);
            }
        })
})

previousQuote.addEventListener("click", () => {
    if (currentIndex === 0) {
        return;
    } else if (currentIndex === quoteList.length) {
        currentIndex -= 2;
        content.innerText = quoteList[currentIndex];
        author.innerText = authorList[currentIndex];
        console.log(currentIndex);
    } else {
        currentIndex--;
        content.innerText = quoteList[currentIndex];
        author.innerText = authorList[currentIndex];
        console.log(currentIndex);
    }
})

clearList.addEventListener("click", () => {
    console.log(quoteList, authorList, currentIndex);
})