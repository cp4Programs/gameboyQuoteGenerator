const quoteButton = document.querySelector(".right-arrow-button");
const previousQuote = document.querySelector(".left-arrow-button");
const changeBgColor = document.querySelector(".up-arrow-button");
const changeFontFamily = document.querySelector(".down-arrow-button");
const changeImg = document.querySelector(".select-grey-button");
const credits = document.querySelector(".start-grey-button");
const bButton = document.querySelector(".red-buttonB")
const aButton = document.querySelector(".red-buttonA")
const content = document.querySelector("#content");
const author = document.querySelector("#author");
const preview = document.querySelector("#preview");
const quoteList = [];
const authorList = [];
let currentQuote = content.innerText;
let currentAuthor = author.innerText;
let btnPreview = preview.innerText;
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

quoteButton.addEventListener("mouseover", () => {
    preview.innerText = "Next Quote";
    setTimeout(() => {
        preview.innerText = "";
    }, 1750);
})
quoteButton.addEventListener("mouseout", () => {
    preview.innerText = "";
})
previousQuote.addEventListener("mouseover", () => {
    preview.innerText = "Previous Quote";
    setTimeout(() => {
        preview.innerText = "";
    }, 1750);
})
previousQuote.addEventListener("mouseout", () => {
    preview.innerText = "";
})
changeBgColor.addEventListener("mouseover", () => {
    preview.innerText = "Change Background Color";
    setTimeout(() => {
        preview.innerText = "";
    }, 1750);
})
changeBgColor.addEventListener("mouseout", () => {
    preview.innerText = "";
})
changeFontFamily.addEventListener("mouseover", () => {
    preview.innerText = "Change Font Family";
    setTimeout(() => {
        preview.innerText = "";
    }, 1750);
})
changeFontFamily.addEventListener("mouseout", () => {
    preview.innerText = "";
})
changeImg.addEventListener("mouseover", () => {
    preview.innerText = "Images";
    setTimeout(() => {
        preview.innerText = "";
    }, 1750);
})
changeImg.addEventListener("mouseout", () => {
    preview.innerText = "";
})
credits.addEventListener("mouseover", () => {
    preview.innerText = "Credits";
    setTimeout(() => {
        preview.innerText = "";
    }, 1750);
})
credits.addEventListener("mouseout", () => {
    preview.innerText = "";
})
bButton.addEventListener("mouseover", () => {
    preview.innerText = "Decrease Font Size";
    setTimeout(() => {
        preview.innerText = "";
    }, 1750);
})
bButton.addEventListener("mouseout", () => {
    preview.innerText = "";
})
aButton.addEventListener("mouseover", () => {
    preview.innerText = "Increase Font Size";
    setTimeout(() => {
        preview.innerText = "";
    }, 1750);
})
aButton.addEventListener("mouseout", () => {
    preview.innerText = "";
})

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
        imageNumber = -1;
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
        colorIndex = -1
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
        fontIndex = -1
    } else {
        fontIndex++
    }
}

const fontSizeList = ["10px", "14px", "18px", "22px"];
let fontSizeIndex = 0

function fontSizeUp() {
    if (fontSizeIndex === fontSizeList.length - 1) {
        return;
    } else {
        fontSizeIndex++;
    }
    screen.style.fontSize = fontSizeList[fontSizeIndex];
}

function fontSizeDown() {
    if (fontSizeIndex === 0) {
        return;
    } else {
        fontSizeIndex--;
    }
    screen.style.fontSize = fontSizeList[fontSizeIndex];
}

