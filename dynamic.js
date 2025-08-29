//heart part
let count =0;
const hearts=document.querySelectorAll('.heart-pic');
for(const heartItem of hearts){
    heartItem.addEventListener('click', function(){
        count++;
        countHeart(count);
        heartItem.style.color="red";
    })
}
function countHeart(count){
    const heart=document.getElementById('love');
    heart.innerText=count;
}


// call button part
const callBtns = document.querySelectorAll(".green");
for (let callBtn of callBtns) {
    callBtn.addEventListener("click", function() {
        const numberOfCoin = document.getElementById("coin");
        let convertCoin = Number(numberOfCoin.innerText);

        const card = callBtn.closest('.card');
        const title = card.querySelector('.card-title').innerText;
        const hotLine = card.querySelector('.numbers').innerText;

        if (convertCoin >= 20) {  
            alert(`Calling ${title} ${hotLine}....`);
            convertCoin -= 20;
            numberOfCoin.innerText = convertCoin;
        } else {
            alert("Insufficient coin");
        }

        addElement(title, hotLine);
    });
}

//Add function in call history
function addElement(title, hotLine) {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const aside = document.getElementById("history");

    const divParent = document.createElement("div");
    divParent.innerHTML = `
        <div style="display:flex; justify-content:space-between; background:#FAFAFA; padding:5px; margin-top:5px; border-radius:5px;">
            <div>
                <h4>${title}</h4>
                <p>${hotLine}</p>
            </div>
            <p>${time}</p>
        </div>
    `;
    aside.appendChild(divParent);
}


// Add item in the call history
function addElement(title, hotLine) {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const aside = document.getElementById("history");

    const divParent = document.createElement("div");
    divParent.classList.add("asideproperty");
    divParent.innerHTML = `
        <div class="flex justify-between items-center pt-4 pb-4 pl-3 pr-3 bg-[#FAFAFA] rounded-lg">
            <div>
                <h1 class="font-bold text-[14px]">${title}</h1>
                <p class="text-[#5C5C5C]">${hotLine}</p>
            </div>
            <p class="text-[12px]">${time}</p>
        </div>
    `;

    aside.appendChild(divParent);
}

//Clear button
document.getElementById("clearAll").addEventListener("click",function(){
  const asides=document.querySelectorAll(".asideproperty")
   for(const aside of asides){
    aside.remove()
   }
})


// Copy button functionality
let copyCountNumber = 0; 
const copyButtons = document.querySelectorAll(".white"); 

copyButtons.forEach(button => {
    button.addEventListener("click", function() {
        const numberText = button.closest(".card").querySelector(".numbers").innerText;
        const input = document.createElement("input");
        input.value = numberText;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
        copyCountNumber++;
        const counter = document.getElementById("count-copy");
        if(counter) {
            counter.innerText = copyCountNumber;
        }

        alert(`Copied number: ${numberText}`);
    });
});

