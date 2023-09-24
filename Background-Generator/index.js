const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const randomColorBtn = document.querySelector('#RandomColor');
const bodyBg = document.querySelector('body');
const hex = document.querySelector('#hex');
const container = document.querySelector('#container');
const cardtitle = document.querySelector('.card-title');
randomColorBtn.addEventListener('click', getHex);

function getHex() {
    let hexCol = "#";

    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexNumbers.length);
        console.log(random)
        hexCol += hexNumbers[random];
    }

    bodyBg.style.backgroundColor = hexCol;
    bodyBg.style.textAlign = 'center';
    hex.innerHTML = hexCol;
    hex.style.fontSize = "1.5rem";
    hex.style.fontFamily = "sans-serif";
    hex.style.fontWeight = "600";
    hex.style.marginTop = "10px";
}

// Just for fun lets style everything with Javascript

container.style.position = 'absolute';
container.style.top = '50%';
container.style.left = '50%';
container.style.transform = "translate(-50%,-50%)";
container.style.boxShadow = "0 3px 3px #000";
randomColorBtn.style.background = "transparent";
randomColorBtn.style.textTransform = "uppercase";
randomColorBtn.style.padding = "10px 20px";
randomColorBtn.style.boxShadow = "0 3px 3px #000";
randomColorBtn.style.fontWeight = "300";
randomColorBtn.style.marginTop = "10px";
cardtitle.style.fontWeight = "500";
cardtitle.style.fontFamily = "georgia";