const text = document.querySelector(".text-inp");
const check_btn = document.querySelector(".check-btn");
const container = document.querySelector(".container");
let msg = document.createElement("h1");
let flag = 0;

check_btn.addEventListener("click", () => {
    if(msg.innerText.length) {
            msg.innerHTML = "";
    }
    if(text.value == "") {
        alert("enter text to check")
    }
    else {
        
        let word = text.value;
        let dup = word.split('').reverse().join('');
        console.log(dup);
        if(word === dup) {
            flag = 1;
        }
        else {
            flag = 0;
        }

        createEle();
    }
})



function createEle () {
    
    if(flag) {
        msg.innerHTML = "Yehhh!!! this is a palindrome";
        container.prepend(msg);
    }

    else {
        msg.innerHTML = "This is not a palindrome";
        container.prepend(msg);
    }

}