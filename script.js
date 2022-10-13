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





const screen = document.querySelector(".screen")
let colorIndex = 0
const colors = ["lightblue", "orange", "purple", "lightgreen", "pink", "yellow"]
function changebg () {
    screen.style.backgroundColor = colors[colorIndex];
    if (colorIndex === colors.length -1){
        colorIndex = 0
    } else {
        colorIndex++
    }
}



let fontIndex = 0
const fonts = [`'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif`,
'Franklin Gothic Medium', `'Arial Narrow'`]
function changefont () {
    screen.style.fontFamily = fonts[fontIndex];
    if (fontIndex === fonts.length -1){
        fontIndex = 0
    } else {
        fontIndex++
    }
}



function fontsizeup (){
    screen.style.fontSize = "17px"
}

function fontsizedown(){
    screen.style.fontSize = "10px"
}

