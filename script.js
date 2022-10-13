const quoteButton = document.querySelector(".arrow-button1");
const previousQuote = document.querySelector(".arrow-button2");
const content = document.querySelector("#content");
const author = document.querySelector("#author");
const clearCredits = document.querySelector(".grey-button1")
const credits = document.querySelector(".grey-button2")
const quoteList = [];
const authorList = [];
let currentQuote = content.innerText;
let currentAuthor = author.innerText;
let currentIndex = 0;
let teamMembers = ['Elif Balci', 'Ahmed - Nur Ibrahim', 'Liam Bennet', 'Alex Ngan', 'Carlo Perito']


quoteButton.addEventListener("click", () => {
    const index = Math.floor(Math.random() * 10)
    const page = Math.floor(Math.random() * 7268)
    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?page=${page}`)
        .then(res => res.json())
        .then(res => {
            if (res.data[index].quoteText.length > 120) {
                content.style.fontSize = "10px"
            }
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
credits.addEventListener("click", () => {
    content.innerText = "Team Members"
    author.innerText = "Elif Balci Ahmed-Nur Ibrahim Liam Bennet Alex Ngan Carlo Perito";

})





const screen = document.querySelector(".screen")
let colorIndex = 0
const colors = ["lightblue", "red", "purple"]
function changebg() {
    screen.style.backgroundColor = colors[colorIndex];
    if (colorIndex === colors.length - 1) {
        colorIndex = 0
    } else {
        colorIndex++
    }
}



let fontIndex = 0
const fonts = [`'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif`,
    'Franklin Gothic Medium', `'Arial Narrow'`, `'Press Start 2P', cursive`]
function changefont() {
    screen.style.fontFamily = fonts[fontIndex];
    if (fontIndex === fonts.length - 1) {
        fontIndex = 0
    } else {
        fontIndex++
    }
}


