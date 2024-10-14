const mikeBtn1 = document.getElementById("bigMikeFed");
const mikeBtn2 = document.getElementById("bigMikeBathroom");
const mikeBtn3 = document.getElementById("bigMikePetted");
const mikeBtn4 = document.getElementById("bigMikePlayedWith");
const willowBtn1 = document.getElementById("willowFed");
const willowBtn2 = document.getElementById("willowBathroom");
const willowBtn3 = document.getElementById("willowPetted");
const willowBtn4 = document.getElementById("willowPlayedWith");
const theoBtn1 = document.getElementById("theoFed");
const theoBtn2 = document.getElementById("theoBathroom");
const theoBtn3 = document.getElementById("theoPetted");
const theoBtn4 = document.getElementById("theoPlayedWith");
const allComplete = document.getElementById("allComplete")

const mikeTitle = document.getElementById("mikeTitle");
const willowTitle = document.getElementById("willowTitle");
const theoTitle = document.getElementById("theoTitle");
let mike = false;
let willow = false;
let theo = false;

function checkMike(){
    if (mikeBtn1.checked && mikeBtn2.checked && mikeBtn3.checked && mikeBtn4.checked) {
        console.log("Mike checkboxes are checked!");
        mike = true;
        console.log(mike);
    } else {
        mike = false;
    }
    checkAllCats();
}
function checkWillow(){
    if (willowBtn1.checked && willowBtn2.checked && willowBtn3.checked && willowBtn4.checked) {
        console.log("Willow checkboxes are checked!");
        willow = true;
        console.log(willow);
    } else {
        willow = false;
    }
    checkAllCats();
}
function checkTheo(){
    if (theoBtn1.checked && theoBtn2.checked && theoBtn3.checked && theoBtn4.checked) {
        console.log("Theo checkboxes are checked!");
        theo = true;
        console.log(theo);
    } else {
        theo = false;
    }
    checkAllCats();
}
function checkAllCats(){
    if(mike && willow && theo){
        allComplete.style.visibility = "visible";
    } else {
        allComplete.style.visibility = "hidden";
    }
}
//Mike
mikeBtn1.addEventListener('change', checkMike);
mikeBtn2.addEventListener('change', checkMike);
mikeBtn3.addEventListener('change', checkMike);
mikeBtn4.addEventListener('change', checkMike);

//Willow
willowBtn1.addEventListener('change', checkWillow);
willowBtn2.addEventListener('change', checkWillow);
willowBtn3.addEventListener('change', checkWillow);
willowBtn4.addEventListener('change', checkWillow);
//THEO
theoBtn1.addEventListener('change', checkTheo);
theoBtn2.addEventListener('change', checkTheo);
theoBtn3.addEventListener('change', checkTheo);
theoBtn4.addEventListener('change', checkTheo);

//Title color changer
function colorChange(){
    if(mike){
        mikeTitle.style.backgroundColor = "yellow";
    }
}