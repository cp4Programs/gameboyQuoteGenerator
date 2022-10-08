const quoteButton = document.querySelector("#quote-screen");
const content = document.querySelector("#content");
const author = document.querySelector("#author");


quoteButton.addEventListener(".arrow-button1", () => {

    const index = Math.floor(Math.random() * 10)
    const page = Math.floor(Math.random() * 7268)
    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes${page}`)
        .then(response => response.Json())
        .then(response => {
            console.log(res.data[index].quoteText)
            console.log(res.data[index].quoteAuthor)
        })

    console.log(index);
    console.log(page);
})


