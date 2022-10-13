const quoteButton = document.querySelector(".arrow-button1");
const previousQuote = document.querySelector(".arrow-button2");
const content = document.querySelector("#content");
const author = document.querySelector("#author");
const changeImg = document.querySelector(".grey-button1")
const credits = document.querySelector(".grey-button2")
const quoteList = [];
const authorList = [];
let currentQuote = content.innerText;
let currentAuthor = author.innerText;
let currentIndex = 0;
let teamMembers = ['Elif Balci', 'Ahmed - Nur Ibrahim', 'Liam Bennet', 'Alex Ngan', 'Carlo Perito'];
let image = document.querySelector("#image");
let allImages = [
    "images/MimoImg.png",
    "images/link.jpeg",
    "images/Mario.webp",
    "images/Eve.jpeg",
    "images/bomberman.jpeg"
]
let imageNumber = 0;




quoteButton.addEventListener("click", () => {
    image.setAttribute("src", "");
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
    image.setAttribute("src", "");
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


changeImg.addEventListener("click", () => {
    content.innerText = "";
    author.innerText = "";
    console.log(quoteList, authorList, currentIndex);
    image.setAttribute("src", allImages[imageNumber]);
    if (imageNumber === allImages.length - 1) {
        imageNumber = 0;
    }
    imageNumber++;
})

credits.addEventListener("click", () => {
    image.setAttribute("src", "");
    content.innerText = "Credits";
    author.innerText = "Team Members";
    teamMembers.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        author.appendChild(li);
    })
})



const screen = document.querySelector(".screen")
let colorIndex = 0
const colors = ["lightblue", "orange", "purple", "lightgreen", "pink", "yellow"]
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



function fontsizeup() {
    screen.style.fontSize = "17px"
}

function fontsizedown() {
    screen.style.fontSize = "10px"
}

