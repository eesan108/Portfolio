const mikeBtn1 = document.getElementById("mikeFed");
const mikeBtn2 = document.getElementById("mikeBathroom");
const mikeBtn3 = document.getElementById("mikePetted");
const mikeBtn4 = document.getElementById("mikePlayedWith");
const willowBtn1 = document.getElementById("willowFed");
const willowBtn2 = document.getElementById("willowBathroom");
const willowBtn3 = document.getElementById("willowPetted");
const willowBtn4 = document.getElementById("willowPlayedWith");
const theoBtn1 = document.getElementById("theoFed");
const theoBtn2 = document.getElementById("theoBathroom");
const theoBtn3 = document.getElementById("theoPetted");
const theoBtn4 = document.getElementById("theoPlayedWith");
const allComplete = document.getElementById("allComplete");



const mikeTitle = document.getElementById("mikeTitle");
const willowTitle = document.getElementById("willowTitle");
const theoTitle = document.getElementById("theoTitle");

let mike = false;
let willow = false;
let theo = false;


//Store the dynamic tasks for each cat
let mikeTasks = [];
let willowTasks = [];
let theoTasks = [];

// function to add and remove tasks: vvv
function addTask(cat) {
    const container = document.getElementById(`${cat}Tasks`);
    let initialId = `${cat}Task`;

    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.id = "";
    console.log(mikeTasks, willowTasks, theoTasks);
    

    const newLabel = document.createElement('span');
    newLabel.class = "checkboxTitles"
    newLabel.id = ""
    const input = document.createElement('input');
    input.type = 'text';
    input.value = 'New Task';

    //add to the DOM
    container.appendChild(newCheckbox);
    container.appendChild(newLabel);
    container.appendChild(document.createElement('br'));

    newLabel.appendChild(input);

    function saveInput(cat) {
        const newText = input.value.replace(/\s+/g, '');

        if(newText === "input#NewTask" || "input"){
            console.log('error');
        }

        newLabel.innerHTML = newText;
        newCheckbox.id = newText;
    }

    if (cat === 'mike') {
        mikeTasks.push(newCheckbox);
        newCheckbox.addEventListener('change', checkMike);
    } else if (cat === 'willow') {
        willowTasks.push(newCheckbox);
        newCheckbox.addEventListener('change', checkWillow);
    } else if (cat === 'theo') {
        theoTasks.push(newCheckbox);
        newCheckbox.addEventListener('change', checkTheo);
    }

    input.addEventListener('keydown', function(e) {
        if(e.key === 'Enter') {
            saveInput();
            console.log(mikeTasks, willowTasks, theoTasks);

        }
    })

    input.addEventListener('blur', function(){
        setTimeout(saveInput, 0); //Delay to ensure 'blur' event finishes first
        console.log(mikeTasks, willowTasks, theoTasks);
    });
}

function removeTask(cat) {

    const removeMike = document.getElementById("removeMike"); //change these three to remove${cat}
    const removeWillow = document.getElementById("removeWillow");
    const removeTheo = document.getElementById("removeTheo"); //START HERE!!!!!!

    const container = document.getElementById(`${cat}Tasks`);
    const existingTitle = container.querySelector('#removeTitle');

    if(existingTitle){
        removeTitle.remove();
        
        if(removeMike) {
            removeMike.innerText = "Remove Task for Mike";
        } else if(removeWillow) {
            removeWillow.innerText = "Remove Task for Willow";
        } else if(removeTheo) {
            removeTheo.innerText = "Remove Task for Theo";
        }
        return;
    } else {
        const removeTitle = document.createElement('p');
        removeTitle.innerText = "Select items to remove";
        removeTitle.id = "removeTitle";

        if(removeMike) {
            removeMike.innerText = "Done";
        }
        if(removeWillow) {
            removeWillow.innerText = "Done";
        }
        if(removeTheo) {
            removeTheo.innerText = "Done";
        }
        
    
        const firstInput = container.querySelector('input');
    
        if (firstInput) {
            container.insertBefore(removeTitle, firstInput);
        } else {
            container.appendChild(removeTitle);
        }
    }
}
// function to edit task names: vvv
function editTask() {

}






//don't change VVVVVVVVVVVV
function checkMike(){
    const baseChecks = mikeBtn1.checked && mikeBtn2.checked && mikeBtn3.checked && mikeBtn4.checked
    const dynamicChecks = mikeTasks.every(task => task.checked);

    if (baseChecks && dynamicChecks) {
        console.log("Mike checkboxes are checked!");
        mike = true;
        console.log(mike);
    } else {
        mike = false;
    }
    checkAllCats();
    colorChange(mike, mikeTitle);
}
function checkWillow(){
    const baseChecks = willowBtn1.checked && willowBtn2.checked && willowBtn3.checked && willowBtn4.checked
    const dynamicChecks = willowTasks.every(task => task.checked);

    if (baseChecks && dynamicChecks) {
        console.log("Willow checkboxes are checked!");
        willow = true;
        console.log(willow);
    } else {
        willow = false;
    }
    checkAllCats();
    colorChange(willow, willowTitle);
}
function checkTheo(){
    const baseChecks = theoBtn1.checked && theoBtn2.checked && theoBtn3.checked && theoBtn4.checked
    const dynamicChecks = theoTasks.every(task => task.checked);

    if (baseChecks && dynamicChecks) {
        console.log("Theo checkboxes are checked!");
        theo = true;
        console.log(theo);
    } else {
        theo = false;
    }
    checkAllCats();
    colorChange(theo, theoTitle);
}
function checkAllCats(){
    if(mike && willow && theo){
        allComplete.style.visibility = "visible";
    } else {
        allComplete.style.visibility = "hidden";
    }
}

mikeBtn1.addEventListener('change', checkMike);
mikeBtn2.addEventListener('change', checkMike);
mikeBtn3.addEventListener('change', checkMike);
mikeBtn4.addEventListener('change', checkMike);
willowBtn1.addEventListener('change', checkWillow);
willowBtn2.addEventListener('change', checkWillow);
willowBtn3.addEventListener('change', checkWillow);
willowBtn4.addEventListener('change', checkWillow);
theoBtn1.addEventListener('change', checkTheo);
theoBtn2.addEventListener('change', checkTheo);
theoBtn3.addEventListener('change', checkTheo);
theoBtn4.addEventListener('change', checkTheo);

//Title color changer
function colorChange(cat, element){
    if(cat){
        element.style.backgroundColor = "forestGreen";
    } else {
        element.style.backgroundColor = "rgb(179, 58, 58)";
    }
}
