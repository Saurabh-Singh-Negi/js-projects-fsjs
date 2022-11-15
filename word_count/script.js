const word = document.querySelector(".word-text");
const char = document.querySelector(".char-item");
const text = document.querySelector(".text-area");
let word_count = 0;
let char_count = 0;


text.addEventListener("input", () => {
    char_count = text.value.length;
    char.innerText = char_count;
    
    let word_arr = text.value.split(' ').filter((ele)=>ele !== '');
    word.innerText = word_arr.length;

})

