const quote = document.querySelector(".quote"); 
const btnGenerate = document.querySelector(".btn-generate"); 
const url = "https://api.quotable.io/random?maxLength=200";

let flag = 0;

if(!flag) {
    fetch(url)
    .then(response => response.json())
    .then(json => {
        let output = json.content;
        quote.innerText = output;
    })
    flag = 1;
}

function generateQuote() {
    fetch(url)
    .then(response => response.json())
    .then(json => {
        let output = json.content;
        quote.innerText = output;
    })

}


btnGenerate.addEventListener('click', generateQuote)


